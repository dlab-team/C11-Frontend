import ProgramExplanation from "./ProgramExplanation";
import Footer from "../../components/Footer";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";

const Home = () => {
	return (
		<>
			<div>
				<FloatingButton/>
				<ProgramExplanation />
				<InitialContact />
				<Footer />
			</div>
		</>
	);
};

export default Home;
