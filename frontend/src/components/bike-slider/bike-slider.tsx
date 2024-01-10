import React, { useEffect, useState } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BikeCard from 'components/ui/bikeCard/bike-card';
import BtnAction from 'components/ui/btnAction/btnAction';

import 'swiper/css';
import 'swiper/css/navigation';
import './_bike-slider.scss';

import bikesArray from 'mockAPI/db';

const BikeSlider = () => {
  const [bikes, setBikes] = useState<any>(undefined);
  const bikesDataURI = './db.json';

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(bikesDataURI);
  //       const data = await response.json();
  //       setBikes(data.bikes);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();

  // }, []);

  // if (bikes === undefined) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='bike-slider'>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.bike-slider__nav--next',
          prevEl: '.bike-slider__nav--prev',
        }}
        spaceBetween={25}
        slidesPerView={4}
      >
        {bikesArray.map(
          (bike: {
            productImageUrl: string;
            productName: string;
            productPageUrl: string;
            productPrice: number;
            amount: number;
            discount: number;
            humanHeight: number[];
            wheelLength: number;
          }) => (
            <SwiperSlide>
              <div className='bike-slider__card'>
              <BikeCard
                productImageUrl={bike.productImageUrl}
                productName={bike.productName}
                productPageUrl={bike.productPageUrl}
                productPrice={bike.productPrice}
                amount={bike.amount}
                discount={bike.discount}
                humanHeight={bike.humanHeight}
                wheelLength={bike.wheelLength}
              />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
      <div className='bike-slider__actions'>
        <BtnAction classNames='bike-slider__nav bike-slider__nav--next icon icon--next' />
        <BtnAction classNames='bike-slider__nav bike-slider__nav--prev icon icon--prev' />
      </div>
    </div>
  );
};

export default BikeSlider;
