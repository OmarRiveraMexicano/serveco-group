import { Link } from "react-router-dom";

import { getAssetUrl } from "../../utils/getAssetUrl";

function HeroCard({ card }) {
    const servicePath = `/servicios/${card.slug}`;

    return (
        <article className="hero-card">
            <img
                src={getAssetUrl(card.image)}
                alt={card.title}
                className="hero-card__image"
            />

            <div className="hero-card__overlay" />

            <div className="hero-card__content">
                <span className="hero-card__category">
                    {card.category}
                </span>

                <h3 className="hero-card__title">
                    {card.title}
                </h3>

                <Link
                    to={servicePath}
                    className="hero-card__button"
                    aria-label={`Ver ${card.title}`}
                >
                    <span aria-hidden="true">→</span>
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