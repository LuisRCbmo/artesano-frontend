import React from "react";
import Slider from "react-slick";

import	"./AdSlider.scss"

function AdSlider({ children, settings }) {
  const defaultSettings = {
    accessibility: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    centerMode: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: "65px",
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "65px",
          infinite: true
        }
      },
      {
        breakpoint: 1200 ,
        settings: {
          slidesToShow: 2,
          centerPadding: "45px",
          infinite: true
        }
      },
      {
        breakpoint: 1400 ,
        settings: {
          slidesToShow: 2,
          centerPadding: "130px",
          infinite: true
        }
      }
    ],
    ...settings,
  };

  return (
    <div className="slider-container">
      <Slider {...defaultSettings}>
        {children.map((child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AdSlider;
