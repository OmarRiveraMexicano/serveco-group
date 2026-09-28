import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./GalleryService.css";

const MINIMUM_SWIPE_DISTANCE = 50;

/*
 * Mantiene un índice dentro del rango
 * (0 → total - 1), dando la vuelta si hace falta.
 */
const wrapIndex = (index, total) =>
    (index + total) % total;

/* =========================
   HOOKS
========================= */

/*
 * Detecta si el usuario prefiere
 * reducir las animaciones.
 *
 * Se lee en el estado inicial para que
 * el autoplay nunca arranque por un instante
 * en usuarios que lo tienen desactivado.
 */
function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] =
        useState(() =>
            typeof window !== "undefined" &&
            typeof window.matchMedia === "function"
                ? window.matchMedia(
                      "(prefers-reduced-motion: reduce)"
                  ).matches
                : false
        );

    useEffect(() => {
        if (typeof window.matchMedia !== "function") {
            return undefined;
        }

        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const updatePreference = () => {
            setPrefersReducedMotion(
                mediaQuery.matches
            );
        };

        updatePreference();

        mediaQuery.addEventListener(
            "change",
            updatePreference
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updatePreference
            );
        };
    }, []);

    return prefersReducedMotion;
}

/*
 * Gesto de deslizar (swipe) horizontal.
 *
 * Avisa con onTouchingChange cuando el dedo
 * está sobre el carrusel, para poder pausarlo.
 */
function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    onTouchingChange,
}) {
    const startPoint = useRef(null);

    const reset = useCallback(() => {
        startPoint.current = null;

        onTouchingChange(false);
    }, [onTouchingChange]);

    const onTouchStart = useCallback(
        (event) => {
            const touch = event.touches[0];

            startPoint.current = {
                x: touch.clientX,
                y: touch.clientY,
            };

            onTouchingChange(true);
        },
        [onTouchingChange]
    );

    const onTouchEnd = useCallback(
        (event) => {
            if (startPoint.current) {
                const touch = event.changedTouches[0];

                const movementX =
                    touch.clientX -
                    startPoint.current.x;

                const movementY =
                    touch.clientY -
                    startPoint.current.y;

                const isHorizontalGesture =
                    Math.abs(movementX) >
                    Math.abs(movementY);

                if (
                    isHorizontalGesture &&
                    Math.abs(movementX) >=
                        MINIMUM_SWIPE_DISTANCE
                ) {
                    if (movementX < 0) {
                        onSwipeLeft();
                    } else {
                        onSwipeRight();
                    }
                }
            }

            reset();
        },
        [onSwipeLeft, onSwipeRight, reset]
    );

    return {
        onTouchStart,
        onTouchEnd,
        onTouchCancel: reset,
    };
}

/* =========================
   ICONOS
========================= */

function PauseIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"
                fill="currentColor"
            />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M8 5.5v13l10.5-6.5z"
                fill="currentColor"
            />
        </svg>
    );
}

/* =========================
   COMPONENTE
========================= */

/*
 * Cada imagen de un grupo puede ser:
 *   - un string con la ruta, o
 *   - un objeto { src, alt, thumb }
 *
 * "thumb" es opcional: una versión más liviana
 * que se usa en las vistas previas laterales.
 */
