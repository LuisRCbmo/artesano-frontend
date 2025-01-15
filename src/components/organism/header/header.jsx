import React from 'react';
import AdImage from '../../atoms/AdImage/AdImage';
import Navbar from '../../molecules/AdNavbar/AdNavbar';

const Header = ({ src, navItems }) => {

  return (
    <>
      <AdImage src={src} ad_className="ad-img-logo-1" />
      <Navbar navItems={navItems} />
    </>
  );
}

export default Header;
