import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isFooterVisible, setFooterVisible] = useState(true);

  useEffect(() => {
    // Add an event listener to check the screen width and update the state accordingly
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFooterVisible(false); // Hide the footer on screens narrower than 768px
      } else {
        setFooterVisible(true); // Show the footer on wider screens
      }
    };

    // Call the event listener initially and add it to the resize event
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isFooterVisible ? (
        <footer className="lg:h-28 w-full  bg-[#2738F5] text-[#FFFFFF] flex justify-between items-center">
          <h1 className="text-[20px] px-[2.188rem]">
            Copyright©2023 - Devsafío
          </h1>
          <div className="flex justify-center items-center gap-[34px] mr-[65px]">
            <div className="w-[80px] h-[80px] bg-[white] rounded-full flex items-center justify-center">
              <Link
                to="https://www.linkedin.com/company/devsafio"
                className="cursor-pointer"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4170_117)">
                    <path
                      d="M36.25 0.9374H3.75C3.0126 0.929896 2.30233 1.21523 1.77506 1.73078C1.24778 2.24634 0.946566 2.95002 0.9375 3.6874V36.3187C0.948206 37.0549 1.25014 37.757 1.77724 38.2712C2.30434 38.7854 3.01367 39.0699 3.75 39.0624H36.25C36.9874 39.0682 37.6972 38.7819 38.2242 38.2661C38.7512 37.7502 39.0526 37.0467 39.0625 36.3093V3.67803C39.0493 2.9428 38.7465 2.24248 38.2199 1.72929C37.6932 1.2161 36.9853 0.931518 36.25 0.9374Z"
                      fill="#0076B2"
                    />
                    <path
                      d="M6.58126 15.228H12.2406V33.4374H6.58126V15.228ZM9.41251 6.16553C10.0616 6.16553 10.6961 6.35805 11.2358 6.71874C11.7755 7.07942 12.196 7.59207 12.4443 8.19182C12.6925 8.79157 12.7573 9.45148 12.6305 10.0881C12.5036 10.7247 12.1908 11.3093 11.7316 11.7681C11.2724 12.2268 10.6874 12.5391 10.0507 12.6654C9.41402 12.7916 8.75418 12.7262 8.15466 12.4774C7.55515 12.2285 7.0429 11.8075 6.68273 11.2675C6.32256 10.7275 6.13064 10.0928 6.13126 9.44365C6.13209 8.57395 6.47815 7.74016 7.09342 7.12548C7.70868 6.5108 8.54281 6.16553 9.41251 6.16553ZM15.7906 15.228H21.2156V17.728H21.2906C22.0469 16.2968 23.8906 14.7874 26.6438 14.7874C32.375 14.7749 33.4375 18.5468 33.4375 23.4374V33.4374H27.7781V24.578C27.7781 22.4687 27.7406 19.753 24.8375 19.753C21.9344 19.753 21.4406 22.053 21.4406 24.4405V33.4374H15.7906V15.228Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4170_117">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="w-[80px] h-[80px] bg-[white] rounded-full flex items-center justify-center">
              <Link
                className="cursor-pointer"
                to="mailto:contacto@devsafio.com?subject=Hello!"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8.33325V7.08325C4.66848 7.08325 4.35054 7.21495 4.11612 7.44937C3.8817 7.68379 3.75 8.00173 3.75 8.33325H5ZM35 8.33325H36.25C36.25 8.00173 36.1183 7.68379 35.8839 7.44937C35.6495 7.21495 35.3315 7.08325 35 7.08325V8.33325ZM5 9.58325H35V7.08325H5V9.58325ZM33.75 8.33325V28.3333H36.25V8.33325H33.75ZM31.6667 30.4166H8.33333V32.9166H31.6667V30.4166ZM6.25 28.3333V8.33325H3.75V28.3333H6.25ZM8.33333 30.4166C7.18333 30.4166 6.25 29.4833 6.25 28.3333H3.75C3.75 29.5488 4.23289 30.7146 5.09243 31.5742C5.95197 32.4337 7.11776 32.9166 8.33333 32.9166V30.4166ZM33.75 28.3333C33.75 29.4833 32.8167 30.4166 31.6667 30.4166V32.9166C32.8822 32.9166 34.048 32.4337 34.9076 31.5742C35.7671 30.7146 36.25 29.5488 36.25 28.3333H33.75Z"
                    fill="#0076B2"
                  />
                  <path
                    d="M5 8.33325L20 23.3333L35 8.33325"
                    stroke="#0076B2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};
export default Footer;
