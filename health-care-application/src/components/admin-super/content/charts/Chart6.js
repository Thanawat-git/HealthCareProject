import React, { useEffect, useState } from "react";
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
import { withStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import { EDUCATIONS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
// import { getDataChart6 } from "../../../../actions/charts.action";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { CSVLink } from "react-csv";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: "center",
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
  ระดับการศึกษา,
  ผู้ชาย6064,
  เปอร์เซ็นต์ผู้ชาย6064,
  ผู้หญิง6064,
  เปอร์เซ็นต์ผู้หญิง6064,
  รวม6064,
  เปอร์เซ็นต์รวม6064,
  ผู้ชาย6569,
  เปอร์เซ็นต์ผู้ชาย6569,
  ผู้หญิง6569,
  เปอร์เซ็นต์ผู้หญิง6569,
  รวม6569,
  เปอร์เซ็นต์รวม6569,
  ผู้ชาย7074,
  เปอร์เซ็นต์ผู้ชาย7074,
  ผู้หญิง7074,
  เปอร์เซ็นต์ผู้หญิง7074,
  รวม7074,
  เปอร์เซ็นต์รวม7074,
  ผู้ชาย7579,
  เปอร์เซ็นต์ผู้ชาย7579,
  ผู้หญิง7579,
  เปอร์เซ็นต์ผู้หญิง7579,
  รวม7579,
  เปอร์เซ็นต์รวม7579,
  ผู้ชาย8084,
  เปอร์เซ็นต์ผู้ชาย8084,
  ผู้หญิง8084,
  เปอร์เซ็นต์ผู้หญิง8084,
  รวม8084,
  เปอร์เซ็นต์รวม8084,
  ผู้ชาย8590,
  เปอร์เซ็นต์ผู้ชาย8590,
  ผู้หญิง8590,
  เปอร์เซ็นต์ผู้หญิง8590,
  รวม8590,
  เปอร์เซ็นต์รวม8590,
  ผู้ชาย9094,
  เปอร์เซ็นต์ผู้ชาย9094,
  ผู้หญิง9094,
  เปอร์เซ็นต์ผู้หญิง9094,
  รวม9094,
  เปอร์เซ็นต์รวม9094,
  ผู้ชาย95,
  เปอร์เซ็นต์ผู้ชาย95,
  ผู้หญิง95,
  เปอร์เซ็นต์ผู้หญิง95,
  รวม95,
  เปอร์เซ็นต์รวม95,
  รวมทั้งหมดผู้ชาย,
  เปอร์เซ็นต์รวมทั้งหมดผู้ชาย,
  รวมทั้งหมดผู้หญิง,
  เปอร์เซ็นต์รวมทั้งหมดผู้หญิง,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมด
) {
  return {
    ระดับการศึกษา,
    ผู้ชาย6064,
    เปอร์เซ็นต์ผู้ชาย6064,
    ผู้หญิง6064,
    เปอร์เซ็นต์ผู้หญิง6064,
    รวม6064,
    เปอร์เซ็นต์รวม6064,
    ผู้ชาย6569,
    เปอร์เซ็นต์ผู้ชาย6569,
    ผู้หญิง6569,
    เปอร์เซ็นต์ผู้หญิง6569,
    รวม6569,
    เปอร์เซ็นต์รวม6569,
    ผู้ชาย7074,
    เปอร์เซ็นต์ผู้ชาย7074,
    ผู้หญิง7074,
    เปอร์เซ็นต์ผู้หญิง7074,
    รวม7074,
    เปอร์เซ็นต์รวม7074,
    ผู้ชาย7579,
    เปอร์เซ็นต์ผู้ชาย7579,
    ผู้หญิง7579,
    เปอร์เซ็นต์ผู้หญิง7579,
    รวม7579,
    เปอร์เซ็นต์รวม7579,
    ผู้ชาย8084,
    เปอร์เซ็นต์ผู้ชาย8084,
    ผู้หญิง8084,
    เปอร์เซ็นต์ผู้หญิง8084,
    รวม8084,
    เปอร์เซ็นต์รวม8084,
    ผู้ชาย8590,
    เปอร์เซ็นต์ผู้ชาย8590,
    ผู้หญิง8590,
    เปอร์เซ็นต์ผู้หญิง8590,
    รวม8590,
    เปอร์เซ็นต์รวม8590,
    ผู้ชาย9094,
    เปอร์เซ็นต์ผู้ชาย9094,
    ผู้หญิง9094,
    เปอร์เซ็นต์ผู้หญิง9094,
    รวม9094,
    เปอร์เซ็นต์รวม9094,
    ผู้ชาย95,
    เปอร์เซ็นต์ผู้ชาย95,
    ผู้หญิง95,
    เปอร์เซ็นต์ผู้หญิง95,
    รวม95,
    เปอร์เซ็นต์รวม95,
    รวมทั้งหมดผู้ชาย,
    เปอร์เซ็นต์รวมทั้งหมดผู้ชาย,
    รวมทั้งหมดผู้หญิง,
    เปอร์เซ็นต์รวมทั้งหมดผู้หญิง,
    รวมทั้งหมด,
    เปอร์เซ็นต์รวมทั้งหมด,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [education, setEducation] = React.useState("ไม่ได้เรียนหนังสือ");
  const chart6Reducer = useSelector(({ chart6Reducer }) => chart6Reducer);
  const dispatch = useDispatch();
  const [openPaper, setopenPaper] = React.useState(false);
  const {
    Uneducate,
    SecondarySchool,
    HighSchool,
    TechnicalCollege,
    BachelorDegrees,
    MasterOrDoctorDegrees,
  } = chart6Reducer.results;

  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  const listEducate = [
    Uneducate,
    SecondarySchool,
    HighSchool,
    TechnicalCollege,
    BachelorDegrees,
    MasterOrDoctorDegrees,
  ];

  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("communi.length ", listEducate.length);
    if (chart6Reducer.isFetching === false) {
      for (let i = 0; i < listEducate.length; i++) {
        rows.push(
          createData(
            Object.keys(chart6Reducer.results)[i],
            listEducate[i].g6064.ElderMale,
            listEducate[i].g6064.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g6064.ElderPerMale,
            listEducate[i].g6064.ElderFemale,
            listEducate[i].g6064.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g6064.ElderPerFemale,
            listEducate[i].g6064.Elder,
            listEducate[i].g6064.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g6064.ElderPer,

            listEducate[i].g6569.ElderMale,
            listEducate[i].g6569.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g6569.ElderPerMale,
            listEducate[i].g6569.ElderFemale,
            listEducate[i].g6569.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g6569.ElderPerFemale,
            listEducate[i].g6569.Elder,
            listEducate[i].g6569.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g6569.ElderPer,

            listEducate[i].g7074.ElderMale,
            listEducate[i].g7074.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g7074.ElderPerMale,
            listEducate[i].g7074.ElderFemale,
            listEducate[i].g7074.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g7074.ElderPerFemale,
            listEducate[i].g7074.Elder,
            listEducate[i].g7074.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g7074.ElderPer,

            listEducate[i].g7579.ElderMale,
            listEducate[i].g7579.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g7579.ElderPerMale,
            listEducate[i].g7579.ElderFemale,
            listEducate[i].g7579.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g7579.ElderPerFemale,
            listEducate[i].g7579.Elder,
            listEducate[i].g7579.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g7579.ElderPer,

            listEducate[i].g8084.ElderMale,
            listEducate[i].g8084.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g8084.ElderPerMale,
            listEducate[i].g8084.ElderFemale,
            listEducate[i].g8084.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g8084.ElderPerFemale,
            listEducate[i].g8084.Elder,
            listEducate[i].g8084.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g8084.ElderPer,

            listEducate[i].g8589.ElderMale,
            listEducate[i].g8589.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g8589.ElderPerMale,
            listEducate[i].g8589.ElderFemale,
            listEducate[i].g8589.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g8589.ElderPerFemale,
            listEducate[i].g8589.Elder,
            listEducate[i].g8589.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g8589.ElderPer,

            listEducate[i].g9094.ElderMale,
            listEducate[i].g9094.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g9094.ElderPerMale,
            listEducate[i].g9094.ElderFemale,
            listEducate[i].g9094.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g9094.ElderPerFemale,
            listEducate[i].g9094.Elder,
            listEducate[i].g9094.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g9094.ElderPer,

            listEducate[i].g95.ElderMale,
            listEducate[i].g95.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].g95.ElderPerMale,
            listEducate[i].g95.ElderFemale,
            listEducate[i].g95.ElderPerFemale === "NaN"
              ? "0"
              : listEducate[i].g95.ElderPerFemale,
            listEducate[i].g95.Elder,
            listEducate[i].g95.ElderPer === "NaN"
              ? "0"
              : listEducate[i].g95.ElderPer,

            listEducate[i].summary.ElderMale,
            listEducate[i].summary.ElderPerMale === "NaN"
              ? "0"
              : listEducate[i].summary.ElderPerMale,
            listEducate[i].summary.ElderFemale,
            listEducate[i].summary.ElderPerFemale === "NaN"
              ? "0 "
              : listEducate[i].summary.ElderPerFemale,
            listEducate[i].summary.Elder,
            listEducate[i].summary.ElderPer === "NaN"
              ? "0"
              : listEducate[i].summary.ElderPer
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart6Reducer.isFetching]);

  console.log(rows);
  return (
    <React.Fragment>
      <div className="card-body">
        <div className="row justify-content-between csv-link-select">
          <CSVLink
            data={rows}
            filename={"จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับการศึกษา.csv"}
          >
            Download CSV
          </CSVLink>
          <FormControlLabel
            control={
              <Switch
                size="medium"
                checked={openPaper}
                onChange={toggleChecked}
              />
            }
            label="คิดเป็นร้อยละ"
          />
        </div>
        <br />
        <div ref={ref}>
          
          {openPaper ? (
            <TableContainer component={Paper}>
              <Table className="table-report table-per-padding" aria-label="customized table">
                {/*%%%%%%%%%%%%%%%%%%%%% */}
                <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={12}>
                  จำนวนร้อยละของผู้สูงอายุจำแนกตามระดับการศึกษา ช่วงอายุ และเพศ
                  </StyledTableCell>
                </TableRow>
                  <TableRow>
                    <StyledTableCell align="center" colSpan={12}>
                      ช่วงอายุ
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">
                      ระดับการศึกษา
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                      60-64
                    </StyledTableCell>
                    <StyledTableCell align="center">65-69</StyledTableCell>
                    <StyledTableCell align="center">70-74</StyledTableCell>
                    <StyledTableCell align="center">75-79</StyledTableCell>
                    <StyledTableCell align="center">80-84</StyledTableCell>
                    <StyledTableCell align="center">85-89</StyledTableCell>
                    <StyledTableCell align="center">90-94</StyledTableCell>
                    <StyledTableCell align="center">95+</StyledTableCell>
                    <StyledTableCell align="center">รวม</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.ระดับการศึกษา}>
                      <StyledTableCell component="th" scope="row">
                        {row.ระดับการศึกษา == "Uneducate"
                          ? "ไม่ได้เรียนหนังสือ"
                          : row.ระดับการศึกษา == "SecondarySchool"
                          ? "ประถมศึกษา"
                          : row.ระดับการศึกษา == "HighSchool"
                          ? "มัธยมศึกษา"
                          : row.ระดับการศึกษา == "TechnicalCollege"
                          ? "อนุปริญญา"
                          : row.ระดับการศึกษา == "BachelorDegrees"
                          ? "ปริญญาตรี"
                          : row.ระดับการศึกษา == "MasterOrDoctorDegrees"
                          ? "สูงกว่าปริญญาตรี"
                          : ""}
                      </StyledTableCell>
                      <StyledTableCell align="center" colSpan={2}>
                        ชาย <br /> หญิง <br /> รวม
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {/* 6064 */}
                        {row.เปอร์เซ็นต์ผู้ชาย6064} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง6064} %
                        <br />
                        {row.เปอร์เซ็นต์รวม6064} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย6569} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง6569} %
                        <br />
                        {row.เปอร์เซ็นต์รวม6569} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย7074} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง7074} %
                        <br />
                        {row.เปอร์เซ็นต์รวม7074} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย7579} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง7579} %
                        <br />
                        {row.เปอร์เซ็นต์รวม7579} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย8084} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง8084} %
                        <br />
                        {row.เปอร์เซ็นต์รวม8084} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย8590} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง8590} %
                        <br />
                        {row.เปอร์เซ็นต์รวม8590} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย9094} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง9094} %
                        <br />
                        {row.เปอร์เซ็นต์รวม9094} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์ผู้ชาย95} %
                        <br />
                        {row.เปอร์เซ็นต์ผู้หญิง95} %
                        <br />
                        {row.เปอร์เซ็นต์รวม95} %
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.เปอร์เซ็นต์รวมทั้งหมดผู้ชาย} %
                        <br />
                        {row.เปอร์เซ็นต์รวมทั้งหมดผู้หญิง} %
                        <br />
                        {row.เปอร์เซ็นต์รวมทั้งหมด} %
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer component={Paper}>
              <Table className="table-report" aria-label="customized table">
                <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={12}>
                  จำนวนของผู้สูงอายุจำแนกตามระดับการศึกษา ช่วงอายุ และเพศ
                  </StyledTableCell>
                </TableRow>
                  <TableRow>
                    <StyledTableCell align="center" colSpan={12}>
                      ช่วงอายุ
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell align="center">
                      ระดับการศึกษา
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                      60-64
                    </StyledTableCell>

                    <StyledTableCell align="center">65-69</StyledTableCell>
                    <StyledTableCell align="center">70-74</StyledTableCell>
                    <StyledTableCell align="center">75-79</StyledTableCell>
                    <StyledTableCell align="center">80-84</StyledTableCell>
                    <StyledTableCell align="center">85-89</StyledTableCell>
                    <StyledTableCell align="center">90-94</StyledTableCell>
                    <StyledTableCell align="center">95+</StyledTableCell>
                    <StyledTableCell align="center">รวม</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chart6Reducer.isFetching === false 
                    ?rows.map((row) => (
                    <StyledTableRow key={row.ระดับการศึกษา}>
                      <StyledTableCell component="th" scope="row">
                        {row.ระดับการศึกษา == "Uneducate"
                          ? "ไม่ได้เรียนหนังสือ"
                          : row.ระดับการศึกษา == "SecondarySchool"
                          ? "ประถมศึกษา"
                          : row.ระดับการศึกษา == "HighSchool"
                          ? "มัธยมศึกษา"
                          : row.ระดับการศึกษา == "TechnicalCollege"
                          ? "อนุปริญญา"
                          : row.ระดับการศึกษา == "BachelorDegrees"
                          ? "ปริญญาตรี"
                          : row.ระดับการศึกษา == "MasterOrDoctorDegrees"
                          ? "สูงกว่าปริญญาตรี"
                          : ""}
                      </StyledTableCell>
                      <StyledTableCell align="center" colSpan={2}>
                        ชาย <br /> หญิง <br /> รวม
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {" "}
                        {/* 6064 */}
                        {row.ผู้ชาย6064}
                        <br />
                        {row.ผู้หญิง6064}
                        <br />
                        {row.รวม6064}{" "}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย6569}
                        <br />
                        {row.ผู้หญิง6569}
                        <br />
                        {row.รวม6569}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย7074}
                        <br />
                        {row.ผู้หญิง7074}
                        <br />
                        {row.รวม7074}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย7579}
                        <br />
                        {row.ผู้หญิง7579}
                        <br />
                        {row.รวม7579}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย8084} <br />
                        {row.ผู้หญิง8084}
                        <br />
                        {row.รวม8084}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย8590}
                        <br />
                        {row.ผู้หญิง8590}
                        <br />
                        {row.รวม8590}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย9094}
                        <br />
                        {row.ผู้หญิง9094}
                        <br />
                        {row.รวม9094}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.ผู้ชาย95}
                        <br />
                        {row.ผู้หญิง95}
                        <br />
                        {row.รวม95}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.รวมทั้งหมดผู้ชาย}
                        <br />
                        {row.รวมทั้งหมดผู้หญิง}
                        <br />
                        {row.รวมทั้งหมด}
                      </StyledTableCell>
                    </StyledTableRow>
                  )): <React.Fragment>
                  <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  </React.Fragment>
                  }
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart6() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
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
              <i className="fas fa-plus"></i>
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
