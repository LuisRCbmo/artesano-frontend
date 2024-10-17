import React from 'react'

import Images from '../../atoms/images/images';
import Navbar from '../../molecules/navbars/navbar';

const header = ({src, navItems}) => {
  return (
    <div>
      <Images src={src}/>
      <Navbar navItems={navItems}/>
    </div>
  )
}

export default header