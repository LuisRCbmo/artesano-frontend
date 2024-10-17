import React from "react";

import "./card.scss";

import Card from "react-bootstrap/Card";

const card = ({ type }) => {
  return (
    <Card className={`ad-card-${type}`}>
      <Card.Img
        variant="top"
        src=""
        alt="imagen de producto"
        className={`ad-card-${type}-img`}
      />
      <Card.Body className={`ad-card-${type}-body`}>
        <Card.Text>Producto</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default card;
