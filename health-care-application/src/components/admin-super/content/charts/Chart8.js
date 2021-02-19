import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
} from "@material-ui/core";
import { Chart } from "react-google-charts";
import {
  TREATMENT,
  PRINT_THIS_SECTION,
  COMMUNITYS,
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
  

  return (    
  <React.Fragment>
    <div className="card-body">
    <div className="csv-link">
      <CSVLink 
      data={rows} 
      filename={"จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษาและชุมชน.csv"}
      > 
      Download CSV 
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
                <StyledTableCell>ชุมชน&nbsp;</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">เบิกต้นสังกัด</StyledTableCell>
                <StyledTableCell align="center">ชำระเงินเอง</StyledTableCell>
                <StyledTableCell align="center">บัตรทอง</StyledTableCell>
                <StyledTableCell align="center">บัตรผู้พิการ</StyledTableCell>
                <StyledTableCell align="center">บัตรประกันสังคม</StyledTableCell>
                <StyledTableCell align="center">อื่นๆ</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">รวม</StyledTableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
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
                  <StyledTableCell>&nbsp;</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.รวม}
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

export default function Chart8() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">CH8
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามสิทธิการรักษา และชุมชน
          </h3>
          <div className="card-tools">
            <button
              type="button"
              className="btn btn-tool"
              data-card-widget="collapse"
            >
              <i className="fas fa-minus"></i>
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
