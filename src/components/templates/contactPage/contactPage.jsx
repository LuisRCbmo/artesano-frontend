import React from "react";
import { Facebook, Instagram, Tiktok, Whatsapp, Telephone, Envelope, GeoAlt } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contactPage.scss";

const ContactPage = ({ contact_info  }) => {
  const { email, phone, cellphone, address, facebookLink, instagramLink, tiktokLink } = contact_info;
  const icon_size = 24;

  return (
    <div className="contact-page-container">
      <Container>
        <h1>Contáctanos</h1>
        <Row className="contact-info-section">
          <Col xs={12} md={6}>
            <h2>Información de contacto</h2>
            <p><Whatsapp size={icon_size} /> <a href={`https://wa.me/${cellphone}`} target="_blank" rel="noreferrer">Enviar mensaje al {cellphone}</a></p>
            <p><Telephone size={icon_size} /> Llamar al: <a href={`tel:${phone}`}>{phone}</a></p>
            <p><Envelope size={icon_size} /> Correo: <a href={`mailto:${email}`}>{email}</a></p>
            <p><GeoAlt size={icon_size} /> Dirección: {address}</p>
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
    </div>
  );
};

export default ContactPage;
