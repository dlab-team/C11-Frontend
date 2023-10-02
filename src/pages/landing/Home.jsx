import ProgramExplanation from "./ProgramExplanation";
import LandingForm from "../../components/Landing/LandingForm";
import Banner from "../../components/Landing/Banner";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
const Home = () => {
  return (
    <>
      <div></div>
      <Banner />
      <ProgramExplanation />
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[6.375rem]">
        <InitialContact />
        <LandingForm />
      </div>
      <FloatingButton />
    </>
  );
};

export default Home;
