import { useState } from 'react'
import { client } from '../config/contentFull';
import { formatCarouselData } from '../utils/formatContentApi';

const useCarousel = () => {

    const [carousel, setCarousel] = useState();

  const fetchCarousel = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePage",
        include: 3,
        select: "fields.mainBanner",
      });
      const data = formatCarouselData(response);
      setCarousel(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {fetchCarousel, carousel}
}

export default useCarousel