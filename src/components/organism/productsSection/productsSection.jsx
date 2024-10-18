import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../../molecules/card/card";

const productsSection = ({ products }) => {
  return (
    <Container>
      <h1>Productos</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={6} md={3}>
            <Card type="product" src={product.src} title={product.title}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default productsSection;
