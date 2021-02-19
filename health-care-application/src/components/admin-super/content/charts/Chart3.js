import React, { useEffect, useState } from "react";
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
      padding: 0,
    },
  },
}))(TableRow);

function createData(
  ชุมชน,
  จำนวนผู้ชาย,
  จำนวนผู้หญิง,
  รวมประชากรผู้สูงอายุ,
  จำนวนที่สำรวจผู้ชาย,
  จำนวนที่สำรวจผู้หญิง,
  รวมจำนวนที่สำรวจได้,
  เปอร์เซ็นต์ที่สำรวจได้
) {
  return {
    ชุมชน,
    จำนวนผู้ชาย,
    จำนวนผู้หญิง,
    รวมประชากรผู้สูงอายุ,
    จำนวนที่สำรวจผู้ชาย,
    จำนวนที่สำรวจผู้หญิง,
    รวมจำนวนที่สำรวจได้,
    เปอร์เซ็นต์ที่สำรวจได้,
  };
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
    if (chart3Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart3Reducer.results)[i],
            communi[i].ElderMale,
            communi[i].ElderFemale,
            communi[i].Elder,
            communi[i].ElderSurveyMale,
            communi[i].ElderSurveyFemale,
            communi[i].ElderSurvey,
            communi[i].PerElderSurvey === "NaN"
              ? "0"
              : communi[i].PerElderSurvey
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart3Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="csv-link">
          <CSVLink
            data={rows}
            filename={
              "จำนวนประชากรผู้สูงอายุจำแนกตามเพศและจำนวนที่สำรวจได้.csv"
            }
          >
            Download CSV
          </CSVLink>
        </div>

        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={11}>
                    จำนวนประชากรผู้สูงอายุจำแนกตามเพศ และจำนวนที่สำรวจได้
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell colSpan={3}>ชุมชน&nbsp;</StyledTableCell>
                  <StyledTableCell>ประชากรผู้สูงอายุ&nbsp;</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>จำนวนที่สำรวจได้</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>ร้อยละที่สำรวจได้</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>ชาย</StyledTableCell>
                  <StyledTableCell>หญิง</StyledTableCell>
                  <StyledTableCell>รวม</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell>ชาย</StyledTableCell>
                  <StyledTableCell>หญิง</StyledTableCell>
                  <StyledTableCell>รวม</StyledTableCell>
                  <StyledTableCell>(%)</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนผู้ชาย}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนผู้หญิง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวมประชากรผู้สูงอายุ}
                    </StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนที่สำรวจผู้ชาย}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนที่สำรวจผู้หญิง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวมจำนวนที่สำรวจได้}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.เปอร์เซ็นต์ที่สำรวจได้} %
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

export default function Chart3() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
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
