import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

import "./AboutUsPage.scss";

import AdCarousel from "../../molecules/AdCarousel/AdCarousel";
import AdImage from "../../atoms/AdImage/AdImage";

const AbousUsPage = () => {
  return (
    <Container className="my-5">
      <section id="company-introduction">
        <h2>Tradición y Modernidad en Marroquinería</h2>
        <Row>
          <Col md={12}>
            <p className="ad-AboutUsPage-p-justify">
              Somos un taller especializado en la creación de productos de
              marroquinería de alta calidad, combinando la tradición artesanal
              con un toque moderno. Cada pieza es cuidadosamente elaborada con
              cuero genuino, utilizando técnicas que reflejan la maestría
              boliviana, adaptadas a los gustos y necesidades actuales. Nos
              enfocamos en productos duraderos y personalizados, donde la
              estética y la funcionalidad son primordiales. Desde carteras y
              mochilas hasta piezas corporativas, cuidamos cada detalle en el
              diseño y la producción, asegurando que cada artículo cuente una
              historia única.
            </p>
          </Col>
          <Col md={12}>
            <AdCarousel
              carouselItems={[
                {
                  src: "https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3",
                },
                {
                  src: "https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/2v2",
                },
                {
                  src: "https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/3v2",
                  captionTitle: "Imagen de prueba #3",
                  captionText: "Descripcion de prueba #3",
                },
              ]}
            />
          </Col>
        </Row>
      </section>

      <section className="mt-5">
        <h3>Cuidamos los Detalles</h3>
        <Row>
          <Col md={6}>
            <p className="ad-AboutUsPage-p-justify">
              Desde las costuras hasta el sellado y los grabados personalizados,
              en Artesano Design cuidamos cada aspecto de nuestros productos.
              Nuestra dedicación a los detalles asegura que cada pieza sea tanto
              funcional como un reflejo de la elegancia y la precisión de la
              marroquinería artesanal.
            </p>
          </Col>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
          <Col md={6}>
            <p className="ad-AboutUsPage-p-justify">
              Nos enfocamos en productos duraderos y personalizados, donde la
              estética y la funcionalidad son primordiales. Desde carteras y
              mochilas hasta piezas corporativas, cuidamos cada detalle en el
              diseño y la producción, asegurando que cada artículo cuente una
              historia única.
            </p>
          </Col>
        </Row>
      </section>
      <section className="mt-5">
        <h3>Personalización para Empresas</h3>
        <p>
          En Artesano Design ofrecemos personalización avanzada para empresas,
          permitiendo incluir logotipos, diseños específicos y adaptaciones de
          productos para ajustarse a la identidad de cada cliente corporativo.
          Este servicio exclusivo abarca desde detalles en los acabados hasta
          piezas corporativas completas, como libretas, posavasos y mousepads
          personalizados.
        </p>
        <Row>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
          <Col md={6}>
            <AdImage
              src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/carousel/1v3"
              ad_className=""
              alt={`Imagen`}
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AbousUsPage;
