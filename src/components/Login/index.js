import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/state/usuarios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { setUser } from "../../store/state/usuarios";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (email) {
      dispatch(login({ email: email, password: password })).then((data) => {
        if (data.meta.requestStatus === "rejected") {
          setPassword("");
          return swal("Usuario o contraseña incorrectos");
        } else if (data.meta.requestStatus === "fulfilled") {
          localStorage.setItem("token", data.payload.data.token);
          
          history.push("/");
          swal("Logged in!");


          
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined;
    if (token) {
      axios.defaults.headers.authorization = `${token}`;
      axios.post("http://localhost:4000/api/user/me").then((data) => {
        dispatch(setUser(data.data));
      });
    }
  

        }
      });
    } else {
      swal("¡Ingrese datos válidos!");
    }
  };
  const loginAdmin = (e) => {
    e.preventDefault();
    dispatch(login({ email: "guille@pato.com", password: "carlos" })).then(
      (data) => {
        if (data.meta.requestStatus === "rejected") {
          setPassword("");
          return swal("Usuario o contraseña incorrectos");
        }

        if (data.payload) {
          localStorage.setItem("token", data.payload.token);
          swal("Logged in!");
          history.push("/");
        }
      }
    );
  };

  //   Validaciones
  const [emailValidate, setEmailValidate] = useState("inicial");
  const [passwordValidate, setPassworsdValidate] = useState("inicial");

  const requeridoEmail = (e) => {
    let expresion = /\w+@\w+\.[a-z]/;
    //     \w (es texto)
    //     \. (es punto)
    if (email != "" && expresion.test(email)) {
      setEmailValidate("mostrar");
    } else {
      // el input esta vacio
      setEmailValidate("nomostrar");
    }
  };

  const requeridoPassword = (e) => {
    if (password != "") {
      setPassworsdValidate("mostrar");
    } else {
      // el input esta vacio
      setPassworsdValidate("nomostrar");
    }
  };

  return (
    <>
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                id="email_field"
                className={` form-control ${
                  emailValidate == "inicial"
                    ? ""
                    : emailValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={requeridoEmail}
              />
              <div className="invalid-feedback">Ingrese un email válido</div>
              <div className="valid-feedback">Todo bien, continúe</div>
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Contraseña</label>
              <input
                type="password"
                id="password_field"
                className={` form-control ${
                  passwordValidate == "inicial"
                    ? ""
                    : passwordValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={requeridoPassword}
              />
              <div className="invalid-feedback">
                Entre una contraseña válida
              </div>
              <div className="valid-feedback">Todo bien continúe</div>
            </div>

            {/* <Link to="/password/forgot" className="float-right mb-4">
              Olvidó su contraseña?
            </Link> */}

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              onClick={(e) => loginAdmin(e)}
            >
              LOGIN AS ADMIN
            </button>

            <Link to="/register" className="float-right mt-3">
              Nuevo usuario?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
