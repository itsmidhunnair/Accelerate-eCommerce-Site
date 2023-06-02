import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../config/contentFull";
import { formatSmallBannerData } from "../../utils/formatContentApi";

const SmallBanner = () => {
  const [banner, setBanner] = useState();

  const fetchBanner = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        include: 3,
        select: "fields.smallBanner",
      });
      const data = formatSmallBannerData(response);
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
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center px-1">
        {banner?.map((item) => (
          <div className="w-1/2 min-w-[300px] max-sm:w-full" key={item.redirectUrl}>
            <Link to={`/c/${item.redirectUrl}`}>
              <img src={item.image} alt={item.alt} className="p-2" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SmallBanner;
