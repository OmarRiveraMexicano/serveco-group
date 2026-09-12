import { FiInstagram, FiLinkedin } from "react-icons/fi";

import HeroContent from "./HeroContent/HeroContent";
import HeroCards from "./HeroCards/HeroCards";

import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./Hero.css";

function Hero() {
    return (
        <section
            className="hero"
            style={{
                "--hero-image": `url("${getAssetUrl("images/hero.png")}")`,
            }}
        >
            <div className="hero__container">
                <HeroContent />
                <HeroCards />
            </div>

        </section>
    );
}

export default Hero;


