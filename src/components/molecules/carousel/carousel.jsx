import React from "react";

import './carousel.scss';

import Carousel from "react-bootstrap/Carousel";
import Image from "../../atoms/image/image";
import { Container } from "react-bootstrap";

const carousel = ({carouselItems}) => {
  return (
    <Container className="ad-carousel-center-content">
    <Carousel className="ad-carousel-width">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            src={item.src}
            ad_className="ad-img-carousel"
            alt={`Slide ${index + 1}`} // Para accesibilidad
          />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </Container>
  );
};

export default carousel;
