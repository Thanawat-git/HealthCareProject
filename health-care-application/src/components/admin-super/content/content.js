import React from 'react'
import MainContent from "./MainContent";
import AddNewAdmin from "../admin/AddNewAdmin";
import AdminContent from "../admin/AdminContent";
import {
  Link,
  Route,
  useRouteMatch,
} from 'react-router-dom'

export default function Content() {
  const { url, path } = useRouteMatch()
  // console.log('url', url)
  // console.log('path', path)
  
  return (
    <div className="content-wrapper">
      <Route path={`${path}/main-content`}>
        <MainContent/>
      </Route>
      <Route path={`${path}/admin-content`}>
        <AdminContent/>
      </Route>
    </div>
  );
}
