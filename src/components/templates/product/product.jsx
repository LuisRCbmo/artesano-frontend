import React from "react";

import "./product.scss";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AdCard from "../../molecules/AdCard/AdCard";
import Footer from "../../organism/footer/footer";

const Product = ({ products_info, footer_info }) => {
  const { productName } = useParams();

  const product = products_info.find((p) => p.name === productName);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <>
      <Container className="ad-product-container">
        <Row>
          <Col xs={12} lg={6}>
            <AdCard
              type="product"
              src={product.src || "default_image_url"}
              title={product.name}
            />
          </Col>
          <Col xs={12} lg={6}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Categoría: {product.category}</p>
            <p>
              Linea:{" "}
              {Array.isArray(product.line)
                ? product.line.join(", ")
                : product.line}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer footer_Info={footer_info} />
    </>
  );
};

export default Product;
