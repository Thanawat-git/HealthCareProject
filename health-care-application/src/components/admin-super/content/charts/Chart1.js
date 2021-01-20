import React from "react";
import { useSelector } from "react-redux";
import { Tooltip } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";


const ShowChart = React.forwardRef((props, ref) => {
  const chart1Reducer = useSelector(({chart1Reducer}) => chart1Reducer)
  const {
    summary, g95, g6064, g6569, g7074, g7579, g8084, g8589, g9094
  } = chart1Reducer.results
  React.useEffect(() => {
    console.log(summary.Elder)
  }, [])
  return (
    <div className="card-body" ref={ref}>
      <div className="chart">
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["อายุ", `ชาย ${summary.ElderMale} คน`, `หญิง ${summary.ElderFemale} คน`],
            [`60-64\nทั้งหมด ${g6064.Elder} คน\nชาย ${g6064.ElderPerMale}%\nหญิง ${g6064.ElderPerFeMale}%`, g6064.ElderMale, g6064.ElderFemale],
            [`65-69\n${g6569.Elder} คน\n${g6569.ElderPerMale}%\n${g6569.ElderPerFeMale}%`, g6569.ElderMale, g6569.ElderFemale],
            [`70-74\n${g7074.Elder} คน\n${g7074.ElderPerMale}%\n${g7074.ElderPerFeMale}%`, g7074.ElderMale, g7074.ElderFemale],
            [`75-79\n${g7579.Elder} คน\n${g7579.ElderPerMale}%\n${g7579.ElderPerFeMale}%`, g7579.ElderMale, g7579.ElderFemale],
            [`80-84\n${g8084.Elder} คน\n${g8084.ElderPerMale}%\n${g8084.ElderPerFeMale}%`, g8084.ElderMale, g8084.ElderFemale],
            [`85-89\n${g8589.Elder} คน\n${g8589.ElderPerMale}%\n${g8589.ElderPerFeMale}%`, g8589.ElderMale, g8589.ElderFemale],
            [`90-94\n${g9094.Elder} คน\n${g9094.ElderPerMale}%\n${g9094.ElderPerFeMale}%`, g9094.ElderMale, g9094.ElderFemale],
            [`95+\n${g95.Elder} คน\n${g95.ElderPerMale}%\n${g95.ElderPerFeMale}%`, g95.ElderMale, g95.ElderFemale],
          ]}
          options={{
            // Material design options
            chart: {
              title:
                `จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ ทั้งหมด ${summary.Elder} คน`,
              subtitle: "จำแนกตามเพศ",
            },
          }}
        />
      </div>
    </div>
  );
});

export default function Chart1() {
  
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ
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
        <ShowChart ref={componentRef}/>
      </div>
    </div>
  );
}
