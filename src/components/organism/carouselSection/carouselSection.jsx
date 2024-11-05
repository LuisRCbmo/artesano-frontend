import React from "react";

import "./carouselSection.scss";

import AdCarousel from "../../molecules/AdCarousel/AdCarousel";
const carouselSection = ({ carouselItems, xs_hide }) => {
  return (
    <div
      className={`ad-carousel-container ${
        xs_hide ? "ad-carousel-container-no-display" : ""
      }`}
    >
      <AdCarousel carouselItems={carouselItems} />
    </div>
  );
};

export default carouselSection;
