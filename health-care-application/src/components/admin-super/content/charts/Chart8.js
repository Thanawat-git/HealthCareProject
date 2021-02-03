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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign:"center"
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

function createData(name,Affiliation,Yourself,Gold,Disabled,Social,Other,Summary,PerAffiliation,PerYourself
  ,PerGold,PerDisabled,PerSocial,PerOther) {
  return {name,Affiliation,Yourself,Gold,Disabled,Social,Other,Summary,PerAffiliation,PerYourself
    ,PerGold,PerDisabled,PerSocial,PerOther};
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
    createData("ชุมชนมณีแก้ว",ชุมชนมณีแก้ว.Affiliation,ชุมชนมณีแก้ว.Yourself, ชุมชนมณีแก้ว.Gold,ชุมชนมณีแก้ว.Disabled,ชุมชนมณีแก้ว.Social,ชุมชนมณีแก้ว.Other,ชุมชนมณีแก้ว.Summary,ชุมชนมณีแก้ว.PerAffiliation,ชุมชนมณีแก้ว.PerYourself,ชุมชนมณีแก้ว.PerGold,ชุมชนมณีแก้ว.PerDisabled,ชุมชนมณีแก้ว.PerSocial,ชุมชนมณีแก้ว.PerOther),
    createData("ชุมชนดอนบน",ชุมชนดอนบน.Affiliation,ชุมชนดอนบน.Yourself, ชุมชนดอนบน.Gold,ชุมชนดอนบน.Disabled,ชุมชนดอนบน.Social,ชุมชนดอนบน.Other,ชุมชนดอนบน.Summary,ชุมชนดอนบน.PerAffiliation,ชุมชนดอนบน.PerYourself,ชุมชนดอนบน.PerGold,ชุมชนดอนบน.PerDisabled,ชุมชนดอนบน.PerSocial,ชุมชนดอนบน.PerOther),
    createData("ชุมชนบางแสนทาวเวอร์",ชุมชนบางแสนทาวเวอร์.Affiliation,ชุมชนบางแสนทาวเวอร์.Yourself, ชุมชนบางแสนทาวเวอร์.Gold,ชุมชนบางแสนทาวเวอร์.Disabled,ชุมชนบางแสนทาวเวอร์.Social,ชุมชนบางแสนทาวเวอร์.Other,ชุมชนบางแสนทาวเวอร์.Summary,ชุมชนบางแสนทาวเวอร์.PerAffiliation,ชุมชนบางแสนทาวเวอร์.PerYourself,ชุมชนบางแสนทาวเวอร์.PerGold,ชุมชนบางแสนทาวเวอร์.PerDisabled,ชุมชนบางแสนทาวเวอร์.PerSocial,ชุมชนบางแสนทาวเวอร์.PerOther),
    createData("ชุมชนตาลล้อม1",ชุมชนตาลล้อม1.Affiliation,ชุมชนตาลล้อม1.Yourself, ชุมชนตาลล้อม1.Gold,ชุมชนตาลล้อม1.Disabled,ชุมชนตาลล้อม1.Social,ชุมชนตาลล้อม1.Other,ชุมชนตาลล้อม1.Summary,ชุมชนตาลล้อม1.PerAffiliation,ชุมชนตาลล้อม1.PerYourself,ชุมชนตาลล้อม1.PerGold,ชุมชนตาลล้อม1.PerDisabled,ชุมชนตาลล้อม1.PerSocial,ชุมชนตาลล้อม1.PerOther),
    createData("ชุมชนตาลล้อม2",ชุมชนตาลล้อม2.Affiliation,ชุมชนตาลล้อม2.Yourself, ชุมชนตาลล้อม2.Gold,ชุมชนตาลล้อม2.Disabled,ชุมชนตาลล้อม2.Social,ชุมชนตาลล้อม2.Other,ชุมชนตาลล้อม2.Summary,ชุมชนตาลล้อม2.PerAffiliation,ชุมชนตาลล้อม2.PerYourself,ชุมชนตาลล้อม2.PerGold,ชุมชนตาลล้อม2.PerDisabled,ชุมชนตาลล้อม2.PerSocial,ชุมชนตาลล้อม2.PerOther),
    createData("ชุมชนบ้านเหมือง",ชุมชนบ้านเหมือง.Affiliation,ชุมชนบ้านเหมือง.Yourself, ชุมชนบ้านเหมือง.Gold,ชุมชนบ้านเหมือง.Disabled,ชุมชนบ้านเหมือง.Social,ชุมชนบ้านเหมือง.Other,ชุมชนบ้านเหมือง.Summary,ชุมชนบ้านเหมือง.PerAffiliation,ชุมชนบ้านเหมือง.PerYourself,ชุมชนบ้านเหมือง.PerGold,ชุมชนบ้านเหมือง.PerDisabled,ชุมชนบ้านเหมือง.PerSocial,ชุมชนบ้านเหมือง.PerOther),
    createData("ชุมชนพัฒนา2",ชุมชนพัฒนา2.Affiliation,ชุมชนพัฒนา2.Yourself, ชุมชนพัฒนา2.Gold,ชุมชนพัฒนา2.Disabled,ชุมชนพัฒนา2.Social,ชุมชนพัฒนา2.Other,ชุมชนพัฒนา2.Summary,ชุมชนพัฒนา2.PerAffiliation,ชุมชนพัฒนา2.PerYourself,ชุมชนพัฒนา2.PerGold,ชุมชนพัฒนา2.PerDisabled,ชุมชนพัฒนา2.PerSocial,ชุมชนพัฒนา2.PerOther),
    createData("ชุมชนดอนนารา",ชุมชนดอนนารา.Affiliation,ชุมชนดอนนารา.Yourself, ชุมชนดอนนารา.Gold,ชุมชนดอนนารา.Disabled,ชุมชนดอนนารา.Social,ชุมชนดอนนารา.Other,ชุมชนดอนนารา.Summary,ชุมชนดอนนารา.PerAffiliation,ชุมชนดอนนารา.PerYourself,ชุมชนดอนนารา.PerGold,ชุมชนดอนนารา.PerDisabled,ชุมชนดอนนารา.PerSocial,ชุมชนดอนนารา.PerOther),
    createData("ชุมชนวัดกลางดอน",ชุมชนวัดกลางดอน.Affiliation,ชุมชนวัดกลางดอน.Yourself, ชุมชนวัดกลางดอน.Gold,ชุมชนวัดกลางดอน.Disabled,ชุมชนวัดกลางดอน.Social,ชุมชนวัดกลางดอน.Other,ชุมชนวัดกลางดอน.Summary,ชุมชนวัดกลางดอน.PerAffiliation,ชุมชนวัดกลางดอน.PerYourself,ชุมชนวัดกลางดอน.PerGold,ชุมชนวัดกลางดอน.PerDisabled,ชุมชนวัดกลางดอน.PerSocial,ชุมชนวัดกลางดอน.PerOther),
    createData("ชุมชนแสนสุข",ชุมชนแสนสุข.Affiliation,ชุมชนแสนสุข.Yourself, ชุมชนแสนสุข.Gold,ชุมชนแสนสุข.Disabled,ชุมชนแสนสุข.Social,ชุมชนแสนสุข.Other,ชุมชนแสนสุข.Summary,ชุมชนแสนสุข.PerAffiliation,ชุมชนแสนสุข.PerYourself,ชุมชนแสนสุข.PerGold,ชุมชนแสนสุข.PerDisabled,ชุมชนแสนสุข.PerSocial,ชุมชนแสนสุข.PerOther),
    createData("ชุมชนมาบมะยม",ชุมชนมาบมะยม.Affiliation,ชุมชนมาบมะยม.Yourself, ชุมชนมาบมะยม.Gold,ชุมชนมาบมะยม.Disabled,ชุมชนมาบมะยม.Social,ชุมชนมาบมะยม.Other,ชุมชนมาบมะยม.Summary,ชุมชนมาบมะยม.PerAffiliation,ชุมชนมาบมะยม.PerYourself,ชุมชนมาบมะยม.PerGold,ชุมชนมาบมะยม.PerDisabled,ชุมชนมาบมะยม.PerSocial,ชุมชนมาบมะยม.PerOther),
    createData("ชุมชนท้ายตลาด",ชุมชนท้ายตลาด.Affiliation,ชุมชนท้ายตลาด.Yourself, ชุมชนท้ายตลาด.Gold,ชุมชนท้ายตลาด.Disabled,ชุมชนท้ายตลาด.Social,ชุมชนท้ายตลาด.Other,ชุมชนท้ายตลาด.Summary,ชุมชนท้ายตลาด.PerAffiliation,ชุมชนท้ายตลาด.PerYourself,ชุมชนท้ายตลาด.PerGold,ชุมชนท้ายตลาด.PerDisabled,ชุมชนท้ายตลาด.PerSocial,ชุมชนท้ายตลาด.PerOther),
    createData("ชุมชนร่วมใจพัฒนา",ชุมชนร่วมใจพัฒนา.Affiliation,ชุมชนร่วมใจพัฒนา.Yourself, ชุมชนร่วมใจพัฒนา.Gold,ชุมชนร่วมใจพัฒนา.Disabled,ชุมชนร่วมใจพัฒนา.Social,ชุมชนร่วมใจพัฒนา.Other,ชุมชนร่วมใจพัฒนา.Summary,ชุมชนร่วมใจพัฒนา.PerAffiliation,ชุมชนร่วมใจพัฒนา.PerYourself,ชุมชนร่วมใจพัฒนา.PerGold,ชุมชนร่วมใจพัฒนา.PerDisabled,ชุมชนร่วมใจพัฒนา.PerSocial,ชุมชนร่วมใจพัฒนา.PerOther),
    createData("ชุมชนบางแสนบน",ชุมชนบางแสนบน.Affiliation,ชุมชนบางแสนบน.Yourself, ชุมชนบางแสนบน.Gold,ชุมชนบางแสนบน.Disabled,ชุมชนบางแสนบน.Social,ชุมชนบางแสนบน.Other,ชุมชนบางแสนบน.Summary,ชุมชนบางแสนบน.PerAffiliation,ชุมชนบางแสนบน.PerYourself,ชุมชนบางแสนบน.PerGold,ชุมชนบางแสนบน.PerDisabled,ชุมชนบางแสนบน.PerSocial,ชุมชนบางแสนบน.PerOther),
    createData("ชุมชนหาดวอนนภา",ชุมชนหาดวอนนภา.Affiliation,ชุมชนหาดวอนนภา.Yourself, ชุมชนหาดวอนนภา.Gold,ชุมชนหาดวอนนภา.Disabled,ชุมชนหาดวอนนภา.Social,ชุมชนหาดวอนนภา.Other,ชุมชนหาดวอนนภา.Summary,ชุมชนหาดวอนนภา.PerAffiliation,ชุมชนหาดวอนนภา.PerYourself,ชุมชนหาดวอนนภา.PerGold,ชุมชนหาดวอนนภา.PerDisabled,ชุมชนหาดวอนนภา.PerSocial,ชุมชนหาดวอนนภา.PerOther),
    createData("ชุมชนบางเป้ง",ชุมชนบางเป้ง.Affiliation,ชุมชนบางเป้ง.Yourself, ชุมชนบางเป้ง.Gold,ชุมชนบางเป้ง.Disabled,ชุมชนบางเป้ง.Social,ชุมชนบางเป้ง.Other,ชุมชนบางเป้ง.Summary,ชุมชนบางเป้ง.PerAffiliation,ชุมชนบางเป้ง.PerYourself,ชุมชนบางเป้ง.PerGold,ชุมชนบางเป้ง.PerDisabled,ชุมชนบางเป้ง.PerSocial,ชุมชนบางเป้ง.PerOther),
    createData("ชุมชนหน้ามอ",ชุมชนหน้ามอ.Affiliation,ชุมชนหน้ามอ.Yourself, ชุมชนหน้ามอ.Gold,ชุมชนหน้ามอ.Disabled,ชุมชนหน้ามอ.Social,ชุมชนหน้ามอ.Other,ชุมชนหน้ามอ.Summary,ชุมชนมณีแก้ว.PerAffiliation,ชุมชนมณีแก้ว.PerYourself,ชุมชนมณีแก้ว.PerGold,ชุมชนมณีแก้ว.PerDisabled,ชุมชนมณีแก้ว.PerSocial,ชุมชนมณีแก้ว.PerOther),
    createData("ชุมชนโชคดี",ชุมชนโชคดี.Affiliation,ชุมชนโชคดี.Yourself, ชุมชนโชคดี.Gold,ชุมชนโชคดี.Disabled,ชุมชนโชคดี.Social,ชุมชนโชคดี.Other,ชุมชนโชคดี.Summary,ชุมชนมณีแก้ว.PerAffiliation,ชุมชนมณีแก้ว.PerYourself,ชุมชนมณีแก้ว.PerGold,ชุมชนมณีแก้ว.PerDisabled,ชุมชนมณีแก้ว.PerSocial,ชุมชนมณีแก้ว.PerOther),
    createData("ชุมชนสมใจนึก",ชุมชนสมใจนึก.Affiliation,ชุมชนสมใจนึก.Yourself, ชุมชนสมใจนึก.Gold,ชุมชนสมใจนึก.Disabled,ชุมชนสมใจนึก.Social,ชุมชนสมใจนึก.Other,ชุมชนสมใจนึก.Summary,ชุมชนสมใจนึก.PerAffiliation,ชุมชนสมใจนึก.PerYourself,ชุมชนสมใจนึก.PerGold,ชุมชนสมใจนึก.PerDisabled,ชุมชนสมใจนึก.PerSocial,ชุมชนสมใจนึก.PerOther),
    createData("ชุมชนหน้าเทศบาล",ชุมชนหน้าเทศบาล.Affiliation,ชุมชนหน้าเทศบาล.Yourself, ชุมชนหน้าเทศบาล.Gold,ชุมชนหน้าเทศบาล.Disabled,ชุมชนหน้าเทศบาล.Social,ชุมชนหน้าเทศบาล.Other,ชุมชนหน้าเทศบาล.Summary,ชุมชนหน้าเทศบาล.PerAffiliation,ชุมชนหน้าเทศบาล.PerYourself,ชุมชนหน้าเทศบาล.PerGold,ชุมชนหน้าเทศบาล.PerDisabled,ชุมชนหน้าเทศบาล.PerSocial,ชุมชนหน้าเทศบาล.PerOther),
    createData("ชุมชนวัดแสนสุข",ชุมชนวัดแสนสุข.Affiliation,ชุมชนวัดแสนสุข.Yourself, ชุมชนวัดแสนสุข.Gold,ชุมชนวัดแสนสุข.Disabled,ชุมชนวัดแสนสุข.Social,ชุมชนวัดแสนสุข.Other,ชุมชนวัดแสนสุข.Summary,ชุมชนวัดแสนสุข.PerAffiliation,ชุมชนวัดแสนสุข.PerYourself,ชุมชนวัดแสนสุข.PerGold,ชุมชนวัดแสนสุข.PerDisabled,ชุมชนวัดแสนสุข.PerSocial,ชุมชนวัดแสนสุข.PerOther),
    createData("ชุมชนมุขแสนเจริญ1",ชุมชนมุขแสนเจริญ1.Affiliation,ชุมชนมุขแสนเจริญ1.Yourself, ชุมชนมุขแสนเจริญ1.Gold,ชุมชนมุขแสนเจริญ1.Disabled,ชุมชนมุขแสนเจริญ1.Social,ชุมชนมุขแสนเจริญ1.Other,ชุมชนมุขแสนเจริญ1.Summary,ชุมชนมุขแสนเจริญ1.PerAffiliation,ชุมชนมุขแสนเจริญ1.PerYourself,ชุมชนมุขแสนเจริญ1.PerGold,ชุมชนมุขแสนเจริญ1.PerDisabled,ชุมชนมุขแสนเจริญ1.PerSocial,ชุมชนมุขแสนเจริญ1.PerOther),
    createData("ชุมชนมุขแสนเจริญ2",ชุมชนมุขแสนเจริญ2.Affiliation,ชุมชนมุขแสนเจริญ2.Yourself, ชุมชนมุขแสนเจริญ2.Gold,ชุมชนมุขแสนเจริญ2.Disabled,ชุมชนมุขแสนเจริญ2.Social,ชุมชนมุขแสนเจริญ2.Other,ชุมชนมุขแสนเจริญ2.Summary,ชุมชนมุขแสนเจริญ2.PerAffiliation,ชุมชนมุขแสนเจริญ2.PerYourself,ชุมชนมุขแสนเจริญ2.PerGold,ชุมชนมุขแสนเจริญ2.PerDisabled,ชุมชนมุขแสนเจริญ2.PerSocial,ชุมชนมุขแสนเจริญ2.PerOther),
    createData("ชุมชนเขาสามมุข",ชุมชนเขาสามมุข.Affiliation,ชุมชนเขาสามมุข.Yourself, ชุมชนเขาสามมุข.Gold,ชุมชนเขาสามมุข.Disabled,ชุมชนเขาสามมุข.Social,ชุมชนเขาสามมุข.Other,ชุมชนเขาสามมุข.Summary,ชุมชนเขาสามมุข.PerAffiliation,ชุมชนเขาสามมุข.PerYourself,ชุมชนเขาสามมุข.PerGold,ชุมชนเขาสามมุข.PerDisabled,ชุมชนเขาสามมุข.PerSocial,ชุมชนเขาสามมุข.PerOther),
    createData("ชุมชนบ้านแหลมแท่น",ชุมชนบ้านแหลมแท่น.Affiliation,ชุมชนบ้านแหลมแท่น.Yourself, ชุมชนบ้านแหลมแท่น.Gold,ชุมชนบ้านแหลมแท่น.Disabled,ชุมชนบ้านแหลมแท่น.Social,ชุมชนบ้านแหลมแท่น.Other,ชุมชนบ้านแหลมแท่น.Summary,ชุมชนบ้านแหลมแท่น.PerAffiliation,ชุมชนบ้านแหลมแท่น.PerYourself,ชุมชนบ้านแหลมแท่น.PerGold,ชุมชนบ้านแหลมแท่น.PerDisabled,ชุมชนบ้านแหลมแท่น.PerSocial,ชุมชนบ้านแหลมแท่น.PerOther),
  ];


  return (
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
    <div>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >ชุมชน&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell >เบิกต้นสังกัด</StyledTableCell>
                <StyledTableCell >ชำระเงินเอง</StyledTableCell>
                <StyledTableCell>บัตรทอง</StyledTableCell>
                <StyledTableCell >บัตรผู้พิการ</StyledTableCell>
                <StyledTableCell >บัตรประกันสังคม</StyledTableCell>
                <StyledTableCell >อื่นๆ</StyledTableCell>
                <StyledTableCell >รวม</StyledTableCell>            
                <StyledTableCell ></StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
              </TableRow>
  
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell align="center" component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">{row.Affiliation} คน &nbsp; {row.PerAffiliation} %</StyledTableCell>
                  <StyledTableCell align="center">{row.Yourself} คน &nbsp; {row.PerYourself}%</StyledTableCell>
                  <StyledTableCell align="center">{row.Gold} คน &nbsp; {row.PerGold}%</StyledTableCell>
                  <StyledTableCell align="center">{row.Disabled} คน &nbsp; {row.PerDisabled}%</StyledTableCell>
                  <StyledTableCell align="center">{row.Social} คน &nbsp; {row.PerSocial}%</StyledTableCell>
                  <StyledTableCell align="center">{row.Other} คน &nbsp; {row.PerOther}%</StyledTableCell>
                  <StyledTableCell align="center">{row.Summary}</StyledTableCell>
                  
                  <StyledTableCell >&nbsp;</StyledTableCell>
                  <StyledTableCell >&nbsp;</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody> 
          </Table>
        </TableContainer>
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
