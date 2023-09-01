function Introduction() {
  return (
    <section className="bg-[#2C2348] pl-[35px] pr-[45px] text-[color:white] lg:hidden">
      <h1 className="mb-16 pt-[23px] text-4xl font-bold pl-9 leading-[54px]">
        ¡POSTULA
        <br />Y ÚNETE
        <br /> A DEVSAFÍO!
      </h1>
      <p className="leading-[206%] mb-8">
        Devsafio es una iniciativa que une talento junior Latinoamericano
        (trainee, bootcamp, entre otros) con mentores senior TI para potenciar
        su empleabilidad inicial e impactar la industria tecnológica.
      </p>
      <p className="leading-[206%] mb-[83px]">
        Si estás{" "}
        <strong>
          buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data
          Science)
        </strong>
        te dejamos este formulario para que seas parte de distintas ofertas
        laborales que tenemos junto a importantes empresas en Latinoamérica.
      </p>
      <article className="mb-[30px] mr-[-5px]">
        <h2 className="text-2xl font-bold leading-8">
          ¿Debo pagar algo por inscribirme y participar?
        </h2>
        <p className="mt-[48px] text-sm leading-7">
          ¡No! Participar en nuestras ofertas{" "}
          <strong>no tiene costo para ti</strong>. Una vez seas seleccionado
          para la contratación, se te hará una oferta remunerada inferior a la
          de mercado, sin embargo, tendrás el{" "}
          <strong>
            beneficio y la garantía de ser apoyado y guiado de forma
            personalizada por un mentor senior
          </strong>
          . Este programa tiene una duración de 3 meses, posterior a esto tienes
          la posibilidad de ser contratado directamente por la empresa, con sus
          distintos beneficios y remuneración acorde al mercado.
        </p>
      </article>
      <article className="mr-[-5px]">
        <p className=" text-sm leading-7 mb-[45px]">
          Si quieres saber más de nosotros y nuestras actividades, nos puedes
          seguir en:
        </p>
        <div className="flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="48"
            viewBox="0 0 50 48"
            fill="none"
          >
            <path
              d="M9.79385 0C4.408 0 0 4.16991 0 9.26507V38.0162C0 43.1113 4.4079 47.2798 9.79385 47.2798H40.1859C45.5718 47.2798 49.9781 43.1114 49.9781 38.0162V9.26507C49.9781 4.17001 45.5718 0 40.1859 0H9.79385ZM12.2572 7.80212C14.8396 7.80212 16.4302 9.40589 16.4793 11.514C16.4793 13.5756 14.8394 15.2245 12.2072 15.2245H12.1588C9.6255 15.2245 7.98815 13.5757 7.98815 11.514C7.98815 9.40594 9.67505 7.80212 12.2571 7.80212H12.2572ZM34.5112 17.6553C39.4776 17.6553 43.2006 20.7261 43.2006 27.3252V39.6446H35.653V28.1512C35.653 25.263 34.5606 23.2925 31.8292 23.2925C29.744 23.2925 28.5011 24.6207 27.9554 25.9036C27.756 26.3626 27.7071 27.0037 27.7071 27.6458V39.6446H20.1594C20.1594 39.6446 20.2584 20.1751 20.1594 18.1591H27.7086V21.2017C28.7116 19.7377 30.5057 17.6552 34.5112 17.6552V17.6553ZM8.43335 18.1607H15.981V39.6447H8.43335V18.1607Z"
              fill="white"
            />
          </svg>
          <div className="mr-[-5px] flex flex-col items-end">
            <p className="text-right text-sm font-bold pb-[5px]">
              TIEMPO: 5-10 MINUTOS
            </p>
            <button className="text-[#2738F5] w-[125px] font-bold text-[10px] bg-white rounded-3xl px-[11.5px] py-[7px]">
              ¡VAMOS CON TODO!
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Introduction;
