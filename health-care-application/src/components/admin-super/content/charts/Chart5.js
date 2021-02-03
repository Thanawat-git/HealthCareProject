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
import { withStyles} from "@material-ui/core/styles";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart5 } from "../../../../actions/charts.action";


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
function createData(name,alone, aloneDay, aloneDaynight,alonenight, PeraloneDay, PeraloneDaynight,Peralonenight,notalone) {
  return {name,alone, aloneDay, aloneDaynight,alonenight, PeraloneDay, PeraloneDaynight,Peralonenight, notalone};
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart5Reducer = useSelector(({ chart5Reducer }) => chart5Reducer);
  const dispatch = useDispatch();
  const {
    Alone,
    AloneDay,
    AloneDayNight,
    AloneNight,
    NotAlone,
    PerAloneDay,
    PerAloneDayNight,
    PerAloneNight,
    Summary,
  } = chart5Reducer.results;
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart5(e.target.value));
  };

  const rows = [
    createData("ชุมชน",Alone,AloneDay,AloneDayNight,AloneNight,`${PerAloneDay}%`,`${PerAloneDayNight}%`,`${PerAloneNight}%`,NotAlone),
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
      <div>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >ชุมชน&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >อยู่ลำพัง&nbsp;</StyledTableCell>
                <StyledTableCell>&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >ไม่ได้อยู่ลำพัง</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>            
                <StyledTableCell ></StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell >กลางวัน</StyledTableCell>
                <StyledTableCell >กลางคืน</StyledTableCell>
                <StyledTableCell >ทั้งกลางวัน-กลางคืน</StyledTableCell>
                <StyledTableCell >&nbsp;</StyledTableCell>
                <StyledTableCell ></StyledTableCell>
                <StyledTableCell ></StyledTableCell>
                <StyledTableCell ></StyledTableCell>
                <StyledTableCell ></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Age}>
                  <StyledTableCell align="center" component="th" scope="row">ชุมชนมณีแก้ว</StyledTableCell>
                  <StyledTableCell >&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">{row.aloneDay}&nbsp;({row.PeraloneDay  ==="NaN%"? "0 %" : row.PeraloneDay})</StyledTableCell>
                  <StyledTableCell align="center">{row.aloneDaynight}&nbsp;({row.PeraloneDaynight ==="NaN%"? "0 %" : row.PeraloneDaynight})</StyledTableCell>
                  <StyledTableCell align="center">{row.alonenight}&nbsp;({row.Peralonenight ==="NaN%"? "0 %" : row.Peralonenight})</StyledTableCell>
                  <StyledTableCell >&nbsp;</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">{row.notalone}&nbsp;(0 %)</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
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
