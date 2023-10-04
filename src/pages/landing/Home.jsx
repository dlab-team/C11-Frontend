import { useRef } from "react";
import ProgramExplanation from "./ProgramExplanation";
import LandingForm from "../../components/Landing/LandingForm";
import Banner from "../../components/Landing/Banner";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
import HeroSection from "../../components/Landing/HeroSection";

const Home = () => {
  const formRef = useRef();
  const scrollForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div></div>
      <HeroSection scrollForm={scrollForm} />
      <Banner />
      <ProgramExplanation />
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[6.375rem]">
        <InitialContact />
        <LandingForm ref={formRef} />
      </div>
      <FloatingButton />
    </>
  );
};

export default Home;
