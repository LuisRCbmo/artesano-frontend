import React, { useState } from "react";

import "./AdCard.scss";

import Card from "react-bootstrap/Card";

const AdCard = ({ type, src, title, onClick }) => {
  const [primarySrc, setPrimarySrc] = useState(src);

  const handleError = () => {
    setPrimarySrc(
      "https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/altv2"
    );
  };

  return (
    <Card className={`ad-card-${type}`}>
      <Card.Img
        src={primarySrc}
        onError={handleError}
        alt="imagen de producto"
        className={`ad-card-${type}-img`}
      />
      <Card.Body>
        <Card.Text onClick={onClick}>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AdCard;
