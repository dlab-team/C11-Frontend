import { useState, useEffect } from "react";
import Line from "../../assets/Line.svg";

function PersonalInfoForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const genders = [
    { title: "Femenino", name: "femenino" },
    { title: "Masculino", name: "masculino" },
    { title: "Otro", name: "otro" },
  ];
  useEffect(() => {
    const apiUrl =
      "https://devsafio-c11-backend-fb36b571f074.herokuapp.com/api/countries"; // API endpoint for all countries

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to retrieve data. Status code: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error(`An error occurred: ${error.message}`);
      });
  }, []);

  useEffect(() => {
    // Check if a country is selected
    console.log("selectedCountry:", selectedCountry);
    if (selectedCountry) {
      // Make an API request to fetch regions based on the selected country
      const regionApiUrl = `https://devsafio-c11-backend-fb36b571f074.herokuapp.com/api/countries/${selectedCountry}/states`;

      fetch(regionApiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to retrieve regions. Status code: ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setRegions(data);
          console.log("data:", data);
        })
        .catch((error) => {
          console.error(
            `An error occurred while fetching regions: ${error.message}`
          );
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Check if a region is selected
    if (selectedRegion) {
      // Make an API request to fetch cities based on the selected region
      const cityApiUrl = `https://devsafio-c11-backend-fb36b571f074.herokuapp.com/api/countries/${selectedCountry}/states/${selectedRegion}/cities`;

      fetch(cityApiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to retrieve cities. Status code: ${response.status}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setCities(data);
        })
        .catch((error) => {
          console.error(
            `An error occurred while fetching cities: ${error.message}`
          );
        });
    }
  }, [selectedRegion]);

  return (
    <section className="lg:pt-[69px] lg:pb-[61px] lg:px-[150px] bg-[white] pl-[35px] pr-[45px] text-[color:black] lg:grid lg:justify-center">
      <div className="flex flex-row justify-center mt-[26px] mb-[3rem] lg:mb-[4rem]">
        <div className=" text-[white] flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white bg-[#2738F5] border border-[#2738F5] lg:text-[2.5rem]">
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
        <div className="flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] lg:w-[6.5rem] lg:h-[6.5rem] bg-white border border-[#2738F5] text-[#2738F5] lg:text-[2.5rem]">
          5
        </div>
      </div>
      <h1 className="lg:text-left lg:ml-[33px] text-center font-bold mb-[21px] lg:text-[2rem] lg:font-bold font-poppins">
        INFORMACIÓN PERSONAL
      </h1>
      <form
        action=""
        className="lg:ml-[94px] pl-[42px] pr-[43px] lg:pl-0 lg:pr-0 lg:grid lg:grid-cols-2 lg:gap-x-[224px] max-w-[926px]"
      >
        <div className="mt-[12px] lg:order-1">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Nombre <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="pl-[14px] h-[29px] lg:h-[48px] lg:w-[386px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] lg:mt-[24px]  lg:mt-[24px]w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[12px] lg:order-2">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Apellido <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="lg:h-[48px] lg:w-[386px] pl-[14px]  h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] lg:mt-[24px]  lg:mt-[24px]w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="lg:mt-[24px] mt-[12px] lg:order-3">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Email <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="lg:h-[48px] lg:w-[386px] pl-[14px]  h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] lg:mt-[24px]  lg:mt-[24px]w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="lg:mt-[24px] lg:w-[386px] mt-[20px] lg:order-5">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            País <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px] lg:mt-[24px]">
            <select
              className="lg:text-[20px] lg:h-[48px]  block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="country"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                // Clear the selected region when the country changes
                setSelectedRegion("");
              }}
            >
              <option value="" className="">
                Selección
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:mt-[24px] lg:w-[386px] mt-[20px] lg:order-7">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Región <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px] lg:mt-[24px]">
            <select
              className="lg:text-[20px] lg:h-[48px] block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="region"
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setSelectedCity("");
              }}
            >
              <option value="">Selección</option>
              {regions.map((region, index) => (
                <option key={index} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:w-[386px] mt-[20px] lg:mt-[-57px] lg:order-9">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Ciudad <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px] lg:mt-[24px]">
            <select
              className="lg:text-[20px] lg:h-[48px] block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Selección</option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="invisible lg:order-10 lg:visible h-0 w-0"></div>
        <div className="lg:mt-[24px] mt-[12px] lg:order-4">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Numero telefónico <span className="text-[#AC231B]">*</span>
          </label>
          <div className="flex gap-1 lg:gap-[10px] justify-right  lg:mt-[24px]">
            <input
              className="lg:text-[20px] lg:mt-0 lg:h-[48px] lg:w-[116px] font-semibold h-[29px] pl-[14px] text-xs border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem]  lg:mt-[24px] w-[79px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
              value="CL  +569"
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
              readOnly
            />{" "}
            <input
              className="lg:mt-0 lg:h-[48px] lg:w-[252px] h-[29px] pl-[14px]  border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem]  lg:mt-[24px] w-[142px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="lg:mt-[24px] lg:w-[386px] mt-[18px] lg:order-6">
          <label
            className="lg:text-[20px] block sm:text-[1rem] font-normal text-[10px] mb-[10px]"
            htmlFor="name"
          >
            ¿Con qué género te identificas?{" "}
            <span className="text-[#AC231B]">*</span>
          </label>
          <div className="lg:mt-[24px] relative divide-x divide-black text-[10px]">
            <select
              className="lg:text-[20px] lg:h-[48px] block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option className="m-0 p-0" value="">
                Selección
              </option>
              {genders.map((gender) => (
                <option key={gender.title} value={gender.name}>
                  {gender.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="lg:order-8 mt-[29px] ml-[-37px] mr-[-42px] lg:ml-0">
          <h2 className="lg:text-[20px] text-[14px] mb-[8px] lg:mb-[16px]">
            ¿Cuál es tu estado laboral actual?
          </h2>
          <div className="flex flex-col gap-[2px] lg:gap-[16px] text-[10px] lg:text-[1rem]">
            <label htmlFor="radio-direct" className="">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] lg:mr-[16px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Cesante, busco empleo en TI por primera vez.
            </label>
            <label htmlFor="radio-direct" className="lg:mr-[-40px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] lg:mr-[16px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Cesante, ya he trabajado antes en TI.
            </label>
            <label htmlFor="radio-direct" className="">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] lg:mr-[16px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Tengo trabajo en TI, pero busco otro.
            </label>
            <label htmlFor="radio-direct" className="lg:mr-[-40px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] lg:mr-[16px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Tengo trabajo (en otras áreas), pero busco en TI.
            </label>
          </div>
        </div>

        <div className="lg:order-10 lg:mt-[37px] mt-[30px] lg:col-span-1 ml-[-37px] lg:ml-0">
          <h2 className="lg:text-[20px] text-[14px] mb-[8px] lg:mb-[16px]">
            ¿Cuál o cuáles cargos te gustaría optar?
          </h2>
          <p className="text-xs text-justify mb-[20px] lg:text-[1rem]">
            <strong>Ten en cuenta:</strong> De acuerdo al cargo que postules, te
            pediremos que seas capaz de demostrarlo de manera práctica durante
            el proceso de selección.
          </p>
          <div className="flex flex-col gap-[12px] lg:gap-[16px] text-xs lg:text-[1rem]">
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Desarrollador/a Full Stack
            </label>
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Desarrollador/a Back End
            </label>
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Desarrollador/a Front End
            </label>
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Diseñador/a UX / UX Research o UI
            </label>
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Desarrollador/a Móvil
            </label>
            <label htmlFor="radio-direct" className="mr-[-10px] lg:mr-[-40px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Data Scientist o especialista machine learning
            </label>
            <label htmlFor="radio-direct">
              <input
                className="p-0 m-0 mt-[-2px] mr-[10px] align-middle lg:h-[24px] lg:w-[24px] h-[14px] w-[14px] "
                type="checkbox"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Ingeniería de Datos
            </label>
          </div>
        </div>
        {/* <div className="flex justify-center mt-[130px] mb-[49px]">
          <div className="inline-flex">
            <button className="bg-[#2738F5] text-white font-bold py-[7.25px] px-[8px] rounded-[8px] text-[10px] lg:text-[1.5rem]">
              Continuar
            </button>
          </div>
        </div> */}
      </form>
    </section>
  );
}

export default PersonalInfoForm;
