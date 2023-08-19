import mail from "../assets/mail.svg"
import gmail from "../assets/gmail.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

const Social_login = () => {
  return (
    <div className="bg-[#FFF] px-8 pt-20 pb-8 mb-4">
      {/* <div className="flex items-center justify-between"> */}
      <div className="mb-14">
        <button
          className=" text-[#000] borde  w-full py-2 px-4 focus:outline-none focus:shadow-outline flex items-center hover:bg-blue-700"
          type="button"
        >
          <img src={mail} className="logo mail" alt="mail logo" />
          <span className="px-4">Formulario de registro</span>
        </button>
      </div>
      <div className="mb-14">
        <button
          className="hover:bg-blue-700 text-[#000] borde w-full py-2 px-4 focus:outline-none focus:shadow-outline flex items-center"
          type="button"
        >
          <img src={gmail} className="logo gmail" alt="gmail logo" />
          <span className="px-4">Ingresa con Gmail</span>
        </button>
      </div>
      <div className="mb-14">
        <button
          className="hover:bg-blue-700 text-[#000] borde w-full py-2 px-4 focus:outline-none focus:shadow-outline flex items-center"
          type="button"
        >
          <img src={linkedin} className="logo linkedin" alt="linkedin logo" />
          <span className="px-4">Ingresa con Linkedin</span>
        </button>
      </div>
      <div className="mb-14">
        <button
          className="hover:bg-blue-700 text-[#000] borde w-full py-2 px-4 focus:outline-none focus:shadow-outline flex items-center"
          type="button"
        >
          <img src={github} className="logo github" alt="github logo" />
          <span className="px-4">Ingresa con GitHub</span>
        </button>
      </div>
      
    </div>
  )
}

export default Social_login
