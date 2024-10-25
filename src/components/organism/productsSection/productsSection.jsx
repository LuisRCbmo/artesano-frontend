import React, { useState, useEffect } from "react";

import "./ProductsSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

import AdSlider from "../../molecules/AdSlider/AdSlider";
import AdCard from "../../molecules/AdCard/AdCard";

const ProductsSection = ({ products }) => {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 992) {
        setItemsPerPage(1);
      } else if (width >= 992 && width < 1400) {
        setItemsPerPage(2);
      } else if (width > 1400) {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (categoryName) => {
    navigate(`/line/all/category/${categoryName}`);
  };

  return (
    <Container className="ad-products-section-container">
      <h1>Nuestros Productos</h1>
      <p>
        Nuestra colección de productos abarca una amplia variedad de accesorios
        de cuero, diseñados para combinar estilo y funcionalidad. Desde carteras
        y mochilas, hasta artículos personalizados para el día a día, cada pieza
        está hecha con materiales de la más alta calidad y cuidada atención a
        los detalles. Explora nuestras categorías y encuentra el accesorio
        perfecto que se adapte a tu estilo.
      </p>
      <AdSlider settings={{ slidesToShow: itemsPerPage }}>
        {products.map((product, index) => (
          <AdCard
            key={index}
            type="line"
            src=""
            title={product.category}
            onClick={() => handleProductClick(product.category)}
          />
        ))}
      </AdSlider>
    </Container>
  );
};

export default ProductsSection;
