import { React } from 'react';
import IMG from '../../assets/Development.png';
import ImgLuna from '../../assets/moon.png';
import ImgLg from '../../assets/development-lg.png';
import LunaFlotante from '../../assets/moon-1.png';
import LunaFlotanteDos from '../../assets/moon-2.png';
import Oval from '../../assets/Oval.png';

function MainBuscasTalento(props) {
  
  return (
    <div className='flex flex-col h-screen w-screen  bg-gradient-to-b from-[#2738F5] from-33% via-[#1E239A] via-33% to-[#140B34] to-33% sm:bg-gradient-to-b sm:from-[#2738F5] from-33% sm:via-[#1E239A] via-33% sm:to-[#140B34] to-33% lg:flex lg:flex-row sm:pt-[40px]'>
        <img src={IMG} alt="Img-landing-mobile" className='lg:hidden ml-[42px] lg:ml-[0px] mt-[111px] mb-[47px] object-scale-down h-[218px] w-[300px]'/>
        <div className='ml-[30px] lg:ml-[0px] lg:pl-[50px] xl:pl-[120px]'>
          <h1 className='text-white font-poppins lg:font-poppins xl:font-poppins text-left font-bold text-[2.0625rem] mb-[14px] lg:text-[4.5rem] lg:mb-[24px] lg:w-[708px] leading-normal'>{props.titulo}</h1>
          <p className='text-white font-poppins lg:font-poppins xl:font-poppins text-left text-[0.8125rem] font-normal mb-[23px] lg:text-[2.25rem] lg:w-[582px] lg:mb-[24px] leading-normal'>Contrata <span className='text-[#008FF7]'>Talento TI</span> rápido, inteligente y eficiente</p>
          <p className='text-white font-poppins lg:font-poppins xl:font-poppins text-left text-[0.9375rem] mt-[20px] mb-[21px] w-[280px] lg:text-[1.25rem] lg:w-[712px] lg:mb-[98px] leading-normal'>{props.resumen}</p>
          <button className='bg-white font-poppins text-[0.625rem] leading-[15px] text-[#2738F5] rounded-[24px] font-bold max-[600px]:w-[125px] h-[29px] mb-[103px] lg:w-[294px] lg:h-[68px] lg:text-[1.25rem] lg:border-none'>
            QUIERO CONTRATAR
          </button>
        </div>
        {/* __________________Imagenes del diseño__________________ */}
        <img src={ImgLg} alt="Img-svg" className='max-[600px]:hidden absolute xl:ml-[798px] xl:w-[642px] xl:h-[600px] lg:ml-[780px] lg:w-[500px] lg:h-[500px] w-[500px] h-[500px] mt-[115px]'/>
        <img src={ImgLuna} alt="Img-media-lune-Mobile" className='lg:hidden object-cover h-[38px] w-[117px] ml-[264px]'/>
        <img src={LunaFlotante} alt="Luna-flotante" className='max-[600px]:hidden absolute lg:ml-[1250px] lg:w-[70px] lg:h-[70px] lg:mt-[0px]'/>
        <img src={LunaFlotanteDos} alt="Luna-flotante-Dos" className='max-[600px]:hidden absolute lg:ml-[42px] lg:w-[70px] lg:h-[70px] lg:mt-[590px]'/> 
        <img src={Oval} alt="Oval" className='max-[600px]:hidden absolute lg:ml-[195px] lg:w-[25px] lg:h-[25px] lg:mt-[585px]'/>
        <img src={Oval} alt="Oval-Dos" className='max-[600px]:hidden absolute lg:ml-[290px] lg:w-[18px] lg:h-[18px] lg:mt-[635px]'/>
        <img src={Oval} alt="Oval-Tres" className='max-[600px]:hidden absolute lg:ml-[375px] lg:w-[11px] lg:h-[11px] lg:mt-[590px]'/>
        <img src={Oval} alt="Oval-Cuatro" className='max-[600px]:hidden absolute lg:ml-[690px] lg:w-[25px] lg:h-[25px] lg:mt-[490px] lg:rotate-45'/>
        <img src={Oval} alt="Oval-Cinco" className='max-[600px]:hidden absolute lg:ml-[688px] lg:w-[11px] lg:h-[11px] lg:mt-[398px] lg:rotate-45'/>
        <img src={Oval} alt="Oval-Seis" className='max-[600px]:hidden absolute lg:ml-[820px] lg:w-[15px] lg:h-[15px] lg:mt-[610px] lg:rotate-45'/>
        <img src={Oval} alt="Oval-Siete" className='max-[600px]:hidden absolute lg:ml-[884px] lg:w-[18px] lg:h-[18px] lg:mt-[75px] '/>
        <img src={Oval} alt="Oval-Ocho" className='max-[600px]:hidden absolute lg:ml-[1045px] lg:w-[25px] lg:h-[25px] lg:mt-[25px] '/>
    </div>
  )
}

export default MainBuscasTalento;
