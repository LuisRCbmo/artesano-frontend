import React from "react";
import "./footer.scss";
import {
  Facebook,
  Instagram,
  Tiktok,
  Whatsapp,
  Envelope,
  GeoAlt,
} from "react-bootstrap-icons";

import AdImage from "../../atoms/AdImage/AdImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const footer = ({footer_Info}) => {
  const icon_size = 20;

  const {
    email,
    cellphone,
    address,
    facebookLink,
    instagramLink,
    tiktokLink,
  } = footer_Info;

  return (
    <div className="ad-footer-bg">
      <Container fluid>
        <Row>
          <Col className="ad-footer-col-1" xs={12} lg={3}>
            <AdImage src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/logo-white" ad_className="ad-img-logo-footer"/>
          </Col>
          <Col className="ad-footer-col-1" xs={12} lg={6}>
            <h2>Información y contacto</h2>
            <Row>
              <Col className="ad-footer-col-2" xs={12} xl={6}>
                <Whatsapp size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Whatsapp: {cellphone}</span>
              </Col>
              <Col className="ad-footer-col-2" xs={12} xl={6}>
                <Envelope size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Correo: {email}</span>
              </Col>
              <Col className="ad-footer-col-2" xs={12}>
                <GeoAlt size={icon_size} color="currentColor" />
                <span className="ad-footer-p">Dirección: {address}</span>
              </Col>
            </Row>
          </Col>
          <Col className="ad-footer-col-1" xs={12} lg={3}>
            <h2>Redes sociales</h2>
            <Container  className="ad-footer-icons-container" fluid>
              <Row className="ad-footer-icons-row">
                <Col className="ad-footer-col-2">
                  <a
                    href={facebookLink}
                    target="_blank"
                    className="ad-footer-a"
                    rel="noreferrer"
                  >
                    <Facebook size={icon_size} color="currentColor" />
                  </a>
                </Col>
                <Col className="ad-footer-col-2">
                  <a
                    href={instagramLink}
                    target="_blank"
                    className="ad-footer-a"
                    rel="noreferrer"
                  >
                    <Instagram size={icon_size} color="currentColor" />
                  </a>
                </Col>
                <Col className="ad-footer-col-2">
                  <a
                    href={tiktokLink}
                    target="_blank"
                    className="ad-footer-a"
                    rel="noreferrer"
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
