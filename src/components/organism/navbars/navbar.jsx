import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navbar = () => {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark" className="bg-body-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Ellas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Carteras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bandoleras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mochilas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mandiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ellos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Maletines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Morrales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cinturones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Billeteras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mandiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Corporativa" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Maletines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Porta documentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Ecotote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
