import React from "react";
import { Carousel } from "react-bootstrap";

import car1 from "../../../images/carousel-mobile/test1.jpg";
import car2 from "../../../images/carousel-mobile/test2.jpg";
import car3 from "../../../images/carousel-mobile/test3.jpg";
import car4 from "../../../images/carousel-mobile/test4.jpg";
import car5 from "../../../images/carousel-mobile/test5.jpg";
import car6 from "../../../images/carousel-mobile/test6.jpg";
import car7 from "../../../images/carousel-mobile/test7.jpg";
import car8 from "../../../images/carousel-mobile/test8.jpg";
import car9 from "../../../images/carousel-mobile/test9.jpg";

import "./HomeMobile.css";

const HomeMobile = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel controls={false} fade={true} pause={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car1} alt='test1' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car2} alt='test2' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car3} alt='test3' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car4} alt='test4' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car5} alt='test5' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car6} alt='test6' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car7} alt='test7' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car8} alt='test8' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={car9} alt='test9' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default HomeMobile;
