import React from "react";

import "./landingPage.scss"

import CarouselSection from "../../organism/carouselSection/carouselSection";
import ProductsSection from "../../organism/productsSection/productsSection";
import LinesSection from "../../organism/linesSection/linesSection";
import Footer from "../../organism/footer/footer";
import { Container } from "react-bootstrap";

const landingPage = ({
  carouselItems_info,
  productTypes_info,
  lines_info,
  footer_info,
}) => {
  return (
    <>
      <Container className="ad-landingPage-container">
        <h1>Artesano Design</h1>
        <p className="ad-landingPage-p">
          Creamos productos de cuero que combinan lo mejor de la tradición
          artesanal y el diseño moderno. Cada pieza es elaborada con dedicación
          en nuestro taller en Bolivia, reflejando nuestro compromiso con la
          calidad, durabilidad y el cuidado de los detalles. Descubre el arte
          detrás de cada creación y cómo llevamos la marroquinería boliviana al
          mundo
        </p>
        <CarouselSection carouselItems={carouselItems_info} xs_hide={false} />
      </Container>
      <LinesSection lines={lines_info} />
      <ProductsSection products={productTypes_info} />
      <Footer footer_Info={footer_info} />
    </>
  );
};

export default landingPage;
