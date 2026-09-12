import { useRef } from "react";

import "./HeroCards.css";

import HeroCard from "./HeroCard";
import { heroCards } from "../../data/heroCards";
import useHeroSlider from "../../hooks/useHeroSlider";

function HeroCards() {
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    const {
        currentIndex,
        next,
        previous,
        goTo,
    } = useHeroSlider(heroCards.length);

    const getCard = (offset) => {
        const index =
            (currentIndex + offset) %
            heroCards.length;

        return heroCards[index];
    };

    const handleTouchStart = (event) => {
        const touch = event.touches[0];

        touchStartX.current = touch.clientX;
        touchStartY.current = touch.clientY;
    };

    const handleTouchEnd = (event) => {
        if (
            touchStartX.current === null ||
            touchStartY.current === null
        ) {
            return;
        }

        const touch = event.changedTouches[0];

        const distanceX =
            touchStartX.current - touch.clientX;

        const distanceY =
            touchStartY.current - touch.clientY;

        const isHorizontalGesture =
            Math.abs(distanceX) >
            Math.abs(distanceY);

        const minimumDistance = 45;

        if (
            isHorizontalGesture &&
            Math.abs(distanceX) > minimumDistance
        ) {
            if (distanceX > 0) {
                next();
            } else {
                previous();
            }
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    const handleTouchCancel = () => {
        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <div className="hero-slider">
            <div
                className="hero-slider__cards"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
            >
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
                    type="button"
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
                            type="button"
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
                    type="button"
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