import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
// import { getDataChart3 } from "../../../../actions/charts.action";
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
  จำนวนผู้ชาย,
  จำนวนผู้หญิง,
  รวมประชากรผู้สูงอายุ,
  จำนวนที่สำรวจผู้ชาย,
  จำนวนที่สำรวจผู้หญิง,
  รวมจำนวนที่สำรวจได้,
  เปอร์เซ็นต์ที่สำรวจได้
) {
  return {
    ชุมชน,
    จำนวนผู้ชาย,
    จำนวนผู้หญิง,
    รวมประชากรผู้สูงอายุ,
    จำนวนที่สำรวจผู้ชาย,
    จำนวนที่สำรวจผู้หญิง,
    รวมจำนวนที่สำรวจได้,
    เปอร์เซ็นต์ที่สำรวจได้,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart3Reducer = useSelector(({ chart3Reducer }) => chart3Reducer);
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
  } = chart3Reducer.results;
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
    if (chart3Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart3Reducer.results)[i],
            communi[i].ElderMale,
            communi[i].ElderFemale,
            communi[i].Elder,
            communi[i].ElderSurveyMale,
            communi[i].ElderSurveyFemale,
            communi[i].ElderSurvey,
            communi[i].PerElderSurvey === "NaN"
              ? "0"
              : communi[i].PerElderSurvey
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart3Reducer.isFetching]);
 

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
            filename={
              "จำนวนประชากรผู้สูงอายุจำแนกตามเพศและจำนวนที่สำรวจได้.csv"
            }
          >
            Download CSV
          </CSVLink>
        </div>

        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={11}>
                    จำนวนประชากรผู้สูงอายุจำแนกตามเพศ และจำนวนที่สำรวจได้
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell colSpan={2}>ชุมชน</StyledTableCell>
                  <StyledTableCell align="center" colSpan={3}>ประชากรผู้สูงอายุ</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell align="center" colSpan={3}>จำนวนที่สำรวจได้</StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>ร้อยละที่สำรวจได้</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>ชาย</StyledTableCell>
                  <StyledTableCell>หญิง</StyledTableCell>
                  <StyledTableCell>รวม</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>ชาย</StyledTableCell>
                  <StyledTableCell>หญิง</StyledTableCell>
                  <StyledTableCell>รวม</StyledTableCell>
                  <StyledTableCell colSpan={2}>(%)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart3Reducer.isFetching === false ?
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
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนผู้ชาย}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนผู้หญิง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวมประชากรผู้สูงอายุ}
                    </StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนที่สำรวจผู้ชาย}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.จำนวนที่สำรวจผู้หญิง}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.รวมจำนวนที่สำรวจได้}
                    </StyledTableCell>
                    <StyledTableCell colSpan={2} align="center">
                      {row.เปอร์เซ็นต์ที่สำรวจได้} %
                    </StyledTableCell>
                  </StyledTableRow>
                )): <React.Fragment>
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

export default function Chart3() {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
             จำนวนประชากรผู้สูงอายุจำแนกตามเพศ และจำนวนที่สำรวจได้
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
