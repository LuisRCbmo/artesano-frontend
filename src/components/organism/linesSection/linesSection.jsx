import React from "react";

import "./linesSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

import AdSlider from "../../molecules/AdSlider/AdSlider";
import AdCard from "../../molecules/AdCard/AdCard";

const LinesSection = ({ lines }) => {
  const navigate = useNavigate();

  const handleProductClick = (lineName) => {
    navigate(`/line/${lineName}/category/all`);
  };

  return (
    <Container className="ad-lines-section-container">
      <h1>Nuestras lineas</h1>
      <p className="ad-lines-section-p">
        Descubre nuestras líneas de productos, cada una diseñada cuidadosamente
        para ofrecer una combinación perfecta de estilo, durabilidad y
        funcionalidad. Desde accesorios elegantes hasta artículos más prácticos,
        nuestras piezas de marroquinería artesanal están pensadas para adaptarse
        a cada ocasión y a las necesidades de nuestros clientes. Explora y
        encuentra el complemento perfecto que te acompañará por muchos años.
      </p>
      <AdSlider>
        {lines.map((line, index) => (
          <AdCard
            key={index}
            type="line"
            src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/line/${line.name.replace(/ /g, "").toLowerCase()}?updated=${Date.now()}`}
            title={line.name}
            onClick={() => handleProductClick(line.name)}
          />
        ))}
      </AdSlider>
    </Container>
  );
};

export default LinesSection;
