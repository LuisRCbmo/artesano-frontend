import React from "react";
import { useParams } from "react-router-dom";

import "./dynamicCatalog.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../../molecules/card/card";

const DynamicCatalog = ({ products_info }) => {
  const { lineName, categoryName } = useParams();

  const filteredProducts = products_info.filter((product) => {
    const linesArray = Array.isArray(product.line) ? product.line : [product.line];
    return linesArray.includes(lineName) && product.category === categoryName;
  });

  return (
    <Container className="ad-dinamic-catalog-container">
      <h1>Linea: {lineName}</h1>
      <h2>Productos: {categoryName}</h2>
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Col key={index} xs={6} lg={4}>
              <Card
                type="product"
                src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png"
                title={product.name}
              />
            </Col>
          ))
        ) : (
          <p>No hay productos disponibles para esta combinación.</p>
        )}
      </Row>
    </Container>
  );
};

export default DynamicCatalog;
