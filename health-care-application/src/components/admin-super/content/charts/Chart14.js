import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { getDataChart14 } from "../../../../actions/charts.action";
import { useDispatch, useSelector } from "react-redux";
import {
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
} from "@material-ui/core";
// import { Chart } from "react-google-charts";
import {
  COMMUNITYS,
  PRINT_THIS_SECTION,
} from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  ช่วงอายุ,
  ชายผอม,
  หญิงผอม,
  รวมผอม,
  เปอร์เซ็นต์ชายผอม,
  เปอร์เซ็นต์หญิงผอม,
  เปอร์เซ็นต์รวมผอม,
  ชายปกติ,
  หญิงปกติ,
  รวมปกติ,
  เปอร์เซ็นต์ชายปกติ,
  เปอร์เซ็นต์หญิงปกติ,
  เปอร์เซ็นต์รวมปกติ,
  ชายท้วม,
  หญิงท้วม,
  รวมท้วม,
  เปอร์เซ็นต์ชายท้วม,
  เปอร์เซ็นต์หญิงท้วม,
  เปอร์เซ็นต์รวมท้วม,
  ชายอ้วน,
  หญิงอ้วน,
  รวมอ้วน,
  เปอร์เซ็นต์ชายอ้วน,
  เปอร์เซ็นต์หญิงอ้วน,
  เปอร์เซ็นต์รวมอ้วน,
  ชายอ้วนมาก,
  หญิงอ้วนมาก,
  รวมอ้วนมาก,
  เปอร์เซ็นต์ชายอ้วนมาก,
  เปอร์เซ็นต์หญิงอ้วนมาก,
  เปอร์เซ็นต์รวมอ้วนมาก,
  รวม
) {
  return {
    ช่วงอายุ,
    ชายผอม,
    หญิงผอม,
    รวมผอม,
    เปอร์เซ็นต์ชายผอม,
    เปอร์เซ็นต์หญิงผอม,
    เปอร์เซ็นต์รวมผอม,
    ชายปกติ,
    หญิงปกติ,
    รวมปกติ,
    เปอร์เซ็นต์ชายปกติ,
    เปอร์เซ็นต์หญิงปกติ,
    เปอร์เซ็นต์รวมปกติ,
    ชายท้วม,
    หญิงท้วม,
    รวมท้วม,
    เปอร์เซ็นต์ชายท้วม,
    เปอร์เซ็นต์หญิงท้วม,
    เปอร์เซ็นต์รวมท้วม,
    ชายอ้วน,
    หญิงอ้วน,
    รวมอ้วน,
    เปอร์เซ็นต์ชายอ้วน,
    เปอร์เซ็นต์หญิงอ้วน,
    เปอร์เซ็นต์รวมอ้วน,
    ชายอ้วนมาก,
    หญิงอ้วนมาก,
    รวมอ้วนมาก,
    เปอร์เซ็นต์ชายอ้วนมาก,
    เปอร์เซ็นต์หญิงอ้วนมาก,
    เปอร์เซ็นต์รวมอ้วนมาก,
    รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const dispatch = useDispatch();
  const chart14Reducer = useSelector(({ chart14Reducer }) => chart14Reducer);
  const {
    g6064,
    g6569,
    g7074,
    g7579,
    g8084,
    g8589,
    g9094,
    g95,
  } = chart14Reducer.results;
  const ageRange = [g6064, g6569, g7074, g7579, g8084, g8589, g9094, g95];
  const [row, setRow] = React.useState([]);
  React.useEffect(() => {
    if (chart14Reducer.isFetching === false) {
      let j = community ==="ทุกชุมชน"?3:7
      for (let i = 0; i < ageRange.length; i++) {
        row.push(
          createData(
            i < 7
              ? Object.keys(chart14Reducer.results)[i + j].substring(1, 3) +
                  "-" +
                  Object.keys(chart14Reducer.results)[i + j].substring(3)
              : Object.keys(chart14Reducer.results)[i + j].substring(1, 3) +
                  "+",
            ageRange[i].Thin.Male,
            ageRange[i].Thin.Female,
            ageRange[i].Thin.Sum,
            ageRange[i].Thin.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Thin.PerMale + "%",
            ageRange[i].Thin.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Thin.PerFemale + "%",
            ageRange[i].Thin.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Thin.PerSum + "%",
            ageRange[i].Normal.Male,
            ageRange[i].Normal.Female,
            ageRange[i].Normal.Sum,
            ageRange[i].Normal.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Normal.PerMale + "%",
            ageRange[i].Normal.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Normal.PerFemale + "%",
            ageRange[i].Normal.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Normal.PerSum + "%",
            ageRange[i].Plump.Male,
            ageRange[i].Plump.Female,
            ageRange[i].Plump.Sum,
            ageRange[i].Plump.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Plump.PerMale + "%",
            ageRange[i].Plump.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Plump.PerFemale + "%",
            ageRange[i].Plump.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Plump.PerSum + "%",
            ageRange[i].Fat.Male,
            ageRange[i].Fat.Female,
            ageRange[i].Fat.Sum,
            ageRange[i].Fat.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Fat.PerMale + "%",
            ageRange[i].Fat.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Fat.PerFemale + "%",
            ageRange[i].Fat.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Fat.PerSum + "%",
            ageRange[i].VeryFat.Male,
            ageRange[i].VeryFat.Female,
            ageRange[i].VeryFat.Sum,
            ageRange[i].VeryFat.PerMale === "NaN"
              ? "0%"
              : ageRange[i].VeryFat.PerMale + "%",
            ageRange[i].VeryFat.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].VeryFat.PerFemale + "%",
            ageRange[i].VeryFat.PerSum === "NaN"
              ? "0%"
              : ageRange[i].VeryFat.PerSum + "%",
            ageRange[i].VeryFat.Sum +
              ageRange[i].Fat.Sum +
              ageRange[i].Plump.Sum +
              ageRange[i].Normal.Sum +
              ageRange[i].Thin.Sum
          )
        );
      }
    }
    console.log("row ", row);
    console.log("row length ", row.length);
    setOpen1(row.length);
  }, [chart14Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    e.target.value === "ทุกชุมชน" ?
    dispatch(getDataChart14("ทุกชุมชน"))
    :dispatch(getDataChart14(e.target.value))
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและร้อยละของผู้สูงอายุแจกแจงตามช่วงอายุเพศและระดับดัชนีมวลกายของ${community}.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
        <div className="">
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
      </div>

      <div ref={ref} className="report-container">
        <h4>จำนวนและร้อยละของผู้สูงอายุแจกแจงตามช่วงอายุ เพศ และระดับดัชนีมวลกายของ{community}</h4>
      <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >ช่วงอายุ (ปี)</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="right">ผอม</StyledTableCell>
                  <StyledTableCell align="left">%</StyledTableCell>
                  <StyledTableCell align="right">ปกติ</StyledTableCell>
                  <StyledTableCell align="left">%</StyledTableCell>
                  <StyledTableCell align="right">ท้วม</StyledTableCell>
                  <StyledTableCell align="left">%</StyledTableCell>
                  <StyledTableCell align="right">อ้วน</StyledTableCell>
                  <StyledTableCell align="left">%</StyledTableCell>
                  <StyledTableCell align="right">อ้วนมาก</StyledTableCell>
                  <StyledTableCell align="left">%</StyledTableCell>
                  <StyledTableCell align="right">รวม</StyledTableCell>
                  {/* <StyledTableCell align="right">%</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
              {row.map((value) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell>{value.ช่วงอายุ}</StyledTableCell>
                      <StyledTableCell>
                        ชาย <br/> หญิง <br/> รวม
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ชายผอม}<br/>
                        {value.หญิงผอม}<br/>
                        {value.รวมผอม}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.เปอร์เซ็นต์ชายผอม}<br/>
                        {value.เปอร์เซ็นต์หญิงผอม}<br/>
                        {value.เปอร์เซ็นต์รวมผอม}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ชายปกติ}<br/>
                        {value.หญิงปกติ}<br/>
                        {value.รวมปกติ}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.เปอร์เซ็นต์ชายปกติ}<br/>
                        {value.เปอร์เซ็นต์หญิงปกติ}<br/>
                        {value.เปอร์เซ็นต์รวมปกติ}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ชายท้วม}<br/>
                        {value.หญิงท้วม}<br/>
                        {value.รวมท้วม}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.เปอร์เซ็นต์ชายท้วม}<br/>
                        {value.เปอร์เซ็นต์หญิงท้วม}<br/>
                        {value.เปอร์เซ็นต์รวมท้วม}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ชายอ้วน}<br/>
                        {value.หญิงอ้วน}<br/>
                        {value.รวมอ้วน}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.เปอร์เซ็นต์ชายอ้วน}<br/>
                        {value.เปอร์เซ็นต์หญิงอ้วน}<br/>
                        {value.เปอร์เซ็นต์รวมอ้วน}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ชายอ้วนมาก}<br/>
                        {value.หญิงอ้วนมาก}<br/>
                        {value.รวมอ้วนมาก}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {value.เปอร์เซ็นต์ชายอ้วนมาก}<br/>
                        {value.เปอร์เซ็นต์หญิงอ้วนมาก}<br/>
                        {value.เปอร์เซ็นต์รวมอ้วนมาก}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.รวม}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    </div>
  );
});

export default function Chart14() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุแจกแจงตามช่วงอายุ เพศ และระดับดัชนีมวลกาย
            ของชุมชน
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
