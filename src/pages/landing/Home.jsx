import ProgramExplanation from "./ProgramExplanation";
import Footer from "../../components/Footer";
import InitialContact from "./InitialContact";
import FloatingButton from "../../components/FloatingButton";
import MainBuscasTalento from "../../components/Landing/MainBuscasTalento";

const Home = () => {
	return (
		<>
			<div>
				<MainBuscasTalento
					titulo="¿Buscas talento TI?"
					resumen="Te encontramos profesionales en 5 días y los acompañamos por 3 meses con  tutores senior para potenciar y acelerar sus habilidades técnicas."
				/>
				<FloatingButton />
				<ProgramExplanation />
				<InitialContact />
				<Footer />
			</div>
		</>
	);
};

export default Home;
