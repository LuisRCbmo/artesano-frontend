import React from "react";
import {
  Facebook,
  Instagram,
  Tiktok,
  Whatsapp,
  Envelope,
  GeoAlt,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactPage.scss";

const ContactPage = ({ contact_info }) => {
  const { email, cellphone, address, facebookLink, instagramLink, tiktokLink } =
    contact_info;
  const icon_size = 24;

  return (
      <Container className="contact-page-container">
        <h1>Contáctanos</h1>
        <iframe
          className="contact-page-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.6917621759612!2d-63.16805455484356!3d-17.709588887671952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7b1919c42e9%3A0xcbb85e96c457da35!2sArtesano%20Design!5e0!3m2!1ses!2sbo!4v1730155239552!5m2!1ses!2sbo"

          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <Row className="contact-info-section">
          <Col xs={12} md={6}>
            <h2>Información de contacto</h2>
            <p>
              <Whatsapp size={icon_size} />{" "}
              <a
                href={`https://wa.me/${cellphone}`}
                target="_blank"
                rel="noreferrer"
              >
                Enviar mensaje al {cellphone}
              </a>
            </p>
            <p>
              <Envelope size={icon_size} /> Correo:{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <GeoAlt size={icon_size} /> Dirección: {address}
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h2>Nuestras redes sociales</h2>
            <p>
              <a href={facebookLink} target="_blank" rel="noreferrer">
                <Facebook size={icon_size} /> Facebook
              </a>
            </p>
            <p>
              <a href={instagramLink} target="_blank" rel="noreferrer">
                <Instagram size={icon_size} /> Instagram
              </a>
            </p>
            <p>
              <a href={tiktokLink} target="_blank" rel="noreferrer">
                <Tiktok size={icon_size} /> TikTok
              </a>
            </p>
          </Col>
        </Row>
      </Container>
  );
};

export default ContactPage;
