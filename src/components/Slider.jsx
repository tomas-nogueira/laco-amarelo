import React from 'react'
import Style from "../styles/slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Slider() {
  return (
    <div class={Style.container}>
      <div class={Style.criando}><span>CRIANDO <span class={Style.laco}>LAÇOS</span>, ETERNIZANDO <span class={Style.laco}>MOMENTOS</span></span></div>
      <div class={Style.carousel}>
          <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
