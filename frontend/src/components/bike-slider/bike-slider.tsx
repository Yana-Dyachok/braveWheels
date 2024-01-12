import React, { useEffect, useState } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BikeCard from 'components/ui/bikeCard/bike-card';
import BtnAction from 'components/ui/btnAction/btnAction';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
        pagination={{
          clickable: true,
          el: '.bike-slider__pagination',
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
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './_bike-slider.scss';
// import bikesArray from 'mockAPI/db';
// import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// // Ініціалізуємо Swiper модулі
// SwiperCore.use([Pagination, Navigation]);

// const BikeSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.activeIndex);
//   };

//   useEffect(() => {
//     const swiperInstance = new Swiper('.bike-slider', {
//       spaceBetween: 25,
//       slidesPerView: 4,
//       navigation: {
//         nextEl: '.bike-slider__nav--next',
//         prevEl: '.bike-slider__nav--prev',
//       },
//       pagination: {
//         clickable: true,
//         el: '.bike-slider__pagination',
//       },
//       on: {
//         slideChange: () => handleSlideChange(swiperInstance),
//       },
//     });

//     // Запобігаємо помилці "React Hook useEffect has a missing dependency"
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className='bike-slider'>
//       <Swiper
//         spaceBetween={25}
//         slidesPerView={4}
//         navigation={{
//           nextEl: '.bike-slider__nav--next',
//           prevEl: '.bike-slider__nav--prev',
//         }}
//         pagination={{
//           clickable: true,
//           el: '.bike-slider__pagination',
//         }}
//         onSwiper={(swiper) => handleSlideChange(swiper)}
//       >
//         {bikesArray.map(
//           (
//             bike: {
//               productImageUrl: string;
//               productName: string;
//               productPageUrl: string;
//               productPrice: number;
//               amount: number;
//               discount: number;
//               humanHeight: number[];
//               wheelLength: number;
//             },
//             index: number
//           ) => (
//             <SwiperSlide key={index}>
//               <div className='bike-slider__card'>
//                 {/* Ваш BikeCard компонент */}
//               </div>
//             </SwiperSlide>
//           )
//         )}
//       </Swiper>
//       <div className='bike-slider__actions'>
//         <button className='bike-slider__nav bike-slider__nav--prev'>
//           Prev
//         </button>
//         <button className='bike-slider__nav bike-slider__nav--next'>
//           Next
//         </button>
//       </div>
//       <div className='bike-slider__pagination'></div>
//     </div>
//   );
// };

// export default BikeSlider;
