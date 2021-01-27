import React from "react";
import { Tooltip, Select } from "@material-ui/core";
import { Chart } from "react-google-charts";
import {
  TREATMENT,
  PRINT_THIS_SECTION,
  COMMUNITYS,
} from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart8 } from "../../../../actions/charts.action";

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [treatment, setTreatment] = React.useState("เบิกต้นสังกัด");
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart8Reducer = useSelector(({ chart8Reducer }) => chart8Reducer);
  const {
    Affiliation,
    Yourself,
    Gold,
    Disabled,
    Social,
    Other,
    PerAffiliation,
    PerDisabled,
    PerGold,
    PerOther,
    PerSocial,
    PerYourself,
    Sum,
  } = chart8Reducer.results;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart8(e.target.value));
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
            ["", "จำนวน"],
            ["เบิกต้นสังกัด", Affiliation],
            ["ชำระเงินเอง", Yourself],
            ["บัตรทอง", Gold],
            ["บัตรผู้พิการ", Disabled],
            ["บัตรประกันสังคม", Social],
            ["อืนๆ", Other],
          ]}
          options={{
            chart: {
              title: `จำนวนประชากรผู้สูงอายุทั้งหมดใน ${community} จำนวน ${Sum} คน`,
              subtitle: "แจกแจงตามช่วงอายุ เพศ และชุมชน",
            },
          }}
        />
      </div>
    </div>
  );
});

export default function Chart8() {
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
