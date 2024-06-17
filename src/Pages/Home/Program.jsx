import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'; // Assuming you have your styles in this CSS file
import { Pagination } from 'swiper/modules';

const Program = () => {
  return (
    <div className="program-container ">
      <h1 className='text-black text-5xl font-bold text-left'>Explore Our Program</h1>
      <Swiper
        slidesPerView={1} // Default for mobile devices
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://i.ibb.co/Nr8p38W/Group-4.png" alt="" className="icon"/>
            <h2 className='text-xl text-white'>Cardio Strength</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://i.ibb.co/DL0nGjT/Group-5.png" alt="" className="icon"/>
            <h2 className='text-xl text-white'>Fat Lose</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://i.ibb.co/nr79DvS/Vector.png" alt="" className="icon"/>
            <h2 className='text-xl text-white'>Muscle Gain</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://i.ibb.co/jrD1ZT8/Group-3.png" alt="" className="icon"/>
            <h2 className='text-xl text-white'>Nutrition</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="https://i.ibb.co/Nr8p38W/Group-4.png" alt="" className="icon"/>
            <h2 className='text-xl text-white'>Cardio Strength</h2>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </div>
        </SwiperSlide>
       
        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default Program;
