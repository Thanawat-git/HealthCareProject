import React from "react";
import {
  Tooltip,
  Select,
} from "@material-ui/core";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { getDataChart2 } from "../../../../actions/charts.action"
import { useDispatch, useSelector } from "react-redux";

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart2Reducer = useSelector(({chart2Reducer}) => chart2Reducer)
  const {
    summary, g95, g6064, g6569, g7074, g7579, g8084, g8589, g9094
  } = chart2Reducer.results
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setCommunity(e.target.value)
    dispatch(getDataChart2(e.target.value))
  };
  
  return (
    <div className="card-body">
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
      <div className="chart" ref={ref}>
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["อายุ", `ชาย`, "หญิง", "รวม"],
            ["60-64", g6064.ElderMale, g6064.ElderFemale, g6064.Elder],
            ["65-69", g6569.ElderMale, g6569.ElderFemale, g6569.Elder],
            ["70-74", g7074.ElderMale, g7074.ElderFemale, g7074.Elder],
            ["75-79", g7579.ElderMale, g7579.ElderFemale, g7579.Elder],
            ["80-84", g8084.ElderMale, g8084.ElderFemale, g8084.Elder],
            ["85-89", g8589.ElderMale, g8589.ElderFemale, g8589.Elder],
            ["90-94", g9094.ElderMale, g9094.ElderFemale, g9094.Elder],
            ["95+", g95.ElderMale, g95.ElderFemale, g95.Elder],
          ]}
          options={{
            chart: {
              title: `จำนวนประชากรผู้สูงอายุทั้งหมดใน ${community} จำนวน ${summary.Elder} คน`,
              subtitle: "แจกแจงตามช่วงอายุ เพศ และชุมชน",
            },
          }}
        />
      </div>
    </div>
  );
});

export default function Chart2() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนประชากรผู้สูงอายุแจกแจงตามช่วงอายุ เพศ และชุมชน
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
