import React from 'react';
import AdImage from '../../atoms/AdImage/AdImage';
import Navbar from '../../molecules/AdNavbar/AdNavbar';

const Header = ({ src, navItems }) => {
  const updatedSrc = `${src}?updated=${Date.now()}`;

  return (
    <>
      <AdImage src={updatedSrc} ad_className="ad-img-logo-1" />
      <Navbar navItems={navItems} />
    </>
  );
}

export default Header;
