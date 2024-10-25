import React, { useState } from "react";

import "./AdNavbar.scss";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const AdNavbar = ({ navItems }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleProductClick = (lineName, categoryName) => {
    navigate(`/line/${lineName}/category/${categoryName}`);
    setExpanded(false);
  };

  const handleNavClick = (route) => {
    navigate(route);
    setExpanded(false); // Cierra el navbar después de navegar
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-dark"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="ad-navbar-movile-hide">
          <img
            src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/logo-white"
            alt="Logo"
            style={{ width: "200px", height: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="ad-navbar-center-content"
        >
          <Nav className="">
            {navItems.map((navGroup, index) => {
              if (navGroup.items) {
                return (
                  <NavDropdown
                    title={navGroup.title}
                    id={`nav-dropdown-${index}`}
                    className="ad-navbar-item-light
                    ad-navbar-text-start"
                    key={index}
                  >
                    {navGroup.items.map((item, itemIndex) => (
                      <NavDropdown.Item
                        key={itemIndex}
                        onClick={() =>
                          handleProductClick(
                            navGroup.title,
                            item.name === "Ver catalogo" ? "all" : item.name
                          )
                        }
                      >
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              }
              return (
                <Nav.Link
                  className="ad-navbar-item-light
                  ad-navbar-text-start"
                  key={index}
                  onClick={() => handleNavClick(navGroup.route)}
                >
                  {navGroup.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdNavbar;
