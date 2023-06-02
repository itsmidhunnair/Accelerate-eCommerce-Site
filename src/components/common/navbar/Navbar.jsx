import React, { useEffect, useState } from 'react';
import { client } from '../../../config/contentFull';
import { formatLinkData } from '../../../utils/formatContentApi';
import NavbarCategories from './NavbarCategories';

const Navbar = () => {
  const [navbar, setNavbar] = useState();

  const fetchNavbar = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'navbar',
        include: 3,
      });
      const data = formatLinkData(response);
      setNavbar(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNavbar();
  }, []);

  return (
    <>
      <div className="w-full bg-black">
        <div className="container max-w-7xl mx-auto">
          <ul className="flex flex-row justify-center gap-12 max max-sm:block max-sm:w-full ">
            {navbar?.map((arr) => (
              <NavbarCategories category={arr} key={arr.category}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
