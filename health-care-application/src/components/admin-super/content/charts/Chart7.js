import React from "react";
import { Tooltip, Select } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { TREATMENT, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart7 } from "../../../../actions/charts.action";

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [treatment, setTreatment,] = React.useState("เบิกต้นสังกัด");
  const chart7Reducer = useSelector(({ chart7Reducer }) => chart7Reducer);
  const {
    g95,
    g6064,
    g6569,
    g7074,
    g7579,
    g8084,
    g8589,
    g9094,
    summary,
  } = chart7Reducer.results;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTreatment(e.target.value);
    dispatch(getDataChart7(e.target.value));
  };
  return (
    <div className="card-body">
      <div>
        เลือกสิทธิการรักษา &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={treatment}
          onChange={handleChange}
        >
          {TREATMENT.map((value, index) => {
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
            ["อายุ", `ชาย ${summary.ElderMale} คน`, `หญิง ${summary.ElderFemale} คน`, `รวม ${summary.Elder} คน`],
            [`60-64\nทั้งหมด ${g6064.Elder} คน\nชาย ${g6064.ElderPerMale}%\nหญิง ${g6064.ElderPerFeMale}%`, g6064.ElderMale, g6064.ElderFemale, g6064.Elder],
            [`65-69\n${g6569.Elder} คน\n${g6569.ElderPerMale}%\n${g6569.ElderPerFeMale}%`, g6569.ElderMale, g6569.ElderFemale, g6569.Elder],
            [`70-74\n${g7074.Elder} คน\n${g7074.ElderPerMale}%\n${g7074.ElderPerFeMale}%`, g7074.ElderMale, g7074.ElderFemale, g7074.Elder],
            [`75-79\n${g7579.Elder} คน\n${g7579.ElderPerMale}%\n${g7579.ElderPerFeMale}%`, g7579.ElderMale, g7579.ElderFemale, g7579.Elder],
            [`80-84\n${g8084.Elder} คน\n${g8084.ElderPerMale}%\n${g8084.ElderPerFeMale}%`, g8084.ElderMale, g8084.ElderFemale, g8084.Elder],
            [`85-89\n${g8589.Elder} คน\n${g8589.ElderPerMale}%\n${g8589.ElderPerFeMale}%`, g8589.ElderMale, g8589.ElderFemale, g8589.Elder],
            [`90-94\n${g9094.Elder} คน\n${g9094.ElderPerMale}%\n${g9094.ElderPerFeMale}%`, g9094.ElderMale, g9094.ElderFemale, g9094.Elder],
            [`95+\n${g95.Elder} คน\n${g95.ElderPerMale}%\n${g95.ElderPerFeMale}%`, g95.ElderMale, g95.ElderFemale, g95.Elder],
          ]}
          options={{
            chart: {
              title: `จำนวนประชากรผู้สูงอายุทั้งหมดใน ${treatment} จำนวน ${summary.Elder} คน`,
              subtitle: "แจกแจงตามช่วงอายุ เพศ และสิทธิการรักษา",
            },
          }}
        />
      </div>
    </div>
  );
});

export default function Chart7() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา ช่วงอายุ และเพศ
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