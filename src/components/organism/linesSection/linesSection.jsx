import React from "react";

import "./linesSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AdCard from "../../molecules/AdCard/AdCard";

const LinesSection = ({ lines }) => {
  const navigate = useNavigate();

  const handleProductClick = (lineName) => {
    navigate(`/line/${lineName}/category/all`);
  };

  return (
    <Container className="ad-lines-section-container">
      <h1>Lineas de productos</h1>
      <p>
        Descubre nuestras líneas de productos, cada una diseñada cuidadosamente
        para ofrecer una combinación perfecta de estilo, durabilidad y
        funcionalidad. Desde accesorios elegantes hasta artículos más prácticos,
        nuestras piezas de marroquinería artesanal están pensadas para adaptarse
        a cada ocasión y a las necesidades de nuestros clientes. Explora y
        encuentra el complemento perfecto que te acompañará por muchos años.
      </p>
      <Row>
        {lines.map((line, index) => (
          <Col className="add-col-center-contend" key={index} xs={12} xl={6}>
            <AdCard
              type="line"
              src="https://www.cotopaxi.com.ec/sites/default/files/2020-08/Gris_0.png"
              title={line.name}
              onClick={() => handleProductClick(line.name)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LinesSection;
