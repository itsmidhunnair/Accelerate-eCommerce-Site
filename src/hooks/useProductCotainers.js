import { useState } from "react";
import { client } from "../config/contentFull";
import { formatProductListData } from "../utils/formatContentApi";

const useProductCotainers = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchProductsList = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        include: 3,
        select: "fields.productCardsSection",
      });
      const data = formatProductListData(response);
      setProductsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchProductsList, productsList };
};

export default useProductCotainers;
