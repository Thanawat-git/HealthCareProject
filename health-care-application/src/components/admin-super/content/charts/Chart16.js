import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import { getDataChart14 } from "../../../../actions/charts.action";
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
  //   Select,
} from "@material-ui/core";
// import { Chart } from "react-google-charts";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";

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

function creactData(โรคประจำตัว, จำนวน, ร้อยละ) {
  return {
    โรคประจำตัว,
    จำนวน,
    ร้อยละ,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart16Reducer = useSelector(({ chart16Reducer }) => chart16Reducer);
  const [row, setRow] = React.useState([]);
  React.useEffect(() => {
    if (chart16Reducer.isFetching === false) {
      for (const key in chart16Reducer.results) {
        if (Object.hasOwnProperty.call(chart16Reducer.results, key)) {
          const element = chart16Reducer.results[key];
          console.log("element ",element)
          row.push(
            creactData(element.DisName, element.DisCount, element.DisPer)
          );
        }
      }
      console.log("row ", row);
      setOpen(row.length);
    }
  }, [chart16Reducer.isFetching]);

  return (
    <div className="card-body">
      <div className="csv-link">
        {open !== 0 && (
          <CSVLink
            data={row}
            filename={`จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัวที่สำรวจพบ.csv`}
          >
            Download CSV
          </CSVLink>
        )}
      </div>
      <div ref={ref} className="report-container">
        <h4>จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัว ที่สำรวจพบ</h4>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>โรคประจำตัว</StyledTableCell>
                <StyledTableCell align="">จำนวน</StyledTableCell>
                <StyledTableCell align="">ร้อยละ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{value.โรคประจำตัว}</StyledTableCell>
                    <StyledTableCell>{value.จำนวน}</StyledTableCell>
                    <StyledTableCell>{value.ร้อยละ}</StyledTableCell>
                  </StyledTableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart16() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัวที่สำรวจพบ
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
