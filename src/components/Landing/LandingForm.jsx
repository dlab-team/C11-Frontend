import React from "react";

export default function LandingForm() {
  return (
    <form class="bg-[#140B34] w-[353px] h-[852px] font-poppins">
      <p>
        Si eres empresa y buscas talento TI, déjanos tu información en este
        formulario. En breve te contactaremos:
      </p>
      <div>
        <lable className="block font-bold" htmlFor="name">
          Nombre *
        </lable>
        <input type="text" id="name" />
      </div>
      <div>
        <lable htmlFor="surname">Apellido *</lable>
        <input type="text" id="surname" />
      </div>
      <div>
        <lable htmlFor="email">Email corporativo *</lable>
        <input type="email" id="email" />
      </div>
      <div>
        <lable htmlFor="tel">Número de teléfono *</lable>
        <input type="tel" id="tel" />
      </div>
      <div>
        <lable htmlFor="company-name">¿A qué empresa perteneces? *</lable>
        <input type="text" id="company-name" />
      </div>
      <section>
        <h3>Cargo/área de preferencia que buscas contratar *</h3>
        <div>
          <div>
            <label htmlFor="checkbox-front">
              <input type="checkbox" id="checkbox-front" />
              Desarrollador Front End
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-back">
              <input type="checkbox" id="checkbox-back" />
              Desarrollador Full Stack / Backend
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-ui">
              <input type="checkbox" id="checkbox-ui" />
              Diseñador UX/UI
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-qa">
              <input type="checkbox" id="checkbox-qa" />
              Analista QA
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-mobile">
              <input type="checkbox" id="checkbox-mobile" />
              Desarrollador Mobile
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-data">
              <input type="checkbox" id="checkbox-data" />
              Datos
            </label>
          </div>
          <div>
            <label htmlFor="checkbox-others">
              <input type="checkbox" id="checkbox-others" />
              Otra
            </label>
          </div>
        </div>
      </section>
      <div>
        <label htmlFor="questions">¿Dudas? Déjalas acá!</label>
        <textarea id="questions"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
