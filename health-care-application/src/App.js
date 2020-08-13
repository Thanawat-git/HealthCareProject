import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/login";
import Header from "./components/header/header";
import HomeBody from "./components/home-body/home-body";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/">
            <Header />
            <HomeBody />
          </Route>
        </Switch>
      </Router>
    );
  }
}
