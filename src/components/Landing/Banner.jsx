/* import React from 'react' */
/* import '../components/bannerStyle.css' */

function Banner() {
  return (
    <div className="w-[90rem] h-[29.9rem] flex flex-col ">
      <h1 className=" [#140B34] sm:w-[19.6rem] sm:h-[8.1rem] text-center font-bold font-poppins text-[2.5rem] font-semibold ">
        ¿Cómo funcionamos?
      </h1>

      <div className="w-[75rem] h-[21.25rem]  ">
        <div className="w [40.25rem]">
          <p className="text-[#140B34] w-[19.6rem] h-[9rem] text-center text-[1.5rem] ml-24 mr-4 mt-9 not-italic font-normal;">
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
        </div>
        <div className="video-container w-[34.75rem] h-[21.25rem]  ">
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
