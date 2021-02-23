import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
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
  Switch,
  FormControlLabel
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
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
  ช่วงอายุ,
  ปกติกลุ่ม1เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม1เพศชาย,
  ปกติกลุ่ม1เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม1เพศหญิง,
  ปกติกลุ่ม1รวม,
  เปอร์เซ็นต์ปกติกลุ่ม1รวม,

  ปกติกลุ่ม2เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม2เพศชาย,
  ปกติกลุ่ม2เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม2เพศหญิง,
  ปกติกลุ่ม2รวม,
  เปอร์เซ็นต์ปกติกลุ่ม2รวม,

  ปกติกลุ่ม3เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม3เพศชาย,
  ปกติกลุ่ม3เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม3เพศหญิง,
  ปกติกลุ่ม3รวม,
  เปอร์เซ็นต์ปกติกลุ่ม3รวม,

  ผิดปกติกลุ่ม1เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศชาย,
  ผิดปกติกลุ่ม1เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศหญิง,
  ผิดปกติกลุ่ม1รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1รวม,

  ผิดปกติกลุ่ม2เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศชาย,
  ผิดปกติกลุ่ม2เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศหญิง,
  ผิดปกติกลุ่ม2รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2รวม,

  ผิดปกติกลุ่ม3เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศชาย,
  ผิดปกติกลุ่ม3เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศหญิง,
  ผิดปกติกลุ่ม3รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3รวม
) {
  return {
    ช่วงอายุ,
    ปกติกลุ่ม1เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม1เพศชาย,
    ปกติกลุ่ม1เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม1เพศหญิง,
    ปกติกลุ่ม1รวม,
    เปอร์เซ็นต์ปกติกลุ่ม1รวม,

    ปกติกลุ่ม2เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม2เพศชาย,
    ปกติกลุ่ม2เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม2เพศหญิง,
    ปกติกลุ่ม2รวม,
    เปอร์เซ็นต์ปกติกลุ่ม2รวม,

    ปกติกลุ่ม3เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม3เพศชาย,
    ปกติกลุ่ม3เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม3เพศหญิง,
    ปกติกลุ่ม3รวม,
    เปอร์เซ็นต์ปกติกลุ่ม3รวม,

    ผิดปกติกลุ่ม1เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศชาย,
    ผิดปกติกลุ่ม1เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศหญิง,
    ผิดปกติกลุ่ม1รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1รวม,

    ผิดปกติกลุ่ม2เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศชาย,
    ผิดปกติกลุ่ม2เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศหญิง,
    ผิดปกติกลุ่ม2รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2รวม,

    ผิดปกติกลุ่ม3เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศชาย,
    ผิดปกติกลุ่ม3เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศหญิง,
    ผิดปกติกลุ่ม3รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart37Reducer = useSelector(({ chart37Reducer }) => chart37Reducer);
  const dispatch = useDispatch();
  const [per, setPer] = React.useState(false);
  const {
    a6064,
    a6569,
    a7074,
    a7579,
    a8084,
    a8589,
    a9094,
    a95,
  } = chart37Reducer.results;
  const ageRange = [a6064, a6569, a7074, a7579, a8084, a8589, a9094, a95];
  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("ageRange.length ", ageRange);
    if (chart37Reducer.isFetching === false) {
      for (let i = 0; i < ageRange.length; i++) {
        rows.push(
          createData(
            i < 7
              ? Object.keys(chart37Reducer.results)[i].substring(1, 3) +
                  "-" +
                  Object.keys(chart37Reducer.results)[i].substring(3)
              : Object.keys(chart37Reducer.results)[i].substring(1, 3) + "+",
            ageRange[i].NotRisk.g1.Male,
            ageRange[i].NotRisk.g1.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerMale+"%",
            ageRange[i].NotRisk.g1.Female,
            ageRange[i].NotRisk.g1.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerFemale+"%",
            ageRange[i].NotRisk.g1.Sum,
            ageRange[i].NotRisk.g1.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerSum+"%",

            ageRange[i].NotRisk.g2.Male,
            ageRange[i].NotRisk.g2.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerMale+"%",
            ageRange[i].NotRisk.g2.Female,
            ageRange[i].NotRisk.g2.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerFemale+"%",
            ageRange[i].NotRisk.g2.Sum,
            ageRange[i].NotRisk.g2.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerSum+"%",

            ageRange[i].NotRisk.g3.Male,
            ageRange[i].NotRisk.g3.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerMale+"%",
            ageRange[i].NotRisk.g3.Female,
            ageRange[i].NotRisk.g3.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerFemale+"%",
            ageRange[i].NotRisk.g3.Sum,
            ageRange[i].NotRisk.g3.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerSum+"%",

            //
            ageRange[i].Risk.g1.Male,
            ageRange[i].Risk.g1.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerMale+"%",
            ageRange[i].Risk.g1.Female,
            ageRange[i].Risk.g1.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerFemale+"%",
            ageRange[i].Risk.g1.Sum,
            ageRange[i].Risk.g1.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerSum+"%",

            ageRange[i].Risk.g2.Male,
            ageRange[i].Risk.g2.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerMale+"%",
            ageRange[i].Risk.g2.Female,
            ageRange[i].Risk.g2.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerFemale+"%",
            ageRange[i].Risk.g2.Sum,
            ageRange[i].Risk.g2.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerSum+"%",

            ageRange[i].Risk.g3.Male,
            ageRange[i].Risk.g3.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerMale+"%",
            ageRange[i].Risk.g3.Female,
            ageRange[i].Risk.g3.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerFemale+"%",
            ageRange[i].Risk.g3.Sum,
            ageRange[i].Risk.g3.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerSum+"%"
           )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart37Reducer.isFetching]);

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="row justify-content-between csv-link-select">
          <CSVLink
            data={rows}
            filename={
              "จำนวนและร้อยละของผู้สูงอายุที่มีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามเพศช่วงอายุและความสามารถในการประกอบกิจวัตรประจำวัน.csv"
            }
          >
            Download CSV
          </CSVLink>
          <FormControlLabel
        control={<Switch checked={per} onChange={()=>setPer(!per)} name="checkedA" />}
        label="แสดงแบบร้อยละ"
        />
        </div>

        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table
              className="table-report table-per-padding"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={8}>
                    จำนวน{per&&"ร้อยละ"}ของผู้สูงอายุที่มีความเสี่ยงของภาวะสมองเสื่อม จำแนกตามเพศ ช่วงอายุ และความสามารถในการประกอบกิจวัตรประจำวัน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="left" rowSpan={2}>
                    อายุ
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={4}>
                    ปกติ
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={3}>
                    ผิดปกติ
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม1</StyledTableCell>                 
                  <StyledTableCell align="center">กลุ่ม2</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม1</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2</StyledTableCell>
                  <StyledTableCell align="center" >กลุ่ม3</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { chart37Reducer.isFetching === false ?
                rows.map((row) => (
                  <StyledTableRow key={row.ช่วงอายุ}>
                    <StyledTableCell component="th" scope="row">
                      {row.ช่วงอายุ}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง
                      <br />
                      รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม1เพศชาย:row.ปกติกลุ่ม1เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม1เพศหญิง:row.ปกติกลุ่ม1เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม1รวม:row.ปกติกลุ่ม1รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม2เพศชาย:row.ปกติกลุ่ม2เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม2เพศหญิง:row.ปกติกลุ่ม2เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม2รวม:row.ปกติกลุ่ม2รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม3เพศชาย:row.ปกติกลุ่ม3เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม3เพศหญิง:row.ปกติกลุ่ม3เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ปกติกลุ่ม3รวม:row.ปกติกลุ่ม3รวม}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศชาย:row.ผิดปกติกลุ่ม1เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศหญิง:row.ผิดปกติกลุ่ม1เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม1รวม:row.ผิดปกติกลุ่ม1รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศชาย:row.ผิดปกติกลุ่ม2เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศหญิง:row.ผิดปกติกลุ่ม2เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม2รวม:row.ผิดปกติกลุ่ม2รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศชาย:row.ผิดปกติกลุ่ม3เพศชาย}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศหญิง:row.ผิดปกติกลุ่ม3เพศหญิง}
                      <br />
                      {per?row.เปอร์เซ็นต์ผิดปกติกลุ่ม3รวม:row.ผิดปกติกลุ่ม3รวม}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
                : <React.Fragment>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  </React.Fragment>
                }
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart37() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
          จำนวนและร้อยละของผู้สูงอายุที่มีความเสี่ยงของภาวะสมองเสื่อม จำแนกตามเพศ ช่วงอายุ และความสามารถในการประกอบกิจวัตรประจำวัน
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-plus"></i>
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
