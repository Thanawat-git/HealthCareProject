import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
// import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
// import { getDataChart5 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: "center",
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
  ชุมชน,
  อยู่ลำพัง,
  เปอร์เซ็นต์อยู่ลำพัง,
  อยู่ลำพังกลางวัน,
  เปอร์เซ็นต์อยู่ลำพังกลางวัน,
  อยู่ลำพังกลางวันกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
  อยู่ลำพังกลางคืน,
  เปอร์เซ็นต์อยู่ลำพังกลางคืน,
  ไม่ได้อยู่ลำพัง,
  เปอร์เซ็นต์ไม่ได้อยู่ลำพัง
) {
  return {
    ชุมชน,
    อยู่ลำพัง,
    เปอร์เซ็นต์อยู่ลำพัง,
    อยู่ลำพังกลางวัน,
    เปอร์เซ็นต์อยู่ลำพังกลางวัน,
    อยู่ลำพังกลางวันกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน,
    อยู่ลำพังกลางคืน,
    เปอร์เซ็นต์อยู่ลำพังกลางคืน,
    ไม่ได้อยู่ลำพัง,
    เปอร์เซ็นต์ไม่ได้อยู่ลำพัง,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart5Reducer = useSelector(({ chart5Reducer }) => chart5Reducer);
  const dispatch = useDispatch();
  const {
    ชุมชนมณีแก้ว,
    ชุมชนดอนบน,
    ชุมชนบางแสนทาวเวอร์,
    ชุมชนตาลล้อม1,
    ชุมชนตาลล้อม2,
    ชุมชนบ้านเหมือง,
    ชุมชนพัฒนา2,
    ชุมชนดอนนารา,
    ชุมชนวัดกลางดอน,
    ชุมชนแสนสุข,
    ชุมชนมาบมะยม,
    ชุมชนท้ายตลาด,
    ชุมชนร่วมใจพัฒนา,
    ชุมชนบางแสนบน,
    ชุมชนหาดวอนนภา,
    ชุมชนบางเป้ง,
    ชุมชนหน้ามอ,
    ชุมชนโชคดี,
    ชุมชนสมใจนึก,
    ชุมชนหน้าเทศบาล,
    ชุมชนวัดแสนสุข,
    ชุมชนมุขแสนเจริญ1,
    ชุมชนมุขแสนเจริญ2,
    ชุมชนเขาสามมุข,
    ชุมชนบ้านแหลมแท่น,
  } = chart5Reducer.results;
  
  const communi = [
    ชุมชนมณีแก้ว,
    ชุมชนดอนบน,
    ชุมชนบางแสนทาวเวอร์,
    ชุมชนตาลล้อม1,
    ชุมชนตาลล้อม2,
    ชุมชนบ้านเหมือง,
    ชุมชนพัฒนา2,
    ชุมชนดอนนารา,
    ชุมชนวัดกลางดอน,
    ชุมชนแสนสุข,
    ชุมชนมาบมะยม,
    ชุมชนท้ายตลาด,
    ชุมชนร่วมใจพัฒนา,
    ชุมชนบางแสนบน,
    ชุมชนหาดวอนนภา,
    ชุมชนบางเป้ง,
    ชุมชนหน้ามอ,
    ชุมชนโชคดี,
    ชุมชนสมใจนึก,
    ชุมชนหน้าเทศบาล,
    ชุมชนวัดแสนสุข,
    ชุมชนมุขแสนเจริญ1,
    ชุมชนมุขแสนเจริญ2,
    ชุมชนเขาสามมุข,
    ชุมชนบ้านแหลมแท่น,
  ];
  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("communi.length ", communi.length);
    if (chart5Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart5Reducer.results)[i],
            communi[i].Alone.Sum,
            communi[i].Alone.PerSum === "NaN" ? "0" : communi[i].Alone.PerSum,
            communi[i].Alone.AloneDay,
            communi[i].Alone.PerAloneDay === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneDay,
            communi[i].Alone.AloneDayNight,
            communi[i].Alone.PerAloneDayNight === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneDayNight,
            communi[i].Alone.AloneNight,
            communi[i].Alone.PerAloneNight === "NaN"
              ? "0"
              : communi[i].Alone.PerAloneNight,
            communi[i].NotAlone,
            communi[i].PerNotAlone === "NaN" ? "0" : communi[i].PerNotAlone
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart5Reducer.isFetching]);

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
    <React.Fragment>
      <div className="card-body">
      <div className="csv-link">
      <CSVLink
        data={rows}
        className="csv-link"
        filename={"จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่และชุมชน.csv"}
      >
        Download CSV
      </CSVLink>
      </div>
        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center" colSpan={8}>
                  จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่ และชุมชน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell >
                    <strong>ความเป็นอยู่</strong>
                  </StyledTableCell>
                  <StyledTableCell colSpan={6}>อยู่ลำพัง</StyledTableCell>
                  <StyledTableCell>ไม่ได้อยู่ลำพัง</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    <strong>ชุมชน</strong>
                  </StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">กลางวัน</StyledTableCell>
                  <StyledTableCell align="center">กลางคืน</StyledTableCell>
                  <StyledTableCell align="center">
                    ทั้งกลางวัน-กลางคืน
                  </StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">จำนวนรวม</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart5Reducer.isFetching === false ?
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows).map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      จำนวน
                      <br />
                      เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.อยู่ลำพังกลางวัน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางวัน} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.อยู่ลำพังกลางคืน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางคืน} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.อยู่ลำพังกลางวันกลางคืน}
                      <br />
                      {row.เปอร์เซ็นต์อยู่ลำพังกลางวันกลางคืน} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.อยู่ลำพัง}
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ไม่ได้อยู่ลำพัง}
                      <br />
                      {row.เปอร์เซ็นต์ไม่ได้อยู่ลำพัง} %
                    </StyledTableCell>
                  </StyledTableRow>
                ))
                :<React.Fragment>
                  <StyledTableRow><StyledTableCell colSpan={8}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={8}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={8}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={8}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  <StyledTableRow><StyledTableCell colSpan={8}> <Skeleton/> </StyledTableCell></StyledTableRow>
                  </React.Fragment>
                }
              </TableBody>
              <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={18}
                  count={rows.length}
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
    </React.Fragment>
  );
});

export default function Chart5() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามความเป็นอยู่ และชุมชน
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
