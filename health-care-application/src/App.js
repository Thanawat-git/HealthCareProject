import React, { Component } from "react";
import Login from './components/login/login'
import Header from './components/header/header'
import HomeBody from './components/home-body/home-body'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/"> 
            <HomeBody/>
            <Footer/> 
          </Route>
        </Switch>
      </Router>
    );
  }
}
