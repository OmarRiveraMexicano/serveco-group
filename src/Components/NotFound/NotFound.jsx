import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle.js";
import "./NotFound.css";

function NotFound() {
    usePageTitle("Página no encontrada");

    return (
        <main className="not-found">
            {/* Luces de fondo ambientales */}
            <div
                className="not-found__glow not-found__glow--one"
                aria-hidden="true"
            />
            <div
                className="not-found__glow not-found__glow--two"
                aria-hidden="true"
            />

            <div className="not-found__content">
                <span className="not-found__eyebrow">
                    Error 404
                </span>

                <div
                    className="not-found__number"
                    aria-hidden="true"
                >
                    404
                </div>

                <h1>
                    Parece que esta página{" "}
                    <span>ya no está disponible.</span>
                </h1>

                <p>
                    La dirección puede ser incorrecta o el contenido pudo haberse
                    movido. Puedes regresar al inicio o continuar explorando nuestros servicios.
                </p>

                <div className="not-found__actions">
                    <Link
                        to="/"
                        className="not-found__primary"
                    >
                        <span>Regresar al inicio</span>
                        <svg
                            className="not-found__icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>

                    <Link
                        to="/servicios"
                        className="not-found__secondary"
                    >
                        Conocer los servicios
                    </Link>
                </div>
            </div>

            {/* Elemento gráfico decorativo inferior */}
            <div
                className="not-found__decoration"
                aria-hidden="true"
            >
                <span />
                <span />
                <span />
            </div>
        </main>
    );
}

export default NotFound;