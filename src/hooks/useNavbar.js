import { useState } from "react";
import { client } from "../config/contentFull";
import { formatLinkData } from "../utils/formatContentApi";

const useNavbar = () => {
  const [navbar, setNavbar] = useState();

  const [showNav, setShowNav] = useState(false)

  const fetchNavbar = async () => {
    try {
      const response = await client.getEntries({
        content_type: "navbar",
        include: 3,
      });
      const data = formatLinkData(response);
      setNavbar(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchNavbar, navbar, showNav, setShowNav };
};

export default useNavbar;
