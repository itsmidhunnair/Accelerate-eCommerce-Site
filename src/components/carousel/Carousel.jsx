import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { client } from '../../config/contentFull';
import { formatCarouselData } from '../../utils/formatContentApi';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  const [carousel, setCarousel] = useState();

  const fetchCarousel = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'homePage',
        include: 3,
        select: 'fields.mainBanner'
      });
      const data = formatCarouselData(response);
      setCarousel(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <Swiper slidesPerView={1} pagination={true} loop={true} modules={[Pagination]}>
      {carousel?.map((img) => (
        <SwiperSlide>
          <img src={img.imageUrl} alt={img.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
