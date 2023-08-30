import Footer from "../../components/Footer";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
import Footer from "../../components/Footer";
import ProgramExplanation from "./ProgramExplanation"


const Home = () => {
	return (
		<>
			<div>
				<ProgramExplanation />

				<FloatingButton />
				<InitialContact />
				<Footer />
			</div>
		</>
	);
};

export default Home;
