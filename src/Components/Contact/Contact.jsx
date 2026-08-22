import {
    FiInstagram,
    FiLinkedin,
    FiMessageCircle,
} from "react-icons/fi";

import "./Contact.css";

const contactLinks = [
    {
        id: 1,
        label: "LinkedIn",
        username: "Serveco Group",
        href: "https://www.linkedin.com/company/serveco-group/",
        icon: FiLinkedin,
    },
    {
        id: 2,
        label: "WhatsApp",
        username: "Envíanos un mensaje",
        // Cambia el número. Usa código de país y sin espacios.
        href: "https://wa.me/5259476044",
        icon: FiMessageCircle,
    },
    {
        id: 3,
        label: "Instagram",
        username: "@serveco_group",
        href: "https://www.instagram.com/serveco_group/",
        icon: FiInstagram,
    },
];

function Contact() {
    return (
        <main className="contact">
            <div className="contact__glow" />

            <div className="contact__container">
                <header className="contact__header">
                    <span className="contact__eyebrow">
                        Contacto
                    </span>

                    <h1>
                        Hablemos de las necesidades de tu empresa.
                    </h1>

                    <p>
                        Conoce cómo nuestras soluciones pueden adaptarse
                        a tus objetivos y fortalecer tus operaciones.
                    </p>
                </header>

                <div className="contact__links">
                    {contactLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__link"
                            >
                                <span className="contact__icon">
                                    <Icon />
                                </span>

                                <span className="contact__information">
                                    <strong>{item.label}</strong>
                                    <small>{item.username}</small>
                                </span>

                                <span
                                    className="contact__arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

export default Contact;