import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { getDataChart3 } from "../../../../actions/charts.action";
import { useDispatch, useSelector } from "react-redux";
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
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";

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

function createData(name,ElderMale, ElderFemale, sumElder,SurveyMale, SurveyFemale, sumSurvey,PerSurvey) {
  return {name,ElderMale, ElderFemale, sumElder,SurveyMale, SurveyFemale, sumSurvey ,PerSurvey};
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart3Reducer = useSelector(({ chart3Reducer }) => chart3Reducer);
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
  } = chart3Reducer.results;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart3(e.target.value));
  };
  const rows = [
    createData("ชุมชนมณีแก้ว",ชุมชนมณีแก้ว.ElderMale,ชุมชนมณีแก้ว.ElderFemale, ชุมชนมณีแก้ว.Elder,ชุมชนมณีแก้ว.ElderSurveyMale,ชุมชนมณีแก้ว.ElderSurveyFemale,ชุมชนมณีแก้ว.ElderSurvey,ชุมชนมณีแก้ว.PerElderSurvey),
    createData("ชุมชนดอนบน",ชุมชนดอนบน.ElderMale,ชุมชนดอนบน.ElderFemale, ชุมชนดอนบน.Elder,ชุมชนดอนบน.ElderSurveyMale,ชุมชนดอนบน.ElderSurveyFemale,ชุมชนดอนบน.ElderSurvey,ชุมชนดอนบน.PerElderSurvey),
    createData("ชุมชนบางแสนทาวเวอร์",ชุมชนบางแสนทาวเวอร์.ElderMale,ชุมชนบางแสนทาวเวอร์.ElderFemale, ชุมชนบางแสนทาวเวอร์.Elder,ชุมชนบางแสนทาวเวอร์.ElderSurveyMale,ชุมชนบางแสนทาวเวอร์.ElderSurveyFemale,ชุมชนบางแสนทาวเวอร์.ElderSurvey,ชุมชนบางแสนทาวเวอร์.PerElderSurvey),
    createData("ชุมชนตาลล้อม1",ชุมชนตาลล้อม1.ElderMale,ชุมชนตาลล้อม1.ElderFemale, ชุมชนตาลล้อม1.Elder,ชุมชนตาลล้อม1.ElderSurveyMale,ชุมชนตาลล้อม1.ElderSurveyFemale,ชุมชนตาลล้อม1.ElderSurvey,ชุมชนตาลล้อม1.PerElderSurvey),
    createData("ชุมชนตาลล้อม2",ชุมชนตาลล้อม2.ElderMale,ชุมชนตาลล้อม2.ElderFemale, ชุมชนตาลล้อม2.Elder,ชุมชนตาลล้อม2.ElderSurveyMale,ชุมชนตาลล้อม2.ElderSurveyFemale,ชุมชนตาลล้อม2.ElderSurvey,ชุมชนตาลล้อม2.PerElderSurvey),
    createData("ชุมชนบ้านเหมือง",ชุมชนบ้านเหมือง.ElderMale,ชุมชนบ้านเหมือง.ElderFemale, ชุมชนบ้านเหมือง.Elder,ชุมชนบ้านเหมือง.ElderSurveyMale,ชุมชนบ้านเหมือง.ElderSurveyFemale,ชุมชนบ้านเหมือง.ElderSurvey,ชุมชนบ้านเหมือง.PerElderSurvey),
    createData("ชุมชนพัฒนา2",ชุมชนพัฒนา2.ElderMale,ชุมชนพัฒนา2.ElderFemale, ชุมชนพัฒนา2.Elder,ชุมชนพัฒนา2.ElderSurveyMale,ชุมชนพัฒนา2.ElderSurveyFemale,ชุมชนพัฒนา2.ElderSurvey,ชุมชนพัฒนา2.PerElderSurvey),
    createData("ชุมชนดอนนารา",ชุมชนดอนนารา.ElderMale,ชุมชนดอนนารา.ElderFemale, ชุมชนดอนนารา.Elder,ชุมชนดอนนารา.ElderSurveyMale,ชุมชนดอนนารา.ElderSurveyFemale,ชุมชนดอนนารา.ElderSurvey,ชุมชนดอนนารา.PerElderSurvey),
    createData("ชุมชนวัดกลางดอน",ชุมชนวัดกลางดอน.ElderMale,ชุมชนวัดกลางดอน.ElderFemale, ชุมชนวัดกลางดอน.Elder,ชุมชนวัดกลางดอน.ElderSurveyMale,ชุมชนวัดกลางดอน.ElderSurveyFemale,ชุมชนวัดกลางดอน.ElderSurvey,ชุมชนวัดกลางดอน.PerElderSurvey),
    createData("ชุมชนวัดกลางดอน",ชุมชนวัดกลางดอน.ElderMale,ชุมชนวัดกลางดอน.ElderFemale, ชุมชนวัดกลางดอน.Elder,ชุมชนวัดกลางดอน.ElderSurveyMale,ชุมชนวัดกลางดอน.ElderSurveyFemale,ชุมชนวัดกลางดอน.ElderSurvey,ชุมชนวัดกลางดอน.PerElderSurvey),
    createData("ชุมชนแสนสุข",ชุมชนแสนสุข.ElderMale,ชุมชนแสนสุข.ElderFemale, ชุมชนแสนสุข.Elder,ชุมชนแสนสุข.ElderSurveyMale,ชุมชนแสนสุข.ElderSurveyFemale,ชุมชนแสนสุข.ElderSurvey,ชุมชนแสนสุข.PerElderSurvey),
    createData("ชุมชนมาบมะยม",ชุมชนมาบมะยม.ElderMale,ชุมชนมาบมะยม.ElderFemale, ชุมชนมาบมะยม.Elder,ชุมชนมาบมะยม.ElderSurveyMale,ชุมชนมาบมะยม.ElderSurveyFemale,ชุมชนมาบมะยม.ElderSurvey,ชุมชนมาบมะยม.PerElderSurvey),
    createData("ชุมชนท้ายตลาด",ชุมชนท้ายตลาด.ElderMale,ชุมชนท้ายตลาด.ElderFemale, ชุมชนท้ายตลาด.Elder,ชุมชนท้ายตลาด.ElderSurveyMale,ชุมชนท้ายตลาด.ElderSurveyFemale,ชุมชนท้ายตลาด.ElderSurvey,ชุมชนท้ายตลาด.PerElderSurvey),
    createData("ชุมชนร่วมใจพัฒนา",ชุมชนร่วมใจพัฒนา.ElderMale,ชุมชนร่วมใจพัฒนา.ElderFemale, ชุมชนร่วมใจพัฒนา.Elder,ชุมชนร่วมใจพัฒนา.ElderSurveyMale,ชุมชนร่วมใจพัฒนา.ElderSurveyFemale,ชุมชนร่วมใจพัฒนา.ElderSurvey,ชุมชนร่วมใจพัฒนา.PerElderSurvey),
    createData("ชุมชนบางแสนบน",ชุมชนบางแสนบน.ElderMale,ชุมชนบางแสนบน.ElderFemale, ชุมชนบางแสนบน.Elder,ชุมชนบางแสนบน.ElderSurveyMale,ชุมชนบางแสนบน.ElderSurveyFemale,ชุมชนบางแสนบน.ElderSurvey,ชุมชนบางแสนบน.PerElderSurvey),
    createData("ชุมชนหาดวอนนภา",ชุมชนหาดวอนนภา.ElderMale,ชุมชนหาดวอนนภา.ElderFemale, ชุมชนหาดวอนนภา.Elder,ชุมชนหาดวอนนภา.ElderSurveyMale,ชุมชนหาดวอนนภา.ElderSurveyFemale,ชุมชนหาดวอนนภา.ElderSurvey,ชุมชนหาดวอนนภา.PerElderSurvey),
    createData("ชุมชนบางเป้ง",ชุมชนบางเป้ง.ElderMale,ชุมชนบางเป้ง.ElderFemale, ชุมชนบางเป้ง.Elder,ชุมชนบางเป้ง.ElderSurveyMale,ชุมชนบางเป้ง.ElderSurveyFemale,ชุมชนบางเป้ง.ElderSurvey,ชุมชนบางเป้ง.PerElderSurvey),
    createData("ชุมชนหน้ามอ",ชุมชนหน้ามอ.ElderMale,ชุมชนหน้ามอ.ElderFemale, ชุมชนหน้ามอ.Elder,ชุมชนหน้ามอ.ElderSurveyMale,ชุมชนหน้ามอ.ElderSurveyFemale,ชุมชนหน้ามอ.ElderSurvey,ชุมชนหน้ามอ.PerElderSurvey),
    createData("ชุมชนโชคดี",ชุมชนโชคดี.ElderMale,ชุมชนโชคดี.ElderFemale, ชุมชนโชคดี.Elder,ชุมชนโชคดี.ElderSurveyMale,ชุมชนโชคดี.ElderSurveyFemale,ชุมชนโชคดี.ElderSurvey,ชุมชนโชคดี.PerElderSurvey),
    createData("ชุมชนสมใจนึก",ชุมชนสมใจนึก.ElderMale,ชุมชนสมใจนึก.ElderFemale, ชุมชนสมใจนึก.Elder,ชุมชนสมใจนึก.ElderSurveyMale,ชุมชนสมใจนึก.ElderSurveyFemale,ชุมชนสมใจนึก.ElderSurvey,ชุมชนสมใจนึก.PerElderSurvey),
    createData("ชุมชนหน้าเทศบาล",ชุมชนหน้าเทศบาล.ElderMale,ชุมชนหน้าเทศบาล.ElderFemale, ชุมชนหน้าเทศบาล.Elder,ชุมชนหน้าเทศบาล.ElderSurveyMale,ชุมชนหน้าเทศบาล.ElderSurveyFemale,ชุมชนหน้าเทศบาล.ElderSurvey,ชุมชนหน้าเทศบาล.PerElderSurvey),
    createData("ชุมชนวัดแสนสุข",ชุมชนวัดแสนสุข.ElderMale,ชุมชนวัดแสนสุข.ElderFemale, ชุมชนวัดแสนสุข.Elder,ชุมชนวัดแสนสุข.ElderSurveyMale,ชุมชนวัดแสนสุข.ElderSurveyFemale,ชุมชนวัดแสนสุข.ElderSurvey,ชุมชนวัดแสนสุข.PerElderSurvey),
    createData("ชุมชนมุขแสนเจริญ1",ชุมชนมุขแสนเจริญ1.ElderMale,ชุมชนมุขแสนเจริญ1.ElderFemale, ชุมชนมุขแสนเจริญ1.Elder,ชุมชนมุขแสนเจริญ1.ElderSurveyMale,ชุมชนมุขแสนเจริญ1.ElderSurveyFemale,ชุมชนมุขแสนเจริญ1.ElderSurvey,ชุมชนมุขแสนเจริญ1.PerElderSurvey),
    createData("ชุมชนมุขแสนเจริญ2",ชุมชนมุขแสนเจริญ2.ElderMale,ชุมชนมุขแสนเจริญ2.ElderFemale, ชุมชนมุขแสนเจริญ2.Elder,ชุมชนมุขแสนเจริญ2.ElderSurveyMale,ชุมชนมุขแสนเจริญ2.ElderSurveyFemale,ชุมชนมุขแสนเจริญ2.ElderSurvey,ชุมชนมุขแสนเจริญ2.PerElderSurvey),
    createData("ชุมชนเขาสามมุข",ชุมชนเขาสามมุข.ElderMale,ชุมชนเขาสามมุข.ElderFemale, ชุมชนเขาสามมุข.Elder,ชุมชนเขาสามมุข.ElderSurveyMale,ชุมชนเขาสามมุข.ElderSurveyFemale,ชุมชนเขาสามมุข.ElderSurvey,ชุมชนเขาสามมุข.PerElderSurvey),
    createData("ชุมชนบ้านแหลมแท่น",ชุมชนบ้านแหลมแท่น.ElderMale,ชุมชนบ้านแหลมแท่น.ElderFemale, ชุมชนบ้านแหลมแท่น.Elder,ชุมชนบ้านแหลมแท่น.ElderSurveyMale,ชุมชนบ้านแหลมแท่น.ElderSurveyFemale,ชุมชนบ้านแหลมแท่น.ElderSurvey,ชุมชนบ้านแหลมแท่น.PerElderSurvey),
  ];

  return (
    <div className="card-body" ref={ref}>
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
      {/* <div className="chart">
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "",
              `ชาย ${ElderMale} คน`,
              `หญิง ${ElderFemale} คน`,
              `รวม ${Elder} คน`,
            ],
            [
              `ผู้สูงอายุทั้งหมด ${Elder} คน\nชาย ${PerElderMale}%\nหญิง ${PerElderFemale}%`,
              ElderMale,
              ElderFemale,
              Elder,
            ],
            [
              `ผู้สูงอายุที่สำรวจได้ ${ElderSurvey} คน\nชาย ${PerElderSurveyMale}%\nหญิง ${PerElderSurveyFemale}%`,
              ElderSurveyMale,
              ElderSurveyFemale,
              ElderSurvey,
            ],
          ]}
          options={{
            // Material design options
            chart: {
              title: `จำนวนประชากรผู้สูงอายุ ทั้งหมดใน ${community} จำนวน ${Elder} คน`,
              subtitle: "จำแนกตามเพศ และจำนวนที่สำรวจได้",
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
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >ประชากรผู้สูงอายุ&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >จำนวนที่สำรวจได้</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>            
                <StyledTableCell >ร้อยละที่สำรวจได้</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                 
                
              </TableRow>
              <TableRow>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >ชาย</StyledTableCell>
                <StyledTableCell >หญิง</StyledTableCell>
                <StyledTableCell >รวม</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >ชาย</StyledTableCell>
                <StyledTableCell >หญิง</StyledTableCell>
                <StyledTableCell >รวม</StyledTableCell>
                <StyledTableCell >(%)</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell align="center" component="th" scope="row">{row.name}</StyledTableCell>
                  <StyledTableCell >&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">{row.ElderMale}</StyledTableCell>
                  <StyledTableCell align="center">{row.ElderFemale}</StyledTableCell>
                  <StyledTableCell align="center">{row.sumElder}</StyledTableCell>
                  <StyledTableCell >&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">{row.SurveyMale}</StyledTableCell>
                  <StyledTableCell align="center">{row.SurveyFemale}</StyledTableCell>
                  <StyledTableCell align="center">{row.sumSurvey}</StyledTableCell>
                  <StyledTableCell align="center">{row.PerSurvey ==="NaN"? "0" : row.PerSurvey} %</StyledTableCell>
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

export default function Chart3() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนประชากรผู้สูงอายุจำแนกตามเพศ และจำนวนที่สำรวจได้
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
                onClick={handlePrint}
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
