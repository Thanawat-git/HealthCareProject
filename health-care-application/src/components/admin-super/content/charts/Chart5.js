import React from "react";
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
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart5 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv"
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
  ชุมชน,
  อยู่ลำพัง,
  อยู่ลำพังกลางวัน,
  อยู่ลำพังกลางวันกลางคืน,
  อยู่ลำพังกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางวัน,
  เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางคืน,
  ไม่ได้อยู่ลำพัง,
  เปอร์เซ็นต์ไม่ได้อยู่ลำพัง,
  เปอร์เซ็นต์อยู่ลำพัง
) {
  return {
    ชุมชน,
    อยู่ลำพัง,
    อยู่ลำพังกลางวัน,
    อยู่ลำพังกลางวันกลางคืน,
    อยู่ลำพังกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางวัน,
    เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางคืน,
    ไม่ได้อยู่ลำพัง,
    เปอร์เซ็นต์ไม่ได้อยู่ลำพัง,
    เปอร์เซ็นต์อยู่ลำพัง
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart5Reducer = useSelector(({ chart5Reducer }) => chart5Reducer);
  const dispatch = useDispatch();
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
  } = chart5Reducer.results;
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart5(e.target.value));
  };

  const rows = [
    createData(
      "ชุมชนมณีแก้ว",
      ชุมชนมณีแก้ว.Alone.Sum,
      ชุมชนมณีแก้ว.Alone.AloneDay,
      ชุมชนมณีแก้ว.Alone.AloneDayNight,
      ชุมชนมณีแก้ว.Alone.AloneNight,
      `${ชุมชนมณีแก้ว.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนมณีแก้ว.Alone.PerAloneDay}`,
      `${ชุมชนมณีแก้ว.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนมณีแก้ว.Alone.PerAloneDayNight}`,
      `${ชุมชนมณีแก้ว.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนมณีแก้ว.Alone.PerAloneNight}`,
       ชุมชนมณีแก้ว.NotAlone,
      `${ชุมชนมณีแก้ว.PerNotAlone}`==="NaN"? "0" :`${ชุมชนมณีแก้ว.PerNotAlone}`,
      `${ชุมชนมณีแก้ว.Alone.PerSum}`==="NaN"? "0" : `${ชุมชนมณีแก้ว.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนดอนบน",
      ชุมชนดอนบน.Alone.Sum,
      ชุมชนดอนบน.Alone.AloneDay,
      ชุมชนดอนบน.Alone.AloneDayNight,
      ชุมชนดอนบน.Alone.AloneNight,
      `${ชุมชนดอนบน.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนดอนบน.Alone.PerAloneDay}`,
      `${ชุมชนดอนบน.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนดอนบน.Alone.PerAloneDayNight}`,
      `${ชุมชนดอนบน.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนดอนบน.Alone.PerAloneNight}`,
      ชุมชนดอนบน.NotAlone,
      `${ชุมชนดอนบน.PerNotAlone}`==="NaN"? "0" :`${ชุมชนดอนบน.PerNotAlone}`,
      `${ชุมชนดอนบน.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนดอนบน.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนบางแสนทาวเวอร์",
      ชุมชนบางแสนทาวเวอร์.Alone.Sum,
      ชุมชนบางแสนทาวเวอร์.Alone.AloneDay,
      ชุมชนบางแสนทาวเวอร์.Alone.AloneDayNight,
      ชุมชนบางแสนทาวเวอร์.Alone.AloneNight,
      `${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneDay}`,
      `${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneDayNight}`,
      `${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนบางแสนทาวเวอร์.Alone.PerAloneNight}`,
      ชุมชนบางแสนทาวเวอร์.NotAlone,
      `${ชุมชนบางแสนทาวเวอร์.PerNotAlone}`==="NaN"? "0" :`${ชุมชนบางแสนทาวเวอร์.PerNotAlone}`,
      `${ชุมชนบางแสนทาวเวอร์.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนบางแสนทาวเวอร์.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนตาลล้อม1",
      ชุมชนตาลล้อม1.Alone.Sum,
      ชุมชนตาลล้อม1.Alone.AloneDay,
      ชุมชนตาลล้อม1.Alone.AloneDayNight,
      ชุมชนตาลล้อม1.Alone.AloneNight,
      `${ชุมชนตาลล้อม1.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนตาลล้อม1.Alone.PerAloneDay}`,
      `${ชุมชนตาลล้อม1.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนตาลล้อม1.Alone.PerAloneDayNight}`,
      `${ชุมชนตาลล้อม1.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนตาลล้อม1.Alone.PerAloneNight}`,
      ชุมชนตาลล้อม1.NotAlone,
      `${ชุมชนตาลล้อม1.PerNotAlone}`==="NaN"? "0" :`${ชุมชนตาลล้อม1.PerNotAlone}`,
      `${ชุมชนตาลล้อม1.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนตาลล้อม1.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนตาลล้อม2",
      ชุมชนตาลล้อม2.Alone.Sum,
      ชุมชนตาลล้อม2.Alone.AloneDay,
      ชุมชนตาลล้อม2.Alone.AloneDayNight,
      ชุมชนตาลล้อม2.Alone.AloneNight,
      `${ชุมชนตาลล้อม2.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนตาลล้อม2.Alone.PerAloneDay}`,
      `${ชุมชนตาลล้อม2.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนตาลล้อม2.Alone.PerAloneDayNight}`,
      `${ชุมชนตาลล้อม2.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนตาลล้อม2.Alone.PerAloneNight}`,
      ชุมชนตาลล้อม2.NotAlone,
      `${ชุมชนตาลล้อม2.PerNotAlone}`==="NaN"? "0" :`${ชุมชนตาลล้อม2.PerNotAlone}`,
      `${ชุมชนตาลล้อม2.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนตาลล้อม2.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนบ้านเหมือง",
      ชุมชนบ้านเหมือง.Alone.Sum,
      ชุมชนบ้านเหมือง.Alone.AloneDay,
      ชุมชนบ้านเหมือง.Alone.AloneDayNight,
      ชุมชนบ้านเหมือง.Alone.AloneNight,
      `${ชุมชนบ้านเหมือง.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนบ้านเหมือง.Alone.PerAloneDay}`,
      `${ชุมชนบ้านเหมือง.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนบ้านเหมือง.Alone.PerAloneDayNight}`,
      `${ชุมชนบ้านเหมือง.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนบ้านเหมือง.Alone.PerAloneNight}`,
      ชุมชนบ้านเหมือง.NotAlone,
      `${ชุมชนบ้านเหมือง.PerNotAlone}`==="NaN"? "0" :`${ชุมชนบ้านเหมือง.PerNotAlone}`,
      `${ชุมชนบ้านเหมือง.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนบ้านเหมือง.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนพัฒนา2",
      ชุมชนพัฒนา2.Alone.Sum,
      ชุมชนพัฒนา2.Alone.AloneDay,
      ชุมชนพัฒนา2.Alone.AloneDayNight,
      ชุมชนพัฒนา2.Alone.AloneNight,
      `${ชุมชนพัฒนา2.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนพัฒนา2.Alone.PerAloneDay}`,
      `${ชุมชนพัฒนา2.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนพัฒนา2.Alone.PerAloneDayNight}`,
      `${ชุมชนพัฒนา2.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนพัฒนา2.Alone.PerAloneNight}`,
      ชุมชนพัฒนา2.NotAlone,
      `${ชุมชนพัฒนา2.PerNotAlone}`==="NaN"? "0" :`${ชุมชนพัฒนา2.PerNotAlone}`,
      `${ชุมชนพัฒนา2.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนพัฒนา2.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนดอนนารา",
      ชุมชนดอนนารา.Alone.Sum,
      ชุมชนดอนนารา.Alone.AloneDay,
      ชุมชนดอนนารา.Alone.AloneDayNight,
      ชุมชนดอนนารา.Alone.AloneNight,
      `${ชุมชนดอนนารา.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนดอนนารา.Alone.PerAloneDay}`,
      `${ชุมชนดอนนารา.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนดอนนารา.Alone.PerAloneDayNight}`,
      `${ชุมชนดอนนารา.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนดอนนารา.Alone.PerAloneNight}`,
      ชุมชนดอนนารา.NotAlone,
      `${ชุมชนดอนนารา.PerNotAlone}`==="NaN"? "0" :`${ชุมชนดอนนารา.PerNotAlone}`,
      `${ชุมชนดอนนารา.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนดอนนารา.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนวัดกลางดอน",
      ชุมชนวัดกลางดอน.Alone.Sum,
      ชุมชนวัดกลางดอน.Alone.AloneDay,
      ชุมชนวัดกลางดอน.Alone.AloneDayNight,
      ชุมชนวัดกลางดอน.Alone.AloneNight,
      `${ชุมชนวัดกลางดอน.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนวัดกลางดอน.Alone.PerAloneDay}`,
      `${ชุมชนวัดกลางดอน.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนวัดกลางดอน.Alone.PerAloneDayNight}`,
      `${ชุมชนวัดกลางดอน.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนวัดกลางดอน.Alone.PerAloneNight}`,
      ชุมชนวัดกลางดอน.NotAlone,
      `${ชุมชนวัดกลางดอน.PerNotAlone}`==="NaN"? "0" :`${ชุมชนวัดกลางดอน.PerNotAlone}`,
      `${ชุมชนวัดกลางดอน.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนวัดกลางดอน.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนแสนสุข",
      ชุมชนแสนสุข.Alone.Sum,
      ชุมชนแสนสุข.Alone.AloneDay,
      ชุมชนแสนสุข.Alone.AloneDayNight,
      ชุมชนแสนสุข.Alone.AloneNight,
      `${ชุมชนแสนสุข.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนแสนสุข.Alone.PerAloneDay}`,
      `${ชุมชนแสนสุข.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนแสนสุข.Alone.PerAloneDayNight}`,
      `${ชุมชนแสนสุข.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนแสนสุข.Alone.PerAloneNight}`,
      ชุมชนแสนสุข.NotAlone,
      `${ชุมชนแสนสุข.PerNotAlone}`==="NaN"? "0" :`${ชุมชนแสนสุข.PerNotAlone}`,
      `${ชุมชนแสนสุข.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนแสนสุข.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนมาบมะยม",
      ชุมชนมาบมะยม.Alone.Sum,
      ชุมชนมาบมะยม.Alone.AloneDay,
      ชุมชนมาบมะยม.Alone.AloneDayNight,
      ชุมชนมาบมะยม.Alone.AloneNight,
      `${ชุมชนมาบมะยม.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนมาบมะยม.Alone.PerAloneDay}`,
      `${ชุมชนมาบมะยม.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนมาบมะยม.Alone.PerAloneDayNight}`,
      `${ชุมชนมาบมะยม.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนมาบมะยม.Alone.PerAloneNight}`,
      ชุมชนมาบมะยม.NotAlone,
      `${ชุมชนมาบมะยม.PerNotAlone}`==="NaN"? "0" :`${ชุมชนมาบมะยม.PerNotAlone}`,
      `${ชุมชนมาบมะยม.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนมาบมะยม.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนท้ายตลาด",
      ชุมชนท้ายตลาด.Alone.Sum,
      ชุมชนท้ายตลาด.Alone.AloneDay,
      ชุมชนท้ายตลาด.Alone.AloneDayNight,
      ชุมชนท้ายตลาด.Alone.AloneNight,
      `${ชุมชนท้ายตลาด.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนท้ายตลาด.Alone.PerAloneDay}`,
      `${ชุมชนท้ายตลาด.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนท้ายตลาด.Alone.PerAloneDayNight}`,
      `${ชุมชนท้ายตลาด.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนท้ายตลาด.Alone.PerAloneNight}`,
      ชุมชนท้ายตลาด.NotAlone,
      `${ชุมชนท้ายตลาด.PerNotAlone}`==="NaN"? "0" :`${ชุมชนท้ายตลาด.PerNotAlone}`,
      `${ชุมชนท้ายตลาด.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนท้ายตลาด.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนร่วมใจพัฒนา",
      ชุมชนร่วมใจพัฒนา.Alone.Sum,
      ชุมชนร่วมใจพัฒนา.Alone.AloneDay,
      ชุมชนร่วมใจพัฒนา.Alone.AloneDayNight,
      ชุมชนร่วมใจพัฒนา.Alone.AloneNight,
      `${ชุมชนร่วมใจพัฒนา.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนร่วมใจพัฒนา.Alone.PerAloneDay}`,
      `${ชุมชนร่วมใจพัฒนา.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนร่วมใจพัฒนา.Alone.PerAloneDayNight}`,
      `${ชุมชนร่วมใจพัฒนา.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนร่วมใจพัฒนา.Alone.PerAloneNight}`,
      ชุมชนร่วมใจพัฒนา.NotAlone,
      `${ชุมชนร่วมใจพัฒนา.PerNotAlone}`==="NaN"? "0" :`${ชุมชนร่วมใจพัฒนา.PerNotAlone}`,
      `${ชุมชนร่วมใจพัฒนา.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนร่วมใจพัฒนา.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนบางแสนบน",
      ชุมชนบางแสนบน.Alone.Sum,
      ชุมชนบางแสนบน.Alone.AloneDay,
      ชุมชนบางแสนบน.Alone.AloneDayNight,
      ชุมชนบางแสนบน.Alone.AloneNight,
      `${ชุมชนบางแสนบน.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนบางแสนบน.Alone.PerAloneDay}`,
      `${ชุมชนบางแสนบน.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนบางแสนบน.Alone.PerAloneDayNight}`,
      `${ชุมชนบางแสนบน.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนบางแสนบน.Alone.PerAloneNight}`,
      ชุมชนบางแสนบน.NotAlone,
      `${ชุมชนบางแสนบน.PerNotAlone}`==="NaN"? "0" :`${ชุมชนบางแสนบน.PerNotAlone}`,
      `${ชุมชนบางแสนบน.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนบางแสนบน.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนหาดวอนนภา",
      ชุมชนหาดวอนนภา.Alone.Sum,
      ชุมชนหาดวอนนภา.Alone.AloneDay,
      ชุมชนหาดวอนนภา.Alone.AloneDayNight,
      ชุมชนหาดวอนนภา.Alone.AloneNight,
      `${ชุมชนหาดวอนนภา.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนหาดวอนนภา.Alone.PerAloneDay}`,
      `${ชุมชนหาดวอนนภา.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนหาดวอนนภา.Alone.PerAloneDayNight}`,
      `${ชุมชนหาดวอนนภา.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนหาดวอนนภา.Alone.PerAloneNight}`,
      ชุมชนหาดวอนนภา.NotAlone,
      `${ชุมชนหาดวอนนภา.PerNotAlone}`==="NaN"? "0" :`${ชุมชนหาดวอนนภา.PerNotAlone}`,
      `${ชุมชนหาดวอนนภา.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนหาดวอนนภา.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนบางเป้ง",
      ชุมชนบางเป้ง.Alone.Sum,
      ชุมชนบางเป้ง.Alone.AloneDay,
      ชุมชนบางเป้ง.Alone.AloneDayNight,
      ชุมชนบางเป้ง.Alone.AloneNight,
      `${ชุมชนบางเป้ง.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนบางเป้ง.Alone.PerAloneDay}`,
      `${ชุมชนบางเป้ง.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนบางเป้ง.Alone.PerAloneDayNight}`,
      `${ชุมชนบางเป้ง.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนบางเป้ง.Alone.PerAloneNight}`,
      ชุมชนบางเป้ง.NotAlone,
      `${ชุมชนบางเป้ง.PerNotAlone}`==="NaN"? "0" :`${ชุมชนบางเป้ง.PerNotAlone}`,
      `${ชุมชนบางเป้ง.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนบางเป้ง.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนหน้ามอ",
      ชุมชนหน้ามอ.Alone.Sum,
      ชุมชนหน้ามอ.Alone.AloneDay,
      ชุมชนหน้ามอ.Alone.AloneDayNight,
      ชุมชนหน้ามอ.Alone.AloneNight,
      `${ชุมชนหน้ามอ.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนหน้ามอ.Alone.PerAloneDay}`,
      `${ชุมชนหน้ามอ.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนหน้ามอ.Alone.PerAloneDayNight}`,
      `${ชุมชนหน้ามอ.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนหน้ามอ.Alone.PerAloneNight}`,
      ชุมชนหน้ามอ.NotAlone,
      `${ชุมชนหน้ามอ.PerNotAlone}`==="NaN"? "0" :`${ชุมชนหน้ามอ.PerNotAlone}`,
      `${ชุมชนหน้ามอ.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนหน้ามอ.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนโชคดี",
      ชุมชนโชคดี.Alone.Sum,
      ชุมชนโชคดี.Alone.AloneDay,
      ชุมชนโชคดี.Alone.AloneDayNight,
      ชุมชนโชคดี.Alone.AloneNight,
      `${ชุมชนโชคดี.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนโชคดี.Alone.PerAloneDay}`,
      `${ชุมชนโชคดี.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนโชคดี.Alone.PerAloneDayNight}`,
      `${ชุมชนโชคดี.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนโชคดี.Alone.PerAloneNight}`,
      ชุมชนโชคดี.NotAlone,
      `${ชุมชนโชคดี.PerNotAlone}`==="NaN"? "0" :`${ชุมชนโชคดี.PerNotAlone}`,
      `${ชุมชนโชคดี.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนโชคดี.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนสมใจนึก",
      ชุมชนสมใจนึก.Alone.Sum,
      ชุมชนสมใจนึก.Alone.AloneDay,
      ชุมชนสมใจนึก.Alone.AloneDayNight,
      ชุมชนสมใจนึก.Alone.AloneNight,
      `${ชุมชนสมใจนึก.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนสมใจนึก.Alone.PerAloneDay}`,
      `${ชุมชนสมใจนึก.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนสมใจนึก.Alone.PerAloneDayNight}`,
      `${ชุมชนสมใจนึก.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนสมใจนึก.Alone.PerAloneNight}`,
      ชุมชนสมใจนึก.NotAlone,
      `${ชุมชนสมใจนึก.PerNotAlone}`==="NaN"? "0" :`${ชุมชนสมใจนึก.PerNotAlone}`,
      `${ชุมชนสมใจนึก.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนสมใจนึก.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนหน้าเทศบาล",
      ชุมชนหน้าเทศบาล.Alone.Sum,
      ชุมชนหน้าเทศบาล.Alone.AloneDay,
      ชุมชนหน้าเทศบาล.Alone.AloneDayNight,
      ชุมชนหน้าเทศบาล.Alone.AloneNight,
      `${ชุมชนหน้าเทศบาล.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนหน้าเทศบาล.Alone.PerAloneDay}`,
      `${ชุมชนหน้าเทศบาล.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนหน้าเทศบาล.Alone.PerAloneDayNight}`,
      `${ชุมชนหน้าเทศบาล.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนหน้าเทศบาล.Alone.PerAloneNight}`,
      ชุมชนหน้าเทศบาล.NotAlone,
      `${ชุมชนหน้าเทศบาล.PerNotAlone}`==="NaN"? "0" :`${ชุมชนหน้าเทศบาล.PerNotAlone}`,
      `${ชุมชนหน้าเทศบาล.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนหน้าเทศบาล.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนวัดแสนสุข",
      ชุมชนวัดแสนสุข.Alone.Sum,
      ชุมชนวัดแสนสุข.Alone.AloneDay,
      ชุมชนวัดแสนสุข.Alone.AloneDayNight,
      ชุมชนวัดแสนสุข.Alone.AloneNight,
      `${ชุมชนวัดแสนสุข.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนวัดแสนสุข.Alone.PerAloneDay}`,
      `${ชุมชนวัดแสนสุข.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนวัดแสนสุข.Alone.PerAloneDayNight}`,
      `${ชุมชนวัดแสนสุข.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนวัดแสนสุข.Alone.PerAloneNight}`,
      ชุมชนวัดแสนสุข.NotAlone,
      `${ชุมชนวัดแสนสุข.PerNotAlone}`==="NaN"? "0" :`${ชุมชนวัดแสนสุข.PerNotAlone}`,
      `${ชุมชนวัดแสนสุข.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนวัดแสนสุข.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนมุขแสนเจริญ1",
      ชุมชนมุขแสนเจริญ1.Alone.Sum,
      ชุมชนมุขแสนเจริญ1.Alone.AloneDay,
      ชุมชนมุขแสนเจริญ1.Alone.AloneDayNight,
      ชุมชนมุขแสนเจริญ1.Alone.AloneNight,
      `${ชุมชนมุขแสนเจริญ1.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ1.Alone.PerAloneDay}`,
      `${ชุมชนมุขแสนเจริญ1.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ1.Alone.PerAloneDayNight}`,
      `${ชุมชนมุขแสนเจริญ1.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ1.Alone.PerAloneNight}`,
      ชุมชนมุขแสนเจริญ1.NotAlone,
      `${ชุมชนมุขแสนเจริญ1.PerNotAlone}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ1.PerNotAlone}`,
      `${ชุมชนมุขแสนเจริญ1.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ1.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนมุขแสนเจริญ2",
      ชุมชนมุขแสนเจริญ2.Alone.Sum,
      ชุมชนมุขแสนเจริญ2.Alone.AloneDay,
      ชุมชนมุขแสนเจริญ2.Alone.AloneDayNight,
      ชุมชนมุขแสนเจริญ2.Alone.AloneNight,
      `${ชุมชนมุขแสนเจริญ2.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ2.Alone.PerAloneDay}`,
      `${ชุมชนมุขแสนเจริญ2.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ2.Alone.PerAloneDayNight}`,
      `${ชุมชนมุขแสนเจริญ2.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ2.Alone.PerAloneNight}`,
      ชุมชนมุขแสนเจริญ2.NotAlone,
      `${ชุมชนมุขแสนเจริญ2.PerNotAlone}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ2.PerNotAlone}`,
      `${ชุมชนมุขแสนเจริญ2.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนมุขแสนเจริญ2.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนเขาสามมุข",
      ชุมชนเขาสามมุข.Alone.Sum,
      ชุมชนเขาสามมุข.Alone.AloneDay,
      ชุมชนเขาสามมุข.Alone.AloneDayNight,
      ชุมชนเขาสามมุข.Alone.AloneNight,
      `${ชุมชนเขาสามมุข.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนเขาสามมุข.Alone.PerAloneDay}`,
      `${ชุมชนเขาสามมุข.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนเขาสามมุข.Alone.PerAloneDayNight}`,
      `${ชุมชนเขาสามมุข.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนเขาสามมุข.Alone.PerAloneNight}`,
      ชุมชนเขาสามมุข.NotAlone,
      `${ชุมชนเขาสามมุข.PerNotAlone}`==="NaN"? "0" :`${ชุมชนเขาสามมุข.PerNotAlone}`,
      `${ชุมชนเขาสามมุข.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนเขาสามมุข.Alone.PerSum}`,
    ),
    createData(
      "ชุมชนบ้านแหลมแท่น",
      ชุมชนบ้านแหลมแท่น.Alone.Sum,
      ชุมชนบ้านแหลมแท่น.Alone.AloneDay,
      ชุมชนบ้านแหลมแท่น.Alone.AloneDayNight,
      ชุมชนบ้านแหลมแท่น.Alone.AloneNight,
      `${ชุมชนบ้านแหลมแท่น.Alone.PerAloneDay}`==="NaN"? "0" :`${ชุมชนบ้านแหลมแท่น.Alone.PerAloneDay}`,
      `${ชุมชนบ้านแหลมแท่น.Alone.PerAloneDayNight}`==="NaN"? "0" :`${ชุมชนบ้านแหลมแท่น.Alone.PerAloneDayNight}`,
      `${ชุมชนบ้านแหลมแท่น.Alone.PerAloneNight}`==="NaN"? "0" :`${ชุมชนบ้านแหลมแท่น.Alone.PerAloneNight}`,
      ชุมชนบ้านแหลมแท่น.NotAlone,
      `${ชุมชนบ้านแหลมแท่น.PerNotAlone}`==="NaN"? "0" :`${ชุมชนบ้านแหลมแท่น.PerNotAlone}`,
      `${ชุมชนบ้านแหลมแท่น.Alone.PerSum}`==="NaN"? "0" :`${ชุมชนบ้านแหลมแท่น.Alone.PerSum}`,
    ),
  ];

  return (    
  <React.Fragment>
    <CSVLink data={rows} className="csv-link"> Download CSV </CSVLink>
    <div className="card-body">
      {/* <div>
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
      <div className="row" ref={ref}>
        <div className="col-12">
          <p style={{ textAlign: "center" }}>
            จำนวนประชากรผู้สูงอายุทั้งหมดใน {community} จำนวน {Summary} คน
          </p>
        </div>
        
        <div className="chart col-6 align-self-center" style={{ textAlign: "center" }} >
            {
                Summary === 0 ?
                <h1>ไม่มีข้อมูล</h1>
                :
            <Chart
            //   maxWidth={"400px"}
            height={"400px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "จำนวน"],
              ["อยู่ลำพัง", Alone],
              ["ไม่ได้อยู่ลำพัง", NotAlone],
            ]}
          />
            }
          
        </div>
        <div className="chart col-6">
          <Chart
            // width={"300px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["เวลา", "ผู้สูงอายุที่อยู่ลำพัง"],
              ["กลางวัน", AloneDay],
              ["กลางคืน", AloneNight],
              ["ทั้งวัน", AloneDayNight],
            ]}
            options={{
              title: "ผู้สูงอายุที่อยู่ลำพัง",
            }}
          />
        </div>
      </div>*/}
      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell><strong>ความเป็นอยู่</strong></StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>อยู่ลำพัง&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>ไม่ได้อยู่ลำพัง</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
               
              </TableRow>
              <TableRow>
                <StyledTableCell align="center"><strong>ชุมชน</strong></StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">กลางวัน</StyledTableCell>
                <StyledTableCell align="center">กลางคืน</StyledTableCell>
                <StyledTableCell align="center">ทั้งกลางวัน-กลางคืน</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ชุมชน}>
                  <StyledTableCell  component="th" scope="row">
                    {row.ชุมชน}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                      จำนวน 
                      <br />เปอร์เซ็นต์ 
                    </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.อยู่ลำพังกลางวัน}<br />
                    {row.เปอร์เซ็นต์อยู่ลำพังกลางวัน} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.อยู่ลำพังกลางคืน}<br />
                    {row.เปอร์เซ็นต์อยู่ลำพังกลางคืน} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.อยู่ลำพังกลางวันกลางคืน}<br />              
                    {row.เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน} %                   
                  </StyledTableCell>
                  <StyledTableCell align="center" >{row.อยู่ลำพัง}</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ไม่ได้อยู่ลำพัง}<br />
                    {row.เปอร์เซ็นต์ไม่ได้อยู่ลำพัง} %
                  </StyledTableCell>
                  
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    </React.Fragment>
  );
});

export default function Chart5() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่ และชุมชน
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
