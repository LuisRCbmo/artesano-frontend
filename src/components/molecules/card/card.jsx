import React from "react";

import "./card.scss";

import Card from "react-bootstrap/Card";

const card = ({ type, src, title}) => {
  return (
    <Card className={`ad-card-${type}`}>
      <Card.Img
        variant="top"
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

export default card;
