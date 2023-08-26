/* import React from 'react' */
/* import '../components/bannerStyle.css' */

function Banner() {
  return (
    <div className="w-[1440px] h-[479] mb-7">
      <h1 className=" [#140B34] w-96 h-12 mt-28 text-center ml-44 font-bold font-poppins text-2xl font-semibold leading-10">
        ¿Cómo funcionamos?
      </h1>
      <div className="flex flex-auto w-50">
        <p className="text-[#140B34] w-[590px] h-[144px] text-center text-[25px] ml-24 mr-4 mt-9 not-italic font-normal leading-[normal];">
          Da click a nuestro video y en sólo 60 segundos conoce{" "}
          <span className="text-[#2738F5] text-2xl not-italic font-semibold leading-[normal];">
            Devsafio
          </span>
          y cómo estamos{" "}
          <span className="text-[#2738F5] text-2xl not-italic font-semibold leading-[normal];">
            cambiando el mundo TI
          </span>
          , acelerando y potenciando las células tecnológicas.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z5NPi7WrViU?si=G41Etx6_0H5oiYk-"
            title="Video de YouTube"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Banner;
