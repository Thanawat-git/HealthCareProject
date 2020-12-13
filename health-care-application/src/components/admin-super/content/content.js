import React from 'react'
import {
  Redirect,
  Route,
  useRouteMatch,
} from 'react-router-dom'
import MainContent from "./MainContent";
// import AdminContent from "./admin/AdminContent";
// import VolunteerContent from "./volunteer/VolunteerContent";

import AdminContent from "./admin/AdminContent";
import VolunteerContent from "./volunteer/VolunteerContent"
import Reports from "./reports";

export default function Content() {
  const { path } = useRouteMatch()
  const redirectToMainContent = ()=>{
    return <Redirect to={`${path}/main-content`}/>
  }
  
  return (
    <div className="content-wrapper">
      
      <Route path={`${path}/admin-content`}>
        <AdminContent/>
      </Route>
      <Route path={`${path}/volunteer-content`}>
        <VolunteerContent/>
      </Route>
      <Route path={`${path}/reports`}>
        <Reports/>
      </Route>
      <Route path={`${path}/main-content`}>
        <MainContent/>
      </Route>
      <Route exact={true} path={`${path}/`} component={redirectToMainContent}></Route>
    </div>
  );
}
