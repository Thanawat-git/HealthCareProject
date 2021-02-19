import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@material-ui/core";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
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
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  topicColumn: {
    fontSize: 20,
  },
});

function createData(
  ชุมชน,
  ดัชนีมวลกายผู้ชายผอม,
  เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม,
  ดัชนีมวลกายผู้หญิงผอม,
  เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม,
  ดัชนีมวลกายรวมผอม,
  เปอร์เซ็นต์ดัชนีมวลกายรวมผอม,
  ดัชนีมวลกายผู้ชายปกติ,
  เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ,
  ดัชนีมวลกายผู้หญิงปกติ,
  เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ,
  ดัชนีมวลกายรวมปกติ,
  เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ,
  ดัชนีมวลกายผู้ชายท้วม,
  เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม,
  ดัชนีมวลกายผู้หญิงท้วม,
  เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม,
  ดัชนีมวลกายรวมท้วม,
  เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม,
  ดัชนีมวลกายผู้ชายอ้วน,
  เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน,
  ดัชนีมวลกายผู้หญิงอ้วน,
  เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน,
  ดัชนีมวลกายรวมอ้วน,
  เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน,
  ดัชนีมวลกายผู้ชายอ้วนมาก,
  เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก,
  ดัชนีมวลกายผู้หญิงอ้วนมาก,
  เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก,
  ดัชนีมวลกายรวมอ้วนมาก,
   เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก,
) {
  return {
    ชุมชน,
    ดัชนีมวลกายผู้ชายผอม,
    เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม,
    ดัชนีมวลกายผู้หญิงผอม,
    เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม,
    ดัชนีมวลกายรวมผอม,
    เปอร์เซ็นต์ดัชนีมวลกายรวมผอม,
    ดัชนีมวลกายผู้ชายปกติ,
    เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ,
    ดัชนีมวลกายผู้หญิงปกติ,
    เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ,
    ดัชนีมวลกายรวมปกติ,
    เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ,
    ดัชนีมวลกายผู้ชายท้วม,
    เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม,
    ดัชนีมวลกายผู้หญิงท้วม,
    เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม,
    ดัชนีมวลกายรวมท้วม,
    เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม,
    ดัชนีมวลกายผู้ชายอ้วน,
    เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน,
    ดัชนีมวลกายผู้หญิงอ้วน,
    เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน,
    ดัชนีมวลกายรวมอ้วน,
    เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน,
    ดัชนีมวลกายผู้ชายอ้วนมาก,
    เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก,
    ดัชนีมวลกายผู้หญิงอ้วนมาก,
    เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก,
    ดัชนีมวลกายรวมอ้วนมาก,
     เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก,
  };
}
const ShowChart = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(0);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart11Reducer = useSelector(({ chart11Reducer }) => chart11Reducer);

  const {
    ชุมชนมณีแก้ว,
    ชุมชนดอนบน,
    ชุมชนบางแสนทาวเวอร์,
    ชุมชนตาลล้อม1,
    ชุมชนตาลล้อม2,
    ชุมชนบ้านเหมือง,
    ชุมชนพัฒนา2,
    ชุมชนดอนนารา,
    ชุมชนวัดกลางดอน,
    ชุมชนแสนสุข,
    ชุมชนมาบมะยม,
    ชุมชนท้ายตลาด,
    ชุมชนร่วมใจพัฒนา,
    ชุมชนบางแสนบน,
    ชุมชนหาดวอนนภา,
    ชุมชนบางเป้ง,
    ชุมชนหน้ามอ,
    ชุมชนโชคดี,
    ชุมชนสมใจนึก,
    ชุมชนหน้าเทศบาล,
    ชุมชนวัดแสนสุข,
    ชุมชนมุขแสนเจริญ1,
    ชุมชนมุขแสนเจริญ2,
    ชุมชนเขาสามมุข,
    ชุมชนบ้านแหลมแท่น,
  } = chart11Reducer.results;
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedG: true,
  });
  const {checkedA,checkedB,checkedC} = state
  const [label, setLabel] = React.useState("");
  const [openPaper, setopenPaper] = React.useState(false);
  const handleChange = (event) => {
    console.log(event.target.checked, event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  const dispatch = useDispatch();
  const communi = [
    ชุมชนมณีแก้ว,
    ชุมชนดอนบน,
    ชุมชนบางแสนทาวเวอร์,
    ชุมชนตาลล้อม1,
    ชุมชนตาลล้อม2,
    ชุมชนบ้านเหมือง,
    ชุมชนพัฒนา2,
    ชุมชนดอนนารา,
    ชุมชนวัดกลางดอน,
    ชุมชนแสนสุข,
    ชุมชนมาบมะยม,
    ชุมชนท้ายตลาด,
    ชุมชนร่วมใจพัฒนา,
    ชุมชนบางแสนบน,
    ชุมชนหาดวอนนภา,
    ชุมชนบางเป้ง,
    ชุมชนหน้ามอ,
    ชุมชนโชคดี,
    ชุมชนสมใจนึก,
    ชุมชนหน้าเทศบาล,
    ชุมชนวัดแสนสุข,
    ชุมชนมุขแสนเจริญ1,
    ชุมชนมุขแสนเจริญ2,
    ชุมชนเขาสามมุข,
    ชุมชนบ้านแหลมแท่น,
  ];
  const [row, setRow] = useState([]);
  React.useEffect(() => {
    console.log("communi.length ", communi.length);
    if (chart11Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        row.push(
          createData(
            Object.keys(chart11Reducer.results)[i + 3],
            communi[i].Thin.Male, //1
            communi[i].Thin.PerMale === "NaN"? "0" : communi[i].Thin.PerMale, //1
            communi[i].Thin.Female,
            communi[i].Thin.PerFemale=== "NaN"? "0" :communi[i].Thin.PerFemale,
            communi[i].Thin.Sum,
            communi[i].Thin.PerSum=== "NaN"? "0" :communi[i].Thin.PerSum,
            communi[i].Normal.Male, //2
            communi[i].Normal.PerMale=== "NaN"? "0" :communi[i].Normal.PerMale, //2
            communi[i].Normal.Female,
            communi[i].Normal.PerFemale=== "NaN"? "0" :communi[i].Normal.PerFemale,
            communi[i].Normal.Sum,
            communi[i].Normal.PerSum=== "NaN"? "0" :communi[i].Normal.PerSum,
            communi[i].Plump.Male, //3
            communi[i].Plump.PerMale=== "NaN"? "0" :communi[i].Plump.PerMale, //3
            communi[i].Plump.Female,
            communi[i].Plump.PerFemale=== "NaN"? "0" :communi[i].Plump.PerFemale,
            communi[i].Plump.Sum,
            communi[i].Plump.PerSum=== "NaN"? "0" :communi[i].Plump.PerSum,
            communi[i].Fat.Male, //4
            communi[i].Fat.PerMale=== "NaN"? "0" :communi[i].Fat.PerMale, //4
            communi[i].Fat.Female,
            communi[i].Fat.PerFemale=== "NaN"? "0" :communi[i].Fat.PerFemale,
            communi[i].Fat.Sum,
            communi[i].Fat.PerSum=== "NaN"? "0" :communi[i].Fat.PerSum,
            communi[i].VeryFat.Male, //5
            communi[i].VeryFat.PerMale=== "NaN"? "0" :communi[i].VeryFat.PerMale, //5
            communi[i].VeryFat.Female,
            communi[i].VeryFat.PerFemale=== "NaN"? "0" :communi[i].VeryFat.PerFemale,
            communi[i].VeryFat.Sum,
            communi[i].VeryFat.PerSum=== "NaN"? "0" :communi[i].VeryFat.PerSum
          )
        );
      }
    }
    console.log("row ", row);
    console.log("row length ", row.length);
    setOpen(row.length);
  }, [chart11Reducer.isFetching]);
  React.useEffect(()=>{
    if(checkedA&&checkedB&&checkedC){
      setLabel("ของทั้งหมด (ชาย หญิง รวม)")
    } else if(checkedA&&checkedB){
      setLabel("ของชายและหญิง")
    } else if(checkedA&&checkedC){
      setLabel("ของชายและรวม")
    } else if(checkedB&&checkedC){
      setLabel("ของหญิงและรวม")
    } else if(checkedA){
      setLabel("ของชาย")
    } else if(checkedB){
      setLabel("ของหญิง")
    } else if(checkedC){
      setLabel("ของทั้งหมด")
    } else {
      setLabel("ของทั้งหมด")
    }
  },[checkedA,checkedB,checkedC])
  return (
    <React.Fragment>
      <div className="card-body">
        <div className="csv-link">
          {open !== 0 && (
            <CSVLink
              data={row}
              filename={
                "จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและชุมชน(ทั้งเพศชายและหญิง).csv"
              }
            >
              Download CSV
            </CSVLink>
          )}
        </div>
        <div ref={ref}>
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            color="primary"
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          ชาย
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          หญิง
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            color="primary"
            name="checkedC"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          รวม
          <Checkbox
            checked={openPaper}
            onChange={toggleChecked}
            color="primary"
            name="checkedC"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          เปอร์เซ็นต์
          {openPaper === false ? (
            <TableContainer component={Paper}>
              <Table className="table-report" aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={8}>จำนวนของผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและชุมชน {label}</StyledTableCell>
                </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">ชุมชน</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">ผอม</StyledTableCell>
                    <StyledTableCell align="center">ปกติ</StyledTableCell>
                    <StyledTableCell align="center">ท้วม</StyledTableCell>
                    <StyledTableCell align="center">อ้วน</StyledTableCell>
                    <StyledTableCell align="center">อ้วนมาก</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map((value) => {
                    console.log(value, "-------");
                    return (
                      <StyledTableRow>
                        <StyledTableCell>{value.ชุมชน}</StyledTableCell>
                        <StyledTableCell>
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            "ชาย"
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            "หญิง"
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            "รวม"
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              ชาย
                              <br />
                              รวม
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายผอม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงผอม}
                              <br />
                              {value.ดัชนีมวลกายรวมผอม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายผอม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงผอม}
                              <br />
                              {value.ดัชนีมวลกายรวมผอม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้ชายผอม
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้หญิงผอม
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.ดัชนีมวลกายรวมผอม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้หญิงผอม}
                              <br />
                              {value.ดัชนีมวลกายรวมผอม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายผอม}
                              <br />
                              {value.ดัชนีมวลกายรวมผอม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายผอม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงผอม}
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายปกติ}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงปกติ}
                              <br />
                              {value.ดัชนีมวลกายรวมปกติ}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายปกติ}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงปกติ}
                              <br />
                              {value.ดัชนีมวลกายรวมปกติ}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้ชายปกติ
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้หญิงปกติ
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.ดัชนีมวลกายรวมปกติ
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้หญิงปกติ}
                              <br />
                              {value.ดัชนีมวลกายรวมปกติ}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายปกติ}
                              <br />
                              {value.ดัชนีมวลกายรวมปกติ}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายปกติ}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงปกติ}
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายท้วม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงท้วม}
                              <br />
                              {value.ดัชนีมวลกายรวมท้วม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายท้วม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงท้วม}
                              <br />
                              {value.ดัชนีมวลกายรวมท้วม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้ชายท้วม
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้หญิงท้วม
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.ดัชนีมวลกายรวมท้วม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้หญิงท้วม}
                              <br />
                              {value.ดัชนีมวลกายรวมท้วม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายท้วม}
                              <br />
                              {value.ดัชนีมวลกายรวมท้วม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายท้วม}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงท้วม}
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วน}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วน}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วน}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วน}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วน}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วน}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้ชายอ้วน
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้หญิงอ้วน
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.ดัชนีมวลกายรวมอ้วน
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้หญิงอ้วน}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วน}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วน}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วน}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วน}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วน}
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วนมาก}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วนมาก}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้ชายอ้วนมาก
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.ดัชนีมวลกายผู้หญิงอ้วนมาก
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.ดัชนีมวลกายรวมอ้วนมาก
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้หญิงอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วนมาก}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายรวมอ้วนมาก}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.ดัชนีมวลกายผู้ชายอ้วนมาก}
                              <br />
                              {value.ดัชนีมวลกายผู้หญิงอ้วนมาก}
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer component={Paper}>
              <Table className="table-report" aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={8}>จำนวนร้อยละของผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและชุมชน {label}</StyledTableCell>
                </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">ชุมชน</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">ผอม</StyledTableCell>
                    <StyledTableCell align="center">ปกติ</StyledTableCell>
                    <StyledTableCell align="center">ท้วม</StyledTableCell>
                    <StyledTableCell align="center">อ้วน</StyledTableCell>
                    <StyledTableCell align="center">อ้วนมาก</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map((value) => {
                    console.log(value, "-------");
                    return (
                      <StyledTableRow>
                        <StyledTableCell>{value.ชุมชน}</StyledTableCell>
                        <StyledTableCell>
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            "ชาย"
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            "หญิง"
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            "รวม"
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              ชาย
                              <br />
                              รวม
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมผอม} %
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมผอม} %
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>{value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม} %</div>
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม} %
                            </div>
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            <div>{value.เปอร์เซ็นต์ดัชนีมวลกายรวมผอม} %</div>
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมผอม} %
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมผอม} %
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายผอม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงผอม} %
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ} %
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ} %
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ} %
                            </div>
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ} %
                            </div>
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            <div>{value.เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ} %</div>
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ} %
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมปกติ} %
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายปกติ} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงปกติ} %
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม} %
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม} %
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม} %
                            </div>
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม} %
                            </div>
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            <div>{value.เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม} %</div>
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม} %
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมท้วม} %
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายท้วม} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงท้วม} %
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน} %
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน} %
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน} %
                            </div>
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน} %
                            </div>
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            <div>{value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน} %</div>
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน}%
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน} %
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วน} %
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วน} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วน} %
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก}%
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก} %
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก}%
                            </div>
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก} %
                            </div>
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก} %
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก} %
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายรวมอ้วนมาก} %
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้ชายอ้วนมาก} %
                              <br />
                              {value.เปอร์เซ็นต์ดัชนีมวลกายผู้หญิงอ้วนมาก} %
                            </div>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart11() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
          จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับดัชนีมวลกายและชุมชน(ทั้งเพศชายและหญิง)
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
