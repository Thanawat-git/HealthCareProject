import React from "react";
import { Tooltip, Select } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { EDUCATIONS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart6 } from "../../../../actions/charts.action";

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [education, setEducation] = React.useState("ชุมชนมณีแก้ว");
  const chart6Reducer = useSelector(({ chart6Reducer }) => chart6Reducer);
  const dispatch = useDispatch();
  const {
    summary, g95, g6064, g6569, g7074, g7579, g8084, g8589, g9094
  } = chart6Reducer.results
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart6(e.target.value));
  };
  return (
    <div className="card-body">
      <div>
        เลือกระดับการศึกษา &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={community}
          onChange={handleChange}
        >
          {EDUCATIONS.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </Select>
      </div>
      <br />
      <div className="row" ref={ref}>
        <div className="col-12">
          <p style={{ textAlign: "center" }}>
            จำนวนประชากรผู้สูงอายุทั้งหมดใน {education} จำนวน {summary.Elder} คน
          </p>
        </div>
        
        {/* <div className="chart col-6 align-self-center" style={{ textAlign: "center" }} >
            {
                summary === 0 ?
                <h1>ไม่มีข้อมูล</h1>
                :
            <Chart
            //   maxWidth={"400px"}
            height={"400px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "จำนวน"],
              ["อยู่ลำพัง", Alone],
              ["ไม่ได้อยู่ลำพัง", NotAlone],
            ]}
          />
            }
          
        </div>
        <div className="chart col-6">
          <Chart
            // width={"300px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["เวลา", "ผู้สูงอายุที่อยู่ลำพัง"],
              ["กลางวัน", AloneDay],
              ["กลางคืน", AloneNight],
              ["ทั้งวัน", AloneDayNight],
            ]}
            options={{
              title: "ผู้สูงอายุที่อยู่ลำพัง",
            }}
          />
        </div> */}
      </div>
    </div>
  );
});

export default function Chart6() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
          จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับการศึกษา ช่วงอายุ และเพศ
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
            </button>
            <Tooltip
              disableFocusListener
              disableTouchListener
              title={PRINT_THIS_SECTION}
            >
              <button
                type="button"
                className="btn btn-tool"
                onClick={useReactToPrint({
                  content: () => componentRef.current,
                })}
              >
                <i className="fas fa-print"></i>
              </button>
            </Tooltip>
          </div>
        </div>
        <ShowChart ref={componentRef} />
      </div>
    </div>
  );
}
