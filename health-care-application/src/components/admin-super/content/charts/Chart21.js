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
import Skeleton from "@material-ui/lab/Skeleton";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart21 } from "../../../../actions/charts.action";

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

function creactData(เสี่ยง, ปกติ, รวม) {
  return {เสี่ยง, ปกติ, รวม};
}

function createData2(รายชื่อ, ผลการตรวจ) {
  return {รายชื่อ, ผลการตรวจ};
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart21Reducer = useSelector(({ chart21Reducer }) => chart21Reducer);
  const [row, setRow] = React.useState([]);
  const [row2, setRow2] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (chart21Reducer.isFetching === false) {
      for (const key in chart21Reducer.results) {
        if (Object.hasOwnProperty.call(chart21Reducer.results, key)) {
          const element = chart21Reducer.results[key];
          console.log("element ", element);
          row.push(creactData(element.Risk, element.Normal, element.Elder));

          element.RiskName.map((v)=>{
            row2.push(createData2(v, "เสี่ยง"));
          })
          element.NormalName.map((v)=>{
            row2.push(createData2(v, "ปกติ"));
          })
          
        }
      }
      console.log("row2 ", row2);
      setOpen1(row2.length);
    }
  }, [chart21Reducer.isFetching]);

  React.useEffect(() => {
    setRow([]);
    setRow2([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart21(e.target.value));
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row2}
              filename={`จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคความดันโลหิตสูงของ${community}.csv`}
            >
              ดาวน์โหลดรายงาน
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
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคความดันโลหิตสูงของ{community}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">เสี่ยง (คน) </StyledTableCell>
                <StyledTableCell align="center">ปกติ (คน) </StyledTableCell>
                <StyledTableCell align="center">รวม (คน) </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chart21Reducer.isFetching === null 
              ?row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      {value.เสี่ยง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.ปกติ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.รวม}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }): (
                <React.Fragment>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                </React.Fragment>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart21() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคความดันโลหิตสูง จำแนกตามชุมชน
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
