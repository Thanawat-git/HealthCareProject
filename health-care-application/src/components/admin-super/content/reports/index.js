import React from "react";
import { Redirect, Route, useRouteMatch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./report.css";
import ReportMenuBox from "./ReportMenuBox";
import ShowReport from "./ShowReport";
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
  // React.useEffect(() => {
  //   dispatch(getDataChart9());
  //   dispatch(getDataChart10());
  //   dispatch(getDataChart11());
  //   dispatch(getDataChart14("ทุกชุมชน"));
  //   dispatch(getDataChart16());
  //   dispatch(getDataChart17());
  //   dispatch(getDataChart18("ทุกชุมชน"));
  //   dispatch(getDataChart20("ชุมชนมณีแก้ว"));
  //   dispatch(getDataChart21("ชุมชนมณีแก้ว"));
  //   dispatch(getDataChart22());
  //   dispatch(getDataChart23());
  //   dispatch(getDataChart31("ชุมชนมณีแก้ว"))
  //   dispatch(getDataChart32())
  //   dispatch(getDataChart33("ทุกชุมชน"))
  //   dispatch(getDataChart35())
  //   dispatch(getDataChart36())
  //   dispatch(getDataChart37())
  // }, []);

  // --------------- ส่วนนี้ไม่ได้ใช้ มีไว้ทำ loading แต่ไม่ได้ทำ ---------------//
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  const [loading4, setLoading4] = React.useState(false);
  const [loading5, setLoading5] = React.useState(false);
  const [loading6, setLoading6] = React.useState(false);
  const [loading7, setLoading7] = React.useState(false);
  const f9 = useSelector(({ chart9Reducer }) => chart9Reducer.isFetching);
  const f10 = useSelector(({ chart10Reducer }) => chart10Reducer.isFetching);
  const f11 = useSelector(({ chart11Reducer }) => chart11Reducer.isFetching);
  const f14 = useSelector(({ chart14Reducer }) => chart14Reducer.isFetching); //
  const f16 = useSelector(({ chart16Reducer }) => chart16Reducer.isFetching); // n
  const f17 = useSelector(({ chart17Reducer }) => chart17Reducer.isFetching); // n
  const f18 = useSelector(({ chart18Reducer }) => chart18Reducer.isFetching); // n
  const f20 = useSelector(({ chart20Reducer }) => chart20Reducer.isFetching); // n
  const f21 = useSelector(({ chart21Reducer }) => chart21Reducer.isFetching); // n
  const f22 = useSelector(({ chart22Reducer }) => chart22Reducer.isFetching);
  const f23 = useSelector(({ chart23Reducer }) => chart23Reducer.isFetching);
  const f31 = useSelector(({ chart31Reducer }) => chart31Reducer.isFetching); //
  const f32 = useSelector(({ chart32Reducer }) => chart32Reducer.isFetching);
  const f33 = useSelector(({ chart33Reducer }) => chart33Reducer.isFetching); //
  const f35 = useSelector(({ chart35Reducer }) => chart35Reducer.isFetching);
  const f36 = useSelector(({ chart36Reducer }) => chart36Reducer.isFetching);
  const f37 = useSelector(({ chart37Reducer }) => chart37Reducer.isFetching);

  React.useEffect(() => {
    f9 === false && setLoading1(false);
    if (f10 === false && f11 === false && !f14) {
      setLoading2(false);
    }
    if (f22 === false && f23 === false) {
      setLoading4(false);
    }
    f31 === false && setLoading5(false);
    if (f32 === false && !f33) {
      setLoading6(false);
    }
    if (f35 === false && f36 === false && f37 === false) {
      setLoading7(false);
    }
  }, [f9,f10,f11,f14,f16,f17,f18,f20,f21,f22,f23,f31,f32,f33,f35,f36,f37]);
  // --------------- ส่วนนี้ไม่ได้ใช้ มีไว้ทำ loading แต่ไม่ได้ทำ ---------------//

  const handleClick = (x) => {
    setSelectShowTable(x);
    switch (x) {
      case "เอว":
        dispatch(getDataChart9());
        break;
      case "bmi":
        dispatch(getDataChart10());
        dispatch(getDataChart11());
        dispatch(getDataChart14("ทุกชุมชน"));
        break;
      case "cardio":
        dispatch(getDataChart22());
        dispatch(getDataChart23());
        break;
      case "สุขภาพช่องปาก":
        dispatch(getDataChart31("ชุมชนมณีแก้ว"));
        break;
      case "abl":
        dispatch(getDataChart32());
        dispatch(getDataChart33("ทุกชุมชน"));
        break;
      case "ภาวะสมองเสื่อม":
        dispatch(getDataChart35());
        dispatch(getDataChart36());
        dispatch(getDataChart37());
        break;
      case "โรค":
        dispatch(getDataChart16());
        dispatch(getDataChart17());
        dispatch(getDataChart18("ทุกชุมชน"));
        dispatch(getDataChart20("ชุมชนมณีแก้ว"));
        dispatch(getDataChart21("ชุมชนมณีแก้ว"));
        break;
      default:
        break;
    }
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
        <ShowReport selectShowTable={selectShowTable} />
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
          <Link onClick={() => handleClick("โรค")}>
            <ReportMenuBox
              title="โรคต่างๆ"
              eachImg="11"
            />
          </Link>
          {/* <ReportMenuBox title="โรคซึมเศร้า" eachImg="12" /> */}
          {/* <ReportMenuBox title="สุขภาพกระดูกและกล้ามเนื้อ" eachImg="13" /> */}
          {/* <ReportMenuBox title="การกลั้นปัสสาวะ" eachImg="14" /> */}
        </div>
      </Route>
      <Route
        exact={true}
        path={`${path}/`}
        component={redirectToReportMenu}
      ></Route>
    </div>
  );
}
