import React from "react";
import { Carousel } from "react-bootstrap";

import car1 from "../../../images/carousel/fotografia-kobieca-bialystok-001.jpg";
import car2 from "../../../images/carousel/fotografia-kobieca-bialystok-002.jpg";
import car3 from "../../../images/carousel/fotografia-kobieca-bialystok-003.jpg";
import car4 from "../../../images/carousel/fotografia-kobieca-bialystok-004.jpg";
import car5 from "../../../images/carousel/fotografia-kobieca-bialystok-005.jpg";
import car6 from "../../../images/carousel/fotografia-kobieca-bialystok-006.jpg";

import "./HomeWide.css";

const HomeWide = () => {
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
      </Carousel>
    </div>
  );
};
export default HomeWide;
