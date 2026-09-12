import Hero from "../Components/Hero/Hero.jsx";
import About from "../Components/About/About.jsx";
import Services from "../Components/Services/Services.jsx";
import ServiceGallery from "../Components/ServiceGallery/ServiceGallery.jsx";
import usePageTitle from "../Components/hooks/usePageTitle.js";

function Home() {
    usePageTitle("Inicio");

    return (
        <main>
            <Hero />
            <ServiceGallery />
    
        </main>
    );
}

export default Home;