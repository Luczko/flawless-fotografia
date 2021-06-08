import React from "react";
import { Carousel } from "react-bootstrap";

import car1 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_011.jpg";
import car2 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_012.jpg";
import car3 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_013.jpg";
import car4 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_014.jpg";
import car5 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_015.jpg";
import car6 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_016.jpg";
import car7 from "../../../images/carousel-mobile/fotografia_kobieca_bialystok_017.jpg";
import logo from "../../../images/logo-home.png";

import "./HomeMobile.css";

const HomeMobile = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel controls={false} fade={true} pause={false} indicators={false}>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car1}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car2}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car3}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car4}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car5}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car6}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100'
            src={car7}
            alt='sesja-kobieca-budoir'
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='logo-home'>
        <img src={logo} />
      </div>
    </div>
  );
};
export default HomeMobile;
