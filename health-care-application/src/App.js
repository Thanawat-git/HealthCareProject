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
import MedicSidebar from "./components/admin-medical/leftSidebar/leftSidebar";
import MedicContent from "./components/admin-medical/mainContent/mainContent";
import FollowUp from "./components/admin-medical/followUp/followUp";
import Sec1Page1 from "./components/Forms/Sections1/Pages1/Pages1";
import Sec1Page2 from "./components/Forms/Sections1/Pages2/Pages2";
import Sec1Page3 from "./components/Forms/Sections1/Pages3/Pages3";
import Sec1Page4 from "./components/Forms/Sections1/Page4/Page4";
import Sec1Page5 from "./components/Forms/Sections1/Page5/Page5";
import Sec1Page6 from "./components/Forms/Sections1/Page6/Page6";
import Sec1Page7 from "./components/Forms/Sections1/Page7/Page7";

import {sec4_1, sec4_2, sec4_3} from "./components/Forms/Sections4/index"

import {Page1, Page2} from "./components/Forms/Sections5/index";
import {sec6_1} from "./components/Forms/Sections6/index";
import {sec7_1, sec7_2} from "./components/Forms/Sections7/index";
import {sec8_1, sec8_9q} from "./components/Forms/Sections8/index";
import {sec9_1} from "./components/Forms/Sections9/index";

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
              <Sec1Page1/>
          </Route>
          {/* Dev Path */}
          <Route path="/sec1-page2" component={Sec1Page2} />
          <Route path="/sec1-page3" component={Sec1Page3} />
          <Route path="/sec1-page4" component={Sec1Page4} />
          <Route path="/sec1-page5" component={Sec1Page5} />
          <Route path="/sec1-page6" component={Sec1Page6} />
          <Route path="/sec1-page7" component={Sec1Page7} />

          <Route path="/sec4-page1" component={sec4_1} />
          <Route path="/sec4-page2" component={sec4_2} />
          <Route path="/sec4-page3" component={sec4_3} />


          <Route path="/sec5-page1" component={Page1} />
          <Route path="/sec5-page2" component={Page2} />

          <Route path="/sec7-page1" component={sec7_1} />
          <Route path="/sec7-page2" component={sec7_2} />

          <Route path="/sec8-page1" component={sec8_1} />
          <Route path="/sec8-9q" component={sec8_9q} />

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
            {/* <Route path="/medical-staff/maim-content" component={MedicContent} /> */}
            <MedicContent/>
            {/* <Route path="/medical-staff/follow-up" component={FollowUp} /> */}
            <AdminFooter/>
          </Route>
          
          {/* Follow Up */}
          <Route path="/follow-up">
            <AdminHeader name="Medical Admin Name"/>
            <MedicSidebar/>
            <FollowUp/>
            <AdminFooter/>
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
