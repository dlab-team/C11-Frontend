import imgContact from "../../assets/landing/devsafio/imgContact.png";
import React from "react";

const InitialContact = () => {
	return (
		<section
			className="flex justify-center   pb-6 md:pb-8
                     md:h-5/6 md:py-11"
			id="contact-section"
		>
			<div className="container flex mx-auto flex-col sm:flex-row md:flex-row">
				<div className="mx-auto">
					<h2 className="py-4 px-4  md:py-1.5 lg:py-2.5 font-sans text-3xl  font-semibold  lg:mx-auto text-dark-purple">
						DEVsafiamos el sistema
					</h2>
					<h5 className="py-4 px-4 leading-relaxed font-sans  font-medium md:mx-auto">
						¿Escasez de talento Senior? No te preocupes, en{" "}
						<span className="texto_azul">Devsafio</span> encontrarás el talento
						que necesitas en nuestro programa Mentorías.
					</h5>

					<h5 className="py-4 px-4 leading-relaxed font-sans font-medium  md:mx-auto">
						Completa el formulario y te contactaremos en breve para acompañarte
						en la búsqueda de Talento TI que necesitas.
					</h5>

					<img
						className="container mx-auto py-3  sm:w-full md:w-auto flex-shrink-0 "
						src={imgContact}
						alt="img"
					/>

					<h5 className="py-4 px-4 leading-relaxed font-sans font-medium  md:mx-auto">
						<b>
							¡Agenda una asesoría con nosotros si quieres saber más sobre cómo
							acelerar y potenciar tu próximo Talento TI!
						</b>
					</h5>
					<div className="flex justify-center mt-4">
						{" "}
						{/* Centramos el botón */}
						<button className="bg-[#2738F5] hover:bg-[#2738F5] text-[#FFFFFF]  py-2 px-4 rounded-full">
							<a
								href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0SQzKIaDQw2qnLJMrS8hm0EIM31uLGZUHFffAgzqX-0-TBwwD6RTMXxKU5pRMJxnfOftAHJ2Ao"
								target="_blank"
								rel="noopener noreferrer"
							>
								AGENDAR
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InitialContact;
