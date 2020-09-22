import React, { Component } from "react";
import "./App.css";
import Login from "./components/login/login";
import Header from "./components/header/header";
import HomeBody from "./components/home-body/home-body";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import VerifyIdentity from "./components/verify-identity/verify-identity";
import ResetPassword from "./components/reset-password/reset-password";
import AdminHeader from "./components/admin-super/header/header"
import AdminMenu from "./components/admin-super/leftSidebar/leftSidebar"
import AdminContent from "./components/admin-super/content/content"
import AdminFooter from "./components/admin-super/footer/footer"
import Pages1 from "./components/Forms/Sections1/Pages1/Pages1";
import MedicSidebar from "./components/admin-medical/leftSidebar/leftSidebar";
import MedicContent from "./components/admin-medical/mainContent/mainContent";

export default class App extends Component {
  redirectToLogin = ()=>{
    return <Redirect to="/login"/>
  }
  render() {
    return (
      <Router>
        <Switch>
          

          {/* Form */}
          <Route path="/form">
              <Pages1/>
          </Route>

          {/* Super Admin */}
          <Route path="/super-admin">
            <AdminHeader name="Super Admin Name"/>
            <AdminMenu/>
            <AdminContent/>
            <AdminFooter/>
          </Route>

          {/* Genaral Admin */}
          <Route path="/genaral-admin">

          </Route>

          {/* Medical Staff */}
          <Route path="/medical-staff">
            <AdminHeader name="Medical Admin Name"/>
            <MedicSidebar/>
            <MedicContent/>
          </Route>

          {/* Genaral Path */}
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/verify" component={VerifyIdentity}></Route>
          <Route path="/login" component={Login}></Route>

          {/* Volunteer Page */}
          <Route path="/volunteer-page">
            {/* <AdminHeader/>      */}
            <Header name="Volunteer Name"/>
            <HomeBody />
          </Route>
          <Route exact={true} path="/" component={this.redirectToLogin}></Route>
          <Route exact={true} path="*" component={this.redirectToLogin}></Route> {/* Unknow path */}
        </Switch>
      </Router>
    );
  }
}
