import React from "react";

import CarouselSection from "../../organism/carouselSection/carouselSection";
import ProductsSection from "../../organism/productsSection/productsSection";
import LinesSection from "../../organism/linesSection/linesSection";

const landingPage = ({ carouselItems_info, productTypes_info, lines_info }) => {
  return (
    <>
      <CarouselSection carouselItems={carouselItems_info} />
      <ProductsSection products={productTypes_info} />
      <LinesSection lines={lines_info} />
    </>
  );
};

export default landingPage;
