import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { getDataChart18 } from "../../../../actions/charts.action";
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
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
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

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  โรคประจำตัว,
  ผู้ชาย6064,
  เปอร์เซนต์ชาย6064,
  ผู้หญิง6064,
  เปอร์เซนต์หญิง6064,
  ผู้ชาย6569,
  เปอร์เซนต์ชาย6569,
  ผู้หญิง6569,
  เปอร์เซนต์หญิง6569,
  ผู้ชาย7074,
  เปอร์เซนต์ชาย7074,
  ผู้หญิง7074,
  เปอร์เซนต์หญิง7074,
  ผู้ชาย7579,
  เปอร์เซนต์ชาย7579,
  ผู้หญิง7579,
  เปอร์เซนต์หญิง7579,
  ผู้ชาย8084,
  เปอร์เซนต์ชาย8084,
  ผู้หญิง8084,
  เปอร์เซนต์หญิง8084,
  ผู้ชาย8589,
  เปอร์เซนต์ชาย8589,
  ผู้หญิง8589,
  เปอร์เซนต์หญิง8589,
  ผู้ชาย9094,
  เปอร์เซนต์ชาย9094,
  ผู้หญิง9094,
  เปอร์เซนต์หญิง9094,
  ผู้ชาย95,
  เปอร์เซนต์ชาย95,
  ผู้หญิง95,
  เปอร์เซนต์หญิง95
) {
  return {
    โรคประจำตัว,
    ผู้ชาย6064,
    เปอร์เซนต์ชาย6064,
    ผู้หญิง6064,
    เปอร์เซนต์หญิง6064,
    ผู้ชาย6569,
    เปอร์เซนต์ชาย6569,
    ผู้หญิง6569,
    เปอร์เซนต์หญิง6569,
    ผู้ชาย7074,
    เปอร์เซนต์ชาย7074,
    ผู้หญิง7074,
    เปอร์เซนต์หญิง7074,
    ผู้ชาย7579,
    เปอร์เซนต์ชาย7579,
    ผู้หญิง7579,
    เปอร์เซนต์หญิง7579,
    ผู้ชาย8084,
    เปอร์เซนต์ชาย8084,
    ผู้หญิง8084,
    เปอร์เซนต์หญิง8084,
    ผู้ชาย8589,
    เปอร์เซนต์ชาย8589,
    ผู้หญิง8589,
    เปอร์เซนต์หญิง8589,
    ผู้ชาย9094,
    เปอร์เซนต์ชาย9094,
    ผู้หญิง9094,
    เปอร์เซนต์หญิง9094,
    ผู้ชาย95,
    เปอร์เซนต์ชาย95,
    ผู้หญิง95,
    เปอร์เซนต์หญิง95,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const chart18Reducer = useSelector(({ chart18Reducer }) => chart18Reducer);
  const dispatch = useDispatch();
  const [row, setRow] = React.useState([]);

  React.useEffect(() => {
    if (chart18Reducer.isFetching === false) {
      const obj = chart18Reducer.results;
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          const element = obj[key];
          //   console.log("element ", element);
          row.push(
            createData(
              element.DisName,
              element.a6064.ElderMale,
              element.a6064.PerElderMale === "NaN"
                ? "0%"
                : element.a6064.PerElderMale + "%",
              element.a6064.ElderFemale,
              element.a6064.PerElderFemale === "NaN"
                ? "0%"
                : element.a6064.PerElderFemale + "%",
              element.a6569.ElderMale,
              element.a6569.PerElderMale === "NaN"
                ? "0%"
                : element.a6569.PerElderMale + "%",
              element.a6569.ElderFemale,
              element.a6569.PerElderFemale === "NaN"
                ? "0%"
                : element.a6569.PerElderFemale + "%",
              element.a7074.ElderMale,
              element.a7074.PerElderMale === "NaN"
                ? "0%"
                : element.a7074.PerElderMale + "%",
              element.a7074.ElderFemale,
              element.a7074.PerElderFemale === "NaN"
                ? "0%"
                : element.a7074.PerElderFemale + "%",
              element.a7579.ElderMale,
              element.a7579.PerElderMale === "NaN"
                ? "0%"
                : element.a7579.PerElderMale + "%",
              element.a7579.ElderFemale,
              element.a7579.PerElderFemale === "NaN"
                ? "0%"
                : element.a7579.PerElderFemale + "%",
              element.a8084.ElderMale,
              element.a8084.PerElderMale === "NaN"
                ? "0%"
                : element.a8084.PerElderMale + "%",
              element.a8084.ElderFemale,
              element.a8084.PerElderFemale === "NaN"
                ? "0%"
                : element.a8084.PerElderFemale + "%",
              element.a8589.ElderMale,
              element.a8589.PerElderMale === "NaN"
                ? "0%"
                : element.a8589.PerElderMale + "%",
              element.a8589.ElderFemale,
              element.a8589.PerElderFemale === "NaN"
                ? "0%"
                : element.a8589.PerElderFemale + "%",
              element.a9094.ElderMale,
              element.a9094.PerElderMale === "NaN"
                ? "0%"
                : element.a9094.PerElderMale + "%",
              element.a9094.ElderFemale,
              element.a9094.PerElderFemale === "NaN"
                ? "0%"
                : element.a9094.PerElderFemale + "%",
              element.a95.ElderMale,
              element.a95.PerElderMale === "NaN"
                ? "0%"
                : element.a95.PerElderMale + "%",
              element.a95.ElderFemale,
              element.a95.PerElderFemale === "NaN"
                ? "0%"
                : element.a95.PerElderFemale + "%"
            )
          );
        }
      }
    }
    console.log("row ", row);
    setOpen1(row.length);
  }, [chart18Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart18(e.target.value));
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, row.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบจำแนกตามเพศและช่วงอายุของ${community}.csv`}
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
                <option key={index} value={value}>
                  {value}
                </option>
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
                <StyledTableCell align="center" colSpan={10}>
                  จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบจำแนกตามเพศและช่วงอายุของชุมชน
                  {community}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>โรคประจำตัว</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="right">60-64</StyledTableCell>
                {/* <StyledTableCell align="left"></StyledTableCell> */}
                <StyledTableCell align="right">65-69</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">70-74</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">75-79</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">80-84</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">85-89</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">90-94</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
                <StyledTableCell align="right">95+</StyledTableCell>
                {/* <StyledTableCell align="left">%</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? row.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : row
              ).map((v) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell>{v.โรคประจำตัว}</StyledTableCell>
                    <StyledTableCell>
                      ชาย <br />
                      เปอร์เซ็นต์ชาย <br />
                      หญิง<br />
                      เปอร์เซ็นต์หญิง
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย6064}
                      <br /> 
                      {v.เปอร์เซนต์ชาย6064}           
                       <br />
                      {v.ผู้หญิง6064}
                      <br />
                      {v.เปอร์เซนต์หญิง6064}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย6569}
                      <br />                      
                      {v.เปอร์เซนต์ชาย6569}
                      <br />
                      {v.ผู้หญิง6569}
                      <br />                      
                      {v.เปอร์เซนต์หญิง6569}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย7074}
                      <br />                      
                      {v.เปอร์เซนต์ชาย7074}
                      <br />
                      {v.ผู้หญิง7074}
                      <br />                     
                      {v.เปอร์เซนต์หญิง7074}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย7579}
                      <br />                      
                      {v.เปอร์เซนต์ชาย7579}
                      <br />
                      {v.ผู้หญิง7579}
                      <br />                      
                      {v.เปอร์เซนต์หญิง7579}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย8084}
                      <br />                      
                      {v.เปอร์เซนต์ชาย8084}
                      <br />
                      {v.ผู้หญิง8084}
                      <br />                      
                      {v.เปอร์เซนต์หญิง8084}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย8589}
                      <br />                      
                      {v.เปอร์เซนต์ชาย8589}
                      <br />
                      {v.ผู้หญิง8589}
                      <br />                      
                      {v.เปอร์เซนต์หญิง8589}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย9094}
                      <br />                      
                      {v.เปอร์เซนต์ชาย9094}
                      <br />
                      {v.ผู้หญิง9094}
                      <br />                      
                      {v.เปอร์เซนต์หญิง9094}
                      <br />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {v.ผู้ชาย95}
                      <br />                      
                      {v.เปอร์เซนต์ชาย95}
                      <br />
                      {v.ผู้หญิง95}
                      <br />                      
                      {v.เปอร์เซนต์หญิง95}
                      <br />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={18}
                  count={row.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "จำนวนต่อหน้า" },
                    native: true,
                  }}
                  labelRowsPerPage="จำนวนต่อหน้า"
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart18() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            CH18 จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบ
            จำแนกตามเพศและช่วงอายุ ของชุมชน
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
