import React, { useEffect, useState } from "react";
import { client } from "../../config/contentFull";
import { formatProductListData } from "../../utils/formatContentApi";

import ProductListing from "./ProductListing";

const ProductContainers = () => {
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

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <>
      {productsList?.map((productContainer) => (
        <ProductListing productContainer={productContainer} />
      ))}
    </>
  );
};

export default ProductContainers;
