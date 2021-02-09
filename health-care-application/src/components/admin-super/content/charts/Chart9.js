import React from "react";
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
  Select,
} from "@material-ui/core";
import { Chart } from "react-google-charts";
import {
  TREATMENT,
  PRINT_THIS_SECTION,
  COMMUNITYS,
} from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart9 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: "center",
    // border:1
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      padding: 0,
    },
  },
}))(TableRow);

function createData(
  name,
  ผู้ชายปกติ6064,
  ผู้ชายเกิน6064,
  ผู้หญิงปกติ6064,
  ผู้หญิงเกิน6064,
  เปอร์เซ็นต์ผู้ชายปกติ6064,
  เปอร์เซ็นต์ผู้ชายเกิน6064,
  เปอร์เซ็นผู้หญิงปกติ6064,
  เปอร์เซ็นผู้หญิงเกิน6064,

  ผู้ชายปกติ6569,
  ผู้ชายเกิน6569,
  ผู้หญิงปกติ6569,
  ผู้หญิงเกิน6569,
  เปอร์เซ็นต์ผู้ชายปกติ6569,
  เปอร์เซ็นต์ผู้ชายเกิน6569,
  เปอร์เซ็นผู้หญิงปกติ6569,
  เปอร์เซ็นผู้หญิงเกิน6569,

  ผู้ชายปกติ7074,
  ผู้ชายเกิน7074,
  ผู้หญิงปกติ7074,
  ผู้หญิงเกิน7074,
  เปอร์เซ็นต์ผู้ชายปกติ7074,
  เปอร์เซ็นต์ผู้ชายเกิน7074,
  เปอร์เซ็นผู้หญิงปกติ7074,
  เปอร์เซ็นผู้หญิงเกิน7074,

  ผู้ชายปกติ7579,
  ผู้ชายเกิน7579,
  ผู้หญิงปกติ7579,
  ผู้หญิงเกิน7579,
  เปอร์เซ็นต์ผู้ชายปกติ7579,
  เปอร์เซ็นต์ผู้ชายเกิน7579,
  เปอร์เซ็นผู้หญิงปกติ7579,
  เปอร์เซ็นผู้หญิงเกิน7579,

  ผู้ชายปกติ8084,
  ผู้ชายเกิน8084,
  ผู้หญิงปกติ8084,
  ผู้หญิงเกิน8084,
  เปอร์เซ็นต์ผู้ชายปกติ8084,
  เปอร์เซ็นต์ผู้ชายเกิน8084,
  เปอร์เซ็นผู้หญิงปกติ8084,
  เปอร์เซ็นผู้หญิงเกิน8084,

  ผู้ชายปกติ8589,
  ผู้ชายเกิน8589,
  ผู้หญิงปกติ8589,
  ผู้หญิงเกิน8589,
  เปอร์เซ็นต์ผู้ชายปกติ8589,
  เปอร์เซ็นต์ผู้ชายเกิน8589,
  เปอร์เซ็นผู้หญิงปกติ8589,
  เปอร์เซ็นผู้หญิงเกิน8589,

  ผู้ชายปกติ9094,
  ผู้ชายเกิน9094,
  ผู้หญิงปกติ9094,
  ผู้หญิงเกิน9094,
  เปอร์เซ็นต์ผู้ชายปกติ9094,
  เปอร์เซ็นต์ผู้ชายเกิน9094,
  เปอร์เซ็นผู้หญิงปกติ9094,
  เปอร์เซ็นผู้หญิงเกิน9094,

  ผู้ชายปกติ95,
  ผู้ชายเกิน95,
  ผู้หญิงปกติ95,
  ผู้หญิงเกิน95,
  เปอร์เซ็นต์ผู้ชายปกติ95,
  เปอร์เซ็นต์ผู้ชายเกิน95,
  เปอร์เซ็นผู้หญิงปกติ95,
  เปอร์เซ็นผู้หญิงเกิน95,

  sumAllMN,
  sumAllMO,
  sumAllFN,
  sumAllFO,
  
  sumAllPerMN,
  sumAllPerMO,
  sumAllPerFN,
  sumAllPerFO,

) {
  return {
    name,
    ผู้ชายปกติ6064,
    ผู้ชายเกิน6064,
    ผู้หญิงปกติ6064,
    ผู้หญิงเกิน6064,
    เปอร์เซ็นต์ผู้ชายปกติ6064,
    เปอร์เซ็นต์ผู้ชายเกิน6064,
    เปอร์เซ็นผู้หญิงปกติ6064,
    เปอร์เซ็นผู้หญิงเกิน6064,
  
    ผู้ชายปกติ6569,
    ผู้ชายเกิน6569,
    ผู้หญิงปกติ6569,
    ผู้หญิงเกิน6569,
    เปอร์เซ็นต์ผู้ชายปกติ6569,
    เปอร์เซ็นต์ผู้ชายเกิน6569,
    เปอร์เซ็นผู้หญิงปกติ6569,
    เปอร์เซ็นผู้หญิงเกิน6569,
  
    ผู้ชายปกติ7074,
    ผู้ชายเกิน7074,
    ผู้หญิงปกติ7074,
    ผู้หญิงเกิน7074,
    เปอร์เซ็นต์ผู้ชายปกติ7074,
    เปอร์เซ็นต์ผู้ชายเกิน7074,
    เปอร์เซ็นผู้หญิงปกติ7074,
    เปอร์เซ็นผู้หญิงเกิน7074,
  
    ผู้ชายปกติ7579,
    ผู้ชายเกิน7579,
    ผู้หญิงปกติ7579,
    ผู้หญิงเกิน7579,
    เปอร์เซ็นต์ผู้ชายปกติ7579,
    เปอร์เซ็นต์ผู้ชายเกิน7579,
    เปอร์เซ็นผู้หญิงปกติ7579,
    เปอร์เซ็นผู้หญิงเกิน7579,
  
    ผู้ชายปกติ8084,
    ผู้ชายเกิน8084,
    ผู้หญิงปกติ8084,
    ผู้หญิงเกิน8084,
    เปอร์เซ็นต์ผู้ชายปกติ8084,
    เปอร์เซ็นต์ผู้ชายเกิน8084,
    เปอร์เซ็นผู้หญิงปกติ8084,
    เปอร์เซ็นผู้หญิงเกิน8084,
  
    ผู้ชายปกติ8589,
    ผู้ชายเกิน8589,
    ผู้หญิงปกติ8589,
    ผู้หญิงเกิน8589,
    เปอร์เซ็นต์ผู้ชายปกติ8589,
    เปอร์เซ็นต์ผู้ชายเกิน8589,
    เปอร์เซ็นผู้หญิงปกติ8589,
    เปอร์เซ็นผู้หญิงเกิน8589,
  
    ผู้ชายปกติ9094,
    ผู้ชายเกิน9094,
    ผู้หญิงปกติ9094,
    ผู้หญิงเกิน9094,
    เปอร์เซ็นต์ผู้ชายปกติ9094,
    เปอร์เซ็นต์ผู้ชายเกิน9094,
    เปอร์เซ็นผู้หญิงปกติ9094,
    เปอร์เซ็นผู้หญิงเกิน9094,
  
    ผู้ชายปกติ95,
    ผู้ชายเกิน95,
    ผู้หญิงปกติ95,
    ผู้หญิงเกิน95,
    เปอร์เซ็นต์ผู้ชายปกติ95,
    เปอร์เซ็นต์ผู้ชายเกิน95,
    เปอร์เซ็นผู้หญิงปกติ95,
    เปอร์เซ็นผู้หญิงเกิน95,

    sumAllMN,
    sumAllMO,
    sumAllFN,
    sumAllFO,
    
    sumAllPerMN,
    sumAllPerMO,
    sumAllPerFN,
    sumAllPerFO,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const [openPaper, setopenPaper] = React.useState(false);
  const chart9Reducer = useSelector(({ chart9Reducer }) => chart9Reducer);
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
  } = chart9Reducer.results;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart9(e.target.value));
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  const rows = [
    createData(
      "ชุมชนมณีแก้ว",
      ชุมชนมณีแก้ว.g6064.MaleNormal,
      ชุมชนมณีแก้ว.g6064.MaleOver,
      ชุมชนมณีแก้ว.g6064.FemaleNormal,
      ชุมชนมณีแก้ว.g6064.FemaleOver,

      `${ชุมชนมณีแก้ว.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6064.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6064.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6064.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6064.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g6569.MaleNormal,
      ชุมชนมณีแก้ว.g6569.MaleOver,
      ชุมชนมณีแก้ว.g6569.FemaleNormal,
      ชุมชนมณีแก้ว.g6569.FemaleOver,
      `${ชุมชนมณีแก้ว.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6569.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6569.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6569.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g6569.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g7074.MaleNormal,
      ชุมชนมณีแก้ว.g7074.MaleOver,
      ชุมชนมณีแก้ว.g7074.FemaleNormal,
      ชุมชนมณีแก้ว.g7074.FemaleOver,
      `${ชุมชนมณีแก้ว.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7074.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7074.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7074.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7074.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g7579.MaleNormal,
      ชุมชนมณีแก้ว.g7579.MaleOver,
      ชุมชนมณีแก้ว.g7579.FemaleNormal,
      ชุมชนมณีแก้ว.g7579.FemaleOver,
      `${ชุมชนมณีแก้ว.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7579.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7579.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7579.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g7579.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g8084.MaleNormal,
      ชุมชนมณีแก้ว.g8084.MaleOver,
      ชุมชนมณีแก้ว.g8084.FemaleNormal,
      ชุมชนมณีแก้ว.g8084.FemaleOver,
      `${ชุมชนมณีแก้ว.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8084.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8084.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8084.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8084.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g8589.MaleNormal,
      ชุมชนมณีแก้ว.g8589.MaleOver,
      ชุมชนมณีแก้ว.g8589.FemaleNormal,
      ชุมชนมณีแก้ว.g8589.FemaleOver,
      `${ชุมชนมณีแก้ว.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8589.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8589.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8589.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g8589.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g9094.MaleNormal,
      ชุมชนมณีแก้ว.g9094.MaleOver,
      ชุมชนมณีแก้ว.g9094.FemaleNormal,
      ชุมชนมณีแก้ว.g9094.FemaleOver,
      `${ชุมชนมณีแก้ว.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g9094.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g9094.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g9094.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g9094.PerFemaleOver}`,

      ชุมชนมณีแก้ว.g95.MaleNormal,
      ชุมชนมณีแก้ว.g95.MaleOver,
      ชุมชนมณีแก้ว.g95.FemaleNormal,
      ชุมชนมณีแก้ว.g95.FemaleOver,
      `${ชุมชนมณีแก้ว.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g95.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g95.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g95.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.g95.PerFemaleOver}`,

      ชุมชนมณีแก้ว.Summary.MaleNormal,
      ชุมชนมณีแก้ว.Summary.MaleOver,
      ชุมชนมณีแก้ว.Summary.FemaleNormal,
      ชุมชนมณีแก้ว.Summary.FemaleOver,
      `${ชุมชนมณีแก้ว.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.Summary.PerMaleNormal}`,
      `${ชุมชนมณีแก้ว.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.Summary.PerMaleOver}`,
      `${ชุมชนมณีแก้ว.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมณีแก้ว.Summary.PerFemaleNormal}`,
      `${ชุมชนมณีแก้ว.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมณีแก้ว.Summary.PerFemaleOver}`,

    ),
    createData(
      "ชุมชนดอนบน",
      ชุมชนดอนบน.g6064.MaleNormal,
      ชุมชนดอนบน.g6064.MaleOver,
      ชุมชนดอนบน.g6064.FemaleNormal,
      ชุมชนดอนบน.g6064.FemaleOver,
      `${ชุมชนดอนบน.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g6064.PerMaleNormal}`,
      `${ชุมชนดอนบน.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g6064.PerMaleOver}`,
      `${ชุมชนดอนบน.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g6064.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g6064.PerFemaleOver}`,

      ชุมชนดอนบน.g6569.MaleNormal,
      ชุมชนดอนบน.g6569.MaleOver,
      ชุมชนดอนบน.g6569.FemaleNormal,
      ชุมชนดอนบน.g6569.FemaleOver,
      `${ชุมชนดอนบน.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g6569.PerMaleNormal}`,
      `${ชุมชนดอนบน.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g6569.PerMaleOver}`,
      `${ชุมชนดอนบน.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g6569.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g6569.PerFemaleOver}`,

      ชุมชนดอนบน.g7074.MaleNormal,
      ชุมชนดอนบน.g7074.MaleOver,
      ชุมชนดอนบน.g7074.FemaleNormal,
      ชุมชนดอนบน.g7074.FemaleOver,
       `${ชุมชนดอนบน.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g7074.PerMaleNormal}`,
      `${ชุมชนดอนบน.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g7074.PerMaleOver}`,
      `${ชุมชนดอนบน.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g7074.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g7074.PerFemaleOver}`,

      ชุมชนดอนบน.g7579.MaleNormal,
      ชุมชนดอนบน.g7579.MaleOver,
      ชุมชนดอนบน.g7579.FemaleNormal,
      ชุมชนดอนบน.g7579.FemaleOver,
        `${ชุมชนดอนบน.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g7579.PerMaleNormal}`,
      `${ชุมชนดอนบน.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g7579.PerMaleOver}`,
      `${ชุมชนดอนบน.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g7579.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g7579.PerFemaleOver}`,
      ชุมชนดอนบน.g8084.MaleNormal,
      ชุมชนดอนบน.g8084.MaleOver,
      ชุมชนดอนบน.g8084.FemaleNormal,
      ชุมชนดอนบน.g8084.FemaleOver,
       `${ชุมชนดอนบน.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g8084.PerMaleNormal}`,
      `${ชุมชนดอนบน.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g8084.PerMaleOver}`,
      `${ชุมชนดอนบน.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g8084.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g8084.PerFemaleOver}`,

      ชุมชนดอนบน.g8589.MaleNormal,
      ชุมชนดอนบน.g8589.MaleOver,
      ชุมชนดอนบน.g8589.FemaleNormal,
      ชุมชนดอนบน.g8589.FemaleOver,
      `${ชุมชนดอนบน.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g8589.PerMaleNormal}`,
      `${ชุมชนดอนบน.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g8589.PerMaleOver}`,
      `${ชุมชนดอนบน.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g8589.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g8589.PerFemaleOver}`,

      ชุมชนดอนบน.g9094.MaleNormal,
      ชุมชนดอนบน.g9094.MaleOver,
      ชุมชนดอนบน.g9094.FemaleNormal,
      ชุมชนดอนบน.g9094.FemaleOver,
        `${ชุมชนดอนบน.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g9094.PerMaleNormal}`,
      `${ชุมชนดอนบน.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g9094.PerMaleOver}`,
      `${ชุมชนดอนบน.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g9094.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g9094.PerFemaleOver}`,

      ชุมชนดอนบน.g95.MaleNormal,
      ชุมชนดอนบน.g95.MaleOver,
      ชุมชนดอนบน.g95.FemaleNormal,
      ชุมชนดอนบน.g95.FemaleOver,
        `${ชุมชนดอนบน.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g95.PerMaleNormal}`,
      `${ชุมชนดอนบน.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g95.PerMaleOver}`,
      `${ชุมชนดอนบน.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.g95.PerFemaleNormal}`,
      `${ชุมชนดอนบน.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.g95.PerFemaleOver}`,

      ชุมชนดอนบน.Summary.MaleNormal,
      ชุมชนดอนบน.Summary.MaleOver,
      ชุมชนดอนบน.Summary.FemaleNormal,
      ชุมชนดอนบน.Summary.FemaleOver,
       `${ชุมชนดอนบน.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.Summary.PerMaleNormal}`,
      `${ชุมชนดอนบน.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.Summary.PerMaleOver}`,
      `${ชุมชนดอนบน.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนบน.Summary.PerFemaleNormal}`,
      `${ชุมชนดอนบน.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนบน.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนบางแสนทาวเวอร์",
      ชุมชนบางแสนทาวเวอร์.g6064.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g6064.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g6064.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g6064.FemaleOver,
     `${ชุมชนบางแสนทาวเวอร์.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6064.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6064.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6064.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6064.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.g6569.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g6569.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g6569.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g6569.FemaleOver,
       `${ชุมชนบางแสนทาวเวอร์.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6569.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6569.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6569.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g6569.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.g7074.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g7074.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g7074.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g7074.FemaleOver,
       `${ชุมชนบางแสนทาวเวอร์.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7074.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7074.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7074.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7074.PerFemaleOver}`,
      ชุมชนบางแสนทาวเวอร์.g7579.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g7579.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g7579.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g7579.FemaleOver,
         `${ชุมชนบางแสนทาวเวอร์.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7579.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7579.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7579.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g7579.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.g8084.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g8084.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g8084.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g8084.FemaleOver,
       `${ชุมชนบางแสนทาวเวอร์.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8084.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8084.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8084.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8084.PerFemaleOver}`,
      ชุมชนบางแสนทาวเวอร์.g8589.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g8589.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g8589.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g8589.FemaleOver,
      `${ชุมชนบางแสนทาวเวอร์.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8589.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8589.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8589.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g8589.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.g9094.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g9094.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g9094.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g9094.FemaleOver,
        `${ชุมชนบางแสนทาวเวอร์.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g9094.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g9094.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g9094.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g9094.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.g95.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.g95.MaleOver,
      ชุมชนบางแสนทาวเวอร์.g95.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.g95.FemaleOver,
       `${ชุมชนบางแสนทาวเวอร์.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g95.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g95.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g95.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.g95.PerFemaleOver}`,

      ชุมชนบางแสนทาวเวอร์.Summary.MaleNormal,
      ชุมชนบางแสนทาวเวอร์.Summary.MaleOver,
      ชุมชนบางแสนทาวเวอร์.Summary.FemaleNormal,
      ชุมชนบางแสนทาวเวอร์.Summary.FemaleOver,
       `${ชุมชนบางแสนทาวเวอร์.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.Summary.PerMaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.Summary.PerMaleOver}`,
      `${ชุมชนบางแสนทาวเวอร์.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.Summary.PerFemaleNormal}`,
      `${ชุมชนบางแสนทาวเวอร์.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนทาวเวอร์.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนตาลล้อม1",
      ชุมชนตาลล้อม1.g6064.MaleNormal,
      ชุมชนตาลล้อม1.g6064.MaleOver,
      ชุมชนตาลล้อม1.g6064.FemaleNormal,
      ชุมชนตาลล้อม1.g6064.FemaleOver,
      `${ชุมชนตาลล้อม1.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6064.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6064.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6064.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6064.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g6569.MaleNormal,
      ชุมชนตาลล้อม1.g6569.MaleOver,
      ชุมชนตาลล้อม1.g6569.FemaleNormal,
      ชุมชนตาลล้อม1.g6569.FemaleOver,
       `${ชุมชนตาลล้อม1.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6569.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6569.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6569.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g6569.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g7074.MaleNormal,
      ชุมชนตาลล้อม1.g7074.MaleOver,
      ชุมชนตาลล้อม1.g7074.FemaleNormal,
      ชุมชนตาลล้อม1.g7074.FemaleOver,
       `${ชุมชนตาลล้อม1.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7074.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7074.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7074.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7074.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g7579.MaleNormal,
      ชุมชนตาลล้อม1.g7579.MaleOver,
      ชุมชนตาลล้อม1.g7579.FemaleNormal,
      ชุมชนตาลล้อม1.g7579.FemaleOver,
         `${ชุมชนตาลล้อม1.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7579.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7579.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7579.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g7579.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g8084.MaleNormal,
      ชุมชนตาลล้อม1.g8084.MaleOver,
      ชุมชนตาลล้อม1.g8084.FemaleNormal,
      ชุมชนตาลล้อม1.g8084.FemaleOver,
       `${ชุมชนตาลล้อม1.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8084.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8084.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8084.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8084.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g8589.MaleNormal,
      ชุมชนตาลล้อม1.g8589.MaleOver,
      ชุมชนตาลล้อม1.g8589.FemaleNormal,
      ชุมชนตาลล้อม1.g8589.FemaleOver,
       `${ชุมชนตาลล้อม1.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8589.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8589.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8589.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g8589.PerFemaleOver}`,
      ชุมชนตาลล้อม1.g9094.MaleNormal,
      ชุมชนตาลล้อม1.g9094.MaleOver,
      ชุมชนตาลล้อม1.g9094.FemaleNormal,
      ชุมชนตาลล้อม1.g9094.FemaleOver,
        `${ชุมชนตาลล้อม1.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g9094.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g9094.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g9094.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g9094.PerFemaleOver}`,

      ชุมชนตาลล้อม1.g95.MaleNormal,
      ชุมชนตาลล้อม1.g95.MaleOver,
      ชุมชนตาลล้อม1.g95.FemaleNormal,
      ชุมชนตาลล้อม1.g95.FemaleOver,
        `${ชุมชนตาลล้อม1.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g95.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g95.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g95.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.g95.PerFemaleOver}`,

      ชุมชนตาลล้อม1.Summary.MaleNormal,
      ชุมชนตาลล้อม1.Summary.MaleOver,
      ชุมชนตาลล้อม1.Summary.FemaleNormal,
      ชุมชนตาลล้อม1.Summary.FemaleOver,
       `${ชุมชนตาลล้อม1.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.Summary.PerMaleNormal}`,
      `${ชุมชนตาลล้อม1.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.Summary.PerMaleOver}`,
      `${ชุมชนตาลล้อม1.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม1.Summary.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม1.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม1.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนตาลล้อม2",
      ชุมชนตาลล้อม2.g6064.MaleNormal,
      ชุมชนตาลล้อม2.g6064.MaleOver,
      ชุมชนตาลล้อม2.g6064.FemaleNormal,
      ชุมชนตาลล้อม2.g6064.FemaleOver,
      `${ชุมชนตาลล้อม2.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6064.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6064.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6064.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6064.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g6569.MaleNormal,
      ชุมชนตาลล้อม2.g6569.MaleOver,
      ชุมชนตาลล้อม2.g6569.FemaleNormal,
      ชุมชนตาลล้อม2.g6569.FemaleOver,
       `${ชุมชนตาลล้อม2.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6569.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6569.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6569.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g6569.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g7074.MaleNormal,
      ชุมชนตาลล้อม2.g7074.MaleOver,
      ชุมชนตาลล้อม2.g7074.FemaleNormal,
      ชุมชนตาลล้อม2.g7074.FemaleOver,
      `${ชุมชนตาลล้อม2.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7074.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7074.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7074.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7074.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g7579.MaleNormal,
      ชุมชนตาลล้อม2.g7579.MaleOver,
      ชุมชนตาลล้อม2.g7579.FemaleNormal,
      ชุมชนตาลล้อม2.g7579.FemaleOver,
         `${ชุมชนตาลล้อม2.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7579.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7579.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7579.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g7579.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g8084.MaleNormal,
      ชุมชนตาลล้อม2.g8084.MaleOver,
      ชุมชนตาลล้อม2.g8084.FemaleNormal,
      ชุมชนตาลล้อม2.g8084.FemaleOver,
      `${ชุมชนตาลล้อม2.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8084.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8084.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8084.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8084.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g8589.MaleNormal,
      ชุมชนตาลล้อม2.g8589.MaleOver,
      ชุมชนตาลล้อม2.g8589.FemaleNormal,
      ชุมชนตาลล้อม2.g8589.FemaleOver,
       `${ชุมชนตาลล้อม2.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8589.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8589.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8589.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g8589.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g9094.MaleNormal,
      ชุมชนตาลล้อม2.g9094.MaleOver,
      ชุมชนตาลล้อม2.g9094.FemaleNormal,
      ชุมชนตาลล้อม2.g9094.FemaleOver,
        `${ชุมชนตาลล้อม2.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g9094.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g9094.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g9094.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g9094.PerFemaleOver}`,

      ชุมชนตาลล้อม2.g95.MaleNormal,
      ชุมชนตาลล้อม2.g95.MaleOver,
      ชุมชนตาลล้อม2.g95.FemaleNormal,
      ชุมชนตาลล้อม2.g95.FemaleOver,
       `${ชุมชนตาลล้อม2.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g95.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g95.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g95.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.g95.PerFemaleOver}`,

      ชุมชนตาลล้อม2.Summary.MaleNormal,
      ชุมชนตาลล้อม2.Summary.MaleOver,
      ชุมชนตาลล้อม2.Summary.FemaleNormal,
      ชุมชนตาลล้อม2.Summary.FemaleOver,
        `${ชุมชนตาลล้อม2.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.Summary.PerMaleNormal}`,
      `${ชุมชนตาลล้อม2.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.Summary.PerMaleOver}`,
      `${ชุมชนตาลล้อม2.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนตาลล้อม2.Summary.PerFemaleNormal}`,
      `${ชุมชนตาลล้อม2.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนตาลล้อม2.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนบ้านเหมือง",
      ชุมชนบ้านเหมือง.g6064.MaleNormal,
      ชุมชนบ้านเหมือง.g6064.MaleOver,
      ชุมชนบ้านเหมือง.g6064.FemaleNormal,
      ชุมชนบ้านเหมือง.g6064.FemaleOver,
      `${ชุมชนบ้านเหมือง.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6064.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6064.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6064.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6064.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g6569.MaleNormal,
      ชุมชนบ้านเหมือง.g6569.MaleOver,
      ชุมชนบ้านเหมือง.g6569.FemaleNormal,
      ชุมชนบ้านเหมือง.g6569.FemaleOver,
       `${ชุมชนบ้านเหมือง.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6569.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6569.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6569.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g6569.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g7074.MaleNormal,
      ชุมชนบ้านเหมือง.g7074.MaleOver,
      ชุมชนบ้านเหมือง.g7074.FemaleNormal,
      ชุมชนบ้านเหมือง.g7074.FemaleOver,
      `${ชุมชนบ้านเหมือง.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7074.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7074.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7074.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7074.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g7579.MaleNormal,
      ชุมชนบ้านเหมือง.g7579.MaleOver,
      ชุมชนบ้านเหมือง.g7579.FemaleNormal,
      ชุมชนบ้านเหมือง.g7579.FemaleOver,
         `${ชุมชนบ้านเหมือง.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7579.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7579.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7579.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g7579.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g8084.MaleNormal,
      ชุมชนบ้านเหมือง.g8084.MaleOver,
      ชุมชนบ้านเหมือง.g8084.FemaleNormal,
      ชุมชนบ้านเหมือง.g8084.FemaleOver,
       `${ชุมชนบ้านเหมือง.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8084.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8084.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8084.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8084.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g8589.MaleNormal,
      ชุมชนบ้านเหมือง.g8589.MaleOver,
      ชุมชนบ้านเหมือง.g8589.FemaleNormal,
      ชุมชนบ้านเหมือง.g8589.FemaleOver,
      `${ชุมชนบ้านเหมือง.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8589.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8589.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8589.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g8589.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.g9094.MaleNormal,
      ชุมชนบ้านเหมือง.g9094.MaleOver,
      ชุมชนบ้านเหมือง.g9094.FemaleNormal,
      ชุมชนบ้านเหมือง.g9094.FemaleOver,
       `${ชุมชนบ้านเหมือง.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g9094.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g9094.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g9094.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g9094.PerFemaleOver}`,
      ชุมชนบ้านเหมือง.g95.MaleNormal,
      ชุมชนบ้านเหมือง.g95.MaleOver,
      ชุมชนบ้านเหมือง.g95.FemaleNormal,
      ชุมชนบ้านเหมือง.g95.FemaleOver,
       `${ชุมชนบ้านเหมือง.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g95.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g95.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g95.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.g95.PerFemaleOver}`,

      ชุมชนบ้านเหมือง.Summary.MaleNormal,
      ชุมชนบ้านเหมือง.Summary.MaleOver,
      ชุมชนบ้านเหมือง.Summary.FemaleNormal,
      ชุมชนบ้านเหมือง.Summary.FemaleOver,
      `${ชุมชนบ้านเหมือง.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.Summary.PerMaleNormal}`,
      `${ชุมชนบ้านเหมือง.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.Summary.PerMaleOver}`,
      `${ชุมชนบ้านเหมือง.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.Summary.PerFemaleNormal}`,
      `${ชุมชนบ้านเหมือง.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านเหมือง.Summary.PerFemaleOver}`,
      
    ),
    createData(
      "ชุมชนพัฒนา2",
      ชุมชนพัฒนา2.g6064.MaleNormal,
      ชุมชนพัฒนา2.g6064.MaleOver,
      ชุมชนพัฒนา2.g6064.FemaleNormal,
      ชุมชนพัฒนา2.g6064.FemaleOver,
      `${ชุมชนพัฒนา2.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6064.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6064.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6064.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6064.PerFemaleOver}`,

      ชุมชนพัฒนา2.g6569.MaleNormal,
      ชุมชนพัฒนา2.g6569.MaleOver,
      ชุมชนพัฒนา2.g6569.FemaleNormal,
      ชุมชนพัฒนา2.g6569.FemaleOver,
       `${ชุมชนพัฒนา2.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6569.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6569.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6569.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g6569.PerFemaleOver}`,

      ชุมชนพัฒนา2.g7074.MaleNormal,
      ชุมชนพัฒนา2.g7074.MaleOver,
      ชุมชนพัฒนา2.g7074.FemaleNormal,
      ชุมชนพัฒนา2.g7074.FemaleOver,
       `${ชุมชนพัฒนา2.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7074.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7074.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7074.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7074.PerFemaleOver}`,

      ชุมชนพัฒนา2.g7579.MaleNormal,
      ชุมชนพัฒนา2.g7579.MaleOver,
      ชุมชนพัฒนา2.g7579.FemaleNormal,
      ชุมชนพัฒนา2.g7579.FemaleOver,
         `${ชุมชนพัฒนา2.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7579.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7579.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7579.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g7579.PerFemaleOver}`,

      ชุมชนพัฒนา2.g8084.MaleNormal,
      ชุมชนพัฒนา2.g8084.MaleOver,
      ชุมชนพัฒนา2.g8084.FemaleNormal,
      ชุมชนพัฒนา2.g8084.FemaleOver,
       `${ชุมชนพัฒนา2.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8084.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8084.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8084.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8084.PerFemaleOver}`,

      ชุมชนพัฒนา2.g8589.MaleNormal,
      ชุมชนพัฒนา2.g8589.MaleOver,
      ชุมชนพัฒนา2.g8589.FemaleNormal,
      ชุมชนพัฒนา2.g8589.FemaleOver,
       `${ชุมชนพัฒนา2.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8589.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8589.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8589.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g8589.PerFemaleOver}`,

      ชุมชนพัฒนา2.g9094.MaleNormal,
      ชุมชนพัฒนา2.g9094.MaleOver,
      ชุมชนพัฒนา2.g9094.FemaleNormal,
      ชุมชนพัฒนา2.g9094.FemaleOver,
        `${ชุมชนพัฒนา2.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g9094.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g9094.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g9094.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g9094.PerFemaleOver}`,

      ชุมชนพัฒนา2.g95.MaleNormal,
      ชุมชนพัฒนา2.g95.MaleOver,
      ชุมชนพัฒนา2.g95.FemaleNormal,
      ชุมชนพัฒนา2.g95.FemaleOver,
        `${ชุมชนพัฒนา2.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g95.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g95.PerMaleOver}`,
      `${ชุมชนพัฒนา2.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.g95.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.g95.PerFemaleOver}`,

      ชุมชนพัฒนา2.Summary.MaleNormal,
      ชุมชนพัฒนา2.Summary.MaleOver,
      ชุมชนพัฒนา2.Summary.FemaleNormal,
      ชุมชนพัฒนา2.Summary.FemaleOver,
       `${ชุมชนพัฒนา2.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.Summary.PerMaleNormal}`,
      `${ชุมชนพัฒนา2.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.Summary.PerMaleOver}`,
      `${ชุมชนพัฒนา2.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนพัฒนา2.Summary.PerFemaleNormal}`,
      `${ชุมชนพัฒนา2.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนพัฒนา2.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนดอนนารา",
      ชุมชนดอนนารา.g6064.MaleNormal,
      ชุมชนดอนนารา.g6064.MaleOver,
      ชุมชนดอนนารา.g6064.FemaleNormal,
      ชุมชนดอนนารา.g6064.FemaleOver,
      `${ชุมชนดอนนารา.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g6064.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g6064.PerMaleOver}`,
      `${ชุมชนดอนนารา.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g6064.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g6064.PerFemaleOver}`,

      ชุมชนดอนนารา.g6569.MaleNormal,
      ชุมชนดอนนารา.g6569.MaleOver,
      ชุมชนดอนนารา.g6569.FemaleNormal,
      ชุมชนดอนนารา.g6569.FemaleOver,
       `${ชุมชนดอนนารา.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g6569.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g6569.PerMaleOver}`,
      `${ชุมชนดอนนารา.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g6569.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g6569.PerFemaleOver}`,

      ชุมชนดอนนารา.g7074.MaleNormal,
      ชุมชนดอนนารา.g7074.MaleOver,
      ชุมชนดอนนารา.g7074.FemaleNormal,
      ชุมชนดอนนารา.g7074.FemaleOver,
       `${ชุมชนดอนนารา.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g7074.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g7074.PerMaleOver}`,
      `${ชุมชนดอนนารา.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g7074.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g7074.PerFemaleOver}`,

      ชุมชนดอนนารา.g7579.MaleNormal,
      ชุมชนดอนนารา.g7579.MaleOver,
      ชุมชนดอนนารา.g7579.FemaleNormal,
      ชุมชนดอนนารา.g7579.FemaleOver,
         `${ชุมชนดอนนารา.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g7579.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g7579.PerMaleOver}`,
      `${ชุมชนดอนนารา.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g7579.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g7579.PerFemaleOver}`,
      ชุมชนดอนนารา.g8084.MaleNormal,
      ชุมชนดอนนารา.g8084.MaleOver,
      ชุมชนดอนนารา.g8084.FemaleNormal,
      ชุมชนดอนนารา.g8084.FemaleOver,
       `${ชุมชนดอนนารา.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g8084.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g8084.PerMaleOver}`,
      `${ชุมชนดอนนารา.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g8084.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g8084.PerFemaleOver}`,

      ชุมชนดอนนารา.g8589.MaleNormal,
      ชุมชนดอนนารา.g8589.MaleOver,
      ชุมชนดอนนารา.g8589.FemaleNormal,
      ชุมชนดอนนารา.g8589.FemaleOver,
       `${ชุมชนดอนนารา.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g8589.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g8589.PerMaleOver}`,
      `${ชุมชนดอนนารา.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g8589.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g8589.PerFemaleOver}`,

      ชุมชนดอนนารา.g9094.MaleNormal,
      ชุมชนดอนนารา.g9094.MaleOver,
      ชุมชนดอนนารา.g9094.FemaleNormal,
      ชุมชนดอนนารา.g9094.FemaleOver,
        `${ชุมชนดอนนารา.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g9094.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g9094.PerMaleOver}`,
      `${ชุมชนดอนนารา.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g9094.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g9094.PerFemaleOver}`,

      ชุมชนดอนนารา.g95.MaleNormal,
      ชุมชนดอนนารา.g95.MaleOver,
      ชุมชนดอนนารา.g95.FemaleNormal,
      ชุมชนดอนนารา.g95.FemaleOver,
       `${ชุมชนดอนนารา.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g95.PerMaleNormal}`,
      `${ชุมชนดอนนารา.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g95.PerMaleOver}`,
      `${ชุมชนดอนนารา.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.g95.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.g95.PerFemaleOver}`,

      ชุมชนดอนนารา.Summary.MaleNormal,
      ชุมชนดอนนารา.Summary.MaleOver,
      ชุมชนดอนนารา.Summary.FemaleNormal,
      ชุมชนดอนนารา.Summary.FemaleOver,
        `${ชุมชนดอนนารา.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.Summary.PerMaleNormal}`,
      `${ชุมชนดอนนารา.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.Summary.PerMaleOver}`,
      `${ชุมชนดอนนารา.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนดอนนารา.Summary.PerFemaleNormal}`,
      `${ชุมชนดอนนารา.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนดอนนารา.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนวัดกลางดอน",
      ชุมชนวัดกลางดอน.g6064.MaleNormal,
      ชุมชนวัดกลางดอน.g6064.MaleOver,
      ชุมชนวัดกลางดอน.g6064.FemaleNormal,
      ชุมชนวัดกลางดอน.g6064.FemaleOver,
      `${ชุมชนวัดกลางดอน.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6064.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6064.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6064.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6064.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g6569.MaleNormal,
      ชุมชนวัดกลางดอน.g6569.MaleOver,
      ชุมชนวัดกลางดอน.g6569.FemaleNormal,
      ชุมชนวัดกลางดอน.g6569.FemaleOver,
       `${ชุมชนวัดกลางดอน.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6569.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6569.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6569.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g6569.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g7074.MaleNormal,
      ชุมชนวัดกลางดอน.g7074.MaleOver,
      ชุมชนวัดกลางดอน.g7074.FemaleNormal,
      ชุมชนวัดกลางดอน.g7074.FemaleOver,
       `${ชุมชนวัดกลางดอน.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7074.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7074.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7074.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7074.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g7579.MaleNormal,
      ชุมชนวัดกลางดอน.g7579.MaleOver,
      ชุมชนวัดกลางดอน.g7579.FemaleNormal,
      ชุมชนวัดกลางดอน.g7579.FemaleOver,
         `${ชุมชนวัดกลางดอน.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7579.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7579.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7579.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g7579.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g8084.MaleNormal,
      ชุมชนวัดกลางดอน.g8084.MaleOver,
      ชุมชนวัดกลางดอน.g8084.FemaleNormal,
      ชุมชนวัดกลางดอน.g8084.FemaleOver,
       `${ชุมชนวัดกลางดอน.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8084.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8084.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8084.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8084.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g8589.MaleNormal,
      ชุมชนวัดกลางดอน.g8589.MaleOver,
      ชุมชนวัดกลางดอน.g8589.FemaleNormal,
      ชุมชนวัดกลางดอน.g8589.FemaleOver,
       `${ชุมชนวัดกลางดอน.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8589.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8589.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8589.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g8589.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g9094.MaleNormal,
      ชุมชนวัดกลางดอน.g9094.MaleOver,
      ชุมชนวัดกลางดอน.g9094.FemaleNormal,
      ชุมชนวัดกลางดอน.g9094.FemaleOver,
        `${ชุมชนวัดกลางดอน.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g9094.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g9094.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g9094.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g9094.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.g95.MaleNormal,
      ชุมชนวัดกลางดอน.g95.MaleOver,
      ชุมชนวัดกลางดอน.g95.FemaleNormal,
      ชุมชนวัดกลางดอน.g95.FemaleOver,
        `${ชุมชนวัดกลางดอน.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g95.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g95.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g95.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.g95.PerFemaleOver}`,

      ชุมชนวัดกลางดอน.Summary.MaleNormal,
      ชุมชนวัดกลางดอน.Summary.MaleOver,
      ชุมชนวัดกลางดอน.Summary.FemaleNormal,
      ชุมชนวัดกลางดอน.Summary.FemaleOver,
        `${ชุมชนวัดกลางดอน.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.Summary.PerMaleNormal}`,
      `${ชุมชนวัดกลางดอน.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.Summary.PerMaleOver}`,
      `${ชุมชนวัดกลางดอน.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.Summary.PerFemaleNormal}`,
      `${ชุมชนวัดกลางดอน.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดกลางดอน.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนแสนสุข",
      ชุมชนแสนสุข.g6064.MaleNormal,
      ชุมชนแสนสุข.g6064.MaleOver,
      ชุมชนแสนสุข.g6064.FemaleNormal,
      ชุมชนแสนสุข.g6064.FemaleOver,
      `${ชุมชนแสนสุข.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g6064.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g6064.PerMaleOver}`,
      `${ชุมชนแสนสุข.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g6064.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g6064.PerFemaleOver}`,

      ชุมชนแสนสุข.g6569.MaleNormal,
      ชุมชนแสนสุข.g6569.MaleOver,
      ชุมชนแสนสุข.g6569.FemaleNormal,
      ชุมชนแสนสุข.g6569.FemaleOver,
       `${ชุมชนแสนสุข.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g6569.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g6569.PerMaleOver}`,
      `${ชุมชนแสนสุข.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g6569.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g6569.PerFemaleOver}`,

      ชุมชนแสนสุข.g7074.MaleNormal,
      ชุมชนแสนสุข.g7074.MaleOver,
      ชุมชนแสนสุข.g7074.FemaleNormal,
      ชุมชนแสนสุข.g7074.FemaleOver,
       `${ชุมชนแสนสุข.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g7074.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g7074.PerMaleOver}`,
      `${ชุมชนแสนสุข.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g7074.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g7074.PerFemaleOver}`,
      ชุมชนแสนสุข.g7579.MaleNormal,
      ชุมชนแสนสุข.g7579.MaleOver,
      ชุมชนแสนสุข.g7579.FemaleNormal,
      ชุมชนแสนสุข.g7579.FemaleOver,
         `${ชุมชนแสนสุข.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g7579.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g7579.PerMaleOver}`,
      `${ชุมชนแสนสุข.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g7579.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g7579.PerFemaleOver}`,

      ชุมชนแสนสุข.g8084.MaleNormal,
      ชุมชนแสนสุข.g8084.MaleOver,
      ชุมชนแสนสุข.g8084.FemaleNormal,
      ชุมชนแสนสุข.g8084.FemaleOver,
       `${ชุมชนแสนสุข.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g8084.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g8084.PerMaleOver}`,
      `${ชุมชนแสนสุข.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g8084.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g8084.PerFemaleOver}`,

      ชุมชนแสนสุข.g8589.MaleNormal,
      ชุมชนแสนสุข.g8589.MaleOver,
      ชุมชนแสนสุข.g8589.FemaleNormal,
      ชุมชนแสนสุข.g8589.FemaleOver,
       `${ชุมชนแสนสุข.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g8589.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g8589.PerMaleOver}`,
      `${ชุมชนแสนสุข.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g8589.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g8589.PerFemaleOver}`,

      ชุมชนแสนสุข.g9094.MaleNormal,
      ชุมชนแสนสุข.g9094.MaleOver,
      ชุมชนแสนสุข.g9094.FemaleNormal,
      ชุมชนแสนสุข.g9094.FemaleOver,
        `${ชุมชนแสนสุข.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g9094.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g9094.PerMaleOver}`,
      `${ชุมชนแสนสุข.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g9094.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g9094.PerFemaleOver}`,

      ชุมชนแสนสุข.g95.MaleNormal,
      ชุมชนแสนสุข.g95.MaleOver,
      ชุมชนแสนสุข.g95.FemaleNormal,
      ชุมชนแสนสุข.g95.FemaleOver,
        `${ชุมชนแสนสุข.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g95.PerMaleNormal}`,
      `${ชุมชนแสนสุข.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g95.PerMaleOver}`,
      `${ชุมชนแสนสุข.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.g95.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.g95.PerFemaleOver}`,

      ชุมชนแสนสุข.Summary.MaleNormal,
      ชุมชนแสนสุข.Summary.MaleOver,
      ชุมชนแสนสุข.Summary.FemaleNormal,
      ชุมชนแสนสุข.Summary.FemaleOver,
        `${ชุมชนแสนสุข.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.Summary.PerMaleNormal}`,
      `${ชุมชนแสนสุข.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.Summary.PerMaleOver}`,
      `${ชุมชนแสนสุข.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนแสนสุข.Summary.PerFemaleNormal}`,
      `${ชุมชนแสนสุข.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนแสนสุข.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนมาบมะยม",
      ชุมชนมาบมะยม.g6064.MaleNormal,
      ชุมชนมาบมะยม.g6064.MaleOver,
      ชุมชนมาบมะยม.g6064.FemaleNormal,
      ชุมชนมาบมะยม.g6064.FemaleOver,
      `${ชุมชนมาบมะยม.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6064.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6064.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6064.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6064.PerFemaleOver}`,

      ชุมชนมาบมะยม.g6569.MaleNormal,
      ชุมชนมาบมะยม.g6569.MaleOver,
      ชุมชนมาบมะยม.g6569.FemaleNormal,
      ชุมชนมาบมะยม.g6569.FemaleOver,
       `${ชุมชนมาบมะยม.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6569.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6569.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6569.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g6569.PerFemaleOver}`,

      ชุมชนมาบมะยม.g7074.MaleNormal,
      ชุมชนมาบมะยม.g7074.MaleOver,
      ชุมชนมาบมะยม.g7074.FemaleNormal,
      ชุมชนมาบมะยม.g7074.FemaleOver,
       `${ชุมชนมาบมะยม.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7074.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7074.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7074.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7074.PerFemaleOver}`,

      ชุมชนมาบมะยม.g7579.MaleNormal,
      ชุมชนมาบมะยม.g7579.MaleOver,
      ชุมชนมาบมะยม.g7579.FemaleNormal,
      ชุมชนมาบมะยม.g7579.FemaleOver,
         `${ชุมชนมาบมะยม.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7579.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7579.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7579.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g7579.PerFemaleOver}`,
      ชุมชนมาบมะยม.g8084.MaleNormal,
      ชุมชนมาบมะยม.g8084.MaleOver,
      ชุมชนมาบมะยม.g8084.FemaleNormal,
      ชุมชนมาบมะยม.g8084.FemaleOver,
       `${ชุมชนมาบมะยม.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8084.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8084.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8084.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8084.PerFemaleOver}`,

      ชุมชนมาบมะยม.g8589.MaleNormal,
      ชุมชนมาบมะยม.g8589.MaleOver,
      ชุมชนมาบมะยม.g8589.FemaleNormal,
      ชุมชนมาบมะยม.g8589.FemaleOver,
       `${ชุมชนมาบมะยม.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8589.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8589.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8589.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g8589.PerFemaleOver}`,
      ชุมชนมาบมะยม.g9094.MaleNormal,
      ชุมชนมาบมะยม.g9094.MaleOver,
      ชุมชนมาบมะยม.g9094.FemaleNormal,
      ชุมชนมาบมะยม.g9094.FemaleOver,
        `${ชุมชนมาบมะยม.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g9094.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g9094.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g9094.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g9094.PerFemaleOver}`,

      ชุมชนมาบมะยม.g95.MaleNormal,
      ชุมชนมาบมะยม.g95.MaleOver,
      ชุมชนมาบมะยม.g95.FemaleNormal,
      ชุมชนมาบมะยม.g95.FemaleOver,
        `${ชุมชนมาบมะยม.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g95.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g95.PerMaleOver}`,
      `${ชุมชนมาบมะยม.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.g95.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.g95.PerFemaleOver}`,

      ชุมชนมาบมะยม.Summary.MaleNormal,
      ชุมชนมาบมะยม.Summary.MaleOver,
      ชุมชนมาบมะยม.Summary.FemaleNormal,
      ชุมชนมาบมะยม.Summary.FemaleOver,
        `${ชุมชนมาบมะยม.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.Summary.PerMaleNormal}`,
      `${ชุมชนมาบมะยม.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.Summary.PerMaleOver}`,
      `${ชุมชนมาบมะยม.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมาบมะยม.Summary.PerFemaleNormal}`,
      `${ชุมชนมาบมะยม.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมาบมะยม.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนท้ายตลาด",
      ชุมชนท้ายตลาด.g6064.MaleNormal,
      ชุมชนท้ายตลาด.g6064.MaleOver,
      ชุมชนท้ายตลาด.g6064.FemaleNormal,
      ชุมชนท้ายตลาด.g6064.FemaleOver,
      `${ชุมชนท้ายตลาด.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6064.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6064.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6064.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6064.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g6569.MaleNormal,
      ชุมชนท้ายตลาด.g6569.MaleOver,
      ชุมชนท้ายตลาด.g6569.FemaleNormal,
      ชุมชนท้ายตลาด.g6569.FemaleOver,
       `${ชุมชนท้ายตลาด.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6569.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6569.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6569.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g6569.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g7074.MaleNormal,
      ชุมชนท้ายตลาด.g7074.MaleOver,
      ชุมชนท้ายตลาด.g7074.FemaleNormal,
      ชุมชนท้ายตลาด.g7074.FemaleOver,
       `${ชุมชนท้ายตลาด.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7074.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7074.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7074.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7074.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g7579.MaleNormal,
      ชุมชนท้ายตลาด.g7579.MaleOver,
      ชุมชนท้ายตลาด.g7579.FemaleNormal,
      ชุมชนท้ายตลาด.g7579.FemaleOver,
        `${ชุมชนท้ายตลาด.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7579.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7579.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7579.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g7579.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g8084.MaleNormal,
      ชุมชนท้ายตลาด.g8084.MaleOver,
      ชุมชนท้ายตลาด.g8084.FemaleNormal,
      ชุมชนท้ายตลาด.g8084.FemaleOver,
       `${ชุมชนท้ายตลาด.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8084.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8084.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8084.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8084.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g8589.MaleNormal,
      ชุมชนท้ายตลาด.g8589.MaleOver,
      ชุมชนท้ายตลาด.g8589.FemaleNormal,
      ชุมชนท้ายตลาด.g8589.FemaleOver,
       `${ชุมชนท้ายตลาด.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8589.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8589.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8589.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g8589.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g9094.MaleNormal,
      ชุมชนท้ายตลาด.g9094.MaleOver,
      ชุมชนท้ายตลาด.g9094.FemaleNormal,
      ชุมชนท้ายตลาด.g9094.FemaleOver,
        `${ชุมชนท้ายตลาด.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g9094.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g9094.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g9094.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g9094.PerFemaleOver}`,

      ชุมชนท้ายตลาด.g95.MaleNormal,
      ชุมชนท้ายตลาด.g95.MaleOver,
      ชุมชนท้ายตลาด.g95.FemaleNormal,
      ชุมชนท้ายตลาด.g95.FemaleOver,
        `${ชุมชนท้ายตลาด.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g95.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g95.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g95.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.g95.PerFemaleOver}`,

      ชุมชนท้ายตลาด.Summary.MaleNormal,
      ชุมชนท้ายตลาด.Summary.MaleOver,
      ชุมชนท้ายตลาด.Summary.FemaleNormal,
      ชุมชนท้ายตลาด.Summary.FemaleOver,
        `${ชุมชนท้ายตลาด.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.Summary.PerMaleNormal}`,
      `${ชุมชนท้ายตลาด.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.Summary.PerMaleOver}`,
      `${ชุมชนท้ายตลาด.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนท้ายตลาด.Summary.PerFemaleNormal}`,
      `${ชุมชนท้ายตลาด.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนท้ายตลาด.Summary.PerFemaleOver}`,

    ),
    createData(
      "ชุมชนร่วมใจพัฒนา",
      ชุมชนร่วมใจพัฒนา.g6064.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g6064.MaleOver,
      ชุมชนร่วมใจพัฒนา.g6064.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g6064.FemaleOver,
      `${ชุมชนร่วมใจพัฒนา.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6064.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6064.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6064.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6064.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g6569.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g6569.MaleOver,
      ชุมชนร่วมใจพัฒนา.g6569.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g6569.FemaleOver,
       `${ชุมชนร่วมใจพัฒนา.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6569.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6569.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6569.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g6569.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g7074.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g7074.MaleOver,
      ชุมชนร่วมใจพัฒนา.g7074.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g7074.FemaleOver,
       `${ชุมชนร่วมใจพัฒนา.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7074.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7074.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7074.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7074.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g7579.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g7579.MaleOver,
      ชุมชนร่วมใจพัฒนา.g7579.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g7579.FemaleOver,
         `${ชุมชนร่วมใจพัฒนา.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7579.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7579.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7579.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g7579.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g8084.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g8084.MaleOver,
      ชุมชนร่วมใจพัฒนา.g8084.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g8084.FemaleOver,
       `${ชุมชนร่วมใจพัฒนา.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8084.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8084.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8084.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8084.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g8589.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g8589.MaleOver,
      ชุมชนร่วมใจพัฒนา.g8589.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g8589.FemaleOver,
       `${ชุมชนร่วมใจพัฒนา.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8589.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8589.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8589.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g8589.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g9094.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g9094.MaleOver,
      ชุมชนร่วมใจพัฒนา.g9094.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g9094.FemaleOver,
        `${ชุมชนร่วมใจพัฒนา.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g9094.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g9094.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g9094.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g9094.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.g95.MaleNormal,
      ชุมชนร่วมใจพัฒนา.g95.MaleOver,
      ชุมชนร่วมใจพัฒนา.g95.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.g95.FemaleOver,
        `${ชุมชนร่วมใจพัฒนา.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g95.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g95.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g95.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.g95.PerFemaleOver}`,

      ชุมชนร่วมใจพัฒนา.Summary.MaleNormal,
      ชุมชนร่วมใจพัฒนา.Summary.MaleOver,
      ชุมชนร่วมใจพัฒนา.Summary.FemaleNormal,
      ชุมชนร่วมใจพัฒนา.Summary.FemaleOver,
        `${ชุมชนร่วมใจพัฒนา.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.Summary.PerMaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.Summary.PerMaleOver}`,
      `${ชุมชนร่วมใจพัฒนา.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.Summary.PerFemaleNormal}`,
      `${ชุมชนร่วมใจพัฒนา.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนร่วมใจพัฒนา.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนบางแสนบน",
      ชุมชนบางแสนบน.g6064.MaleNormal,
      ชุมชนบางแสนบน.g6064.MaleOver,
      ชุมชนบางแสนบน.g6064.FemaleNormal,
      ชุมชนบางแสนบน.g6064.FemaleOver,
      `${ชุมชนบางแสนบน.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6064.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6064.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6064.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6064.PerFemaleOver}`,

      ชุมชนบางแสนบน.g6569.MaleNormal,
      ชุมชนบางแสนบน.g6569.MaleOver,
      ชุมชนบางแสนบน.g6569.FemaleNormal,
      ชุมชนบางแสนบน.g6569.FemaleOver,
       `${ชุมชนบางแสนบน.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6569.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6569.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6569.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g6569.PerFemaleOver}`,

      ชุมชนบางแสนบน.g7074.MaleNormal,
      ชุมชนบางแสนบน.g7074.MaleOver,
      ชุมชนบางแสนบน.g7074.FemaleNormal,
      ชุมชนบางแสนบน.g7074.FemaleOver,
       `${ชุมชนบางแสนบน.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7074.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7074.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7074.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7074.PerFemaleOver}`,

      ชุมชนบางแสนบน.g7579.MaleNormal,
      ชุมชนบางแสนบน.g7579.MaleOver,
      ชุมชนบางแสนบน.g7579.FemaleNormal,
      ชุมชนบางแสนบน.g7579.FemaleOver,
         `${ชุมชนบางแสนบน.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7579.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7579.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7579.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g7579.PerFemaleOver}`,

      ชุมชนบางแสนบน.g8084.MaleNormal,
      ชุมชนบางแสนบน.g8084.MaleOver,
      ชุมชนบางแสนบน.g8084.FemaleNormal,
      ชุมชนบางแสนบน.g8084.FemaleOver,
       `${ชุมชนบางแสนบน.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8084.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8084.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8084.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8084.PerFemaleOver}`,

      ชุมชนบางแสนบน.g8589.MaleNormal,
      ชุมชนบางแสนบน.g8589.MaleOver,
      ชุมชนบางแสนบน.g8589.FemaleNormal,
      ชุมชนบางแสนบน.g8589.FemaleOver,
       `${ชุมชนบางแสนบน.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8589.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8589.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8589.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g8589.PerFemaleOver}`,

      ชุมชนบางแสนบน.g9094.MaleNormal,
      ชุมชนบางแสนบน.g9094.MaleOver,
      ชุมชนบางแสนบน.g9094.FemaleNormal,
      ชุมชนบางแสนบน.g9094.FemaleOver,
        `${ชุมชนบางแสนบน.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g9094.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g9094.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g9094.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g9094.PerFemaleOver}`,
      ชุมชนบางแสนบน.g95.MaleNormal,
      ชุมชนบางแสนบน.g95.MaleOver,
      ชุมชนบางแสนบน.g95.FemaleNormal,
      ชุมชนบางแสนบน.g95.FemaleOver,
        `${ชุมชนบางแสนบน.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g95.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g95.PerMaleOver}`,
      `${ชุมชนบางแสนบน.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.g95.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.g95.PerFemaleOver}`,

      ชุมชนบางแสนบน.Summary.MaleNormal,
      ชุมชนบางแสนบน.Summary.MaleOver,
      ชุมชนบางแสนบน.Summary.FemaleNormal,
      ชุมชนบางแสนบน.Summary.FemaleOver,
        `${ชุมชนบางแสนบน.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.Summary.PerMaleNormal}`,
      `${ชุมชนบางแสนบน.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.Summary.PerMaleOver}`,
      `${ชุมชนบางแสนบน.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางแสนบน.Summary.PerFemaleNormal}`,
      `${ชุมชนบางแสนบน.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางแสนบน.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนหาดวอนนภา",
      ชุมชนหาดวอนนภา.g6064.MaleNormal,
      ชุมชนหาดวอนนภา.g6064.MaleOver,
      ชุมชนหาดวอนนภา.g6064.FemaleNormal,
      ชุมชนหาดวอนนภา.g6064.FemaleOver,
      `${ชุมชนหาดวอนนภา.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6064.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6064.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6064.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6064.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g6569.MaleNormal,
      ชุมชนหาดวอนนภา.g6569.MaleOver,
      ชุมชนหาดวอนนภา.g6569.FemaleNormal,
      ชุมชนหาดวอนนภา.g6569.FemaleOver,
       `${ชุมชนหาดวอนนภา.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6569.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6569.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6569.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g6569.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g7074.MaleNormal,
      ชุมชนหาดวอนนภา.g7074.MaleOver,
      ชุมชนหาดวอนนภา.g7074.FemaleNormal,
      ชุมชนหาดวอนนภา.g7074.FemaleOver,
       `${ชุมชนหาดวอนนภา.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7074.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7074.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7074.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7074.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g7579.MaleNormal,
      ชุมชนหาดวอนนภา.g7579.MaleOver,
      ชุมชนหาดวอนนภา.g7579.FemaleNormal,
      ชุมชนหาดวอนนภา.g7579.FemaleOver,
         `${ชุมชนหาดวอนนภา.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7579.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7579.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7579.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g7579.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g8084.MaleNormal,
      ชุมชนหาดวอนนภา.g8084.MaleOver,
      ชุมชนหาดวอนนภา.g8084.FemaleNormal,
      ชุมชนหาดวอนนภา.g8084.FemaleOver,
       `${ชุมชนหาดวอนนภา.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8084.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8084.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8084.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8084.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g8589.MaleNormal,
      ชุมชนหาดวอนนภา.g8589.MaleOver,
      ชุมชนหาดวอนนภา.g8589.FemaleNormal,
      ชุมชนหาดวอนนภา.g8589.FemaleOver,
       `${ชุมชนหาดวอนนภา.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8589.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8589.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8589.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g8589.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g9094.MaleNormal,
      ชุมชนหาดวอนนภา.g9094.MaleOver,
      ชุมชนหาดวอนนภา.g9094.FemaleNormal,
      ชุมชนหาดวอนนภา.g9094.FemaleOver,
        `${ชุมชนหาดวอนนภา.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g9094.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g9094.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g9094.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g9094.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.g95.MaleNormal,
      ชุมชนหาดวอนนภา.g95.MaleOver,
      ชุมชนหาดวอนนภา.g95.FemaleNormal,
      ชุมชนหาดวอนนภา.g95.FemaleOver,
        `${ชุมชนหาดวอนนภา.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g95.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g95.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g95.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.g95.PerFemaleOver}`,

      ชุมชนหาดวอนนภา.Summary.MaleNormal,
      ชุมชนหาดวอนนภา.Summary.MaleOver,
      ชุมชนหาดวอนนภา.Summary.FemaleNormal,
      ชุมชนหาดวอนนภา.Summary.FemaleOver,
        `${ชุมชนหาดวอนนภา.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.Summary.PerMaleNormal}`,
      `${ชุมชนหาดวอนนภา.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.Summary.PerMaleOver}`,
      `${ชุมชนหาดวอนนภา.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.Summary.PerFemaleNormal}`,
      `${ชุมชนหาดวอนนภา.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหาดวอนนภา.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนบางเป้ง",
      ชุมชนบางเป้ง.g6064.MaleNormal,
      ชุมชนบางเป้ง.g6064.MaleOver,
      ชุมชนบางเป้ง.g6064.FemaleNormal,
      ชุมชนบางเป้ง.g6064.FemaleOver,
      `${ชุมชนบางเป้ง.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6064.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6064.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6064.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6064.PerFemaleOver}`,

      ชุมชนบางเป้ง.g6569.MaleNormal,
      ชุมชนบางเป้ง.g6569.MaleOver,
      ชุมชนบางเป้ง.g6569.FemaleNormal,
      ชุมชนบางเป้ง.g6569.FemaleOver,
       `${ชุมชนบางเป้ง.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6569.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6569.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6569.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g6569.PerFemaleOver}`,

      ชุมชนบางเป้ง.g7074.MaleNormal,
      ชุมชนบางเป้ง.g7074.MaleOver,
      ชุมชนบางเป้ง.g7074.FemaleNormal,
      ชุมชนบางเป้ง.g7074.FemaleOver,
       `${ชุมชนบางเป้ง.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7074.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7074.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7074.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7074.PerFemaleOver}`,

      ชุมชนบางเป้ง.g7579.MaleNormal,
      ชุมชนบางเป้ง.g7579.MaleOver,
      ชุมชนบางเป้ง.g7579.FemaleNormal,
      ชุมชนบางเป้ง.g7579.FemaleOver,
         `${ชุมชนบางเป้ง.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7579.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7579.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7579.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g7579.PerFemaleOver}`,

      ชุมชนบางเป้ง.g8084.MaleNormal,
      ชุมชนบางเป้ง.g8084.MaleOver,
      ชุมชนบางเป้ง.g8084.FemaleNormal,
      ชุมชนบางเป้ง.g8084.FemaleOver,
       `${ชุมชนบางเป้ง.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8084.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8084.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8084.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8084.PerFemaleOver}`,

      ชุมชนบางเป้ง.g8589.MaleNormal,
      ชุมชนบางเป้ง.g8589.MaleOver,
      ชุมชนบางเป้ง.g8589.FemaleNormal,
      ชุมชนบางเป้ง.g8589.FemaleOver,
       `${ชุมชนบางเป้ง.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8589.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8589.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8589.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g8589.PerFemaleOver}`,

      ชุมชนบางเป้ง.g9094.MaleNormal,
      ชุมชนบางเป้ง.g9094.MaleOver,
      ชุมชนบางเป้ง.g9094.FemaleNormal,
      ชุมชนบางเป้ง.g9094.FemaleOver,
        `${ชุมชนบางเป้ง.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g9094.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g9094.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g9094.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g9094.PerFemaleOver}`,

      ชุมชนบางเป้ง.g95.MaleNormal,
      ชุมชนบางเป้ง.g95.MaleOver,
      ชุมชนบางเป้ง.g95.FemaleNormal,
      ชุมชนบางเป้ง.g95.FemaleOver,
        `${ชุมชนบางเป้ง.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g95.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g95.PerMaleOver}`,
      `${ชุมชนบางเป้ง.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.g95.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.g95.PerFemaleOver}`,

      ชุมชนบางเป้ง.Summary.MaleNormal,
      ชุมชนบางเป้ง.Summary.MaleOver,
      ชุมชนบางเป้ง.Summary.FemaleNormal,
      ชุมชนบางเป้ง.Summary.FemaleOver,
        `${ชุมชนบางเป้ง.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.Summary.PerMaleNormal}`,
      `${ชุมชนบางเป้ง.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.Summary.PerMaleOver}`,
      `${ชุมชนบางเป้ง.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบางเป้ง.Summary.PerFemaleNormal}`,
      `${ชุมชนบางเป้ง.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบางเป้ง.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนหน้ามอ",
      ชุมชนหน้ามอ.g6064.MaleNormal,
      ชุมชนหน้ามอ.g6064.MaleOver,
      ชุมชนหน้ามอ.g6064.FemaleNormal,
      ชุมชนหน้ามอ.g6064.FemaleOver,
      `${ชุมชนหน้ามอ.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6064.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6064.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6064.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6064.PerFemaleOver}`,

      ชุมชนหน้ามอ.g6569.MaleNormal,
      ชุมชนหน้ามอ.g6569.MaleOver,
      ชุมชนหน้ามอ.g6569.FemaleNormal,
      ชุมชนหน้ามอ.g6569.FemaleOver,
       `${ชุมชนหน้ามอ.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6569.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6569.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6569.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g6569.PerFemaleOver}`,

      ชุมชนหน้ามอ.g7074.MaleNormal,
      ชุมชนหน้ามอ.g7074.MaleOver,
      ชุมชนหน้ามอ.g7074.FemaleNormal,
      ชุมชนหน้ามอ.g7074.FemaleOver,
       `${ชุมชนหน้ามอ.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7074.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7074.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7074.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7074.PerFemaleOver}`,

      ชุมชนหน้ามอ.g7579.MaleNormal,
      ชุมชนหน้ามอ.g7579.MaleOver,
      ชุมชนหน้ามอ.g7579.FemaleNormal,
      ชุมชนหน้ามอ.g7579.FemaleOver,
         `${ชุมชนหน้ามอ.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7579.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7579.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7579.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g7579.PerFemaleOver}`,

      ชุมชนหน้ามอ.g8084.MaleNormal,
      ชุมชนหน้ามอ.g8084.MaleOver,
      ชุมชนหน้ามอ.g8084.FemaleNormal,
      ชุมชนหน้ามอ.g8084.FemaleOver,
       `${ชุมชนหน้ามอ.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8084.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8084.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8084.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8084.PerFemaleOver}`,

      ชุมชนหน้ามอ.g8589.MaleNormal,
      ชุมชนหน้ามอ.g8589.MaleOver,
      ชุมชนหน้ามอ.g8589.FemaleNormal,
      ชุมชนหน้ามอ.g8589.FemaleOver,
       `${ชุมชนหน้ามอ.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8589.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8589.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8589.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g8589.PerFemaleOver}`,

      ชุมชนหน้ามอ.g9094.MaleNormal,
      ชุมชนหน้ามอ.g9094.MaleOver,
      ชุมชนหน้ามอ.g9094.FemaleNormal,
      ชุมชนหน้ามอ.g9094.FemaleOver,
        `${ชุมชนหน้ามอ.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g9094.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g9094.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g9094.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g9094.PerFemaleOver}`,

      ชุมชนหน้ามอ.g95.MaleNormal,
      ชุมชนหน้ามอ.g95.MaleOver,
      ชุมชนหน้ามอ.g95.FemaleNormal,
      ชุมชนหน้ามอ.g95.FemaleOver,
        `${ชุมชนหน้ามอ.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g95.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g95.PerMaleOver}`,
      `${ชุมชนหน้ามอ.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.g95.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.g95.PerFemaleOver}`,

      ชุมชนหน้ามอ.Summary.MaleNormal,
      ชุมชนหน้ามอ.Summary.MaleOver,
      ชุมชนหน้ามอ.Summary.FemaleNormal,
      ชุมชนหน้ามอ.Summary.FemaleOver,
        `${ชุมชนหน้ามอ.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.Summary.PerMaleNormal}`,
      `${ชุมชนหน้ามอ.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.Summary.PerMaleOver}`,
      `${ชุมชนหน้ามอ.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้ามอ.Summary.PerFemaleNormal}`,
      `${ชุมชนหน้ามอ.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้ามอ.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนโชคดี",
      ชุมชนโชคดี.g6064.MaleNormal,
      ชุมชนโชคดี.g6064.MaleOver,
      ชุมชนโชคดี.g6064.FemaleNormal,
      ชุมชนโชคดี.g6064.FemaleOver,
      `${ชุมชนโชคดี.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g6064.PerMaleNormal}`,
      `${ชุมชนโชคดี.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g6064.PerMaleOver}`,
      `${ชุมชนโชคดี.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g6064.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g6064.PerFemaleOver}`,

      ชุมชนโชคดี.g6569.MaleNormal,
      ชุมชนโชคดี.g6569.MaleOver,
      ชุมชนโชคดี.g6569.FemaleNormal,
      ชุมชนโชคดี.g6569.FemaleOver,
       `${ชุมชนโชคดี.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g6569.PerMaleNormal}`,
      `${ชุมชนโชคดี.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g6569.PerMaleOver}`,
      `${ชุมชนโชคดี.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g6569.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g6569.PerFemaleOver}`,

      ชุมชนโชคดี.g7074.MaleNormal,
      ชุมชนโชคดี.g7074.MaleOver,
      ชุมชนโชคดี.g7074.FemaleNormal,
      ชุมชนโชคดี.g7074.FemaleOver,
       `${ชุมชนโชคดี.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g7074.PerMaleNormal}`,
      `${ชุมชนโชคดี.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g7074.PerMaleOver}`,
      `${ชุมชนโชคดี.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g7074.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g7074.PerFemaleOver}`,

      ชุมชนโชคดี.g7579.MaleNormal,
      ชุมชนโชคดี.g7579.MaleOver,
      ชุมชนโชคดี.g7579.FemaleNormal,
      ชุมชนโชคดี.g7579.FemaleOver,
         `${ชุมชนโชคดี.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g7579.PerMaleNormal}`,
      `${ชุมชนโชคดี.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g7579.PerMaleOver}`,
      `${ชุมชนโชคดี.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g7579.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g7579.PerFemaleOver}`,

      ชุมชนโชคดี.g8084.MaleNormal,
      ชุมชนโชคดี.g8084.MaleOver,
      ชุมชนโชคดี.g8084.FemaleNormal,
      ชุมชนโชคดี.g8084.FemaleOver,
       `${ชุมชนโชคดี.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g8084.PerMaleNormal}`,
      `${ชุมชนโชคดี.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g8084.PerMaleOver}`,
      `${ชุมชนโชคดี.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g8084.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g8084.PerFemaleOver}`,

      ชุมชนโชคดี.g8589.MaleNormal,
      ชุมชนโชคดี.g8589.MaleOver,
      ชุมชนโชคดี.g8589.FemaleNormal,
      ชุมชนโชคดี.g8589.FemaleOver,
       `${ชุมชนโชคดี.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g8589.PerMaleNormal}`,
      `${ชุมชนโชคดี.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g8589.PerMaleOver}`,
      `${ชุมชนโชคดี.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g8589.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g8589.PerFemaleOver}`,

      ชุมชนโชคดี.g9094.MaleNormal,
      ชุมชนโชคดี.g9094.MaleOver,
      ชุมชนโชคดี.g9094.FemaleNormal,
      ชุมชนโชคดี.g9094.FemaleOver,
        `${ชุมชนโชคดี.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g9094.PerMaleNormal}`,
      `${ชุมชนโชคดี.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g9094.PerMaleOver}`,
      `${ชุมชนโชคดี.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g9094.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g9094.PerFemaleOver}`,

      ชุมชนโชคดี.g95.MaleNormal,
      ชุมชนโชคดี.g95.MaleOver,
      ชุมชนโชคดี.g95.FemaleNormal,
      ชุมชนโชคดี.g95.FemaleOver,
        `${ชุมชนโชคดี.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g95.PerMaleNormal}`,
      `${ชุมชนโชคดี.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g95.PerMaleOver}`,
      `${ชุมชนโชคดี.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.g95.PerFemaleNormal}`,
      `${ชุมชนโชคดี.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.g95.PerFemaleOver}`,

      ชุมชนโชคดี.Summary.MaleNormal,
      ชุมชนโชคดี.Summary.MaleOver,
      ชุมชนโชคดี.Summary.FemaleNormal,
      ชุมชนโชคดี.Summary.FemaleOver,
        `${ชุมชนโชคดี.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.Summary.PerMaleNormal}`,
      `${ชุมชนโชคดี.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.Summary.PerMaleOver}`,
      `${ชุมชนโชคดี.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนโชคดี.Summary.PerFemaleNormal}`,
      `${ชุมชนโชคดี.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนโชคดี.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนสมใจนึก",
      ชุมชนสมใจนึก.g6064.MaleNormal,
      ชุมชนสมใจนึก.g6064.MaleOver,
      ชุมชนสมใจนึก.g6064.FemaleNormal,
      ชุมชนสมใจนึก.g6064.FemaleOver,
      `${ชุมชนสมใจนึก.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6064.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6064.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6064.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6064.PerFemaleOver}`,

      ชุมชนสมใจนึก.g6569.MaleNormal,
      ชุมชนสมใจนึก.g6569.MaleOver,
      ชุมชนสมใจนึก.g6569.FemaleNormal,
      ชุมชนสมใจนึก.g6569.FemaleOver,
       `${ชุมชนสมใจนึก.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6569.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6569.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6569.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g6569.PerFemaleOver}`,

      ชุมชนสมใจนึก.g7074.MaleNormal,
      ชุมชนสมใจนึก.g7074.MaleOver,
      ชุมชนสมใจนึก.g7074.FemaleNormal,
      ชุมชนสมใจนึก.g7074.FemaleOver,
       `${ชุมชนสมใจนึก.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7074.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7074.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7074.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7074.PerFemaleOver}`,

      ชุมชนสมใจนึก.g7579.MaleNormal,
      ชุมชนสมใจนึก.g7579.MaleOver,
      ชุมชนสมใจนึก.g7579.FemaleNormal,
      ชุมชนสมใจนึก.g7579.FemaleOver,
        `${ชุมชนสมใจนึก.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7579.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7579.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7579.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g7579.PerFemaleOver}`,

      ชุมชนสมใจนึก.g8084.MaleNormal,
      ชุมชนสมใจนึก.g8084.MaleOver,
      ชุมชนสมใจนึก.g8084.FemaleNormal,
      ชุมชนสมใจนึก.g8084.FemaleOver,
       `${ชุมชนสมใจนึก.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8084.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8084.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8084.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8084.PerFemaleOver}`,

      ชุมชนสมใจนึก.g8589.MaleNormal,
      ชุมชนสมใจนึก.g8589.MaleOver,
      ชุมชนสมใจนึก.g8589.FemaleNormal,
      ชุมชนสมใจนึก.g8589.FemaleOver,
       `${ชุมชนสมใจนึก.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8589.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8589.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8589.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g8589.PerFemaleOver}`,

      ชุมชนสมใจนึก.g9094.MaleNormal,
      ชุมชนสมใจนึก.g9094.MaleOver,
      ชุมชนสมใจนึก.g9094.FemaleNormal,
      ชุมชนสมใจนึก.g9094.FemaleOver,
        `${ชุมชนสมใจนึก.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g9094.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g9094.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g9094.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g9094.PerFemaleOver}`,

      ชุมชนสมใจนึก.g95.MaleNormal,
      ชุมชนสมใจนึก.g95.MaleOver,
      ชุมชนสมใจนึก.g95.FemaleNormal,
      ชุมชนสมใจนึก.g95.FemaleOver,
        `${ชุมชนสมใจนึก.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g95.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g95.PerMaleOver}`,
      `${ชุมชนสมใจนึก.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.g95.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.g95.PerFemaleOver}`,

      ชุมชนสมใจนึก.Summary.MaleNormal,
      ชุมชนสมใจนึก.Summary.MaleOver,
      ชุมชนสมใจนึก.Summary.FemaleNormal,
      ชุมชนสมใจนึก.Summary.FemaleOver,
        `${ชุมชนสมใจนึก.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.Summary.PerMaleNormal}`,
      `${ชุมชนสมใจนึก.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.Summary.PerMaleOver}`,
      `${ชุมชนสมใจนึก.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนสมใจนึก.Summary.PerFemaleNormal}`,
      `${ชุมชนสมใจนึก.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนสมใจนึก.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนหน้าเทศบาล",
      ชุมชนหน้าเทศบาล.g6064.MaleNormal,
      ชุมชนหน้าเทศบาล.g6064.MaleOver,
      ชุมชนหน้าเทศบาล.g6064.FemaleNormal,
      ชุมชนหน้าเทศบาล.g6064.FemaleOver,
     `${ชุมชนหน้าเทศบาล.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6064.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6064.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6064.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6064.PerFemaleOver}`,
      ชุมชนหน้าเทศบาล.g6569.MaleNormal,
      ชุมชนหน้าเทศบาล.g6569.MaleOver,
      ชุมชนหน้าเทศบาล.g6569.FemaleNormal,
      ชุมชนหน้าเทศบาล.g6569.FemaleOver,
       `${ชุมชนหน้าเทศบาล.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6569.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6569.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6569.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g6569.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.g7074.MaleNormal,
      ชุมชนหน้าเทศบาล.g7074.MaleOver,
      ชุมชนหน้าเทศบาล.g7074.FemaleNormal,
      ชุมชนหน้าเทศบาล.g7074.FemaleOver,
       `${ชุมชนหน้าเทศบาล.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7074.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7074.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7074.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7074.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.g7579.MaleNormal,
      ชุมชนหน้าเทศบาล.g7579.MaleOver,
      ชุมชนหน้าเทศบาล.g7579.FemaleNormal,
      ชุมชนหน้าเทศบาล.g7579.FemaleOver,
         `${ชุมชนหน้าเทศบาล.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7579.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7579.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7579.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g7579.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.g8084.MaleNormal,
      ชุมชนหน้าเทศบาล.g8084.MaleOver,
      ชุมชนหน้าเทศบาล.g8084.FemaleNormal,
      ชุมชนหน้าเทศบาล.g8084.FemaleOver,
       `${ชุมชนหน้าเทศบาล.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8084.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8084.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8084.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8084.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.g8589.MaleNormal,
      ชุมชนหน้าเทศบาล.g8589.MaleOver,
      ชุมชนหน้าเทศบาล.g8589.FemaleNormal,
      ชุมชนหน้าเทศบาล.g8589.FemaleOver,
       `${ชุมชนหน้าเทศบาล.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8589.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8589.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8589.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g8589.PerFemaleOver}`,
      ชุมชนหน้าเทศบาล.g9094.MaleNormal,
      ชุมชนหน้าเทศบาล.g9094.MaleOver,
      ชุมชนหน้าเทศบาล.g9094.FemaleNormal,
      ชุมชนหน้าเทศบาล.g9094.FemaleOver,
        `${ชุมชนหน้าเทศบาล.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g9094.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g9094.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g9094.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g9094.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.g95.MaleNormal,
      ชุมชนหน้าเทศบาล.g95.MaleOver,
      ชุมชนหน้าเทศบาล.g95.FemaleNormal,
      ชุมชนหน้าเทศบาล.g95.FemaleOver,
        `${ชุมชนหน้าเทศบาล.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g95.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g95.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g95.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.g95.PerFemaleOver}`,

      ชุมชนหน้าเทศบาล.Summary.MaleNormal,
      ชุมชนหน้าเทศบาล.Summary.MaleOver,
      ชุมชนหน้าเทศบาล.Summary.FemaleNormal,
      ชุมชนหน้าเทศบาล.Summary.FemaleOver,
        `${ชุมชนหน้าเทศบาล.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.Summary.PerMaleNormal}`,
      `${ชุมชนหน้าเทศบาล.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.Summary.PerMaleOver}`,
      `${ชุมชนหน้าเทศบาล.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.Summary.PerFemaleNormal}`,
      `${ชุมชนหน้าเทศบาล.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนหน้าเทศบาล.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนวัดแสนสุข",
      ชุมชนวัดแสนสุข.g6064.MaleNormal,
      ชุมชนวัดแสนสุข.g6064.MaleOver,
      ชุมชนวัดแสนสุข.g6064.FemaleNormal,
      ชุมชนวัดแสนสุข.g6064.FemaleOver,
      `${ชุมชนวัดแสนสุข.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6064.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6064.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6064.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6064.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g6569.MaleNormal,
      ชุมชนวัดแสนสุข.g6569.MaleOver,
      ชุมชนวัดแสนสุข.g6569.FemaleNormal,
      ชุมชนวัดแสนสุข.g6569.FemaleOver,
       `${ชุมชนวัดแสนสุข.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6569.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6569.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6569.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g6569.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g7074.MaleNormal,
      ชุมชนวัดแสนสุข.g7074.MaleOver,
      ชุมชนวัดแสนสุข.g7074.FemaleNormal,
      ชุมชนวัดแสนสุข.g7074.FemaleOver,
       `${ชุมชนวัดแสนสุข.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7074.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7074.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7074.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7074.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g7579.MaleNormal,
      ชุมชนวัดแสนสุข.g7579.MaleOver,
      ชุมชนวัดแสนสุข.g7579.FemaleNormal,
      ชุมชนวัดแสนสุข.g7579.FemaleOver,
         `${ชุมชนวัดแสนสุข.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7579.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7579.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7579.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g7579.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g8084.MaleNormal,
      ชุมชนวัดแสนสุข.g8084.MaleOver,
      ชุมชนวัดแสนสุข.g8084.FemaleNormal,
      ชุมชนวัดแสนสุข.g8084.FemaleOver,
       `${ชุมชนวัดแสนสุข.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8084.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8084.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8084.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8084.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g8589.MaleNormal,
      ชุมชนวัดแสนสุข.g8589.MaleOver,
      ชุมชนวัดแสนสุข.g8589.FemaleNormal,
      ชุมชนวัดแสนสุข.g8589.FemaleOver,
       `${ชุมชนวัดแสนสุข.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8589.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8589.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8589.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g8589.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g9094.MaleNormal,
      ชุมชนวัดแสนสุข.g9094.MaleOver,
      ชุมชนวัดแสนสุข.g9094.FemaleNormal,
      ชุมชนวัดแสนสุข.g9094.FemaleOver,
        `${ชุมชนวัดแสนสุข.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g9094.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g9094.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g9094.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g9094.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.g95.MaleNormal,
      ชุมชนวัดแสนสุข.g95.MaleOver,
      ชุมชนวัดแสนสุข.g95.FemaleNormal,
      ชุมชนวัดแสนสุข.g95.FemaleOver,
        `${ชุมชนวัดแสนสุข.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g95.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g95.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g95.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.g95.PerFemaleOver}`,

      ชุมชนวัดแสนสุข.Summary.MaleNormal,
      ชุมชนวัดแสนสุข.Summary.MaleOver,
      ชุมชนวัดแสนสุข.Summary.FemaleNormal,
      ชุมชนวัดแสนสุข.Summary.FemaleOver,
        `${ชุมชนวัดแสนสุข.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.Summary.PerMaleNormal}`,
      `${ชุมชนวัดแสนสุข.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.Summary.PerMaleOver}`,
      `${ชุมชนวัดแสนสุข.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.Summary.PerFemaleNormal}`,
      `${ชุมชนวัดแสนสุข.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนวัดแสนสุข.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนมุขแสนเจริญ1",
      ชุมชนมุขแสนเจริญ1.g6064.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g6064.MaleOver,
      ชุมชนมุขแสนเจริญ1.g6064.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g6064.FemaleOver,
      `${ชุมชนมุขแสนเจริญ1.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6064.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6064.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6064.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6064.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g6569.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g6569.MaleOver,
      ชุมชนมุขแสนเจริญ1.g6569.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g6569.FemaleOver,
       `${ชุมชนมุขแสนเจริญ1.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6569.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6569.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6569.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g6569.PerFemaleOver}`,
      ชุมชนมุขแสนเจริญ1.g7074.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g7074.MaleOver,
      ชุมชนมุขแสนเจริญ1.g7074.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g7074.FemaleOver,
       `${ชุมชนมุขแสนเจริญ1.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7074.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7074.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7074.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7074.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g7579.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g7579.MaleOver,
      ชุมชนมุขแสนเจริญ1.g7579.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g7579.FemaleOver,
         `${ชุมชนมุขแสนเจริญ1.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7579.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7579.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7579.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g7579.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g8084.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g8084.MaleOver,
      ชุมชนมุขแสนเจริญ1.g8084.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g8084.FemaleOver,
       `${ชุมชนมุขแสนเจริญ1.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8084.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8084.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8084.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8084.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g8589.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g8589.MaleOver,
      ชุมชนมุขแสนเจริญ1.g8589.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g8589.FemaleOver,
       `${ชุมชนมุขแสนเจริญ1.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8589.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8589.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8589.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g8589.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g9094.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g9094.MaleOver,
      ชุมชนมุขแสนเจริญ1.g9094.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g9094.FemaleOver,
        `${ชุมชนมุขแสนเจริญ1.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g9094.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g9094.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g9094.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g9094.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.g95.MaleNormal,
      ชุมชนมุขแสนเจริญ1.g95.MaleOver,
      ชุมชนมุขแสนเจริญ1.g95.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.g95.FemaleOver,
        `${ชุมชนมุขแสนเจริญ1.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g95.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g95.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g95.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.g95.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ1.Summary.MaleNormal,
      ชุมชนมุขแสนเจริญ1.Summary.MaleOver,
      ชุมชนมุขแสนเจริญ1.Summary.FemaleNormal,
      ชุมชนมุขแสนเจริญ1.Summary.FemaleOver,
        `${ชุมชนมุขแสนเจริญ1.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.Summary.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.Summary.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ1.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.Summary.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ1.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ1.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนมุขแสนเจริญ2",
      ชุมชนมุขแสนเจริญ2.g6064.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g6064.MaleOver,
      ชุมชนมุขแสนเจริญ2.g6064.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g6064.FemaleOver,
      `${ชุมชนมุขแสนเจริญ2.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6064.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6064.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6064.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6064.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g6569.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g6569.MaleOver,
      ชุมชนมุขแสนเจริญ2.g6569.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g6569.FemaleOver,
       `${ชุมชนมุขแสนเจริญ2.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6569.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6569.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6569.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g6569.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g7074.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g7074.MaleOver,
      ชุมชนมุขแสนเจริญ2.g7074.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g7074.FemaleOver,
       `${ชุมชนมุขแสนเจริญ2.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7074.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7074.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7074.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7074.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g7579.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g7579.MaleOver,
      ชุมชนมุขแสนเจริญ2.g7579.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g7579.FemaleOver,
         `${ชุมชนมุขแสนเจริญ2.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7579.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7579.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7579.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g7579.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g8084.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g8084.MaleOver,
      ชุมชนมุขแสนเจริญ2.g8084.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g8084.FemaleOver,
       `${ชุมชนมุขแสนเจริญ2.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8084.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8084.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8084.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8084.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g8589.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g8589.MaleOver,
      ชุมชนมุขแสนเจริญ2.g8589.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g8589.FemaleOver,
       `${ชุมชนมุขแสนเจริญ2.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8589.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8589.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8589.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g8589.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g9094.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g9094.MaleOver,
      ชุมชนมุขแสนเจริญ2.g9094.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g9094.FemaleOver,
        `${ชุมชนมุขแสนเจริญ2.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g9094.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g9094.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g9094.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g9094.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.g95.MaleNormal,
      ชุมชนมุขแสนเจริญ2.g95.MaleOver,
      ชุมชนมุขแสนเจริญ2.g95.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.g95.FemaleOver,
        `${ชุมชนมุขแสนเจริญ2.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g95.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g95.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g95.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.g95.PerFemaleOver}`,

      ชุมชนมุขแสนเจริญ2.Summary.MaleNormal,
      ชุมชนมุขแสนเจริญ2.Summary.MaleOver,
      ชุมชนมุขแสนเจริญ2.Summary.FemaleNormal,
      ชุมชนมุขแสนเจริญ2.Summary.FemaleOver,
        `${ชุมชนมุขแสนเจริญ2.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.Summary.PerMaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.Summary.PerMaleOver}`,
      `${ชุมชนมุขแสนเจริญ2.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.Summary.PerFemaleNormal}`,
      `${ชุมชนมุขแสนเจริญ2.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนมุขแสนเจริญ2.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนเขาสามมุข",
      ชุมชนเขาสามมุข.g6064.MaleNormal,
      ชุมชนเขาสามมุข.g6064.MaleOver,
      ชุมชนเขาสามมุข.g6064.FemaleNormal,
      ชุมชนเขาสามมุข.g6064.FemaleOver,
      `${ชุมชนเขาสามมุข.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6064.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6064.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6064.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6064.PerFemaleOver}`,
      ชุมชนเขาสามมุข.g6569.MaleNormal,
      ชุมชนเขาสามมุข.g6569.MaleOver,
      ชุมชนเขาสามมุข.g6569.FemaleNormal,
      ชุมชนเขาสามมุข.g6569.FemaleOver,
       `${ชุมชนเขาสามมุข.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6569.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6569.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6569.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g6569.PerFemaleOver}`,

      ชุมชนเขาสามมุข.g7074.MaleNormal,
      ชุมชนเขาสามมุข.g7074.MaleOver,
      ชุมชนเขาสามมุข.g7074.FemaleNormal,
      ชุมชนเขาสามมุข.g7074.FemaleOver,
       `${ชุมชนเขาสามมุข.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7074.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7074.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7074.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7074.PerFemaleOver}`,

      ชุมชนเขาสามมุข.g7579.MaleNormal,
      ชุมชนเขาสามมุข.g7579.MaleOver,
      ชุมชนเขาสามมุข.g7579.FemaleNormal,
      ชุมชนเขาสามมุข.g7579.FemaleOver,
         `${ชุมชนเขาสามมุข.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7579.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7579.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7579.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g7579.PerFemaleOver}`,

      ชุมชนเขาสามมุข.g8084.MaleNormal,
      ชุมชนเขาสามมุข.g8084.MaleOver,
      ชุมชนเขาสามมุข.g8084.FemaleNormal,
      ชุมชนเขาสามมุข.g8084.FemaleOver,
       `${ชุมชนเขาสามมุข.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8084.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8084.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8084.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8084.PerFemaleOver}`,

      ชุมชนเขาสามมุข.g8589.MaleNormal,
      ชุมชนเขาสามมุข.g8589.MaleOver,
      ชุมชนเขาสามมุข.g8589.FemaleNormal,
      ชุมชนเขาสามมุข.g8589.FemaleOver,
       `${ชุมชนเขาสามมุข.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8589.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8589.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8589.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g8589.PerFemaleOver}`,
      ชุมชนเขาสามมุข.g9094.MaleNormal,
      ชุมชนเขาสามมุข.g9094.MaleOver,
      ชุมชนเขาสามมุข.g9094.FemaleNormal,
      ชุมชนเขาสามมุข.g9094.FemaleOver,
        `${ชุมชนเขาสามมุข.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g9094.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g9094.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g9094.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g9094.PerFemaleOver}`,

      ชุมชนเขาสามมุข.g95.MaleNormal,
      ชุมชนเขาสามมุข.g95.MaleOver,
      ชุมชนเขาสามมุข.g95.FemaleNormal,
      ชุมชนเขาสามมุข.g95.FemaleOver,
        `${ชุมชนเขาสามมุข.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g95.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g95.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g95.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.g95.PerFemaleOver}`,

      ชุมชนเขาสามมุข.Summary.MaleNormal,
      ชุมชนเขาสามมุข.Summary.MaleOver,
      ชุมชนเขาสามมุข.Summary.FemaleNormal,
      ชุมชนเขาสามมุข.Summary.FemaleOver,
        `${ชุมชนเขาสามมุข.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.Summary.PerMaleNormal}`,
      `${ชุมชนเขาสามมุข.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.Summary.PerMaleOver}`,
      `${ชุมชนเขาสามมุข.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนเขาสามมุข.Summary.PerFemaleNormal}`,
      `${ชุมชนเขาสามมุข.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนเขาสามมุข.Summary.PerFemaleOver}`,
    ),
    createData(
      "ชุมชนบ้านแหลมแท่น",
      ชุมชนบ้านแหลมแท่น.g6064.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g6064.MaleOver,
      ชุมชนบ้านแหลมแท่น.g6064.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g6064.FemaleOver,
      `${ชุมชนบ้านแหลมแท่น.g6064.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6064.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g6064.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6064.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g6064.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6064.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g6064.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6064.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g6569.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g6569.MaleOver,
      ชุมชนบ้านแหลมแท่น.g6569.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g6569.FemaleOver,
       `${ชุมชนบ้านแหลมแท่น.g6569.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6569.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g6569.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6569.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g6569.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6569.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g6569.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g6569.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g7074.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g7074.MaleOver,
      ชุมชนบ้านแหลมแท่น.g7074.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g7074.FemaleOver,
       `${ชุมชนบ้านแหลมแท่น.g7074.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7074.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g7074.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7074.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g7074.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7074.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g7074.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7074.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g7579.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g7579.MaleOver,
      ชุมชนบ้านแหลมแท่น.g7579.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g7579.FemaleOver,
         `${ชุมชนบ้านแหลมแท่น.g7579.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7579.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g7579.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7579.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g7579.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7579.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g7579.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g7579.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g8084.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g8084.MaleOver,
      ชุมชนบ้านแหลมแท่น.g8084.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g8084.FemaleOver,
       `${ชุมชนบ้านแหลมแท่น.g8084.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8084.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g8084.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8084.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g8084.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8084.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g8084.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8084.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g8589.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g8589.MaleOver,
      ชุมชนบ้านแหลมแท่น.g8589.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g8589.FemaleOver,
       `${ชุมชนบ้านแหลมแท่น.g8589.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8589.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g8589.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8589.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g8589.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8589.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g8589.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g8589.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g9094.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g9094.MaleOver,
      ชุมชนบ้านแหลมแท่น.g9094.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g9094.FemaleOver,
        `${ชุมชนบ้านแหลมแท่น.g9094.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g9094.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g9094.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g9094.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g9094.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g9094.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g9094.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g9094.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.g95.MaleNormal,
      ชุมชนบ้านแหลมแท่น.g95.MaleOver,
      ชุมชนบ้านแหลมแท่น.g95.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.g95.FemaleOver,
        `${ชุมชนบ้านแหลมแท่น.g95.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g95.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g95.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g95.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.g95.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g95.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.g95.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.g95.PerFemaleOver}`,

      ชุมชนบ้านแหลมแท่น.Summary.MaleNormal,
      ชุมชนบ้านแหลมแท่น.Summary.MaleOver,
      ชุมชนบ้านแหลมแท่น.Summary.FemaleNormal,
      ชุมชนบ้านแหลมแท่น.Summary.FemaleOver,
        `${ชุมชนบ้านแหลมแท่น.Summary.PerMaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.Summary.PerMaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.Summary.PerMaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.Summary.PerMaleOver}`,
      `${ชุมชนบ้านแหลมแท่น.Summary.PerFemaleNormal}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.Summary.PerFemaleNormal}`,
      `${ชุมชนบ้านแหลมแท่น.Summary.PerFemaleOver}`==="NaN"?"0":`${ชุมชนบ้านแหลมแท่น.Summary.PerFemaleOver}`,
    ),
  ];

  return (
    <React.Fragment>
      <CSVLink data={rows} className="csv-link">
        {" "}
        Download CSV{" "}
      </CSVLink>
      {/* <h4 style={{ textAlign: "center" }}>
        <strong>เพศชาย</strong>
      </h4> */}
      <div className="card-body">
        <div ref={ref}>
        <FormControlLabel
          control={
            <Switch
              size="medium"
              checked={openPaper}
              onChange={toggleChecked}
            />
          }
          label="เพศชาย"
        />
        {openPaper ? (
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

                <TableRow>
                  <StyledTableCell align="center">ชุมชน</StyledTableCell>
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
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ปกติ <br />ปกติ(%) <br /> เกิน <br /> เกิน(%)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      {/* 6064 */}
                      {row.ผู้ชายปกติ6064} 
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ6064}
                      <br />
                      {row.ผู้ชายเกิน6064}                    
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน6064}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ6569}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ6569}
                      <br />
                      {row.ผู้ชายเกิน6569}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน6569}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ7074}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ7074}
                      <br />
                      {row.ผู้ชายเกิน7074}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน7074}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ7579}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ7579}
                      <br />
                      {row.ผู้ชายเกิน7579}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน7579}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ8084}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ8084}
                      <br />
                      {row.ผู้ชายเกิน8084}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน8084}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ8589}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ8589}
                      <br />
                      {row.ผู้ชายเกิน8589}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน8589}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ9094}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ9094}
                      <br />
                      {row.ผู้ชายเกิน9094}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน9094}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้ชายปกติ95}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ95}
                      <br />
                      {row.ผู้ชายเกิน95}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน95}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.sumAllMN} 
                      <br /> 
                      {row.sumAllPerMN==="NaN %"?  "0 %" :row.sumAllPerMN} 
                      <br />
                      {row.sumAllMO} 
                      <br />
                      {row.sumAllPerMO==="NaN %"?  "0 %" :row.sumAllPerMO} 
                      
                    </StyledTableCell>
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

                <TableRow>
                  <StyledTableCell align="center">ชุมชน</StyledTableCell>
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
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ปกติ <br />ปกติ(%) <br /> เกิน <br /> เกิน(%)
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {" "}
                      {/* 6064 */}
                      {row.ผู้หญิงปกติ6064} 
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ6064}
                      <br />
                      {row.ผู้หญิงเกิน6064}                    
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน6064}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ6569}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ6569}
                      <br />
                      {row.ผู้หญิงเกิน6569}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน6569}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ7074}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ7074}
                      <br />
                      {row.ผู้หญิงเกิน7074}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน7074}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ7579}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ7579}
                      <br />
                      {row.ผู้หญิงเกิน7579}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน7579}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ8084}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ8084}
                      <br />
                      {row.ผู้หญิงเกิน8084}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน8084}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ8589}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ8589}
                      <br />
                      {row.ผู้หญิงเกิน8589}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน8589}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ9094}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ9094}
                      <br />
                      {row.ผู้หญิงเกิน9094}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน9094}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.ผู้หญิงปกติ95}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ95}
                      <br />
                      {row.ผู้หญิงเกิน95}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน95}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.sumAllMN} 
                      <br /> 
                      {row.sumAllPerMN==="NaN %"?  "0 %" :row.sumAllPerMN} 
                      <br />
                      {row.sumAllMO} 
                      <br />
                      {row.sumAllPerMO==="NaN %"?  "0 %" :row.sumAllPerMO} 
                      
                    </StyledTableCell>
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

export default function Chart9() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามเส้นรอบเอว ช่วงอายุ เพศ และชุมชน
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
