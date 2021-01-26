import React from "react";
import { getDataChart3 } from "../../../../actions/charts.action"
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Select } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart3Reducer = useSelector(({ chart3Reducer }) => chart3Reducer);
  const {
    Elder,
    ElderMale,
    ElderFemale,
    PerElderMale,
    PerElderFemale,
    ElderSurvey,
    ElderSurveyMale,
    ElderSurveyFemale,
    PerElderSurveyMale,
    PerElderSurveyFemale,
  } = chart3Reducer.results;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart3(e.target.value));
  };
  return (
    <div className="card-body" ref={ref}>
      <div>
        เลือกชุมชน &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={community}
          onChange={handleChange}
        >
          {COMMUNITYS.map((value, index) => {
            return (
              <option key={index} value={value}>
                {value}
              </option>
            );
          })}
        </Select>
      </div>
      <br />
      <div className="chart">
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["", `ชาย ${ElderMale} คน`, `หญิง ${ElderFemale} คน`, `รวม ${Elder} คน`],
            [`ผู้สูงอายุทั้งหมด ${Elder} คน\nชาย ${PerElderMale}%\nหญิง ${PerElderFemale}%`, ElderMale, ElderFemale, Elder],
            [`ผู้สูงอายุที่สำรวจได้ ${ElderSurvey} คน\nชาย ${PerElderSurveyMale}%\nหญิง ${PerElderSurveyFemale}%`, ElderSurveyMale, ElderSurveyFemale, ElderSurvey],
          ]}
          options={{
            // Material design options
            chart: {
              title: `จำนวนประชากรผู้สูงอายุ ทั้งหมดใน ${community} จำนวน ${Elder} คน`,
              subtitle: "จำแนกตามเพศ และจำนวนที่สำรวจได้",
            },
          }}
        />
      </div>
    </div>
  );
});

export default function Chart3() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนประชากรผู้สูงอายุจำแนกตามเพศ และจำนวนที่สำรวจได้
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
                onClick={handlePrint}
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
