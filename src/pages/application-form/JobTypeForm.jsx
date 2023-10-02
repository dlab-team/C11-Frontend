import { useState, useEffect } from "react";
import Line from "../../assets/Line.svg";

function JobTypeForm() {
  const [employmentStatusOptions, setEmploymentStatusOptions] = useState([]);
  console.log("employmentStatusOptions:", employmentStatusOptions);

  useEffect(() => {
    const apiUrl =
      "https://devsafio-c11-backend-fb36b571f074.herokuapp.com/api/employmentStatus"; // Replace with the actual API URL for employment status options

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to retrieve employment status options. Status code: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setEmploymentStatusOptions(data);
      })
      .catch((error) => {
        console.error(
          `An error occurred while fetching employment status options: ${error.message}`
        );
      });
  }, []);

  return (
    <section className="lg:pt-[69px] lg:pb-[61px] lg:px-[150px] bg-[white] pl-[35px] pr-[45px] text-[color:black] lg:grid lg:justify-center">
      <div className="flex flex-row justify-center mt-[26px] mb-[3rem] lg:mb-[4rem]">
        <div className=" flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-[white] text-[#2738F5] border border-[#2738F5] lg:text-[2.5rem]">
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
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          4
        </div>
        <img src={Line} alt="Linea-Divisoria" className="lg:w-[9rem]" />
        <div className="text-[white]  bg-[#2738F5]  flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] lg:text-[2.5rem]">
          5
        </div>
      </div>
      <h1 className="lg:text-left lg:ml-[33px] text-center font-bold mb-[21px] lg:text-[2rem] lg:font-bold font-poppins">
        ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
      </h1>
      <form
        action=""
        className="lg:ml-[94px] lg:mr-0 lg:pl-0 lg:pr-0 max-w-[996px]"
      >
        <div>
          <label className="w-full text-base lg:text-xl" htmlFor="">
            Déjanos una breve descripción con respecto tu trabajo ideal
          </label>
          <textarea
            className="h-[135px] mt-[21px] w-full rounded-[8px] border-[0.5px] border-[#140B34]  bg-[#E2F2FE]"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="lg:flex gap-x-[36px]  lg:mt-[32px]">
          <div className="mt-[56px] lg:mt-0">
            <p className="text-base text-justify mb-[16px] lg:mb-[32px] font-[500]">
              Indícanos tu disponibilidad laboral:{" "}
              <span className="text-[#AC231B]">*</span>
            </p>
            <div className="flex flex-col gap-[12px] lg:gap-[16px] text-base">
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Full Time
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Part Time
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Freelancer
              </label>
            </div>
          </div>
          <div className="mt-[72px] lg:mt-0">
            <label
              className="block text-base text-justify mb-[16px] font-[500] mb-[10px] lg:mb-[32px] "
              htmlFor="name"
            >
              ¿Qué describe mejor tu situación <br />
              actual? <span className="text-[#AC231B]">*</span>
            </label>
            <div className="absolute z-10 visible lg:relative lg:z-0  divide-x divide-black text-[10px] lg:invisible lg:h-0">
              <select
                className="appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="employmentStatus"
              >
                <option className="m-0 p-0 text-[#575253]">Selección</option>
                {employmentStatusOptions.map((status, index) => (
                  <option key={index} value={status.value}>
                    {status.name}
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
            <div className="absolute z-10 lg:relative lg:z-0 lg:flex lg:flex-col invisible lg:visible lg:gap-[16px]">
              {employmentStatusOptions.map((status, index) => (
                <label key={index} className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="employmentStatus"
                    value={status.value}
                    className="h-0 w-0 form-radio lg:h-4 lg:w-4 text-[#575253] border border-[#140B34] focus:outline-none focus:border-gray-500"
                  />
                  <span className="ml-2">{status.name}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-[58px] lg:mt-0">
            <p className="text-base text-justify mb-[16px] font-[500] lg:mb-[32px] ">
              ¿Cuentas con Visa de trabajo activa en?{" "}
              <span className="text-[#AC231B]">*</span>
            </p>
            <div className="flex flex-col gap-[12px] lg:gap-[16px] text-base">
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Estados Unidos
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Unión Europea
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Mi país de residencia actual
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="w-[24px] h-[24px] p-0 m-0 mt-[-3px] mr-[16px] align-middle text-[#E2F2FE]"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Otros países
              </label>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobTypeForm;
