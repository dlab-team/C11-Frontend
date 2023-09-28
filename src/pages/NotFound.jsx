import { Link } from "react-router-dom"
import maki_arrow from "../assets/maki_arrow.svg"

const NotFound = () => {
  return (
    // <div className="text-center mt-20 bg-[#2738F5] text-[#ffffff]">
    <div className="h-screen bg-gradient-to-r from-[#2738F5] via-[#2738F5] to-[#FFFFFF] text-[#ffffff] flex justify-around flex-wrap items-center jockey">
      <div className="h-auto w-auto">
        <h1 className="text-[12.5rem] leading-[17.475rem]">404</h1>
      </div>

      <div className="invisible md:visible">
        <div className=" border-[#56ABDD] border border-opacity-50 shrink md:w-[1px] md:h-screen md:ms-[-7px] md:mt-[0px] "></div>
      </div>

      <div className="h-auto w-auto">
        <div>
          <h2 className="h-[3.5rem] text-[2.5rem] leading-[3.495rem]">¡Ups!</h2>
          <div className="h-[4rem]">
            <p>La página que estás buscando</p>
            <p>no se puede encontrar</p>
          </div>
        </div>

        <div className="text-[#FFFFFF]">
        <Link to="/">
            <button
              className="mb-[2.88rem] mt-[0.813rem] 
              text-[1.25rem] leading-[1.748rem]
              bg-blue-500 hover:bg-blue-700 borde bg-[#2738F5] w-full h-[3.938rem] px-[1.563rem] focus:outline-none focus:shadow-outline"
              type="button"
            >
              <span>
                {" "}
                Ir a la Página de inicio
                <img
                  src={maki_arrow}
                  className="ps-2 inline"
                  alt="maki_arrow"
                />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
