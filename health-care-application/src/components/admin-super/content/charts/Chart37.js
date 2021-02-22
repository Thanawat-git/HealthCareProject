import React, { useEffect, useState } from "react";
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
      padding: 0,
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
  จำนวนปกติ,
  เปอร์เซ็นต์จำนวนปกติ,
  จำนวนผิดปกติ,
  เปอร์เซ็นต์จำนวนผิดปกติ,
  รวม,
  เปอร์เซ็นต์รวม
) {
  return {
    ชุมชน,
    จำนวนปกติ,
    เปอร์เซ็นต์จำนวนปกติ,
    จำนวนผิดปกติ,
    เปอร์เซ็นต์จำนวนผิดปกติ,
    รวม,
    เปอร์เซ็นต์รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart37Reducer = useSelector(({ chart37Reducer }) => chart37Reducer);
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
  } = chart37Reducer.results;
  const dispatch = useDispatch();

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
    if (chart37Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart37Reducer.results)[i + 2],
            communi[i].Elder.Risk,
            communi[i].Elder.PerRisk === "NaN" ? "0%" : communi[i].Elder.PerRisk+"%",
            communi[i].Elder.NotRisk,
            communi[i].Elder.PerNotRisk === "NaN" ? "0%" : communi[i].Elder.PerNotRisk+"%",
            communi[i].Elder.Sum,
            communi[i].Elder.PerSum === "NaN" ? "0%" : communi[i].Elder.PerSum+"%"
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart37Reducer.isFetching]);



  return (
    <React.Fragment>
      <div className="card-body">
        <div className="csv-link">
          <CSVLink
            data={rows}
            filename={
              "จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามชุมชน.csv"
            }
          >
            Download CSV
          </CSVLink>
        </div>

        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table
              className="table-report table-per-padding"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={7}>
                    จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามชุมชน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="left" rowSpan={2}>อายุ</StyledTableCell>
                  <StyledTableCell align="center"colSpan={3}>ปกติ</StyledTableCell>
                  <StyledTableCell align="center"colSpan={4}>ผิดปกติ</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">กลุ่ม1</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม1</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนปกติ}
                      <br />
                      {row.เปอร์เซ็นต์จำนวนปกติ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนผิดปกติ}
                      <br />
                      {row.เปอร์เซ็นต์จำนวนผิดปกติ}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวม}
                      <br />
                      {row.เปอร์เซ็นต์รวม}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart37() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
          จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามชุมชน
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
                onClick={handlePrint}
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
