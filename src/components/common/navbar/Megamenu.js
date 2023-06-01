import React from "react";
import { Link } from "react-router-dom";

const Megamenu = ({ data }) => {
  return (
    <>
      <div className="absolute left-0 right-0  z-10 m-auto h-20 w-full max-w-6xl bg-white p-4 shadow-xl">
        <div className="flex gap-40">
          {data.map((item) => (
            <ul>
              <li className="font-semibold hover:text-red-600">{item.subCategory}</li>
              {item.products.map((product) => (
                <li className="py-1 text-sm font-light hover:text-red-600">
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
