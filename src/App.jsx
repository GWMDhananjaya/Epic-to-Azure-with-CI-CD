import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import AboutGradient from "./components/aboutMeSection/AboutGradient";
import { Routes, Route } from "react-router-dom";
import ProjectsMain from "./components/projectImages/ProjectsMain";
import ProjectGradient from "./components/projectImages/ProjectGradient";
import ShopLocation from "./components/ShopLocation/ShopLocation";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="font-body">
            <NavbarMain />
            <HeroMain />
            <HeroGradient />
            <SubHeroSection />
            <AboutMeMain />
            <AboutGradient />

            <ProjectsMain />
            <ProjectGradient />
            <ShopLocation />

            <ContactMeMain />
            <FooterMain />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
