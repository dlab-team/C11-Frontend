import React, { useState } from "react";
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

	const increaseVolume = () => {
		const newVolume = Math.min(100, volume + 10);
		setVolume(newVolume);
		if (speech) {
			speech.volume = newVolume / 100;
		}
	};

	const decreaseVolume = () => {
		const newVolume = Math.max(0, volume - 10);
		setVolume(newVolume);
		if (speech) {
			speech.volume = newVolume / 100;
		}
	};

	return (
		<div>
			<button
				className="fixed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
				style={{
					top: `${position.y}px`,
					left: `${position.x}px`,
					cursor: isDragging ? "grabbing" : "grab",
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onClick={openModal}
			>
				{selectedIcon ? (
					selectedIcon
				) : (
					<BiSolidUniversalAccess className="text-7xl text-[#2738F5] mr-2" />
				)}
			</button>

			{isModalOpen && (
				<div className="fixed inset-0 flex justify-center items-center bg-[#ffffff] p-2 sm:p-3">
					<div
						className=" p-5 w-full max-w-md sm:max-w-lg lg:max-w-xl "
						style={{ top: modalPosition.top, left: modalPosition.left }}
					>
						{/* Sección de Accesibilidad */}
						<div className="flex justify-between bg-[#2738F5] p-5 rounded-t-lg  ">
							<h2 className="text-xl text-center text-[#ffffff] flex-grow">
								ACCESIBILIDAD
							</h2>
							<BiX
								className="text-3xl text-[#ffffff] cursor-pointer"
								onClick={closeModal}
							/>
						</div>

						<div className="w-full bg-[#d1d5db] sm:p-5 rounded-lg ">
							{/* Sección 1 */}
							<div className="p-1 mx-5 md:py-5 bg-[#ffffff] rounded-lg   md:m-1 ">
								<div>
									<span>hola mundo</span>
								</div>
								<div className="flex flex-col md:flex-row md:px-1  lg:px-7">
									{/* Caja 1 */}
									<div className="flex justify-center border bg-[#d1d5db] p-5 sm:p-5 m-5 sm:m-5 md:p-8 lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center">
											{/* Icono de Reproductor */}
											<div className="flex items-center space-x-1">
												<BiSolidCaretRightCircle
													className="text-[#2738F5] text-2xl cursor-pointer"
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
									<div className="flex justify-center  border bg-[#d1d5db] p-5 sm:p-5 m-5 sm:m-5 md:p-8  lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center rounded-full bg-[#2738F5]">
											{/* Icono de Reproductor */}
											<BiPause
											className="text-[#2738F5] text-2xl cursor-pointer"
											onClick={pause}
										/>
										</div>
									</div>
									{/* Caja 3 */}
									<div className="flex justify-center  border bg-[#d1d5db] p-5 sm:p-5 m-5 sm:m-5 md:p-8  lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center rounded-full bg-[#2738F5]">
											{/* Icono de Reproductor */}
											<BiStop className="text-[#FFFFFF] text-4xl md:text-3xl cursor-pointer" />
										</div>
									</div>
								</div>
								{/* Barra de Volumen */}
								<div className="flex justify-center items-center w-48 bg-[#d1d5db] mx-auto mt-2 md:mt-4">
									<BiMinus
										className="text-white rounded-full bg-[#2738F5] text-xl md:text-2xl cursor-pointer"
										onClick={decreaseVolume}
									/>
									<div className="flex-grow h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full relative mx-2 md:mx-4">
										<div
											className="h-full bg-blue-700 rounded-full absolute left-0"
											style={{ width: `${volume}%` }}
										/>
										<div className="absolute text-white top-0 bottom-0 left-0 right-0 flex items-center justify-center">
											{volume}%
										</div>
									</div>
									<BiPlus
										className="text-white rounded-full bg-[#2738F5] text-xl md:text-2xl cursor-pointer"
										onClick={increaseVolume}
									/>
								</div>
							</div>
							{/* Sección 2 */}
							<div className="p-1 mx-5 md:py-5 bg-[#ffffff] rounded-lg   md:m-1 ">
								<div>
									<span>hola mundo</span>
								</div>
								<div className="flex flex-col flex justify-center md:flex-row md:px-1  lg:px-7">
									{/* Caja 1 */}
									<div className="flex justify-center  border bg-[#2738F5] p-5 sm:p-5 m-5 sm:m-5 md:p-8  lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center ">
											{/* Icono de Reproductor */}
											<span className="text-3xl text-[#ffffff]">+A</span>
										</div>
									</div>

									{/* Caja 2 */}
									<div className="flex justify-center  border bg-[#2738F5] p-5 sm:p-5 m-5 sm:m-5 md:p-8  lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center ">
											{/* Icono de Reproductor */}
											<span className="text-3xl text-[#ffffff]">+A</span>
										</div>
									</div>
								</div>
							</div>
							{/* Sección 3 */}
							<div className="p-1 mx-5 md:py-5 bg-[#ffffff] rounded-lg   md:m-1 ">
								<div>
									<span>hola mundo</span>
								</div>
								<div className="flex flex-col  flex justify-center md:flex-row md:px-1  lg:px-7">
									{/* Caja 1 */}
									<div className="flex justify-center  border bg-[#2738F5] p-5 sm:p-5 m-5 sm:m-5 md:p-8  lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center space-x-1">
											<IoContrastOutline className="text-[#fcd34d] text-4xl md:text-3xl cursor-pointer" />
										</div>
									</div>
									{/* Caja 2 */}
									<div className="flex justify-center border bg-[#2738F5] p-5 sm:p-5 m-5 sm:m-5 md:p-8 lg:px-8 rounded-lg">
										{/* Contenido de la Caja 1 */}
										<div className="flex items-center">
											{/* Icono de Reproductor */}
											<div className="flex items-center space-x-1">
												<RiContrast2Fill className="text-[#00000] text-4xl md:text-3xl cursor-pointer" />
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
