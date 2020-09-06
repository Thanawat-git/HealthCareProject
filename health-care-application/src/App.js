import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/login";
import Header from "./components/header/header";
import HomeBody from "./components/home-body/home-body";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import VerifyIdentity from "./components/verify-identity/verify-identity";
import ResetPassword from "./components/reset-password/reset-password";
import AdminHeader from "./components/admin-header/admin-header"
import AdminMenu from "./components/admin-menu/admin-menu"
import AdminContent from "./components/admin-content/admin-content"
import AdminFooter from "./components/admin-footer/admin-footer"
import Pages1 from "./components/Forms/Sections1/Pages1/Pages1";
import MedicSidebar from "./components/MedicalStaff/SidebarMenu/SidebarMenu"

export default class App extends Component {
  redirectToLogin = ()=>{
    return <Redirect to="/login"/>
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* Medical Staff */}
          <Route path="/medicalstaff">
            <AdminHeader/>
            <MedicSidebar/>
          </Route>
          {/* Medical Staff */}

          {/* Form */}
          <Route path="/form">
              <Pages1/>
          </Route>
          {/* Form */}

          {/* Super Admin */}
          <Route path="/adminhomepage">
            <AdminHeader/>
            <AdminMenu/>
            <AdminContent/>
            <AdminFooter/>
          </Route>
          {/* Super Admin */}

          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/verify" component={VerifyIdentity}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/home">
            {/* <AdminHeader/>      */}
            <Header />
            <HomeBody />
          </Route>
          <Route exact={true} path="/" component={this.redirectToLogin}></Route>
          <Route exact={true} path="*" component={this.redirectToLogin}></Route> {/* Unknow path */}
        </Switch>
      </Router>
    );
  }
}
