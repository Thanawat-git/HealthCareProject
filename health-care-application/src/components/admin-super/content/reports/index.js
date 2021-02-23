import React from "react";
import { Redirect, Route, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import './report.css'
import ReportMenuBox from "./ReportMenuBox";
import Textreport from "./Textreport";
import {getDataChart9,getDataChart10,getDataChart11,getDataChart14} from '../../../../actions/charts.action'
import { useDispatch } from "react-redux";

export default function Index() {
  const { path } = useRouteMatch();
  let history = useHistory();
  const [selectShowTable, setSelectShowTable] = React.useState("")
  const redirectToReportMenu = () => {
    return <Redirect to={`${path}/report-menu`} />;
  };
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getDataChart9());
    dispatch(getDataChart10());
    dispatch(getDataChart11());
    dispatch(getDataChart14("ทุกชุมชน"));

  },[])

  const handleClick = x => {
    setSelectShowTable(x)
    history.push(`${path}/textreport`)
  }

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">รายงาน</h1>
            </div>
          </div>
        </div>
      </div>
      <Route path={`${path}/textreport`}>
        <Textreport selectShowTable={selectShowTable}/>
      </Route>

      <Route path={`${path}/report-menu`}>
        {/* Create Menu Here! */}
        <div className="report-box">
          <Link onClick={()=>handleClick("เอว")}>
            <ReportMenuBox title="แปลผลเส้นรอบเอว" eachImg="1" />
          </Link>
          <Link onClick={()=>handleClick("bmi")}><ReportMenuBox title="ดัชนีมวลกาย (BMI)" eachImg="2" /></Link>
          <ReportMenuBox title="ค่าความดันโลหิต" eachImg="3" />
          <ReportMenuBox title="ค่าระดับน้ำตาลจากปลายนิ้ว" eachImg="4" />
          <ReportMenuBox title="แปลผลความเสี่ยงต่อโรคหัวใจและหลอดเลือด" eachImg="5" />
          <ReportMenuBox title="สุขภาพตา" eachImg="6" />
          <ReportMenuBox title="สุขภาพช่องปาก" eachImg="7" />
          <ReportMenuBox title="ความสามารถในการทำกิจวัตรประจำวัน" eachImg="8" />
          {/* <ReportMenuBox title="TAI" eachImg="9" /> */}
          <ReportMenuBox title="ภาวะสมองเสื่อม" eachImg="10" />
          {/* <ReportMenuBox title="MMSE" eachImg="11" /> */}
          <ReportMenuBox title="โรคซึมเศร้า" eachImg="12" />
          <ReportMenuBox title="สุขภาพกระดูกและกล้ามเนื้อ" eachImg="13" />
          {/* <ReportMenuBox title="การกลั้นปัสสาวะ" eachImg="14" /> */}
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
