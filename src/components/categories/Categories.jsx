import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useCategories from "../../hooks/useCategories";

const Categories = () => {
  const { fetchCategories, categories } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-7xl px-3">
        <h3 className="py-9 text-center text-2xl font-bold text-neutral-600">
          Shop By Categories
        </h3>
        <div className="flex flex-wrap justify-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              540: {
                slidesPerView: 2,
              },
              767: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1244: {
                slidesPerView: 6,
              },
            }}>
            {categories?.map((category) => (
              <SwiperSlide>
                <div key={category.href} className=" text-gray-700 hover:text-red-500 flex justify-center">
                  <Link to={`${category.href}`}>
                    <img src={category.image} alt={category.alt} />
                    <div className="text-center font-bold uppercase">
                      {category?.category}
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Categories;
