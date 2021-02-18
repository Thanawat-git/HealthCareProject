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
import { getDataChart8 } from "../../../../actions/charts.action";
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
      padding: 0,
    },
  },
}))(TableRow);

function createData(
  ชุมชน,
  เบิกต้นสังกัด,
  ชำระเงินเอง,
  บัตรทอง,
  บัตรผู้พิการ,
  บัตรประกันสังคม,
  อื่นๆ,
  รวม,
  เปอร์เซ็นต์เบิกต้นสังกัด,
  เปอร์เซ็นต์ชำระเงินเอง,
  เปอร์เซ็นต์บัตรทอง,
  เปอร์เซ็นต์บัตรผู้พิการ,
  เปอร์เซ็นต์บัตรประกันสังคม,
  เปอร์เซ็นต์อื่นๆ,
) {
  return {
    ชุมชน,
    เบิกต้นสังกัด,
    ชำระเงินเอง,
    บัตรทอง,
    บัตรผู้พิการ,
    บัตรประกันสังคม,
    อื่นๆ,
    รวม,
    เปอร์เซ็นต์เบิกต้นสังกัด,
    เปอร์เซ็นต์ชำระเงินเอง,
    เปอร์เซ็นต์บัตรทอง,
    เปอร์เซ็นต์บัตรผู้พิการ,
    เปอร์เซ็นต์บัตรประกันสังคม,
    เปอร์เซ็นต์อื่นๆ,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart8Reducer = useSelector(({ chart8Reducer }) => chart8Reducer);
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
  } = chart8Reducer.results;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart8(e.target.value));
  };
  const rows = [
    createData(
      "ชุมชนมณีแก้ว",
      ชุมชนมณีแก้ว.Affiliation,
      ชุมชนมณีแก้ว.Yourself,
      ชุมชนมณีแก้ว.Gold,
      ชุมชนมณีแก้ว.Disabled,
      ชุมชนมณีแก้ว.Social,
      ชุมชนมณีแก้ว.Other,
      ชุมชนมณีแก้ว.Summary,
      `${ชุมชนมณีแก้ว.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerAffiliation}`,
      `${ชุมชนมณีแก้ว.PerYourself}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerYourself}`,
      `${ชุมชนมณีแก้ว.PerGold}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerGold}`,
      `${ชุมชนมณีแก้ว.PerDisabled}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerDisabled}`,
      `${ชุมชนมณีแก้ว.PerSocial}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerSocial}`,
      `${ชุมชนมณีแก้ว.PerOther}`==="NaN"?  "0" :`${ชุมชนมณีแก้ว.PerOther}`
    ),
    createData(
      "ชุมชนดอนบน",
      ชุมชนดอนบน.Affiliation,
      ชุมชนดอนบน.Yourself,
      ชุมชนดอนบน.Gold,
      ชุมชนดอนบน.Disabled,
      ชุมชนดอนบน.Social,
      ชุมชนดอนบน.Other,
      ชุมชนดอนบน.Summary,
      `${ชุมชนดอนบน.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerAffiliation}`,
      `${ชุมชนดอนบน.PerYourself}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerYourself}`,
      `${ชุมชนดอนบน.PerGold}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerGold}`,
      `${ชุมชนดอนบน.PerDisabled}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerDisabled}`,
      `${ชุมชนดอนบน.PerSocial}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerSocial}`,
      `${ชุมชนดอนบน.PerOther}`==="NaN"?  "0" :`${ชุมชนดอนบน.PerOther}`
    ),
    createData(
      "ชุมชนบางแสนทาวเวอร์",
      ชุมชนบางแสนทาวเวอร์.Affiliation,
      ชุมชนบางแสนทาวเวอร์.Yourself,
      ชุมชนบางแสนทาวเวอร์.Gold,
      ชุมชนบางแสนทาวเวอร์.Disabled,
      ชุมชนบางแสนทาวเวอร์.Social,
      ชุมชนบางแสนทาวเวอร์.Other,
      ชุมชนบางแสนทาวเวอร์.Summary,
      `${ชุมชนบางแสนทาวเวอร์.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerAffiliation}`,
      `${ชุมชนบางแสนทาวเวอร์.PerYourself}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerYourself}`,
      `${ชุมชนบางแสนทาวเวอร์.PerGold}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerGold}`,
      `${ชุมชนบางแสนทาวเวอร์.PerDisabled}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerDisabled}`,
      `${ชุมชนบางแสนทาวเวอร์.PerSocial}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerSocial}`,
      `${ชุมชนบางแสนทาวเวอร์.PerOther}`==="NaN"?  "0" :`${ชุมชนบางแสนทาวเวอร์.PerOther}`
    ),
    createData(
      "ชุมชนตาลล้อม1",
      ชุมชนตาลล้อม1.Affiliation,
      ชุมชนตาลล้อม1.Yourself,
      ชุมชนตาลล้อม1.Gold,
      ชุมชนตาลล้อม1.Disabled,
      ชุมชนตาลล้อม1.Social,
      ชุมชนตาลล้อม1.Other,
      ชุมชนตาลล้อม1.Summary,
      `${ชุมชนตาลล้อม1.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerAffiliation}`,
      `${ชุมชนตาลล้อม1.PerYourself}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerYourself}`,
      `${ชุมชนตาลล้อม1.PerGold}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerGold}`,
      `${ชุมชนตาลล้อม1.PerDisabled}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerDisabled}`,
      `${ชุมชนตาลล้อม1.PerSocial}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerSocial}`,
      `${ชุมชนตาลล้อม1.PerOther}`==="NaN"?  "0" :`${ชุมชนตาลล้อม1.PerOther}`
    ),
    createData(
      "ชุมชนตาลล้อม2",
      ชุมชนตาลล้อม2.Affiliation,
      ชุมชนตาลล้อม2.Yourself,
      ชุมชนตาลล้อม2.Gold,
      ชุมชนตาลล้อม2.Disabled,
      ชุมชนตาลล้อม2.Social,
      ชุมชนตาลล้อม2.Other,
      ชุมชนตาลล้อม2.Summary,
      `${ชุมชนตาลล้อม2.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerAffiliation}`,
      `${ชุมชนตาลล้อม2.PerYourself}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerYourself}`,
      `${ชุมชนตาลล้อม2.PerGold}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerGold}`,
      `${ชุมชนตาลล้อม2.PerDisabled}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerDisabled}`,
      `${ชุมชนตาลล้อม2.PerSocial}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerSocial}`,
      `${ชุมชนตาลล้อม2.PerOther}`==="NaN"?  "0" :`${ชุมชนตาลล้อม2.PerOther}`
    ),
    createData(
      "ชุมชนบ้านเหมือง",
      ชุมชนบ้านเหมือง.Affiliation,
      ชุมชนบ้านเหมือง.Yourself,
      ชุมชนบ้านเหมือง.Gold,
      ชุมชนบ้านเหมือง.Disabled,
      ชุมชนบ้านเหมือง.Social,
      ชุมชนบ้านเหมือง.Other,
      ชุมชนบ้านเหมือง.Summary,
      `${ชุมชนบ้านเหมือง.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerAffiliation}`,
      `${ชุมชนบ้านเหมือง.PerYourself}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerYourself}`,
      `${ชุมชนบ้านเหมือง.PerGold}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerGold}`,
      `${ชุมชนบ้านเหมือง.PerDisabled}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerDisabled}`,
      `${ชุมชนบ้านเหมือง.PerSocial}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerSocial}`,
      `${ชุมชนบ้านเหมือง.PerOther}`==="NaN"?  "0" :`${ชุมชนบ้านเหมือง.PerOther}`
    ),
    createData(
      "ชุมชนพัฒนา2",
      ชุมชนพัฒนา2.Affiliation,
      ชุมชนพัฒนา2.Yourself,
      ชุมชนพัฒนา2.Gold,
      ชุมชนพัฒนา2.Disabled,
      ชุมชนพัฒนา2.Social,
      ชุมชนพัฒนา2.Other,
      ชุมชนพัฒนา2.Summary,
      `${ชุมชนพัฒนา2.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerAffiliation}`,
      `${ชุมชนพัฒนา2.PerYourself}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerYourself}`,
      `${ชุมชนพัฒนา2.PerGold}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerGold}`,
      `${ชุมชนพัฒนา2.PerDisabled}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerDisabled}`,
      `${ชุมชนพัฒนา2.PerSocial}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerSocial}`,
      `${ชุมชนพัฒนา2.PerOther}`==="NaN"?  "0" :`${ชุมชนพัฒนา2.PerOther}`
    ),
    createData(
      "ชุมชนดอนนารา",
      ชุมชนดอนนารา.Affiliation,
      ชุมชนดอนนารา.Yourself,
      ชุมชนดอนนารา.Gold,
      ชุมชนดอนนารา.Disabled,
      ชุมชนดอนนารา.Social,
      ชุมชนดอนนารา.Other,
      ชุมชนดอนนารา.Summary,
      `${ชุมชนดอนนารา.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerAffiliation}`,
      `${ชุมชนดอนนารา.PerYourself}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerYourself}`,
      `${ชุมชนดอนนารา.PerGold}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerGold}`,
      `${ชุมชนดอนนารา.PerDisabled}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerDisabled}`,
      `${ชุมชนดอนนารา.PerSocial}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerSocial}`,
      `${ชุมชนดอนนารา.PerOther}`==="NaN"?  "0" :`${ชุมชนดอนนารา.PerOther}`
    ),
    createData(
      "ชุมชนวัดกลางดอน",
      ชุมชนวัดกลางดอน.Affiliation,
      ชุมชนวัดกลางดอน.Yourself,
      ชุมชนวัดกลางดอน.Gold,
      ชุมชนวัดกลางดอน.Disabled,
      ชุมชนวัดกลางดอน.Social,
      ชุมชนวัดกลางดอน.Other,
      ชุมชนวัดกลางดอน.Summary,
      `${ชุมชนวัดกลางดอน.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerAffiliation}`,
      `${ชุมชนวัดกลางดอน.PerYourself}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerYourself}`,
      `${ชุมชนวัดกลางดอน.PerGold}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerGold}`,
      `${ชุมชนวัดกลางดอน.PerDisabled}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerDisabled}`,
      `${ชุมชนวัดกลางดอน.PerSocial}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerSocial}`,
      `${ชุมชนวัดกลางดอน.PerOther}`==="NaN"?  "0" :`${ชุมชนวัดกลางดอน.PerOther}`
    ),
    createData(
      "ชุมชนแสนสุข",
      ชุมชนแสนสุข.Affiliation,
      ชุมชนแสนสุข.Yourself,
      ชุมชนแสนสุข.Gold,
      ชุมชนแสนสุข.Disabled,
      ชุมชนแสนสุข.Social,
      ชุมชนแสนสุข.Other,
      ชุมชนแสนสุข.Summary,
      `${ชุมชนแสนสุข.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerAffiliation}`,
      `${ชุมชนแสนสุข.PerYourself}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerYourself}`,
      `${ชุมชนแสนสุข.PerGold}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerGold}`,
      `${ชุมชนแสนสุข.PerDisabled}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerDisabled}`,
      `${ชุมชนแสนสุข.PerSocial}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerSocial}`,
      `${ชุมชนแสนสุข.PerOther}`==="NaN"?  "0" :`${ชุมชนแสนสุข.PerOther}`
    ),
    createData(
      "ชุมชนมาบมะยม",
      ชุมชนมาบมะยม.Affiliation,
      ชุมชนมาบมะยม.Yourself,
      ชุมชนมาบมะยม.Gold,
      ชุมชนมาบมะยม.Disabled,
      ชุมชนมาบมะยม.Social,
      ชุมชนมาบมะยม.Other,
      ชุมชนมาบมะยม.Summary,
      `${ชุมชนมาบมะยม.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerAffiliation}`,
      `${ชุมชนมาบมะยม.PerYourself}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerYourself}`,
      `${ชุมชนมาบมะยม.PerGold}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerGold}`,
      `${ชุมชนมาบมะยม.PerDisabled}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerDisabled}`,
      `${ชุมชนมาบมะยม.PerSocial}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerSocial}`,
      `${ชุมชนมาบมะยม.PerOther}`==="NaN"?  "0" :`${ชุมชนมาบมะยม.PerOther}`
    ),
    createData(
      "ชุมชนท้ายตลาด",
      ชุมชนท้ายตลาด.Affiliation,
      ชุมชนท้ายตลาด.Yourself,
      ชุมชนท้ายตลาด.Gold,
      ชุมชนท้ายตลาด.Disabled,
      ชุมชนท้ายตลาด.Social,
      ชุมชนท้ายตลาด.Other,
      ชุมชนท้ายตลาด.Summary,
      `${ชุมชนท้ายตลาด.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerAffiliation}`,
      `${ชุมชนท้ายตลาด.PerYourself}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerYourself}`,
      `${ชุมชนท้ายตลาด.PerGold}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerGold}`,
      `${ชุมชนท้ายตลาด.PerDisabled}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerDisabled}`,
      `${ชุมชนท้ายตลาด.PerSocial}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerSocial}`,
      `${ชุมชนท้ายตลาด.PerOther}`==="NaN"?  "0" :`${ชุมชนท้ายตลาด.PerOther}`
    ),
    createData(
      "ชุมชนร่วมใจพัฒนา",
      ชุมชนร่วมใจพัฒนา.Affiliation,
      ชุมชนร่วมใจพัฒนา.Yourself,
      ชุมชนร่วมใจพัฒนา.Gold,
      ชุมชนร่วมใจพัฒนา.Disabled,
      ชุมชนร่วมใจพัฒนา.Social,
      ชุมชนร่วมใจพัฒนา.Other,
      ชุมชนร่วมใจพัฒนา.Summary,
      `${ชุมชนร่วมใจพัฒนา.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerAffiliation}`,
      `${ชุมชนร่วมใจพัฒนา.PerYourself}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerYourself}`,
      `${ชุมชนร่วมใจพัฒนา.PerGold}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerGold}`,
      `${ชุมชนร่วมใจพัฒนา.PerDisabled}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerDisabled}`,
      `${ชุมชนร่วมใจพัฒนา.PerSocial}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerSocial}`,
      `${ชุมชนร่วมใจพัฒนา.PerOther}`==="NaN"?  "0" :`${ชุมชนร่วมใจพัฒนา.PerOther}`
    ),
    createData(
      "ชุมชนบางแสนบน",
      ชุมชนบางแสนบน.Affiliation,
      ชุมชนบางแสนบน.Yourself,
      ชุมชนบางแสนบน.Gold,
      ชุมชนบางแสนบน.Disabled,
      ชุมชนบางแสนบน.Social,
      ชุมชนบางแสนบน.Other,
      ชุมชนบางแสนบน.Summary,
      `${ชุมชนบางแสนบน.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerAffiliation}`,
      `${ชุมชนบางแสนบน.PerYourself}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerYourself}`,
      `${ชุมชนบางแสนบน.PerGold}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerGold}`,
      `${ชุมชนบางแสนบน.PerDisabled}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerDisabled}`,
      `${ชุมชนบางแสนบน.PerSocial}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerSocial}`,
      `${ชุมชนบางแสนบน.PerOther}`==="NaN"?  "0" :`${ชุมชนบางแสนบน.PerOther}`
    ),
    createData(
      "ชุมชนหาดวอนนภา",
      ชุมชนหาดวอนนภา.Affiliation,
      ชุมชนหาดวอนนภา.Yourself,
      ชุมชนหาดวอนนภา.Gold,
      ชุมชนหาดวอนนภา.Disabled,
      ชุมชนหาดวอนนภา.Social,
      ชุมชนหาดวอนนภา.Other,
      ชุมชนหาดวอนนภา.Summary,
      `${ชุมชนหาดวอนนภา.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerAffiliation}`,
      `${ชุมชนหาดวอนนภา.PerYourself}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerYourself}`,
      `${ชุมชนหาดวอนนภา.PerGold}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerGold}`,
      `${ชุมชนหาดวอนนภา.PerDisabled}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerDisabled}`,
      `${ชุมชนหาดวอนนภา.PerSocial}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerSocial}`,
      `${ชุมชนหาดวอนนภา.PerOther}`==="NaN"?  "0" :`${ชุมชนหาดวอนนภา.PerOther}`
    ),
    createData(
      "ชุมชนบางเป้ง",
      ชุมชนบางเป้ง.Affiliation,
      ชุมชนบางเป้ง.Yourself,
      ชุมชนบางเป้ง.Gold,
      ชุมชนบางเป้ง.Disabled,
      ชุมชนบางเป้ง.Social,
      ชุมชนบางเป้ง.Other,
      ชุมชนบางเป้ง.Summary,
      `${ชุมชนบางเป้ง.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerAffiliation}`,
      `${ชุมชนบางเป้ง.PerYourself}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerYourself}`,
      `${ชุมชนบางเป้ง.PerGold}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerGold}`,
      `${ชุมชนบางเป้ง.PerDisabled}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerDisabled}`,
      `${ชุมชนบางเป้ง.PerSocial}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerSocial}`,
      `${ชุมชนบางเป้ง.PerOther}`==="NaN"?  "0" :`${ชุมชนบางเป้ง.PerOther}`
    ),
    createData(
      "ชุมชนหน้ามอ",
      ชุมชนหน้ามอ.Affiliation,
      ชุมชนหน้ามอ.Yourself,
      ชุมชนหน้ามอ.Gold,
      ชุมชนหน้ามอ.Disabled,
      ชุมชนหน้ามอ.Social,
      ชุมชนหน้ามอ.Other,
      ชุมชนหน้ามอ.Summary,
      `${ชุมชนหน้ามอ.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerAffiliation}`,
      `${ชุมชนหน้ามอ.PerYourself}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerYourself}`,
      `${ชุมชนหน้ามอ.PerGold}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerGold}`,
      `${ชุมชนหน้ามอ.PerDisabled}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerDisabled}`,
      `${ชุมชนหน้ามอ.PerSocial}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerSocial}`,
      `${ชุมชนหน้ามอ.PerOther}`==="NaN"?  "0" :`${ชุมชนหน้ามอ.PerOther}`
    ),
    createData(
      "ชุมชนโชคดี",
      ชุมชนโชคดี.Affiliation,
      ชุมชนโชคดี.Yourself,
      ชุมชนโชคดี.Gold,
      ชุมชนโชคดี.Disabled,
      ชุมชนโชคดี.Social,
      ชุมชนโชคดี.Other,
      ชุมชนโชคดี.Summary,
      `${ชุมชนโชคดี.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerAffiliation}`,
      `${ชุมชนโชคดี.PerYourself}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerYourself}`,
      `${ชุมชนโชคดี.PerGold}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerGold}`,
      `${ชุมชนโชคดี.PerDisabled}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerDisabled}`,
      `${ชุมชนโชคดี.PerSocial}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerSocial}`,
      `${ชุมชนโชคดี.PerOther}`==="NaN"?  "0" :`${ชุมชนโชคดี.PerOther}`
    ),
    createData(
      "ชุมชนสมใจนึก",
      ชุมชนสมใจนึก.Affiliation,
      ชุมชนสมใจนึก.Yourself,
      ชุมชนสมใจนึก.Gold,
      ชุมชนสมใจนึก.Disabled,
      ชุมชนสมใจนึก.Social,
      ชุมชนสมใจนึก.Other,
      ชุมชนสมใจนึก.Summary,
      `${ชุมชนสมใจนึก.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerAffiliation}`,
      `${ชุมชนสมใจนึก.PerYourself}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerYourself}`,
      `${ชุมชนสมใจนึก.PerGold}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerGold}`,
      `${ชุมชนสมใจนึก.PerDisabled}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerDisabled}`,
      `${ชุมชนสมใจนึก.PerSocial}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerSocial}`,
      `${ชุมชนสมใจนึก.PerOther}`==="NaN"?  "0" :`${ชุมชนสมใจนึก.PerOther}`
    ),
    createData(
      "ชุมชนหน้าเทศบาล",
      ชุมชนหน้าเทศบาล.Affiliation,
      ชุมชนหน้าเทศบาล.Yourself,
      ชุมชนหน้าเทศบาล.Gold,
      ชุมชนหน้าเทศบาล.Disabled,
      ชุมชนหน้าเทศบาล.Social,
      ชุมชนหน้าเทศบาล.Other,
      ชุมชนหน้าเทศบาล.Summary,
      `${ชุมชนหน้าเทศบาล.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerAffiliation}`,
      `${ชุมชนหน้าเทศบาล.PerYourself}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerYourself}`,
      `${ชุมชนหน้าเทศบาล.PerGold}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerGold}`,
      `${ชุมชนหน้าเทศบาล.PerDisabled}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerDisabled}`,
      `${ชุมชนหน้าเทศบาล.PerSocial}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerSocial}`,
      `${ชุมชนหน้าเทศบาล.PerOther}`==="NaN"?  "0" :`${ชุมชนหน้าเทศบาล.PerOther}`
    ),
    createData(
      "ชุมชนวัดแสนสุข",
      ชุมชนวัดแสนสุข.Affiliation,
      ชุมชนวัดแสนสุข.Yourself,
      ชุมชนวัดแสนสุข.Gold,
      ชุมชนวัดแสนสุข.Disabled,
      ชุมชนวัดแสนสุข.Social,
      ชุมชนวัดแสนสุข.Other,
      ชุมชนวัดแสนสุข.Summary,
      `${ชุมชนวัดแสนสุข.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerAffiliation}`,
      `${ชุมชนวัดแสนสุข.PerYourself}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerYourself}`,
      `${ชุมชนวัดแสนสุข.PerGold}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerGold}`,
      `${ชุมชนวัดแสนสุข.PerDisabled}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerDisabled}`,
      `${ชุมชนวัดแสนสุข.PerSocial}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerSocial}`,
      `${ชุมชนวัดแสนสุข.PerOther}`==="NaN"?  "0" :`${ชุมชนวัดแสนสุข.PerOther}`
    ),
    createData(
      "ชุมชนมุขแสนเจริญ1",
      ชุมชนมุขแสนเจริญ1.Affiliation,
      ชุมชนมุขแสนเจริญ1.Yourself,
      ชุมชนมุขแสนเจริญ1.Gold,
      ชุมชนมุขแสนเจริญ1.Disabled,
      ชุมชนมุขแสนเจริญ1.Social,
      ชุมชนมุขแสนเจริญ1.Other,
      ชุมชนมุขแสนเจริญ1.Summary,
      `${ชุมชนมุขแสนเจริญ1.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerAffiliation}`,
      `${ชุมชนมุขแสนเจริญ1.PerYourself}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerYourself}`,
      `${ชุมชนมุขแสนเจริญ1.PerGold}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerGold}`,
      `${ชุมชนมุขแสนเจริญ1.PerDisabled}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerDisabled}`,
      `${ชุมชนมุขแสนเจริญ1.PerSocial}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerSocial}`,
      `${ชุมชนมุขแสนเจริญ1.PerOther}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ1.PerOther}`
    ),
    createData(
      "ชุมชนมุขแสนเจริญ2",
      ชุมชนมุขแสนเจริญ2.Affiliation,
      ชุมชนมุขแสนเจริญ2.Yourself,
      ชุมชนมุขแสนเจริญ2.Gold,
      ชุมชนมุขแสนเจริญ2.Disabled,
      ชุมชนมุขแสนเจริญ2.Social,
      ชุมชนมุขแสนเจริญ2.Other,
      ชุมชนมุขแสนเจริญ2.Summary,
      `${ชุมชนมุขแสนเจริญ2.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerAffiliation}`,
      `${ชุมชนมุขแสนเจริญ2.PerYourself}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerYourself}`,
      `${ชุมชนมุขแสนเจริญ2.PerGold}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerGold}`,
      `${ชุมชนมุขแสนเจริญ2.PerDisabled}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerDisabled}`,
      `${ชุมชนมุขแสนเจริญ2.PerSocial}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerSocial}`,
      `${ชุมชนมุขแสนเจริญ2.PerOther}`==="NaN"?  "0" :`${ชุมชนมุขแสนเจริญ2.PerOther}`
    ),
    createData(
      "ชุมชนเขาสามมุข",
      ชุมชนเขาสามมุข.Affiliation,
      ชุมชนเขาสามมุข.Yourself,
      ชุมชนเขาสามมุข.Gold,
      ชุมชนเขาสามมุข.Disabled,
      ชุมชนเขาสามมุข.Social,
      ชุมชนเขาสามมุข.Other,
      ชุมชนเขาสามมุข.Summary,
      `${ชุมชนเขาสามมุข.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerAffiliation}`,
      `${ชุมชนเขาสามมุข.PerYourself}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerYourself}`,
      `${ชุมชนเขาสามมุข.PerGold}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerGold}`,
      `${ชุมชนเขาสามมุข.PerDisabled}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerDisabled}`,
      `${ชุมชนเขาสามมุข.PerSocial}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerSocial}`,
      `${ชุมชนเขาสามมุข.PerOther}`==="NaN"?  "0" :`${ชุมชนเขาสามมุข.PerOther}`
    ),
    createData(
      "ชุมชนบ้านแหลมแท่น",
      ชุมชนบ้านแหลมแท่น.Affiliation,
      ชุมชนบ้านแหลมแท่น.Yourself,
      ชุมชนบ้านแหลมแท่น.Gold,
      ชุมชนบ้านแหลมแท่น.Disabled,
      ชุมชนบ้านแหลมแท่น.Social,
      ชุมชนบ้านแหลมแท่น.Other,
      ชุมชนบ้านแหลมแท่น.Summary,
      `${ชุมชนบ้านแหลมแท่น.PerAffiliation}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerAffiliation}`,
      `${ชุมชนบ้านแหลมแท่น.PerYourself}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerYourself}`,
      `${ชุมชนบ้านแหลมแท่น.PerGold}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerGold}`,
      `${ชุมชนบ้านแหลมแท่น.PerDisabled}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerDisabled}`,
      `${ชุมชนบ้านแหลมแท่น.PerSocial}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerSocial}`,
      `${ชุมชนบ้านแหลมแท่น.PerOther}`==="NaN"?  "0" :`${ชุมชนบ้านแหลมแท่น.PerOther}`
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
      </div> */}
      <br />
      {/* <div className="chart" ref={ref}>
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["", "จำนวน"],
            [`เบิกต้นสังกัด\n${Affiliation}คน\n${PerAffiliation}%`,Affiliation],
            [`ชำระเงินเอง\n${Yourself}คน\n${PerYourself}%`,Yourself],
            [`บัตรทอง\n${Gold}คน\n${PerGold}%`,Gold],
            [`บัตรผู้พิการ\n${Disabled}คน\n${PerDisabled}%`,Disabled],
            [`บัตรประกันสังคม\n${Social}คน\n${PerSocial}%`,Social],
            [`อืนๆ\n${Other}คน\n${PerOther}%`,Other],
          ]}
          options={{
            chart: {
              title: `จำนวนประชากรผู้สูงอายุทั้งหมดใน ${community} จำนวน ${Sum} คน`,
              subtitle: "แจกแจงตามสิทธิการรักษา และชุมชน",
            },
          }}
        />
      </div> */}
      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ชุมชน&nbsp;</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                
                <StyledTableCell align="center">เบิกต้นสังกัด</StyledTableCell>
                <StyledTableCell align="center">ชำระเงินเอง</StyledTableCell>
                <StyledTableCell align="center">บัตรทอง</StyledTableCell>
                <StyledTableCell align="center">บัตรผู้พิการ</StyledTableCell>
                <StyledTableCell align="center">บัตรประกันสังคม</StyledTableCell>
                <StyledTableCell align="center">อื่นๆ</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
                
                <StyledTableCell></StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell  component="th" scope="row">
                    {row.ชุมชน}
                  </StyledTableCell>
                  <StyledTableCell align="left">จำนวน<br />เปอร์เซ็นต์</StyledTableCell>
                  
                  <StyledTableCell align="center">
                    {row.เบิกต้นสังกัด} คน <br />{row.เปอร์เซ็นต์เบิกต้นสังกัด} % 
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ชำระเงินเอง} คน <br />{row.เปอร์เซ็นต์ชำระเงินเอง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรทอง} คน <br />{row.เปอร์เซ็นต์บัตรทอง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรผู้พิการ} คน <br />{row.เปอร์เซ็นต์บัตรผู้พิการ} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรประกันสังคม} คน <br />{row.เปอร์เซ็นต์บัตรประกันสังคม} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.อื่นๆ} คน <br />{row.เปอร์เซ็นต์อื่นๆ} %
                  </StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.รวม}
                  </StyledTableCell>
                  
                  
                  <StyledTableCell>&nbsp;</StyledTableCell>
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

export default function Chart8() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา และชุมชน
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
