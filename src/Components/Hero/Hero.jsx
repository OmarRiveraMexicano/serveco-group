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

            <div className="hero__bottom">
                <div className="hero__socials">

                    <a
                        href="https://www.instagram.com/serveco_group/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/serveco-group/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin />
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;


