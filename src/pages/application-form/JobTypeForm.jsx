import Line from "../../assets/Line.svg";
function JobTypeForm() {
  return (
    <section className="md:pt-[69px] md:pb-[61px] md:px-[150px] bg-[white] px-[30px] text-[color:black]">
      <div className="flex flex-row justify-center mt-[26px] mb-[3rem] lg:mb-[4rem]">
        <div className=" flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] lg:text-[2.5rem]">
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
        <div className="text-[white]  bg-[#2738F5]  flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          5
        </div>
      </div>
      <h1 className="text-center lg:text-left lg:ml-[16.69rem] font-bold mb-[21px] lg:text-[2rem] lg:font-bold font-poppins">
        ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
      </h1>
      <form action="" className="w-full">
        <div>
          <label className="w-full text-base" htmlFor="">
            Déjanos una breve descripción con respecto tu trabajo ideal
          </label>
          <textarea
            className="h-[135px] mt-[21px] w-full rounded-[8px] border-[0.5px] border-[#140B34]  bg-[#E2F2FE]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="mt-[56px]">
          <p className="text-base text-justify mb-[16px] font-[500]">
            Indícanos tu disponibilidad laboral:
          </p>
          <div className="flex flex-col gap-[12px] text-base">
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Full Time
            </label>
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Part Time
            </label>
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Freelancer
            </label>
          </div>
        </div>
        <div className="mt-[72px]">
          <label
            className="block text-base text-justify mb-[16px] font-[500] mb-[10px]"
            htmlFor="name"
          >
            ¿Qué describe mejor tu situación actual?
            <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <div className="mt-[58px]">
          <p className="text-base text-justify mb-[16px] font-[500]">
            ¿Cuentas con Visa de trabajo activa en?
          </p>
          <div className="flex flex-col gap-[12px] text-base">
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Estados Unidos
            </label>
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Unión Europea
            </label>
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Mi país de residencia actual
            </label>
            <label htmlFor="radio-direct">
              <input
                className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Otros países
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobTypeForm;
