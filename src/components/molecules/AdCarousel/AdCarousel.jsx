import React from "react";


import Carousel from "react-bootstrap/Carousel";
import AdImage from "../../atoms/AdImage/AdImage";

const AdCarousel = ({carouselItems}) => {
  return (
    <Carousel fade={true}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <AdImage
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
