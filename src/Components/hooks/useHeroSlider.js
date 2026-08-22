import { useState } from "react";

function useHeroSlider(totalItems) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const previous = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalItems - 1 : prev - 1
        );
    };

    const goTo = (index) => {
        setCurrentIndex(index);
    };

    return {
        currentIndex,
        next,
        previous,
        goTo,
    };
}

export default useHeroSlider;