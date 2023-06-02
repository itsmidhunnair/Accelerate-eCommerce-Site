import React from "react";
import { Link } from "react-router-dom";

const Megamenu = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="absolute left-0 right-0  z-10 m-auto w-full max-w-6xl bg-white p-10 pt-4 shadow-xl">
        <div className="flex gap-x-40 gap-y-6 max-sm:flex-col">
          {data.map((item) => (
            <ul key={item.subCategory}>
              <li className="font-semibold hover:text-red-600">{item.subCategory}</li>
              {item.products.map((product) => (
                <li
                  key={product.productLink}
                  className="py-1 text-sm font-light hover:text-red-600">
                  <Link to={`/c/${product.productLink}`}>{product.product}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Megamenu;
