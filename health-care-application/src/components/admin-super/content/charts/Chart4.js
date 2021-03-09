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
import Skeleton from '@material-ui/lab/Skeleton';
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart4 } from "../../../../actions/charts.action";
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
  ชุมชน,
  การมีผู้ดูแล, //ไม่มี
  เปอร์เซ็นต์การมีผู้ดูแล,
  มีผู้ดูแล, //มี
  เปอร์เซ็นต์มีผู้ดูแล,
  บุตรชายหรือบุตรสาว,
  เปอร์เซ็นต์บุตรชายหรือบุตรสาว,
  ลูกเขยหรือลูกสะใภ้,
  เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้,
  หลานชายหรือหลานสาว,
  เปอร์เซ็นต์หลานชายหรือหลานสาว,
  พี่น้อง,
  เปอร์เซ็นต์พี่น้อง,
  บิดาหรือมารดา,
  เปอร์เซ็นต์บิดาหรือมารดา,
  สามีหรือภรรยา,
  เปอร์เซ็นต์สามีหรือภรรยา,
  บุคคลอื่น,
  เปอร์เซ็นต์บุคคลอื่น
) {
  return {
    ชุมชน,
    การมีผู้ดูแล, //ไม่มี
    เปอร์เซ็นต์การมีผู้ดูแล,
    มีผู้ดูแล, //มี
    เปอร์เซ็นต์มีผู้ดูแล,
    บุตรชายหรือบุตรสาว,
    เปอร์เซ็นต์บุตรชายหรือบุตรสาว,
    ลูกเขยหรือลูกสะใภ้,
    เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้,
    หลานชายหรือหลานสาว,
    เปอร์เซ็นต์หลานชายหรือหลานสาว,
    พี่น้อง,
    เปอร์เซ็นต์พี่น้อง,
    บิดาหรือมารดา,
    เปอร์เซ็นต์บิดาหรือมารดา,
    สามีหรือภรรยา,
    เปอร์เซ็นต์สามีหรือภรรยา,
    บุคคลอื่น,
    เปอร์เซ็นต์บุคคลอื่น,
  };
}
const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const chart4Reducer = useSelector(({ chart4Reducer }) => chart4Reducer);
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
  } = chart4Reducer.results;
  
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
    if (chart4Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        rows.push(
          createData(
            Object.keys(chart4Reducer.results)[i],
            communi[i].Alone,
            communi[i].PerAlone === "NaN" ? "0" : communi[i].PerAlone,
            communi[i].NotAlone.SumNotAlone,
            communi[i].PerNotAlone.PerSumNotAlone === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerSumNotAlone,
            communi[i].NotAlone.Child,
            communi[i].PerNotAlone.PerChild === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerChild,
            communi[i].NotAlone.SonInLaw,
            communi[i].PerNotAlone.PerSonInLaw === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerSonInLaw,
            communi[i].NotAlone.GrandChild,
            communi[i].PerNotAlone.PerGrandChild === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerGrandChild,
            communi[i].NotAlone.Sibling,
            communi[i].PerNotAlone.PerSibling === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerSibling,
            communi[i].NotAlone.Parent,
            communi[i].PerNotAlone.PerParent === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerParent,
            communi[i].NotAlone.Partner,
            communi[i].PerNotAlone.PerPartner === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerPartner,
            communi[i].NotAlone.Other,
            communi[i].PerNotAlone.PerOther === "NaN"
              ? "0"
              : communi[i].PerNotAlone.PerOther
          )
        );
      }
    }
    console.log("row ", rows);
    console.log("row length ", rows.length);
    setOpen(rows.length);
  }, [chart4Reducer.isFetching]);
 

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
          filename={"จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน.csv"}
          >          
          ดาวน์โหลดรายงาน 
          </CSVLink>
        </div>


        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={5}>
                    จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและไม่มีผู้ดูแลของแต่ละชุมชน
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">ชุมชน</StyledTableCell>
                  <StyledTableCell align="center">ไม่มี</StyledTableCell>
                  <StyledTableCell align="center">เปอร์เซ็นต์</StyledTableCell>
                  <StyledTableCell align="center">มี</StyledTableCell>
                  <StyledTableCell align="center">เปอร์เซ็นต์</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart4Reducer.isFetching === false ?
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                :rows).map((row) => (
                  <StyledTableRow key={row.ชุมชน}>
                    <StyledTableCell component="th" scope="row">
                      {row.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.การมีผู้ดูแล}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.เปอร์เซ็นต์การมีผู้ดูแล} %
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.มีผู้ดูแล}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.เปอร์เซ็นต์มีผู้ดูแล} %
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
                  colSpan={5}
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
        
          <br/>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={10}>
                    จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแล
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell align="center">
                    <strong>ชุมชน</strong>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    จำนวน/เปอร์เซ็นต์
                  </StyledTableCell>
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">
                    บุตรชาย/บุตรสาว
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    ลูกเขย/ลูกสะใภ้
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    หลานชาย/หลานสาว
                  </StyledTableCell>
                  <StyledTableCell align="center">พี่น้อง</StyledTableCell>
                  <StyledTableCell align="center">บิดา/มารดา</StyledTableCell>
                  <StyledTableCell align="center">สามี/ภรรยา</StyledTableCell>
                  <StyledTableCell align="center">บุคคลอื่น</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart4Reducer.isFetching === false ?
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
                    <StyledTableCell align="center">&nbsp;</StyledTableCell>

                    <StyledTableCell align="right">
                      {row.บุตรชายหรือบุตรสาว}
                      <br />
                      {row.เปอร์เซ็นต์บุตรชายหรือบุตรสาว} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.ลูกเขยหรือลูกสะใภ้}
                      <br />
                      {row.เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.หลานชายหรือหลานสาว}
                      <br />
                      {row.เปอร์เซ็นต์หลานชายหรือหลานสาว} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.พี่น้อง}
                      <br />
                      {row.เปอร์เซ็นต์พี่น้อง} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.บิดาหรือมารดา}
                      <br />
                      {row.เปอร์เซ็นต์บิดาหรือมารดา} %
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.สามีหรือภรรยา}
                      <br />
                      {row.เปอร์เซ็นต์สามีหรือภรรยา} %
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.บุคคลอื่น}
                      <br />
                      {row.เปอร์เซ็นต์บุคคลอื่น} %
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
                  colSpan={10}
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

export default function Chart4() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน
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
