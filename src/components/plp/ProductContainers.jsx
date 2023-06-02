import React, { useEffect } from "react";
import useProductCotainers from "../../hooks/useProductCotainers";

import ProductListing from "./ProductListing";

const ProductContainers = () => {
  const { fetchProductsList, productsList } = useProductCotainers();

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
