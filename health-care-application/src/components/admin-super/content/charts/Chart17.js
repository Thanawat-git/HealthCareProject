import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
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
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
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
            filename={`จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบจำแนกตามช่วงอายุ.csv`}
          >
            ดาวน์โหลดรายงาน
          </CSVLink>
        )}
      </div>
      <div ref={ref} className="report-container">
        {/* <h4 style={{marginLeft:"21%"}}>ช่วงอายุ</h4> */}
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={11}>
                จำนวนและร้อยละของผู้สูงอายุที่มีโรคประจำตัวที่สำรวจพบจำแนกตามช่วงอายุ
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>โรคประจำตัว</StyledTableCell>
                <StyledTableCell align="center">ช่วงอายุ (ปี)</StyledTableCell>
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
              {
              chart17Reducer.isFetching === false ?
              (rowsPerPage > 0
                ? row.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : row).map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="left">{value.โรคประจำตัว}</StyledTableCell>
                    <StyledTableCell>
                    จำนวน<br />
                    เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ6064}<br />{value.เปอร์เซ็นต์ช่วงอายุ6064}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ6569}<br />{value.เปอร์เซ็นต์ช่วงอายุ6569}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ7074}<br />{value.เปอร์เซ็นต์ช่วงอายุ7074}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ7579}<br />{value.เปอร์เซ็นต์ช่วงอายุ7579}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ8084}<br />{value.เปอร์เซ็นต์ช่วงอายุ8084}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ8590}<br />{value.เปอร์เซ็นต์ช่วงอายุ8589}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ9094}<br />{value.เปอร์เซ็นต์ช่วงอายุ9094}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.ช่วงอายุ95ขึ้นไป}<br />{value.เปอร์เซ็นต์ช่วงอายุ95ขึ้นไป}

                    </StyledTableCell>
                    <StyledTableCell align="right">
                        {value.รวม}<br />{value.เปอร์เซ็นต์รวม}

                    </StyledTableCell>

                  </StyledTableRow>
                );
              })
            : <React.Fragment>
              <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
              <StyledTableRow><StyledTableCell colSpan={11}> <Skeleton/> </StyledTableCell></StyledTableRow>
              </React.Fragment>
            }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={11}
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

export default function Chart17() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
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
