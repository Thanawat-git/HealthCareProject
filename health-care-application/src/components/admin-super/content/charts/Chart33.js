import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
  Checkbox,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart33 } from "../../../../actions/charts.action";

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

function creactData(
  เพศ,
  กลุ่ม1เพศชาย,
  เปอร์เซ็นต์กลุ่ม1เพศชาย,
  กลุ่ม2เพศชาย,
  เปอร์เซ็นตกลุ่ม2เพศชาย,
  กลุ่ม3เพศชาย,
  เปอร์เซ็นต์กลุ่ม3เพศชาย,
  รวมเพศชาย,
  เปอร์เซ็นต์รวมเพศชาย,
  กลุ่ม1เพศหญิง,
  เปอร์เซ็นต์กลุ่ม1เพศหญิง,
  กลุ่ม2เพศหญิง,
  เปอร์เซ็นตกลุ่ม2เพศหญิง,
  กลุ่ม3เพศหญิง,
  เปอร์เซ็นต์กลุ่ม3เพศหญิง,
  รวมเพศหญิง,
  เปอร์เซ็นต์รวมเพศหญิง,
  กลุ่ม1รวมทั้งหมด,
  เปอร์เซ็นต์กลุ่ม1รวมทั้งหมด,
  กลุ่ม2รวมทั้งหมด,
  เปอร์เซ็นตกลุ่ม2รวมทั้งหมด,
  กลุ่ม3รวมทั้งหมด,
  เปอร์เซ็นต์กลุ่ม3รวมทั้งหมด,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมด
) {
  return {
    เพศ,
    กลุ่ม1เพศชาย,
    เปอร์เซ็นต์กลุ่ม1เพศชาย,
    กลุ่ม2เพศชาย,
    เปอร์เซ็นตกลุ่ม2เพศชาย,
    กลุ่ม3เพศชาย,
    เปอร์เซ็นต์กลุ่ม3เพศชาย,
    รวมเพศชาย,
    เปอร์เซ็นต์รวมเพศชาย,
    กลุ่ม1เพศหญิง,
    เปอร์เซ็นต์กลุ่ม1เพศหญิง,
    กลุ่ม2เพศหญิง,
    เปอร์เซ็นตกลุ่ม2เพศหญิง,
    กลุ่ม3เพศหญิง,
    เปอร์เซ็นต์กลุ่ม3เพศหญิง,
    รวมเพศหญิง,
    เปอร์เซ็นต์รวมเพศหญิง,
    กลุ่ม1รวมทั้งหมด,
    เปอร์เซ็นต์กลุ่ม1รวมทั้งหมด,
    กลุ่ม2รวมทั้งหมด,
    เปอร์เซ็นตกลุ่ม2รวมทั้งหมด,
    กลุ่ม3รวมทั้งหมด,
    เปอร์เซ็นต์กลุ่ม3รวมทั้งหมด,
    รวมทั้งหมด,
    เปอร์เซ็นต์รวมทั้งหมด,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const chart33Reducer = useSelector(({ chart33Reducer }) => chart33Reducer);
  const [row, setRow] = React.useState([]);
  const dispatch = useDispatch();
  const { Male, Female, Summary } = chart33Reducer.results;

  const listGender = [Male, Female, Summary];
  const ageRange = [6064, 6569, 7074, 7579, 8084, 8589, 9094, 95];
  React.useEffect(() => {
    for (const key in chart33Reducer.results) {
//      if (Object.hasOwnProperty.call(chart33Reducer.results, key)) {
          const element = chart33Reducer.results[key];
          console.log(element)
//          }
    }
//     if (chart33Reducer.isFetching === false) {
//       for (let i = 0; i < listGender.length; i++) {
//         row.push(
//           creactData(
//             Object.keys(chart33Reducer.results)[i],
//             chart33Reducer.results[i].Male.a6064.G1,
//             listGender.a6064.G1Per === "NaN"
//               ? "0%"
//               : listGender.a6064.G1Per + "%",
//             listGender.a6064.G2,
//             listGender.a6064.G2Per === "NaN"
//               ? "0%"
//               : listGender.a6064.G2Per + "%",
//             listGender.a6064.G3,
//             listGender.a6064.G3Per === "NaN"
//               ? "0%"
//               : listGender.a6064.G3Per + "%",
//             listGender.a6064.Sum,
//             listGender.a6064.SumPer === "NaN"
//               ? "0%"
//               : listGender.a6064.SumPer + "%",

//             listGender.a6569.G1,
//             listGender.a6569.G1Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G1Per + "%",
//             listGender.a6569.G2,
//             listGender.a6569.G2Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G2Per + "%",
//             listGender.a6569.G3,
//             listGender.a6569.G3Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G3Per + "%",
//             listGender.a6569.Sum,
//             listGender.a6569.SumPer === "NaN"
//               ? "0%"
//               : listGender.a6569.SumPer + "%",
//             listGender.a6569.G1,
//             listGender.a6569.G1Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G1Per + "%",
//             listGender.a6569.G2,
//             listGender.a6569.G2Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G2Per + "%",
//             listGender.a6569.G3,
//             listGender.a6569.G3Per === "NaN"
//               ? "0%"
//               : listGender.a6569.G3Per + "%",
//             listGender.a6569.Sum,
//             listGender.a6569.SumPer === "NaN"
//               ? "0%"
//               : listGender.a6569.SumPer + "%",

//             listGender.a7074.G1,
//             listGender.a7074.G1Per === "NaN"
//               ? "0%"
//               : listGender.a7074.G1Per + "%",
//             listGender.a7074.G2,
//             listGender.a7074.G2Per === "NaN"
//               ? "0%"
//               : listGender.a7074.G2Per + "%",
//             listGender.a7074.G3,
//             listGender.a7074.G3Per === "NaN"
//               ? "0%"
//               : listGender.a7074.G3Per + "%",
//             listGender.a7074.Sum,
//             listGender.a7074.SumPer === "NaN"
//               ? "0%"
//               : listGender.a7074.SumPer + "%",

//             listGender.a7579.G1,
//             listGender.a7579.G1Per === "NaN"
//               ? "0%"
//               : listGender.a7579.G1Per + "%",
//             listGender.a7579.G2,
//             listGender.a7579.G2Per === "NaN"
//               ? "0%"
//               : listGender.a7579.G2Per + "%",
//             listGender.a7579.G3,
//             listGender.a7579.G3Per === "NaN"
//               ? "0%"
//               : listGender.a7579.G3Per + "%",
//             listGender.a7579.Sum,
//             listGender.a7579.SumPer === "NaN"
//               ? "0%"
//               : listGender.a7579.SumPer + "%",

//             listGender.a8084.G1,
//             listGender.a8084.G1Per === "NaN"
//               ? "0%"
//               : listGender.a8084.G1Per + "%",
//             listGender.a8084.G2,
//             listGender.a8084.G2Per === "NaN"
//               ? "0%"
//               : listGender.a8084.G2Per + "%",
//             listGender.a8084.G3,
//             listGender.a8084.G3Per === "NaN"
//               ? "0%"
//               : listGender.a8084.G3Per + "%",
//             listGender.a8084.Sum,
//             listGender.a8084.SumPer === "NaN"
//               ? "0%"
//               : listGender.a8084.SumPer + "%",

//             listGender.a8589.G1,
//             listGender.a8589.G1Per === "NaN"
//               ? "0%"
//               : listGender.a8589.G1Per + "%",
//             listGender.a8589.G2,
//             listGender.a8589.G2Per === "NaN"
//               ? "0%"
//               : listGender.a8589.G2Per + "%",
//             listGender.a8589.G3,
//             listGender.a8589.G3Per === "NaN"
//               ? "0%"
//               : listGender.a8589.G3Per + "%",
//             listGender.a8589.Sum,
//             listGender.a8589.SumPer === "NaN"
//               ? "0%"
//               : listGender.a8589.SumPer + "%",

//             listGender.a9094.G1,
//             listGender.a9094.G1Per === "NaN"
//               ? "0%"
//               : listGender.a9094.G1Per + "%",
//             listGender.a9094.G2,
//             listGender.a9094.G2Per === "NaN"
//               ? "0%"
//               : listGender.a9094.G2Per + "%",
//             listGender.a9094.G3,
//             listGender.a9094.G3Per === "NaN"
//               ? "0%"
//               : listGender.a9094.G3Per + "%",
//             listGender.a9094.Sum,
//             listGender.a9094.SumPer === "NaN"
//               ? "0%"
//               : listGender.a9094.SumPer + "%",

//             listGender.a95.G1,
//             listGender.a95.G1Per === "NaN" ? "0%" : listGender.a95.G1Per + "%",
//             listGender.a95.G2,
//             listGender.a95.G2Per === "NaN" ? "0%" : listGender.a95.G2Per + "%",
//             listGender.a95.G3,
//             listGender.a95.G3Per === "NaN" ? "0%" : listGender.a95.G3Per + "%",
//             listGender.a95.Sum,
//             listGender.a95.SumPer === "NaN" ? "0%" : listGender.a95.SumPer + "%"
//           )
//         );
//      }
//     }
    console.log("row ", row);
    setOpen1(row.length);
  }, [chart33Reducer.isFetching]);
  React.useEffect(() => {
                    setRow([]);
                  }, [community]);
                  const handleChange = (e) => {
                    setCommunity(e.target.value);
                    dispatch(getDataChart33(e.target.value));
                  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและชุมชนของผู้สูงอายุที่มีความเสี่ยงความดันโลหิตสูงจำแนกตามชุมชนของ${community}.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
        <div className="">
          เลือกชุมชน &emsp;
          <Select
            native
            open={open}
            onClose={() => false}
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
      </div>

      <div ref={ref} className="report-container">
        <h4>
          จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามชุมชน
        </h4>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow><StyledTableCell align="center" colSpan={13}> จำนวนและร้อยละของผู้สูงอายุแจกแจงตามช่วงอายุ เพศ
          และระดับดัชนีมวลกายของ{community} </StyledTableCell></TableRow>
              <TableRow>
                <StyledTableCell>ช่วงอายุ (ปี)</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="right">ผอม</StyledTableCell>
                <StyledTableCell align="left">%</StyledTableCell>
                <StyledTableCell align="right">ปกติ</StyledTableCell>
                <StyledTableCell align="left">%</StyledTableCell>
                <StyledTableCell align="right">ท้วม</StyledTableCell>
                <StyledTableCell align="left">%</StyledTableCell>
                <StyledTableCell align="right">อ้วน</StyledTableCell>
                <StyledTableCell align="left">%</StyledTableCell>
                <StyledTableCell align="right">อ้วนมาก</StyledTableCell>
                <StyledTableCell align="left">%</StyledTableCell>
                <StyledTableCell align="right">รวม</StyledTableCell>
                {/* <StyledTableCell align="right">%</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {chart33Reducer.isFetching === null ?
              row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{value.ageRange}</StyledTableCell>
                    <StyledTableCell>
                      ชาย <br /> หญิง <br /> รวม
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {Male.a6064.G1}
                      <br />
                      {value.หญิงผอม}
                      <br />
                      {value.รวมผอม}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {value.เปอร์เซ็นต์ชายผอม}
                      <br />
                      {value.เปอร์เซ็นต์หญิงผอม}
                      <br />
                      {value.เปอร์เซ็นต์รวมผอม}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {value.ชายปกติ}
                      <br />
                      {value.หญิงปกติ}
                      <br />
                      {value.รวมปกติ}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {value.เปอร์เซ็นต์ชายปกติ}
                      <br />
                      {value.เปอร์เซ็นต์หญิงปกติ}
                      <br />
                      {value.เปอร์เซ็นต์รวมปกติ}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {value.ชายท้วม}
                      <br />
                      {value.หญิงท้วม}
                      <br />
                      {value.รวมท้วม}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {value.เปอร์เซ็นต์ชายท้วม}
                      <br />
                      {value.เปอร์เซ็นต์หญิงท้วม}
                      <br />
                      {value.เปอร์เซ็นต์รวมท้วม}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {value.ชายอ้วน}
                      <br />
                      {value.หญิงอ้วน}
                      <br />
                      {value.รวมอ้วน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {value.เปอร์เซ็นต์ชายอ้วน}
                      <br />
                      {value.เปอร์เซ็นต์หญิงอ้วน}
                      <br />
                      {value.เปอร์เซ็นต์รวมอ้วน}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {value.ชายอ้วนมาก}
                      <br />
                      {value.หญิงอ้วนมาก}
                      <br />
                      {value.รวมอ้วนมาก}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {value.เปอร์เซ็นต์ชายอ้วนมาก}
                      <br />
                      {value.เปอร์เซ็นต์หญิงอ้วนมาก}
                      <br />
                      {value.เปอร์เซ็นต์รวมอ้วนมาก}
                    </StyledTableCell>
                    <StyledTableCell align="right">{value.รวม}</StyledTableCell>
                  </StyledTableRow>
                );
              })
              : <React.Fragment>
              <StyledTableRow><StyledTableCell colSpan={13}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={13}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={13}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={13}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={13}> <Skeleton/> </StyledTableCell></StyledTableRow>
              </React.Fragment>
              }
            </TableBody>
          </Table>
        </TableContainer>
      
      </div>
    </div>
  );
});

export default function Chart33() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            CH33 จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัวที่สำรวจพบ
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
