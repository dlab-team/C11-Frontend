import { Link } from "react-router-dom"
import { Disclosure } from "@headlessui/react"
import { X, Menu, Home, UserCheck } from "lucide-react"
import logo_blanco from "../assets/logo_blanco.png"
import logo_azul from "../assets/logo_azul.png"
import { useState } from "react"

const ruta_login = "/login"

const navigation = [
  {
    name: "Inicio",
    href: "/",
    current: true,
    icono: <Home className="iconBlue icon_cel h-8 w-8" aria-hidden="true" />,
  },
  {
    name: "Iniciar Sesión",
    href: ruta_login,
    current: false,
    icono: (
      <UserCheck className="iconBlue icon_cel h-8 w-8" aria-hidden="true" />
    ),
  },
  /* { name: "Registro", href: "/registro", current: false },
  { name: "Contacto", href: "/contacto", current: false }, */
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Nav = () => {
  const [navColor, setNavColor] = useState("bg-[#2738F5]")
  const [logo, setLogo] = useState(logo_blanco)
  return (
    <div className="w-[90rem] h-[6rem] mx-auto">
      <Disclosure as="nav" className={navColor}>
        {({ open }) => (
          <>
            <div className="nav px-4 sm:px-6 lg:px-8 flex justify-between">
              <div className="flex-none ">
                <Link to="/">
                  <img className="logo_blanco" src={logo} alt="Your Company" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="p-4 ml-10 flex items-baseline space-x-4 ">
                  <Link to={ruta_login}>
                    <button className="bg-[#FFFFFF] rounded-lg p-4 font-normal text-xl text-[#2738F5] hover:text-[#FFFFFF] hover:bg-[#2738F5] ">
                      Inicia Sesión
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className={classNames(
                    open
                      ? "mt-4 relative inline-flex items-center justify-center rounded-md p-2 "
                      : "mt-4 relative inline-flex items-center justify-center rounded-md p-2 text-[#FFFFFF] hover:bg-blue-700 hover:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] focus:ring-offset-2 focus:ring-offset-gray-800"
                  )}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <>
                      {setNavColor("bg-[#FFFFFF]")}
                      {setLogo(logo_azul)}
                      <X
                        className="iconBlue block h-6 w-6"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <>
                      {setNavColor("bg-[#2738F5]")}
                      {setLogo(logo_blanco)}
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    </>
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel className="h-screen sm:hidden">
              <div className="space-y-1 pb-3 pt-0">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "text-dark" : "font-normal",
                      "flex flex-row rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.icono}
                    <p className="text-2xl">{item.name}</p>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Nav




