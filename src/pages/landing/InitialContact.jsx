import imgContact from "../../assets/landing/devsafio/imgContact.png";
import React from "react";

const InitialContact = () => {
	return (
		<div className="flex justify-center flex-row sm:flex-col flex-row">
			<section
				className="flex justify-center w-[20.5625rem] h-[53.25rem]  sm:w-[31.75rem] sm:h-[48.75rem] md:w-[31.75rem] md:h-[48.75rem] lg:w-[31.75rem] lg:h-[63.75rem]
                     "
				id="contact-section"
			>
				<div className="mx-auto flex-row flex sm:flex-col ">
					<div className="flex  mx-auto justify-center item-center ">
						<div className="w-[20.3125rem] h-[10.375rem] md:w-[33.5625rem] md:h-[25.875rem] lg:w-[33.75rem] lg:h-[25.875rem] mx-auto">
							<h2 className=" mx-auto my-8 md:my-5 lg:mb-[3.3rem] text-[1.5rem] lg:text-start  lg:text-[2rem] font-semibold  lg:mx-auto text-poppins text-[#140B34]">
								DEVsafiamos el sistema
							</h2>
							<h5 className="  leading-relaxed text-[0.9375rem] md:text-[1.25rem] my-8 md:my-0 mx-auto font-bold md:font-medium lg:font-medium">
								¿Escasez de talento Senior?{" "}
							</h5>
							<h5 className="  leading-relaxed  text-[0.9375rem] md:text-[1.25rem] font-medium mx-auto">
								No te preocupes, en <span className="texto_azul">Devsafio</span>{" "}
								encontrarás el talento que necesitas en nuestro programa
								Mentorías.
							</h5>
							<h5 className=" leading-relaxed  font-medium text-[0.9375rem] md:text-[1.25rem] my-5 md:my-2 mx-auto">
								Completa el formulario y te contactaremos en breve para
								acompañarte en la búsqueda de Talento TI que necesitas.
							</h5>
							<img
							className=" w-[22.28588rem] h-[17.18125rem] sm:w-[24.6rem] sm:h-[20.55rem] md:w-[24.6rem] md:h-[20.55rem] lg:w-[24.6rem] lg:h-[20.55rem] flex object-center items-center mx-auto"
								src={imgContact}
								alt="img"
							/>

							<h5 className=" leading-relaxed  text-[1rem] md:text-[1.25rem] mt-5 lg:mt-8 text-center lg:text-start mx-auto">
								<b>
									¡Agenda una asesoría con nosotros si quieres saber más sobre
									cómo acelerar y potenciar tu próximo Talento TI!
								</b>
							</h5>
							<div className="my-10 md:my-[4rem] flex justify-center">
								{" "}
								{/* Centramos el botón */}
								<button className="bg-[#2738F5] font-bold hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#2738F5] gap-[0.5rem] text-[0.75rem] lg:text-[1.5rem] py-[1rem] px-[1.5rem] rounded-[1.5rem] w-[7.4375rem] h-[2.1875rem] lg:w-[auto] lg:h-[auto] flex items-center justify-center hover:border ">
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
				</div>
			</section>
		</div>
	);
};

export default InitialContact;
