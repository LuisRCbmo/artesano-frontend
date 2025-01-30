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
      <h1>Nuestras líneas</h1>
      <p className="ad-lines-section-p">
        Explora nuestras líneas de productos en marroquinería artesanal,
        diseñadas para ofrecer estilo, durabilidad y funcionalidad, adaptándose
        a cada ocasión y necesidad.
      </p>

      {lines.length > 0 ? (
        <AdSlider>
          {lines.map((line, index) => (
            <AdCard
              key={index}
              type="line"
              src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/line/${line.name
                .replace(/ /g, "")
                .toLowerCase()}?updated=${Date.now()}`}
              title={line.name}
              onClick={() => handleProductClick(line.name)}
            />
          ))}
        </AdSlider>
      ) : (
        <p className="ad-lines-section-empty">
          Actualmente nuestras líneas no están disponibles.
        </p>
      )}
    </Container>
  );
};

export default LinesSection;
