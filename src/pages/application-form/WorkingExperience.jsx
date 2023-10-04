import { useState } from "react";
import Line from "../../assets/Line.svg";

const radios = [
  { title: "No poseo experiencia laboral", name: "Selección" },
  { title: "Entre 0 a 1 año de experiencia laboral", name: "uno" },
  { title: "Entre 1 a 2 años de experiencia laboral", name: "dos" },
  { title: "Entre 2 a 3 años de experiencia laboral", name: "tres" },
  { title: "Más de 4 años de experiencia laboral", name: "cuatro" },
];

const WorkingExperience = () => {
  const [selected, setSelected] = useState(radios[0]);

  const [inputs, setInputs] = useState({
    cv: "",
    linkedin: "",
    github: "",
    portafolio: "",
    project: "",
    check: false,
  });

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
  ];

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
  ];

  const handleChange = (evento) => {
    console.log(evento);
    setInputs((prevInputs) => ({
      ...prevInputs,
      [evento.target.name]: evento.target.value.trim(),
    }));
    console.log(inputs);
  };

  return (
    <section className="lg:grid lg:justify-center lg:pt-[69px] ">
      <div className="flex flex-row justify-center mt-[26px] mb-[3rem] lg:mb-[4rem]">
        <div className=" flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border text-[#2738F5] border-[#2738F5] lg:text-[2.5rem]">
          1
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          2
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          3
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="text-[white]  bg-[#2738F5]   flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5]  lg:text-[2.5rem]">
          4
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="text-[#2738F5] flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] lg:text-[2.5rem]">
          5
        </div>
      </div>
      <form className="text-[#140B34] ">
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
              <div className="absolute z-10 visible lg:relative lg:z-0  divide-x divide-black text-[10px] lg:invisible lg:h-0">
                <select
                  className="appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="employmentStatus"
                >
                  <option className="m-0 p-0 text-[#575253]">Selección</option>
                  {radios.map((radio) => (
                    <option key={radio.title} value={radio.name}>
                      {radio.title}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute  inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <div className="absolute invisible md:visible">
                {radios.map((radio) => (
                  <>
                    <div className="md:grid grid-cols-2 justify-normal">
                      <label
                        key={radio.title}
                        className="relative ms-[0rem] mt-[0.75rem]"
                      >
                        <input
                          className="me-[1rem] mb-[1.02rem] md:mb-[1rem] ps-[0rem] border-solid border-[0.031rem] rounded-lg border-[#140B34]  bg-[#E2F2FE] w-[1.5rem] h-[1.52544rem]"
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
      </form>
    </section>
  );
};

export default WorkingExperience;
