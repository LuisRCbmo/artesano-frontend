import React from 'react'

import "./carouselSection.scss"

import Carousel from '../../molecules/carousel/carousel'
import Container from 'react-bootstrap/Container';

const carouselSection = ({carouselItems}) => {
  return (
    <Container className="ad-carousel-container-center-content">
        <Carousel carouselItems={carouselItems}/>
    </Container>
  )
}

export default carouselSection;