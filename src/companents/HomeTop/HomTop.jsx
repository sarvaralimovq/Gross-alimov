import React from 'react'
import './HomeTop.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





function HomTop() {
  return (
    <div className='home-top'>
        <div className="container">
            <div className="swiper">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    // clickable: true,
                    dynamicBullets: true,
                    }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >     
                <SwiperSlide><img src="" alt="Gross-img" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                
                <Swiper></Swiper>
            </Swiper>

            </div>
        </div>
    </div>
  )
}

export default HomTop