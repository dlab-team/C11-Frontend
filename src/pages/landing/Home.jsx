import ProgramExplanation from "./ProgramExplanation";
import LandingForm from "../../components/Landing/LandingForm";
import HeroSection from "../../components/Landing/HeroSection.jsx";
import HeroSectionDos from "../../components/Landing/HeroSectionDos.jsx";

const Home = () => {
  return (
    <>
      <div></div>
      <HeroSection
        titulo="¿Buscas talento TI?"
        resumen="Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas."
      />
      <HeroSectionDos />
      <ProgramExplanation />
      <LandingForm />
    </>
  );
};

export default Home;
