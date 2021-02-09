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
import { CSVLink } from "react-csv"
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
  ระดับการศึกษา,
  ผู้ชาย6064,
  ผู้หญิง6064,
  รวม6064,
  ผู้ชาย6569,
  ผู้หญิง6569,
  รวม6569,
  ผู้ชาย7074,
  ผู้หญิง7074,
  รวม7074,
  ผู้ชาย7579,
  ผู้หญิง7579,
  รวม7579,
  ผู้ชาย8084,
  ผู้หญิง8084,
  รวม8084,
  ผู้ชาย8590,
  ผู้หญิง8590,
  รวม8590,
  ผู้ชาย9094,
  ผู้หญิง9094,
  รวม9094,
  ผู้ชาย95,
  ผู้หญิง95,
  รวม95,
  รวมทั้งหมดผู้ชาย,
  รวมทั้งหมดผู้หญิง,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมดผู้ชาย,
  เปอร์เซ็นต์รวมทั้งหมดผู้หญิง,
  เปอร์เซ็นต์รวมทั้งหมด,
  เปอร์เซ็นต์ผู้ชาย6064,
  เปอร์เซ็นต์ผู้หญิง6064,
  เปอร์เซ็นต์รวม6064,
  เปอร์เซ็นต์ผู้ชาย6569,
  เปอร์เซ็นต์ผู้หญิง6569,
  เปอร์เซ็นต์รวม6569,
  เปอร์เซ็นต์ผู้ชาย7074,
  เปอร์เซ็นต์ผู้หญิง7074,
  เปอร์เซ็นต์รวม7074,
  เปอร์เซ็นต์ผู้ชาย7579,
  เปอร์เซ็นต์ผู้หญิง7579,
  เปอร์เซ็นต์รวม7579,
  เปอร์เซ็นต์ผู้ชาย8084,
  เปอร์เซ็นต์ผู้หญิง8084,
  เปอร์เซ็นต์รวม8084,
  เปอร์เซ็นต์ผู้ชาย8590,
  เปอร์เซ็นต์ผู้หญิง8590,
  เปอร์เซ็นต์รวม8590,
  เปอร์เซ็นต์ผู้ชาย9094,
  เปอร์เซ็นต์ผู้หญิง9094,
  เปอร์เซ็นต์รวม9094,
  เปอร์เซ็นต์ผู้ชาย95,
  เปอร์เซ็นต์ผู้หญิง95,
  เปอร์เซ็นต์รวม95,


) {
  return {
    ระดับการศึกษา,
  ผู้ชาย6064,
  ผู้หญิง6064,
  รวม6064,
  ผู้ชาย6569,
  ผู้หญิง6569,
  รวม6569,
  ผู้ชาย7074,
  ผู้หญิง7074,
  รวม7074,
  ผู้ชาย7579,
  ผู้หญิง7579,
  รวม7579,
  ผู้ชาย8084,
  ผู้หญิง8084,
  รวม8084,
  ผู้ชาย8590,
  ผู้หญิง8590,
  รวม8590,
  ผู้ชาย9094,
  ผู้หญิง9094,
  รวม9094,
  ผู้ชาย95,
  ผู้หญิง95,
  รวม95,
  รวมทั้งหมดผู้ชาย,
  รวมทั้งหมดผู้หญิง,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมดผู้ชาย,
  เปอร์เซ็นต์รวมทั้งหมดผู้หญิง,
  เปอร์เซ็นต์รวมทั้งหมด,
  เปอร์เซ็นต์ผู้ชาย6064,
  เปอร์เซ็นต์ผู้หญิง6064,
  เปอร์เซ็นต์รวม6064,
  เปอร์เซ็นต์ผู้ชาย6569,
  เปอร์เซ็นต์ผู้หญิง6569,
  เปอร์เซ็นต์รวม6569,
  เปอร์เซ็นต์ผู้ชาย7074,
  เปอร์เซ็นต์ผู้หญิง7074,
  เปอร์เซ็นต์รวม7074,
  เปอร์เซ็นต์ผู้ชาย7579,
  เปอร์เซ็นต์ผู้หญิง7579,
  เปอร์เซ็นต์รวม7579,
  เปอร์เซ็นต์ผู้ชาย8084,
  เปอร์เซ็นต์ผู้หญิง8084,
  เปอร์เซ็นต์รวม8084,
  เปอร์เซ็นต์ผู้ชาย8590,
  เปอร์เซ็นต์ผู้หญิง8590,
  เปอร์เซ็นต์รวม8590,
  เปอร์เซ็นต์ผู้ชาย9094,
  เปอร์เซ็นต์ผู้หญิง9094,
  เปอร์เซ็นต์รวม9094,
  เปอร์เซ็นต์ผู้ชาย95,
  เปอร์เซ็นต์ผู้หญิง95,
  เปอร์เซ็นต์รวม95,

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

      `${Uneducate.summary.ElderPerMale}`==="NaN"? "0" :`${Uneducate.summary.ElderPerMale}`,
      `${Uneducate.summary.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.summary.ElderPerFemale}`,
      `${Uneducate.summary.ElderPer}`==="NaN"? "0" :`${Uneducate.summary.ElderPer}`,


      `${Uneducate.g6064.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g6064.ElderPerMale}`,
      `${Uneducate.g6064.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g6064.ElderPerFemale}`,
      `${Uneducate.g6064.ElderPer}`==="NaN"? "0" :`${Uneducate.g6064.ElderPer}`,

     `${ Uneducate.g6569.ElderPerMale}`==="NaN"? "0" :`${ Uneducate.g6569.ElderPerMale}`,
     `${ Uneducate.g6569.ElderPerFemale}`==="NaN"? "0" :`${ Uneducate.g6569.ElderPerFemale}`,
     `${ Uneducate.g6569.ElderPer}`==="NaN"? "0" :`${ Uneducate.g6569.ElderPer}`,

      `${Uneducate.g7074.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g7074.ElderPerMale}`,
      `${Uneducate.g7074.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g7074.ElderPerFemale}`,
      `${Uneducate.g7074.ElderPer}`==="NaN"? "0" : `${Uneducate.g7074.ElderPer}`,

      `${Uneducate.g7579.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g7579.ElderPerMale}`,
      `${Uneducate.g7579.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g7579.ElderPerFemale}`,
      `${Uneducate.g7579.ElderPer}`==="NaN"? "0" :`${Uneducate.g7579.ElderPer}`,

      `${Uneducate.g8084.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g8084.ElderPerMale}`,
      `${Uneducate.g8084.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g8084.ElderPerFemale}`,
      `${Uneducate.g8084.ElderPer}`==="NaN"? "0" :`${Uneducate.g8084.ElderPer}`,

      `${Uneducate.g8589.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g8589.ElderPerMale}`,
      `${Uneducate.g8589.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g8589.ElderPerFemale}`,
      `${Uneducate.g8589.ElderPer}`==="NaN"? "0" :`${Uneducate.g8589.ElderPer}`,

      `${Uneducate.g9094.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g9094.ElderPerMale}`,
      `${Uneducate.g9094.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g9094.ElderPerFemale}`,
      `${Uneducate.g9094.ElderPer}`==="NaN"? "0" :`${Uneducate.g9094.ElderPer}`,

      `${Uneducate.g95.ElderPerMale}`==="NaN"? "0" :`${Uneducate.g95.ElderPerMale}`,
      `${Uneducate.g95.ElderPerFemale}`==="NaN"? "0" :`${Uneducate.g95.ElderPerFemale}`,
     `${Uneducate.g95.ElderPer}`==="NaN"? "0" :`${Uneducate.g95.ElderPer}`,

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

      `${SecondarySchool.summary.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.summary.ElderPerMale}`,
      `${SecondarySchool.summary.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.summary.ElderPerFemale}`,
      `${SecondarySchool.summary.ElderPer}`==="NaN"? "0" :`${SecondarySchool.summary.ElderPer}`,

      `${SecondarySchool.g6064.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g6064.ElderPerMale}`,
      `${SecondarySchool.g6064.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g6064.ElderPerFemale}`,
      `${SecondarySchool.g6064.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g6064.ElderPer}`,

     `${ SecondarySchool.g6569.ElderPerMale}`==="NaN"? "0" :`${ SecondarySchool.g6569.ElderPerMale}`,
     `${ SecondarySchool.g6569.ElderPerFemale}`==="NaN"? "0" :`${ SecondarySchool.g6569.ElderPerFemale}`,
     `${ SecondarySchool.g6569.ElderPer}`==="NaN"? "0" :`${ SecondarySchool.g6569.ElderPer}`,

      `${SecondarySchool.g7074.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g7074.ElderPerMale}`,
      `${SecondarySchool.g7074.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g7074.ElderPerFemale}`,
      `${SecondarySchool.g7074.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g7074.ElderPer}`,

      `${SecondarySchool.g7579.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g7579.ElderPerMale}`,
      `${SecondarySchool.g7579.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g7579.ElderPerFemale}`,
      `${SecondarySchool.g7579.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g7579.ElderPer}`,

      `${SecondarySchool.g8084.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g8084.ElderPerMale}`,
      `${SecondarySchool.g8084.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g8084.ElderPerFemale}`,
      `${SecondarySchool.g8084.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g8084.ElderPer}`,

      `${SecondarySchool.g8589.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g8589.ElderPerMale}`,
      `${SecondarySchool.g8589.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g8589.ElderPerFemale}`,
      `${SecondarySchool.g8589.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g8589.ElderPer}`,

      `${SecondarySchool.g9094.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g9094.ElderPerMale}`,
      `${SecondarySchool.g9094.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g9094.ElderPerFemale}`,
      `${SecondarySchool.g9094.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g9094.ElderPer}`,

      `${SecondarySchool.g95.ElderPerMale}`==="NaN"? "0" :`${SecondarySchool.g95.ElderPerMale}`,
      `${SecondarySchool.g95.ElderPerFemale}`==="NaN"? "0" :`${SecondarySchool.g95.ElderPerFemale}`,
     `${ SecondarySchool.g95.ElderPer}`==="NaN"? "0" :`${SecondarySchool.g95.ElderPer}`,
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

    `${HighSchool.summary.ElderPerMale}`==="NaN"? "0" :`${HighSchool.summary.ElderPerMale}`,
     `${HighSchool.summary.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.summary.ElderPerFemale}`,
     `${HighSchool.summary.ElderPer}`==="NaN"? "0" :`${HighSchool.summary.ElderPer}`,

      `${HighSchool.g6064.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g6064.ElderPerMale}`,
      `${HighSchool.g6064.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.g6064.ElderPerFemale}`,
      `${HighSchool.g6064.ElderPer}`==="NaN"? "0" :`${HighSchool.g6064.ElderPer}`,

     `${ HighSchool.g6569.ElderPerMale}`==="NaN"? "0" :`${ HighSchool.g6569.ElderPerMale}`,
     `${ HighSchool.g6569.ElderPerFemale}`==="NaN"? "0" :`${ HighSchool.g6569.ElderPerFemale}`,
     `${ HighSchool.g6569.ElderPer}`==="NaN"? "0" :`${ HighSchool.g6569.ElderPer}`,

      `${HighSchool.g7074.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g7074.ElderPerMale}`,
      `${HighSchool.g7074.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.g7074.ElderPerFemale}`,
      `${HighSchool.g7074.ElderPer}`==="NaN"? "0" :`${HighSchool.g7074.ElderPer}`,

      `${HighSchool.g7579.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g7579.ElderPerMale}`,
      `${HighSchool.g7579.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.g7579.ElderPerFemale}`,
      `${HighSchool.g7579.ElderPer}`==="NaN"? "0" :`${HighSchool.g7579.ElderPer}`,

      `${HighSchool.g8084.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g8084.ElderPerMale}`,
      `${HighSchool.g8084.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.g8084.ElderPerFemale}`,
      `${HighSchool.g8084.ElderPer}`==="NaN"? "0" :`${HighSchool.g8084.ElderPer}`,

      `${HighSchool.g8589.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g8589.ElderPerMale}`,
      `${HighSchool.g8589.ElderPerFemale}`==="NaN"? "0" : `${HighSchool.g8589.ElderPerFemale}`,
      `${HighSchool.g8589.ElderPer}`==="NaN"? "0" :`${HighSchool.g8589.ElderPer}`,

      `${HighSchool.g9094.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g9094.ElderPerMale}`,
      `${HighSchool.g9094.ElderPerFemale}`==="NaN"? "0" : `${HighSchool.g9094.ElderPerFemale}`,
      `${HighSchool.g9094.ElderPer}`==="NaN"? "0" :`${HighSchool.g9094.ElderPer}`,

      `${HighSchool.g95.ElderPerMale}`==="NaN"? "0" :`${HighSchool.g95.ElderPerMale}`,
      `${HighSchool.g95.ElderPerFemale}`==="NaN"? "0" :`${HighSchool.g95.ElderPerFemale}`,
     `${ HighSchool.g95.ElderPer}`==="NaN"? "0" :`${ HighSchool.g95.ElderPer}`,
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

      `${TechnicalCollege.summary.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.summary.ElderPerMale}`,
      `${TechnicalCollege.summary.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.summary.ElderPerFemale}`,
      `${TechnicalCollege.summary.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.summary.ElderPer}`,

      `${TechnicalCollege.g6064.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g6064.ElderPerMale}`,
      `${TechnicalCollege.g6064.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g6064.ElderPerFemale}`,
      `${TechnicalCollege.g6064.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.g6064.ElderPer}`,

     `${ TechnicalCollege.g6569.ElderPerMale}`==="NaN"? "0" :`${ TechnicalCollege.g6569.ElderPerMale}`,
     `${ TechnicalCollege.g6569.ElderPerFemale}`==="NaN"? "0" :`${ TechnicalCollege.g6569.ElderPerFemale}`,
     `${ TechnicalCollege.g6569.ElderPer}`==="NaN"? "0" :`${ TechnicalCollege.g6569.ElderPer}`,

      `${TechnicalCollege.g7074.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g7074.ElderPerMale}`,
      `${TechnicalCollege.g7074.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g7074.ElderPerFemale}`,
      `${TechnicalCollege.g7074.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.g7074.ElderPer}`,

      `${TechnicalCollege.g7579.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g7579.ElderPerMale}`,
      `${TechnicalCollege.g7579.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g7579.ElderPerFemale}`,
      `${TechnicalCollege.g7579.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.g7579.ElderPer}`,

      `${TechnicalCollege.g8084.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g8084.ElderPerMale}`,
      `${TechnicalCollege.g8084.ElderPerFemale}`==="NaN"? "0" : `${TechnicalCollege.g8084.ElderPerFemale}`,
      `${TechnicalCollege.g8084.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.g8084.ElderPer}`,

      `${TechnicalCollege.g8589.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g8589.ElderPerMale}`,
      `${TechnicalCollege.g8589.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g8589.ElderPerFemale}`,
      `${TechnicalCollege.g8589.ElderPer}`==="NaN"? "0" :`${TechnicalCollege.g8589.ElderPer}`,

      `${TechnicalCollege.g9094.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g9094.ElderPerMale}`,
      `${TechnicalCollege.g9094.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g9094.ElderPerFemale}`,
      `${TechnicalCollege.g9094.ElderPer}`==="NaN"? "0" : `${TechnicalCollege.g9094.ElderPer}`,

      `${TechnicalCollege.g95.ElderPerMale}`==="NaN"? "0" :`${TechnicalCollege.g95.ElderPerMale}`,
      `${TechnicalCollege.g95.ElderPerFemale}`==="NaN"? "0" :`${TechnicalCollege.g95.ElderPerFemale}`,
     `${ TechnicalCollege.g95.ElderPer}`==="NaN"? "0" :`${ TechnicalCollege.g95.ElderPer}`,
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

      `${BachelorDegrees.summary.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.summary.ElderPerMale}`,
      `${BachelorDegrees.summary.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.summary.ElderPerFemale}`,
      `${BachelorDegrees.summary.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.summary.ElderPer}`,

      `${BachelorDegrees.g6064.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g6064.ElderPerMale}`,
      `${BachelorDegrees.g6064.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g6064.ElderPerFemale}`,
      `${BachelorDegrees.g6064.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g6064.ElderPer}`,

     `${ BachelorDegrees.g6569.ElderPerMale}`==="NaN"? "0" :`${ BachelorDegrees.g6569.ElderPerMale}`,
     `${ BachelorDegrees.g6569.ElderPerFemale}`==="NaN"? "0" :`${ BachelorDegrees.g6569.ElderPerFemale}`,
     `${ BachelorDegrees.g6569.ElderPer}`==="NaN"? "0" :`${ BachelorDegrees.g6569.ElderPer}`,

      `${BachelorDegrees.g7074.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g7074.ElderPerMale}`,
      `${BachelorDegrees.g7074.ElderPerFemale}`==="NaN"? "0" : `${BachelorDegrees.g7074.ElderPerFemale}`,
      `${BachelorDegrees.g7074.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g7074.ElderPer}`,

      `${BachelorDegrees.g7579.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g7579.ElderPerMale}`,
      `${BachelorDegrees.g7579.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g7579.ElderPerFemale}`,
      `${BachelorDegrees.g7579.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g7579.ElderPer}`,

      `${BachelorDegrees.g8084.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g8084.ElderPerMale}`,
      `${BachelorDegrees.g8084.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g8084.ElderPerFemale}`,
      `${BachelorDegrees.g8084.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g8084.ElderPer}`,

      `${BachelorDegrees.g8589.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g8589.ElderPerMale}`,
      `${BachelorDegrees.g8589.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g8589.ElderPerFemale}`,
      `${BachelorDegrees.g8589.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g8589.ElderPer}`,

      `${BachelorDegrees.g9094.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g9094.ElderPerMale}`,
      `${BachelorDegrees.g9094.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g9094.ElderPerFemale}`,
      `${BachelorDegrees.g9094.ElderPer}`==="NaN"? "0" :`${BachelorDegrees.g9094.ElderPer}`,

      `${BachelorDegrees.g95.ElderPerMale}`==="NaN"? "0" :`${BachelorDegrees.g95.ElderPerMale}`,
      `${BachelorDegrees.g95.ElderPerFemale}`==="NaN"? "0" :`${BachelorDegrees.g95.ElderPerFemale}`,
     `${ BachelorDegrees.g95.ElderPer}`==="NaN"? "0" :`${ BachelorDegrees.g95.ElderPer}`,
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

      `${MasterOrDoctorDegrees.summary.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.summary.ElderPerMale}`,
      `${MasterOrDoctorDegrees.summary.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.summary.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.summary.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.summary.ElderPer}`,

      `${MasterOrDoctorDegrees.g6064.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g6064.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g6064.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g6064.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g6064.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g6064.ElderPer}`,

     `${ MasterOrDoctorDegrees.g6569.ElderPerMale}`==="NaN"? "0" :`${ MasterOrDoctorDegrees.g6569.ElderPerMale}`,
     `${ MasterOrDoctorDegrees.g6569.ElderPerFemale}`==="NaN"? "0" :`${ MasterOrDoctorDegrees.g6569.ElderPerFemale}`,
     `${ MasterOrDoctorDegrees.g6569.ElderPer}`==="NaN"? "0" :`${ MasterOrDoctorDegrees.g6569.ElderPer}`,

      `${MasterOrDoctorDegrees.g7074.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7074.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g7074.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7074.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g7074.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7074.ElderPer}`,

      `${MasterOrDoctorDegrees.g7579.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7579.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g7579.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7579.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g7579.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g7579.ElderPer}`,

      `${MasterOrDoctorDegrees.g8084.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8084.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g8084.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8084.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g8084.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8084.ElderPer}`,

      `${MasterOrDoctorDegrees.g8589.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8589.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g8589.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8589.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g8589.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g8589.ElderPer}`,

      `${MasterOrDoctorDegrees.g9094.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g9094.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g9094.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g9094.ElderPerFemale}`,
      `${MasterOrDoctorDegrees.g9094.ElderPer}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g9094.ElderPer}`,

      `${MasterOrDoctorDegrees.g95.ElderPerMale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g95.ElderPerMale}`,
      `${MasterOrDoctorDegrees.g95.ElderPerFemale}`==="NaN"? "0" :`${MasterOrDoctorDegrees.g95.ElderPerFemale}`,
     `${ MasterOrDoctorDegrees.g95.ElderPer}`==="NaN"? "0" :`${ MasterOrDoctorDegrees.g95.ElderPer}`,
    ),
  ];
  console.log(rows)
  return (    
  <React.Fragment>
    <CSVLink data={rows} className="csv-link"> Download CSV </CSVLink>
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
                  <StyledTableRow key={row.ระดับการศึกษา}>
                    <StyledTableCell  component="th" scope="row">
                      {row.ระดับการศึกษา}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="left">  {/* 6064 */}
                      {row.เปอร์เซ็นต์ผู้ชาย6064} %
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง6064} %
                      <br />
                      {row.เปอร์เซ็นต์รวม6064} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย6569} %
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง6569} %
                      <br />
                      {row.เปอร์เซ็นต์รวม6569} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย7074} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง7074} %
                      <br />
                      {row.เปอร์เซ็นต์รวม7074} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย7579} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง7579} %
                      <br />
                      {row.เปอร์เซ็นต์รวม7579} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย8084} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง8084} %
                      <br />
                      {row.เปอร์เซ็นต์รวม8084} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย8590} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง8590} %
                      <br />
                      {row.เปอร์เซ็นต์รวม8590} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย9094} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง9094} %
                      <br />
                      {row.เปอร์เซ็นต์รวม9094} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์ผู้ชาย95} % 
                      <br />
                      {row.เปอร์เซ็นต์ผู้หญิง95} %
                      <br />
                      {row.เปอร์เซ็นต์รวม95} %
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.เปอร์เซ็นต์รวมทั้งหมดผู้ชาย} % 
                      <br />
                      {row.เปอร์เซ็นต์รวมทั้งหมดผู้หญิง} %
                      <br />
                      {row.เปอร์เซ็นต์รวมทั้งหมด} %
                      </StyledTableCell>
                    <StyledTableCell align="left">&nbsp;</StyledTableCell>
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
                  <StyledTableRow key={row.ระดับการศึกษา}>
                    <StyledTableCell  component="th" scope="row">
                      {row.ระดับการศึกษา}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">  {/* 6064 */}
                      {row.ผู้ชาย6064}
                      <br />
                      {row.ผู้หญิง6064}
                      <br />
                      {row.รวม6064}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย6569}
                      <br />
                      {row.ผู้หญิง6569}
                      <br />
                      {row.รวม6569}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย7074} 
                      <br />
                      {row.ผู้หญิง7074}
                      <br />
                      {row.รวม7074}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย7579} 
                      <br />
                      {row.ผู้หญิง7579}
                      <br />
                      {row.รวม7579}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย8084} <br />
                      {row.ผู้หญิง8084}
                      <br />
                      {row.รวม8084}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย8590} 
                      <br />
                      {row.ผู้หญิง8590}
                      <br />
                      {row.รวม8590}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย9094} 
                      <br />
                      {row.ผู้หญิง9094}
                      <br />
                      {row.รวม9094}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผู้ชาย95} 
                      <br />
                      {row.ผู้หญิง95}
                      <br />
                      {row.รวม95}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวมทั้งหมดผู้ชาย} 
                      <br />
                      {row.รวมทั้งหมดผู้หญิง}
                      <br />
                      {row.รวมทั้งหมด}</StyledTableCell>
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  </StyledTableRow>
                ))}
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
