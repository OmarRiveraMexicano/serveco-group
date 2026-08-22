import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { services } from "../data/services";
import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./ServiceDetail.css";

function ServiceDetail() {
    const { serviceSlug } = useParams();

    const service = services[serviceSlug];

    const [showScrollButton, setShowScrollButton] =
        useState(false);

    /*
     * Regresa al inicio cuando se abre o cambia el servicio.
     */
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [serviceSlug]);

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


    const whatsappNumber = "5559476044";

    const whatsappMessage =
        `Hola, me interesa recibir información sobre el servicio de ${service.title}.`;

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

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
                        className={`service-section ${
                            index % 2 !== 0
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

                            <ul>
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
                                src={getAssetUrl(section.image)}
                                alt={section.title}
                                loading="lazy"
                            />
                        </div>
                    </section>
                ))}
            </div>

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
                    aria-label={`Contactar por WhatsApp sobre ${service.title}`}
                >
                    Contactar por WhatsApp

                    <span aria-hidden="true">
                        →
                    </span>
                </a>
            </section>

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