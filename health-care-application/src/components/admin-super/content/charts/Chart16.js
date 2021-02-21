import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
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
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
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
          console.log("element ", element);
          row.push(
            creactData(element.DisName, element.DisCount, element.DisPer)
          );
        }
      }
      console.log("row ", row);
      setOpen(row.length);
    }
  }, [chart16Reducer.isFetching]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
        {/* <h4>จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัว ที่สำรวจพบ</h4> */}
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={3}>
                  จำนวนและร้อยละของผู้สูงอายุจำแนกตามโรคประจำตัว ที่สำรวจพบ
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>โรคประจำตัว</StyledTableCell>
                <StyledTableCell align="">จำนวน</StyledTableCell>
                <StyledTableCell align="">ร้อยละ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chart16Reducer.isFetching === false ? (
                (rowsPerPage > 0
                  ? row.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : row
                ).map((value) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell>{value.โรคประจำตัว}</StyledTableCell>
                      <StyledTableCell>{value.จำนวน}</StyledTableCell>
                      <StyledTableCell>{value.ร้อยละ}</StyledTableCell>
                    </StyledTableRow>
                  );
                })
              ) : (
                <React.Fragment>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      {" "}
                      <Skeleton />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      {" "}
                      <Skeleton />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      {" "}
                      <Skeleton />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      {" "}
                      <Skeleton />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>
                      {" "}
                      <Skeleton />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                </React.Fragment>
              )}
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
