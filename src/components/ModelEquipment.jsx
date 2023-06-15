import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import EquipmentCardData from '../components/EquipmentCardData';
import ModelCard from '../components/ModelCard';

const EquipmentComponent= () => {
    return (
        <div className='pb-48 pt-10'>
            <Swiper spaceBetween={20} slidesPerView={3} navigation  className="mySwiper">
            {EquipmentCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <ModelCard details={[card]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );

};

export default EquipmentComponent;
