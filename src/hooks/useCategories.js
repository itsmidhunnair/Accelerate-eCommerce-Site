import { useState } from "react";
import { client } from "../config/contentFull";
import { formatCategoryData } from "../utils/formatContentApi";

const useCategories = () => {
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    try {
      const response = await client.getEntries({
        content_type: "categories",
        include: 3,
        order: "sys.createdAt",
      });

      const data = formatCategoryData(response);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchCategories, categories };
};

export default useCategories;
