import React, { useEffect, useState } from "react";
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
  Checkbox,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart23 } from "../../../../actions/charts.action";

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
  ช่วงอายุ,
  เสี่ยงเพศชาย,
  เปอร์เซ็นต์เสี่ยงเพศชาย,
  เสี่ยงสูงเพศชาย,
  เปอร์เซ็นต์เสี่ยงสูงเพศชาย,
  เสี่ยงสูงมากเพศชาย,
  เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย,
  รวมเพศชาย,
  เปอร์เซ็นต์รวมเพศชาย,
  เสี่ยงเพศหญิง,
  เปอร์เซ็นต์เสี่ยงเพศหญิง,
  เสี่ยงสูงเพศหญิง,
  เปอร์เซ็นต์เสี่ยงสูงเพศหญิง,
  เสี่ยงสูงมากเพศหญิง,
  เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง,
  รวมเพศหญิง,
  เปอร์เซ็นต์รวมเพศหญิง,
  เสี่ยงรวม,
  เปอร์เซ็นต์เสี่ยงรวม,
  เสี่ยงสูงรวม,
  เปอร์เซ็นต์เสี่ยงสูงรวม,
  เสี่ยงสูงมากรวม,
  เปอร์เซ็นต์เสี่ยงสูงมากรวม,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมด
) {
  return {
    ช่วงอายุ,
    เสี่ยงเพศชาย,
    เปอร์เซ็นต์เสี่ยงเพศชาย,
    เสี่ยงสูงเพศชาย,
    เปอร์เซ็นต์เสี่ยงสูงเพศชาย,
    เสี่ยงสูงมากเพศชาย,
    เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย,
    รวมเพศชาย,
    เปอร์เซ็นต์รวมเพศชาย,
    เสี่ยงเพศหญิง,
    เปอร์เซ็นต์เสี่ยงเพศหญิง,
    เสี่ยงสูงเพศหญิง,
    เปอร์เซ็นต์เสี่ยงสูงเพศหญิง,
    เสี่ยงสูงมากเพศหญิง,
    เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง,
    รวมเพศหญิง,
    เปอร์เซ็นต์รวมเพศหญิง,
    เสี่ยงรวม,
    เปอร์เซ็นต์เสี่ยงรวม,
    เสี่ยงสูงรวม,
    เปอร์เซ็นต์เสี่ยงสูงรวม,
    เสี่ยงสูงมากรวม,
    เปอร์เซ็นต์เสี่ยงสูงมากรวม,
    รวมทั้งหมด,
    เปอร์เซ็นต์รวมทั้งหมด,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const chart23Reducer = useSelector(({ chart23Reducer }) => chart23Reducer);
  const [row, setRow] = React.useState([]);
  const dispatch = useDispatch();
  const {
    g6064,
    g6569,
    g7074,
    g7579,
    g8084,
    g8589,
    g9094,
    g95,
  } = chart23Reducer.results;
  
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedG: true,
  });
  const [openPaper, setopenPaper] = React.useState(false);
  const handleChange = (event) => {
    console.log(event.target.checked, event.target.name);
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const toggleChecked = () => {
    setopenPaper((prev) => !prev);
  };
  const [label, setLabel] = React.useState("");
  React.useEffect(()=>{
    if(state.checkedA&&state.checkedB&&state.checkedC){
      setLabel("ของทั้งหมด (ชาย หญิง รวม)")
    } else if(state.checkedA&&state.checkedB){
      setLabel("ของชายและหญิง")
    } else if(state.checkedA&&state.checkedC){
      setLabel("ของชายและรวม")
    } else if(state.checkedB&&state.checkedC){
      setLabel("ของหญิงและรวม")
    } else if(state.checkedA){
      setLabel("ของชาย")
    } else if(state.checkedB){
      setLabel("ของหญิง")
    } else if(state.checkedC){
      setLabel("ของทั้งหมด")
    } else {
      setLabel("ของทั้งหมด")
    }
  },[state.checkedA,state.checkedB,state.checkedC])

  const listAge = [g6064, g6569, g7074, g7579, g8084, g8589, g9094, g95];
  React.useEffect(() => {
    if (chart23Reducer.isFetching === false) {
      for (let i = 0; i < listAge.length; i++) {
        row.push(
          creactData(
            i < 7
              ? Object.keys(chart23Reducer.results)[i].substring(1, 3) +
                  "-" +
                  Object.keys(chart23Reducer.results)[i].substring(3)
              : Object.keys(chart23Reducer.results)[i].substring(1, 3) + "+",
            listAge[i].Male.Risk,
            listAge[i].Male.PerRisk==="NaN" ? "0%" : listAge[i].Male.PerRisk+"%",
            listAge[i].Male.RiskII,
            listAge[i].Male.PerRiskII === "NaN" ? "0%" : listAge[i].Male.PerRiskII+"%",
            listAge[i].Male.RiskIII,
            listAge[i].Male.PerRiskIII === "NaN" ? "0%" : listAge[i].Male.PerRiskIII+"%",
            listAge[i].Male.Sum,
            listAge[i].Male.PerSum === "NaN" ? "0%" : listAge[i].Male.PerSum+"%",
            listAge[i].Female.Risk,
            listAge[i].Female.PerRisk === "NaN" ? "0%" : listAge[i].Female.PerRisk+"%",
            listAge[i].Female.RiskII,
            listAge[i].Female.PerRiskII === "NaN" ? "0%" : listAge[i].Female.PerRiskII+"%",
            listAge[i].Female.RiskIII,
            listAge[i].Female.PerRiskIII === "NaN"
              ? "0%"
              : listAge[i].Female.PerRiskIII+"%",
            listAge[i].Female.Sum,
            listAge[i].Female.PerSum === "NaN" ? "0%" : listAge[i].Female.PerSum+"%",
            listAge[i].ElderCardio.Risk,
            listAge[i].ElderCardio.PerRisk === "NaN" ? "0%" : listAge[i].ElderCardio.PerRisk+"%",
            listAge[i].ElderCardio.RiskII,
            listAge[i].ElderCardio.PerRiskII === "NaN"
              ? "0%"
              : listAge[i].ElderCardio.PerRiskII+"%",
            listAge[i].ElderCardio.RiskIII,
            listAge[i].ElderCardio.PerRiskIII === "NaN"
              ? "0%"
              : listAge[i].ElderCardio.PerRiskIII+"%",
            listAge[i].ElderCardio.Sum,
            listAge[i].ElderCardio.PerSum === "NaN" ? "0%" : listAge[i].ElderCardio.PerSum+"%"
          )
        );
      }
    }
    console.log("row ", row);
    setOpen1(row.length);
  }, [chart23Reducer.isFetching]);
  
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามเพศและช่วงอายุ.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
        <div className="">
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            color="primary"
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          ชาย
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          หญิง
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            color="primary"
            name="checkedC"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          รวม
          <Checkbox
            checked={openPaper}
            onChange={toggleChecked}
            color="primary"
            name="checkedC"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          เปอร์เซ็นต์
        </div>
      </div>

      <div ref={ref} className="report-container">
        {openPaper === false ? (
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={6} >
                จำนวน{openPaper&&"ร้อยละ"}ของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามช่วงอายุและเพศ{label}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="left">ช่วงอายุ</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="center">เสี่ยง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูงมาก</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chart23Reducer.isFetching === false 
              ? row.map((value) => {
                return (
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      {value.ช่วงอายุ}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            "ชาย"
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            "หญิง"
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            "รวม"
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              ชาย
                              <br />
                              รวม
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เสี่ยง}<br />{value.เปอร์เซ็นต์เสี่ยง}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เสี่ยงเพศชาย}
                              <br />
                              {value.เสี่ยงเพศหญิง}
                              <br />
                              {value.เสี่ยงรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เสี่ยงเพศชาย}
                              <br />
                              {value.เสี่ยงเพศหญิง}
                              <br />
                              {value.เสี่ยงรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เสี่ยงรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงเพศหญิง}
                              <br />
                              {value.เสี่ยงรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เสี่ยงเพศชาย}
                              <br />
                              {value.เสี่ยงรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงเพศชาย}
                              <br />
                              {value.เสี่ยงเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เสี่ยงสูง}<br />{value.เปอร์เซ็นต์เสี่ยงสูง}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงสูงเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงสูงเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เสี่ยงสูงรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เสี่ยงสูงเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เสี่ยงสูงมาก}<br />{value.เปอร์เซ็นต์เสี่ยงสูงมาก}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงสูงมากเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เสี่ยงสูงมากเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เสี่ยงสูงมากรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เสี่ยงสูงมากเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.รวม}<br />{value.เปอร์เซ็นต์รวม}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.รวมเพศชาย}
                              <br />
                              {value.รวมเพศหญิง}
                              <br />
                              {value.รวมทั้งหมด}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.รวมเพศชาย}
                              <br />
                              {value.รวมเพศหญิง}
                              <br />
                              {value.รวมทั้งหมด}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.รวมเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.รวมเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.รวมทั้งหมด
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.รวมเพศหญิง}
                              <br />
                              {value.รวมทั้งหมด}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.รวมเพศชาย}
                              <br />
                              {value.รวมทั้งหมด}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.รวมเพศชาย}
                              <br />
                              {value.รวมเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }): (
                <React.Fragment>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                </React.Fragment>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={6} >
                จำนวน{openPaper&&"ร้อยละ"}ของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามช่วงอายุและเพศ{label}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="left">ช่วงอายุ</StyledTableCell>
                <StyledTableCell align="left">
                 
                </StyledTableCell>
                <StyledTableCell align="center">เสี่ยง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูง</StyledTableCell>
                <StyledTableCell align="center">เสี่ยงสูงมาก</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chart23Reducer.isFetching === false 
              ? row.map((value) => {
                return (
                    <StyledTableRow>
                    <StyledTableCell align="left">
                      {value.ช่วงอายุ}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                    {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            "ชาย"
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            "หญิง"
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            "รวม"
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              หญิง
                              <br />
                              รวม
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              ชาย
                              <br />
                              รวม
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              ชาย
                              <br />
                              หญิง
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เสี่ยง}<br />{value.เปอร์เซ็นต์เสี่ยง}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เปอร์เซ็นต์เสี่ยงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เปอร์เซ็นต์เสี่ยงรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เปอร์เซ็นต์เสี่ยงสูง}<br />{value.เปอร์เซ็นต์เปอร์เซ็นต์เสี่ยงสูง}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เปอร์เซ็นต์เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เปอร์เซ็นต์เสี่ยงสูงมาก}<br />{value.เปอร์เซ็นต์เปอร์เซ็นต์เสี่ยงสูงมาก}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                             {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เปอร์เซ็นต์เสี่ยงสูงมากรวม
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากรวม}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์เสี่ยงสูงมากเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* {value.เปอร์เซ็นต์รวม}<br />{value.เปอร์เซ็นต์เปอร์เซ็นต์รวม}% */}
                      {state.checkedA === true &&
                          state.checkedB === true &&
                          state.checkedC === true ? (
                            <div>
                              {value.เปอร์เซ็นต์รวมเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์รวมเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์รวมทั้งหมด}
                            </div>
                          ) : state.checkedA === false &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            <div>
                              {value.เปอร์เซ็นต์รวมเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์รวมเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์รวมทั้งหมด}
                            </div>
                          ) : state.checkedA === true &&
                            state.checkedB === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์รวมเพศชาย
                          ) : state.checkedB === true &&
                            state.checkedA === false &&
                            state.checkedC === false ? (
                            value.เปอร์เซ็นต์รวมเพศหญิง
                          ) : state.checkedC === true &&
                            state.checkedA === false &&
                            state.checkedB === false ? (
                            value.เปอร์เซ็นต์รวมทั้งหมด
                          ) : state.checkedA === false &&
                            state.checkedC === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์รวมเพศหญิง}
                              <br />
                              {value.เปอร์เซ็นต์รวมทั้งหมด}
                            </div>
                          ) : state.checkedB === false &&
                            state.checkedC === true &&
                            state.checkedA === true ? (
                            <div>
                              {value.เปอร์เซ็นต์รวมเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์รวมทั้งหมด}
                            </div>
                          ) : state.checkedC === false &&
                            state.checkedA === true &&
                            state.checkedB === true ? (
                            <div>
                              {value.เปอร์เซ็นต์รวมเพศชาย}
                              <br />
                              {value.เปอร์เซ็นต์รวมเพศหญิง}
                            </div>
                          ) : (
                            ""
                          )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              }): (
                <React.Fragment>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={6}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                </React.Fragment>
              )}
            </TableBody>
          </Table>
        </TableContainer>
     )}
      </div>
    </div>
  );
});

export default function Chart23() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงต่อโรคหัวใจและหลอดเลือดจำแนกตามเพศและช่วงอายุ
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
