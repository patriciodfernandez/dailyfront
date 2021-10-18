import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/commons/Footer";
import Principal from "./components/Principal/";
import "./App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setNoticias } from "./store/state/noticias";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setNoticias());
  }, [dispatch]);
  const noticiasArray = useSelector((state) => state.noticias);

  console.log("noticiasArray", noticiasArray);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Principal></Principal>
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
