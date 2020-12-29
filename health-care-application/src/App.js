import React, { Component } from "react";
import "./App.css";
import { login, loginAdmin, loginAdminMobile } from "./components/login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import VerifyIdentity from "./components/verify-identity/verify-identity";
import ResetPassword from "./components/reset-password/reset-password";

// super Admin
import SuperAdminPage from "./components/admin-super";
import GenaralAdminPage from "./components/admin-genaral";

//volunteer
import MainVolunteer from "./components/volunteer";

// ELD Page
import EditInfo from "./components/elderly/EditInfo";

import mainMenu from "./components/Forms/MainMenu";

import {
  sec1_1,
  sec1_2,
  sec1_3,
  sec1_4,
  sec1_5,
  sec1_6,
} from "./components/Forms/Sections1";
import { sec2 } from "./components/Forms/Sections2";
import { sec3 } from "./components/Forms/Sections3";
import { sec4 } from "./components/Forms/Sections4";
import { sec5 } from "./components/Forms/Sections5";
import { sec6, tai } from "./components/Forms/Sections6";

import { mmsi, sec7 } from "./components/Forms/Sections7";
import { sec8_1, sec8_9q } from "./components/Forms/Sections8";
import { sec9, sec9_2 } from "./components/Forms/Sections9";
import { sec10 } from "./components/Forms/Sections10";

import { useSelector } from "react-redux";

// 1200101000000
export default function App() {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  const redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  return (
    <Router>
      {/* <Switch> */}
        {
          isLoggedIn ? 
          <Switch>
            <Route path="/volunteerpage" component={MainVolunteer} />
            <Route path="/editeld" component={EditInfo} />
            
            <Route path="/mainmenu" component={mainMenu} />
            <Route path="/sec1-page1" component={sec1_1} />
            <Route path="/sec1-page2" component={sec1_2} />
            <Route path="/sec1-page3" component={sec1_3} />
            <Route path="/sec1-page4" component={sec1_4} />
            <Route path="/sec1-page5" component={sec1_5} />
            <Route path="/sec1-page6" component={sec1_6} />
            <Route path="/sec2" component={sec2} />
            <Route path="/sec3" component={sec3} />
            <Route path="/sec4" component={sec4} />
            <Route path="/sec5" component={sec5} />
            <Route path="/sec6" component={sec6} />
            <Route path="/tai" component={tai} />
            <Route path="/sec7" component={sec7} />
            <Route path="/mmsi" component={mmsi} />
            <Route path="/sec8" component={sec8_1} />
            <Route path="/sec8-9q" component={sec8_9q} />
            <Route path="/sec9" component={sec9} />
            <Route path="/sec9-2" component={sec9_2} />
            <Route path="/sec10" component={sec10} />
            {user.Role == "ADMIN" && <Route path="/superadminpage" component={SuperAdminPage} />}
            {user.Role == "ADMIN" &&<Route path="/genaraladminpage" component={GenaralAdminPage} />}
            
          </Switch>
          :
          <Switch>
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/verify" component={VerifyIdentity} />
            <Route path="/login/admin" component={loginAdmin}/>
            <Route path="/login/mobile" component={loginAdminMobile}/>
            <Route path="/login" component={login}/>

            <Route exact={true} path="/" component={redirectToLogin}/>
            <Route exact={true} path="*" component={redirectToLogin}/>
          </Switch>
        }
        {/* <Route path="/volunteerpage" component={MainVolunteer} />
        <Route path="/editeld" component={EditInfo} />
        
        <Route path="/mainmenu" component={mainMenu} />
        <Route path="/sec1-page1" component={sec1_1} />
        <Route path="/sec1-page2" component={sec1_2} />
        <Route path="/sec1-page3" component={sec1_3} />
        <Route path="/sec1-page4" component={sec1_4} />
        <Route path="/sec1-page5" component={sec1_5} />
        <Route path="/sec1-page6" component={sec1_6} />
        <Route path="/sec2" component={sec2} />
        <Route path="/sec3" component={sec3} />
        <Route path="/sec4" component={sec4} />
        <Route path="/sec5" component={sec5} />
        <Route path="/sec6" component={sec6} />
        <Route path="/tai" component={tai} />
        <Route path="/sec7" component={sec7} />
        <Route path="/mmsi" component={mmsi} />
        <Route path="/sec8" component={sec8_1} />
        <Route path="/sec8-9q" component={sec8_9q} />
        <Route path="/sec9" component={sec9} />
        <Route path="/sec9-2" component={sec9_2} />
        <Route path="/sec10" component={sec10} />

        <Route path="/superadminpage" component={SuperAdminPage} />
        <Route path="/genaraladminpage" component={GenaralAdminPage} /> */}

        {/* <Route path="/reset-password" component={ResetPassword} />
        <Route path="/verify" component={VerifyIdentity} /> */}

        {/* <Route path="/login/admin" component={loginAdmin}/>
        <Route path="/login/mobile" component={loginAdminMobile}/>
        <Route path="/login" component={login}/>

        <Route exact={true} path="/" component={redirectToLogin}/>
        <Route exact={true} path="*" component={redirectToLogin}/> */}
      {/* </Switch> */}
    </Router>
  );
}
