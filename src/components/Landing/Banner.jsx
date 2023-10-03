/* import React from 'react' */
/* import '../components/bannerStyle.css' */

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen md:h-5/6 md:pt-[60px] md:pb-[79px]">
      <div className="items-center container lg:justify-center flex mx-auto lg:gap-[54px] flex-col md:flex-row">
        <div className="text-center w-[21.1875rem] lg:w-[36.875rem]">
          <h2 className="lg:text-[2rem] lg:items-center text-start lg:text-center py-8 lg:px-4 md:py-[40px]  text-[40px] md:text-3xl font-semibold text-[#140B34]">
            ¿Cómo funcionamos?
          </h2>
          <h5 className="lg:text-[1.5rem] text-start lg:text-center text-[1.25rem] ">
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
        <div className="flex mt-[50px]">
          <div>
            <iframe
              className="aspect-video w-[21.1875rem] lg:w-[34.75rem]"
              title="Devsafio:¿Cómo funcionamos?"
              width="100%"
              height="21.25rem"
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
