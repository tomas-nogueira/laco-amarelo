import React from 'react'
import Style from '../styles/modelos.module.css'
import Product from '../components/Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    
    <div class={Style.container}>
      <div>
        <h2>MODELOS</h2>
      </div>

        <Swiper

      style={{
        "--swiper-pagination-color": "#FFD83D",
        "--swiper-theme-color": "#FFD83D",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",

      }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        425: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide><Product/></SwiperSlide>
      <SwiperSlide><Product/></SwiperSlide>
      <SwiperSlide><Product/></SwiperSlide>
      <SwiperSlide><Product/></SwiperSlide>
      </Swiper>

    </div>
      
  );
};
