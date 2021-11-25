import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../store/state/usuarios";
import swal from "sweetalert";
import styles from "./style.module.css";

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  console.log("newUser", newUser);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ENTRE INICIOP");

    if (
      nombreValidate == "mostrar" &&
      apellidoValidate == "mostrar" &&
      emailValidate == "mostrar" &&
      passwordValidate == "mostrar" &&
      telefonoValidate == "mostrar" &&
      localidadValidate == "mostrar" &&
      direccionValidate == "mostrar" &&
      codigoPostalValidate == "mostrar"
    ) {
      console.log("ENTRE AL IFFFF");
      dispatch(register(newUser)).then((data) => {
        if (data.meta.requestStatus === "rejected") {
          return swal("El usuario ya existe");
        } else {
          swal("¡Usuario registrado exitosamente!");

          history.push("/login");
        }
      });
    }
  };

  // validaciones

  const [emailValidate, setEmailValidate] = useState("inicial");
  const [passwordValidate, setPassworsdValidate] = useState("inicial");
  const [nombreValidate, setNombreValidate] = useState("inicial");
  const [apellidoValidate, setApellidoValidate] = useState("inicial");
  const [localidadValidate, setLocalidadValidate] = useState("inicial");
  const [direccionValidate, setDireccionValidate] = useState("inicial");
  const [codigoPostalValidate, setCodigoPostalValidate] = useState("inicial");
  const [telefonoValidate, setTelefonoValidate] = useState("inicial");
  console.log("nombreValidate", nombreValidate);
  console.log("codigoPostalValidate", codigoPostalValidate);
  const requeridoEmail = (e) => {
    let expresion = /\w+@\w+\.[a-z]/;

    if (
      newUser.email != null &&
      newUser.email != "" &&
      newUser.email.trim() != null &&
      expresion.test(newUser.email)
    ) {
      setEmailValidate("mostrar");
    } else {
      // el input esta vacio
      setEmailValidate("nomostrar");
    }
  };

  const requeridoPassword = (e) => {
    let expresion = /[a-zA-Z0-9_]/;

    if (
      newUser.password != null &&
      newUser.password != "" &&
      newUser.password.trim() != null &&
      expresion.test(newUser.password)
    ) {
      setPassworsdValidate("mostrar");
    } else {
      // el input esta vacio
      setPassworsdValidate("nomostrar");
    }
  };

  const requeridoNombre = (e) => {
    let expresion = /[A-Za-z]/;

    if (
      newUser.nombre != null &&
      newUser.nombre != "" &&
      newUser.nombre.trim() != null &&
      expresion.test(newUser.nombre)
    ) {
      setNombreValidate("mostrar");
    } else {
      // el input esta vacio
      setNombreValidate("nomostrar");
    }
  };

  const requeridoApellido = (e) => {
    let expresion = /[A-Za-z]/;
    if (
      newUser.apellido != null &&
      newUser.apellido != "" &&
      newUser.apellido.trim() != null &&
      expresion.test(newUser.apellido)
    ) {
      setApellidoValidate("mostrar");
    } else {
      // el input esta vacio
      setApellidoValidate("nomostrar");
    }
  };

  const requeridoLocalidad = (e) => {
    let expresion = /[A-Za-z]/;
    if (
      newUser.localidad != null &&
      newUser.localidad != "" &&
      newUser.localidad.trim() != null &&
      expresion.test(newUser.localidad)
    ) {
      setLocalidadValidate("mostrar");
    } else {
      // el input esta vacio
      setLocalidadValidate("nomostrar");
    }
  };

  const requeridoDireccion = (e) => {
    let expresion = /[a-zA-Z]/;
    if (
      newUser.direccion != null &&
      newUser.direccion != "" &&
      newUser.direccion.trim() != null &&
      expresion.test(newUser.direccion)
    ) {
      setDireccionValidate("mostrar");
    } else {
      // el input esta vacio
      setDireccionValidate("nomostrar");
    }
  };

  const requeridoCodigoPostal = (e) => {
    let expresion = /^(0|[1-9]\d*)$/;

    if (
      newUser.codigoPostal != null &&
      newUser.codigoPostal != "" &&
      newUser.codigoPostal.trim() != null &&
      expresion.test(newUser.codigoPostal)
    ) {
      setCodigoPostalValidate("mostrar");
    } else {
      // el input esta vacio
      setCodigoPostalValidate("nomostrar");
    }
  };
  const requeridoTelefono = (e) => {
    let expresion = /^(0|[1-9]\d*)$/;

    if (
      newUser.telefono != null &&
      newUser.telefono != "" &&
      newUser.telefono.trim() != null &&
      expresion.test(newUser.telefono)
    ) {
      setTelefonoValidate("mostrar");
    } else {
      // el input esta vacio
      setTelefonoValidate("nomostrar");
    }
  };

  return (
    <>
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Register</h1>

            <div className="form-group">
              <label> Nombre </label>
              <input
                id="nombre"
                className={`${styles.containerItem} form-control ${
                  nombreValidate == "inicial"
                    ? ""
                    : nombreValidate == "mostrar"
                    ? "is-valid"
                    : "is-invalid"
                }             
                    `}
                name="nombre"
                onChange={handleChange}
                onBlur={requeridoNombre}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingresá un nombre válido </div>
            </div>

            <div className="form-group">
              <label htmlFor="lastname_field"> Apellido </label>
              <input
                id="lastname_field"
                className={`${styles.containerItem} form-control ${
                  apellidoValidate == "inicial"
                    ? ""
                    : apellidoValidate == "mostrar"
                    ? "is-valid"
                    : "is-invalid"
                }             
                    `}
                name="apellido"
                onChange={handleChange}
                onBlur={requeridoApellido}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Entre un apellido válido </div>
            </div>

            <div className="form-group">
              <label> Email </label>
              <input
                id="email_field"
                className={`${styles.containerItem} form-control ${
                  emailValidate == "inicial"
                    ? ""
                    : emailValidate == "mostrar"
                    ? "is-valid"
                    : "is-invalid"
                }             
                    `}
                name="email"
                onChange={handleChange}
                onBlur={requeridoEmail}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingresá un email válido </div>
            </div>

            <div className="form-group">
              <label> Contraseña </label>
              <input
                id="email_field"
                className={`${styles.containerItem} form-control ${
                  passwordValidate == "inicial"
                    ? ""
                    : passwordValidate == "mostrar"
                    ? "is-valid"
                    : "is-invalid"
                }             
                    `}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={requeridoPassword}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Ingresá una contraseña válida{" "}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="localidad_field">Localidad</label>
              <input
                id="localidad_field"
                className={` ${styles.containerItem} form-control ${
                  localidadValidate == "inicial"
                    ? ""
                    : localidadValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="localidad"
                onChange={handleChange}
                onBlur={requeridoLocalidad}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Ingrese una localidad válida
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="direccion_field">Dirección</label>
              <input
                id="direccion_field"
                className={`${styles.containerItem} form-control ${
                  direccionValidate == "inicial"
                    ? ""
                    : direccionValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="direccion"
                onChange={handleChange}
                onBlur={requeridoDireccion}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Ingrese una dirección válida
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="codigoPostal_field">Código postal</label>
              <input
                id="codigoPostal_field"
                className={`${styles.containerItem} form-control ${
                  codigoPostalValidate == "inicial"
                    ? ""
                    : codigoPostalValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="codigoPostal"
                onChange={handleChange}
                onBlur={requeridoCodigoPostal}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Ingrese un código postal válido
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="telefono_field">Teléfono</label>
              <input
                id="telefono_field"
                className={`${styles.containerItem} form-control ${
                  telefonoValidate == "inicial"
                    ? ""
                    : telefonoValidate == "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                    `}
                name="telefono"
                onChange={handleChange}
                onBlur={requeridoTelefono}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese un teléfono válido</div>
            </div>
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
