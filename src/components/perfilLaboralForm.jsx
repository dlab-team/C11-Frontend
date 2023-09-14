import React, { useState } from 'react';
import Line from '../../assets/Line.svg';
import AgregarInstitucion from '../../assets/boton-más.svg';
import { useForm } from "react-hook-form";


function PerfilLaboralForm  () {
    
  return (
    <div className='container'>
        <div className='flex flex-row justify-center mt-[1.75rem] lg:mt-[10] mb-[4.81rem] lg:mb-[6.75rem] lg:ml-[9.31rem]'>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>1</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>2</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-[#2738F5] border border-[#2738F5] text-white lg:text-[2.5rem]'>3</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>4</div>
            <img src={Line} alt="Linea-Divisoria" className='lg:w-[9rem]'/>
            <div className='flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]'>5</div>
        </div>
        <h1 className='text-center lg:text-left lg:ml-[10.69rem] font-bold mb-[1.81rem] lg:text-[2rem] lg:font-bold font-poppins'>
            Perfil Laboral
        </h1>
        <div className='lg:ml-[17rem]'>
            <form action="" className='w-full lg:w-[100%]' >
                <div className='text-black mt-[1.88rem] lg:mt-[2.5rem] mb-[2.74rem] lg:mb-[3.94rem] text-left px-[0.8rem] text-[0.69rem] font-semibold lg:text-[1.5rem]'>
                    <p className='mb-[1.5rem]'> Queremos conocer tus competencias y experiencia. A continuación podrás elegir las competencias que conoces con respecto a 3 niveles:</p>
                    <p className='mb-[1.5rem]'><span className='font-bold'>Nivel 1:</span> No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.</p>
                    <p className='mb-[1.5rem]'><span className='font-bold'>Nivel 2:</span> Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante.</p>
                    <p className='mb-[1.5rem]'><span className='font-bold'>Nivel 3:</span> Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.</p> 
                    <p className='mb-[1.5rem] font-bold'>Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de selección.</p>
                </div>
                <h1 className='text-center lg:text-left font-semibold mb-[3.38rem] lg:mb-[8.5rem] text-[0.75rem] lg:text-[1.5rem] lg:font-semibold font-poppins'>
                    Indicanos tus conocimientos a Nivel 1, 2 o 3:
                </h1>
                <div className='lg:flex lg:flex-row lg:justify-between'> 
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 mb-[1.38rem] md:mb-0">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold font-poppins mb-1 lg:mb-[1.25rem]" for="grid-first-name">
                            Lenguaje
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 md:mb-0 lg:mb-[1.81rem]">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold mb-1 lg:mb-[1.5rem]" for="grid-state">
                            Nivel
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[0.5rem] lg:mt-[1.81rem]'>
                    <button onClick={()=>handleAdd()} className='flex p-1 lg:border-[2px] lg:border-[#2738F5] lg:rounded-2xl'>
                        <img src={AgregarInstitucion} alt="Boton-agregar-institucion" className='lg:p-1'/>
                        <span className='max-[400px]:hidden text-[#2738F5] font-poppins font-bold lg:p-1'>Agregar</span>
                    </button>
                </div>
                <div className='lg:flex lg:flex-row lg:justify-between'>
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 mb-[1.38rem] md:mb-0">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold font-poppins mb-1 lg:mb-[1.25rem]" for="grid-first-name">
                            Bases o frameworks
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 md:mb-0 lg:mb-[1.81rem]">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold mb-1 lg:mb-[1.5rem]" for="grid-state">
                            Nivel
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex justify-end mt-[0.5rem] lg:mt-[1.81rem]'>
                    <button className='flex p-1 lg:border-[2px] lg:border-[#2738F5] lg:rounded-2xl'>
                        <img src={AgregarInstitucion} alt="Boton-agregar-institucion" className='lg:p-1'/>
                        <span className='max-[400px]:hidden text-[#2738F5] font-poppins font-bold lg:p-1'>Agregar</span>
                    </button>
                </div>
                <div className='lg:flex lg:flex-row lg:justify-between'>
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 mb-[1.38rem] md:mb-0">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold font-poppins mb-1 lg:mb-[1.25rem]" for="grid-first-name">
                            Herramientas
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-full md:w-3/3 lg:w-[24.12rem] px-3 md:mb-0 lg:mb-[1.81rem]">
                        <label class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-bold mb-1 lg:mb-[1.5rem]" for="grid-state">
                            Nivel
                        </label>
                        <div class="relative divide-x divide-[#140B34]">
                            <select class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] lg:text-[1.25rem] py-1 lg:py-2 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                            <option>Selección</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex justify-end mt-[0.5rem] lg:mt-[1.81rem]'>
                    <button className='flex p-1 border-[2px] lg:border-[2px] border-[#2738F5] lg:border-[#2738F5] rounded-2xl lg:rounded-2xl'>
                        <img src={AgregarInstitucion} alt="Boton-agregar-institucion" className='lg:p-1'/>
                        <span className=' text-[#2738F5] font-poppins font-bold lg:p-1'>Agregar</span>
                    </button>
                </div>
                {/* _________________Ultima sección_________________ */}
                <div class="w-full md:w-3/3 px-3 mb-[1.38rem] mt-[4.06rem] lg:mt-[4.66rem] md:mb-0  lg:w-[62.25rem]">
                    <label class="block tracking-wide text-black text-[0.68rem] lg:text-[1.25rem] text-center lg:text-justify font-normal font-poppins mb-[0.81rem] lg:mb-[2.69rem]" for="grid-first-name">
                    Indícanos alguna otra competencia, herramienta o tecnología que conozcas que creas importante agregar:
                    </label>
                    <input class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] h-[4.75rem] lg:h-[6.67rem] py-1 lg:py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""/>
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

export default PerfilLaboralForm;