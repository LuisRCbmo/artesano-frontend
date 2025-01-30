import React from 'react';
import AdImage from '../../atoms/AdImage/AdImage';
import Navbar from '../../molecules/AdNavbar/AdNavbar';

const Header = ({ src, navItems }) => {

  return (
    <>
      <Navbar navItems={navItems} />
    </>
  );
}

export default Header;
