import { useLocation, useNavigate } from "react-router-dom";

import { navigationItems } from "../data/navigation.js";
import useMobileMenu from "../hooks/useMobileMenu.js";
import useScrollNavbar from "../hooks/useScrollNavbar.js";
import { getAssetUrl } from "../utils/getAssetUrl.js";

import "./Navbar.css";

function Navbar() {
    const { isOpen, toggleMenu, closeMenu } =
        useMobileMenu();

    const isScrolled = useScrollNavbar();

    const navigate = useNavigate();
    const location = useLocation();

    const goToPage = (path) => {
        closeMenu();
        navigate(path);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header
            className={`navbar ${
                isScrolled ? "navbar--scrolled" : ""
            }`}
        >
            <div className="navbar__container">
                <button
                    type="button"
                    className="navbar__logo"
                    onClick={() => goToPage("/")}
                    aria-label="Ir al inicio"
                >
                    <img
                        src={getAssetUrl("/images/logo.svg")}
                        alt="Serveco Group"
                    />
                </button>

                <nav
                    className={`navbar__navigation ${
                        isOpen
                            ? "navbar__navigation--open"
                            : ""
                    }`}
                    aria-label="Navegación principal"
                >
                    {navigationItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`navbar__link ${
                                location.pathname === item.path
                                    ? "navbar__link--active"
                                    : ""
                            }`}
                            onClick={() =>
                                goToPage(item.path)
                            }
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="navbar__actions">
                    <button
                        type="button"
                        className="navbar__menu-button"
                        onClick={toggleMenu}
                        aria-label={
                            isOpen
                                ? "Cerrar menú"
                                : "Abrir menú"
                        }
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`navbar__hamburger ${
                                isOpen
                                    ? "navbar__hamburger--open"
                                    : ""
                            }`}
                        >
                            <span />
                            <span />
                            <span />
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

