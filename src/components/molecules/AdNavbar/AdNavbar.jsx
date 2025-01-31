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
    setExpanded(false);
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
        <Navbar.Brand>
          <img
            src="https://res.cloudinary.com/dfjkvn1q4/image/upload/f_auto,q_auto/v1/Artesano%20design/logo-white"
            alt="Logo"
            style={{ width: "200px", height: "auto", margin:'16px'}}
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
          <Nav>
            {navItems.map((navGroup, index) => {
              if (navGroup.items) {
                return (
                  <NavDropdown
                    title={navGroup.title}
                    id={`nav-dropdown-${index}`}
                    className="ad-navbar-item-light ad-navbar-text-start"
                    key={index}
                  >
                    {navGroup.items.map((item, itemIndex) => {
                      const isLastItem = itemIndex === navGroup.items.length - 1;
                      return (
                        <NavDropdown.Item
                          key={itemIndex}
                          className={`ad-navbar-item-light ad-navbar-text-start"
                          }`}
                          onClick={() =>
                            handleProductClick(
                              navGroup.title,
                              item.name === "Ver catalogo" ? "all" : item.name
                            )
                          }
                        >
                          {item.name}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                );
              }

              const isLastNavGroup = index === navItems.length - 1;
              return (
                <Nav.Link
                  className={`ad-navbar-item-light ad-navbar-text-start ${
                    isLastNavGroup ? "" : "ad-navbar-border-rigth"
                  }`}
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
