import React from 'react'
import Image from 'react-bootstrap/Image';

import './image.scss';

const image = ({src, ad_className}) => {
  return (
    <div>
      <Image src={src} alt="Descripción de la imagen" className={ad_className} />
    </div>
  )
}

export default image