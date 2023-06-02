import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { client } from "../../config/contentFull";
import { formatCarouselData } from "../../utils/formatContentApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useCarousel from "../../hooks/useCarousel";

const Carousel = () => {
  const { fetchCarousel, carousel } = useCarousel();

  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-3">
      <Swiper slidesPerView={1} pagination={true} loop={true} modules={[Pagination]}>
        {carousel?.map((img) => (
          <SwiperSlide key={img.alt}>
            <img src={img.imageUrl} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
