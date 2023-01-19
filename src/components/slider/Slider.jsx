/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    pauseOnHover: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="py-10">
      <h2>SLIDER BANNERS</h2>
      <Slider {...settings}>
        <div className="bg-orange-500 flex items-center justify-center h-[200px]">Banner 1</div>
        <div className="bg-orange-500 flex items-center justify-center h-[200px]">Banner 2</div>
        <div className="bg-orange-500 flex items-center justify-center h-[200px]">Banner 3</div>
        <div className="bg-orange-500 flex items-center justify-center h-[200px]">Banner 4</div>
      </Slider>
    </div>
  );
};

export default Carousel;
