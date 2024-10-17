import React from "react";


import Carousel from "react-bootstrap/Carousel";
import Image from "../../atoms/image/image";

const carousel = ({carouselItems}) => {
  return (
    <Carousel fade={true}>
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
  );
};

export default carousel;
