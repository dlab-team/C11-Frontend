import React, { useState } from 'react';
import Line from '../../assets/Line.svg';
import AgregarInstitucion from '../../assets/boton-más.svg';
import { useForm } from "react-hook-form";


function InformacionProfesionalForm  () {
    // const {
    //     register,
    //     formState: { errors },
    //   } = useForm();

    // const onSubmit = evento => {
    //     console.log("")
    // } 

    // const [codeSections, setCodeSections] = useState([""]);
    // const [isButtonActive, setIsButtonActive] = useState(false);

    // const addSection = () => {
    //     setCodeSections([...codeSections, ""]); 
    //     setIsButtonActive(true);
    // };

    // const removeSection = (index) => {
    //     const updatedSections = [...codeSections];
    //     updatedSections.splice(index, 1); 
    //     setCodeSections(updatedSections);
    // };

    // const handleCodeChange = (index, value) => {
    //     const updatedSections = [...codeSections];
    //     updatedSections[index] = value; 
    //     setCodeSections(updatedSections);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault(); 
    //     const addSection = () => {
    //         setCodeSections([...codeSections, ""]); 
    //         setIsButtonActive(true);
    //     };
    // };

  return (
    <div className='container'>
        <div className='flex flex-row justify-center mt-[1.75rem] lg:mt-[10] mb-[4.81rem] lg:mb-[6.75rem] lg:ml-[9.31rem]'>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>1</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-[#2738F5] border border-[#2738F5] text-white lg:text-[2.5rem]'>2</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>3</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>4</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>5</div>
        </div>
        <h1 className='text-center lg:text-left lg:ml-[10.69rem] font-bold mb-[1.81rem] lg:text-[2rem] lg:font-bold font-poppins'>
            INFORMACIÓN PROFESIONAL
        </h1>
        <div className='lg:ml-[17rem]'>
            <form action="" className='w-full lg:w-[100%]' >
                <div class=" md:w-3/3 px-3 mb-[1.38rem] md:mb-0">
                    <label class="block tracking-wide text-black text-xs font-bold font-poppins mb-[0.69rem] lg:mb-[1.5rem] lg:text-[1.25rem]" for="grid-state">
                        ¿Cuál es tu máximo nivel educacional?<span className='text-[#AC231B]'>*</span>
                    </label>
                    <div class="relative divide-x divide-[#140B34]">
                        <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                        <option>Selección</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <h2 className='text-black mt-[1.88rem] lg:mt-[2.5rem] mb-[2.74rem] lg:mb-[2.5rem] text-left px-[0.8rem] text-[0.69rem] font-semibold lg:text-[1.5rem]'>
                A continuación, indícanos 2 (dos) carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):
                </h2>
                <div class="w-full md:w-3/3 px-3 mb-[1.38rem] md:mb-0 lg:mb-[1.5rem]">
                    <label class="block tracking-wide text-black text-xs text-[0.75rem] lg:text-[1.25rem] font-semibold mb-1 lg:mb-[1.5rem]" for="grid-first-name">
                    Nombre de la carrera, curso, bootcamp o certificación 1:<span className='text-[#AC231B]'>*</span>
                    </label>
                    <input  class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 lg:py-2 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
                </div>
                <div class="w-full md:w-3/3 px-3 mb-[1.38rem] md:mb-0">
                    <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal font-poppins mb-1 lg:mb-[1.25rem]" for="grid-first-name">
                        Nombre institución 1:<span className='text-[#AC231B]'>*</span>
                    </label>
                    <input class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 lg:py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
                </div>
                <div class="w-full md:w-3/3 px-3 md:mb-0 lg:mb-[1.81rem]">
                    <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal mb-1 lg:mb-[1.5rem]" for="grid-state">
                        Tipo de institución 1:<span className='text-[#AC231B]'>*</span>
                    </label>
                    <div class="relative divide-x divide-[#140B34]">
                        <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                        <option>Selección</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className='flex justify-end mt-[0.5rem] lg:mt-[1.81rem]'>
                    <button className='flex p-1 lg:border-[2px] lg:border-[#2738F5] lg:rounded-2xl' >
                        <img src={AgregarInstitucion} alt="Boton-agregar-institucion" className='lg:p-1'/>
                        <span className='max-[1024px]:hidden text-[#2738F5] font-poppins font-bold lg:p-1'>Agregar</span>
                    </button>
                </div>
            
            {/* _________Input Dinamico para agregar mas secciones_________ */}
                {/* {codeSections.map((code, index) => (
                    <div key={index}>
                        <div class="w-full md:w-3/3 px-3 mb-[1.38rem] md:mb-0" value={code}
                        onChange={(e) => handleCodeChange(index, e.target.value)}>
                            <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal font-poppins mb-1 lg:mb-[1.25rem]" for="grid-first-name">
                                Nombre institución:<span className='text-[#AC231B]'>*</span>
                            </label>
                            <input class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 lg:py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
                        </div>
                        <div className='flex justify-end mt-[0.5rem] lg:mt-[1.81rem]'>
                            <button className='flex p-1 lg:border-[2px] lg:border-[#2738F5] lg:rounded-2xl' onClick={() => removeSection(index)}>
                                <span className=' text-[#2738F5] font-poppins font-bold lg:p-1'>Eliminar</span>
                            </button>
                        </div>
                    </div>
                ))} */}

                {/* _________________Ultima sección_________________ */}
                <div className='grid grid-cols-2 lg:flex lg:flex-row mt-[3.38rem]'>
                    <div class="w-full md:w-5/5 lg:w-[36.8rem] px-3 md:mb-0">
                        <label class="block tracking-wide text-black text-xs font-normal mb-2 text-[0.625rem] lg:text-[1.25rem]" for="grid-state">
                        ¿Cuál es tu situación educacional actual (Bootcamp, diplomados, universidad, cursos u otros)?
                        </label>
                        <div class="relative divide-x divide-[#140B34] lg:mt-[1.5rem]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] px-4 py-1 lg:py-2 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Selección</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 items-end w-full md:w-2/3 lg:w-[24rem] px-3 md:mb-0">
                        <label class="block tracking-wide text-black text-[0.75rem] lg:text-[1.25rem] font-normal" for="grid-state">
                            Nivel Inglés:
                        </label>
                        <div class="relative divide-x divide-[#140B34] lg:mt-[1.5rem]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] px-4 py-1 lg:py-2 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-[#E2F2FE] focus:border-gray-500" id="grid-state">
                            <option>Selección</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/* _____________Botones_____________ */}
                <div className='flex justify-center mb-[1rem] mt-[9.62rem]'>
                    <div class="inline-flex">
                        <button class="bg-white text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-2 px-8 lg:px-10 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]">
                            Atrás
                        </button>
                        <button class="bg-[#2738F5] text-white font-bold py-2 px-4 rounded-r-xl lg:text-[1.5rem]">
                            Continuar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default InformacionProfesionalForm;