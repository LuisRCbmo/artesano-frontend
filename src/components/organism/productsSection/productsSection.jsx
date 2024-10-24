import React from "react";

import "./ProductsSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";

const ProductsSection = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (categoryName) => {
    navigate(`/line/all/category/${categoryName}`);
  };

  return (
    <Container className="ad-products-section-container">
      <h1>Productos</h1>
      <p>
      Nuestra colección de productos abarca una amplia variedad de accesorios de cuero, 
  diseñados para combinar estilo y funcionalidad. Desde carteras y mochilas, hasta 
  artículos personalizados para el día a día, cada pieza está hecha con materiales de 
  la más alta calidad y cuidada atención a los detalles. Explora nuestras categorías 
  y encuentra el accesorio perfecto que se adapte a tu estilo.
      </p>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={6} lg={4}>
            <AdCard
              type="product"
              src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/products/category/${product.category.toLowerCase()}`}
              title={product.category}
              onClick={() => handleProductClick(product.category)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsSection;
