import React, { useEffect, useState } from 'react';
import { client } from '../../config/contentFull';
import {
  formatMediumBannerData,
} from '../../utils/formatContentApi';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  const [banner, setBanner] = useState();

  const fetchBanner = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'homePage',
        include: 3,
        select: 'fields.mediumBanner',
      });
      const data = formatMediumBannerData(response);
      setBanner(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <>
      <div className="flex px-1 justify-center flex-wrap max-w-7xl mx-auto">
        {banner?.images?.map((item) => (
          <div className='w-1/2'>
            <Link to={`/c/${item.redirectUrl}`}>
            <img src={item.img} alt={item.alt} className='p-2'/>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PromoBanner;
