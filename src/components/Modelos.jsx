import React from 'react'
import Style from '../styles/modelos.module.css'
import Product from '../components/Product'
import produto2 from '../photos/produto2.png'
import produto3 from '../photos/produto3A.png'
import produto4 from '../photos/produto4P.png'
import produto5 from '../photos/produto5A.png'
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Modelos = () => {
  const controls = useAnimation();

  // Função para iniciar a animação
  const startAnimation = async () => {
      await controls.start({ opacity: 1, y: 0 });
  };

  // Chame startAnimation após o componente ser montado
  React.useEffect(() => {
      startAnimation();
  }, []);

  return (
    <motion.div class={Style.container} initial={{ opacity: 0, y: 20 }}
    animate={controls}
    transition={{ duration: 0.5 }}>
    <div>
      <h2 class={Style.modelos}>MODELOS</h2>
    </div>

      <Swiper

    style={{
      "--swiper-pagination-color": "#FFD83D",
      "--swiper-theme-color": "#FFD83D",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",

    }}
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
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
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 340,
      },
    }}
  >
    <SwiperSlide><Product img={produto3} text="Albúm" desc="Albúm com a capa em acrílico" color="rgb(147, 175, 186)" class={Style.product}/></SwiperSlide>
    <SwiperSlide><Product img={produto2} text="Albúm" desc="Albúm simples e minimalista" color="#e7dfec" class={Style.product}/></SwiperSlide>
    <SwiperSlide><Product img={produto4} text="Albúm" desc="Albúm em veludo." color="#e2cccc" class={Style.product}/></SwiperSlide>
    <SwiperSlide><Product img={produto5} text="Albúm" desc="Albúm com fotos." color="#02A2AC" class={Style.product}/></SwiperSlide>
    </Swiper>

  </motion.div>
  );
};

export default Modelos;
