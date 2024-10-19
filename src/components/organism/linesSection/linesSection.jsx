import React from "react";

import "./linesSection.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";

const linesSection = ({ lines }) => {
  return (
    <Container className="ad-lines-section-container">
      <h1>Lineas de productos</h1>
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
        {lines.map((line, index) => (
          <Col className="add-col-center-contend" key={index} xs={12} xl={6}>
            <AdCard
              type="line"
              src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png"
              title={line.line}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default linesSection;
