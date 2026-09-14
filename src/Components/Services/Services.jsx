import { useState } from "react";
import { Link } from "react-router-dom";

import { getAssetUrl } from "../utils/getAssetUrl.js";
import usePageTitle from "../hooks/usePageTitle.js";

import "./Services.css";


/* =========================
   SERVICES DATA
========================= */

const services = [
    {
        id: "rh",
        number: "01",
        name: "Recursos Humanos",
        title: "Gestión Humana y Organizacional",
        description:
            "Soluciones integrales para fortalecer el talento, los procesos y la cultura de tu organización.",
        capabilities: [
            "Capacitación",
            "Reclutamiento nacional y LATAM",
            "Desarrollo organizacional",
            "Pruebas psicométricas",
            "Estudios socioeconómicos",
            "Normas Mexicanas STPS",
            "Nóminas",
            "Team building corporativo",
        ],
        image: "/images/rh.png",
        path: "/servicios/rh",
    },
    {
        id: "catering",
        number: "02",
        name: "Catering y Producción",
        title: "Experiencias corporativas integrales",
        description:
            "Coordinamos alimentos, producción y personal para crear eventos profesionales y memorables.",
        capabilities: [
            "Coffee break corporativo",
            "Lunch box corporativo",
            "Comidas de 3 y 4 tiempos",
            "Mobiliario y audio",
            "Display y video stands",
            "Staff operativo",
            "Eventos temáticos",
            "Salones, jardines y terrazas",
        ],
        image: "/images/catering.png",
        path: "/servicios/catering",
    },
    {
        id: "equipo-proteccion",
        number: "03",
        name: "Protección Personal",
        title: "Seguridad para cada entorno laboral",
        description:
            "Suministramos artículos de protección y seguridad adaptados a las actividades de tu personal.",
        capabilities: [
            "Cascos y caretas",
            "Botas industriales",
            "Guantes especializados",
            "Lentes y protección auditiva",
            "Extintores y alarmas",
            "Señalización",
            "Uniformes y casacas",
            "Asesoría especializada",
        ],
        image: "/images/proteccion.png",
        path: "/servicios/equipo-proteccion",
    },
    {
        id: "publicidad",
        number: "04",
        name: "Artículos Publicitarios",
        title: "Tu marca en productos que permanecen",
        description:
            "Creamos artículos personalizados para fortalecer la identidad y presencia de tu empresa.",
        capabilities: [
            "Grabado láser",
            "Termos y tazas",
            "Plumas y agendas",
            "Gorras bordadas",
            "Playeras impresas",
            "Credenciales y cordones",
            "Papelería corporativa",
            "Banners y banderas",
        ],
        image: "/images/publicidad.png",
        path: "/servicios/publicidad",
    },
    {
        id: "prosalud",
        number: "05",
        name: "Servicios Pro Salud",
        title: "Bienestar integral para tu equipo",
        description:
            "Servicios enfocados en el bienestar físico, mental y nutricional de tus colaboradores.",
        capabilities: [
            "Fisioterapia",
            "Quiropráctica",
            "Optometría",
            "Terapia psicológica",
            "Nutriología",
            "Campañas de vacunación",
            "Insumos médicos",
            "Muebles ergonómicos",
        ],
        image: "/images/salud.png",
        path: "/servicios/prosalud",
    },
];


/* =========================
   CLIENTS DATA
========================= */

const clients = [
    {
        id: 1,
        name: "Allianz",
        logo: "/images/clients/allianz.png",
    },
    {
        id: 2,
        name: "Amazon",
        logo: "/images/clients/amazon.png",
    },
    {
        id: 3,
        name: "Bridgestone",
        logo: "/images/clients/bridgestone.png",
    },
    {
        id: 4,
        name: "Coca-Cola",
        logo: "/images/clients/cocacola.png",
    },
    {
        id: 5,
        name: "MetLife",
        logo: "/images/clients/metlife.png",
    },
    {
        id: 6,
        name: "Totalplay",
        logo: "/images/clients/totalplay.png",
    },
    {
        id: 7,
        name: "DB Menos",
        logo: "/images/clients/db.png",
    },
    {
        id: 8,
        name: "Crediclub",
        logo: "/images/clients/crediclub.png",
    },
    {
        id: 9,
        name: "AXA",
        logo: "/images/clients/axa.png",
    },
    {
        id: 10,
        name: "Quálitas",
        logo: "/images/clients/qualitas.png",
    },
    {
        id: 11,
        name: "Michelin",
        logo: "/images/clients/michelin.png",
    },
    {
        id: 12,
        name: "Argos",
        logo: "/images/clients/saludArgos.png",
    },
    {
        id: 13,
        name: "Nissan",
        logo: "/images/clients/nissan.png",
    },
    {
        id: 14,
        name: "trimex",
        logo: "/images/clients/trimex.png",
    }

];


