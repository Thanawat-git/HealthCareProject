import React from 'react'
import {
  Redirect,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import Editaccount from "./Editaccount";
import Editpassword from "./Editpassword";
import Volunteer from "./Volunteer";
import History from "./History";

export default function Content() {
  const { path } = useRouteMatch()
  const redirectToMain = ()=>{
    return <Redirect to={`${path}/search`}/>
  }
  
  return (
    <div >
      <Route path={`/editaccount`}>
        <Editaccount />
      </Route>
      <Route path={`${path}/editpassword`}>
        <Editpassword/>
      </Route>
      <Route path={`${path}/history`}>
        <History/>
      </Route>
      <Route path={`${path}/search`}>
        <Volunteer/>
      </Route>
      <Route exact={true} path={`${path}/`} component={redirectToMain}></Route>
      {/* <Route path='*' exact={true}  component={redirectToMain}></Route> */}
    </div>
  );
}
