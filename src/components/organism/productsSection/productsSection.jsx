import React from "react";

import "./ProductsSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

import AdSlider from "../../molecules/AdSlider/AdSlider";
import AdCard from "../../molecules/AdCard/AdCard";

const ProductsSection = ({ products }) => {

  const navigate = useNavigate();

  const handleProductClick = (categoryName) => {
    navigate(`/line/all/category/${categoryName}`);
  };

  return (
    <Container className="ad-products-section-container">
      <h1>Nuestros Productos</h1>
      <p className="ad-products-section-p">
        Nuestra colección de productos abarca una amplia variedad de accesorios
        de cuero, diseñados para combinar estilo y funcionalidad. Desde carteras
        y mochilas, hasta artículos personalizados para el día a día, cada pieza
        está hecha con materiales de la más alta calidad y cuidada atención a
        los detalles. Explora nuestras categorías y encuentra el accesorio
        perfecto que se adapte a tu estilo.
      </p>
      <AdSlider>
        {products.map((product, index) => (
          <AdCard
            key={index}
            type="line"
            src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/category/${product.category.toLowerCase()}`}
            title={product.category}
            onClick={() => handleProductClick(product.category)}
          />
        ))}
      </AdSlider>
    </Container>
  );
};

export default ProductsSection;
