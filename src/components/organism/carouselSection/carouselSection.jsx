import React from 'react'

import "./carouselSection.scss"

import AdCarousel from '../../molecules/AdCarousel/AdCarousel'
const carouselSection = ({carouselItems}) => {
  return (
    <div  className='ad-carousel-container'>
        <AdCarousel carouselItems={carouselItems}/>
    </div>
  )
}

export default carouselSection;