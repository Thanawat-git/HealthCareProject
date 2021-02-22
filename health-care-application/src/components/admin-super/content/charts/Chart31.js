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
import { getDataChart31 } from "../../../../actions/charts.action";

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

function creactData(ส่งต่อ, ไม่ส่งต่อ) {
  return {ส่งต่อ, ไม่ส่งต่อ};
}

function createData2(รายชื่อ, ผลการตรวจบริการรักษาทางทันตกรรม) {
  return {รายชื่อ, ผลการตรวจบริการรักษาทางทันตกรรม};
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart31Reducer = useSelector(({ chart31Reducer }) => chart31Reducer);
  const [row, setRow] = React.useState([]);
  const [row2, setRow2] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (chart31Reducer.isFetching === false) {
      for (const key in chart31Reducer.results) {
        if (Object.hasOwnProperty.call(chart31Reducer.results, key)) {
          const element = chart31Reducer.results[key];
          console.log("element ", element);
          row.push(creactData(element.Risk, element.NotRisk, element.Elder));

          element.RiskName.map((v)=>{
            row2.push(createData2(v, "ส่งต่อ"));
          })
          element.NotRiskName.map((v)=>{
            row2.push(createData2(v, "ไม่ส่งต่อ"));
          })
          
        }
      }
      console.log("row2 ", row2);
      setOpen1(row2.length);
    }
  }, [chart31Reducer.isFetching]);

  React.useEffect(() => {
    setRow([]);
    setRow2([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart31(e.target.value));
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
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                จำนวนและรายชื่อของผู้สูงอายุที่มีความเสี่ยงเป็นโรคความดันโลหิตสูงของ{community}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center">ส่งต่อบริการรักษาทางทันตกรรม (คน) </StyledTableCell>
                <StyledTableCell align="center">ไม่ส่งต่อบริการรักษาทางทันตกรรม (คน) </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="center">
                      {value.ส่งต่อ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.ไม่ส่งต่อ}
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

export default function Chart31() {
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
