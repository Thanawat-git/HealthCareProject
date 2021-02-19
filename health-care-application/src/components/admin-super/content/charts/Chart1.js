import React, { useEffect, useState } from "react";
import "./Chart.css";
import { useSelector } from "react-redux";
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
} from "@material-ui/core";
import { Chart } from "react-google-charts";
import { CSVLink } from "react-csv";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";

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
  อายุ,
  จำนวนเพศชาย,
  เปอร์เซ็นต์เพศชาย,
  จำนวนเพศหญิง,
  เปอร์เซ็นต์เพศหญิง,
  รวม
) {
  return {
    อายุ,
    จำนวนเพศชาย,
    เปอร์เซ็นต์เพศชาย,
    จำนวนเพศหญิง,
    เปอร์เซ็นต์เพศหญิง,
    รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const chart1Reducer = useSelector(({ chart1Reducer }) => chart1Reducer);
  const [open, setOpen] = React.useState(0);
  const {
    summary,
    g95,
    g6064,
    g6569,
    g7074,
    g7579,
    g8084,
    g8589,
    g9094,
  } = chart1Reducer.results;
  const listAge = [g6064, g6569, g7074, g7579, g8084, g8589, g9094, g95];
  const [row, setRow] = useState([]);
  React.useEffect(() => {
    console.log("listAge.length ", listAge.length);

    if (chart1Reducer.isFetching === false) {
      for (let i = 0; i < listAge.length; i++) {
        row.push(
          createData(
            i < 7
              ? Object.keys(chart1Reducer.results)[i].substring(1, 3) +
                  "-" +
                  Object.keys(chart1Reducer.results)[i].substring(3)
              : Object.keys(chart1Reducer.results)[i].substring(1, 3) + "+",
            listAge[i].ElderMale,
            listAge[i].ElderPerMale === "NaN" ? "0 " : listAge[i].ElderPerMale,
            listAge[i].ElderFemale,
            listAge[i].ElderPerFemale === "NaN"? "0 ": listAge[i].ElderPerFemale,
            listAge[i].Elder
          )
        );
      }
    }
    console.log("row ", row);
    console.log("row length ", row.length);
    setOpen(row.length);
  }, [chart1Reducer.isFetching]);


  return (
    <React.Fragment>
      <div className="card-body">
        <div className="csv-link">
          <CSVLink
            data={row}
            filename={"จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ.csv"}
          >
            Download CSV
          </CSVLink>
        </div>
        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={6}>
                    จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">ช่วงอายุ(ปี)</StyledTableCell>
                  <StyledTableCell align="center">จำนวนเพศชาย</StyledTableCell>
                  <StyledTableCell align="center">
                    จำนวนเพศหญิง{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ร้อยละเพศชาย{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ร้อยละเพศหญิง
                  </StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  {/* <StyledTableCell align="center">&nbsp;</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <StyledTableRow key={row.อายุ}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.อายุ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนเพศชาย}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนเพศหญิง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.เปอร์เซ็นต์เพศชาย} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.เปอร์เซ็นต์เพศหญิง} %
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.รวม}</StyledTableCell>
                    {/* <StyledTableCell align="center">&nbsp;</StyledTableCell> */}
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

export default function Chart1() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h2 className="card-title">
            จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ
          </h2>
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
