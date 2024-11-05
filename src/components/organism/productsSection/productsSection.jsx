import React from "react";

import "./productsSection.scss";

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
        Nuestra colección de accesorios combina estilo y funcionalidad con
        materiales de alta calidad y atención a los detalles.
      </p>
      <AdSlider>
        {products.map((product, index) => (
          <AdCard
            key={index}
            type="line"
            src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/category/${product.category.toLowerCase()}?updated=${Date.now()}`}
            title={product.category}
            onClick={() => handleProductClick(product.category)}
          />
        ))}
      </AdSlider>
    </Container>
  );
};

export default ProductsSection;
