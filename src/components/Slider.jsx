import React from 'react'
import Style from "../styles/slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import One from '../photos/one.jpg'
import two from '../photos/two.jpg'
import three from '../photos/three.jpg'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    
    <div class={Style.container}>
      <div>
        <div class={Style.criando}><span>CRIANDO <span class={Style.laco}>LAÇOS</span>, ETERNIZANDO <span class={Style.laco}>MOMENTOS</span></span></div>
        <div class={Style.carousel}></div>
      </div>

        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={One} alt="" class={Style.img}/></SwiperSlide>
      <SwiperSlide><img src={One} alt="" /></SwiperSlide>
      <SwiperSlide><img src={One} alt="" /></SwiperSlide>
      <SwiperSlide><img src={One} alt="" /></SwiperSlide>
      </Swiper>
    </div>
      
  );
};
