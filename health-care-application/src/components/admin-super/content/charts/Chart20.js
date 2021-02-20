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
import { getDataChart20 } from "../../../../actions/charts.action";

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
  const chart20Reducer = useSelector(({ chart20Reducer }) => chart20Reducer);
  const [row, setRow] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (chart20Reducer.isFetching === false) {
      for (const key in chart20Reducer.results) {
        if (Object.hasOwnProperty.call(chart20Reducer.results, key)) {
          const element = chart20Reducer.results[key];
          console.log("element ", element);
          row.push(creactData(element.ElderName, element.Elder));
        }
      }
      console.log("row ", row);
      setOpen1(row.length);
    }
  }, [chart20Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart20(e.target.value));
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคเบาหวานของ${community}.csv`}
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
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={community}
            onChange={handleChange}
          >
            {COMMUNITYS.map((value, index) => {
              return (
                <React.Fragment>
                  {index !== 0 && (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  )}
                </React.Fragment>
              );
            })}
          </Select>
        </div>
      </div>

      <div ref={ref} className="report-container">
        <h4>
          จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคเบาหวาน
          จำแนกตามชุมชนของ{community}
        </h4>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">รายชื่อ</StyledTableCell>
                <StyledTableCell align="center">จำนวน</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      {value.รายชื่อ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.จำนวน}
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

export default function Chart20() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคเบาหวาน จำแนกตามชุมชน
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
