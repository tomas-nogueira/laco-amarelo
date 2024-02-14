import React from 'react'
import Style from "../styles/slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import one from '../photos/carrousel-photos/one.jpg'
import two from '../photos/carrousel-photos/two.jpg'
import three from '../photos/carrousel-photos/three.jpg'
import four from '../photos/carrousel-photos/four.jpg'
import five from '../photos/carrousel-photos/five.jpg'
import six from '../photos/carrousel-photos/six.jpg'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default () => {
  return (
    
    <div class={Style.container}>
      <div>
        <div class={Style.criando}><span>CRIANDO <span class={Style.laco}>LAÇOS</span>, ETERNIZANDO <span class={Style.laco}>MOMENTOS</span></span></div>
        <div class={Style.carousel}></div>
      </div>

        <Swiper

      style={{
        "--swiper-pagination-color": "#FFD83D",
        "--swiper-theme-color": "#FFD83D",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",

      }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{delay:2000}}
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
        1800: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide><img src={two} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={three} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={four} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={one} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={five} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={six} alt="" class={Style.img}/></SwiperSlide>
      </Swiper>

      <div className={Style.lastdiv}>
        <a href="/galeria"><button class={Style.btn}>Ver mais!</button></a>
      </div>
    </div>
      
  );
};
