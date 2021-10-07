import React from "react";
import styles from "./style.module.css";

import { Navbar, Nav, Container } from "react-bootstrap";
const index = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.hContainer}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">React-BootGstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/login">Ingresar</Nav.Link>
              <Nav.Link href="/register">Regístrate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default index;
