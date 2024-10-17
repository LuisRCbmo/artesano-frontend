import React from 'react'
import Image from 'react-bootstrap/Image';

import './images.scss';

const images = ({src}) => {
  return (
    <div><Image src={src} alt="Descripción de la imagen" className='ad-img-logo-1' rounded /></div>
  )
}

export default images