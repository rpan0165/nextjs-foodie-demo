'use client'
import React from 'react'
// import { Button } from 'react-bootstrap'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import Image from 'next/image';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/heroslider.css';

// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);


function HeroSlider() {
    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="swiper-slide-container bg-white">
              <div className="text-container">
                <h2 className='text-3xl font-extrabold font-serif'>Mother's Day <br/> Menu Ideas</h2>
                <button className='learn-btn'>Learn More</button>
              </div>
              <div className="image-container">
                <img src="https://foodie.sysco.com/wp-content/uploads/2023/03/Mothers-Day-2023-Banners-3989559-Corporate-v2.jpg" alt="Slide 1 Image" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-container">
              <div className="text-container">
                <h2 className='text-3xl font-extrabold'>Plant Based <br/> Menu Ideas</h2>
                <button>Learn More</button>
              </div>
              <div className="image-container">
                <img src="https://foodie.sysco.com/wp-content/uploads/2023/01/MicrosoftTeams-image-147.jpg" alt="Slide 2 Image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      );
}

export default HeroSlider
