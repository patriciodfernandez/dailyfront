import React from "react";
 import {  Nav, NavDropdown } from "react-bootstrap";
 import styles from "./style.module.css";

const index = () => {
  return (
    <div>
      <Nav fill variant="tabs" className="hc-container">
        <Nav.Item>
          <Nav.Link href="/categorias/actualidad">Actualidad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/categorias/espectaculos">Espectáculos</Nav.Link>
        </Nav.Item>
        <Nav.Item href="/categorias/clasificados">
          <NavDropdown title="Clasificados" id="collasible-nav-dropdown">
            <NavDropdown.Item
              className="hc-dropdown"
              href="/categorias/clasificados/inmuebles"
            >
              Inmuebles
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="/categorias/clasificados/vehiculos">
              Vehículos
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Tecnología</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Deportes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Política</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Economía</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Salud </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Fotografía </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default index;
