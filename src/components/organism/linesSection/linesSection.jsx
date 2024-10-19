import React from 'react'

import "./lineSection.scss"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "../../molecules/card/card";


const linesSection = ({lines}) => {
  return (
    <Container>
      <h1>Lineas de productos</h1>
      <Row>
        {lines.map((line, index) => (
          <Col className='add-col-center-contend' key={index} xs={12} xl={6}>
            <Card type="line" src={line.src} title={line.line}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default linesSection