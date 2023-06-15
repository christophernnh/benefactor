import React from 'react';
import HomeCard from './HomeCard.jsx';
import HomeCardData from './HomeCardData.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
// import './swiper.css';

SwiperCore.use([Navigation, Scrollbar]);

export default function FullScroll3() {
  return (
    <div className="relative h-screen snap-start bg-zinc-900">
      <div className="flex text-white text-2xl items-center justify-center pt-32 tracking-widest">
        EXPLORE FURTHER
      </div>
      <div className="flex text-white text-lg font-extralight items-center justify-center pt-3 pb-14 tracking-wide">
        CONTINUE YOUR JOURNEY
      </div>
      <div className="flex w-screen px-5">
        <Swiper spaceBetween={20} slidesPerView={3} navigation  className="mySwiper">
          {HomeCardData.map((card, index) => (
            <SwiperSlide key={index}>
              <HomeCard details={[card]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
