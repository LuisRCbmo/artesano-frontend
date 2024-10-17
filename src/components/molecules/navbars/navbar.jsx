import React from "react";

import "./navbar.scss";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navbar = ({ navItems }) => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                      <NavDropdown.Item href={item.href} key={itemIndex} >
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              }
              return (
                <Nav.Link
                  href={navGroup.href}
                  className="ad-navbar-item-light
                  ad-navbar-text-start"
                  key={index}
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

export default navbar;
