import { FiInstagram, FiLinkedin, FiFacebook } from "react-icons/fi";

import HeroContent from "./HeroContent/HeroContent";
import HeroCards from "./HeroCards/HeroCards";

import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero__container">
                <HeroContent />
                <HeroCards />
            </div>

            <div className="hero__bottom">

                <div className="hero__socials">

                    <a
                        href="https://www.instagram.com/serveco_group/"
                        aria-label="Instagram"
                    >
                        <FiInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/serveco-group/"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;


