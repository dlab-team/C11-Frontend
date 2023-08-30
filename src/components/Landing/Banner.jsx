/* import React from 'react' */
/* import '../components/bannerStyle.css' */

const Banner = () => {
  return (
  <section className="flex justify-center items-center h-screen md:h-5/6 md:py-11">
  <div className="container flex mx-auto flex-col md:flex-row">
    <div className="text-center ">
      <h2 className="py-8 px-4 md:py-1.5  text-5xl md:text-3xl font-semibold text-[#140B34]">
        ¿Cómo funcionamos?
      </h2>
      <h5 className="py-4 px-4 text-2xl  ">
        Da click a nuestro video y en sólo 60 segundos conoce{' '}
        <span className="text-light-purple font-semibold text-[#2738F5]">Devsafio</span> y
        cómo estamos{' '}
        <span className="text-light-purple font-semibold text-[#2738F5]">
          cambiando el mundo TI
        </span>
        , acelerando y potenciando las células tecnológicas.
      </h5>
    </div>
    <div className=" items-center">
      <div className="">
        <iframe
          className="aspect-video "
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

  );
};

export default Banner;
