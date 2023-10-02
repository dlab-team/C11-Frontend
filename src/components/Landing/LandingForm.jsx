export default function LandingForm() {
  return (
    <form className="bg-[#140B34] w-[393px] sm:w-[590px] h-[852px] sm:h-[1007px] sm:mt-[78px] sm:mb-[98px] sm:rounded-[16px] text-[color:white] pb-0 pt-[32px] pl-[33px] sm:pl-[51px] pr-[27px] sm:pr-[50px] flex flex-col relative">
      <p className="text-[15px] sm:text-[20px] font-semibold h-[92px] sm:h-[90px] mb-[6px] sm:mb-[32px]">
        Si eres empresa y buscas talento TI, déjanos tu información en este
        formulario. En breve te contactaremos:
      </p>
      <div className="flex flex-row gap-[30px] sm:gap-[22px]">
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="name"
          >
            Nombre *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="surname"
          >
            Apellido *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="text"
            id="surname"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[30px] sm:gap-[22px] mt-[12.5008px] sm:mt-[16px]">
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="email"
          >
            Email corporativo *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="tel"
          >
            Número de teléfono *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="tel"
            id="tel"
          />
        </div>
      </div>
      <div className="mt-[28px] sm:mt-[16px]">
        <label
          className="block text-[13px] sm:text-[16px] font-normal"
          htmlFor="company-name"
        >
          ¿A qué empresa perteneces? *
        </label>
        <input
          className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6px] sm:mt-[16px] w-[300px] sm:w-[489px] h-9 bg-celeste"
          type="text"
          id="company-name"
        />
      </div>
      <section className="mt-[19px] mb-[33px]">
        <h3 className="mb-[23px] text-[13px] sm:text-[16px] font-bold sm:font-normal">
          Cargo/área de preferencia que buscas contratar *
        </h3>
        <div className="ml-[6px] sm:ml-[0px] flex gap-[14px] sm:gap-[8px] flex-col">
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-front"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-front"
              />
              Desarrollador Front End
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-back"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-back"
              />
              Desarrollador Full Stack / Backend
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-ui"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-ui"
              />
              Diseñador UX/UI
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-qa"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-qa"
              />
              Analista QA
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-mobile"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-mobile"
              />
              Desarrollador Mobile
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-data"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-data"
              />
              Datos
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="checkbox-others"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-others"
              />
              Otra
            </label>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[13px] mb-[42px] sm:mb-[40px]">
        <label
          className="text-[13px] sm:text-[16px] font-normal"
          htmlFor="questions"
        >
          ¿Dudas? Déjalas acá!
        </label>
        <textarea
          className="rounded-md sm:rounded-lg w-[343px] sm:w-[489px] h-[69px] sm:h-[85px] bg-celeste"
          id="questions"
        ></textarea>
      </div>
      <img
        className="absolute right-[0] bottom-[272px] sm:invisible"
        src="../../src/assets/image_moon.svg"
        alt="Moon Image"
      />
      <div className="flex items-center content-center justify-center mb-[37px] sm:mb-[40px]">
        <button
          className="text-[#2738F5] sm:border-none border-solid border-[#2738F5] border rounded-[8px] sm:rounded-3xl bg-[#fff] w-[342px] h-[37px] sm:w-[137px] sm:h-[68px] text-blue-700 font-bold text-[16px] sm:text-[24px] sm:font-bold sm:px-6 sm:py-4"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}
