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
  Select,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";
import { getDataChart33 } from "../../../../actions/charts.action";

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
  กลุ่ม1เพศชาย,
  เปอร์เซ็นต์กลุ่ม1เพศชาย,
  กลุ่ม2เพศชาย,
  เปอร์เซ็นตกลุ่ม2เพศชาย,
  กลุ่ม3เพศชาย,
  เปอร์เซ็นต์กลุ่ม3เพศชาย,
  รวมเพศชาย,
  เปอร์เซ็นต์รวมเพศชาย,
  กลุ่ม1เพศหญิง,
  เปอร์เซ็นต์กลุ่ม1เพศหญิง,
  กลุ่ม2เพศหญิง,
  เปอร์เซ็นตกลุ่ม2เพศหญิง,
  กลุ่ม3เพศหญิง,
  เปอร์เซ็นต์กลุ่ม3เพศหญิง,
  รวมเพศหญิง,
  เปอร์เซ็นต์รวมเพศหญิง,
  กลุ่ม1รวมทั้งหมด,
  เปอร์เซ็นต์กลุ่ม1รวมทั้งหมด,
  กลุ่ม2รวมทั้งหมด,
  เปอร์เซ็นตกลุ่ม2รวมทั้งหมด,
  กลุ่ม3รวมทั้งหมด,
  เปอร์เซ็นต์กลุ่ม3รวมทั้งหมด,
  รวมทั้งหมด,
  เปอร์เซ็นต์รวมทั้งหมด
) {
  return {
    ช่วงอายุ,
    กลุ่ม1เพศชาย,
    เปอร์เซ็นต์กลุ่ม1เพศชาย,
    กลุ่ม2เพศชาย,
    เปอร์เซ็นตกลุ่ม2เพศชาย,
    กลุ่ม3เพศชาย,
    เปอร์เซ็นต์กลุ่ม3เพศชาย,
    รวมเพศชาย,
    เปอร์เซ็นต์รวมเพศชาย,
    กลุ่ม1เพศหญิง,
    เปอร์เซ็นต์กลุ่ม1เพศหญิง,
    กลุ่ม2เพศหญิง,
    เปอร์เซ็นตกลุ่ม2เพศหญิง,
    กลุ่ม3เพศหญิง,
    เปอร์เซ็นต์กลุ่ม3เพศหญิง,
    รวมเพศหญิง,
    เปอร์เซ็นต์รวมเพศหญิง,
    กลุ่ม1รวมทั้งหมด,
    เปอร์เซ็นต์กลุ่ม1รวมทั้งหมด,
    กลุ่ม2รวมทั้งหมด,
    เปอร์เซ็นตกลุ่ม2รวมทั้งหมด,
    กลุ่ม3รวมทั้งหมด,
    เปอร์เซ็นต์กลุ่ม3รวมทั้งหมด,
    รวมทั้งหมด,
    เปอร์เซ็นต์รวมทั้งหมด,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(0);
  const [per, setPer] = React.useState(false);
  const [community, setCommunity] = React.useState("ทุกชุมชน");
  const chart33Reducer = useSelector(({ chart33Reducer }) => chart33Reducer);
  const [row, setRow] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(chart33Reducer.isFetching===false){
      for (const key in chart33Reducer.results) {
        if (Object.hasOwnProperty.call(chart33Reducer.results, key)) {
          const element = chart33Reducer.results[key];
          console.log(key+" ",element)
          row.push(creactData(
            key==="g95"?key.substring(1, 3)+"+":key.substring(1, 3)+"-" +key.substring(3),

            element.G1.Male,
            element.G1.PerMale==="NaN"?"0.0":element.G1.PerMale,
            element.G2.Male,
            element.G2.PerMale==="NaN"?"0.0":element.G2.PerMale,
            element.G3.Male,
            element.G3.PerMale==="NaN"?"0.0":element.G3.PerMale,
            element.Summary.Male,
            element.Summary.PerMale==="NaN"?"0.0":element.Summary.PerMale,

            element.G1.Female,
            element.G1.PerFemale==="NaN"?"0.0":element.G1.PerFemale,
            element.G2.Female,
            element.G2.PerFemale==="NaN"?"0.0":element.G2.PerFemale,
            element.G3.Female,
            element.G3.PerFemale==="NaN"?"0.0":element.G3.PerFemale,
            element.Summary.Female,
            element.Summary.PerFemale==="NaN"?"0.0":element.Summary.PerFemale,

            element.G1.Sum,
            element.G1.PerSum==="NaN"?"0.0":element.G1.PerSum,
            element.G2.Sum,
            element.G2.PerSum==="NaN"?"0.0":element.G2.PerSum,
            element.G3.Sum,
            element.G3.PerSum==="NaN"?"0.0":element.G3.PerSum,
            element.Summary.Sum,
            element.Summary.PerSum==="NaN"?"0.0":element.Summary.PerSum,
          ))
        }
      }
    }
    // console.log("row ", row);
    setOpen1(row.length);
  }, [chart33Reducer.isFetching]);
  React.useEffect(() => {
    setRow([]);
  }, [community]);
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart33(e.target.value));
  };
  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
          {open1 !== 0 && (
            <CSVLink
              data={row}
              filename={`จำนวนและร้อยละของผู้สูงอายุจำแนกตามเพศช่วงอายุและระดับความสามารถในการประกอบกิจวัตรประจำวันของ${community}.csv`}
            >
              Download CSV
            </CSVLink>
          )}
        </div>
        <div className="">
        <FormControlLabel
        control={<Switch checked={per} onChange={()=>setPer(!per)} name="checkedA" />}
        label="แสดงแบบร้อยละ"
        />
          เลือกชุมชน &emsp;
          <Select
            native
            open={open}
            onClose={() => false}
            onOpen={() => setOpen(true)}
            value={community}
            onChange={handleChange}
          >
            {COMMUNITYS.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </div>
      </div>

      <div ref={ref} className="report-container">
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
          <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={13}>
                  จำนวน{per&&"ร้อยละ"}ของผู้สูงอายุจำแนกตามเพศช่วงอายุและระดับความสามารถในการประกอบกิจวัตรประจำวันของ{community}
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center" colSpan={1} rowSpan={2} style={{backgroundColor: "#91a2ff"}}>
                  ช่วงอายุ (ปี)
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={4}>
                  เพศชาย
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={4} style={{backgroundColor: "#91a2ff"}} >
                  เพศหญิง
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={4}>
                  รวม
                </StyledTableCell>
              </TableRow>
              <TableRow>
                  <StyledTableCell align="center">กลุ่ม1 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">รวม {per?"":"(คน)"}</StyledTableCell>

                  <StyledTableCell align="center" style={{backgroundColor: "#91a2ff"}}>กลุ่ม1 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor: "#91a2ff"}}>กลุ่ม2 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor: "#91a2ff"}}>กลุ่ม3 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center" style={{backgroundColor: "#91a2ff"}}>รวม {per?"":"(คน)"}</StyledTableCell>

                  <StyledTableCell align="center">กลุ่ม1 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม2 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">กลุ่ม3 {per?"":"(คน)"}</StyledTableCell>
                  <StyledTableCell align="center">รวม {per?"":"(คน)"}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {chart33Reducer.isFetching === null 
                ? row.map((v)=>{
                    return (
                    <StyledTableRow>
                      <StyledTableCell align="center">{v.ช่วงอายุ}</StyledTableCell>

                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม1เพศชาย+" %":v.กลุ่ม1เพศชาย}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นตกลุ่ม2เพศชาย+" %":v.กลุ่ม2เพศชาย}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม3เพศชาย+" %":v.กลุ่ม3เพศชาย}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมเพศชาย+" %":v.รวมเพศชาย}</StyledTableCell>
                     
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม1เพศหญิง+" %":v.กลุ่ม1เพศหญิง}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นตกลุ่ม2เพศหญิง+" %":v.กลุ่ม2เพศหญิง}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม3เพศหญิง+" %":v.กลุ่ม3เพศหญิง}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมเพศหญิง+" %":v.รวมเพศหญิง}</StyledTableCell>

                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม1รวมทั้งหมด+" %":v.กลุ่ม1รวมทั้งหมด}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นตกลุ่ม2รวมทั้งหมด+" %":v.กลุ่ม2รวมทั้งหมด}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์กลุ่ม3รวมทั้งหมด+" %":v.กลุ่ม3รวมทั้งหมด}</StyledTableCell>
                      <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมทั้งหมด+" %":v.รวมทั้งหมด}</StyledTableCell>

                    </StyledTableRow>
                    )
                }): (
                <React.Fragment>
                  <StyledTableRow>
                    <StyledTableCell colSpan={13}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={13}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={13}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={13}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell colSpan={13}><Skeleton /></StyledTableCell>
                  </StyledTableRow>
                </React.Fragment>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart33() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      {/* <div className="card card-light collapsed-card"> */}
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุจำแนกตามเพศ ช่วงอายุ
            และระดับความสามารถในการประกอบกิจวัตรประจำวัน
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
