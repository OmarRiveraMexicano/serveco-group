import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import ServiceDetail from "./Components/ServiceDetail/ServiceDetail.jsx";

import { Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Services.jsx";
import About from "./Components/About/About.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />

        <Route
          path="/servicios/:serviceSlug"
          element={<ServiceDetail />}
        />

      </Routes>

    </>
  );
}

export default App;