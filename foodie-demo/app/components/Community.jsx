'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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


function Community(communityContent) {

  const communityCards = communityContent.props.community_section.slides;
  return (
    <section className="section-community">
      <br />
      <hr className='text-gray-300' />
      <div class="container-fluid mt-5 pt-4">
        {/* main title of the section */}
        <h2 className="text-center font-bold mb-5 lg:text-4xl sm:text-2xl" style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{communityContent.props.community_section.header}</h2>
        {/* <div class="h_line mt-0 mb-4 pt-0 " style={{
                    color: "red", borderBottom: "5px solid #56B146",
                    width: "10rem",
                    margin: "auto",
                }}></div> */}

        <div className='grid lg:grid-cols-4 gap-4 mr-5 mb-5 mx-auto md:grid-cols-2 sm:grid-cols-1' style={{ width: "85%" }}>
          {
            communityCards.map(card => (
              <div className='flex flex-col border-2 rounded-lg flex-wrap justify-between' style={{ backgroundColor: "#FFF9F0" }}>
                <div className="bg-cover rounded-t-lg" style={{ width: "100%", height: "17.5rem", backgroundColor: "yellow", backgroundImage: `url(${card.image.url})` }}></div>
                <div className='p-4' style={{ minHeight: "8rem" }}>
                  <h5 className='text-sm text-sky-500 font-bold'>{card.link.title}</h5>
                  <h3 className='pt-0 font-bold lg:text-lg md:text-sm sm:text-sm' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{card.link2.title}</h3>
                </div>
              </div>
            ))
          }
        </div>
        {/* <div className='grid grid-cols-4 mr-5 mb-5 mx-auto' style={{ width: "85%" }}>
                {
                  communityCards.map(card => (
                    <div className='flex flex-col border-2 rounded-lg' style={{ margin: "12px", backgroundColor: "#FFF9F0" }}>
                      <div className="bg-cover" style={{ width: "100%", height: "17.5rem", backgroundColor: "yellow", backgroundImage: `url(${card.image.url})` }}></div>
                      <div className='p-3' style={{ height: "6rem" }}>
                        <h4 className='text-sm text-sky-500 font-bold mb-2'>{card.link.title}</h4>
                        <h3 className='pt-0 font-bold text-lg' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{card.link2.title}</h3>
                      </div>                                         
                  </div>
                  ))
                }
              </div> */}
      </div>
    </section >
  );
}

export default Community

