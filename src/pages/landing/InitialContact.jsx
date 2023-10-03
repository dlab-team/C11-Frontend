import imgContact from "../../assets/landing/devsafio/imgContact.png";
import React from "react";

const InitialContact = () => {
	return (
		<div className="flex justify-center flex-row sm:flex-col flex-row gap-[5rem]">
			<section
				className="flex justify-center w-[31.75rem] h-[61.75rem] 
                     "
				id="contact-section"
			>
				<div className="flex mx-auto  flex-col sm:flex-col flex-row w-[24.5625rem] h-[53.25rem] ">
					<div className="flex flex-col mx-auto justify-center item-center ">
						<div className="w-[20.3125rem] h-[10.375rem] md:w-[31.75rem] md:h-[61.75rem] lg:w-[31.75rem] lg:h-[61.75rem] mx-auto">
							<h2 className=" my-8 md:my-0 lg:mb-[3.3rem] text-[1.5rem] lg:text-start  lg:text-[2rem] font-semibold  lg:mx-auto text-poppins text-[#140B34]">
								DEVsafiamos el sistema
							</h2>
							<h5 className="  leading-relaxed  text-[0.9375rem] md:text-[1.25rem] my-8 md:my-0 mx-auto font-bold md:font-medium lg:font-medium">
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
								className=" w-[18.38481rem] h-[15.43825rem] lg:w-[24.6rem] lg:h-[20.55rem] flex object-center"
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
