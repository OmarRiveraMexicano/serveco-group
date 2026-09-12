import { Link } from "react-router-dom";

import usePageTitle from "../hooks/usePageTitle.js";

import "./NotFound.css";

function NotFound() {
    usePageTitle("Página no encontrada");

    return (
        <main className="not-found">
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
                    Página no encontrada
                </span>

                <div
                    className="not-found__number"
                    aria-hidden="true"
                >
                    404
                </div>

                <h1>
                    Parece que esta página
                    <span> ya no está disponible.</span>
                </h1>

                <p>
                    La dirección puede ser incorrecta o el contenido
                    pudo haberse movido. Puedes regresar al inicio y
                    continuar explorando nuestros servicios.
                </p>

                <div className="not-found__actions">
                    <Link
                        to="/"
                        className="not-found__primary"
                    >
                        Regresar al inicio
                        <span aria-hidden="true">→</span>
                    </Link>

                    <Link
                        to="/servicios"
                        className="not-found__secondary"
                    >
                        Conocer los servicios
                    </Link>
                </div>
            </div>

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