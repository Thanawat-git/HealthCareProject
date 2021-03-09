import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tooltip,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Select } from "@material-ui/core";
import { TREATMENT, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import Skeleton from '@material-ui/lab/Skeleton';
import { useDispatch, useSelector } from "react-redux";
import { getDataChart7 } from "../../../../actions/charts.action";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { CSVLink } from "react-csv"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign:"center",
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
  สิทธิการรักษา,
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
  ผู้ชายg8589,
  เปอร์เซ็นต์ผู้ชายg8589,
  ผู้หญิงg8589,
  เปอร์เซ็นต์ผู้หญิงg8589,
  รวมg8589,
  เปอร์เซ็นต์รวมg8589,
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
  
) {
  return {
    สิทธิการรักษา,
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
    ผู้ชายg8589,
    เปอร์เซ็นต์ผู้ชายg8589,
    ผู้หญิงg8589,
    เปอร์เซ็นต์ผู้หญิงg8589,
    รวมg8589,
    เปอร์เซ็นต์รวมg8589,
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
  const [treatment, setTreatment,] = React.useState("เบิกต้นสังกัด");
  const [openPaper, setopenPaper] = React.useState(false);
  const chart7Reducer = useSelector(({ chart7Reducer }) => chart7Reducer);
  const {
    Affiliation,
    Yourself,
    GoldCard,
    DisabledCard,
    SocialCard,
    Other,
  } = chart7Reducer.results;
  const dispatch = useDispatch();
  const listtreatment = [
    Affiliation,
    Yourself,
    GoldCard,
    DisabledCard,
    SocialCard,
    Other,
  ];

  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("listtreatment.length ", listtreatment.length);
    if (chart7Reducer.isFetching === false) {
      for (let i = 0; i < listtreatment.length; i++) {
        rows.push(
          createData(
            Object.keys(chart7Reducer.results)[i],
            listtreatment[i].g6064.ElderMale,
            listtreatment[i].g6064.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g6064.ElderPerMale,
            listtreatment[i].g6064.ElderFemale,
            listtreatment[i].g6064.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g6064.ElderPerFemale,
            listtreatment[i].g6064.Elder,
            listtreatment[i].g6064.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g6064.ElderPer,

            listtreatment[i].g6569.ElderMale,
            listtreatment[i].g6569.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g6569.ElderPerMale,
            listtreatment[i].g6569.ElderFemale,
            listtreatment[i].g6569.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g6569.ElderPerFemale,
            listtreatment[i].g6569.Elder,
            listtreatment[i].g6569.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g6569.ElderPer,

            listtreatment[i].g7074.ElderMale,
            listtreatment[i].g7074.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g7074.ElderPerMale,
            listtreatment[i].g7074.ElderFemale,
            listtreatment[i].g7074.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g7074.ElderPerFemale,
            listtreatment[i].g7074.Elder,
            listtreatment[i].g7074.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g7074.ElderPer,

            listtreatment[i].g7579.ElderMale,
            listtreatment[i].g7579.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g7579.ElderPerMale,
            listtreatment[i].g7579.ElderFemale,
            listtreatment[i].g7579.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g7579.ElderPerFemale,
            listtreatment[i].g7579.Elder,
            listtreatment[i].g7579.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g7579.ElderPer,

            listtreatment[i].g8084.ElderMale,
            listtreatment[i].g8084.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g8084.ElderPerMale,
            listtreatment[i].g8084.ElderFemale,
            listtreatment[i].g8084.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g8084.ElderPerFemale,
            listtreatment[i].g8084.Elder,
            listtreatment[i].g8084.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g8084.ElderPer,

            listtreatment[i].g8589.ElderMale,
            listtreatment[i].g8589.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g8589.ElderPerMale,
            listtreatment[i].g8589.ElderFemale,
            listtreatment[i].g8589.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g8589.ElderPerFemale,
            listtreatment[i].g8589.Elder,
            listtreatment[i].g8589.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g8589.ElderPer,

            listtreatment[i].g9094.ElderMale,
            listtreatment[i].g9094.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g9094.ElderPerMale,
            listtreatment[i].g9094.ElderFemale,
            listtreatment[i].g9094.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g9094.ElderPerFemale,
            listtreatment[i].g9094.Elder,
            listtreatment[i].g9094.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g9094.ElderPer,

            listtreatment[i].g95.ElderMale,
            listtreatment[i].g95.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].g95.ElderPerMale,
            listtreatment[i].g95.ElderFemale,
            listtreatment[i].g95.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].g95.ElderPerFemale,
            listtreatment[i].g95.Elder,
            listtreatment[i].g95.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].g95.ElderPer,

            listtreatment[i].summary.ElderMale,
            listtreatment[i].summary.ElderPerMale === "NaN"
              ? "0.0"
              : listtreatment[i].summary.ElderPerMale,
            listtreatment[i].summary.ElderFemale,
            listtreatment[i].summary.ElderPerFemale === "NaN"
              ? "0.0"
              : listtreatment[i].summary.ElderPerFemale,
            listtreatment[i].summary.Elder,
            listtreatment[i].summary.ElderPer === "NaN"
              ? "0.0"
              : listtreatment[i].summary.ElderPer
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart7Reducer.isFetching]);

  console.log(rows);

  const handleChange = (e) => {
    setTreatment(e.target.value);
    dispatch(getDataChart7(e.target.value));
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  return (   
     <React.Fragment>
     <div className="card-body">  
     <div className="row justify-content-between csv-link-select">
    <CSVLink 
    data={rows}
    filename={
      "จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษาช่วงอายุและเพศ.csv"
    }
    > ดาวน์โหลดรายงาน </CSVLink>
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

    <div ref={ref}>
        
        {openPaper ? (
          <TableContainer component={Paper}>
            <Table className="table-report table-per-padding" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={11}>
                  จำนวนร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา ช่วงอายุ และเพศ
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    สิทธิการรักษา
                  </StyledTableCell>
                  <StyledTableCell>ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
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
                  <StyledTableRow key={row.สิทธิการรักษา}>
                    <StyledTableCell  component="th" scope="row">
                    {row.สิทธิการรักษา == "Affiliation"
                          ? "เบิกต้นสังกัด"
                          : row.สิทธิการรักษา == "Yourself"
                          ? "ชำระเงินเอง"
                          : row.สิทธิการรักษา == "GoldCard"
                          ? "บัตรทอง"
                          : row.สิทธิการรักษา == "DisabledCard"
                          ? "บัตรผู้พิการ"
                          : row.สิทธิการรักษา == "SocialCard"
                          ? "บัตรประกันสังคม"
                          : row.สิทธิการรักษา == "Other"
                          ? "อื่นๆ"
                          : ""}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="right">  {/* 6064 */}
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
                      {row.เปอร์เซ็นต์ผู้ชายg8589} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิงg8589} %
                      <br />
                      {row.เปอร์เซ็นต์รวมg8589} %
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
                  <StyledTableCell align="center" colSpan={11}>
                  จำนวนของผู้สูงอายุจำแนกตามสิทธิการรักษา ช่วงอายุ และเพศ
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    สิทธิการรักษา
                  </StyledTableCell>
                  <StyledTableCell>ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
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
                {chart7Reducer.isFetching === false 
                    ?rows.map((row) => (
                  <StyledTableRow key={row.สิทธิการรักษา}>
                    <StyledTableCell  component="th" scope="row">
                      {row.สิทธิการรักษา == "Affiliation"
                          ? "เบิกต้นสังกัด"
                          : row.สิทธิการรักษา == "Yourself"
                          ? "ชำระเงินเอง"
                          : row.สิทธิการรักษา == "GoldCard"
                          ? "บัตรทอง"
                          : row.สิทธิการรักษา == "DisabledCard"
                          ? "บัตรผู้พิการ"
                          : row.สิทธิการรักษา == "SocialCard"
                          ? "บัตรประกันสังคม"
                          : row.สิทธิการรักษา == "Other"
                          ? "อื่นๆ"
                          : ""}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="right">  {/* 6064 */}
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
                      {row.ผู้ชายg8589} 
                      <br />
                      {row.ผู้หญิงg8589}
                      <br />
                      {row.รวมg8589}
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
                      {row.รวมทั้งหมด}</StyledTableCell>
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

export default function Chart7() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
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
