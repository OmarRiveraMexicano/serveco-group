import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./GalleryService.css";

const AUTOPLAY_TIME = 4500;
const MINIMUM_SWIPE_DISTANCE = 50;

function CateringGallery({
    groups = [],
    serviceName = "Catering & Producción",
}) {
    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [isPaused, setIsPaused] =
        useState(false);

    const [prefersReducedMotion, setPrefersReducedMotion] =
        useState(false);

    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    /*
     * Convierte todos los grupos en una sola
     * colección de imágenes.
     *
     * Cada imagen conserva el título,
     * descripción y categoría de su grupo.
     */
    const slides = useMemo(() => {
        return groups.flatMap((group) =>
            group.images.map((image, imageIndex) => {
                const imageData =
                    typeof image === "string"
                        ? {
                              src: image,
                              alt: `${group.title}, imagen ${imageIndex + 1}`,
                          }
                        : {
                              src: image.src,
                              alt:
                                  image.alt ||
                                  `${group.title}, imagen ${imageIndex + 1}`,
                          };

                return {
                    id: `${group.id}-${imageIndex}`,
                    groupId: group.id,
                    eyebrow: group.eyebrow,
                    title: group.title,
                    description: group.description,
                    groupImageNumber: imageIndex + 1,
                    groupImageTotal:
                        group.images.length,
                    ...imageData,
                };
            })
        );
    }, [groups]);

    const totalSlides = slides.length;

    /*
     * Regresa a la primera imagen cuando
     * cambian los grupos.
     */
    useEffect(() => {
        setCurrentIndex(0);
    }, [groups]);

    /*
     * Detecta si el usuario prefiere
     * reducir las animaciones.
     */
    useEffect(() => {
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

    /*
     * Muestra la imagen anterior.
     */
    const showPreviousSlide = useCallback(() => {
        if (totalSlides <= 1) {
            return;
        }

        setCurrentIndex((current) =>
            current === 0
                ? totalSlides - 1
                : current - 1
        );
    }, [totalSlides]);

    /*
     * Muestra la imagen siguiente.
     */
    const showNextSlide = useCallback(() => {
        if (totalSlides <= 1) {
            return;
        }

        setCurrentIndex((current) =>
            current === totalSlides - 1
                ? 0
                : current + 1
        );
    }, [totalSlides]);

    /*
     * Movimiento automático.
     */
    useEffect(() => {
        if (
            totalSlides <= 1 ||
            isPaused ||
            prefersReducedMotion
        ) {
            return undefined;
        }

        const autoplay = window.setInterval(
            showNextSlide,
            AUTOPLAY_TIME
        );

        return () => {
            window.clearInterval(autoplay);
        };
    }, [
        currentIndex,
        isPaused,
        prefersReducedMotion,
        showNextSlide,
        totalSlides,
    ]);

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
     * Guarda la posición inicial
     * del gesto touch.
     */
    const handleTouchStart = (event) => {
        const touch = event.touches[0];

        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;

        setIsPaused(true);
    };

    /*
     * Detecta si el usuario deslizó
     * hacia la izquierda o derecha.
     */
    const handleTouchEnd = (event) => {
        if (
            touchStartX.current === null ||
            touchStartY.current === null
        ) {
            setIsPaused(false);

            return;
        }

        const touch = event.changedTouches[0];

        const movementX =
            touch.clientX - touchStartX.current;

        const movementY =
            touch.clientY - touchStartY.current;

        const isHorizontalGesture =
            Math.abs(movementX) >
            Math.abs(movementY);

        if (
            isHorizontalGesture &&
            Math.abs(movementX) >=
                MINIMUM_SWIPE_DISTANCE
        ) {
            if (movementX < 0) {
                showNextSlide();
            } else {
                showPreviousSlide();
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;

        setIsPaused(false);
    };

    /*
     * Limpia el gesto si el navegador
     * lo cancela.
     */
    const handleTouchCancel = () => {
        touchStartX.current = null;
        touchStartY.current = null;

        setIsPaused(false);
    };

    if (totalSlides === 0) {
        return null;
    }

    const currentSlide =
        slides[currentIndex];

    const previousIndex =
        currentIndex === 0
            ? totalSlides - 1
            : currentIndex - 1;

    const nextIndex =
        currentIndex === totalSlides - 1
            ? 0
            : currentIndex + 1;

    const previousSlide =
        slides[previousIndex];

    const nextSlide =
        slides[nextIndex];

    const currentImageUrl = getAssetUrl(
        currentSlide.src
    );

    return (
        <section
            className="catering-slider"
            aria-roledescription="carrusel"
            aria-label={`Galería de ${serviceName}`}
            tabIndex="0"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
            ========================= */}

            <div
                className="catering-slider__stage"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
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
                                previousSlide.src
                            )}
                            alt=""
                            draggable="false"
                        />

                        <span aria-hidden="true">
                            ←
                        </span>
                    </button>
                )}

                {/* =========================
                    IMAGEN PRINCIPAL
                ========================= */}

                <article
                    key={currentSlide.id}
                    className="catering-slider__slide"
                    aria-live="polite"
                >
                    <img
                        className="catering-slider__image"
                        src={currentImageUrl}
                        alt={currentSlide.alt}
                        draggable="false"
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
                </article>

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
                                nextSlide.src
                            )}
                            alt=""
                            draggable="false"
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

                    <div className="catering-slider__progress">
                        <span
                            key={`progress-${currentIndex}-${isPaused}`}
                            className={
                                isPaused ||
                                prefersReducedMotion
                                    ? "catering-slider__progress-bar catering-slider__progress-bar--paused"
                                    : "catering-slider__progress-bar"
                            }
                        />
                    </div>

                    <div className="catering-slider__arrows">
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

            {groups.length > 1 && (
                <div
                    className="catering-slider__categories"
                    aria-label="Categorías de la galería"
                >
                    {groups.map((group) => {
                        const groupIndex =
                            slides.findIndex(
                                (slide) =>
                                    slide.groupId ===
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
                                    setCurrentIndex(
                                        groupIndex
                                    )
                                }
                                aria-current={
                                    isActive
                                        ? "true"
                                        : undefined
                                }
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