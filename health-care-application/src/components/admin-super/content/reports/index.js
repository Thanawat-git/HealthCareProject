import React from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Report3 from "./report3";

export default function Index() {
  const { path } = useRouteMatch();
  const redirectToReportMenu = () => {
    return <Redirect to={`${path}/report-menu`} />;
  };
  return (
    <div>
      <Route path={`${path}/report3`} component={Report3} />
      <Route path={`${path}/report-menu`}>
        {/* Create Menu Here! */}
        <Link to={`${path}/report3`}>To report3</Link>
      </Route>
      <Route
        exact={true}
        path={`${path}/`}
        component={redirectToReportMenu}
      ></Route>
    </div>
  );
}
