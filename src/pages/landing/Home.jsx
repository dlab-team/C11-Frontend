import ProgramExplanation from "./ProgramExplanation";
import LandingForm from "../../components/Landing/LandingForm";
import Banner from "../../components/Landing/Banner";
import InitialContact from "./InitialContact";
const Home = () => {
	return (
		<>
			
			<Banner />
			<ProgramExplanation />
			<div className="flex flex-row space-x-10 justify-center">
				<InitialContact/>
				<LandingForm/>
			</div>
		</>
	);
};

export default Home;
