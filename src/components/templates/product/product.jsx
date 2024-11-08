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

  return (
    <>
      <Container className="ad-product-container">
        <Row>
          <Col xs={12} lg={6}>
            <AdImage
              src={`https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/products/${product.image.toLowerCase()}?updated=${Date.now()}`}
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
              content={"Conocenos"}
              onClick={`https://wa.me/${cellphone}?text=${encodeURIComponent(`Hola!! estoy interesado en el producto "${product.name}"`)}`}
            />
          </Col>
        </Row>
      </Container>
      <Footer footer_Info={contact_info} />
    </>
  );
};

export default Product;
