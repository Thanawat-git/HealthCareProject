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

import MainMenu from "./components/Forms";

import {
  Sec1_1,
  Sec1_2,
  Sec1_3,
  Sec1_4,
  Sec1_5,
  Sec1_6,
} from "./components/Forms/Sections1";

import { useDispatch, useSelector } from "react-redux";

function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useSelector((state) => state.authReducer)
  return (
    <Route {...rest} render={({ location }) => {
      console.log('location pathname ',location.pathname)
      return (
        isLoggedIn ?
        children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location } 
          }} />
      )
    }} />
  )
}

function GAdminRoute({ children, ...rest }) {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer)
  return (
    <Route {...rest} render={({ location }) => {
      return isLoggedIn && user.Role =="ADMIN" ?
        children
        : <Redirect to={{
            pathname: '/volunteerpage',
            state: { from: location } 
          }} />
    }} />
  )
}

// เข้าถึงได้เมื่อมี ข้อมูลของผู้สูงอายุที่เลือก เท่านั้น
function ProtectRoute({ children, ...rest }) {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer)
  const { resultSelected } = useSelector((state) => state.elderlyReducer)
  return (
    <Route {...rest} render={({ location }) => {
      return isLoggedIn && resultSelected!==null ?
        children
        : <Redirect to={{
            pathname: '/volunteerpage',
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
        <PrivateRoute path="/superadminpage"><SuperAdminPage/></PrivateRoute>
        <GAdminRoute path='/genaraladminpage'>
          <GenaralAdminPage/>
        </GAdminRoute>
        <PrivateRoute path='/volunteerpage'>
          <MainVolunteer/>
        </PrivateRoute>

        <ProtectRoute path="/editeld"><EditInfo/></ProtectRoute>
        <ProtectRoute path="/mainmenu"><MainMenu/></ProtectRoute>

        <PrivateRoute path="/sec1-page1"><Sec1_1/></PrivateRoute>
        <PrivateRoute path="/sec1-page2"><Sec1_2/></PrivateRoute>
        <PrivateRoute path="/sec1-page3"><Sec1_3/></PrivateRoute>
        <PrivateRoute path="/sec1-page4"><Sec1_4/></PrivateRoute>
        <PrivateRoute path="/sec1-page5"><Sec1_5/></PrivateRoute>
        <PrivateRoute path="/sec1-page6"><Sec1_6/></PrivateRoute>
        
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
