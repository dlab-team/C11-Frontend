
import ProgramExplanation from "./ProgramExplanation"
import LandingForm from "../../components/Landing/LandingForm";
import Banner from "../../components/Landing/Banner";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
import HeroSection from "../../components/Landing/HeroSection";

const Home = () => {
  return (
    <>
      <div></div>
      <HeroSection/>
      <Banner/>
      <ProgramExplanation />
		  <InitialContact/>
      <LandingForm />
		  <FloatingButton/>
    </>
  );
};

export default Home
