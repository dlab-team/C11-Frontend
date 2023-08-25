import { useState } from "react"
const RestorePass = () => {
  const cl = {
    sm: "mb-[1.81rem] md:mb-[3.75rem] shadow appearance-none borde w-full  px-4 h-[2.3125rem] md:h-[4.75rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  }
  const [codigo, setCodigo] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setRePass] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(codigo, pass)
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }
  return (
    <div className=" font-semibold">
      <h1 className="mt-[3.69rem] md:mt-[8.44rem] mb-[0.69rem] md:mb-[1.94rem] text-center text-2xl md:text-5xl leading-9 md:leading-[4.5rem]">Recuperar contraseña</h1>
      <p className="text-center text-xs md:text-[2rem] md:leading-[3rem] mx-[2.75rem] md:mx-[14rem] mb-[3rem] md:mb-[5.56rem]">Escribe el código que enviamos a tu correo y crea una nueva contraseña.</p>

      <form onSubmit={handleSubmit} className="mx-[4.25rem] md:mx-[14rem]">
          <div className="leading-[1.219rem] text-[0.813rem] md:leading-[2.25rem] md:text-2xl">
            <div
              className=" "
            >
              <label className="block text-gray-700">
                Código
                <input
                  className={cl.sm}
                  id="codigo"
                  type="text"
                  placeholder="Código"
                  name="codigo"
                  autoComplete="off"
                  onChange={(event) => setCodigo(event.target.value)}
                  value={codigo}
                />
              </label>
            </div>

            <label className="block text-gray-700">
              Contraseña
              <div
                className="relative
          "
              >
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder=""
                  onChange={(event) => setPass(event.target.value)}
                  value={pass}
                  name="pass"
                  className={cl.sm}
                />
                <a
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 leading-[3.375rem] text-[0.813rem] md:leading-[4.5rem] md:text-2xl mb-6"
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
                </a>
              </div>
            </label>

            <label className="block text-gray-700">
            Repite la contraseña
              <div
                className="relative
          "
              >
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder=""
                  onChange={(event) => setRePass(event.target.value)}
                  value={repass}
                  name="repass"
                  className={cl.sm}
                />
                <a
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 leading-[3.375rem] text-[0.813rem] md:leading-[4.5rem] md:text-2xl mb-6"
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
                </a>
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="mb-[2.88rem] mt-[4.5rem] md:mt-[1.812rem] 
              leading-[1.219rem] text-[0.813rem] md:leading-[2.25rem] md:text-2xl
              bg-blue-500 hover:bg-blue-700 text-[#E2F2FE] borde bg-[#2738F5] w-full h-[2.5rem]  md:h-[4.75rem] px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Restablecer Contraseña
            </button>
          </div>
        </form>
    </div>
  )
}

export default RestorePass