import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
import Skeleton from "@material-ui/lab/Skeleton";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart22 } from "../../../../actions/charts.action";

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

function creactData(
  ชุมชน,
  เสี่ยง,
  เปอร์เซ็นต์เสี่ยง,
  เสี่ยงสูง,
  เปอร์เซ็นต์เสี่ยงสูง,
  เสี่ยงสูงมาก,
  เปอร์เซ็นต์เสี่ยงสูงมาก,
  รวม,
  เปอร์เซ็นต์รวม
) {
  return {
    ชุมชน,
    เสี่ยง,
    เปอร์เซ็นต์เสี่ยง,
    เสี่ยงสูง,
    เปอร์เซ็นต์เสี่ยงสูง,
    เสี่ยงสูงมาก,
    เปอร์เซ็นต์เสี่ยงสูงมาก,
    รวม,
    เปอร์เซ็นต์รวม
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const chart22Reducer = useSelector(({ chart22Reducer }) => chart22Reducer);
  const [row, setRow] = React.useState([]);
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
  } = chart22Reducer.results;
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
  React.useEffect(() => {
    if (chart22Reducer.isFetching === false) {
      for (let i = 0; i < communi.length; i++) {
        row.push(
          creactData(
            Object.keys(chart22Reducer.results)[i],
            communi[i].Risk,
            communi[i].PerRisk==="NaN"?"0":communi[i].PerRisk,
            communi[i].RiskII,
            communi[i].PerRiskII==="NaN"?"0":communi[i].PerRiskII,
            communi[i].RiskIII,
            communi[i].PerRiskIII==="NaN"?"0":communi[i].PerRiskIII,
            communi[i].ElderCardio,
            communi[i].PerElderCardio==="NaN"?"0":communi[i].PerElderCardio
          )
        );
      }
    }
    console.log("row ", row);
    setOpen1(row.length);
  }, [chart22Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart22(e.target.value));
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามชุมชน.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
      </div>

      <div ref={ref} className="report-container">
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
            <TableRow>
              <StyledTableCell align="center" colSpan={6} >
              จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามชุมชน
              </StyledTableCell>
            </TableRow>
              <TableRow>
                <StyledTableCell align="left">ชุมชน</StyledTableCell>
                <StyledTableCell align="left">จำนวน/เปอร์เซ็นต์</StyledTableCell>
                <StyledTableCell align="center">เสี่ยง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูงมาก</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chart22Reducer.isFetching===false ?
              row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      {value.ชุมชน}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      จำนวน<br />เปอร์เซ็นต์
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.เสี่ยง}<br />{value.เปอร์เซ็นต์เสี่ยง}%
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.เสี่ยงสูง}<br />{value.เปอร์เซ็นต์เสี่ยงสูง}%
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {value.เสี่ยงสูงมาก}<br />{value.เปอร์เซ็นต์เสี่ยงสูงมาก}%
                    </StyledTableCell>
                    <StyledTableCell align="center" >
                      {value.รวม}<br />{value.เปอร์เซ็นต์รวม}%
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })
              : <React.Fragment>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={6}> <Skeleton/> </StyledTableCell></StyledTableRow>
                </React.Fragment>
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart22() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามชุมชน
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
