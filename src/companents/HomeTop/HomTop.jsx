import React from 'react'
import './HomeTop.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import grossFOTO1 from '../../img/grossFoto1.png'
import grossFOTO2 from '../../img/grossFoto2.jpg'




function HomTop() {
  return (
    <div className='home-top'>
        <div className="container">
            <div className="swiper ">
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
                className="mySwiper scroll-up"
                >     
                <SwiperSlide><img src={grossFOTO1} alt="Gross-img" /></SwiperSlide>
                <SwiperSlide><img src={grossFOTO2} alt="Gross-img" /></SwiperSlide>
                <SwiperSlide><img src="" alt="Gross-img" /></SwiperSlide>
                <SwiperSlide><img src="" alt="Gross-img" /></SwiperSlide>
                
                
                <Swiper></Swiper>
            </Swiper>

            </div>
        </div>
    </div>
  )
}

export default HomTop