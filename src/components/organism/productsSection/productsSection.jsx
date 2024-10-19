import React from "react";

import './productsSection.scss'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";

const productsSection = ({ products }) => {

  return (
    <Container className="ad-products-section-container">
      <h1>Productos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum
        ac ligula vitae volutpat. Sed risus leo, placerat eget turpis vel,
        tincidunt dictum turpis. Sed ut massa at eros dictum egestas sed a nisl.
        Morbi fermentum risus et dapibus tincidunt. Phasellus semper, justo
        vestibulum pharetra bibendum, mi turpis gravida sem, a elementum odio
        nunc id leo. Nulla eu interdum nulla. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Duis nec viverra nisl.
      </p>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={6} lg={4}>
            <AdCard type="product" src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png" title={product.category}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default productsSection;
