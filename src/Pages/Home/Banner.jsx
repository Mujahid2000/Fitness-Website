
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Banner.module.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Set the duration for the transition between slides in milliseconds
        autoplay: true,
        autoplaySpeed: 4000, // Set the duration for each slide in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
        <div className="px-5 relative">
            <img src="https://i.ibb.co/TWLqWL5/banner1.jpg" alt="" className='rounded-lg'/>
            
        </div>
            <div className="px-5 relative">
            <img src="https://i.ibb.co/M9YDpXm/banner3.jpg" alt="" className='rounded-lg'/>
        </div>
        <div className="px-5 relative">
            <img src="https://i.ibb.co/x1R1rMB/banner2.jpg" alt="" className='rounded-lg'/>
            
        </div>
     
    </Slider>
        </div>
    );
};

export default Banner;
