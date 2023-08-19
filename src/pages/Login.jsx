import LoginForm from "../components/LoginForm"
import Social_login from "../components/Social_login"

const Login = () => {
  return (
    <div className="mt-16 pt-4  font-semibold">
      <h1 className=" mb-14 text-center text-5xl">Iniciar sesión</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap  justify-around">
          <div>
            <LoginForm />
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
          <span className="px-4">¿Olvidaste tu contraseña?</span>
        </button>
      </div>
    </div>
  )
}

export default Login
