import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { X, Menu as Barras, Home, UserCheck } from "lucide-react";
import logo_blanco from "../assets/logo_blanco.png";
import logo_azul from "../assets/logo_azul.png";

import useAuthStore from "../authStore";

const ruta_login = "/login";
let user = {};
let nombre = "Iniciar Sesión";
let imagen = (
  <UserCheck className="iconBlue icon_cel h-8 w-8" aria-hidden="true" />
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const Profile = useAuthStore();
  const [navColor, setNavColor] = useState("bg-[#2738F5]");
  const [logo, setLogo] = useState(logo_blanco);

  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  if (Profile.profile) {
    user = {
      nombre: Profile.profile.displayName || "user",
      foto: Profile.profile.photoURL, // || fotox
    };
  }

  if (user.nombre) {
    nombre = user.nombre;
    imagen = (
      <img
        className="ms-8 me-4 h-10 w-10 md:h-16 md:w-16  rounded-full"
        src={user.foto}
        alt="foto"
      />
    );
  } else nombre = "Iniciar Sesión";

  const navigation = [
    {
      name: "Inicio",
      href: "/",
      current: true,
      icono: <Home className="iconBlue icon_cel h-8 w-8" aria-hidden="true" />,
    },
    {
      name: nombre,
      href: ruta_login,
      current: false,
      icono: imagen,
    },
  ];

  const handleSubmit = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className={navColor}>
        {({ open }) => (
          <>
            <div className="nav px-4 sm:px-6 lg:px-8 flex justify-between">
              <div className="flex-none ">
                <Link to="/">
                  <img className="logo_blanco" src={logo} alt="Your Company" />
                </Link>
              </div>
              {user.nombre ? (
                <div className="hidden md:block">
                  <div className="p-4 ml-10 flex items-baseline space-x-4 ">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          {imagen}
                          {/* <img
                            className="h-10 w-10 md:h-16 md:w-16  rounded-full"
                            // src={user.foto}
                            src={foto}
                            alt="foto"
                          /> */}
                          <div className="my-auto ml-[0.56rem] flex  flex-col text-left">
                            <span className="md:text-xl md:leading-5">
                              {/* Roberto Carlos */}
                              {user.nombre}
                            </span>
                            {/* <span className="md:text-base md:leading-4 ">
                              Chile
                            </span> */}
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <form onSubmit={handleSubmit}>
                                <button
                                  onClick={logout}
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Sign out
                                </button>
                              </form>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : (
                <div className="hidden md:block">
                  <div className="p-4 ml-10 flex items-baseline space-x-4 ">
                    <Link to={ruta_login}>
                      <button className="bg-[#FFFFFF] rounded-lg p-4 font-normal text-xl text-[#2738F5] hover:text-[#FFFFFF] hover:bg-[#2738F5] ">
                        Inicia Sesión
                      </button>
                    </Link>
                  </div>
                </div>
              )}

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
                      {!user ? (
                        <>
                          {setNavColor("bg-[#2738F5]")}
                          {setLogo(logo_blanco)}
                          <Barras
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        </>
                      ) : (
                        <>
                          {setNavColor("bg-[#FFFFFF]")}
                          {setLogo(logo_azul)}
                          <Barras
                            className="bg-[#2738F5] block h-6 w-6"
                            aria-hidden="true"
                          />
                        </>
                      )}
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
  );
};

export default Nav;
