import Line from "../../assets/Line.svg";
function PersonalInfoForm() {
  return (
    <section className="md:pt-[69px] md:pb-[61px] md:px-[150px] bg-[white] pl-[35px] pr-[45px] text-[color:black]">
      <div className="flex flex-row justify-center mt-[26px] mb-[3rem] lg:mb-[4rem]">
        <div className=" text-[white] flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white bg-[#2738F5] border border-[#2738F5] lg:text-[2.5rem]">
          1
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
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
      <h1 className="text-center lg:text-left lg:ml-[16.69rem] font-bold mb-[21px] lg:text-[2rem] lg:font-bold font-poppins">
        INFORMACIÓN PERSONAL
      </h1>
      <form action="" className="w-full pl-[42px] pr-[43px]">
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Nombre <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Apellido <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Email <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            País <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black">
            <select
              class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Selección</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Región <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black">
            <select
              class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Selección</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Ciudad <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black">
            <select
              class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Selección</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Numero telefónico <span className="text-[#AC231B]">*</span>
          </label>
          <div className="flex gap-1 justify-center">
            <input
              className="font-semibold h-[29px] pl-[14px] text-xs border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[79px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
              value="CL  +569"
            />{" "}
            <input
              className="h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[142px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="mt-[18px]">
          <label
            className="block sm:text-[1rem] font-normal text-[10px] mb-[10px]"
            htmlFor="name"
          >
            ¿Con qué género te identificas?{" "}
            <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option className="m-0 p-0">Selección</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="mt-[1.88rem] mb-[2rem] lg:mb-[2.5rem] text-left px-[0.8rem] text-[0.69rem] font-semibold lg:text-[1.5rem]">
          A continuación, indícanos 2 (dos) carreras profesionales, cursos,
          bootcamp o certificaciones cursadas relacionadas al desarrollo de
          software, diseño o TI (puedes indicarnos las más importantes o
          actuales):
        </h2>
        <div class="w-full md:w-3/3 px-3 mb-[1.38rem] md:mb-0 lg:mb-[1.5rem]">
          <label
            class="block tracking-wide text-black text-xs text-[0.75rem] lg:text-[1.25rem] font-semibold mb-2 lg:mb-[1.5rem]"
            for="grid-first-name"
          >
            Nombre de la carrera, curso, bootcamp o certificación 1:
            <span className="text-[#AC231B]">*</span>
          </label>
          <input
            class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
        </div>
        <div class="w-full md:w-3/3 px-3 mb-[1.38rem] md:mb-0">
          <label
            class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal font-poppins mb-2 lg:mb-[1.25rem]"
            for="grid-first-name"
          >
            Nombre institución 1:<span className="text-[#AC231B]">*</span>
          </label>
          <input
            class="appearance-none block w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] rounded-[0.5rem] py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
        </div>
        <div class="w-full md:w-3/3 px-3 md:mb-0 lg:mb-[1.81rem]">
          <label
            class="block tracking-wide text-black text-xs lg:text-[1.25rem] font-normal mb-2 lg:mb-[1.5rem]"
            for="grid-state"
          >
            Tipo de institución 1:<span className="text-[#AC231B]">*</span>
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-1 px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Selección</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {/* _________________Ultima sección_________________ */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row">
            <div class="w-full md:w-5/5 lg:w-[36.8rem] px-3 md:mb-0">
              <label
                class="block tracking-wide text-black text-xs font-normal mb-2 text-[0.625rem] lg:text-[1.25rem]"
                for="grid-state"
              >
                ¿Cuál es tu situación educacional actual (Bootcamp, diplomados,
                universidad, cursos u otros)?
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] px-4 lg:py-1 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Selección</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 items-end w-full md:w-2/3 lg:w-[24rem] px-3 md:mb-0">
              <label
                class="block  tracking-wide text-black text-[0.75rem] lg:text-[1.25rem] font-normal"
                for="grid-state"
              >
                Nivel Inglés:
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] px-4 lg:py-1 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-[#E2F2FE] focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Selección</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
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
        {/* _____________Botones_____________ */}
        <div className="flex justify-center mb-[1rem] mt-[1rem]">
          <div class="inline-flex">
            <button class="bg-white text-[#2738F5] border-[1px] border-[#2738F5] font-bold py-2 px-4 rounded-l-xl mr-[0.31rem] lg:mr-[1.25rem] lg:text-[1.5rem]">
              Atrás
            </button>
            <button class="bg-[#2738F5] text-white font-bold py-2 px-4 rounded-r-xl lg:text-[1.5rem]">
              Continuar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default PersonalInfoForm;
