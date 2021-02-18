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
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart4 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv"
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
  ชุมชน,
  ไม่มีผู้ดูแล, //ไม่มี
  มีผู้ดูแล, //มี
  บุตรชายหรือบุตรสาว,
  ลูกเขยหรือลูกสะใภ้,
  หลานชายหรือหลานสาว,
  พี่น้อง,
  บิดาหรือมารดา,
  สามีหรือภรรยา,
  บุคคลอื่น,
  เปอร์เซ็นต์ไม่มีผู้ดูแล,
  เปอร์เซ็นต์มีผู้ดูแล,
  เปอร์เซ็นต์บุตรชายหรือบุตรสาว,
  เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้,
  เปอร์เซ็นต์หลานชายหรือหลานสาว,
  เปอร์เซ็นต์พี่น้อง,
  เปอร์เซ็นต์บิดาหรือมารดา,
  เปอร์เซ็นต์สามีหรือภรรยา,
  เปอร์เซ็นต์บุคคลอื่น,
) {
  return {
    ชุมชน,
    ไม่มีผู้ดูแล, //ไม่มี
    มีผู้ดูแล, //มี
    บุตรชายหรือบุตรสาว,
    ลูกเขยหรือลูกสะใภ้,
    หลานชายหรือหลานสาว,
    พี่น้อง,
    บิดาหรือมารดา,
    สามีหรือภรรยา,
    บุคคลอื่น,
    เปอร์เซ็นต์ไม่มีผู้ดูแล,
    เปอร์เซ็นต์มีผู้ดูแล,
    เปอร์เซ็นต์บุตรชายหรือบุตรสาว,
    เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้,
    เปอร์เซ็นต์หลานชายหรือหลานสาว,
    เปอร์เซ็นต์พี่น้อง,
    เปอร์เซ็นต์บิดาหรือมารดา,
    เปอร์เซ็นต์สามีหรือภรรยา,
    เปอร์เซ็นต์บุคคลอื่น,
  };
}
const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart4Reducer = useSelector(({ chart4Reducer }) => chart4Reducer);
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
  } = chart4Reducer.results;
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart4(e.target.value));
  };
  const rows = [
    createData(
      "ชุมชนมณีแก้ว",
      ชุมชนมณีแก้ว.Alone, //ไม่มี
      ชุมชนมณีแก้ว.NotAlone.SumNotAlone, //มี
      ชุมชนมณีแก้ว.NotAlone.Child,
      ชุมชนมณีแก้ว.NotAlone.SonInLaw,
      ชุมชนมณีแก้ว.NotAlone.GrandChild,
      ชุมชนมณีแก้ว.NotAlone.Sibling,
      ชุมชนมณีแก้ว.NotAlone.Parent,
      ชุมชนมณีแก้ว.NotAlone.Partner,
      ชุมชนมณีแก้ว.NotAlone.Other,
      `${ชุมชนมณีแก้ว.PerAlone}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerAlone}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerSumNotAlone}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerSonInLaw}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerGrandChild}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerSibling}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerParent}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerPartner}`,
      `${ชุมชนมณีแก้ว.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนมณีแก้ว.PerNotAlone.PerOther}`
    ),
    createData(
      "ชุมชนดอนบน",
    ชุมชนดอนบน.Alone, //ไม่มี
    ชุมชนดอนบน.NotAlone.SumNotAlone, //มี
    ชุมชนดอนบน.NotAlone.Child,
    ชุมชนดอนบน.NotAlone.SonInLaw,
    ชุมชนดอนบน.NotAlone.GrandChild,
    ชุมชนดอนบน.NotAlone.Sibling,
    ชุมชนดอนบน.NotAlone.Parent,
    ชุมชนดอนบน.NotAlone.Partner,
    ชุมชนดอนบน.NotAlone.Other,
    `${ชุมชนดอนบน.PerAlone}`==="NaN"? "0":`${ชุมชนดอนบน.PerAlone}`,
    `${ชุมชนดอนบน.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนดอนบน.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนดอนบน.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerGrandChild}`,
    `${ชุมชนดอนบน.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerSibling}`,
    `${ชุมชนดอนบน.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerParent}`,
    `${ชุมชนดอนบน.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerPartner}`,
    `${ชุมชนดอนบน.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนดอนบน.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนบางแสนทาวเวอร์",
    ชุมชนบางแสนทาวเวอร์.Alone, //ไม่มี
    ชุมชนบางแสนทาวเวอร์.NotAlone.SumNotAlone, //มี
    ชุมชนบางแสนทาวเวอร์.NotAlone.Child,
    ชุมชนบางแสนทาวเวอร์.NotAlone.SonInLaw,
    ชุมชนบางแสนทาวเวอร์.NotAlone.GrandChild,
    ชุมชนบางแสนทาวเวอร์.NotAlone.Sibling,
    ชุมชนบางแสนทาวเวอร์.NotAlone.Parent,
    ชุมชนบางแสนทาวเวอร์.NotAlone.Partner,
    ชุมชนบางแสนทาวเวอร์.NotAlone.Other,
    `${ชุมชนบางแสนทาวเวอร์.PerAlone}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerAlone}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerGrandChild}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSibling}`==="NaN"? "0": `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerSibling}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerParent}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerPartner}`,
    `${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนบางแสนทาวเวอร์.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนตาลล้อม1 ",
    ชุมชนตาลล้อม1.Alone, //ไม่มี
    ชุมชนตาลล้อม1.NotAlone.SumNotAlone, //มี
    ชุมชนตาลล้อม1.NotAlone.Child,
    ชุมชนตาลล้อม1.NotAlone.SonInLaw,
    ชุมชนตาลล้อม1.NotAlone.GrandChild,
    ชุมชนตาลล้อม1.NotAlone.Sibling,
    ชุมชนตาลล้อม1.NotAlone.Parent,
    ชุมชนตาลล้อม1.NotAlone.Partner,
    ชุมชนตาลล้อม1.NotAlone.Other,
    `${ชุมชนตาลล้อม1.PerAlone}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerAlone}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerGrandChild}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerSibling}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerParent}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerPartner}`,
    `${ชุมชนตาลล้อม1.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนตาลล้อม1.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนตาลล้อม2 ",
    ชุมชนตาลล้อม2.Alone, //ไม่มี
    ชุมชนตาลล้อม2.NotAlone.SumNotAlone, //มี
    ชุมชนตาลล้อม2.NotAlone.Child,
    ชุมชนตาลล้อม2.NotAlone.SonInLaw,
    ชุมชนตาลล้อม2.NotAlone.GrandChild,
    ชุมชนตาลล้อม2.NotAlone.Sibling,
    ชุมชนตาลล้อม2.NotAlone.Parent,
    ชุมชนตาลล้อม2.NotAlone.Partner,
    ชุมชนตาลล้อม2.NotAlone.Other,
    `${ชุมชนตาลล้อม2.PerAlone}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerAlone}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerGrandChild}`==="NaN"? "0": `${ชุมชนตาลล้อม2.PerNotAlone.PerGrandChild}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerSibling}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerParent}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerPartner}`,
    `${ชุมชนตาลล้อม2.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนตาลล้อม2.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนบ้านเหมือง ",
    ชุมชนบ้านเหมือง.Alone, //ไม่มี
    ชุมชนบ้านเหมือง.NotAlone.SumNotAlone, //มี
    ชุมชนบ้านเหมือง.NotAlone.Child,
    ชุมชนบ้านเหมือง.NotAlone.SonInLaw,
    ชุมชนบ้านเหมือง.NotAlone.GrandChild,
    ชุมชนบ้านเหมือง.NotAlone.Sibling,
    ชุมชนบ้านเหมือง.NotAlone.Parent,
    ชุมชนบ้านเหมือง.NotAlone.Partner,
    ชุมชนบ้านเหมือง.NotAlone.Other,
    `${ชุมชนบ้านเหมือง.PerAlone}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerAlone}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerGrandChild}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerSibling}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerParent}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerPartner}`,
    `${ชุมชนบ้านเหมือง.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนบ้านเหมือง.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนพัฒนา2",
    ชุมชนพัฒนา2.Alone, //ไม่มี
    ชุมชนพัฒนา2.NotAlone.SumNotAlone, //มี
    ชุมชนพัฒนา2.NotAlone.Child,
    ชุมชนพัฒนา2.NotAlone.SonInLaw,
    ชุมชนพัฒนา2.NotAlone.GrandChild,
    ชุมชนพัฒนา2.NotAlone.Sibling,
    ชุมชนพัฒนา2.NotAlone.Parent,
    ชุมชนพัฒนา2.NotAlone.Partner,
    ชุมชนพัฒนา2.NotAlone.Other,
    `${ชุมชนพัฒนา2.PerAlone}`==="NaN"? "0": `${ชุมชนพัฒนา2.PerAlone}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerGrandChild}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerSibling}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerParent}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerPartner}`,
    `${ชุมชนพัฒนา2.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนพัฒนา2.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนดอนนารา ",
    ชุมชนดอนนารา.Alone, //ไม่มี
    ชุมชนดอนนารา.NotAlone.SumNotAlone, //มี
    ชุมชนดอนนารา.NotAlone.Child,
    ชุมชนดอนนารา.NotAlone.SonInLaw,
    ชุมชนดอนนารา.NotAlone.GrandChild,
    ชุมชนดอนนารา.NotAlone.Sibling,
    ชุมชนดอนนารา.NotAlone.Parent,
    ชุมชนดอนนารา.NotAlone.Partner,
    ชุมชนดอนนารา.NotAlone.Other,
    `${ชุมชนดอนนารา.PerAlone}`==="NaN"? "0":`${ชุมชนดอนนารา.PerAlone}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerGrandChild}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerSibling}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerParent}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerPartner}`,
    `${ชุมชนดอนนารา.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนดอนนารา.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนวัดกลางดอน ",
    ชุมชนวัดกลางดอน.Alone, //ไม่มี
    ชุมชนวัดกลางดอน.NotAlone.SumNotAlone, //มี
    ชุมชนวัดกลางดอน.NotAlone.Child,
    ชุมชนวัดกลางดอน.NotAlone.SonInLaw,
    ชุมชนวัดกลางดอน.NotAlone.GrandChild,
    ชุมชนวัดกลางดอน.NotAlone.Sibling,
    ชุมชนวัดกลางดอน.NotAlone.Parent,
    ชุมชนวัดกลางดอน.NotAlone.Partner,
    ชุมชนวัดกลางดอน.NotAlone.Other,
    `${ชุมชนวัดกลางดอน.PerAlone}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerAlone}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerGrandChild}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerSibling}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerParent}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerPartner}`,
    `${ชุมชนวัดกลางดอน.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนวัดกลางดอน.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนแสนสุข ",
    ชุมชนแสนสุข.Alone, //ไม่มี
    ชุมชนแสนสุข.NotAlone.SumNotAlone, //มี
    ชุมชนแสนสุข.NotAlone.Child,
    ชุมชนแสนสุข.NotAlone.SonInLaw,
    ชุมชนแสนสุข.NotAlone.GrandChild,
    ชุมชนแสนสุข.NotAlone.Sibling,
    ชุมชนแสนสุข.NotAlone.Parent,
    ชุมชนแสนสุข.NotAlone.Partner,
    ชุมชนแสนสุข.NotAlone.Other,
    `${ชุมชนแสนสุข.PerAlone}`==="NaN"? "0":`${ชุมชนแสนสุข.PerAlone}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerGrandChild}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerSibling}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerParent}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerPartner}`,
    `${ชุมชนแสนสุข.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนแสนสุข.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนมาบมะยม",
    ชุมชนมาบมะยม.Alone, //ไม่มี
    ชุมชนมาบมะยม.NotAlone.SumNotAlone, //มี
    ชุมชนมาบมะยม.NotAlone.Child,
    ชุมชนมาบมะยม.NotAlone.SonInLaw,
    ชุมชนมาบมะยม.NotAlone.GrandChild,
    ชุมชนมาบมะยม.NotAlone.Sibling,
    ชุมชนมาบมะยม.NotAlone.Parent,
    ชุมชนมาบมะยม.NotAlone.Partner,
    ชุมชนมาบมะยม.NotAlone.Other,
    `${ชุมชนมาบมะยม.PerAlone}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerAlone}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerGrandChild}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerSibling}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerParent}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerPartner}`,
    `${ชุมชนมาบมะยม.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนมาบมะยม.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนท้ายตลาด ",
    ชุมชนท้ายตลาด.Alone, //ไม่มี
    ชุมชนท้ายตลาด.NotAlone.SumNotAlone, //มี
    ชุมชนท้ายตลาด.NotAlone.Child,
    ชุมชนท้ายตลาด.NotAlone.SonInLaw,
    ชุมชนท้ายตลาด.NotAlone.GrandChild,
    ชุมชนท้ายตลาด.NotAlone.Sibling,
    ชุมชนท้ายตลาด.NotAlone.Parent,
    ชุมชนท้ายตลาด.NotAlone.Partner,
    ชุมชนท้ายตลาด.NotAlone.Other,
    `${ชุมชนท้ายตลาด.PerAlone}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerAlone}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerGrandChild}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerSibling}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerParent}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerPartner}`,
    `${ชุมชนท้ายตลาด.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนท้ายตลาด.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนร่วมใจพัฒนา",
    ชุมชนร่วมใจพัฒนา.Alone, //ไม่มี
    ชุมชนร่วมใจพัฒนา.NotAlone.SumNotAlone, //มี
    ชุมชนร่วมใจพัฒนา.NotAlone.Child,
    ชุมชนร่วมใจพัฒนา.NotAlone.SonInLaw,
    ชุมชนร่วมใจพัฒนา.NotAlone.GrandChild,
    ชุมชนร่วมใจพัฒนา.NotAlone.Sibling,
    ชุมชนร่วมใจพัฒนา.NotAlone.Parent,
    ชุมชนร่วมใจพัฒนา.NotAlone.Partner,
    ชุมชนร่วมใจพัฒนา.NotAlone.Other,
    `${ชุมชนร่วมใจพัฒนา.PerAlone}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerAlone}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerGrandChild}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerSibling}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerParent}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerPartner}`,
    `${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนร่วมใจพัฒนา.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนบางแสนบน",
    ชุมชนบางแสนบน.Alone, //ไม่มี
    ชุมชนบางแสนบน.NotAlone.SumNotAlone, //มี
    ชุมชนบางแสนบน.NotAlone.Child,
    ชุมชนบางแสนบน.NotAlone.SonInLaw,
    ชุมชนบางแสนบน.NotAlone.GrandChild,
    ชุมชนบางแสนบน.NotAlone.Sibling,
    ชุมชนบางแสนบน.NotAlone.Parent,
    ชุมชนบางแสนบน.NotAlone.Partner,
    ชุมชนบางแสนบน.NotAlone.Other,
    `${ชุมชนบางแสนบน.PerAlone}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerAlone}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerGrandChild}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerSibling}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerParent}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerPartner}`,
    `${ชุมชนบางแสนบน.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนบางแสนบน.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนหาดวอนนภา",
    ชุมชนหาดวอนนภา.Alone, //ไม่มี
    ชุมชนหาดวอนนภา.NotAlone.SumNotAlone, //มี
    ชุมชนหาดวอนนภา.NotAlone.Child,
    ชุมชนหาดวอนนภา.NotAlone.SonInLaw,
    ชุมชนหาดวอนนภา.NotAlone.GrandChild,
    ชุมชนหาดวอนนภา.NotAlone.Sibling,
    ชุมชนหาดวอนนภา.NotAlone.Parent,
    ชุมชนหาดวอนนภา.NotAlone.Partner,
    ชุมชนหาดวอนนภา.NotAlone.Other,
    `${ชุมชนหาดวอนนภา.PerAlone}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerAlone}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerGrandChild}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerSibling}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerParent}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerPartner}`,
    `${ชุมชนหาดวอนนภา.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนหาดวอนนภา.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนบางเป้ง",
    ชุมชนบางเป้ง.Alone, //ไม่มี
    ชุมชนบางเป้ง.NotAlone.SumNotAlone, //มี
    ชุมชนบางเป้ง.NotAlone.Child,
    ชุมชนบางเป้ง.NotAlone.SonInLaw,
    ชุมชนบางเป้ง.NotAlone.GrandChild,
    ชุมชนบางเป้ง.NotAlone.Sibling,
    ชุมชนบางเป้ง.NotAlone.Parent,
    ชุมชนบางเป้ง.NotAlone.Partner,
    ชุมชนบางเป้ง.NotAlone.Other,
    `${ชุมชนบางเป้ง.PerAlone}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerAlone}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerGrandChild}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerSibling}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerParent}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerPartner}`,
    `${ชุมชนบางเป้ง.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนบางเป้ง.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนหน้ามอ ",
    ชุมชนหน้ามอ.Alone, //ไม่มี
    ชุมชนหน้ามอ.NotAlone.SumNotAlone, //มี
    ชุมชนหน้ามอ.NotAlone.Child,
    ชุมชนหน้ามอ.NotAlone.SonInLaw,
    ชุมชนหน้ามอ.NotAlone.GrandChild,
    ชุมชนหน้ามอ.NotAlone.Sibling,
    ชุมชนหน้ามอ.NotAlone.Parent,
    ชุมชนหน้ามอ.NotAlone.Partner,
    ชุมชนหน้ามอ.NotAlone.Other,
    `${ชุมชนหน้ามอ.PerAlone}`==="NaN"? "0": `${ชุมชนหน้ามอ.PerAlone}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerGrandChild}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerSibling}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerParent}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนหน้ามอ.PerNotAlone.PerPartner}`,
    `${ชุมชนหน้ามอ.PerNotAlone.PerOther}`==="NaN"? "0": `${ชุมชนหน้ามอ.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนโชคดี ",
    ชุมชนโชคดี.Alone, //ไม่มี
    ชุมชนโชคดี.NotAlone.SumNotAlone, //มี
    ชุมชนโชคดี.NotAlone.Child,
    ชุมชนโชคดี.NotAlone.SonInLaw,
    ชุมชนโชคดี.NotAlone.GrandChild,
    ชุมชนโชคดี.NotAlone.Sibling,
    ชุมชนโชคดี.NotAlone.Parent,
    ชุมชนโชคดี.NotAlone.Partner,
    ชุมชนโชคดี.NotAlone.Other,
    `${ชุมชนโชคดี.PerAlone}`==="NaN"? "0":`${ชุมชนโชคดี.PerAlone}`,
    `${ชุมชนโชคดี.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนโชคดี.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนโชคดี.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerGrandChild}`,
    `${ชุมชนโชคดี.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerSibling}`,
    `${ชุมชนโชคดี.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerParent}`,
    `${ชุมชนโชคดี.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerPartner}`,
    `${ชุมชนโชคดี.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนโชคดี.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนสมใจนึก ",
    ชุมชนสมใจนึก.Alone, //ไม่มี
    ชุมชนสมใจนึก.NotAlone.SumNotAlone, //มี
    ชุมชนสมใจนึก.NotAlone.Child,
    ชุมชนสมใจนึก.NotAlone.SonInLaw,
    ชุมชนสมใจนึก.NotAlone.GrandChild,
    ชุมชนสมใจนึก.NotAlone.Sibling,
    ชุมชนสมใจนึก.NotAlone.Parent,
    ชุมชนสมใจนึก.NotAlone.Partner,
    ชุมชนสมใจนึก.NotAlone.Other,
    `${ชุมชนสมใจนึก.PerAlone}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerAlone}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerGrandChild}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerSibling}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerParent}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerPartner}`,
    `${ชุมชนสมใจนึก.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนสมใจนึก.PerNotAlone.PerOther}`
    ),
    createData("ชุมชนหน้าเทศบาล ",
    ชุมชนหน้าเทศบาล.Alone, //ไม่มี
    ชุมชนหน้าเทศบาล.NotAlone.SumNotAlone, //มี
    ชุมชนหน้าเทศบาล.NotAlone.Child,
    ชุมชนหน้าเทศบาล.NotAlone.SonInLaw,
    ชุมชนหน้าเทศบาล.NotAlone.GrandChild,
    ชุมชนหน้าเทศบาล.NotAlone.Sibling,
    ชุมชนหน้าเทศบาล.NotAlone.Parent,
    ชุมชนหน้าเทศบาล.NotAlone.Partner,
    ชุมชนหน้าเทศบาล.NotAlone.Other,
    `${ชุมชนหน้าเทศบาล.PerAlone}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerAlone}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerSumNotAlone}`==="NaN"? "0": `${ชุมชนหน้าเทศบาล.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerGrandChild}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerSibling}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerParent}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerPartner}`,
    `${ชุมชนหน้าเทศบาล.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนหน้าเทศบาล.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนวัดแสนสุข",
    ชุมชนวัดแสนสุข.Alone, //ไม่มี
    ชุมชนวัดแสนสุข.NotAlone.SumNotAlone, //มี
    ชุมชนวัดแสนสุข.NotAlone.Child,
    ชุมชนวัดแสนสุข.NotAlone.SonInLaw,
    ชุมชนวัดแสนสุข.NotAlone.GrandChild,
    ชุมชนวัดแสนสุข.NotAlone.Sibling,
    ชุมชนวัดแสนสุข.NotAlone.Parent,
    ชุมชนวัดแสนสุข.NotAlone.Partner,
    ชุมชนวัดแสนสุข.NotAlone.Other,
    `${ชุมชนวัดแสนสุข.PerAlone}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerAlone}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerGrandChild}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerSibling}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerParent}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerPartner}`,
    `${ชุมชนวัดแสนสุข.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนวัดแสนสุข.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนมุขแสนเจริญ1",
    ชุมชนมุขแสนเจริญ1.Alone, //ไม่มี
    ชุมชนมุขแสนเจริญ1.NotAlone.SumNotAlone, //มี
    ชุมชนมุขแสนเจริญ1.NotAlone.Child,
    ชุมชนมุขแสนเจริญ1.NotAlone.SonInLaw,
    ชุมชนมุขแสนเจริญ1.NotAlone.GrandChild,
    ชุมชนมุขแสนเจริญ1.NotAlone.Sibling,
    ชุมชนมุขแสนเจริญ1.NotAlone.Parent,
    ชุมชนมุขแสนเจริญ1.NotAlone.Partner,
    ชุมชนมุขแสนเจริญ1.NotAlone.Other,
    `${ชุมชนมุขแสนเจริญ1.PerAlone}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerAlone}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerGrandChild}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerSibling}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerParent}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerPartner}`,
    `${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ1.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนมุขแสนเจริญ2",
    ชุมชนมุขแสนเจริญ2.Alone, //ไม่มี
    ชุมชนมุขแสนเจริญ2.NotAlone.SumNotAlone, //มี
    ชุมชนมุขแสนเจริญ2.NotAlone.Child,
    ชุมชนมุขแสนเจริญ2.NotAlone.SonInLaw,
    ชุมชนมุขแสนเจริญ2.NotAlone.GrandChild,
    ชุมชนมุขแสนเจริญ2.NotAlone.Sibling,
    ชุมชนมุขแสนเจริญ2.NotAlone.Parent,
    ชุมชนมุขแสนเจริญ2.NotAlone.Partner,
    ชุมชนมุขแสนเจริญ2.NotAlone.Other,
    `${ชุมชนมุขแสนเจริญ2.PerAlone}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerAlone}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerGrandChild}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerSibling}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerParent}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerPartner}`,
    `${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนมุขแสนเจริญ2.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนเขาสามมุข",
    ชุมชนเขาสามมุข.Alone, //ไม่มี
    ชุมชนเขาสามมุข.NotAlone.SumNotAlone, //มี
    ชุมชนเขาสามมุข.NotAlone.Child,
    ชุมชนเขาสามมุข.NotAlone.SonInLaw,
    ชุมชนเขาสามมุข.NotAlone.GrandChild,
    ชุมชนเขาสามมุข.NotAlone.Sibling,
    ชุมชนเขาสามมุข.NotAlone.Parent,
    ชุมชนเขาสามมุข.NotAlone.Partner,
    ชุมชนเขาสามมุข.NotAlone.Other,
    `${ชุมชนเขาสามมุข.PerAlone}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerAlone}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerGrandChild}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerSibling}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerParent}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerPartner}`,
    `${ชุมชนเขาสามมุข.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนเขาสามมุข.PerNotAlone.PerOther}`
    ),
    createData(" ชุมชนบ้านแหลมแท่น",
    ชุมชนบ้านแหลมแท่น.Alone, //ไม่มี
    ชุมชนบ้านแหลมแท่น.NotAlone.SumNotAlone, //มี
    ชุมชนบ้านแหลมแท่น.NotAlone.Child,
    ชุมชนบ้านแหลมแท่น.NotAlone.SonInLaw,
    ชุมชนบ้านแหลมแท่น.NotAlone.GrandChild,
    ชุมชนบ้านแหลมแท่น.NotAlone.Sibling,
    ชุมชนบ้านแหลมแท่น.NotAlone.Parent,
    ชุมชนบ้านแหลมแท่น.NotAlone.Partner,
    ชุมชนบ้านแหลมแท่น.NotAlone.Other,
    `${ชุมชนบ้านแหลมแท่น.PerAlone}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerAlone}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSumNotAlone}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSumNotAlone}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSonInLaw}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSonInLaw}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerGrandChild}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerGrandChild}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSibling}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerSibling}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerParent}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerParent}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerPartner}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerPartner}`,
    `${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerOther}`==="NaN"? "0":`${ชุมชนบ้านแหลมแท่น.PerNotAlone.PerOther}`
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
        <div
          className="chart col-6 align-self-center"
          style={{ textAlign: "center" }}
        >
          {Summary === 0 ? (
            <h1>ไม่มีข้อมูล</h1>
          ) : (
            <Chart
              //   maxWidth={"400px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["", "จำนวน"],
                ["มีผู้ดูแล", Keeper],
                ["ไม่มีผู้ดูแล", noKeeper],
              ]}
            />
          )}
        </div>
        <div className="chart col-6">
          <Chart
            // width={"300px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            // data={[
            //   ["ความสัมพันธ์", "จำนวน"],
            //   ["บุตรชาย/บุตรสาว", 11],
            //   ["ลูกเขย/ลูกสะใภ้", 2],
            //   ["หลานชาย/หลานสาว", 2],
            //   ["พี่น้อง", 2],
            //   ["บิดา/มารดา", 7],
            //   ["สามี/ภรรยา", 7],
            //   ["บุคคลอื่น", 7],
            // ]}
            data={[
              [
                "",
                "บุตรชาย/บุตรสาว",
                "ลูกเขย/ลูกสะใภ้",
                "หลานชาย/หลานสาว",
                "พี่น้อง",
                "บิดา/มารดา",
                "สามี/ภรรยา",
                "บุคคลอื่น",
              ],
              [
                "ผู้สูงอายุที่มีผู้ดูแล",
                Child,
                SonInLaw,
                GrandChild,
                Sibling,
                Parent,
                Partner,
                Other,
              ],
            ]}
            options={{
              title: "ผู้สูงอายุที่มีผู้ดูแล",
            }}
          />
        </div>
      </div>*/}

      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
            <TableRow>
                  <StyledTableCell align="center" colSpan={5}>จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน</StyledTableCell>
                </TableRow>
              <TableRow>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">การมีผู้ดูแล</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">ชุมชน</StyledTableCell>
                <StyledTableCell align="center">ไม่มี</StyledTableCell>
                <StyledTableCell align="center">เปอร์เซ็นต์</StyledTableCell>
                <StyledTableCell align="center">มี</StyledTableCell>
                <StyledTableCell align="center">เปอร์เซ็นต์</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ชุมชน}>
                  <StyledTableCell  component="th" scope="row">{row.ชุมชน}</StyledTableCell>
                  <StyledTableCell align="center">{row.ไม่มีผู้ดูแล}</StyledTableCell>
                  <StyledTableCell align="center">{row.เปอร์เซ็นต์ไม่มีผู้ดูแล} %</StyledTableCell>
                  <StyledTableCell align="center">{row.มีผู้ดูแล}</StyledTableCell>
                  <StyledTableCell align="center">{row.เปอร์เซ็นต์มีผู้ดูแล} %</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* ----------------------------Next--------------- */}
      <div style={{marginTop:10}}>     
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
              
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell align="center">มีผู้ดูแล</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>               
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                
              </TableRow>
              <TableRow>
              <StyledTableCell align="center"><strong>ชุมชน</strong></StyledTableCell>
              <StyledTableCell align="center">จำนวน/เปอร์เซ็นต์</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">บุตรชาย/บุตรสาว</StyledTableCell>
                <StyledTableCell align="center">ลูกเขย/ลูกสะใภ้</StyledTableCell>
                <StyledTableCell align="center">หลานชาย/หลานสาว</StyledTableCell>
                <StyledTableCell align="center">พี่น้อง</StyledTableCell>
                <StyledTableCell align="center">บิดา/มารดา</StyledTableCell>
                <StyledTableCell align="center">สามี/ภรรยา</StyledTableCell>
                <StyledTableCell align="center">บุคคลอื่น</StyledTableCell> 
                <StyledTableCell align="center">&nbsp;</StyledTableCell>                             
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
                  <br />
                  เปอร์เซ็นต์</StyledTableCell>                 
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>  
                             
                  <StyledTableCell align="center">
                    {row.บุตรชายหรือบุตรสาว}
                    <br />
                    {row.เปอร์เซ็นต์บุตรชายหรือบุตรสาว} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ลูกเขยหรือลูกสะใภ้}
                    <br />
                    {row.เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.หลานชายหรือหลานสาว}
                    <br />
                    {row.เปอร์เซ็นต์หลานชายหรือหลานสาว} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.พี่น้อง}
                    <br />
                    {row.เปอร์เซ็นต์พี่น้อง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บิดาหรือมารดา}
                    <br />
                    {row.เปอร์เซ็นต์บิดาหรือมารดา} %
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    {row.สามีหรือภรรยา}
                    <br />
                    {row.เปอร์เซ็นต์สามีหรือภรรยา} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บุคคลอื่น}
                    <br />
                    {row.เปอร์เซ็นต์บุคคลอื่น} %
                  </StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
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

export default function Chart4() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน
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
