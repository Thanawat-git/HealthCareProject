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
  Select,
} from "@material-ui/core";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart22 } from "../../../../actions/charts.action";

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

function creactData(รายชื่อ, จำนวน) {
  return {
    รายชื่อ,
    จำนวน,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart22Reducer = useSelector(({ chart22Reducer }) => chart22Reducer);
  const [row, setRow] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (chart22Reducer.isFetching === false) {
      for (const key in chart22Reducer.results) {
        if (Object.hasOwnProperty.call(chart22Reducer.results, key)) {
          const element = chart22Reducer.results[key];
          console.log("element ", element);
          row.push(creactData(element.ElderName, element.Elder));
        }
      }
      console.log("row ", row);
      setOpen1(row.length);
    }
  }, [chart22Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart22(e.target.value));
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงความดันโลหิตสูงจำแนกตามชุมชนของ${community}.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
      </div>

      <div ref={ref} className="report-container">
        <h4>
        จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามชุมชน
        </h4>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ชุมชน</StyledTableCell>
                <StyledTableCell align="center">เสี่ยง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูงมาก</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      00
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      000
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      0000
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      00000
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

export default function Chart22() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
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
