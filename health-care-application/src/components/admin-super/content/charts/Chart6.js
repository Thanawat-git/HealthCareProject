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
import { Chart } from "react-google-charts";
import { EDUCATIONS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart6 } from "../../../../actions/charts.action";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: "center",
    border: 1,
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
  name,
  numMale,
  numFemale,
  sum,
  Male6569,
  Female6569,
  sum6569,
  Male7074,
  Female7074,
  sum7074,
  Male7579,
  Female7579,
  sum7579,
  Male8084,
  Female8084,
  sum8084,
  Male8590,
  Female8590,
  sum8590,
  Male9094,
  Female9094,
  sum9094,
  Male95,
  Female95,
  sum95,
  sumAllM,
  sumAllF,
  sumAll,
  sumAllPerM,
  sumAllPerF,
  sumAllPer,
  PerMale,
  PerFemale,
  Persum,
  PerMale6569,
  PerFemale6569,
  Persum6569,
  PerMale7074,
  PerFemale7074,
  Persum7074,
  PerMale7579,
  PerFemale7579,
  Persum7579,
  PerMale8084,
  PerFemale8084,
  Persum8084,
  PerMale8590,
  PerFemale8590,
  Persum8590,
  PerMale9094,
  PerFemale9094,
  Persum9094,
  PerMale95,
  PerFemale95,
  Persum95,


) {
  return {
    name,
    numMale,
    numFemale,
    sum,
    Male6569,
    Female6569,
    sum6569,
    Male7074,
    Female7074,
    sum7074,
    Male7579,
    Female7579,
    sum7579,
    Male8084,
    Female8084,
    sum8084,
    Male8590,
    Female8590,
    sum8590,
    Male9094,
    Female9094,
    sum9094,
    Male95,
    Female95,
    sum95,
    sumAllM,
    sumAllF,
    sumAll,
    sumAllPerM,
    sumAllPerF,
    sumAllPer,
    PerMale,
  PerFemale,
  Persum,
  PerMale6569,
  PerFemale6569,
  Persum6569,
  PerMale7074,
  PerFemale7074,
  Persum7074,
  PerMale7579,
  PerFemale7579,
  Persum7579,
  PerMale8084,
  PerFemale8084,
  Persum8084,
  PerMale8590,
  PerFemale8590,
  Persum8590,
  PerMale9094,
  PerFemale9094,
  Persum9094,
  PerMale95,
  PerFemale95,
  Persum95,
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
  const handleChange = (e) => {
    setEducation(e.target.value);
    dispatch(getDataChart6(e.target.value));
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };

  const rows = [
     createData(
      ` ไม่ได้เรียนหนังสือ `,
      Uneducate.g6064.ElderMale,
      Uneducate.g6064.ElderFemale,
      Uneducate.g6064.Elder,

      Uneducate.g6569.ElderMale,
      Uneducate.g6569.ElderFemale,
      Uneducate.g6569.Elder,

      Uneducate.g7074.ElderMale,
      Uneducate.g7074.ElderFemale,
      Uneducate.g7074.Elder,

      Uneducate.g7579.ElderMale,
      Uneducate.g7579.ElderFemale,
      Uneducate.g7579.Elder,

      Uneducate.g8084.ElderMale,
      Uneducate.g8084.ElderFemale,
      Uneducate.g8084.Elder,

      Uneducate.g8589.ElderMale,
      Uneducate.g8589.ElderFemale,
      Uneducate.g8589.Elder,

      Uneducate.g9094.ElderMale,
      Uneducate.g9094.ElderFemale,
      Uneducate.g9094.Elder,

      Uneducate.g95.ElderMale,
      Uneducate.g95.ElderFemale,
      Uneducate.g95.Elder,

      Uneducate.summary.ElderMale,
      Uneducate.summary.ElderFemale,
      Uneducate.summary.Elder,//sumAll

      `${Uneducate.summary.ElderPerMale} %`,
      `${Uneducate.summary.ElderPerFemale} %`,
      `${Uneducate.summary.ElderPer} %`,


      `${Uneducate.g6064.ElderPerMale} %`,
      `${Uneducate.g6064.ElderPerFemale} %`,
      `${Uneducate.g6064.ElderPer} %`,

     `${ Uneducate.g6569.ElderPerMale} %`,
     `${ Uneducate.g6569.ElderPerFemale} %`,
     `${ Uneducate.g6569.ElderPer} %`,

      `${Uneducate.g7074.ElderPerMale} %`,
      `${Uneducate.g7074.ElderPerFemale} %`,
      `${Uneducate.g7074.ElderPer} %`,

      `${Uneducate.g7579.ElderPerMale} %`,
      `${Uneducate.g7579.ElderPerFemale} %`,
      `${Uneducate.g7579.ElderPer} %`,

      `${Uneducate.g8084.ElderPerMale} %`,
      `${Uneducate.g8084.ElderPerFemale} %`,
      `${Uneducate.g8084.ElderPer} %`,

      `${Uneducate.g8589.ElderPerMale} %`,
      `${Uneducate.g8589.ElderPerFemale} %`,
      `${Uneducate.g8589.ElderPer} %`,

      `${Uneducate.g9094.ElderPerMale} %`,
      `${Uneducate.g9094.ElderPerFemale} %`,
      `${Uneducate.g9094.ElderPer} %`,

      `${Uneducate.g95.ElderPerMale} %`,
      `${Uneducate.g95.ElderPerFemale} %`,
     `${ Uneducate.g95.ElderPer} %`,

    ),
    createData(
      " ประถมศึกษา",
      SecondarySchool.g6064.ElderMale,
      SecondarySchool.g6064.ElderFemale,
      SecondarySchool.g6064.Elder,

      SecondarySchool.g6569.ElderMale,
      SecondarySchool.g6569.ElderFemale,
      SecondarySchool.g6569.Elder,

      SecondarySchool.g7074.ElderMale,
      SecondarySchool.g7074.ElderFemale,
      SecondarySchool.g7074.Elder,

      SecondarySchool.g7579.ElderMale,
      SecondarySchool.g7579.ElderFemale,
      SecondarySchool.g7579.Elder,

      SecondarySchool.g8084.ElderMale,
      SecondarySchool.g8084.ElderFemale,
      SecondarySchool.g8084.Elder,

      SecondarySchool.g8589.ElderMale,
      SecondarySchool.g8589.ElderFemale,
      SecondarySchool.g8589.Elder,

      SecondarySchool.g9094.ElderMale,
      SecondarySchool.g9094.ElderFemale,
      SecondarySchool.g9094.Elder,

      SecondarySchool.g95.ElderMale,
      SecondarySchool.g95.ElderFemale,
      SecondarySchool.g95.Elder,

      SecondarySchool.summary.ElderMale,
      SecondarySchool.summary.ElderFemale,
      SecondarySchool.summary.Elder,

      `${SecondarySchool.summary.ElderPerMale} %`,
      `${SecondarySchool.summary.ElderPerFemale} %`,
      `${SecondarySchool.summary.ElderPer} %`,

      `${SecondarySchool.g6064.ElderPerMale} %`,
      `${SecondarySchool.g6064.ElderPerFemale} %`,
      `${SecondarySchool.g6064.ElderPer} %`,

     `${ SecondarySchool.g6569.ElderPerMale} %`,
     `${ SecondarySchool.g6569.ElderPerFemale} %`,
     `${ SecondarySchool.g6569.ElderPer} %`,

      `${SecondarySchool.g7074.ElderPerMale} %`,
      `${SecondarySchool.g7074.ElderPerFemale} %`,
      `${SecondarySchool.g7074.ElderPer} %`,

      `${SecondarySchool.g7579.ElderPerMale} %`,
      `${SecondarySchool.g7579.ElderPerFemale} %`,
      `${SecondarySchool.g7579.ElderPer} %`,

      `${SecondarySchool.g8084.ElderPerMale} %`,
      `${SecondarySchool.g8084.ElderPerFemale} %`,
      `${SecondarySchool.g8084.ElderPer} %`,

      `${SecondarySchool.g8589.ElderPerMale} %`,
      `${SecondarySchool.g8589.ElderPerFemale} %`,
      `${SecondarySchool.g8589.ElderPer} %`,

      `${SecondarySchool.g9094.ElderPerMale} %`,
      `${SecondarySchool.g9094.ElderPerFemale} %`,
      `${SecondarySchool.g9094.ElderPer} %`,

      `${SecondarySchool.g95.ElderPerMale} %`,
      `${SecondarySchool.g95.ElderPerFemale} %`,
     `${ SecondarySchool.g95.ElderPer} %`,
    ),
    createData(
      " มัธยมศึกษา",
      HighSchool.g6064.ElderMale,
      HighSchool.g6064.ElderFemale,
      HighSchool.g6064.Elder,

      HighSchool.g6569.ElderMale,
      HighSchool.g6569.ElderFemale,
      HighSchool.g6569.Elder,

      HighSchool.g7074.ElderMale,
      HighSchool.g7074.ElderFemale,
      HighSchool.g7074.Elder,

      HighSchool.g7579.ElderMale,
      HighSchool.g7579.ElderFemale,
      HighSchool.g7579.Elder,

      HighSchool.g8084.ElderMale,
      HighSchool.g8084.ElderFemale,
      HighSchool.g8084.Elder,

      HighSchool.g8589.ElderMale,
      HighSchool.g8589.ElderFemale,
      HighSchool.g8589.Elder,

      HighSchool.g9094.ElderMale,
      HighSchool.g9094.ElderFemale,
      HighSchool.g9094.Elder,

      HighSchool.g95.ElderMale,
      HighSchool.g95.ElderFemale,
      HighSchool.g95.Elder,

      HighSchool.summary.ElderMale,
      HighSchool.summary.ElderFemale,
      HighSchool.summary.Elder,

    `${HighSchool.summary.ElderPerMale} %`,
     `${HighSchool.summary.ElderPerFemale} %`,
     `${HighSchool.summary.ElderPer} %`,

      `${HighSchool.g6064.ElderPerMale} %`,
      `${HighSchool.g6064.ElderPerFemale} %`,
      `${HighSchool.g6064.ElderPer} %`,

     `${ HighSchool.g6569.ElderPerMale} %`,
     `${ HighSchool.g6569.ElderPerFemale} %`,
     `${ HighSchool.g6569.ElderPer} %`,

      `${HighSchool.g7074.ElderPerMale} %`,
      `${HighSchool.g7074.ElderPerFemale} %`,
      `${HighSchool.g7074.ElderPer} %`,

      `${HighSchool.g7579.ElderPerMale} %`,
      `${HighSchool.g7579.ElderPerFemale} %`,
      `${HighSchool.g7579.ElderPer} %`,

      `${HighSchool.g8084.ElderPerMale} %`,
      `${HighSchool.g8084.ElderPerFemale} %`,
      `${HighSchool.g8084.ElderPer} %`,

      `${HighSchool.g8589.ElderPerMale} %`,
      `${HighSchool.g8589.ElderPerFemale} %`,
      `${HighSchool.g8589.ElderPer} %`,

      `${HighSchool.g9094.ElderPerMale} %`,
      `${HighSchool.g9094.ElderPerFemale} %`,
      `${HighSchool.g9094.ElderPer} %`,

      `${HighSchool.g95.ElderPerMale} %`,
      `${HighSchool.g95.ElderPerFemale} %`,
     `${ HighSchool.g95.ElderPer} %`,
    ),
    createData(
      " อนุปริญญา/ปวช./ปวส.",
      TechnicalCollege.g6064.ElderMale,
      TechnicalCollege.g6064.ElderFemale,
      TechnicalCollege.g6064.Elder,

      TechnicalCollege.g6569.ElderMale,
      TechnicalCollege.g6569.ElderFemale,
      TechnicalCollege.g6569.Elder,

      TechnicalCollege.g7074.ElderMale,
      TechnicalCollege.g7074.ElderFemale,
      TechnicalCollege.g7074.Elder,

      TechnicalCollege.g7579.ElderMale,
      TechnicalCollege.g7579.ElderFemale,
      TechnicalCollege.g7579.Elder,

      TechnicalCollege.g8084.ElderMale,
      TechnicalCollege.g8084.ElderFemale,
      TechnicalCollege.g8084.Elder,

      TechnicalCollege.g8589.ElderMale,
      TechnicalCollege.g8589.ElderFemale,
      TechnicalCollege.g8589.Elder,

      TechnicalCollege.g9094.ElderMale,
      TechnicalCollege.g9094.ElderFemale,
      TechnicalCollege.g9094.Elder,

      TechnicalCollege.g95.ElderMale,
      TechnicalCollege.g95.ElderFemale,
      TechnicalCollege.g95.Elder,

      TechnicalCollege.summary.ElderMale,
      TechnicalCollege.summary.ElderFemale,
      TechnicalCollege.summary.Elder,

      `${TechnicalCollege.summary.ElderPerMale} %`,
      `${TechnicalCollege.summary.ElderPerFemale} %`,
      `${TechnicalCollege.summary.ElderPer} %`,

      `${TechnicalCollege.g6064.ElderPerMale} %`,
      `${TechnicalCollege.g6064.ElderPerFemale} %`,
      `${TechnicalCollege.g6064.ElderPer} %`,

     `${ TechnicalCollege.g6569.ElderPerMale} %`,
     `${ TechnicalCollege.g6569.ElderPerFemale} %`,
     `${ TechnicalCollege.g6569.ElderPer} %`,

      `${TechnicalCollege.g7074.ElderPerMale} %`,
      `${TechnicalCollege.g7074.ElderPerFemale} %`,
      `${TechnicalCollege.g7074.ElderPer} %`,

      `${TechnicalCollege.g7579.ElderPerMale} %`,
      `${TechnicalCollege.g7579.ElderPerFemale} %`,
      `${TechnicalCollege.g7579.ElderPer} %`,

      `${TechnicalCollege.g8084.ElderPerMale} %`,
      `${TechnicalCollege.g8084.ElderPerFemale} %`,
      `${TechnicalCollege.g8084.ElderPer} %`,

      `${TechnicalCollege.g8589.ElderPerMale} %`,
      `${TechnicalCollege.g8589.ElderPerFemale} %`,
      `${TechnicalCollege.g8589.ElderPer} %`,

      `${TechnicalCollege.g9094.ElderPerMale} %`,
      `${TechnicalCollege.g9094.ElderPerFemale} %`,
      `${TechnicalCollege.g9094.ElderPer} %`,

      `${TechnicalCollege.g95.ElderPerMale} %`,
      `${TechnicalCollege.g95.ElderPerFemale} %`,
     `${ TechnicalCollege.g95.ElderPer} %`,
    ),
    createData(
      " ปริญญาตรี",
      BachelorDegrees.g6064.ElderMale,
      BachelorDegrees.g6064.ElderFemale,
      BachelorDegrees.g6064.Elder,

      BachelorDegrees.g6569.ElderMale,
      BachelorDegrees.g6569.ElderFemale,
      BachelorDegrees.g6569.Elder,

      BachelorDegrees.g7074.ElderMale,
      BachelorDegrees.g7074.ElderFemale,
      BachelorDegrees.g7074.Elder,

      BachelorDegrees.g7579.ElderMale,
      BachelorDegrees.g7579.ElderFemale,
      BachelorDegrees.g7579.Elder,

      BachelorDegrees.g8084.ElderMale,
      BachelorDegrees.g8084.ElderFemale,
      BachelorDegrees.g8084.Elder,

      BachelorDegrees.g8589.ElderMale,
      BachelorDegrees.g8589.ElderFemale,
      BachelorDegrees.g8589.Elder,

      BachelorDegrees.g9094.ElderMale,
      BachelorDegrees.g9094.ElderFemale,
      BachelorDegrees.g9094.Elder,

      BachelorDegrees.g95.ElderMale,
      BachelorDegrees.g95.ElderFemale,
      BachelorDegrees.g95.Elder,
    
      BachelorDegrees.summary.ElderMale,
      BachelorDegrees.summary.ElderFemale,
      BachelorDegrees.summary.Elder,

      `${BachelorDegrees.summary.ElderPerMale} %`,
      `${BachelorDegrees.summary.ElderPerFemale} %`,
      `${BachelorDegrees.summary.ElderPer} %`,

      `${BachelorDegrees.g6064.ElderPerMale} %`,
      `${BachelorDegrees.g6064.ElderPerFemale} %`,
      `${BachelorDegrees.g6064.ElderPer} %`,

     `${ BachelorDegrees.g6569.ElderPerMale} %`,
     `${ BachelorDegrees.g6569.ElderPerFemale} %`,
     `${ BachelorDegrees.g6569.ElderPer} %`,

      `${BachelorDegrees.g7074.ElderPerMale} %`,
      `${BachelorDegrees.g7074.ElderPerFemale} %`,
      `${BachelorDegrees.g7074.ElderPer} %`,

      `${BachelorDegrees.g7579.ElderPerMale} %`,
      `${BachelorDegrees.g7579.ElderPerFemale} %`,
      `${BachelorDegrees.g7579.ElderPer} %`,

      `${BachelorDegrees.g8084.ElderPerMale} %`,
      `${BachelorDegrees.g8084.ElderPerFemale} %`,
      `${BachelorDegrees.g8084.ElderPer} %`,

      `${BachelorDegrees.g8589.ElderPerMale} %`,
      `${BachelorDegrees.g8589.ElderPerFemale} %`,
      `${BachelorDegrees.g8589.ElderPer} %`,

      `${BachelorDegrees.g9094.ElderPerMale} %`,
      `${BachelorDegrees.g9094.ElderPerFemale} %`,
      `${BachelorDegrees.g9094.ElderPer} %`,

      `${BachelorDegrees.g95.ElderPerMale} %`,
      `${BachelorDegrees.g95.ElderPerFemale} %`,
     `${ BachelorDegrees.g95.ElderPer} %`,
    ),
    createData(
      " สูงกว่าปริญญาตรี",
      MasterOrDoctorDegrees.g6064.ElderMale,
      MasterOrDoctorDegrees.g6064.ElderFemale,
      MasterOrDoctorDegrees.g6064.Elder,

      MasterOrDoctorDegrees.g6569.ElderMale,
      MasterOrDoctorDegrees.g6569.ElderFemale,
      MasterOrDoctorDegrees.g6569.Elder,

      MasterOrDoctorDegrees.g7074.ElderMale,
      MasterOrDoctorDegrees.g7074.ElderFemale,
      MasterOrDoctorDegrees.g7074.Elder,

      MasterOrDoctorDegrees.g7579.ElderMale,
      MasterOrDoctorDegrees.g7579.ElderFemale,
      MasterOrDoctorDegrees.g7579.Elder,

      MasterOrDoctorDegrees.g8084.ElderMale,
      MasterOrDoctorDegrees.g8084.ElderFemale,
      MasterOrDoctorDegrees.g8084.Elder,

      MasterOrDoctorDegrees.g8589.ElderMale,
      MasterOrDoctorDegrees.g8589.ElderFemale,
      MasterOrDoctorDegrees.g8589.Elder,

      MasterOrDoctorDegrees.g9094.ElderMale,
      MasterOrDoctorDegrees.g9094.ElderFemale,
      MasterOrDoctorDegrees.g9094.Elder,

      MasterOrDoctorDegrees.g95.ElderMale,
      MasterOrDoctorDegrees.g95.ElderFemale,
      MasterOrDoctorDegrees.g95.Elder,

      MasterOrDoctorDegrees.summary.ElderMale,
      MasterOrDoctorDegrees.summary.ElderFemale,
      MasterOrDoctorDegrees.summary.Elder,

      `${MasterOrDoctorDegrees.summary.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.summary.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.summary.ElderPer} %`,

      `${MasterOrDoctorDegrees.g6064.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g6064.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g6064.ElderPer} %`,

     `${ MasterOrDoctorDegrees.g6569.ElderPerMale} %`,
     `${ MasterOrDoctorDegrees.g6569.ElderPerFemale} %`,
     `${ MasterOrDoctorDegrees.g6569.ElderPer} %`,

      `${MasterOrDoctorDegrees.g7074.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g7074.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g7074.ElderPer} %`,

      `${MasterOrDoctorDegrees.g7579.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g7579.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g7579.ElderPer} %`,

      `${MasterOrDoctorDegrees.g8084.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g8084.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g8084.ElderPer} %`,

      `${MasterOrDoctorDegrees.g8589.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g8589.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g8589.ElderPer} %`,

      `${MasterOrDoctorDegrees.g9094.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g9094.ElderPerFemale} %`,
      `${MasterOrDoctorDegrees.g9094.ElderPer} %`,

      `${MasterOrDoctorDegrees.g95.ElderPerMale} %`,
      `${MasterOrDoctorDegrees.g95.ElderPerFemale} %`,
     `${ MasterOrDoctorDegrees.g95.ElderPer} %`,
    ),
  ];
  console.log(rows)
  return (
    <div className="card-body">
      {/* <div>
        เลือกระดับการศึกษา &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={education}
          onChange={handleChange}
        >
          {EDUCATIONS.map((value, index) => {
            return (
              <option key={index} value={value === "อนุปริญญา/ปวช./ปวส." ? "อนุปริญญา" : value}>
                {value}
              </option>
            );
          })}
        </Select>
      </div> */}
      <br />
      {/*  <div className="chart" ref={ref}>
        <div className="col-12">
          <p style={{ textAlign: "center" }}>
            จำนวนประชากรผู้สูงอายุทั้งหมด {education} จำนวน {summary.Elder} คน
          </p>
        </div> 
        
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
              title: `จำนวนประชากรผู้สูงอายุทั้งหมด ${education} จำนวน ${summary.Elder} คน`,
              subtitle: "จำแนกตามระดับการศึกษา ช่วงอายุ และเพศ",
            },
          }}
        />
      </div>*/}
      <br />
      <div ref={ref}>
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
        {openPaper ? (
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              {/*%%%%%%%%%%%%%%%%55%%%%% */}
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    ระดับการศึกษา
                  </StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
                  <StyledTableCell align="center">65-69</StyledTableCell>
                  <StyledTableCell align="center">70-74</StyledTableCell>
                  <StyledTableCell align="center">75-79</StyledTableCell>
                  <StyledTableCell align="center">80-84</StyledTableCell>
                  <StyledTableCell align="center">85-89</StyledTableCell>
                  <StyledTableCell align="center">90-94</StyledTableCell>
                  <StyledTableCell align="center">95+</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell  component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">  {/* 6064 */}
                      {row.PerMale ==="NaN %"?  "0 %" : row.PerMale}
                      <br />
                      {row.PerFemale ==="NaN %"? "0 %" :row.PerFemale}
                      <br />
                      {row.Persum ==="NaN %"? "0 %" :row.Persum}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale6569==="NaN %"? "0 %" : row.PerMale6569}
                      <br />
                      {row.PerFemale6569==="NaN %"? "0 %": row.PerFemale6569}
                      <br />
                      {row.Persum6569==="NaN %"? "0 %": row.Persum6569}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale7074==="NaN %"? "0 %":row.PerMale7074} 
                      <br />
                      {row.PerFemale7074==="NaN %"? "0 %":row.PerFemale7074}
                      <br />
                      {row.Persum7074==="NaN %"? "0 %":row.Persum7074}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale7579==="NaN %"? "0 %":row.PerMale7579} 
                      <br />
                      {row.PerFemale7579==="NaN %"? "0 %":row.PerFemale7579}
                      <br />
                      {row.Persum7579==="NaN %"? "0 %":row.Persum7579}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale8084==="NaN %"? "0 %":row.PerMale8084} <br />
                      {row.PerFemale8084==="NaN %"? "0 %":row.PerFemale8084}
                      <br />
                      {row.Persum8084==="NaN %"? "0 %":row.Persum8084}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale8590==="NaN %"? "0 %": row.PerMale8590} <br />
                      {row.PerFemale8590==="NaN %"? "0 %": row.PerFemale8590}
                      <br />
                      {row.Persum8590 ==="NaN %"? "0 %": row.Persum8590}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale9094==="NaN %"? "0 %":row.PerMale9094} <br />
                      {row.PerFemale9094==="NaN %"? "0 %":row.PerFemale9094}
                      <br />
                      {row.Persum9094==="NaN %"? "0 %":row.Persum9094}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.PerMale95==="NaN %"? "0 %":row.PerMale95} <br />
                      {row.PerFemale95==="NaN %"? "0 %":row.PerFemale95}
                      <br />
                      {row.Persum95==="NaN %"? "0 %":row.Persum95}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.sumAllPerM==="NaN %"? "0 %":row.sumAllPerM} <br />
                      {row.sumAllPerF==="NaN %"? "0 %":row.sumAllPerF}<br />
                      {row.sumAllPer==="NaN %"? "0 %":row.sumAllPer}</StyledTableCell>
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>
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
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">ช่วงอายุ</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    ระดับการศึกษา
                  </StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">60-64</StyledTableCell>
                  <StyledTableCell align="center">65-69</StyledTableCell>
                  <StyledTableCell align="center">70-74</StyledTableCell>
                  <StyledTableCell align="center">75-79</StyledTableCell>
                  <StyledTableCell align="center">80-84</StyledTableCell>
                  <StyledTableCell align="center">85-89</StyledTableCell>
                  <StyledTableCell align="center">90-94</StyledTableCell>
                  <StyledTableCell align="center">95+</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell  component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">  {/* 6064 */}
                      {row.numMale}
                      <br />
                      {row.numFemale}
                      <br />
                      {row.sum}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male6569}
                      <br />
                      {row.Female6569}
                      <br />
                      {row.sum6569}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male7074} <br />
                      {row.Female7074}
                      <br />
                      {row.sum7074}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male7579} <br />
                      {row.Female7579}
                      <br />
                      {row.sum7579}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male8084} <br />
                      {row.Female8084}
                      <br />
                      {row.sum8084}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male8590} <br />
                      {row.Female8590}
                      <br />
                      {row.sum8590}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male9094} <br />
                      {row.Female9094}
                      <br />
                      {row.sum9094}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.Male95} <br />
                      {row.Female95}
                      <br />
                      {row.sum95}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.sumAllM} <br />
                      {row.sumAllF}
                      <br />
                      {row.sumAll}</StyledTableCell>
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
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
