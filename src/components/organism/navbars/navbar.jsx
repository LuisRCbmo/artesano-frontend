import React from "react";

import './navbar.scss';

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const navbar = () => {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark" className="bg-body-dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ad-navbar-center-content">
          <Nav className="">
            <Nav.Link href="#home" className="ad-navbar-item-light">Inicio</Nav.Link>
            <NavDropdown title="Ellas" id="basic-nav-dropdown" className="ad-navbar-item-light">
            <NavDropdown.Item href="#action/3.1">Todos los productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Carteras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bandoleras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mochilas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mandiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ellos" id="basic-nav-dropdown" className="ad-navbar-item-light">
            <NavDropdown.Item href="#action/3.1">Todos los productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Maletines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Morrales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cinturones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Billeteras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mandiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Corporativa" id="basic-nav-dropdown" className="ad-navbar-item-light">
            <NavDropdown.Item href="#action/3.1">Todos los productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Pads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Maletines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Porta documentos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Misceláneos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ecotote" id="basic-nav-dropdown" className="ad-navbar-item-light">
              <NavDropdown.Item href="#action/3.1">Todos los productos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
