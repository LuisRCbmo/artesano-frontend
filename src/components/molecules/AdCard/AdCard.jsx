import React from "react";

import "./AdCard.scss";

import Card from "react-bootstrap/Card";

const AdCard = ({ type, src, title, onClick}) => {
  return (
    <Card className={`ad-card-${type}`} onClick={onClick}>
      <Card.Img
        src={src}
        alt="imagen de producto"
        className={`ad-card-${type}-img`}
      />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AdCard;
