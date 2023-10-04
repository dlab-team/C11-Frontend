import Line from "../../assets/Line.svg";
import AgregarInstitucion from "../../assets/boton-más.svg";

function InformacionProfesionalForm() {
  return (
    <div className="container lg:pt-[69px] ">
      <div className="flex flex-row justify-center mt-[1rem] lg:mt-[10] mb-[3rem] lg:mb-[4rem] lg:ml-[20%]">
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          1
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-[#2738F5] border border-[#2738F5] text-[white] lg:text-[2.5rem]">
          2
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          3
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          4
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          5
        </div>
      </div>
      <h1 className="text-center lg:text-left lg:ml-[16.69rem] font-bold mb-[2rem] lg:text-[2rem] lg:font-bold font-poppins">
        INFORMACIÓN PROFESIONAL
      </h1>
      <div className="lg:ml-[21rem]">
        <form action="" className="w-full pl-[22px] pr-[30px] lg:w-[90%]">
          <div className=" md:w-3/3  mb-[1.38rem] md:mb-0">
            <label
              className="block tracking-wide text-black text-xs font-poppins mb-[0.69rem] lg:mb-[1.5rem] lg:text-[1.25rem]"
              htmlFor="grid-state"
            >
              ¿Cuál es tu máximo nivel educacional?
              <span className="text-[#AC231B]">*</span>
            </label>
            <div className="relative divide-x divide-black text-[10px]">
              <select
                className="lg:text-[20px] lg:h-[48px]  block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option className="m-0 p-0">Selección</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <h2 className="mt-[1.88rem] mb-[2rem] lg:mb-[2.5rem] text-left text-[11px] font-semibold lg:text-[1.5rem]">
            A continuación, indícanos 2 (dos) carreras profesionales, cursos,
            bootcamp o certificaciones cursadas relacionadas al desarrollo de
            software, diseño o TI (puedes indicarnos las más importantes o
            actuales):
          </h2>
          <div className="w-full md:w-3/3 mb-[1.38rem] md:mb-0 lg:mb-[1.5rem]">
            <label
              className="mr-[-30px] block tracking-wide text-black text-xs text-[0.75rem] lg:text-[1.25rem] font-semibold mb-2 lg:mb-[1.5rem]"
              htmlFor="grid-first-name"
            >
              Nombre de la carrera, curso, bootcamp o certificación 1:
              <span className="text-[#AC231B]">*</span>
            </label>
            <input
              className="lg:h-[48px] appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-3/3   mb-[1.38rem] md:mb-0">
            <label
              className="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal font-poppins mb-2 lg:mb-[1.25rem]"
              htmlFor="grid-first-name"
            >
              Nombre institución 1:<span className="text-[#AC231B]">*</span>
            </label>
            <input
              className="lg:h-[48px] appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-3/3   md:mb-0 lg:mb-[1.81rem]">
            <label
              className="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal mb-2 lg:mb-[1.5rem]"
              htmlFor="grid-state"
            >
              Tipo de institución 1:<span className="text-[#AC231B]">*</span>
            </label>
            <div className="relative divide-x divide-black text-[10px]">
              <select
                className="lg:text-[20px] lg:h-[48px]  block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option className="m-0 p-0">Selección</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-end mt-[0.5rem] lg:mt-[1.81rem]">
              <button className="flex p-1 lg:border-[2px] lg:border-[#2738F5] lg:rounded-xl">
                <img
                  src={AgregarInstitucion}
                  alt="Boton-agregar-institucion"
                  className="lg:p-1"
                />
                <span className="max-[1024px]:hidden text-[#2738F5] font-poppins font-bold lg:p-1">
                  Agregar
                </span>
              </button>
            </div>
            {/* _________________Ultima sección_________________ */}
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-[8px] lg:gap-[20px]">
              <div className="w-full md:w-5/5 lg:w-[36.8rem]   md:mb-0">
                <label
                  className="block tracking-wide text-black font-normal mb-2 text-[0.625rem] lg:text-[1.25rem]"
                  htmlFor="grid-state"
                >
                  ¿Cuál es tu situación educacional actual (Bootcamp,
                  diplomados, universidad, cursos u otros)?
                </label>
                <div className="relative divide-x divide-black text-[10px]">
                  <select
                    className="lg:text-[20px] lg:h-[48px]  block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option className="m-0 p-0">Selección</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 items-end w-full md:w-2/3 lg:w-[24rem]   md:mb-0">
                <label
                  className="block pl-[10px] pt-[40px] tracking-wide text-black text-xs lg:text-[1.25rem] font-normal"
                  htmlFor="grid-state"
                >
                  Nivel Inglés:
                </label>
                <div className="relative divide-x divide-black text-[10px]">
                  <select
                    className="lg:text-[20px] lg:h-[48px]  block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option className="m-0 p-0">Selección</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InformacionProfesionalForm;
