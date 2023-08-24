import React from "react";

export default function LandingForm() {
  return (
    <form className="bg-[#140B34] w-[24.5625rem] sm:w-[36.875rem] h-[53.25rem] sm:h-[62.9375rem] sm:mt-[4.875rem] sm:mb-[6.125rem] sm:rounded-[1rem] text-[color:white] pb-0 pt-[2rem] pl-[2.0625rem] sm:pl-[3.1875rem] pr-[1.6875rem] sm:pr-[3.125rem] flex flex-col relative">
      <p className="text-[0.9375rem] sm:text-[1.25rem] font-semibold h-[5.75rem] sm:h-[5.625rem] mb-[0.375rem] sm:mb-[2rem]">
        Si eres empresa y buscas talento TI, déjanos tu información en este
        formulario. En breve te contactaremos:
      </p>
      <div className="flex flex-row gap-[1.875rem] sm:gap-[1.375rem]">
        <div>
          <label
            className="block text-[0.8125rem] sm:text-[1rem] font-normal"
            htmlFor="name"
          >
            Nombre *
          </label>
          <input
            className="rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[8.625rem] sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label
            className="block text-[0.8125rem] sm:text-[1rem] font-normal"
            htmlFor="surname"
          >
            Apellido *
          </label>
          <input
            className="rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[8.625rem] sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="surname"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[1.875rem] sm:gap-[1.375rem] mt-[0.7813rem] sm:mt-[1rem]">
        <div>
          <label
            className="block text-[0.8125rem] sm:text-[1rem] font-normal"
            htmlFor="email"
          >
            Email corporativo *
          </label>
          <input
            className="rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[8.625rem] sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label
            className="block text-[0.8125rem] sm:text-[1rem] font-normal"
            htmlFor="tel"
          >
            Número de teléfono *
          </label>
          <input
            className="rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[8.625rem] sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="tel"
            id="tel"
          />
        </div>
      </div>
      <div className="mt-[1.75rem] sm:mt-[1rem]">
        <label
          className="block text-[0.8125rem] sm:text-[1rem] font-normal"
          htmlFor="company-name"
        >
          ¿A qué empresa perteneces? *
        </label>
        <input
          className="rounded-md sm:rounded-lg mt-[0.375rem] sm:mt-[1rem] w-[18.75rem] sm:w-[30.5625rem] h-9 bg-celeste"
          type="text"
          id="company-name"
        />
      </div>
      <section className="mt-[1.1875rem] mb-[2.0625rem]">
        <h3 className="mb-[1.4375rem] text-[0.8125rem] sm:text-[1rem] font-bold sm:font-normal">
          Cargo/área de preferencia que buscas contratar *
        </h3>
        <div className="ml-[0.375rem] sm:ml-[0rem] flex gap-[0.875rem] sm:gap-[0.5rem] flex-col">
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-front"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-front"
              />
              Desarrollador Front End
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-back"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-back"
              />
              Desarrollador Full Stack / Backend
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-ui"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-ui"
              />
              Diseñador UX/UI
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-qa"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-qa"
              />
              Analista QA
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-mobile"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-mobile"
              />
              Desarrollador Mobile
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-data"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-data"
              />
              Datos
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[0.75rem] sm:text-[1rem] font-normal"
              htmlFor="checkbox-others"
            >
              <input
                className="align-middle mr-[0.375rem] sm:mr-[1.5rem] w-[1.0625rem] sm:w-[1.5rem] h-[1.0625rem] sm:h-[1.5rem] appearance-none bg-celeste"
                type="checkbox"
                id="checkbox-others"
              />
              Otra
            </label>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[0.8125rem] mb-[2.625rem] sm:mb-[2.5rem]">
        <label
          className="text-[0.8125rem] sm:text-[1rem] font-normal"
          htmlFor="questions"
        >
          ¿Dudas? Déjalas acá!
        </label>
        <textarea
          className="rounded-md sm:rounded-lg w-[21.4375rem] sm:w-[30.5625rem] h-[4.3125rem] sm:h-[5.3125rem] bg-celeste"
          id="questions"
        ></textarea>
      </div>
      <img
        className="absolute right-[0] bottom-[17rem] sm:invisible"
        src="../../src/assets/image_moon.svg"
        alt="Moon Image"
      />
      <div className="flex items-center content-center justify-center sm:justify-start mb-[2.3125rem] sm:mb-[2.5rem]">
        <button
          className="rounded-[1.5rem] sm:rounded-3xl bg-[#575253] sm:bg-[#fff] w-[10.625rem] sm:w-[8.5625rem] h-[2rem] sm:h-[4.25rem] text-black-700 sm:text-blue-700 text-[1rem] sm:text-[1.5rem] sm:font-bold sm:px-6 sm:py-4"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}
