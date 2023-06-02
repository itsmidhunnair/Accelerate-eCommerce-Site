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
          <div className={`hidden justify-between max-md:flex`}>
            <button className="pl-4" onClick={()=>{setShowNav(!showNav)}}>
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
            </button>
            <div className="p-4">
              <img
                src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fsi3zip9j6n5h%2F1amBpNGegNjdgiOqCS5mU2%2F69b473861ae0049f7f9cff119b4f5085%2Ffooter-logo_1.png&w=256&q=75"
                alt="acelerate_logo"
              />
            </div>
          </div>
          <ul className={`max flex flex-row items-center justify-center gap-12 max-sm:block transition-all duration-500 overflow-x-hidden max-sm:${showNav?'w-full':'w-0'}`}>
            {navbar?.map((arr) => (
              <NavbarCategories category={arr} key={arr.category} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
