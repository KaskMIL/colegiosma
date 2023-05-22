/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-quotes */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerArte from '../../assets/img/banner-arte.png';
import bannerCiencia from '../../assets/img/banner-cs.png';
import bannerHistoria from '../../assets/img/banner-historia.png';
import bannerDeporte from '../../assets/img/banner-dp.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <section>
      <Slider {...settings}>
        <img className='max-heigth-[580px]' src={bannerArte} alt="Banner Artistica" />
        <img className='max-heigth-[580px]' src={bannerHistoria} alt="Banner Historia" />
        <img className='max-heigth-[580px]' src={bannerCiencia} alt="Banner Ciencia" />
        <img className='max-heigth-[580px]' src={bannerDeporte} alt="Banner Deporte" />
      </Slider>
    </section>
  );
};

export default Carousel;
