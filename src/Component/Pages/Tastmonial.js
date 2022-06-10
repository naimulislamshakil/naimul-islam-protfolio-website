import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Tastmonial = () => {
  return (
    <div className="mt-5 bg-testmonial">
      <h2 className="text-2xl font-bold text-center text-secondary">
        Testimonials
      </h2>
      <h2 className="text-center font-bold text-4xl">What My Clients Say</h2>
      <p className="text-center text-lg mt-3">Tell me my clients for my work</p>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper my-5 bg-base-200"
          slidesPerView="1"
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tastmonial;