function CateringGallery({
    groups = [],
    serviceName = "Catering & Producción",
}) {
    const [slideState, setSlideState] = useState({
        index: 0,
        direction: "next",
    });

    /*
     * Motivos por los que el autoplay se detiene:
     *  - el mouse está encima
     *  - el foco de teclado está dentro
     *  - hay un dedo sobre el carrusel
     *  - el usuario lo pausó con el botón
     */
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isTouching, setIsTouching] = useState(false);
    const [isUserPaused, setIsUserPaused] =
        useState(false);

    const prefersReducedMotion = useReducedMotion();

    const categoriesRef = useRef(null);

    /*
     * Convierte todos los grupos en una sola
     * colección de imágenes.
     *
     * Cada imagen conserva el título,
     * descripción y categoría de su grupo.
     */
    const slides = useMemo(() => {
        return groups.flatMap((group) => {
            const images = group.images ?? [];

            return images.map((image, imageIndex) => {
                const imageData =
                    typeof image === "string"
                        ? { src: image }
                        : image;

                return {
                    id: `${group.id}-${imageIndex}`,
                    groupId: group.id,
                    eyebrow: group.eyebrow,
                    title: group.title,
                    description: group.description,
                    groupImageNumber: imageIndex + 1,
                    groupImageTotal: images.length,
                    src: imageData.src,
                    thumb:
                        imageData.thumb ?? imageData.src,
                    alt:
                        imageData.alt ||
                        `${group.title}, imagen ${imageIndex + 1}`,
                };
            });
        });
    }, [groups]);

    const totalSlides = slides.length;

    /*
     * Índice de la primera imagen de cada grupo.
     * Se calcula una sola vez en lugar de buscar
     * con findIndex dentro de cada render.
     */
    const groupStartIndexes = useMemo(() => {
        const indexes = new Map();

        slides.forEach((slide, index) => {
            if (!indexes.has(slide.groupId)) {
                indexes.set(slide.groupId, index);
            }
        });

        return indexes;
    }, [slides]);

    /*
     * Solo los grupos que tienen imágenes
     * aparecen como categoría.
     */
    const visibleGroups = useMemo(
        () =>
            groups.filter((group) =>
                groupStartIndexes.has(group.id)
            ),
        [groups, groupStartIndexes]
    );

    /*
     * Regresa a la primera imagen solo cuando
     * cambia el contenido real de los grupos.
     *
     * Se compara una "firma" en texto y no la
     * referencia del array, así un padre que
     * recrea `groups` en cada render no reinicia
     * el carrusel.
     */
    const groupsSignature = groups
        .map(
            (group) =>
                `${group.id}:${group.images?.length ?? 0}`
        )
        .join("|");

    useEffect(() => {
        setSlideState((current) =>
            current.index === 0
                ? current
                : { index: 0, direction: "next" }
        );
    }, [groupsSignature]);

    /*
     * Protege contra un índice fuera de rango
     * (por ejemplo, si el número de imágenes baja).
     */
    const currentIndex =
        totalSlides > 0
            ? Math.min(
                  slideState.index,
                  totalSlides - 1
              )
            : 0;

    /*
     * Muestra la imagen anterior.
     */
    const showPreviousSlide = useCallback(() => {
        if (totalSlides <= 1) {
            return;
        }

        setSlideState((current) => ({
            index: wrapIndex(
                current.index - 1,
                totalSlides
            ),
            direction: "previous",
        }));
    }, [totalSlides]);

    /*
     * Muestra la imagen siguiente.
     */
    const showNextSlide = useCallback(() => {
        if (totalSlides <= 1) {
            return;
        }

        setSlideState((current) => ({
            index: wrapIndex(
                current.index + 1,
                totalSlides
            ),
            direction: "next",
        }));
    }, [totalSlides]);

    const swipeHandlers = useSwipe({
        onSwipeLeft: showNextSlide,
        onSwipeRight: showPreviousSlide,
        onTouchingChange: setIsTouching,
    });

    /*
     * Estado del movimiento automático.
     *
     * isRotating es lo único que decide si la barra
     * de progreso avanza. Cuando la barra termina,
     * pasa a la siguiente imagen (ver más abajo),
     * así barra y cambio de imagen nunca se
     * desincronizan.
     */
    const isHeld = isHovered || isFocused || isTouching;

    const canAutoplay =
        totalSlides > 1 && !prefersReducedMotion;

    const isRotating =
        canAutoplay && !isUserPaused && !isHeld;

    const handleProgressEnd = () => {
        if (isRotating) {
            showNextSlide();
        }
    };

    /*
     * Índices vecinos para las vistas previas
     * y la precarga.
     */
    const currentSlide = slides[currentIndex];

    const previousSlide =
        slides[wrapIndex(currentIndex - 1, totalSlides)];

    const nextSlide =
        slides[wrapIndex(currentIndex + 1, totalSlides)];

    const previousSrc = previousSlide?.src;
    const nextSrc = nextSlide?.src;

    /*
     * Precarga la imagen anterior y la siguiente
     * para que el cambio no parpadee.
     */
    useEffect(() => {
        if (totalSlides <= 1) {
            return undefined;
        }

        [previousSrc, nextSrc].forEach((src) => {
            if (src) {
                const preloadedImage = new Image();

                preloadedImage.src = getAssetUrl(src);
            }
        });

        return undefined;
    }, [previousSrc, nextSrc, totalSlides]);

    /*
     * Mantiene visible la categoría activa cuando
     * hay más chips de los que caben en pantalla.
     *
     * Se mueve el scroll del contenedor a mano
     * (y no con scrollIntoView) para que la página
     * nunca salte mientras el usuario lee otra cosa.
     */
    const activeGroupId = currentSlide?.groupId;

    useEffect(() => {
        const container = categoriesRef.current;

        const activeButton = container?.querySelector(
            '[aria-pressed="true"]'
        );

        if (!container || !activeButton) {
            return;
        }

        const target =
            activeButton.offsetLeft -
            (container.clientWidth -
                activeButton.offsetWidth) /
                2;

        container.scrollTo({
            left: Math.max(0, target),
            behavior: prefersReducedMotion
                ? "auto"
                : "smooth",
        });
    }, [activeGroupId, prefersReducedMotion]);

    /*
     * Permite navegar con las flechas
     * izquierda y derecha del teclado.
     */
    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();

            showPreviousSlide();
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();

            showNextSlide();
        }
    };

    /*
     * Hover: solo con mouse. En pantallas táctiles
     * el navegador simula eventos de mouse que
     * dejarían el carrusel pausado para siempre.
     */
    const handlePointerEnter = (event) => {
        if (event.pointerType === "mouse") {
            setIsHovered(true);
        }
    };

    /*
     * Foco: solo pausa con foco de teclado
     * (:focus-visible). Un clic con el mouse en una
     * flecha no debe detener el autoplay.
     */
    const handleFocus = (event) => {
        let isKeyboardFocus = true;

        try {
            isKeyboardFocus =
                event.target.matches(":focus-visible");
        } catch {
            isKeyboardFocus = true;
        }

        if (isKeyboardFocus) {
            setIsFocused(true);
        }
    };

    const handleBlur = (event) => {
        if (
            !event.currentTarget.contains(
                event.relatedTarget
            )
        ) {
            setIsFocused(false);
        }
    };

    if (totalSlides === 0) {
        return null;
    }

    return (
        <section
            className="catering-slider"
            aria-roledescription="carrusel"
            aria-label={`Galería de ${serviceName}`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={() => setIsHovered(false)}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            {/* =========================
                HEADER
            ========================= */}

            <header
                key={`header-${currentSlide.groupId}`}
                className="catering-slider__header"
            >
                <div>
                    <span className="catering-slider__eyebrow">
                        {currentSlide.eyebrow}
                    </span>

                    <h2>
                        {currentSlide.title}
                    </h2>
                </div>

                <p>
                    {currentSlide.description}
                </p>
            </header>

            {/* =========================
                STAGE

                aria-live="off" mientras el carrusel
                rota solo, para que un lector de
                pantalla no anuncie cada imagen cada
                4.5 segundos. Cuando el usuario
                navega (o pausa), se anuncia.
            ========================= */}

            <div
                className="catering-slider__stage"
                aria-live={isRotating ? "off" : "polite"}
                {...swipeHandlers}
            >
                {/* =========================
                    PREVIEW ANTERIOR
                ========================= */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="catering-slider__preview catering-slider__preview--previous"
                        onClick={showPreviousSlide}
                        aria-label="Mostrar imagen anterior"
                    >
                        <img
                            src={getAssetUrl(
                                previousSlide.thumb
                            )}
                            alt=""
                            draggable="false"
                            decoding="async"
                        />

                        <span aria-hidden="true">
                            ←
                        </span>
                    </button>
                )}

                {/* =========================
                    IMAGEN PRINCIPAL
                ========================= */}

                <div
                    key={currentSlide.id}
                    className={
                        slideState.direction === "previous"
                            ? "catering-slider__slide catering-slider__slide--from-left"
                            : "catering-slider__slide"
                    }
                    role="group"
                    aria-roledescription="diapositiva"
                    aria-label={`${currentIndex + 1} de ${totalSlides}`}
                >
                    <img
                        className="catering-slider__image"
                        src={getAssetUrl(currentSlide.src)}
                        alt={currentSlide.alt}
                        draggable="false"
                        decoding="async"
                    />

                    <div className="catering-slider__caption">
                        <div>
                            <span>
                                {String(
                                    currentSlide.groupImageNumber
                                ).padStart(2, "0")}
                            </span>

                            <strong>
                                {currentSlide.title}
                            </strong>
                        </div>

                        <span>
                            {serviceName}
                        </span>
                    </div>
                </div>

                {/* =========================
                    PREVIEW SIGUIENTE
                ========================= */}

                {totalSlides > 1 && (
                    <button
                        type="button"
                        className="catering-slider__preview catering-slider__preview--next"
                        onClick={showNextSlide}
                        aria-label="Mostrar imagen siguiente"
                    >
                        <img
                            src={getAssetUrl(
                                nextSlide.thumb
                            )}
                            alt=""
                            draggable="false"
                            decoding="async"
                        />

                        <span aria-hidden="true">
                            →
                        </span>
                    </button>
                )}
            </div>

            {/* =========================
                CONTROLES
            ========================= */}

            {totalSlides > 1 && (
                <div className="catering-slider__controls">
                    <div className="catering-slider__counter">
                        <strong>
                            {String(
                                currentIndex + 1
                            ).padStart(2, "0")}
                        </strong>

                        <span>/</span>

                        <span>
                            {String(
                                totalSlides
                            ).padStart(2, "0")}
                        </span>
                    </div>

                    <div
                        className="catering-slider__progress"
                        aria-hidden="true"
                    >
                        <span
                            key={`progress-${currentIndex}`}
                            className={
                                isRotating
                                    ? "catering-slider__progress-bar"
                                    : "catering-slider__progress-bar catering-slider__progress-bar--paused"
                            }
                            onAnimationEnd={
                                handleProgressEnd
                            }
                        />
                    </div>

                    <div className="catering-slider__arrows">
                        {canAutoplay && (
                            <button
                                type="button"
                                onClick={() =>
                                    setIsUserPaused(
                                        (paused) =>
                                            !paused
                                    )
                                }
                                aria-label={
                                    isUserPaused
                                        ? "Reanudar rotación automática"
                                        : "Pausar rotación automática"
                                }
                            >
                                {isUserPaused ? (
                                    <PlayIcon />
                                ) : (
                                    <PauseIcon />
                                )}
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={
                                showPreviousSlide
                            }
                            aria-label="Imagen anterior"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            onClick={showNextSlide}
                            aria-label="Imagen siguiente"
                        >
                            →
                        </button>
                    </div>
                </div>
            )}

            {/* =========================
                CATEGORÍAS
            ========================= */}

            {visibleGroups.length > 1 && (
                <div
                    ref={categoriesRef}
                    className="catering-slider__categories"
                    role="group"
                    aria-label="Categorías de la galería"
                >
                    {visibleGroups.map((group) => {
                        const groupStart =
                            groupStartIndexes.get(
                                group.id
                            );

                        const isActive =
                            currentSlide.groupId ===
                            group.id;

                        return (
                            <button
                                key={group.id}
                                type="button"
                                className={
                                    isActive
                                        ? "catering-slider__category catering-slider__category--active"
                                        : "catering-slider__category"
                                }
                                onClick={() =>
                                    setSlideState({
                                        index: groupStart,
                                        direction:
                                            groupStart <
                                            currentIndex
                                                ? "previous"
                                                : "next",
                                    })
                                }
                                aria-pressed={isActive}
                            >
                                {group.title}
                            </button>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default CateringGallery;