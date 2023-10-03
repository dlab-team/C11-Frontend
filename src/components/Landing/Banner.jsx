/* import React from 'react' */
/* import '../components/bannerStyle.css' */

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen md:h-5/6 md:pt-[3.75rem] md:pb-[4.9375rem]">
      <div className="items-center container lg:justify-center flex mx-auto lg:gap-[3.375rem] flex-col md:flex-row">
        <div className="text-center w-[339px] lg:w-[590px] ">
          <h2 className="lg:items-center text-start lg:text-center py-8 px-4 md:py-[2.5rem]  text-[2.5rem] md:text-3xl font-semibold text-[#140B34]">
            ¿Cómo funcionamos?
          </h2>
          <h5 className="text-start lg:text-center text-[20px] ">
            Da click a nuestro video y en sólo 60 segundos conoce{" "}
            <span className="text-light-purple font-semibold text-[#2738F5]">
              Devsafio
            </span>{" "}
            y cómo estamos{" "}
            <span className="text-light-purple font-semibold text-[#2738F5]">
              cambiando el mundo TI
            </span>
            , acelerando y potenciando las células tecnológicas.
          </h5>
        </div>
        <div className="flex mt-[3.125rem]">
          <div>
            <iframe
              className="aspect-video w-[339px] lg:w-[556px]"
              title="Devsafio:¿Cómo funcionamos?"
              width="100%"
              height="340px"
              allowFullScreen
              src="https://www.youtube.com/embed/z5NPi7WrViU?si=G41Etx6_0H5oiYk-"
            >
              Error al cargar video.
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
