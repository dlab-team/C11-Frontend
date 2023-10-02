/* import React from 'react' */
/* import '../components/bannerStyle.css' */

const Banner = () => {
  return (
    <div className="flex justify-center">
      <section className="w-[339px] flex justify-center items-center h-screen md:h-5/6 md:py-11">
        <div className="container flex mx-auto flex-col md:flex-row">
          <div className="text-center ">
            <h2 className="text-start py-8 px-4 md:py-1.5  text-[2.5rem] md:text-3xl font-semibold text-[#140B34]">
              ¿Cómo funcionamos?
            </h2>
            <h5 className="text-start py-4 px-4 text-[20px] ">
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
          <div className="flex">
            <div>
              <iframe
                className="aspect-video w-[339px]"
                title="Devsafio:¿Cómo funcionamos?"
                width="640"
                height="360"
                allowFullScreen
                src="https://www.youtube.com/embed/z5NPi7WrViU?si=G41Etx6_0H5oiYk-"
              >
                Error al cargar video.
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
