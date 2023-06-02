import React, { useEffect, useState } from "react";
import { client } from "../../config/contentFull";
import { formatMediumBannerData } from "../../utils/formatContentApi";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [banner, setBanner] = useState();

  const fetchBanner = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        include: 3,
        select: "fields.mediumBanner",
      });
      const data = formatMediumBannerData(response);
      setBanner(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-3 flex flex-wrap justify-center">
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
