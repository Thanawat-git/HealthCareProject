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
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart5 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv";
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
  เปอร์เซ็นต์อยู่ลำพัง,
  อยู่ลำพังกลางวัน,
  เปอร์เซ็นต์อยู่ลำพังกลางวัน,
  อยู่ลำพังกลางวันกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
  อยู่ลำพังกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางคืน,
  ไม่ได้อยู่ลำพัง,
  เปอร์เซ็นต์ไม่ได้อยู่ลำพัง
) {
  return {
    ชุมชน,
    อยู่ลำพัง,
    เปอร์เซ็นต์อยู่ลำพัง,
    อยู่ลำพังกลางวัน,
    เปอร์เซ็นต์อยู่ลำพังกลางวัน,
    อยู่ลำพังกลางวันกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
    อยู่ลำพังกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางคืน,
    ไม่ได้อยู่ลำพัง,
    เปอร์เซ็นต์ไม่ได้อยู่ลำพัง,
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
  const communi = [
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
  ];
  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("communi.length ", communi.length);
    if (chart5Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart5Reducer.results)[i],
            communi[i].Alone.Sum,
            communi[i].Alone.PerSum === "NaN" ? "0" : communi[i].Alone.PerSum,
            communi[i].Alone.AloneDay,
            communi[i].Alone.PerAloneDay === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneDay,
            communi[i].Alone.AloneDayNight,
            communi[i].Alone.PerAloneDayNight === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneDayNight,
            communi[i].Alone.AloneNight,
            communi[i].Alone.PerAloneNight === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneNight,
            communi[i].NotAlone,
            communi[i].PerNotAlone === "NaN" ? "0" : communi[i].PerNotAlone
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart5Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);

  return (
    <React.Fragment>
      <div className="card-body">
      <div className="csv-link">
      <CSVLink
        data={rows}
        className="csv-link"
        filename={"จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่และชุมชน.csv"}
      >
        Download CSV
      </CSVLink>
      </div>
        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center" colSpan={8}>
                  จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่ และชุมชน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell >
                    <strong>ความเป็นอยู่</strong>
                  </StyledTableCell>
                  <StyledTableCell colSpan={6}>อยู่ลำพัง</StyledTableCell>
                  <StyledTableCell>ไม่ได้อยู่ลำพัง</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    <strong>ชุมชน</strong>
                  </StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">กลางวัน</StyledTableCell>
                  <StyledTableCell align="center">กลางคืน</StyledTableCell>
                  <StyledTableCell align="center">
                    ทั้งกลางวัน-กลางคืน
                  </StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">จำนวนรวม</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      จำนวน
                      <br />
                      เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.อยู่ลำพังกลางวัน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางวัน} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.อยู่ลำพังกลางคืน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางคืน} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.อยู่ลำพังกลางวันกลางคืน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.อยู่ลำพัง}
                    </StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ไม่ได้อยู่ลำพัง}
                      <br />
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
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            {" "}
            CH5 จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่ และชุมชน
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
