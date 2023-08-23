import LoginForm from "../components/LoginForm"
import Social_login from "../components/Social_login"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="mt-16 pt-4  font-semibold">
      <h1 className=" mb-14 text-center leading-[3.375rem] text-4xl md:leading-[4.5rem] md:text-5xl ">Iniciar sesión</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap  justify-around">
          <div>
            <LoginForm />
          </div>
          <div className="flex flex-row justify-between mx-[38px] items-center mt-14">
            <div className="w-[100px] h-[1px] border border-opacity-50 lg:hidden"></div>
            <span className=" lg:hidden mx-2">O</span>
            <div className="w-[100px] h-[1px] border border-opacity-50  lg:hidden"></div>
          </div>
          {/* <hr /> */}
          <div>
            <Social_login />
          </div>
        </div>
      </div>
      <div className="mb-14 flex justify-center">
        <button
          className="hover:bg-blue-700 text-[#000]  lg:border-[#2738F5] rounded lg:border-4 py-2 px-4 focus:outline-none focus:shadow-outline flex items-center"
          type="button"
        >
          <Link to="/recoverPass">
            <span className="px-4">¿Olvidaste tu contraseña?</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Login
