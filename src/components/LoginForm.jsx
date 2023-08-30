import PropTypes from "prop-types"
import { useState } from "react"
const LoginForm = ({ cl }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(email, pass, checkbox)
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  return (
    <div className="">
      <div className="bg-[#FFF] md:w-[44.518rem] md:ps-[7.5rem] pb-8 mb-4 mt-0 md:mt-[-6.75rem] flex flex-col md:flex-row">
        <form onSubmit={handleSubmit}>
          <div className="leading-[1.219rem] text-[0.813rem] md:leading-[2.25rem] md:text-2xl">
            <div className=" ">
              <label className="block text-gray-700 text-[#000000]">
                Correo Electrónico
                <input
                  className={cl.sm}
                  id="email"
                  type="email"
                  placeholder="nombre@correo.cl"
                  name="email"
                  autoComplete="off"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </label>
              <div className="md:mb-[2.56rem] invisible md:visible md:leading-[1.313rem] md:text-sm ">
                <input
                  type="checkbox"
                  id="recordar"
                  name="recordar"
                  className="me-1.5"
                  onChange={() => setCheckbox(true)}
                  value={checkbox}
                />
                Recordarme
              </div>
            </div>

            <label className="block text-gray-700">
              Contraseña
              <div
                className="relative mb-[1.62rem] md:mb-[4.44rem]
          "
              >
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Contraseña"
                  onChange={(event) => setPass(event.target.value)}
                  value={pass}
                  name="contraseña"
                  className="w-full borde
                  h-[2.3125rem]  md:h-[4.75rem] px-4 
            text-base
            outline-none
            focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 leading-[3.375rem] text-[0.813rem] md:leading-[4.5rem] md:text-2xl"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="mb-[2.88rem] bg-blue-500 hover:bg-blue-700 text-[#E2F2FE] borde bg-[#2738F5] w-full h-[2.5rem]  md:h-[4.75rem] px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className="flex flex-row justify-between items-center md:ml-[6.38rem]">
          <div className="w-[100px] h-[1px] border border-opacity-50 shrink md:w-[1px] md:h-[160px] md:ml-0 md:mt-[-420px] "></div>
          <span className="md:mt-[-220px]  ms-[-6px]">O</span>
          <div className="w-[100px] h-[1px] border border-opacity-50 shrink md:w-[1px] md:h-[360px] md:ms-[-7px] md:mt-[170px] "></div>
        </div>

      </div>
    </div>
  )
}

export default LoginForm

LoginForm.propTypes = {
  cl: PropTypes.object.isRequired,
}
