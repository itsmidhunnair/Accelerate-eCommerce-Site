import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePromoBanner from "../../hooks/usePromoBanner";

const PromoBanner = () => {
  const { banner, fetchBanner } = usePromoBanner();

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center px-3">
        {banner?.images?.map((item) => (
          <div className="w-1/2 max-sm:w-full" key={item.redirectUrl}>
            <Link to={`/c/${item.redirectUrl}`}>
              <img src={item.img} alt={item.alt} className="p-2" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromoBanner;
