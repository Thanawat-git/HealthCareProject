import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import './report.css'
import ReportMenuBox from "./ReportMenuBox";
import textreport from "./textreport";

export default function Index() {
  const { path } = useRouteMatch();
  const redirectToReportMenu = () => {
    return <Redirect to={`${path}/report-menu`} />;
  };
  return (
    <div>
      <Route path={`${path}/textreport`} component={textreport} />

      <Route path={`${path}/report-menu`}>
        {/* Create Menu Here! */}
        <div className="report-box">
          <Link to={`${path}/textreport`}>
            <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          </Link>
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลความเสี่ยงต่อโรคหัวใจและหลอดเลือด" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
          <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="reportpage" />
        </div>
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
