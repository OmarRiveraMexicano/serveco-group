import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { services } from "../data/services";
import { getAssetUrl } from "../utils/getAssetUrl.js";
import usePageTitle from "../hooks/usePageTitle.js";

import ServiceGallery from "../ServiceGallery/ServiceGallery.jsx";
import CateringGallery from "./GalleryService.jsx";

import "./ServiceDetail.css";

function ServiceDetail() {
    const { serviceSlug } = useParams();

    const service = services[serviceSlug];

    const [showScrollButton, setShowScrollButton] =
        useState(false);

    const [showPrivacyModal, setShowPrivacyModal] =
        useState(false);

    /*
     * Regresa al inicio cuando abre la página
     * o cuando cambia el servicio.
     */
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [serviceSlug]);

    /*
     * Cambia el título de la pestaña.
     */
    usePageTitle(service?.title || "Servicio");

    /*
     * Controla cuándo aparece el botón flotante.
     */
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /*
     * Cierra el modal con la tecla Escape.
     */
    useEffect(() => {
        if (!showPrivacyModal) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowPrivacyModal(false);
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        /*
         * Evita que la página se desplace detrás
         * del modal.
         */
        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow =
                previousOverflow;
        };
    }, [showPrivacyModal]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (sectionId) => {
        document
            .getElementById(sectionId)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    /*
     * Si el servicio no existe.
     */
    if (!service) {
        return (
            <main className="service-not-found">
                <h1>Servicio no encontrado</h1>

                <Link to="/">
                    Regresar al inicio
                </Link>
            </main>
        );
    }

    /*
     * WhatsApp:
     * 52 es el código de México.
     * Después se coloca el número a 10 dígitos.
     */
    const whatsappNumber = "525559476044";

    const whatsappMessage =
        `Hola, me interesa recibir información sobre el servicio de ${service.title}.`;

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

    /*
     * Evita que el enlace abra WhatsApp
     * inmediatamente y muestra el modal.
     */
    const handleWhatsAppClick = (event) => {
        event.preventDefault();

        setShowPrivacyModal(true);
    };

    const closePrivacyModal = () => {
        setShowPrivacyModal(false);
    };

    /*
     * Cierra el modal y abre WhatsApp
     * cuando el usuario acepta.
     */
    const acceptPrivacyNotice = () => {
        setShowPrivacyModal(false);

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <main className="service-detail">
            {/* =========================
                HERO
            ========================= */}

            <section className="service-hero">
                <img
                    src={getAssetUrl(service.heroImage)}
                    alt={service.title}
                    className="service-hero__image"
                />

                <div className="service-hero__overlay" />

                <div className="service-hero__container">
                    <div className="service-hero__content">
                        <span className="service-hero__eyebrow">
                            {service.eyebrow}
                        </span>

                        <h1>{service.title}</h1>

                        <p>{service.description}</p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="service-hero__button"
                            onClick={handleWhatsAppClick}
                            aria-label={`Solicitar información sobre ${service.title} por WhatsApp`}
                        >
                            Solicitar información

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================
                NAVEGACIÓN INTERNA
            ========================= */}

            <nav
                className="service-navigation"
                aria-label="Secciones del servicio"
            >
                <div className="service-navigation__container">
                    {service.sections.map((section) => (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() =>
                                scrollToSection(section.id)
                            }
                        >
                            {section.title}
                        </button>
                    ))}
                </div>
            </nav>

            {/* =========================
                SECCIONES
            ========================= */}

            <div className="service-sections">
                {service.sections.map((section, index) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className={`service-section ${index % 2 !== 0
                                ? "service-section--reverse"
                                : ""
                            }`}
                    >
                        <div className="service-section__content">
                            <span className="service-section__number">
                                {section.number}
                            </span>

                            <h2>{section.title}</h2>

                            <p>{section.description}</p>

                            <ul
                                className={
                                    section.id ===
                                        "seguridad-industrial"
                                        ? "service-section__items service-section__items--two-columns"
                                        : "service-section__items"
                                }
                            >
                                {section.items.map((item) => (
                                    <li key={item}>
                                        <span aria-hidden="true">
                                            ✓
                                        </span>

                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="service-section__media">
                            <img
                                src={getAssetUrl(
                                    section.image
                                )}
                                alt={section.title}
                                loading="lazy"
                            />
                        </div>
                    </section>
                ))}
            </div>

            {/* =========================
                GALERÍA
            ========================= */}

            {service.slug === "catering" || service.slug === "equipo-proteccion" || service.slug === "publicidad" ? (
                service.galleryGroups?.length > 0 && (
                    <CateringGallery
                        groups={service.galleryGroups}
                        serviceName={service.title}
                    />
                )
            ) : (
                service.galleryImages?.length > 0 && (
                    <ServiceGallery
                        images={service.galleryImages}
                        serviceName={service.title}
                    />
                )
            )}

            {/* =========================
                CTA FINAL
            ========================= */}

            <section className="service-cta">
                <div>
                    <span>
                        Hablemos de tu proyecto
                    </span>

                    <h2>
                        Creamos soluciones adaptadas a las
                        necesidades de tu empresa.
                    </h2>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    aria-label={`Contactar por WhatsApp sobre ${service.title}`}
                >
                    Contactar por WhatsApp

                    <span aria-hidden="true">
                        →
                    </span>
                </a>
            </section>

            {/* =========================
                MODAL DE PRIVACIDAD
            ========================= */}

            {showPrivacyModal && (
                <div
                    className="privacy-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="privacy-modal-title"
                    onMouseDown={closePrivacyModal}
                >
                    <div
                        className="privacy-modal__content"
                        onMouseDown={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <button
                            type="button"
                            className="privacy-modal__close"
                            onClick={closePrivacyModal}
                            aria-label="Cerrar aviso"
                        >
                            ×
                        </button>

                        <div className="privacy-modal__icon">
                            <span aria-hidden="true">
                                ✓
                            </span>
                        </div>

                        <span className="privacy-modal__eyebrow">
                            Antes de continuar
                        </span>

                        <h2 id="privacy-modal-title">
                            Tu privacidad es importante
                        </h2>

                        <p>
                            Al continuar a WhatsApp,
                            aceptas nuestro Aviso de
                            Privacidad y el tratamiento de
                            tus datos para atender tu
                            solicitud.
                        </p>

                        <Link
                            to="/aviso-de-privacidad"
                            className="privacy-modal__link"
                            onClick={closePrivacyModal}
                        >
                            Consultar Aviso de Privacidad

                            <span aria-hidden="true">
                                ↗
                            </span>
                        </Link>

                        <div className="privacy-modal__actions">
                            <button
                                type="button"
                                className="privacy-modal__cancel"
                                onClick={closePrivacyModal}
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="privacy-modal__accept"
                                onClick={
                                    acceptPrivacyNotice
                                }
                            >
                                Aceptar y continuar

                                <span aria-hidden="true">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* =========================
                REGRESAR ARRIBA
            ========================= */}

            {showScrollButton && (
                <button
                    type="button"
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Regresar al inicio de la página"
                    title="Regresar al inicio"
                >
                    ↑
                </button>
            )}
        </main>
    );
}

export default ServiceDetail;