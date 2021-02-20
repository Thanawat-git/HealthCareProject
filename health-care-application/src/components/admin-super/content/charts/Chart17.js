import React from "react";
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
} from "@material-ui/core";
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

function creactData(
  โรคประจำตัว,
  ช่วงอายุ6064,
  เปอร์เซ็นต์ช่วงอายุ6064,
  ช่วงอายุ6569,
  เปอร์เซ็นต์ช่วงอายุ6569,
  ช่วงอายุ7074,
  เปอร์เซ็นต์ช่วงอายุ7074,
  ช่วงอายุ7579,
  เปอร์เซ็นต์ช่วงอายุ7579,
  ช่วงอายุ8084,
  เปอร์เซ็นต์ช่วงอายุ8084,
  ช่วงอายุ8590,
  เปอร์เซ็นต์ช่วงอายุ8589,
  ช่วงอายุ9094,
  เปอร์เซ็นต์ช่วงอายุ9094,
  ช่วงอายุ95ขึ้นไป,
  เปอร์เซ็นต์ช่วงอายุ95ขึ้นไป,
รวม,
เปอร์เซ็นต์รวม,
) {
  return {
    โรคประจำตัว,
    ช่วงอายุ6064,
    เปอร์เซ็นต์ช่วงอายุ6064,
    ช่วงอายุ6569,
    เปอร์เซ็นต์ช่วงอายุ6569,
    ช่วงอายุ7074,
    เปอร์เซ็นต์ช่วงอายุ7074,
    ช่วงอายุ7579,
    เปอร์เซ็นต์ช่วงอายุ7579,
    ช่วงอายุ8084,
    เปอร์เซ็นต์ช่วงอายุ8084,
    ช่วงอายุ8590,
    เปอร์เซ็นต์ช่วงอายุ8589,
    ช่วงอายุ9094,
    เปอร์เซ็นต์ช่วงอายุ9094,
    ช่วงอายุ95ขึ้นไป,
    เปอร์เซ็นต์ช่วงอายุ95ขึ้นไป,
  รวม,
  เปอร์เซ็นต์รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart17Reducer = useSelector(({ chart17Reducer }) => chart17Reducer);
  const [row, setRow] = React.useState([]);
  React.useEffect(() => {
    if (chart17Reducer.isFetching === false) {
      for (const key in chart17Reducer.results) {
        if (Object.hasOwnProperty.call(chart17Reducer.results, key)) {
          const element = chart17Reducer.results[key];
          console.log("element ", element);
          row.push(
            creactData(
                element.DisName, 
                element.a6064.Elder,
                element.a6064.PerElder === "NaN" ? "0" : element.a6064.PerElder,  
                element.a6569.Elder,
                element.a6569.PerElder === "NaN" ? "0" :element.a6569.PerElder,
                element.a7074.Elder,
                element.a7074.PerElder === "NaN" ? "0" :element.a7074.PerElder,  
                element.a7579.Elder,
                element.a7579.PerElder === "NaN" ? "0" :element.a7579.PerElder,
                element.a8084.Elder,
                element.a8084.PerElder === "NaN" ? "0" :element.a8084.PerElder, 
                element.a8589.Elder,
                element.a8589.PerElder === "NaN" ? "0" :element.a8589.PerElder,
                element.a9094.Elder,
                element.a9094.PerElder === "NaN" ? "0" :element.a9094.PerElder,  
                element.a95.Elder,
                element.a95.PerElder === "NaN" ? "0" :element.a95.PerElder,
                element.Summary.Elder, 
                element.Summary.PerElder === "NaN" ? "0" :element.Summary.PerElder,
                )
          );
        }
      }
      console.log("row ", row);
      setOpen(row.length);
    }
  }, [chart17Reducer.isFetching]);

  return (
    <div className="card-body">
      <div className="csv-link">
        {open !== 0 && (
          <CSVLink
            data={row}
            filename={`จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบจำแนกตามช่วงอายุ.csv`}
          >
            Download CSV
          </CSVLink>
        )}
      </div>
      <div ref={ref} className="report-container">
        <h4 style={{marginLeft:"21%"}}>ช่วงอายุ</h4>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>โรคประจำตัว</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">60-64</StyledTableCell>
                  <StyledTableCell align="center">65-69</StyledTableCell>
                  <StyledTableCell align="center">70-74</StyledTableCell>
                  <StyledTableCell align="center">75-79</StyledTableCell>
                  <StyledTableCell align="center">80-84</StyledTableCell>
                  <StyledTableCell align="center">85-89</StyledTableCell>
                  <StyledTableCell align="center">90-94</StyledTableCell>
                  <StyledTableCell align="center">95+</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="left">{value.โรคประจำตัว}</StyledTableCell>
                    <StyledTableCell>
                    จำนวน<br />
                    เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ6064}<br />{value.เปอร์เซ็นต์ช่วงอายุ6064} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ6569}<br />{value.เปอร์เซ็นต์ช่วงอายุ6569} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ7074}<br />{value.เปอร์เซ็นต์ช่วงอายุ7074} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ7579}<br />{value.เปอร์เซ็นต์ช่วงอายุ7579} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ8084}<br />{value.เปอร์เซ็นต์ช่วงอายุ8084} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ8590}<br />{value.เปอร์เซ็นต์ช่วงอายุ8589} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ9094}<br />{value.เปอร์เซ็นต์ช่วงอายุ9094} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.ช่วงอายุ95ขึ้นไป}<br />{value.เปอร์เซ็นต์ช่วงอายุ95ขึ้นไป} %

                    </StyledTableCell>
                    <StyledTableCell align="center">
                        {value.รวม}<br />{value.เปอร์เซ็นต์รวม} %

                    </StyledTableCell>

                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart17() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">CH17
         จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบ จำแนกตามช่วงอายุ
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
