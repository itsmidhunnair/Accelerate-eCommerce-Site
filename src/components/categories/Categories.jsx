import React, { useEffect, useState } from "react";
import { client } from "../../config/contentFull";
import { formatCategoryData } from "../../utils/formatContentApi";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    try {
      const response = await client.getEntries({
        content_type: "categories",
        include: 3,
        order: "sys.createdAt",
        // select: "fields.mediumBanner",
      });
      console.log(response.items);
      const data = formatCategoryData(response);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <h3 className="font-bold text-2xl text-neutral-600 text-center py-9">
        Shop By Categories
      </h3>
      <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
        {categories?.map((category) => (
          <div className="w-1/6 min-w-[200px] px-3 text-gray-700 hover:text-red-500">
            <Link to={`${category.href}`}>
              <img src={category.image} alt={category.alt} />
              <div className="font-bold uppercase text-center">{category?.category}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
