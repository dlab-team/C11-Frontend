import { useState, useEffect } from "react";
import Line from "../../assets/Line.svg";

function PersonalInfoForm() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  console.log("selectedCountry:", selectedCountry);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  console.log("countries:", countries);
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
    <section className="md:pt-[69px] md:pb-[61px] md:px-[150px] bg-[white] pl-[35px] pr-[45px] text-[color:black]">
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
      <h1 className="text-center lg:text-left lg:ml-[16.69rem] font-bold mb-[21px] lg:text-[2rem] lg:font-bold font-poppins">
        INFORMACIÓN PERSONAL
      </h1>
      <form action="" className="w-full pl-[42px] pr-[43px]">
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Nombre <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="pl-[14px] h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Apellido <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="pl-[14px]  h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Email <span className="text-[#AC231B]">*</span>
          </label>
          <input
            className="pl-[14px]  h-[29px] border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-full sm:w-[14.5625rem] sm:h-9 bg-celeste"
            type="text"
            id="name"
          />
        </div>
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            País <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="country"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                // Clear the selected region when the country changes
                setSelectedRegion("");
              }}
            >
              <option value="">Selección</option>
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
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Región <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <div className="mt-[20px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Ciudad <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <div className="mt-[12px]">
          <label
            className="block sm:text-[1rem] font-normal text-[12px]"
            htmlFor="name"
          >
            Numero telefónico <span className="text-[#AC231B]">*</span>
          </label>
          <div className="flex gap-1 justify-between">
            <input
              className="font-semibold h-[29px] pl-[14px] text-xs border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[79px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
              value="CL  +569"
            />{" "}
            <input
              className="h-[29px] pl-[14px]  border-[0.5px] border-[#140B34] rounded-md sm:rounded-lg mt-[0.4063rem] sm:mt-[1rem] w-[142px] sm:w-[14.5625rem] sm:h-9 bg-celeste"
              type="text"
              id="name"
            />
          </div>
        </div>
        <div className="mt-[18px]">
          <label
            className="block sm:text-[1rem] font-normal text-[10px] mb-[10px]"
            htmlFor="name"
          >
            ¿Con qué género te identificas?{" "}
            <span className="text-[#AC231B]">*</span>
          </label>
          <div className="relative divide-x divide-black text-[10px]">
            <select
              className="block appearance-none w-full bg-[#E2F2FE] border border-[#140B34] text-[#575253] py-[7.25px] px-4 pr-8 rounded-[0.5rem] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option className="m-0 p-0">Selección</option>
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
        <div className="mt-[29px] ml-[-20px] mr-[-42px]">
          <h2 className="text-[14px] mb-[8px]">
            ¿Cuál es tu estado laboral actual?
          </h2>
          <div className="flex flex-col gap-[2px]">
            <label htmlFor="radio-direct" className="text-[10px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] align-middle ap"
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Cesante, busco empleo en TI por primera vez.
            </label>
            <label htmlFor="radio-direct" className="text-[10px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] align-middle ap"
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Cesante, ya he trabajado antes en TI.
            </label>
            <label htmlFor="radio-direct" className="text-[10px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] align-middle ap"
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Tengo trabajo en TI, pero busco otro.
            </label>
            <label htmlFor="radio-direct" className="text-[10px]">
              <input
                className="p-0 m-0 mt-[-2px] mr-[5px] align-middle ap"
                type="radio"
                name="direct"
                id="radio-direct"
                value="true"
              />
              Tengo trabajo (en otras áreas), pero busco en TI.
            </label>
          </div>
          <div className="mt-[30px]">
            <p className="text-xs text-justify mb-[20px]">
              <strong>Ten en cuenta:</strong> De acuerdo al cargo que postules,
              te pediremos que seas capaz de demostrarlo de manera práctica
              durante el proceso de selección.
            </p>
            <div className="flex flex-col gap-[12px] text-xs">
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Desarrollador/a Full Stack
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Desarrollador/a Back End
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Desarrollador/a Front End
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Diseñador/a UX / UX Research o UI
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Desarrollador/a Móvil
              </label>
              <label htmlFor="radio-direct" className="mr-[-10px]">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Data Scientist o especialista machine learning
              </label>
              <label htmlFor="radio-direct">
                <input
                  className="p-0 m-0 mt-[-2px] mr-[10px] align-middle ap"
                  type="checkbox"
                  name="direct"
                  id="radio-direct"
                  value="true"
                />
                Ingeniería de Datos
              </label>
            </div>
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
