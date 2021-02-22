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
  ช่วงอายุ,
  ปกติกลุ่ม1เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม1เพศชาย,
  ปกติกลุ่ม1เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม1เพศหญิง,
  ปกติกลุ่ม1รวม,
  เปอร์เซ็นต์ปกติกลุ่ม1รวม,

  ปกติกลุ่ม2เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม2เพศชาย,
  ปกติกลุ่ม2เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม2เพศหญิง,
  ปกติกลุ่ม2รวม,
  เปอร์เซ็นต์ปกติกลุ่ม2รวม,

  ปกติกลุ่ม3เพศชาย,
  เปอร์เซ็นต์ปกติกลุ่ม3เพศชาย,
  ปกติกลุ่ม3เพศหญิง,
  เปอร์เซ็นต์ปกติกลุ่ม3เพศหญิง,
  ปกติกลุ่ม3รวม,
  เปอร์เซ็นต์ปกติกลุ่ม3รวม,

  ผิดปกติกลุ่ม1เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศชาย,
  ผิดปกติกลุ่ม1เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศหญิง,
  ผิดปกติกลุ่ม1รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม1รวม,

  ผิดปกติกลุ่ม2เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศชาย,
  ผิดปกติกลุ่ม2เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศหญิง,
  ผิดปกติกลุ่ม2รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม2รวม,

  ผิดปกติกลุ่ม3เพศชาย,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศชาย,
  ผิดปกติกลุ่ม3เพศหญิง,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศหญิง,
  ผิดปกติกลุ่ม3รวม,
  เปอร์เซ็นต์ผิดปกติกลุ่ม3รวม
) {
  return {
    ช่วงอายุ,
    ปกติกลุ่ม1เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม1เพศชาย,
    ปกติกลุ่ม1เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม1เพศหญิง,
    ปกติกลุ่ม1รวม,
    เปอร์เซ็นต์ปกติกลุ่ม1รวม,

    ปกติกลุ่ม2เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม2เพศชาย,
    ปกติกลุ่ม2เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม2เพศหญิง,
    ปกติกลุ่ม2รวม,
    เปอร์เซ็นต์ปกติกลุ่ม2รวม,

    ปกติกลุ่ม3เพศชาย,
    เปอร์เซ็นต์ปกติกลุ่ม3เพศชาย,
    ปกติกลุ่ม3เพศหญิง,
    เปอร์เซ็นต์ปกติกลุ่ม3เพศหญิง,
    ปกติกลุ่ม3รวม,
    เปอร์เซ็นต์ปกติกลุ่ม3รวม,

    ผิดปกติกลุ่ม1เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศชาย,
    ผิดปกติกลุ่ม1เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1เพศหญิง,
    ผิดปกติกลุ่ม1รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม1รวม,

    ผิดปกติกลุ่ม2เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศชาย,
    ผิดปกติกลุ่ม2เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2เพศหญิง,
    ผิดปกติกลุ่ม2รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม2รวม,

    ผิดปกติกลุ่ม3เพศชาย,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศชาย,
    ผิดปกติกลุ่ม3เพศหญิง,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3เพศหญิง,
    ผิดปกติกลุ่ม3รวม,
    เปอร์เซ็นต์ผิดปกติกลุ่ม3รวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart37Reducer = useSelector(({ chart37Reducer }) => chart37Reducer);
  const dispatch = useDispatch();
  const {
    a6064,
    a6569,
    a7074,
    a7579,
    a8084,
    a8589,
    a9094,
    a95,
  } = chart37Reducer.results;
  const ageRange = [a6064, a6569, a7074, a7579, a8084, a8589, a9094, a95];
  const [rows, setRow] = useState([]);
  React.useEffect(() => {
    console.log("ageRange.length ", ageRange);
    if (chart37Reducer.isFetching === false) {
      for (let i = 0; i < ageRange.length; i++) {
                    console.log("ageRange.length ", ageRange);
        rows.push(
          createData(
            i < 7
              ? Object.keys(chart37Reducer.results)[i].substring(1, 3) +
                  "-" +
                  Object.keys(chart37Reducer.results)[i].substring(3)
              : Object.keys(chart37Reducer.results)[i].substring(1, 3) + "+",
            ageRange[i].NotRisk.g1.Male,
            ageRange[i].NotRisk.g1.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerMale,
            ageRange[i].NotRisk.g1.Female,
            ageRange[i].NotRisk.g1.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerFemale,
            ageRange[i].NotRisk.g1.Sum,
            ageRange[i].NotRisk.g1.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g1.PerSum,

            ageRange[i].NotRisk.g2.Male,
            ageRange[i].NotRisk.g2.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerMale,
            ageRange[i].NotRisk.g2.Female,
            ageRange[i].NotRisk.g2.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerFemale,
            ageRange[i].NotRisk.g2.Sum,
            ageRange[i].NotRisk.g2.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g2.PerSum,

            ageRange[i].NotRisk.g3.Male,
            ageRange[i].NotRisk.g3.PerMale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerMale,
            ageRange[i].NotRisk.g3.Female,
            ageRange[i].NotRisk.g3.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerFemale,
            ageRange[i].NotRisk.g3.Sum,
            ageRange[i].NotRisk.g3.PerSum === "NaN"
              ? "0%"
              : ageRange[i].NotRisk.g3.PerSum,

            //
            ageRange[i].Risk.g1.Male,
            ageRange[i].Risk.g1.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerMale,
            ageRange[i].Risk.g1.Female,
            ageRange[i].Risk.g1.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerFemale,
            ageRange[i].Risk.g1.Sum,
            ageRange[i].Risk.g1.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g1.PerSum,

            ageRange[i].Risk.g2.Male,
            ageRange[i].Risk.g2.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerMale,
            ageRange[i].Risk.g2.Female,
            ageRange[i].Risk.g2.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerFemale,
            ageRange[i].Risk.g2.Sum,
            ageRange[i].Risk.g2.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g2.PerSum,

            ageRange[i].Risk.g3.Male,
            ageRange[i].Risk.g3.PerMale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerMale,
            ageRange[i].Risk.g3.Female,
            ageRange[i].Risk.g3.PerFemale === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerFemale,
            ageRange[i].Risk.g3.Sum,
            ageRange[i].Risk.g3.PerSum === "NaN"
              ? "0%"
              : ageRange[i].Risk.g3.PerSum
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
                  <StyledTableCell align="left" rowSpan={2}>
                    อายุ
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={3}>
                    ปกติ
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={4}>
                    ผิดปกติ
                  </StyledTableCell>
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
                  <StyledTableRow key={row.ช่วงอายุ}>
                    <StyledTableCell component="th" scope="row">
                      {row.ช่วงอายุ}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ชาย <br /> หญิง
                      <br />
                      รวม
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ปกติกลุ่ม1เพศชาย}
                      <br />
                      {row.ปกติกลุ่ม1เพศหญิง}
                      <br />
                      {row.ปกติกลุ่ม1รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ปกติกลุ่ม2เพศชาย}
                      <br />
                      {row.ปกติกลุ่ม2เพศหญิง}
                      <br />
                      {row.ปกติกลุ่ม2รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ปกติกลุ่ม3เพศชาย}
                      <br />
                      {row.ปกติกลุ่ม3เพศหญิง}
                      <br />
                      {row.ปกติกลุ่ม3รวม}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      {row.ผิดปกติกลุ่ม1เพศชาย}
                      <br />
                      {row.ผิดปกติกลุ่ม1เพศหญิง}
                      <br />
                      {row.ผิดปกติกลุ่ม1รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผิดปกติกลุ่ม2เพศชาย}
                      <br />
                      {row.ผิดปกติกลุ่ม2เพศหญิง}
                      <br />
                      {row.ผิดปกติกลุ่ม2รวม}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.ผิดปกติกลุ่ม3เพศชาย}
                      <br />
                      {row.ผิดปกติกลุ่ม3เพศหญิง}
                      <br />
                      {row.ผิดปกติกลุ่ม3รวม}
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
