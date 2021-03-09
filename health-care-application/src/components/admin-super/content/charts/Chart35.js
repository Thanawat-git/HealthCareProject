import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { getDataChart14 } from "../../../../actions/charts.action";
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
  Switch,
  FormControlLabel
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
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

function createData(
  ช่วงอายุ,
  ชายปกติ,
  เปอร์เซ็นต์ชายปกติ,
  ชายผิดปกติ,
  เปอร์เซ็นต์ชายผิดปกติ,
  ชายรวม,
  เปอร์เซ็นต์ชายรวม,
  หญิงปกติ,
  เปอร์เซ็นต์หญิงปกติ,
  หญิงผิดปกติ,
  เปอร์เซ็นต์หญิงผิดปกติ,
  หญิงรวม,
  เปอร์เซ็นต์หญิงรวม,
  รวมทั้งหมดปกติ,
  เปอร์เซ็นต์รวมทั้งหมดปกติ,
  รวมทั้งหมดผิดปกติ,
  เปอร์เซ็นต์รวมทั้งหมดผิดปกติ,
  รวมทั้งหมดรวม,
  เปอร์เซ็นต์รวมทั้งหมดรวม
) {
  return {
    ช่วงอายุ,
    ชายปกติ,
    เปอร์เซ็นต์ชายปกติ,
    ชายผิดปกติ,
    เปอร์เซ็นต์ชายผิดปกติ,
    ชายรวม,
    เปอร์เซ็นต์ชายรวม,
    หญิงปกติ,
    เปอร์เซ็นต์หญิงปกติ,
    หญิงผิดปกติ,
    เปอร์เซ็นต์หญิงผิดปกติ,
    หญิงรวม,
    เปอร์เซ็นต์หญิงรวม,
    รวมทั้งหมดปกติ,
    เปอร์เซ็นต์รวมทั้งหมดปกติ,
    รวมทั้งหมดผิดปกติ,
    เปอร์เซ็นต์รวมทั้งหมดผิดปกติ,
    รวมทั้งหมดรวม,
    เปอร์เซ็นต์รวมทั้งหมดรวม,
  };
}

const ShowChart = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [per, setPer] = React.useState(false);
  const [row, setRow] = React.useState([]);
  const chart35Reducer = useSelector(({ chart35Reducer }) => chart35Reducer);
  const { Alzheimer } = chart35Reducer.results;

  React.useEffect(() => {
    if (chart35Reducer.isFetching === false) {
      for (const key in Alzheimer) {
        if (Object.hasOwnProperty.call(Alzheimer, key)) {
          const element = Alzheimer[key];
          if (key !== "Elder" && key !== "Male" && key !== "Female") {
            console.log(element)
            row.push(createData(
                key==="g95"?key.substring(1, 3)+"+":key.substring(1, 3)+"-" +key.substring(3),
                element.Male.NotRisk,
                element.Male.PerNotRisk==="NaN"?"0.0":element.Male.PerNotRisk,
                element.Male.Risk,
                element.Male.PerRisk==="NaN"?"0.0":element.Male.PerRisk,
                element.Male.Sum,
                element.Male.PerSum==="NaN"?"0.0":element.Male.PerSum,

                element.Female.NotRisk,
                element.Female.PerNotRisk==="NaN"?"0.0":element.Female.PerNotRisk,
                element.Female.Risk,
                element.Female.PerRisk==="NaN"?"0.0":element.Female.PerRisk,
                element.Female.Sum,
                element.Female.PerSum==="NaN"?"0.0":element.Female.PerSum,

                element.Elder.NotRisk,
                element.Elder.PerNotRisk==="NaN"?"0.0":element.Elder.PerNotRisk,
                element.Elder.Risk,
                element.Elder.PerRisk==="NaN"?"0.0":element.Elder.PerRisk,
                element.Elder.Sum,
                element.Elder.PerSum==="NaN"?"0.0":element.Elder.PerSum,
            ));
          }
        }
      }
    }
    setOpen(row.length);
  }, [chart35Reducer.isFetching]);

  return (
    <div className="card-body">
      <div className="row justify-content-between csv-link-select">
        <div className="">
        {open !== 0 && (
          <CSVLink
            data={row}
            filename={`จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามเพศและช่วงอายุ.csv`}
          >
            ดาวน์โหลดรายงาน
          </CSVLink>
        )}
        </div>
        <div className="">
        <FormControlLabel
        control={<Switch checked={per} onChange={()=>setPer(!per)} name="checkedA" />}
        label="แสดงแบบร้อยละ"
        />
        </div>


      </div>
      <div ref={ref} className="report-container">
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" colSpan={10}>
                  จำนวน{per&&"ร้อยละ"}ของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามเพศและช่วงอายุ
                </StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell align="center" colSpan={1} rowSpan={2}>
                  ช่วงอายุ (ปี)
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>
                  เพศชาย
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>
                  เพศหญิง
                </StyledTableCell>
                <StyledTableCell align="center" colSpan={3}>
                  รวม
                </StyledTableCell>
              </TableRow>
              <TableRow>
                {[1, 1, 1].map(() => {
                  return (
                    <React.Fragment>
                      <StyledTableCell align="center">ปกติ {per?"(%)":"(คน)"}</StyledTableCell>
                      <StyledTableCell align="center">เสี่ยง {per?"(%)":"(คน)"}</StyledTableCell>
                      <StyledTableCell align="center">รวม {per?"(%)":"(คน)"}</StyledTableCell>
                    </React.Fragment>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
                { chart35Reducer.isFetching === false 
                ? row.map((v)=>{
                    return (
                    <StyledTableRow>
                        <StyledTableCell align="center">{v.ช่วงอายุ}</StyledTableCell>

                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์ชายปกติ+" %":v.ชายปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์ชายผิดปกติ+" %":v.ชายผิดปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์ชายรวม+" %":v.ชายรวม}</StyledTableCell>
                        
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์หญิงปกติ+" %":v.หญิงปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์หญิงผิดปกติ+" %":v.หญิงผิดปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์หญิงรวม+" %":v.หญิงรวม}</StyledTableCell>

                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมทั้งหมดปกติ+" %":v.รวมทั้งหมดปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมทั้งหมดผิดปกติ+" %":v.รวมทั้งหมดผิดปกติ}</StyledTableCell>
                        <StyledTableCell align="center">{per?v.เปอร์เซ็นต์รวมทั้งหมดรวม+" %":v.รวมทั้งหมดรวม}</StyledTableCell>

                    </StyledTableRow>
                    )
                })
                : <React.Fragment>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                <StyledTableRow><StyledTableCell colSpan={10}> <Skeleton/> </StyledTableCell></StyledTableRow>
                </React.Fragment>
                }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
});

export default function Chart35() {
  const componentRef = React.useRef();
  return (
    <div className="col-12">
      <div className="card card-light collapsed-card">
        <div className="card-header">
          <h3 className="card-title">
            จำนวนและร้อยละของผู้สูงอายุที่น่าจะมีความเสี่ยงของภาวะสมองเสื่อมจำแนกตามเพศและช่วงอายุ
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
