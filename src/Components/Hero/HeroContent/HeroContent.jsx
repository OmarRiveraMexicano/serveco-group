import { useNavigate } from "react-router-dom";
import "./HeroContent.css";

function HeroContent() {
    const navigate = useNavigate();

    const goToServices = () => {
        navigate("/servicios");

        setTimeout(() => {
            document
                .getElementById("servicios")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 100);
    };

    return (
        <div className="hero__content">
            <p className="hero__eyebrow">
                Talento que transforma
            </p>
            <h1 className="hero__title">
                <span>INTEGRACIÓN</span>
                <span>DE ALTO IMPACTO</span>
            </h1>

            <p className="hero__description">
                Diseñamos soluciones estratégicas que optimizan tus
                operaciones, fortalecen tu empresa y generan resultados.
            </p>

            <button
                type="button"
                className="hero__cta"
                onClick={goToServices}
            >
                <span>Descubre cómo</span>
                <span className="hero__cta-arrow">→</span>
            </button>
        </div>
    );
}

export default HeroContent;