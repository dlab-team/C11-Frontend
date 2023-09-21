import { useState } from "react"
import { Link } from "react-router-dom"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase"
import { Alert } from "./Alert"
import useAuthStore from "../authStore"

import mail from "../assets/mail.svg"
import gmail from "../assets/gmail.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

const loginGoogle = () => {
  const googleProvider = new GoogleAuthProvider()
  return signInWithPopup(auth, googleProvider)
}

const Social_login = () => {
  const [error, setError] = useState("")
  const setProfile = useAuthStore((state) => state.setProfile)
  const btn_soc =
    "hover:bg-blue-700 text-[#000] borde w-full h-[2.3125rem] md:h-[4.25rem] px-4 focus:outline-none focus:shadow-outline flex items-center"
  const [social, setSocial] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setError("")
    console.log(social)
    try {
      if (social == "google") {
        setSocial("")
        const res = await loginGoogle()
        console.log(res) //
        console.log(res.user.displayName) // nombre
        setProfile(res.user) 
      }
    } catch (error) {
      setError(error.message)
    }
    
  }
  return (
    <div className="bg-[#FFF] px-8 pb-8 mb-4 font-normal text-xs leading-[1.125rem] ">
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-14 mt-8 md:mt-[-4.067rem]">
          <button
            className={btn_soc}
            onClick={() => setSocial("google")}
            type="submit"
            value={social}
          >
            <img src={mail} className="logo mail" alt="mail logo" />
            <Link to="/register">
              <span className="px-4 text-xl leading-[30px]">
                Formulario de registro
              </span>
            </Link>
          </button>
        </div>
        <div className="mb-14">
          <button
            className={btn_soc}
            onClick={() => setSocial("google")}
            type="submit"
            value={social}
          >
            <img src={gmail} className="logo gmail" alt="gmail logo" />
            <span className="px-4 text-xl leading-[30px]">
              Ingresa con Gmail
            </span>
          </button>
        </div>
        <div className="mb-14">
          <button
            className={btn_soc}
            onClick={() => setSocial("linkedin")}
            type="submit"
            value={social}
          >
            <img src={linkedin} className="logo linkedin" alt="linkedin logo" />
            <span className="px-4 text-xl leading-[30px]">
              Ingresa con Linkedin
            </span>
          </button>
        </div>
        <div className="mb-14">
          <button
            className={btn_soc}
            onClick={() => setSocial("github")}
            type="submit"
            value={social}
          >
            <img src={github} className="logo github" alt="github logo" />
            <span className="px-4 text-xl leading-[30px]">
              Ingresa con GitHub
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Social_login
