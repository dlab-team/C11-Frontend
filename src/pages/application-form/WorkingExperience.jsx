import { useState, Fragment } from "react"
import { useForm } from "react-hook-form"

import { Check, ChevronDown } from "lucide-react"
import { Listbox, Transition } from "@headlessui/react"
import { Navigate } from "react-router"

const radios = [
  { title: "No poseo experiencia laboral", name: "Selección" },
  { title: "Entre 0 a 1 año de experiencia laboral", name: "uno" },
  { title: "Entre 1 a 2 años de experiencia laboral", name: "dos" },
  { title: "Entre 2 a 3 años de experiencia laboral", name: "tres" },
  { title: "Más de 4 años de experiencia laboral", name: "cuatro" },
]

const WorkingExperience = () => {
  const [selected, setSelected] = useState(radios[0])
  const { handleSubmit } = useForm({
    defaultValues: {},
  })

  const atras = () => {
    Navigate("/")
  }

  const onSubmit = handleSubmit(() => {
    console.log(inputs)
  })

  const [inputs, setInputs] = useState({
    cv: "",
    linkedin: "",
    github: "",
    portafolio: "",
    project: "",
    check: false,
  })

  const items = [
    {
      title: (
        <h1 className="mt-[-1.32rem]">
          URL CV <span className="text-[#AC231B]">*</span>{" "}
          <p className="text-[#575253] text-[0.8125rem] md:text-[0.875rem] leading-[1.219rem] md:leading-[1.313rem]">
            Subir como documento público en Google Drive o similar
          </p>{" "}
        </h1>
      ),
      bool: true,
      name: "cv",
    },
    { title: "URL de LinkedIn", name: "linkedin" },
    { title: "URL de GitHub", name: "github" },
    { title: "URL de Portafolio/Sitio web", name: "portafolio" },
  ]

  const checks = [
    { title: "Líder", name: "lider" },
    { title: "Resiliente/Perseverante", name: "perseverante" },
    { title: "Comunicación/Sociable", name: "sociable" },
    { title: "Colaborativo/Empatía", name: "colaborador" },
    { title: "Aprendizaje ágil/Autónomo", name: "autonomo" },
    { title: "Flexible/Adaptable", name: "adaptable" },
    { title: "Responsable", name: "responsable" },
    { title: "Innovador/Curioso", name: "innovador" },
    { title: "Negociación", name: "negociador" },
    { title: "Resolución de problemas", name: "resoluctivo" },
    { title: "Productividad/Iniciativa", name: "productivo" },
  ]

  const handleChange = (evento) => {
    console.log(evento)
    setInputs((prevInputs) => ({
      ...prevInputs,
      [evento.target.name]: evento.target.value.trim(),
    }))
    console.log(inputs)
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <form className="mt-[6.87rem]  md:mt-[4.56rem] text-[#140B34] ">
      <h1 className=" mb-[3.31rem] md:ms-[9.75rem] md:mb-[4rem] md:uppercase text-center md:text-left text-[0.9375rem] md:text-[2rem] font-bold leading-[1.406rem] md:leading-[3rem]">
        Experiencia y trabajo
      </h1>

      <div className="md:ms-[6.125rem] max-w-screen-lg">
        <div className="ms-[1.625rem] md:ms-[0] md:grid grid-cols-2">
          {items.map((item) => (
            <label
              key={item.title}
              className="text-[1.125rem] md:text-[1.25rem] leading-[1.688rem] md:leading-[1.875rem]"
            >
              <div>{item.title}</div>
              <div>
                <input
                  className="mb-[1.188rem] md:mb-[4rem] ps-[1.125rem] w-[20.563rem] md:w-[24.125rem] border-solid border-[0.031rem] rounded-lg border-[#140B34] h-12 placeholder:invisible md:placeholder:visible bg-[#E2F2FE]"
                  type="text"
                  name={item.name}
                  required={item.bool}
                  placeholder="Link"
                  onChange={handleChange}
                />
              </div>
            </label>
          ))}
        </div>

        <div className="ms-[1.625rem] md:ms-[0] mb-[1.25rem] md:mb-[5.625rem]">
          <label htmlFor="" className="text-center md:text-left">
            <div className=" mx-6 md:mx-0">
              <h1>Explícanos en detalle algún proyecto que te enorgullece</h1>
              <p className="text-[#575253] text-[0.8125rem] md:text-[0.875rem] leading-[1.219rem] md:leading-[1.313rem]">
                Describe de que trató, tu rol en el proyecto y por qué lo
                elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu
                rol en el proyecto, tecnologías utilizadas, dificultades y
                soluciones, funcionalidades, objetivos, etc. Recuerda NO
                esperamos link, sino explicación)
              </p>
            </div>
          </label>
          <textarea
            label="Message"
            name="project"
            onChange={handleChange}
            className="w-[21.313rem] md:w-[62.25rem] h-[7.125rem] md:h-[6.375rem] mt-[0.813rem] md:mt-[1.5rem]  ps-[1.125rem] border-solid border-[0.031rem] rounded-lg border-[#140B34] resize-none bg-[#E2F2FE]"
          />
        </div>

        <div className=" md:grid grid-cols-2">
          <div className="ms-[1.625rem] md:ms-[0]">
            <h1 className="mb-[1.25rem] md:mb-[1.5rem] text-[#232323]  text-[0.813rem] md:text-[1rem] font-medium leading[1.219rem] md:leading[1.5rem]">
              Selecciona 3 habilidades blandas que te representen:
              <span className="text-[#AC231B]"> *</span>
            </h1>
            {checks.map((check) => (
              <>
                <div className="md:grid grid-cols-2 justify-normal">
                  <label
                    key={check.title}
                    className="relative ms-[0rem] mt-[0.75rem]"
                  >
                    <input
                      className=" me-[1rem] mb-[1.02rem] md:mb-[1rem] ps-[0rem] border-solid border-[0.031rem] rounded-lg border-[#140B34]  bg-[#E2F2FE] w-[1.5rem] h-[1.52544rem]"
                      type="checkbox"
                      name={check.name}
                      onChange={handleChange}
                    />
                    <span className="absolute font-light text-[0.8125rem] md:text-[1rem] leading-[1.219rem] md:leading-[1.5rem] w-[14.375rem]">
                      {check.title}
                    </span>
                  </label>
                </div>
              </>
            ))}
          </div>
          <div className="ms-[1.625rem] md:ms-[0]">
            <h1 className="mb-[1.25rem] md:mb-[1.5rem] text-[#232323] text-[0.813rem] md:text-[1rem] font-medium leading[1.219rem] md:leading[1.5rem]">
              ¿Cuántos años de experiencia laboral posees en desarrollo de
              software y/o diseño?<span className="text-[#AC231B]"> *</span>
            </h1>

            <div className=" visible md:invisible">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block mb-[1.25rem] md:mb-[1.5rem] text-[#232323] text-[0.813rem] md:text-[1rem] font-medium leading[1.219rem] md:leading[1.5rem]"></Listbox.Label>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-[21.3125rem] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {selected.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {radios.map((radio) => (
                            <Listbox.Option
                              key={radio.title}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-indigo-600 text-white"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9"
                                )
                              }
                              value={radio.title}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {radio.title}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <Check
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <div className=" invisible md:visible">
              {radios.map((radio) => (
                <>
                  <div className="md:grid grid-cols-2 justify-normal">
                    <label
                      key={radio.title}
                      className="relative ms-[0rem] mt-[0.75rem]"
                    >
                      <input
                        className=" me-[1rem] mb-[1.02rem] md:mb-[1rem] ps-[0rem] border-solid border-[0.031rem] rounded-lg border-[#140B34]  bg-[#E2F2FE] w-[1.5rem] h-[1.52544rem]"
                        type="radio"
                        name={radio.name}
                        onChange={handleChange}
                      />
                      <span className="absolute font-light text-[0.8125rem] md:text-[1rem] leading-[1.219rem] md:leading-[1.5rem] w-[24.375rem]">
                        {radio.title}
                      </span>
                    </label>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[8.19rem] mb-[5.625rem] flex justify-center ">
        <button
          className="rounded-l-lg border-4 border-[#2738F5] text-[#2738F5] w-[4.375rem] md:w-[11.75rem] h-[1.75rem] md:h-[4.8125rem] font-bold text-[0.625rem] md:text-[1.5rem] leading-[0.938rem] md:leading-[2.25rem]"
          type="submit"
          onClick={atras}
        >
          Atrás
        </button>
        <button
          className="rounded-r-lg bg-[#2738F5] text-[#FFF] w-[4.375rem] md:w-[11.75rem] h-[1.75rem] md:h-[4.8125rem] font-bold text-[0.625rem] md:text-[1.5rem] leading-[0.938rem] md:leading-[2.25rem]"
          type="submit"
          onClick={onSubmit}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default WorkingExperience