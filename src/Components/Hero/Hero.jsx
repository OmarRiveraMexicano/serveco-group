import "./Hero.css";
import HeroCards from "./HeroCards/HeroCards";
import HeroContent from "./HeroContent/HeroContent";
import {
    FiInstagram,
    FiLinkedin,
} from "react-icons/fi";

function Hero() {
    return (
        <section className="hero">

            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="hero__container">

                <HeroContent />

                <HeroCards />

                <div className="hero__socials">
                    <a
                        href="https://www.instagram.com/serveco_group/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Serveco Group"
                    >
                        <FiInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/serveco-group/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Serveco Group"
                    >
                        <FiLinkedin />
                    </a>
                </div>

            </div>

            

        </section>
    );
}

export default Hero;