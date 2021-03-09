import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
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
import {
  PRINT_THIS_SECTION,
} from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart8 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv"
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
  เบิกต้นสังกัด,
  เปอร์เซ็นต์เบิกต้นสังกัด,
  ชำระเงินเอง,
  เปอร์เซ็นต์ชำระเงินเอง,
  บัตรทอง,
  เปอร์เซ็นต์บัตรทอง,
  บัตรผู้พิการ,
  เปอร์เซ็นต์บัตรผู้พิการ,
  บัตรประกันสังคม,
  เปอร์เซ็นต์บัตรประกันสังคม,
  อื่นๆ,
  เปอร์เซ็นต์อื่นๆ,
  รวม,
) {
  return {
    ชุมชน,
    เบิกต้นสังกัด,
    เปอร์เซ็นต์เบิกต้นสังกัด,
    ชำระเงินเอง,
    เปอร์เซ็นต์ชำระเงินเอง,
    บัตรทอง,
    เปอร์เซ็นต์บัตรทอง,
    บัตรผู้พิการ,
    เปอร์เซ็นต์บัตรผู้พิการ,
    บัตรประกันสังคม,
    เปอร์เซ็นต์บัตรประกันสังคม,
    อื่นๆ,
    เปอร์เซ็นต์อื่นๆ,
    รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const chart8Reducer = useSelector(({ chart8Reducer }) => chart8Reducer);
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
  } = chart8Reducer.results;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart8(e.target.value));
  };
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
    if (chart8Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart8Reducer.results)[i],
            communi[i].Affiliation,
            communi[i].PerAffiliation==="NaN"?"0":communi[i].PerAffiliation,
            communi[i].Yourself,
            communi[i].PerYourself==="NaN"?"0":communi[i].PerYourself,
            communi[i].Gold,
            communi[i].PerGold==="NaN"?"0":communi[i].PerGold,
            communi[i].Disabled,
            communi[i].PerDisabled==="NaN"?"0":communi[i].PerDisabled,
            communi[i].Social,
            communi[i].PerSocial==="NaN"?"0":communi[i].PerSocial,
            communi[i].Other,
            communi[i].PerOther==="NaN"?"0":communi[i].PerOther,
            communi[i].Summary,
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart8Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  
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
      filename={"จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษาและชุมชน.csv"}
      > 
      ดาวน์โหลดรายงาน 
      </CSVLink>
    </div>
      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
            <TableRow>
                  <StyledTableCell align="center" colSpan={10}>
                  จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา และชุมชน
                  </StyledTableCell>
                </TableRow>
              <TableRow>
                <StyledTableCell>ชุมชน</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                <StyledTableCell align="center">เบิกต้นสังกัด</StyledTableCell>
                <StyledTableCell align="center">ชำระเงินเอง</StyledTableCell>
                <StyledTableCell align="center">บัตรทอง</StyledTableCell>
                <StyledTableCell align="center">บัตรผู้พิการ</StyledTableCell>
                <StyledTableCell align="center">บัตรประกันสังคม</StyledTableCell>
                <StyledTableCell align="center">อื่นๆ</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {chart8Reducer.isFetching === false ?
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                :rows).map((row) => (
                <StyledTableRow key={row.ชุมชน}>
                  <StyledTableCell  component="th" scope="row">
                    {row.ชุมชน}
                  </StyledTableCell>
                  <StyledTableCell align="left">จำนวน<br />เปอร์เซ็นต์</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.เบิกต้นสังกัด}  <br />
                    {row.เปอร์เซ็นต์เบิกต้นสังกัด} % 
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ชำระเงินเอง}  <br />
                    {row.เปอร์เซ็นต์ชำระเงินเอง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรทอง}  <br />
                    {row.เปอร์เซ็นต์บัตรทอง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรผู้พิการ}  <br />
                    {row.เปอร์เซ็นต์บัตรผู้พิการ} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บัตรประกันสังคม}  <br />
                    {row.เปอร์เซ็นต์บัตรประกันสังคม} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.อื่นๆ}  <br />
                    {row.เปอร์เซ็นต์อื่นๆ} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.รวม}
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
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

export default function Chart8() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา และชุมชน
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
