import React from 'react'
import Image from 'react-bootstrap/Image';

import './image.scss';

const image = ({src, ad_className}) => {
  return (
    <div>
      <Image src={src} alt="Imagen" className={ad_className} />
    </div>
  )
}

export default image