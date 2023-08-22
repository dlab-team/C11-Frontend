import "./index.css"
import { useState } from "react"

const RecoverPass = () => {
  const [email, setEmail] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    console.log(email)
  }

  return (
    <div className="mt-28 pt-4  font-semibold">
      <form onSubmit={handleSubmit}>
        <div className="text-center w-72 lg:w-8/12 mx-auto">
          <h1 className=" mb-14  lg:text-5xl sm:text-2xl ">
            ¿Olvidaste tu contraseña?
          </h1>
        </div>
        <p className=" w-72 lg:text-lg text-xs  lg:w-[33rem] text-center  mx-auto">
          Escribe la dirección de correo electrónico de tu cuenta y te
          enviaremos un mensaje para restablecer la contraseña.
        </p>

        <div
          className="lg:mb-12 mb-6
        "
        >
          <div className="label_email  lg:w-96">
            <label className="block text-gray-700 text-sm mb-2 ">
              <p className="text-[#000]">Correo Electrónico</p>
              <input
                className="input_email shadow appearance-none borde px-3 text-gray-700 leading-tight focus:outline-none lg:w-96 focus:shadow-outline"
                id="email"
                type="email"
                placeholder="nombre@correo.com"
                name="email"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </label>
          </div>

          <div className="btn_send  lg:w-96">
            <button className="" type="submit">
              Enviar correo electrónico
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RecoverPass