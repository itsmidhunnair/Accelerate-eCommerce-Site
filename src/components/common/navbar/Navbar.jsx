import React, { useEffect } from "react";
import useNavbar from "../../../hooks/useNavbar";
import NavbarCategories from "./NavbarCategories";

const Navbar = () => {
  const { fetchNavbar, navbar, showNav, setShowNav } = useNavbar();

  useEffect(() => {
    fetchNavbar();
  }, []);

  return (
    <>
      <div className="w-full bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className={`flex justify-between md:justify-center`}>
            <button
              className="hidden pl-4 max-md:block"
              onClick={() => {
                setShowNav(!showNav);
              }}>
              {showNav ? (
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 18H10"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 12L16 12"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 6L20 6"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  height="40px"
                  width="40x"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000">
                  <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Menu / Close_SM">
                      {" "}
                      <path
                        id="Vector"
                        d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              )}
            </button>
            <div className="p-4">
              <img
                src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F1amBpNGegNjdgiOqCS5mU2%2F69b473861ae0049f7f9cff119b4f5085%2Ffooter-logo_1.png&w=256&q=75"
                alt="acelerate_logo"
              />
            </div>
          </div>
          <div className={`max-md:${showNav ? 'block' : 'hidden'}`}>
            <ul
              className={`flex flex-row items-center justify-center gap-12 overflow-x-hidden transition-all duration-500 max-sm:block`}>
              {navbar?.map((arr) => (
                <NavbarCategories category={arr} key={arr.category} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
