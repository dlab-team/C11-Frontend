import { Disclosure } from "@headlessui/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid"
import logo_blanco from "../assets/logo_blanco.png"

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Login", href: "/login", current: false },
  { name: "Registro", href: "/registro", current: false },
  { name: "Contacto", href: "/contacto", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Nav = () => {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-[#2738F5]">
        {({ open }) => (
          <>
            <div className="nav px-4 sm:px-6 lg:px-8 flex justify-between">
              <div className="flex-none ">
                <img
                  className="logo_blanco"
                  src={logo_blanco}
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="mt-4 p-4 ml-10 flex items-baseline space-x-4 ">
                  <span className="text-white ">
                    <a className="text-sm" href="/login">
                      Inicia Sesión
                    </a>
                  </span>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-0">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-white-900 text-dark"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
              <div className="mt-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="mt-4 relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <>
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    </>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default Nav
