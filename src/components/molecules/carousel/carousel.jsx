import React from "react";

import './carousel.scss';

import Carousel from "react-bootstrap/Carousel";
import Image from "../../atoms/image/image";
import { Container } from "react-bootstrap";

const carousel = () => {
  return (
    <Container>
    <Carousel>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/samples/coffee"
          ad_className="ad-img-carousel"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/samples/smile"
          ad_className="ad-img-carousel"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/samples/landscapes/nature-mountains"
          ad_className="ad-img-carousel"
        />
        <Carousel.Caption>
          <h3>Imagen#3</h3>
          <p>
            texto #3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
};

export default carousel;
