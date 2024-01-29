import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './NavBar';
import Events from './Events';


const images = [
    'images/demo.avif',
    'images/demo.avif',
    'images/demo.avif',
    'images/demo.avif',
    'images/demo.avif',
    'images/demo.avif',
   ];

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:500,
     };
  return (
    <>
    <NavBar/>
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
    <Events/>
    </>
  )
}

export default Home