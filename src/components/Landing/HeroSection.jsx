/* eslint-disable react/prop-types */
import IMG from "../../assets/Development.png";
import ImgLuna from "../../assets/moon.png";
import ImgLg from "../../assets/development-lg.png";
import LunaFlotante from "../../assets/moon-1.png";
import LunaFlotanteDos from "../../assets/moon-2.png";
import Oval from "../../assets/Oval.png";

function HeroSection({ }) {
  const handleClickScroll = () => {
    const element = document.getElementById("landing-form");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="lg:relative flex flex-col pt-[3.06rem] bg-gradient-to-b from-[#2738F5] from-33% via-[#1E239A] via-33% to-[#140B34] to-33% w-screen h-screen">
      <div className="flex justify-center content-center pt-[15.5%] pl-[42px] pr-[48.47px] pb-[47px]">
        <img
          src={IMG}
          alt="Img-landing-mobile"
          className="visible lg:invisible w-[299px] h-[218px] lg:w-[500px] lg:h-[400px]"
        />
      </div>
      <div className="lg:absolute flex flex-col justify-center content-center mb-[1.50rem] lg:mb-[6.12rem]">
        <h1
          className="text-center text-[white] text-[2.0625rem] font-poppins font-bold leading-normal mb-[0
              80rem] lg:text-left lg:ml-[7.5rem] lg:text-[4.5rem] lg:mb-[1.5rem] lg:font-bold lg:font-poppins"
        >
          ¿Buscas talento TI?
        </h1>
        <p className="text-center text-[white] text-[0.8125rem] font-semibold leading-normal mb-[1.44rem] lg:text-left lg:ml-[7.5rem] lg:text-[2.25rem] lg:w-[40%] font-poppins">
          Contrata{" "}
          <span className="text-[#008FF7] text-[0.8125rem] lg:text-[2.25rem]">
            Talento TI
          </span>{" "}
          rápido, inteligente y eficiente
        </p>
        <p className="text-left text-[white] text-[0.9375rem] font-poppins leading-normal px-[2.40rem] lg:ml-[5rem] lg:text-[1.25rem] lg:w-[55%]">
          Te encontramos profesionales en 5 días y los acompañamos por 3 meses
          con tutores senior para potenciar y acelerar sus habilidades técnicas
        </p>
      </div>
      <div className="ml-[2.06rem] lg:ml-[7.5rem] md:ml-[40%] lg:absolute lg:top-[570px]">
        <button
          onClick={handleClickScroll}
          className="bg-[white] text-[#2738F5] text-[0.625rem] lg:text-[1.5rem] font-poppins font-bold rounded-[1.5rem] px-[1.5rem] py-[1rem] mb-[33%] md:mb-[0] "
        >
          QUIERO CONTRATAR
        </button>
        <img
          src={ImgLuna}
          alt="Img-media-lune-Mobile"
          className="lg:hidden w-[7.3125rem] ml-[60%]"
        />
      </div>
      <img
        src={ImgLg}
        alt="Img-svg"
        className="max-[1024px]:hidden absolute w-[45%] h-[68%] ml-[55%] mt-[8.2rem]"
      />
      <img
        src={LunaFlotante}
        alt="Luna-flotante"
        className="max-[1024px]:hidden absolute lg:ml-[2.61rem] lg:w-[70px] lg:h-[70px] lg:mt-[37.5rem]"
      />
      <img
        src={LunaFlotanteDos}
        alt="Luna-flotante-Dos"
        className="max-[1024px]:hidden absolute ml-[78.81rem]"
      />
      <img
        src={Oval}
        alt="Oval"
        className="max-[1024px]:hidden absolute lg:ml-[11.44rem] lg:w-[25px] lg:h-[25px] lg:mt-[37rem]"
      />
      <img
        src={Oval}
        alt="Oval-Dos"
        className="max-[1024px]:hidden absolute lg:ml-[18.12rem] lg:w-[18px] lg:h-[18px] lg:mt-[40.19rem]"
      />
      <img
        src={Oval}
        alt="Oval-Tres"
        className="max-[1024px]:hidden absolute lg:ml-[23.5rem] lg:w-[11px] lg:h-[11px] lg:mt-[37.5rem]"
      />
      <img
        src={Oval}
        alt="Oval-Cuatro"
        className="max-[1024px]:hidden absolute lg:ml-[43rem] lg:w-[25px] lg:h-[25px] lg:mt-[33.8rem] lg:rotate-45"
      />
      <img
        src={Oval}
        alt="Oval-Cinco"
        className="max-[1024px]:hidden absolute lg:ml-[43.2rem] lg:w-[11px] lg:h-[11px] lg:mt-[25.8rem] lg:rotate-45"
      />
      <img
        src={Oval}
        alt="Oval-Seis"
        className="max-[1024px]:hidden absolute lg:ml-[51.8rem] lg:w-[15px] lg:h-[15px] lg:mt-[40rem] lg:rotate-45"
      />
      <img
        src={Oval}
        alt="Oval-Siete"
        className="max-[1024px]:hidden absolute lg:ml-[55.5rem] lg:w-[18px] lg:h-[18px] lg:mt-[4.5rem]"
      />
      <img
        src={Oval}
        alt="Oval-Ocho"
        className="max-[1024px]:hidden absolute lg:ml-[65.8rem] lg:w-[25px] lg:h-[25px] lg:mt-[1.5rem]"
      />
      <img
        src={Oval}
        alt="Oval-Nueva"
        className="max-[1024px]:hidden absolute lg:ml-[72.5rem] lg:w-[10px] lg:h-[10px] lg:mt-[2.4rem]"
      />
    </div>
  );
}

export default HeroSection;
