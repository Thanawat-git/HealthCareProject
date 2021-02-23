import React from "react";
import { Redirect, Route, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./report.css";
import ReportMenuBox from "./ReportMenuBox";
import Textreport from "./Textreport";
import {
  getDataChart9,
  getDataChart10,
  getDataChart11,
  getDataChart14,
  getDataChart16,
  getDataChart17,
  getDataChart18,
  getDataChart20,
  getDataChart21,
  getDataChart22,
  getDataChart23,
  getDataChart31,
  getDataChart32,
  getDataChart33,
  getDataChart35,
  getDataChart36,
  getDataChart37,
} from "../../../../actions/charts.action";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const { path } = useRouteMatch();
  let history = useHistory();
  const [selectShowTable, setSelectShowTable] = React.useState("");
  const redirectToReportMenu = () => {
    return <Redirect to={`${path}/report-menu`} />;
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDataChart9());
    dispatch(getDataChart10());
    dispatch(getDataChart11());
    dispatch(getDataChart14("ทุกชุมชน"));
    dispatch(getDataChart16());
    dispatch(getDataChart17());
    dispatch(getDataChart18("ทุกชุมชน"));
    dispatch(getDataChart20("ชุมชนมณีแก้ว"));
    dispatch(getDataChart21("ชุมชนมณีแก้ว"));
    dispatch(getDataChart22());
    dispatch(getDataChart23());
    dispatch(getDataChart31("ชุมชนมณีแก้ว"))
    dispatch(getDataChart32())
    dispatch(getDataChart33("ทุกชุมชน"))
    dispatch(getDataChart35())
    dispatch(getDataChart36())
    dispatch(getDataChart37())
  }, []);

  const [loading1, setLoading1] = React.useState(true);
  const [loading2, setLoading2] = React.useState(true);
  const [loading3, setLoading3] = React.useState(true);
  const [loading4, setLoading4] = React.useState(true);
  const [loading5, setLoading5] = React.useState(true);
  const [loading6, setLoading6] = React.useState(true);
  const [loading7, setLoading7] = React.useState(true);
  const f0 = useSelector(({ chart9Reducer }) => chart9Reducer.isFetching);
  const f1 = useSelector(({ chart10Reducer }) => chart10Reducer.isFetching);
  const f2 = useSelector(({ chart11Reducer }) => chart11Reducer.isFetching);
  const f3 = useSelector(({ chart14Reducer }) => chart14Reducer.isFetching);
  const f4 = useSelector(({ chart16Reducer }) => chart16Reducer.isFetching);
  const f5 = useSelector(({ chart17Reducer }) => chart17Reducer.isFetching);
  const f6 = useSelector(({ chart18Reducer }) => chart18Reducer.isFetching);
  const f7 = useSelector(({ chart20Reducer }) => chart20Reducer.isFetching);
  const f8 = useSelector(({ chart21Reducer }) => chart21Reducer.isFetching);
  const f9 = useSelector(({ chart22Reducer }) => chart22Reducer.isFetching);
  const f10 = useSelector(({ chart23Reducer }) => chart23Reducer.isFetching);
  const f11 = useSelector(({ chart31Reducer }) => chart31Reducer.isFetching);
  const f12 = useSelector(({ chart32Reducer }) => chart32Reducer.isFetching);
  const f13 = useSelector(({ chart33Reducer }) => chart33Reducer.isFetching);
  const f14 = useSelector(({ chart35Reducer }) => chart35Reducer.isFetching);
  const f15 = useSelector(({ chart36Reducer }) => chart36Reducer.isFetching);
  const f16 = useSelector(({ chart37Reducer }) => chart37Reducer.isFetching);

  React.useEffect(() => {
    f0 === false && setLoading1(false);
    if (f1 === false && f2 === false && !f3) {
      setLoading2(false);
    }
    if (f9 === false && f10 === false) {
      setLoading4(false);
    }
    f11 === false && setLoading5(false);
    if (f12 === false && f13 === false) {
      setLoading6(false);
    }
    if (f14 === false && f15 === false && f16 === false ) {
      setLoading7(false);
    }
  }, [
    f0,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    f16,
  ]);

  const handleClick = (x) => {
    setSelectShowTable(x);
    history.push(`${path}/textreport`);
  };

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
        <Textreport selectShowTable={selectShowTable} />
      </Route>

      <Route path={`${path}/report-menu`}>
        {/* Create Menu Here! */}
        <div className="report-box">
          <Link onClick={() => handleClick("เอว")}>
            <ReportMenuBox
              title="แปลผลเส้นรอบเอว"
              eachImg="1"
              loading={loading1}
            />
          </Link>

          <Link onClick={() => handleClick("bmi")}>
            <ReportMenuBox
              title="ดัชนีมวลกาย (BMI)"
              eachImg="2"
              loading={loading2}
            />
          </Link>

          {/* <Link onClick={()=>handleClick("ค่าความดันโลหิต")}>
            <ReportMenuBox title="ค่าความดันโลหิต" eachImg="3" loading={loading3}/>
          </Link> */}

          {/* <ReportMenuBox title="ค่าระดับน้ำตาลจากปลายนิ้ว" eachImg="4" /> */}
          <Link onClick={() => handleClick("cardio")}>
            <ReportMenuBox
              title="แปลผลความเสี่ยงต่อโรคหัวใจและหลอดเลือด"
              eachImg="5"
              loading={loading4}
            />
          </Link>

          {/* <ReportMenuBox title="สุขภาพตา" eachImg="6" /> */}
          <Link onClick={() => handleClick("สุขภาพช่องปาก")}>
            <ReportMenuBox
              title="สุขภาพช่องปาก"
              eachImg="7"
              loading={loading5}
            />
          </Link>

          <Link onClick={() => handleClick("abl")}>
            <ReportMenuBox
              title="ความสามารถในการทำกิจวัตรประจำวัน"
              eachImg="8"
              loading={loading6}
            />
          </Link>

          {/* <ReportMenuBox title="TAI" eachImg="9" /> */}
          <Link onClick={() => handleClick("ภาวะสมองเสื่อม")}>
            <ReportMenuBox
              title="ภาวะสมองเสื่อม"
              eachImg="10"
              loading={loading7}
            />
          </Link>
          {/* <ReportMenuBox title="MMSE" eachImg="11" /> */}
          {/* <ReportMenuBox title="โรคซึมเศร้า" eachImg="12" /> */}
          {/* <ReportMenuBox title="สุขภาพกระดูกและกล้ามเนื้อ" eachImg="13" /> */}
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
