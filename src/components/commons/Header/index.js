import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

import { Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { logout } from "../../../store/state/usuarios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../store/state/usuarios";

import axios from "axios";

const Index = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.usuarios);
 
  const logOut = (e) => {
    e.preventDefault();
    localStorage.clear(); 
    dispatch(logout());
     const token = localStorage.getItem("token")
       ? localStorage.getItem("token")
       : undefined;
     if (token) {
       axios.defaults.headers.authorization = `${token}`;
       axios.post("http://localhost:4000/api/user/me").then((data) => {
         dispatch(setUser(data.data));
       });
     }
  
  };

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
          <Navbar.Collapse>
            {user.id ? (
              <div>
                <div className="text-white">{`¡Hola, ${user.nombre } ${user.apellido}!`}</div>
                <NavDropdown>
                  <Link>
                    Mi perfil
                  </Link>
                  <NavDropdown.Divider />
                  <Link onClick={logOut}>
                    Cerrar sesión
                  </Link>
                </NavDropdown>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Button className="mr-1">Ingresar</Button>
                </Link>
                <Link to="/register">
                  <Button variant="warning">Registrarse</Button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Index;
