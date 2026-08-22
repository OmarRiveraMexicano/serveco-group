import "./HeroCards.css"
import HeroCard from "./HeroCard";
import { heroCards } from "../../data/heroCards";
import useHeroSlider from "../../hooks/useHeroSlider";

function HeroCards() {
    const {
        currentIndex,
        next,
        previous,
        goTo,
    } = useHeroSlider(heroCards.length);

    const getCard = (offset) => {
        const index =
            (currentIndex + offset) % heroCards.length;

        return heroCards[index];
    };

    return (
        <div className="hero-slider">

            <div className="hero-slider__cards">
                {[0, 1, 2].map((offset) => {
                    const card = getCard(offset);

                    return (
                        <HeroCard
                            key={`${currentIndex}-${card.id}`}
                            card={card}
                        />
                    );
                })}
            </div>

            <div className="hero-slider__controls">

                <button
                    className="hero-slider__arrow"
                    onClick={previous}
                    aria-label="Anterior"
                >
                    ←
                </button>

                <div className="hero-slider__dots">
                    {heroCards.map((card, index) => (
                        <button
                            key={card.id}
                            onClick={() => goTo(index)}
                            aria-label={`Ir a slide ${index + 1}`}
                            className={
                                index === currentIndex
                                    ? "hero-slider__dot hero-slider__dot--active"
                                    : "hero-slider__dot"
                            }
                        />
                    ))}
                </div>

                <button
                    className="hero-slider__arrow"
                    onClick={next}
                    aria-label="Siguiente"
                >
                    →
                </button>

            </div>

        </div>
    );
}

export default HeroCards;