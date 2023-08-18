import React from "react";

export default function LandingForm() {
  return (
    <form className="bg-[#140B34] w-[393px] h-[852px] text-[color:white] pb-0 pt-[32px] pl-[33px] pr-[27px] flex flex-col relative">
      <p className="text-[15px] font-semibold h-[92px] mb-[6px]">
        Si eres empresa y buscas talento TI, déjanos tu información en este
        formulario. En breve te contactaremos:
      </p>
      <div className="flex flex-row gap-[30px]">
        <div>
          <label className="block text-[13px] font-normal" htmlFor="name">
            Nombre *
          </label>
          <input
            className="rounded-md mt-[6.5px] w-[138px] bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="block text-[13px] font-normal" htmlFor="surname">
            Apellido *
          </label>
          <input
            className="rounded-md mt-[6.5px] w-[138px] bg-celeste"
            type="text"
            id="surname"
          />
        </div>
      </div>
      <div className="flex flex-row gap-[30px] mt-[12.5px]">
        <div>
          <label className="block text-[13px] font-normal" htmlFor="email">
            Email corporativo *
          </label>
          <input
            className="rounded-md w-[138px] bg-celeste"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="block text-[13px] font-normal" htmlFor="tel">
            Número de teléfono *
          </label>
          <input
            className="rounded-md w-[138px] bg-celeste"
            type="tel"
            id="tel"
          />
        </div>
      </div>
      <div className="mt-[28px]">
        <label className="block text-[13px] font-normal" htmlFor="company-name">
          ¿A qué empresa perteneces? *
        </label>
        <input
          className="rounded-md mt-[6px] w-[300px]"
          type="text"
          id="company-name"
        />
      </div>
      <section className="mt-[19px] mb-[33px]">
        <h3 className="mb-[23px] text-[13px] font-bold">
          Cargo/área de preferencia que buscas contratar *
        </h3>
        <div className="ml-[6px] flex gap-[14px] flex-col">
          <div className="flex items-center content-center">
            <label className="text-[12px] font-normal" htmlFor="checkbox-front">
              <input
                className="bg-celeste align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-front"
              />
              Desarrollador Front End
            </label>
          </div>
          <div className="flex items-center content-center">
            <label className="text-[12px] font-normal" htmlFor="checkbox-back">
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-back"
              />
              Desarrollador Full Stack / Backend
            </label>
          </div>
          <div className="flex items-center content-center">
            <label className="text-[12px] font-normal" htmlFor="checkbox-ui">
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-ui"
              />
              Diseñador UX/UI
            </label>
          </div>
          <div className="flex items-center content-center">
            <label className="text-[12px] font-normal" htmlFor="checkbox-qa">
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-qa"
              />
              Analista QA
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] font-normal"
              htmlFor="checkbox-mobile"
            >
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-mobile"
              />
              Desarrollador Mobile
            </label>
          </div>
          <div className="flex items-center content-center">
            <label className="text-[12px] font-normal" htmlFor="checkbox-data">
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-data"
              />
              Datos
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] font-normal"
              htmlFor="checkbox-others"
            >
              <input
                className="align-middle mr-[6px] w-[17px] h-[17px]"
                type="checkbox"
                id="checkbox-others"
              />
              Otra
            </label>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[13px] mb-[42px]">
        <label className="text-[13px] font-normal" htmlFor="questions">
          ¿Dudas? Déjalas acá!
        </label>
        <textarea
          className="rounded-md w-[343px] h-[69px]"
          id="questions"
        ></textarea>
      </div>
      <img
        className="absolute right-[0] bottom-[272px]"
        src="../../src/assets/image_moon.svg"
        alt="Moon Image"
      />
      <div className="flex items-center content-center justify-center mb-[37px]">
        <button
          className="rounded-[24px] bg-[#575253] w-[170px] h-[32px] text-black text-[color:black] text-[16px] font-bold"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}
