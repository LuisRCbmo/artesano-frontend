import React, { useState } from "react";

import "./AdCard.scss";

import AdButton from "../../atoms/AdButton/AdButton";
import Card from "react-bootstrap/Card";

const AdCard = ({ type, src, title, onClick }) => {
  const [primarySrc, setPrimarySrc] = useState(src);

  const handleError = () => {
    setPrimarySrc("/img/placeholder.png");
  };
console.log(onClick)
  return (
    <Card className={`ad-card-${type}`}>
        <div className="add-card-img-container" onClick={onClick}>
          <Card.Img
            src={primarySrc}
            onError={handleError}
            alt="imagen de producto"
            className="ad-card-img"
          />
          <div className="ad-card-img-button">Ver Catalogo</div>
        </div>
      <Card.Body>{title}</Card.Body>
    </Card>
  );
};

export default AdCard;
