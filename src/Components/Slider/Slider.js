import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../assets/slider/slider-1.jpg';
import slider2 from "../../assets/slider/slider-2.jpg";
import slider3 from "../../assets/slider/slider-3.jpg";


const Slider = () => {

  return (
    <>
<Carousel className='py-5'>
      <Carousel.Item>
        <img className='img-fluid' src={slider1} alt='slider-1'/>

      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src={slider2} alt='slider-2'/>

      </Carousel.Item>
      <Carousel.Item>
      <img className='img-fluid' src={slider3} alt='slider-3'/>

      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider
