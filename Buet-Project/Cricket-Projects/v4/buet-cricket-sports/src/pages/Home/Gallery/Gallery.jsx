import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Gallery.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Gallery = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Q6Fdrt7/Tigers.jpg" alt="" />
          <h2 className="text-center p-5 text-2xl font-bold text-blue-900">
            Buet Tigers
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/9HNfjg8/Gradios.jpg" alt="" />
          <h2 className="text-center p-5 text-2xl font-bold text-violet-800">
            Buet Gladiorts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/7C6KRsZ/thunder.jpg" alt="" />
          <h2 className="text-center p-5 text-2xl font-bold text-pink-800">
            Buet Thunders
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/VB3G2qk/prize.jpg" alt="" />
          <h2 className="text-center p-5 text-2xl font-bold text-pink-800">
            Final Winner
          </h2>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
