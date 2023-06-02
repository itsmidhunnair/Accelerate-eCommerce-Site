import React, { useState } from "react";
import { client } from "../config/contentFull";
import { formatMediumBannerData } from "../utils/formatContentApi";

const usePromoBanner = () => {
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
  return {fetchBanner, banner};
};

export default usePromoBanner;
