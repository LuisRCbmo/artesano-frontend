import React from "react";

import "./product.scss";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../organism/footer/footer";
import AdImage from "../../atoms/AdImage/AdImage";
import AdButton from "../../atoms/AdButton/AdButton";

const Product = ({ products_info, contact_info }) => {
  const { productName } = useParams();
  const { cellphone } = contact_info;

  const product = products_info.find((p) => p.name === productName);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleWhatsAppClick = () => {
    const message = `Hola!! estoy interesado en el producto "${product.name}"`;
    const whatsappUrl = `https://wa.me/${cellphone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Container className="ad-product-container">
        <Row>
          <Col xs={12} lg={6}>
            <AdImage
              src={`/img/products/${product.image}`}
              ad_className="ad-img-product"
            />
          </Col>
          <Col xs={12} lg={6}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Variantes: </p>
            <p>Categoría: {product.category}</p>
            <p>
              Linea:{" "}
              {Array.isArray(product.line)
                ? product.line.join(", ")
                : product.line}
            </p>
            <AdButton
              content={"Preguntar via whastapp"}
              onClick={() => handleWhatsAppClick()}
            />
          </Col>
        </Row>
      </Container>
      <Footer footer_Info={contact_info} />
    </>
  );
};

export default Product;
