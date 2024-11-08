import React from "react";

import "./landingPage.scss";
import CarouselSection from "../../organism/carouselSection/carouselSection";
import ProductsSection from "../../organism/productsSection/productsSection";
import LinesSection from "../../organism/linesSection/linesSection";
import Footer from "../../organism/footer/footer";
import Welcome from "../../organism/Welcome/Welcome";

const LandingPage = ({
  carouselItems_info,
  productTypes_info,
  lines_info,
  footer_info,
}) => {
  return (
    <>
      <Welcome />
      <CarouselSection carouselItems={carouselItems_info} xs_hide={true} />
      <LinesSection lines={lines_info} />
      <ProductsSection products={productTypes_info} />
      <Footer footer_Info={footer_info} />
    </>
  );
};

export default LandingPage;
