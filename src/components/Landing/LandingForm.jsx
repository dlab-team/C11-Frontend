import { useState } from "react";

export default function LandingForm() {
  const [formData, setFormData] = useState({
    reference_name: "",
    reference_last_name: "",
    reference_email: "",
    reference_phone: "",
    company: "",
    roles: [],
    comment: "",
  });

  const handleCheckboxChange = (e, id) => {
    console.log("Checkbox changed:", id);
    setFormData((prevState) => {
      if (e.target.checked) {
        return {
          ...prevState,
          roles: [...prevState.roles, id],
        };
      } else {
        return {
          ...prevState,
          roles: prevState.roles.filter((option) => option !== id),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://devsafio-c11-backend-fb36b571f074.herokuapp.com/api/companies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data sent successfully:", data);
        // You can reset the form or perform any other actions here
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <form
      className="bg-[#140B34] w-[393px] sm:w-[590px] h-[852px] sm:h-[1007px] sm:mt-[78px] sm:mb-[98px] sm:rounded-[16px] text-[color:white] pb-0 pt-[32px] pl-[33px] sm:pl-[51px] pr-[27px] sm:pr-[50px] flex flex-col relative"
      onSubmit={handleSubmit}
    >
      {" "}
      <p className="text-[15px] sm:text-[20px] font-semibold h-[92px] sm:h-[90px] mb-[6px] sm:mb-[32px]">
        Si eres empresa y buscas talento TI, déjanos tu información en este
        formulario. En breve te contactaremos:
      </p>
      <div className="flex flex-row gap-[30px] sm:gap-[22px]">
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="reference_name"
          >
            Nombre *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="text"
            id="reference_name"
            value={formData.reference_name}
            onChange={(e) =>
              setFormData({ ...formData, reference_name: e.target.value })
            }
          />
        </div>
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="reference_last_name"
          >
            Apellido *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="text"
            id="reference_last_name"
            value={formData.reference_last_name}
            onChange={(e) =>
              setFormData({ ...formData, reference_last_name: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-[30px] sm:gap-[22px] mt-[12.5008px] sm:mt-[16px]">
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="email"
          >
            Email corporativo *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="email"
            id="reference_email"
            value={formData.reference_email}
            onChange={(e) =>
              setFormData({ ...formData, reference_email: e.target.value })
            }
          />
        </div>
        <div>
          <label
            className="block text-[13px] sm:text-[16px] font-normal"
            htmlFor="tel"
          >
            Número de teléfono *
          </label>
          <input
            className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
            type="text"
            id="reference_phone"
            value={formData.reference_phone}
            onChange={(e) =>
              setFormData({ ...formData, reference_phone: e.target.value })
            }
          />
        </div>
      </div>
      <div className="mt-[28px] sm:mt-[16px]">
        <label
          className="block text-[13px] sm:text-[16px] font-normal"
          htmlFor="company"
        >
          ¿A qué empresa perteneces? *
        </label>
        <input
          className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg mt-[6.5008px] sm:mt-[16px] w-[138px] sm:w-[233px] sm:h-9 bg-celeste"
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>
      <section className="mt-[19px] mb-[33px]">
        <h3 className="mb-[23px] text-[13px] sm:text-[16px] font-bold sm:font-normal">
          Cargo/área de preferencia que buscas contratar *
        </h3>
        <div className="ml-[6px] sm:ml-[0px] flex gap-[14px] sm:gap-[8px] flex-col">
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="1"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="1"
                checked={formData.roles.includes(1)}
                onChange={(e) => handleCheckboxChange(e, 1)}
              />
              Desarrollador Front End
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="2"
            >
              <input
                className="checked align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="2"
                checked={formData.roles.includes(2)}
                onChange={(e) => handleCheckboxChange(e, 2)}
              />
              Desarrollador Full Stack / Backend
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="3"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="3"
                checked={formData.roles.includes(3)}
                onChange={(e) => handleCheckboxChange(e, 3)}
              />
              Diseñador UX/UI
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="4"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="4"
                checked={formData.roles.includes(4)}
                onChange={(e) => handleCheckboxChange(e, 4)}
              />
              Analista QA
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="5"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="5"
                checked={formData.roles.includes(5)}
                onChange={(e) => handleCheckboxChange(e, 5)}
              />
              Desarrollador Mobile
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="6"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="6"
                checked={formData.roles.includes(6)}
                onChange={(e) => handleCheckboxChange(e, 6)}
              />
              Datos
            </label>
          </div>
          <div className="flex items-center content-center">
            <label
              className="text-[12px] sm:text-[16px] font-normal"
              htmlFor="7"
            >
              <input
                className="align-middle mr-[6px] sm:mr-[24px] w-[17px] sm:w-[24px] h-[17px] sm:h-[24px] bg-celeste"
                type="checkbox"
                id="7"
                checked={formData.roles.includes(7)}
                onChange={(e) => handleCheckboxChange(e, 7)}
              />
              Otra
            </label>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-[13px] mb-[42px] sm:mb-[40px]">
        <label
          className="text-[13px] sm:text-[16px] font-normal"
          htmlFor="comment"
        >
          ¿Dudas? Déjalas acá!
        </label>
        <textarea
          className="pl-[0.625rem] text-[black] rounded-md sm:rounded-lg w-[343px] sm:w-[489px] h-[69px] sm:h-[85px] bg-celeste"
          id="comment"
          name="comment"
          rows="4"
          cols="50"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
        ></textarea>
      </div>
      <img
        className="absolute right-[0] bottom-[272px] sm:invisible"
        src="../../src/assets/image_moon.svg"
        alt="Moon Image"
      />
      <div className="flex items-center content-center justify-center mb-[37px] sm:mb-[40px]">
        <button
          className="text-[#2738F5] sm:border-none border-solid border-[#2738F5] border rounded-[8px] sm:rounded-3xl bg-[#fff] w-[342px] h-[37px] sm:w-[137px] sm:h-[68px] text-blue-700 font-bold text-[16px] sm:text-[24px] sm:font-bold sm:px-6 sm:py-4"
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
}
