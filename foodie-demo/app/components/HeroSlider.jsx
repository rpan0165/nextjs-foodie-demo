'use client'
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

const sliceStrings = (str) => {
  // Split the title into two lines
  const splitStr = str.split(" ");
  const firstStr = splitStr.slice(0, 2).join(" ");
  const secondStr = splitStr.slice(2).join(" ");
  return [firstStr, secondStr];
}


function HeroSlider(heroSliderContent) {
  const slides = heroSliderContent.props.hero_slider.slides;

  // // shortend path for slides data
  // var slides = null;
  // if (props.hardCoded) { slides = props.sliderContent }


  return (
      <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {
          slides.map((slide, index) => {
            return(
              <SwiperSlide key={index}>
                <div className="swiper-slide-container" style={{marginTop:"7.2rem"}}>
                  <div className="half-width-container">
                    <div className="text-container">
                      <h2 className='text-4xl font-extrabold font-serif'>{slide.header}</h2>
                      <button className='learn-btn'>{slide.cta.title}</button>
                    </div>
                  </div>
                  <div className="half-width-container">
                    <div className="image-container">
                      <img src={slide.background_image.url} alt="Slide 1 Image" />
                    </div>
                  </div>
                </div>
            </SwiperSlide>
          )})
          }
      </Swiper>
      </>
      )
}

export default HeroSlider
