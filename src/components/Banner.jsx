import React from 'react'
import Container from '../components/layout/Container'
import Banner1 from '../assets/images/banner.webp'
import Banner2 from '../assets/images/banner1.webp'
import Banner3 from '../assets/images/banner2.webp'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, Pagination, Mousewheel, Scrollbar } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Banner = () => {
  let slider1 = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      prevEl: ".prev-arrow",
      nextEl: ".next-arrow",
    },
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },

    modules: [Navigation, Autoplay, Pagination,],
  }
  // slider2
  let slider2 = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      type: 'fraction',
    },
    scrollbar: {
      hide: false,
    },
    modules: [Autoplay, Pagination, Scrollbar],
  }
  // slider3
  let slider3 = {
    spaceBetween: 0,
    slidesPerView: 1,
    direction: 'vertical',
    mousewheel: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination, Mousewheel,],
  }
  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="w-full lg:w-2/3 relative slider1 rounded-xl overflow-hidden">
            <Swiper {...slider1}>
              <SwiperSlide><Link to="/shop"><img src={Banner1} className="w-full h-auto object-cover rounded-xl" alt="banner1" /></Link></SwiperSlide>
              <SwiperSlide><Link to="/shop"><img src={Banner2} className="w-full h-auto object-cover rounded-xl" alt="banner2" /></Link></SwiperSlide>
              <SwiperSlide><Link to="/shop"><img src={Banner3} className="w-full h-auto object-cover rounded-xl" alt="banner3" /></Link></SwiperSlide>
            </Swiper>
            <div className="prev-arrow absolute top-1/2 left-3 z-30 w-8 h-8 lg:w-10 lg:h-10 -translate-y-1/2 bg-[#00B207] text-white rounded-full flex justify-center items-center cursor-pointer text-sm lg:text-lg shadow-md">
              <FaArrowLeft />
            </div>
            <div className="next-arrow absolute top-1/2 right-3 z-30 w-8 h-8 lg:w-10 lg:h-10 -translate-y-1/2 bg-[#00B207] text-white rounded-full flex justify-center items-center cursor-pointer text-sm lg:text-lg shadow-md">
              <FaArrowRight />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* slider2 */}
            <div className="relative text-white slider2 rounded-xl overflow-hidden">
              <Swiper {...slider2}>
                <SwiperSlide><Link to="/shop"><img src={Banner2} className="w-full h-auto object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/shop"><img src={Banner3} className="w-full h-auto object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/shop"><img src={Banner2} className="w-full h-auto object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
              </Swiper>
            </div>
            {/* slider3 */}
            <div className="relative flex h-52 lg:h-60 slider3 rounded-xl overflow-hidden">
              <Swiper {...slider3}>
                <SwiperSlide><Link to="/shop"><img src={Banner3} className="w-full h-full object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/shop"><img src={Banner2} className="w-full h-full object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
                <SwiperSlide><Link to="/shop"><img src={Banner3} className="w-full h-full object-cover rounded-xl" alt="banner" /></Link></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Banner
