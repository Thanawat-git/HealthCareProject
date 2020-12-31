import React, { useEffect } from "react";
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

import mainMenu from "./components/Forms";

import {
  sec1_1,
  sec1_2,
  sec1_3,
  sec1_4,
  sec1_5,
  sec1_6,
} from "./components/Forms/Sections1";

import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./actions/auth.action";

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useSelector((state) => state.authReducer)
  return (
    <Route {...rest} render={({ location }) => {
      console.log('location pathname ',location.pathname)
      return isLoggedIn ?
        children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location } 
          }} />
    }} />
  )
}

function GAminRoute({ children, ...rest }) {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer)
  return (
    <Route {...rest} render={({ location }) => {
      console.log('user.Role ',user.Role)
      return isLoggedIn && user.Role =="ADMIN" ?
        children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location } 
          }} />
    }} />
  )
}

export default function App() {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  useEffect(() => {
    console.log('isLoggedIn ',isLoggedIn)
  }, [])
  const redirectToLogin = () => {
    return <Redirect to="/login" />;
  };
  return (
    // <React.Fragment>
    <Router>
      <Switch>
        <GAminRoute path='/genaraladminpage' component={GenaralAdminPage} />

        <PrivateRoute path='/volunteerpage' component={MainVolunteer} />
        <PrivateRoute path="/editeld" component={EditInfo} />
        <PrivateRoute path="/mainmenu" component={mainMenu} />
        <PrivateRoute path="/sec1-page1" component={sec1_1} />
        <PrivateRoute path="/sec1-page2" component={sec1_2} />
        <PrivateRoute path="/sec1-page3" component={sec1_3} />
        <PrivateRoute path="/sec1-page4" component={sec1_4} />
        <PrivateRoute path="/sec1-page5" component={sec1_5} />
        <PrivateRoute path="/sec1-page6" component={sec1_6} />
        
        <PrivateRoute path="/superadminpage" component={SuperAdminPage} />
        
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/verify" component={VerifyIdentity} />
        <Route path="/login/admin" component={loginAdmin}/>
        <Route path="/login/mobile" component={loginAdminMobile}/>
        <Route path="/login" component={login}/>

        <Route exact={true} path="/" component={redirectToLogin}/>
        <Route exact={true} path="*" component={redirectToLogin}/>
      </Switch>
    </Router>
    // </React.Fragment>
  );
}
