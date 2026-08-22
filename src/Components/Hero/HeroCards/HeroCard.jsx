import { Link } from "react-router-dom";

function HeroCard({ card }) {
    return (
        <article className="hero-card">
            <img
                src={card.image}
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
                    to={`/servicios/${card.slug}`}
                    className="hero-card__button"
                    aria-label={`Ver ${card.title}`}
                >
                    →
                </Link>
            </div>

            <Link
                to={`/servicios/${card.slug}`}
                className="hero-card__link"
                aria-label={`Conocer más sobre ${card.title}`}
            />
        </article>
    );
}

export default HeroCard;