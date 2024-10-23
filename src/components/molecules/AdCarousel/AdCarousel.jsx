import React from "react";


import Carousel from "react-bootstrap/Carousel";
import Image from "../../atoms/image/image";

const AdCarousel = ({carouselItems}) => {
  return (
    <Carousel fade={true}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <Image
            src={item.src}
            ad_className=""
            alt={`Imagen #${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AdCarousel;
