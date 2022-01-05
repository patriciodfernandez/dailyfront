import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/commons/Footer";
import Header from "./components/commons/Header/Index";
import Home from "./components/Home/";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "./store/state/usuarios";

import { setNoticias } from "./store/state/noticias";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined;
    if (token) {
      axios.defaults.headers.authorization = `${token}`;
      axios.post("http://localhost:4000/api/user/me").then((data) => {
        dispatch(setUser(data.data));
      });
    }
  }, []);
  React.useEffect(() => {
    dispatch(setNoticias());
  }, [dispatch]);
  const noticiasArray = useSelector((state) => state.noticias);

  console.log("noticiasArray", noticiasArray);

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
