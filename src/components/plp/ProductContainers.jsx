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
      <div className="mx-auto max-w-7xl px-3">
        {productsList?.map((productContainer) => (
          <ProductListing
            productContainer={productContainer}
            key={productContainer.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProductContainers;
