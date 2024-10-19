import React from 'react'

import Image from '../../atoms/image/image';
import Navbar from '../../molecules/AdNavbar/AdNavbar';

const header = ({src, navItems}) => {
  return (
    <div>
      <Image src={src} ad_className="ad-img-logo-1"/>
      <Navbar navItems={navItems}/>
    </div>
  )
}

export default header