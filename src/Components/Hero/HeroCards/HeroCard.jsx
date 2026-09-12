import { Link } from "react-router-dom";

import { getAssetUrl } from "../../utils/getAssetUrl";

function HeroCard({ card }) {
    const servicePath =
        `/servicios/${card.slug}`;

    const isProtectionTitle =
        card.slug === "equipo-proteccion";

    return (
        <article className="hero-card">
            <img
                src={getAssetUrl(card.image)}
                alt={card.title}
                className="hero-card__image"
            />

            <div className="hero-card__overlay" />

            <div className="hero-card__content">
                <h3
                    className={
                        isProtectionTitle
                            ? "hero-card__title hero-card__title--protection"
                            : "hero-card__title"
                    }
                >
                    {card.title}
                </h3>

                <Link
                    to={servicePath}
                    className="hero-card__button"
                    aria-label={`Ver ${card.title}`}
                >
                    <span aria-hidden="true">
                        →
                    </span>
                </Link>
            </div>

            <Link
                to={servicePath}
                className="hero-card__link"
                aria-label={`Conocer más sobre ${card.title}`}
            />
        </article>
    );
}

export default HeroCard;