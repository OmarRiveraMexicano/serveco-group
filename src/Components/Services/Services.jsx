import { useState } from "react";
import { Link } from "react-router-dom";

import "./Services.css";

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
        image: "/images/rh/desarrollo-organizacional.png",
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
        image: "/images/catering/eventos-corporativos.png",
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
        image: "/images/proteccion/proteccion-personal.png",
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
        image: "/images/publicidad/textiles.png",
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
        image: "/images/prosalud/bienestar-fisico.png",
        path: "/servicios/prosalud",
    },
];

function Services() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="services" id="servicios">
            <div className="services__container">
                <header className="services__header">
                    <div>
                        <span className="services__eyebrow">
                            Integración de alto impacto
                        </span>

                        <h2>
                            Un solo aliado para
                            <span> necesidades distintas.</span>
                        </h2>
                    </div>

                    <p>
                        Integramos servicios especializados para
                        simplificar tu operación y generar resultados
                        que trascienden.
                    </p>
                </header>

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
                                    activeService.id === service.id
                                }
                                className={
                                    activeService.id === service.id
                                        ? "services__tab services__tab--active"
                                        : "services__tab"
                                }
                                onClick={() =>
                                    setActiveService(service)
                                }
                            >
                                <span>{service.number}</span>
                                <strong>{service.name}</strong>
                                <span className="services__tab-arrow">
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
                                src={activeService.image}
                                alt={activeService.name}
                            />

                            <div className="services__media-overlay" />

                            <span>{activeService.number}</span>
                        </div>

                        <div className="services__content">
                            <span className="services__category">
                                {activeService.name}
                            </span>

                            <h3>{activeService.title}</h3>

                            <p>{activeService.description}</p>

                            <ul>
                                {activeService.capabilities.map(
                                    (capability) => (
                                        <li key={capability}>
                                            <span>✓</span>
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
                                <span>→</span>
                            </Link>
                        </div>
                    </article>
                </div>

                <div className="services__values">
                    <div>
                        <strong>Enfoque humano</strong>
                        <span>Soluciones centradas en las personas.</span>
                    </div>

                    <div>
                        <strong>Resultados medibles</strong>
                        <span>Objetivos claros y seguimiento continuo.</span>
                    </div>

                    <div>
                        <strong>Confidencialidad y ética</strong>
                        <span>Procesos profesionales y responsables.</span>
                    </div>

                    <div>
                        <strong>Experiencia que genera valor</strong>
                        <span>Acompañamiento especializado.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;