import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Style from "./Banner.module.css";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";

// ✅ Correct paths
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";

const Banner = () => {
  return (
    <Swiper
        slidesPerView={1}   
        centeredSlides={true}  
        spaceBetween={20} 
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>
        <img src={banner1} alt="Banner 1" className={Style.slider_image}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Banner 2" className={Style.slider_image}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Banner 3" className={Style.slider_image}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
