import React, { useState } from "react";
import { client } from "../config/contentFull";
import { formatFooterData } from "../utils/formatContentApi";

const useFooter = () => {
  const [footer, setFooter] = useState();

  const fetchFooter = async () => {
    try {
      const response = await client.getEntries({
        content_type: "footer",
        include: 3,
      });
      const data = formatFooterData(response);
      //   setFooter(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchFooter, footer };
};

export default useFooter;
