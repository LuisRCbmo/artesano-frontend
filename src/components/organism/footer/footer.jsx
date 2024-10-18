import React from "react";

import "./footer.scss";

import {
  Facebook,
  Instagram,
  Tiktok,
  Whatsapp,
  Telephone,
  Envelope,
  GeoAlt,
} from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const footer = () => {
  const icon_size = 20;

  return (
    <div className="ad-footer-bg">
      <Container fluid>
        <Row>
          <Col className="ad-footer-col-1" xs={12} lg={3}>
            <h3>Logo</h3>
          </Col>
          <Col  className="ad-footer-col-1" xs={12} lg={6}>
            <h3>Informacion y contacto</h3>
            <Row>
              <Col className="ad-footer-col-2" xs={12} xl={4}>
                <Whatsapp size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Whatsapp: +591 1234567</span>
              </Col>
              <Col className="ad-footer-col-2" xs={12} xl={4}>
                <Telephone size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Telefono: +4 4123456</span>
              </Col>
              <Col className="ad-footer-col-2"  xs={12} xl={4}>
                <Envelope size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Correo: micorreo@gmail.com</span>
              </Col>
              <Col className="ad-footer-col-2" xs={12}>
                <GeoAlt size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Direccion : Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor </span>
              </Col>
            </Row>
          </Col>
          <Col  className="ad-footer-col-1" xs={12} lg={3}>
            <h3>Redes sociales</h3>
            <Container fluid>
              <Row>
                <Col className="ad-footer-col-2">
                  <a
                    href="https://www.facebook.com/artesano.design.bolivia/?locale=es_LA"
                    target="_blank"
                    className="ad-footer-a" rel="noreferrer"
                  >
                  <Facebook size={icon_size} color="currentColor" />
                  </a>
                </Col>
                <Col className="ad-footer-col-2">
                  <a
                    href="https://www.instagram.com/artesano.design.bolivia/?hl=es"
                    target="_blank"
                    className="ad-footer-a" rel="noreferrer"
                  >
                    <Instagram size={icon_size} color="currentColor" />
                  </a>
                </Col>
                <Col className="ad-footer-col-2">
                  <a
                    href="https://www.tiktok.com/@artesano.design?is_from_webapp=1&sender_device"
                    target="_blank"
                    className="ad-footer-a" rel="noreferrer"
                  >
                    <Tiktok size={icon_size} color="currentColor" />
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default footer;
