import "./Footer.css";

import {
    FiInstagram,
    FiLinkedin,
} from "react-icons/fi";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />

            <div className="footer__container">

               <p className="footer__rights">
    © {new Date().getFullYear()} Serveco Group. Todos los derechos reservados.
</p>


                <div className="footer__socials">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Serveco Group"
                    >
                        <FiInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Serveco Group"
                    >
                        <FiLinkedin />
                    </a>
                </div>

                <p className="footer__copyright">
                    © {new Date().getFullYear()} Serveco Group
                </p>

            </div>
        </footer>
    );
}

export default Footer;