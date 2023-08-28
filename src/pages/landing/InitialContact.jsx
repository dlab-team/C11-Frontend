import imgContact from "../../assets/landing/devsafio/imgContact.png";
import React from "react";
import LandingForm from "../../components/Landing/LandingForm";

const InitialContact = () => {
	return (
		<div className="flex justify-center flex-col sm:flex-col md:flex-row">
			<section
				className="flex justify-center w-[31.75rem] h-[61.75rem] pb-6 md:pb-8
                     md:py-10"
				id="contact-section"
			>
				<div className="container flex mx-auto flex-col sm:flex-col md:flex-row ">
					<div className="mx-auto">
						<h2 className=" md:py-1.5 lg:py-2.5  text-[2rem]  font-semibold  lg:mx-auto text-poppins text-[#140B34]">
							DEVsafiamos el sistema
						</h2>
						<h5 className=" w-[31.75rem] leading-relaxed  text-xl  font-medium md:mx-auto">
							¿Escasez de talento Senior? No te preocupes, en{" "}
							<span className="texto_azul">Devsafio</span> encontrarás el
							talento que necesitas en nuestro programa Mentorías.
						</h5>

						<h5 className=" leading-relaxed  font-medium text-xl md:mx-auto">
							Completa el formulario y te contactaremos en breve para
							acompañarte en la búsqueda de Talento TI que necesitas.
						</h5>

						<img
							className="container w-[27.6rem] h-[23.25rem]  flex-shrink-0 "
							src={imgContact}
							alt="img"
						/>

						<h5 className="py-10 px-4 leading-relaxed  text-xl md:mx-auto">
							<b>
								¡Agenda una asesoría con nosotros si quieres saber más sobre
								cómo acelerar y potenciar tu próximo Talento TI!
							</b>
						</h5>
						<div className="flex justify-center mt-4 py-2">
							{" "}
							{/* Centramos el botón */}
							<button className="bg-[#2738F5] hover:bg-[#2738F5] text-[#FFFFFF] text-xl py-4 px-6 rounded-[1.5rem]">
								<a
									href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SQzKIaDQw2qnLJMrS8hm0EIM31uLGZUHFffAgzqX-0-TBwwD6RTMXxKU5pRMJxnfOftAHJ2Ao"
									target="_blank"
									rel="noopener noreferrer"
								>
									AGENDAR
								</a>
							</button>
						</div>
						<div className="flex justify-center flex-col sm:flex-col md:flex-row"></div>
					</div>
				</div>
			</section>
			<LandingForm />
		</div>
	);
};

export default InitialContact;
