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
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
// import { getDataChart9 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  กลุ่ม1,
  เปอร์เซ็นต์กลุ่ม1,
  กลุ่ม2,
  เปอร์เซ็นต์กลุ่ม2,
  กลุ่ม3,
  เปอร์เซ็นต์กลุ่ม3,
  รวม
) {
  return {
    ชุมชน,
    กลุ่ม1,
    เปอร์เซ็นต์กลุ่ม1,
    กลุ่ม2,
    เปอร์เซ็นต์กลุ่ม2,
    กลุ่ม3,
    เปอร์เซ็นต์กลุ่ม3,
    รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
  const [openPaper, setopenPaper] = React.useState(false);
  const [genderLabel, setGenderLabel] = React.useState("เพศชาย");
  const chart32Reducer = useSelector(({ chart32Reducer }) => chart32Reducer);
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
  } = chart32Reducer.results;
  const dispatch = useDispatch();

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
    if (chart32Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart32Reducer.results)[i],
            communi[i].G1,
            communi[i].G1Per === "NaN" ? "0%" : communi[i].G1Per + "%",
            communi[i].G2,
            communi[i].G2Per === "NaN" ? "0%" : communi[i].G2Per + "%",
            communi[i].G3,
            communi[i].G3Per === "NaN" ? "0%" : communi[i].G3Per + "%",
            communi[i].Sum
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart32Reducer.isFetching]);

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
        <div className="row justify-content-between csv-link-select">
          <CSVLink
            data={rows}
            filename={
              "จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับความสามารถในการประกอบกิจวัตรประจำวันและชุมชน.csv"
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
                  <StyledTableCell align="center" colSpan={12}>
                    จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับความสามารถในการประกอบกิจวัตรประจำวันและชุมชน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="left">
                    ชุมชน
                  </StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม1</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3</StyledTableCell>
                  <StyledTableCell align="center">รวม</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart32Reducer.isFetching === false 
                ?rows.map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      จำนวน
                      <br />
                      เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.กลุ่ม1}
                      <br />
                      {row.เปอร์เซ็นต์กลุ่ม1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.กลุ่ม2}
                      <br />
                      {row.เปอร์เซ็นต์กลุ่ม2}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.กลุ่ม3}
                      <br />
                      {row.เปอร์เซ็นต์กลุ่ม3}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.รวม}</StyledTableCell>
                  </StyledTableRow>
                )): (
                  <React.Fragment>
                    <StyledTableRow>
                      <StyledTableCell colSpan={12}><Skeleton /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan={12}><Skeleton /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan={12}><Skeleton /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan={12}><Skeleton /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan={12}><Skeleton /></StyledTableCell>
                    </StyledTableRow>
                  </React.Fragment>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </React.Fragment>
  );
});

export default function Chart32() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามระดับความสามารถในการประกอบกิจวัตรประจำวันและชุมชน
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
