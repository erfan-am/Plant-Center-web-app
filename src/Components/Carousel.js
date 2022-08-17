import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Carousel = ({links}) => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
   {links.map(link=>(
    <SwiperSlide className="carousel-item active">
    <img height={500} src={link.img} key={Math.random()} className="d-block w-100" alt="..."/>
  </SwiperSlide>
   )) }
   
</Swiper>
  )
}

export default Carousel