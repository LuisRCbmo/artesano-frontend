import React from "react";
import CarouselSection from "../../organism/carouselSection/carouselSection";
import ProductsSection from "../../organism/productsSection/productsSection";
import LinesSection from "../../organism/linesSection/linesSection";
import Footer from "../../organism/footer/footer";

const landingPage = ({ carouselItems_info, productTypes_info, lines_info, footer_info }) => {
  return (
    <>
      <CarouselSection carouselItems={carouselItems_info} />
      <LinesSection lines={lines_info} />
      <ProductsSection products={productTypes_info} />
      <Footer footer_Info={footer_info} />
    </>
  );
};

export default landingPage;
