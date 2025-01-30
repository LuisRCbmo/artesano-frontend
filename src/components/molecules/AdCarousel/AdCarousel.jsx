import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import AdImage from "../../atoms/AdImage/AdImage";

const AdCarousel = ({ carouselItems }) => {
  const placeholder = "/img/placeholder31.png";
  const [validatedImages, setValidatedImages] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      const promises = carouselItems.map((item) =>
        fetch(item.src, { method: "HEAD" })
          .then((res) => (res.ok ? item.src : placeholder))
          .catch(() => placeholder)
      );

      const results = await Promise.all(promises);
      setValidatedImages(results);
    };

    checkImages();
  }, [carouselItems]);

  return (
    <Carousel fade={true}>
      {validatedImages.map((src, index) => (
        <Carousel.Item key={index}>
          <AdImage src={src} ad_className="" alt={`Imagen #${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AdCarousel;
