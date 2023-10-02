import ProgramExplanation from "./ProgramExplanation";
import LandingForm from "../../components/Landing/LandingForm";
import Banner from "../../components/Landing/Banner";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
const Home = () => {
  return (
    <>
      <div></div>
      <Banner/>
      <ProgramExplanation />
		<InitialContact/>
      <LandingForm />
		<FloatingButton/>
    </>
  );
};

export default Home
