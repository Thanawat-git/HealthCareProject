import React, {useEffect, useState} from "react";
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
// import { getDataChart9 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textAlign: "center",
    // border:1
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
  ผู้ชายปกติ6064,
  เปอร์เซ็นต์ผู้ชายปกติ6064,
  ผู้ชายเกิน6064,
  เปอร์เซ็นต์ผู้ชายเกิน6064,
  ผู้หญิงปกติ6064,
  เปอร์เซ็นผู้หญิงปกติ6064,
  ผู้หญิงเกิน6064,
  เปอร์เซ็นผู้หญิงเกิน6064,
  ผู้ชายปกติ6569,
  เปอร์เซ็นต์ผู้ชายปกติ6569,
  ผู้ชายเกิน6569,
  เปอร์เซ็นต์ผู้ชายเกิน6569,
  ผู้หญิงปกติ6569,
  เปอร์เซ็นผู้หญิงปกติ6569,
  ผู้หญิงเกิน6569,
  เปอร์เซ็นผู้หญิงเกิน6569,
  ผู้ชายปกติ7074,
  เปอร์เซ็นต์ผู้ชายปกติ7074,
  ผู้ชายเกิน7074,
  เปอร์เซ็นต์ผู้ชายเกิน7074,
  ผู้หญิงปกติ7074,
  เปอร์เซ็นผู้หญิงปกติ7074,
  ผู้หญิงเกิน7074,
  เปอร์เซ็นผู้หญิงเกิน7074,

  ผู้ชายปกติ7579,
  เปอร์เซ็นต์ผู้ชายปกติ7579,
  ผู้ชายเกิน7579,
  เปอร์เซ็นต์ผู้ชายเกิน7579,
  ผู้หญิงปกติ7579,
  เปอร์เซ็นผู้หญิงปกติ7579,
  ผู้หญิงเกิน7579,
  เปอร์เซ็นผู้หญิงเกิน7579,

  ผู้ชายปกติ8084,
  เปอร์เซ็นต์ผู้ชายปกติ8084,
  ผู้ชายเกิน8084,
  เปอร์เซ็นต์ผู้ชายเกิน8084,
  ผู้หญิงปกติ8084,
  เปอร์เซ็นผู้หญิงปกติ8084,
  ผู้หญิงเกิน8084,
  เปอร์เซ็นผู้หญิงเกิน8084,

  ผู้ชายปกติ8589,
  เปอร์เซ็นต์ผู้ชายปกติ8589,
  ผู้ชายเกิน8589,
  เปอร์เซ็นต์ผู้ชายเกิน8589,
  ผู้หญิงปกติ8589,
  เปอร์เซ็นผู้หญิงปกติ8589,
  ผู้หญิงเกิน8589,
  เปอร์เซ็นผู้หญิงเกิน8589,

  ผู้ชายปกติ9094,
  เปอร์เซ็นต์ผู้ชายปกติ9094,
  ผู้ชายเกิน9094,
  เปอร์เซ็นต์ผู้ชายเกิน9094,
  ผู้หญิงปกติ9094,
  เปอร์เซ็นผู้หญิงปกติ9094,
  ผู้หญิงเกิน9094,
  เปอร์เซ็นผู้หญิงเกิน9094,

  ผู้ชายปกติ95,
  เปอร์เซ็นต์ผู้ชายปกติ95,
  ผู้ชายเกิน95,
  เปอร์เซ็นต์ผู้ชายเกิน95,
  ผู้หญิงปกติ95,
  เปอร์เซ็นผู้หญิงปกติ95,
  ผู้หญิงเกิน95,
  เปอร์เซ็นผู้หญิงเกิน95,

  รวมทั้งหมดผู้ชายปกติ,
  เปอร์เซ็นรวมทั้งหมดผู้ชายปกติ,
  รวมทั้งหมดผู้ชายเกิน,
  เปอร์เซ็นรวมทั้งหมดผู้ชายเกิน,
  รวมทั้งหมดผู้หญิงปกติ,
  เปอร์เซ็นรวมทั้งหมดผู้หญิงปกติ,
  รวมทั้งหมดผู้หญิงเกิน,
  เปอร์เซ็นรวมทั้งหมดผู้หญิงเกิน,

) {
  return {
    ชุมชน,
    ผู้ชายปกติ6064,
    เปอร์เซ็นต์ผู้ชายปกติ6064,
    ผู้ชายเกิน6064,
    เปอร์เซ็นต์ผู้ชายเกิน6064,
    ผู้หญิงปกติ6064,
    เปอร์เซ็นผู้หญิงปกติ6064,
    ผู้หญิงเกิน6064,
    เปอร์เซ็นผู้หญิงเกิน6064,
    ผู้ชายปกติ6569,
    เปอร์เซ็นต์ผู้ชายปกติ6569,
    ผู้ชายเกิน6569,
    เปอร์เซ็นต์ผู้ชายเกิน6569,
    ผู้หญิงปกติ6569,
    เปอร์เซ็นผู้หญิงปกติ6569,
    ผู้หญิงเกิน6569,
    เปอร์เซ็นผู้หญิงเกิน6569,
    ผู้ชายปกติ7074,
    เปอร์เซ็นต์ผู้ชายปกติ7074,
    ผู้ชายเกิน7074,
    เปอร์เซ็นต์ผู้ชายเกิน7074,
    ผู้หญิงปกติ7074,
    เปอร์เซ็นผู้หญิงปกติ7074,
    ผู้หญิงเกิน7074,
    เปอร์เซ็นผู้หญิงเกิน7074,
  
    ผู้ชายปกติ7579,
    เปอร์เซ็นต์ผู้ชายปกติ7579,
    ผู้ชายเกิน7579,
    เปอร์เซ็นต์ผู้ชายเกิน7579,
    ผู้หญิงปกติ7579,
    เปอร์เซ็นผู้หญิงปกติ7579,
    ผู้หญิงเกิน7579,
    เปอร์เซ็นผู้หญิงเกิน7579,
  
    ผู้ชายปกติ8084,
    เปอร์เซ็นต์ผู้ชายปกติ8084,
    ผู้ชายเกิน8084,
    เปอร์เซ็นต์ผู้ชายเกิน8084,
    ผู้หญิงปกติ8084,
    เปอร์เซ็นผู้หญิงปกติ8084,
    ผู้หญิงเกิน8084,
    เปอร์เซ็นผู้หญิงเกิน8084,
  
    ผู้ชายปกติ8589,
    เปอร์เซ็นต์ผู้ชายปกติ8589,
    ผู้ชายเกิน8589,
    เปอร์เซ็นต์ผู้ชายเกิน8589,
    ผู้หญิงปกติ8589,
    เปอร์เซ็นผู้หญิงปกติ8589,
    ผู้หญิงเกิน8589,
    เปอร์เซ็นผู้หญิงเกิน8589,
  
    ผู้ชายปกติ9094,
    เปอร์เซ็นต์ผู้ชายปกติ9094,
    ผู้ชายเกิน9094,
    เปอร์เซ็นต์ผู้ชายเกิน9094,
    ผู้หญิงปกติ9094,
    เปอร์เซ็นผู้หญิงปกติ9094,
    ผู้หญิงเกิน9094,
    เปอร์เซ็นผู้หญิงเกิน9094,
  
    ผู้ชายปกติ95,
    เปอร์เซ็นต์ผู้ชายปกติ95,
    ผู้ชายเกิน95,
    เปอร์เซ็นต์ผู้ชายเกิน95,
    ผู้หญิงปกติ95,
    เปอร์เซ็นผู้หญิงปกติ95,
    ผู้หญิงเกิน95,
    เปอร์เซ็นผู้หญิงเกิน95,
  
    รวมทั้งหมดผู้ชายปกติ,
    เปอร์เซ็นรวมทั้งหมดผู้ชายปกติ,
    รวมทั้งหมดผู้ชายเกิน,
    เปอร์เซ็นรวมทั้งหมดผู้ชายเกิน,
    รวมทั้งหมดผู้หญิงปกติ,
    เปอร์เซ็นรวมทั้งหมดผู้หญิงปกติ,
    รวมทั้งหมดผู้หญิงเกิน,
    เปอร์เซ็นรวมทั้งหมดผู้หญิงเกิน,
  
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  // const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const [openPaper, setopenPaper] = React.useState(false);
  const [genderLabel ,setGenderLabel] = React.useState("เพศชาย")
  const chart9Reducer = useSelector(({ chart9Reducer }) => chart9Reducer);
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
  } = chart9Reducer.results;
  const dispatch = useDispatch();

  React.useEffect(()=>{
    openPaper ? setGenderLabel("เพศหญิง") : setGenderLabel("เพศชาย")
  },[openPaper])

  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
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
    if (chart9Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart9Reducer.results)[i+1],
            communi[i].g6064.MaleNormal,
            communi[i].g6064.PerMaleNormal==="NaN"?"0":communi[i].g6064.PerMaleNormal,
            communi[i].g6064.MaleOver,
            communi[i].g6064.PerMaleOver==="NaN"?"0":communi[i].g6064.PerMaleOver,
            communi[i].g6064.FemaleNormal,
            communi[i].g6064.PerFemaleNormal==="NaN"?"0":communi[i].g6064.PerFemaleNormal,
            communi[i].g6064.FemaleOver,
            communi[i].g6064.PerFemaleOver==="NaN"?"0":communi[i].g6064.PerFemaleOver,

            communi[i].g6569.MaleNormal,
            communi[i].g6569.PerMaleNormal==="NaN"?"0":communi[i].g6569.PerMaleNormal,
            communi[i].g6569.MaleOver,
            communi[i].g6569.PerMaleOver==="NaN"?"0":communi[i].g6569.PerMaleOver,
            communi[i].g6569.FemaleNormal,
            communi[i].g6569.PerFemaleNormal==="NaN"?"0":communi[i].g6569.PerFemaleNormal,
            communi[i].g6569.FemaleOver,
            communi[i].g6569.PerFemaleOver==="NaN"?"0":communi[i].g6569.PerFemaleOver,

            communi[i].g7074.MaleNormal,
            communi[i].g7074.PerMaleNormal==="NaN"?"0":communi[i].g7074.PerMaleNormal,
            communi[i].g7074.MaleOver,
            communi[i].g7074.PerMaleOver==="NaN"?"0":communi[i].g7074.PerMaleOver,
            communi[i].g7074.FemaleNormal,
            communi[i].g7074.PerFemaleNormal==="NaN"?"0":communi[i].g7074.PerFemaleNormal,
            communi[i].g7074.FemaleOver,
            communi[i].g7074.PerFemaleOver==="NaN"?"0":communi[i].g7074.PerFemaleOver,

            communi[i].g7579.MaleNormal,
            communi[i].g7579.PerMaleNormal==="NaN"?"0":communi[i].g7579.PerMaleNormal,
            communi[i].g7579.MaleOver,
            communi[i].g7579.PerMaleOver==="NaN"?"0":communi[i].g7579.PerMaleOver,
            communi[i].g7579.FemaleNormal,
            communi[i].g7579.PerFemaleNormal==="NaN"?"0":communi[i].g7579.PerFemaleNormal,
            communi[i].g7579.FemaleOver,
            communi[i].g7579.PerFemaleOver==="NaN"?"0":communi[i].g7579.PerFemaleOver,

            communi[i].g8084.MaleNormal,
            communi[i].g8084.PerMaleNormal==="NaN"?"0":communi[i].g8084.PerMaleNormal,
            communi[i].g8084.MaleOver,
            communi[i].g8084.PerMaleOver==="NaN"?"0":communi[i].g8084.PerMaleOver,
            communi[i].g8084.FemaleNormal,
            communi[i].g8084.PerFemaleNormal==="NaN"?"0":communi[i].g8084.PerFemaleNormal,
            communi[i].g8084.FemaleOver,
            communi[i].g8084.PerFemaleOver==="NaN"?"0":communi[i].g8084.PerFemaleOver,

            communi[i].g8589.MaleNormal,
            communi[i].g8589.PerMaleNormal==="NaN"?"0":communi[i].g8589.PerMaleNormal,
            communi[i].g8589.MaleOver,
            communi[i].g8589.PerMaleOver==="NaN"?"0":communi[i].g8589.PerMaleOver,
            communi[i].g8589.FemaleNormal,
            communi[i].g8589.PerFemaleNormal==="NaN"?"0":communi[i].g8589.PerFemaleNormal,
            communi[i].g8589.FemaleOver,
            communi[i].g8589.PerFemaleOver==="NaN"?"0":communi[i].g8589.PerFemaleOver,

            communi[i].g9094.MaleNormal,
            communi[i].g9094.PerMaleNormal==="NaN"?"0":communi[i].g9094.PerMaleNormal,
            communi[i].g9094.MaleOver,
            communi[i].g9094.PerMaleOver==="NaN"?"0":communi[i].g9094.PerMaleOver,
            communi[i].g9094.FemaleNormal,
            communi[i].g9094.PerFemaleNormal==="NaN"?"0":communi[i].g9094.PerFemaleNormal,
            communi[i].g9094.FemaleOver,
            communi[i].g9094.PerFemaleOver==="NaN"?"0":communi[i].g9094.PerFemaleOver,

            communi[i].g95.MaleNormal,
            communi[i].g95.PerMaleNormal==="NaN"?"0":communi[i].g95.PerMaleNormal,
            communi[i].g95.MaleOver,
            communi[i].g95.PerMaleOver==="NaN"?"0":communi[i].g95.PerMaleOver,
            communi[i].g95.FemaleNormal,
            communi[i].g95.PerFemaleNormal==="NaN"?"0":communi[i].g95.PerFemaleNormal,
            communi[i].g95.FemaleOver,
            communi[i].g95.PerFemaleOver==="NaN"?"0":communi[i].g95.PerFemaleOver,
            
            communi[i].Summary.MaleNormal,
            communi[i].Summary.PerMaleNormal==="NaN"?"0":communi[i].Summary.PerMaleNormal,
            communi[i].Summary.MaleOver,
            communi[i].Summary.PerMaleOver==="NaN"?"0":communi[i].Summary.PerMaleOver,
            communi[i].Summary.FemaleNormal,
            communi[i].Summary.PerFemaleNormal==="NaN"?"0":communi[i].Summary.PerFemaleNormal,
            communi[i].Summary.FemaleOver,
            communi[i].Summary.PerFemaleOver==="NaN"?"0":communi[i].Summary.PerFemaleOver,
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart9Reducer.isFetching]);

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
        <div className="row justify-content-between csv-link-select" >
          <CSVLink 
          data={rows}
          filename={
            "จำนวนและร้อยละของผู้สูงอายุจำแนกตามเส้นรอบเอวช่วงอายุเพศและชุมชน.csv"
          }
          >ดาวน์โหลดรายงาน</CSVLink>
          <FormControlLabel
          control={
            <Switch
              size="medium"
              checked={openPaper}
              onChange={toggleChecked}
            />
          }
          label={genderLabel}
        />
        </div>
        <div ref={ref}>
        {openPaper ? (
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={11}>จำนวนและร้อยละของผู้สูงอายุจำแนกตามเส้นรอบเอว ช่วงอายุ และชุมชน ของ{genderLabel}</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">ชุมชน</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
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
                {chart9Reducer.isFetching === false 
                ? (rowsPerPage > 0
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
                      ปกติ <br />ปกติ(%) <br /> เกิน <br /> เกิน(%)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {/* 6064 */}
                      {row.ผู้ชายปกติ6064} 
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ6064} 
                      <br />
                      {row.ผู้ชายเกิน6064}                    
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน6064} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ6569}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ6569} 
                      <br />
                      {row.ผู้ชายเกิน6569}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน6569} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ7074}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ7074} 
                      <br />
                      {row.ผู้ชายเกิน7074}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน7074} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ7579}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ7579} 
                      <br />
                      {row.ผู้ชายเกิน7579}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน7579} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ8084}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ8084} 
                      <br />
                      {row.ผู้ชายเกิน8084}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน8084} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ8589}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ8589} 
                      <br />
                      {row.ผู้ชายเกิน8589}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน8589} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ9094}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ9094} 
                      <br />
                      {row.ผู้ชายเกิน9094}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน9094} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้ชายปกติ95}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายปกติ95} 
                      <br />
                      {row.ผู้ชายเกิน95}
                      <br />
                      {row.เปอร์เซ็นต์ผู้ชายเกิน95} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.รวมทั้งหมดผู้ชายปกติ} 
                      <br /> 
                      {row.เปอร์เซ็นรวมทั้งหมดผู้ชายปกติ} 
                      <br />
                      {row.รวมทั้งหมดผู้ชายเกิน} 
                      <br />
                      {row.เปอร์เซ็นรวมทั้งหมดผู้ชายเกิน} 
                      
                    </StyledTableCell>
                  </StyledTableRow>
                ))
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
           ) : (
            <TableContainer component={Paper}>
             <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={11}>จำนวนและร้อยละของผู้สูงอายุจำแนกตามเส้นรอบเอว ช่วงอายุ และชุมชน ของ{genderLabel}</StyledTableCell>
                </TableRow>

                <TableRow>
                  <StyledTableCell align="center">ชุมชน</StyledTableCell>
                  <StyledTableCell>&nbsp;</StyledTableCell>
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
                {chart9Reducer.isFetching === false 
                ? (rowsPerPage > 0
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
                      ปกติ <br />ปกติ(%) <br /> เกิน <br /> เกิน(%)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {/* 6064 */}
                      {row.ผู้หญิงปกติ6064} 
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ6064} 
                      <br />
                      {row.ผู้หญิงเกิน6064}                    
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน6064} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ6569}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ6569} 
                      <br />
                      {row.ผู้หญิงเกิน6569}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน6569} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ7074}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ7074} 
                      <br />
                      {row.ผู้หญิงเกิน7074}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน7074} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ7579}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ7579} 
                      <br />
                      {row.ผู้หญิงเกิน7579}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน7579} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ8084}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ8084} 
                      <br />
                      {row.ผู้หญิงเกิน8084}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน8084} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ8589}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ8589} 
                      <br />
                      {row.ผู้หญิงเกิน8589}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน8589} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ9094}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ9094} 
                      <br />
                      {row.ผู้หญิงเกิน9094}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน9094} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ผู้หญิงปกติ95}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงปกติ95} 
                      <br />
                      {row.ผู้หญิงเกิน95}
                      <br />
                      {row.เปอร์เซ็นผู้หญิงเกิน95} 
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.รวมทั้งหมดผู้หญิงปกติ} 
                      <br /> 
                      {row.เปอร์เซ็นต์รวมทั้งหมดผู้หญิงปกติ} 
                      <br />
                      {row.รวมทั้งหมดผู้หญิงเกิน} 
                      <br />
                      {row.เปอร์เซ็นต์รวมทั้งหมดผู้หญิงเกิน} 
                      
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
          )}
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart9() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามเส้นรอบเอว ช่วงอายุ เพศ และชุมชน
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
