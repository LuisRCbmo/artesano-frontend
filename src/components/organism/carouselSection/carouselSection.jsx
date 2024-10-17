import React from 'react'

import "./carouselSection.scss"

import Carousel from '../../molecules/carousel/carousel'
const carouselSection = ({carouselItems}) => {
  return (
    <div  className='ad-carousel-container'>
        <Carousel carouselItems={carouselItems}/>
    </div>
  )
}

export default carouselSection;