import mid1 from "../../assets/landing/mid1.png"
import mid2 from "../../assets/landing/mid2.png"
import mid3 from "../../assets/landing/mid3.png"

const ProgramExplanation = () => {
  return (
    <div>
      <header>
        <div className="text-center bg-celeste pb-28 pt-10 px-9">
          <h1 className="titulo pt-10 sm:text-base lg:text-3xl text-[#140B34]">
            Sin Juniors no hay Seniors
          </h1>
          <p className="pt-2 lg:text-2xl text-[#232323]">
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
      <section>
        <div className=" px-9 grid lg:grid-cols-3 gap-4 justify-items-center text-center lg:bg-celeste">
          <article>
            <div className="pb-20">
              <img src={mid1} alt="" className="mb-14 max-h-36 inline" />
              <h1 className="titulo">Aceleramos</h1>
              <p>
                Aceleramos el proceso de contratación. Una vez que nos envíes tu
                necesidad de talento digital recibirás un listado con los
                mejores candidatos en 5 días.
              </p>
            </div>
          </article>
          <article>
            <img
              src={mid2}
              alt=""
              className="mb-14 max-h-36 inline
            "
            />
            <h1 className="titulo">Acompañamos</h1>
            <p>
              Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores
              que contrates serán guiados y apoyados a nivel técnico por un
              mentor senior TI experto en tu área sin ningún costo ($0).
            </p>
          </article>
          <article>
            <img src={mid3} alt="" className="mb-14  max-h-36 inline" />
            <h1 className="titulo">Potenciamos</h1>
            <p>
              Potenciamos y retenemos el talento. Realizamos un seguimiento de
              alta calidad para potenciar el crecimiento y desarrollo técnico de
              todos los desarrolladores contratados.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default ProgramExplanation
