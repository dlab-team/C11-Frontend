import "./registerForm.css"
import { useState } from "react"

const RegisterForm = () => {
  const [username, setUsername] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [repass, setRePass] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(username, lastname, email, pass, repass)
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }
  
  const cl = {
    sm: "mb-[1.5rem] md:mb-[3rem] shadow appearance-none borde w-full  px-4 h-[2.3125rem] md:h-[5.20719rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  }

  return (
    <div className="  ">
      <div className="bg-[#FFF]  md:mx-[13.81rem] pb-8 mb-4 mx-[4.5rem]">
        <form onSubmit={handleSubmit} className=" mobil ">
          <div
            className="  
        "
          >
            <label className="block text-gray-700   md:text-2xl md:leading-9   ">
              Danos tu nombre
              <input
                className={cl.sm}
                id="username"
                type="text"
                placeholder="Nombre"
                name="username"
                autoComplete="off"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </label>
          </div>

          <div
            className=" 
        "
          >
            <label className="block text-gray-700  md:text-2xl md:leading-9  ">
              Danos tu apellido
              <input
                className={cl.sm}
                id="lastname"
                type="text"
                placeholder="Apellido"
                name="lastname"
                autoComplete="off"
                onChange={(event) => setLastname(event.target.value)}
                value={lastname}
              />
            </label>
          </div>

          <div
            className=" 
        "
          >
            <label className="block text-gray-700  md:text-2xl md:leading-9  ">
              Correo Electrónico
              <input
                className={cl.sm}
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                name="email"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </label>
          </div>

          <label className="block text-gray-700  md:text-2xl md:leading-9  ">
            Crea tu Contraseña
            <div
              className="relative  
        "
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder=""
                onChange={(event) => setPass(event.target.value)}
                value={pass}
                name="contraseña"
                className={cl.sm}
              />
              <a
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
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
                    className="w-8 h-6 mb-6"
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

          <label className="block text-gray-700  md:text-2xl md:leading-9  ">
            Repite tu Nueva contraseña
            <div
              className="relative  
        "
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder=""
                onChange={(event) => setRePass(event.target.value)}
                value={repass}
                name="re_contraseña"
                className={cl.sm}
              />
              <a
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
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
                    className="w-8 h-6 mb-6"
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

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-[#E2F2FE] borde bg-[#2738F5] w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline  md:text-2xl md:leading-9 h-[2.5rem] md:h-[5.5rem] mt-[0.188rem]"
              type="submit"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
