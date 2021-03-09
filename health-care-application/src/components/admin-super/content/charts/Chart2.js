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
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
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
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  topicColumn: {
    fontSize: 20,
  },
});

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
  ผู้ชาย6064,
  ผู้หญิง6064,
  รวม6064,
  ผู้ชาย6569,
  ผู้หญิง6569,
  รวม6569,
  ผู้ชาย7074,
  ผู้หญิง7074,
  รวม7074,
  ผู้ชาย7579,
  ผู้หญิง7579,
  รวม7579,
  ผู้ชาย8084,
  ผู้หญิง8084,
  รวม8084,
  ผู้ชาย8590,
  ผู้หญิง8590,
  รวม8590,
  ผู้ชาย9094,
  ผู้หญิง9094,
  รวม9094,
  ผู้ชาย95,
  ผู้หญิง95,
  รวม95,
  รวมทั้งหมดผู้ชาย,
  รวมทั้งหมดผู้หญิง,
  รวมทั้งหมด,) {
  return { ชุมชน,ผู้ชาย6064,
    ผู้หญิง6064,
    รวม6064,
    ผู้ชาย6569,
    ผู้หญิง6569,
    รวม6569,
    ผู้ชาย7074,
    ผู้หญิง7074,
    รวม7074,
    ผู้ชาย7579,
    ผู้หญิง7579,
    รวม7579,
    ผู้ชาย8084,
    ผู้หญิง8084,
    รวม8084,
    ผู้ชาย8590,
    ผู้หญิง8590,
    รวม8590,
    ผู้ชาย9094,
    ผู้หญิง9094,
    รวม9094,
    ผู้ชาย95,
    ผู้หญิง95,
    รวม95,
    รวมทั้งหมดผู้ชาย,
    รวมทั้งหมดผู้หญิง,
    รวมทั้งหมด, };
}

const ShowChart = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(0);
  const chart2Reducer = useSelector(({ chart2Reducer }) => chart2Reducer);
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
  } = chart2Reducer.results;
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
  ]
  const [row, setRow] = useState([])
  React.useEffect(() => {
    console.log('communi.length ',communi.length)
    if(chart2Reducer.isFetching === false){
    for (let i = 0; i < communi.length; i++) {
      row.push(
        createData(Object.keys(chart2Reducer.results)[i],
          communi[i].g6064.ElderMale,
          communi[i].g6064.ElderFemale,
          communi[i].g6064.Elder,
          communi[i].g6569.ElderMale,
          communi[i].g6569.ElderFemale,
          communi[i].g6569.Elder,
          communi[i].g7074.ElderMale,
          communi[i].g7074.ElderFemale,
          communi[i].g7074.Elder,
          communi[i].g7579.ElderMale,
          communi[i].g7579.ElderFemale,
          communi[i].g7579.Elder,
          communi[i].g8084.ElderMale,
          communi[i].g8084.ElderFemale,
          communi[i].g8084.Elder,
          communi[i].g8589.ElderMale,
          communi[i].g8589.ElderFemale,
          communi[i].g8589.Elder,
          communi[i].g9094.ElderMale,
          communi[i].g9094.ElderFemale,
          communi[i].g9094.Elder,
          communi[i].g95.ElderMale,
          communi[i].g95.ElderFemale,
          communi[i].g95.Elder,
          communi[i].summary.ElderMale,
          communi[i].summary.ElderFemale,
          communi[i].summary.Elder,
        )
      )
    }
  }
    console.log('row ',row)
    console.log('row length ',row.length)
    setOpen(row.length)
  }, [chart2Reducer.isFetching])

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
          {
            open!==0 && 
              <CSVLink
                data={row}
                filename={
                  "จำนวนประชากรผู้สูงอายุแจกแจงตามช่วงอายุเพศและชุมชน.csv"
                }
              >
                ดาวน์โหลดรายงาน
              </CSVLink>
          }
            
          </div>
        <div ref={ref}>
          <TableContainer component={Paper}>
            <Table className="table-report" aria-label="customized table">
              <TableHead>
              <TableRow>
                  <StyledTableCell align="center" colSpan={11}>จำนวนประชากรผู้สูงอายุแจกแจงตามช่วงอายุเพศและชุมชน</StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell >ชุมชน</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                  <StyledTableCell align="right">60-64</StyledTableCell>
                  <StyledTableCell align="right">65-69</StyledTableCell>
                  <StyledTableCell align="right">70-74</StyledTableCell>
                  <StyledTableCell align="right">75-79</StyledTableCell>
                  <StyledTableCell align="right">80-84</StyledTableCell>
                  <StyledTableCell align="right">85-89</StyledTableCell>
                  <StyledTableCell align="right">90-94</StyledTableCell>
                  <StyledTableCell align="right">95+</StyledTableCell>
                  <StyledTableCell align="right">รวม</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {chart2Reducer.isFetching === false ?
              (rowsPerPage > 0
                ? row.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : row).map((value) => {
                  return (
                    <StyledTableRow>
                      <StyledTableCell>{value.ชุมชน}</StyledTableCell>
                      <StyledTableCell>
                        ชาย <br/> หญิง <br/> รวม
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย6064}<br/>
                        {value.ผู้หญิง6064}<br/>
                        {value.รวม6064}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย6569}<br/>
                        {value.ผู้หญิง6569}<br/>
                        {value.รวม6569}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย7074}<br/>
                        {value.ผู้หญิง7074}<br/>
                        {value.รวม7074}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย7579}<br/>
                        {value.ผู้หญิง7579}<br/>
                        {value.รวม7579}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย8084}<br/>
                        {value.ผู้หญิง8084}<br/>
                        {value.รวม8084}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย8590}<br/>
                        {value.ผู้หญิง8590}<br/>
                        {value.รวม8590}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย9094}<br/>
                        {value.ผู้หญิง9094}<br/>
                        {value.รวม9094}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.ผู้ชาย95}<br/>
                        {value.ผู้หญิง95}<br/>
                        {value.รวม95}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {value.รวมทั้งหมดผู้ชาย}<br/>
                        {value.รวมทั้งหมดผู้หญิง}<br/>
                        {value.รวมทั้งหมด}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                }): <React.Fragment>
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
    </React.Fragment>
  );
});

export default function Chart2() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนประชากรผู้สูงอายุแจกแจงตามช่วงอายุ เพศ และชุมชน
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
