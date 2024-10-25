import React, { useState, useEffect } from "react";

import "./linesSection.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

import AdSlider from "../../molecules/AdSlider/AdSlider";
import AdCard from "../../molecules/AdCard/AdCard";

const LinesSection = ({ lines }) => {
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [itemsPadding, setitemsPadding] = useState(60);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 992) {
        setItemsPerPage(1);
        setitemsPadding(60);
      } else if (width >= 992 && width < 1400) {
        setItemsPerPage(2);
        setitemsPadding(60);
      } else if (width > 1400) {
        setItemsPerPage(3);
        setitemsPadding(40);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (lineName) => {
    navigate(`/line/${lineName}/category/all`);
  };

  return (
    <Container className="ad-lines-section-container">
      <h1>Nuestras lineas</h1>
      <p>
        Descubre nuestras líneas de productos, cada una diseñada cuidadosamente
        para ofrecer una combinación perfecta de estilo, durabilidad y
        funcionalidad. Desde accesorios elegantes hasta artículos más prácticos,
        nuestras piezas de marroquinería artesanal están pensadas para adaptarse
        a cada ocasión y a las necesidades de nuestros clientes. Explora y
        encuentra el complemento perfecto que te acompañará por muchos años.
      </p>
      <AdSlider itemsPerPage={itemsPerPage} itemsPadding={itemsPadding}>
        {lines.map((line, index) => (
          <AdCard
            key={index}
            type="line"
            src=""
            title={line.name}
            onClick={() => handleProductClick(line.name)}
          />
        ))}
      </AdSlider>
    </Container>
  );
};

export default LinesSection;
