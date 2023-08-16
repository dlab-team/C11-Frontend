import mid1 from "../../assets/landing/mid1.png"
import mid2 from "../../assets/landing/mid2.png"
import mid3 from "../../assets/landing/mid3.png"
import { Carousel } from "@material-tailwind/react"

const ProgramExplanation = () => {
  return (
    <div>
      <header>
        <div className="text-center bg-celeste pb-0 pt-0 px-9">
          <h1 className="titulo pt-3 sm:pt-10 sm:text-base lg:text-3xl text-[#140B34]">
            Sin Juniors no hay Seniors
          </h1>
          <p className=" sm:pt-3 text-sm lg:text-2xl text-[#232323]">
            En este programa unimos la{" "}
            <span className="texto_azul">
              rapidez, eficiencia y visión de un desarrollador junior
            </span>{" "}
            junto con la{" "}
            <span className="texto_azul">
              experiencia y liderazgo de un senior TI
            </span>
            , quien acompañará al talento junior contratado para potenciar tu
            área digital, acá te explicamos cómo:
          </p>
        </div>
      </header>
      <section className="bg-celeste pb-28">
        <div className=" overflow-x-auto mx-4 sm:mx-0 sm:px-9 grid  sm:grid-cols-3 gap-4 justify-items-center text-center ">
          <Carousel className="rounded-xl">
            <article className="card max-w-sm overflow-hidden shadow-lg bg-[#FFFFFF] sm:bg-celeste">
            <img src={mid1} alt="" className="mb-14 max-h-36 inline" />
            <h1 className="titulo">Aceleramos</h1>
            <p>
              Aceleramos el proceso de contratación. Una vez que nos envíes tu
              necesidad de talento digital recibirás un listado con los mejores
              candidatos en 5 días.
            </p>
          </article>
            <article className="card max-w-sm overflow-hidden shadow-lg bg-[#FFFFFF] sm:bg-celeste">
            <img src={mid2} alt="" className="mb-14 max-h-36 inline" />
            <h1 className="titulo">Aceleramos</h1>
            <p>
              Aceleramos el proceso de contratación. Una vez que nos envíes tu
              necesidad de talento digital recibirás un listado con los mejores
              candidatos en 5 días.
            </p>
          </article>
            <article className="card max-w-sm overflow-hidden shadow-lg bg-[#FFFFFF] sm:bg-celeste">
            <img src={mid3} alt="" className="mb-14 max-h-36 inline" />
            <h1 className="titulo">Aceleramos</h1>
            <p>
              Aceleramos el proceso de contratación. Una vez que nos envíes tu
              necesidad de talento digital recibirás un listado con los mejores
              candidatos en 5 días.
            </p>
          </article>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default ProgramExplanation
