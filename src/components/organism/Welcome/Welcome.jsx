import React from 'react'

import "./Welcome.scss"

import AdButton from '../../atoms/AdButton/AdButton'

import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate();

    const handleNavClick = (route) => {
      navigate(route);
    };
  
  return (
    <Container className="ad-welcome">
        <h1>Artesano Design</h1>
        <p className="ad-landingPage-p">
          Creamos productos de cuero que combinan lo mejor de la tradición
          artesanal y el diseño moderno. Cada pieza es elaborada con dedicación
          reflejando nuestro compromiso con la calidad, durabilidad y el cuidado
          de los detalles.
        </p>
        <AdButton
          content={"Conocenos"}
          onClick={() => handleNavClick("/aboutus")}
        />
      </Container>
  )
}

export default Welcome