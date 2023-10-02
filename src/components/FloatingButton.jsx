import React, { useState, useEffect } from "react";
import {
	BiSolidUniversalAccess,
	BiX,
	BiSolidCaretRightCircle,
	BiMinus,
	BiPlus,
	BiPause,
	BiStop,
} from "react-icons/bi";
import { RiContrast2Fill } from "react-icons/ri";
import { IoContrastOutline } from "react-icons/io5";

const FloatingButton = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 100, y: 100 });
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState(null);
	const [volume, setVolume] = useState(50);
	const [isPlaying, setIsPlaying] = useState(false);
	const [speech, setSpeech] = useState(null);
	const [gradientStyle, setGradientStyle] = useState({
		width: `${volume}%`,
		background: `linear-gradient(to right, #1E40AF 0%, #60A5FA 100% ${volume}%, #1E40AF 10%, #f8fafc 10% ${volume}%)`,
	});

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setOffset({
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		});
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		setPosition({
			x: e.clientX - offset.x,
			y: e.clientY - offset.y,
		});
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const selectIcon = (icon) => {
		setSelectedIcon(icon);
		closeModal();
	};

	const modalPosition = {
		top: position.y,
		left: position.x,
	};

	const playText = (text) => {
		if (!isPlaying) {
			const newSpeech = new SpeechSynthesisUtterance(text);
			newSpeech.rate = 1; // Ajusta la velocidad si es necesario
			newSpeech.volume = volume / 100; // Ajusta el volumen
			speechSynthesis.speak(newSpeech);
			setSpeech(newSpeech);
			setIsPlaying(true);
		} else {
			speechSynthesis.resume();
		}
	};

	const pause = () => {
		speechSynthesis.pause();
		setIsPlaying(false);
	};

	const stop = () => {
		speechSynthesis.cancel();
		setIsPlaying(false);
		setSpeech(null);
	};

	const updateGradientStyle = (newVolume) => {
		setGradientStyle({
			width: `${newVolume}%`,
			background: `linear-gradient(, #1e40af 50%, #60a5fa  ${newVolume}%, #f8fafc ${newVolume}%)`,
		});
	};

	const increaseVolume = () => {
		const newVolume = Math.min(100, volume + 10);
		setVolume(newVolume);
		if (speech) {
			speech.volume = newVolume / 100;
		}
		updateGradientStyle(newVolume);
	};

	const decreaseVolume = () => {
		const newVolume = Math.max(0, volume - 10);
		setVolume(newVolume);
		if (speech) {
			speech.volume = newVolume / 100;
		}
		updateGradientStyle(newVolume);
	};

	return (
		<div>
			<button className="fixed bg-[FFFFFF] "
				style={{
					bottom: `116px`,
					right: `26px`,
					
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onClick={openModal}
			>
				{selectedIcon ? (
					selectedIcon
				) : (
					<BiSolidUniversalAccess className="text-[114px] text-[#2738F5]" />
				)}
			</button>

			{isModalOpen && (
				<div className="fixed inset-0  flex justify-center items-center bg-[#ffffff] ">
					<div
						className=" flex flex-col  rounded-lg "
						style={{ top: modalPosition.top, left: modalPosition.left }}
					>
						{/* Sección de Accesibilidad */}
						<div className="flex bg-[#2738F5] rounded-t-lg p-4  ">
							<h2 className="text-[2rem] text-center text-[#ffffff] flex-grow">
								ACCESIBILIDAD
							</h2>
							<BiX
								className="text-3xl text-[#ffffff] cursor-pointer"
								onClick={closeModal}
							/>
						</div>

						<div className=" rounded-lg flex flex-col justify-center items-center mt-7">
							{/* Sección 1 */}
							<div className=" bg-[#ffffff] rounded-lg  w-[35.8125rem] h-[12.375rem] flex flex-col ">
								<div className="text-[0.9375rem] weight-[500] mx-5 ">
									<span>LECTOR DE TEXTO</span>
								</div>
								<div className="flex flex-row mx-auto space-x-12 ">
									{/* Caja 1 */}
									<div className="flex justify-center border rounded-lg bg-[#FFFFFF] w-[8.3125rem] h-[7.5625rem]  ">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center">
											{/* Icono de Reproductor */}
											<div className="flex items-center text-[#FFFFFF]  cursor-pointer rounded-full">
												<BiSolidCaretRightCircle
													className="text-[#2738F5] text-[2.875rem] cursor-pointer"
													onClick={() =>
														playText(
															"In this case, the inputted audio was german and the outputted text looks like:Hello, my name is Wolfgang and I come from Germany. Where are you heading today?We only support translation into english at this time.Supported languagesWe currently support the following languages through both the transcriptions and translations endpoint:Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh.While the underlying model was trained on 98 languages, we only list the languages that exceeded <50% word error rate (WER) which is an industry standard benchmark for speech to text model accuracy. The model will return results for languages not listed above but the quality will be low."
														)
													}
												/>
											</div>
										</div>
									</div>

									{/* Caja 2 */}
									<div className="flex justify-center border bg-[#FFFFFF] w-[8.3125rem] h-[7.5625rem] rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center  ">
											{/* Icono de Reproductor */}
											<BiPause
												className=" flex items-center text-[#FFFFFF] text-[2.375rem] cursor-pointer bg-[#2738F5] rounded-full"
												onClick={pause}
											/>
										</div>
									</div>
									{/* Caja 3 */}
									<div className="flex justify-center bg-[#FFFFFF]  border rounded-lg w-[8.3125rem] h-[7.5625rem]">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center">
											{/* Icono de Reproductor */}
											<BiStop className=" flex items-center text-[#FFFFFF] text-[2.375rem] cursor-pointer bg-[#2738F5] rounded-full " />
										</div>
									</div>
								</div>
								{/* Barra de Volumen */}
								<div className="mt-5">
									<div className="flex justify-center items-center w-[13.75rem] rounded-full h-[1.75rem] mx-auto bg-[#9ca3af] ">
										<BiMinus
											className="text-white rounded-full bg-[#2738F5] text-2xl cursor-pointer "
											onClick={decreaseVolume}
										/>
										<div className="flex-grow w-[10.75rem] h-[1.3rem] relative">
											<div
												className="h-[1.2rem]  rounded-[0.3rem]"
												style={gradientStyle}
											/>
											<div className="absolute text-white top-0 bottom-0 left-0 right-0 flex items-center justify-center">
												{volume}%
											</div>
										</div>
										<BiPlus
											className="text-white rounded-full bg-[#2738F5] text-[1.35rem] cursor-pointer"
											onClick={increaseVolume}
										/>
									</div>
								</div>
							</div>
							{/* Sección 2 */}
							<div className="bg-[#ffffff] rounded-lg  w-[35.8125rem] h-[12.375rem] flex flex-col">
								<div className="text-[0.9375rem] weight-[500] mx-5">
									<span>TAMAÑO FUENTE</span>
								</div>
								{/* Cajas */}
								<div className="flex flex-row flex justify-center place-items-stretch space-x-[6rem] my-auto">
									{/* Caja 1 */}
									<div className="flex justify-center bg-[#2738F5]  rounded-lg w-[8.75rem] h-[7.5625rem]  cursor-pointer">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center  ">
											{/* Icono de Reproductor */}
											<span className="text-[3rem] text-[#ffffff]">+A</span>
										</div>
									</div>

									{/* Caja 2 */}
									<div className="flex justify-center bg-[#2738F5]  rounded-lg w-[8.75rem] h-[7.5625rem]  cursor-pointer">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center ">
											{/* Icono de Reproductor */}
											<span className="text-[3rem] text-[#ffffff]">-A</span>
										</div>
									</div>
								</div>
							</div>
							{/* Sección 3 */}
							<div className="bg-[#ffffff] rounded-lg  w-[35.8125rem] h-[12.375rem] flex flex-col">
								<div className="text-[0.9375rem] weight-[500] mx-5">
									<span>COLOR DE CONTRASTE</span>
								</div>
								<div className="flex flex-row flex justify-center place-items-stretch space-x-[6rem] my-auto ">
									{/* Caja 1 */}
									<div className="flex justify-center bg-[#2738F5]  rounded-lg w-[8.75rem] h-[7.5625rem]  cursor-pointer">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center space-x-1">
											<IoContrastOutline className="text-[#fcd34d] text-4xl  cursor-pointer" />
										</div>
									</div>
									{/* Caja 2 */}
									<div className="flex justify-center bg-[#2738F5]  rounded-lg w-[8.75rem] h-[7.5625rem]  cursor-pointer">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center">
											{/* Icono de Reproductor */}
											<div className="flex items-center space-x-1">
												<RiContrast2Fill className="text-[#00000] text-4xl cursor-pointer" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default FloatingButton;