/* =========================
   COMPONENT
========================= */

function Services() {
    const [activeService, setActiveService] =
        useState(services[0]);

    usePageTitle("Servicios");

    return (
        <section
            className="services"
            id="servicios"
        >
            <div className="services__container">
                {/* =========================
                    HEADER
                ========================= */}

                <header className="services__header">
                    <div>
                        <span className="services__eyebrow">
                            Integración de alto impacto
                        </span>

                        <h2>
                            Un solo aliado para
                            <span>
                                {" "}
                                necesidades distintas.
                            </span>
                        </h2>
                    </div>

                    <p>
                        Integramos servicios especializados
                        para simplificar tu operación y
                        generar resultados que trascienden.
                    </p>
                </header>

                {/* =========================
                    SERVICES
                ========================= */}

                <div className="services__layout">
                    <div
                        className="services__tabs"
                        role="tablist"
                        aria-label="Áreas de servicio"
                    >
                        {services.map((service) => (
                            <button
                                key={service.id}
                                type="button"
                                role="tab"
                                aria-selected={
                                    activeService.id ===
                                    service.id
                                }
                                className={
                                    activeService.id ===
                                    service.id
                                        ? "services__tab services__tab--active"
                                        : "services__tab"
                                }
                                onClick={() =>
                                    setActiveService(
                                        service
                                    )
                                }
                            >
                                <span>
                                    {service.number}
                                </span>

                                <strong>
                                    {service.name}
                                </strong>

                                <span
                                    className="services__tab-arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </button>
                        ))}
                    </div>

                    <article
                        className="services__panel"
                        key={activeService.id}
                    >
                        <div className="services__media">
                            <img
                                src={getAssetUrl(
                                    activeService.image
                                )}
                                alt={activeService.name}
                            />

                            <div className="services__media-overlay" />

                            <span aria-hidden="true">
                                {activeService.number}
                            </span>
                        </div>

                        <div className="services__content">
                            <span className="services__category">
                                {activeService.name}
                            </span>

                            <h3>
                                {activeService.title}
                            </h3>

                            <p>
                                {activeService.description}
                            </p>

                            <ul>
                                {activeService.capabilities.map(
                                    (capability) => (
                                        <li key={capability}>
                                            <span
                                                aria-hidden="true"
                                            >
                                                ✓
                                            </span>

                                            {capability}
                                        </li>
                                    )
                                )}
                            </ul>

                            <Link
                                to={activeService.path}
                                className="services__link"
                            >
                                Conocer el servicio

                                <span aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                    </article>
                </div>

                {/* =========================
                    VALUES
                ========================= */}

                <div className="services__values">
                    <div>
                        <strong>
                            Enfoque humano
                        </strong>

                        <span>
                            Soluciones centradas en las
                            personas.
                        </span>
                    </div>

                    <div>
                        <strong>
                            Resultados medibles
                        </strong>

                        <span>
                            Objetivos claros y seguimiento
                            continuo.
                        </span>
                    </div>

                    <div>
                        <strong>
                            Confidencialidad y ética
                        </strong>

                        <span>
                            Procesos profesionales y
                            responsables.
                        </span>
                    </div>

                    <div>
                        <strong>
                            Experiencia que genera valor
                        </strong>

                        <span>
                            Acompañamiento especializado.
                        </span>
                    </div>
                </div>

                {/* =========================
                    CLIENTS CAROUSEL
                ========================= */}

                <section
                    className="services__clients"
                    aria-labelledby="clients-title"
                >
                    <div className="services__clients-heading">
                        <span>
                            Principales colaboraciones
                        </span>

                        <h3 id="clients-title">
                            Empresas que confían
                            <br />
                            en nosotros
                        </h3>
                    </div>

                    <div className="services__clients-viewport">
                        <div className="services__clients-track">
                            {/* Lista original */}

                            <div className="services__clients-group">
                                {clients.map((client) => (
                                    <div
                                        className="services__client"
                                        key={client.id}
                                    >
                                        <img
                                            src={getAssetUrl(
                                                client.logo
                                            )}
                                            alt={`Logo de ${client.name}`}
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Copia para animación infinita */}

                            <div
                                className="services__clients-group services__clients-group--copy"
                                aria-hidden="true"
                            >
                                {clients.map((client) => (
                                    <div
                                        className="services__client"
                                        key={`copy-${client.id}`}
                                    >
                                        <img
                                            src={getAssetUrl(
                                                client.logo
                                            )}
                                            alt=""
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Services;