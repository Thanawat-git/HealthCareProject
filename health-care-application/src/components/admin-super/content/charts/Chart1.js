import React from "react";
import "./Chart.css"
import { useSelector } from "react-redux";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Tooltip,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from "@material-ui/core";
import { Chart } from "react-google-charts";
import { PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";


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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  topicColumn:{
    fontSize: 20,
  }
});
function createData(Age, numMale, numFemale,numPer1, numPer2, sum) {
  return { Age, numMale, numFemale,numPer1, numPer2, sum };
}

const ShowChart = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const chart1Reducer = useSelector(({chart1Reducer}) => chart1Reducer)
  const {
    summary, g95, g6064, g6569, g7074, g7579, g8084, g8589, g9094
  } = chart1Reducer.results
  const rows = [
    createData(` 60-64 `,g6064.ElderMale,g6064.ElderFemale,`${g6064.ElderPerMale} %`,`${g6064.ElderPerFeMale} %`, g6064.Elder),
    createData(' 65-69',g6569.ElderMale,g6569.ElderFemale,`${g6569.ElderPerMale} %`,`${g6569.ElderPerFeMale} %`, g6569.Elder),
    createData(' 70-74',g7074.ElderMale,g7074.ElderFemale,`${g7074.ElderPerMale} %`,`${g7074.ElderPerFeMale} %`, g7074.Elder),
    createData(' 75-79',g7579.ElderMale,g7579.ElderFemale,`${g7579.ElderPerMale} %`,`${g7579.ElderPerFeMale} %`, g7579.Elder),
    createData(' 80-84',g8084.ElderMale,g8084.ElderFemale,`${g8084.ElderPerMale} %`,`${g8084.ElderPerFeMale} %`, g8084.Elder),
    createData(' 85-89',g8589.ElderMale,g8589.ElderFemale,`${g8589.ElderPerMale} %`,`${g8589.ElderPerFeMale} %`, g8589.Elder),
    createData(' 90-94',g9094.ElderMale,g9094.ElderFemale,`${g9094.ElderPerMale} %`,`${g9094.ElderPerFeMale} %`, g9094.Elder),
    createData(' 95+',g95.ElderMale,g95.ElderFemale,`${g95.ElderPerMale} %`,`${g95.ElderPerFeMale} %`, g95.Elder),
  
  ];
  React.useEffect(() => {
    console.log(summary.Elder)
  }, [])
  return (
    <div className="card-body" ref={ref}>
      {/* <div className="chart">
        <Chart
          maxWidth={"900px"}
          height={"400px"}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["อายุ", `ชาย ${summary.ElderMale} คน`, `หญิง ${summary.ElderFemale} คน`],
            [`60-64\nทั้งหมด ${g6064.Elder} คน\nชาย ${g6064.ElderPerMale}%\nหญิง ${g6064.ElderPerFeMale}%`, g6064.ElderMale, g6064.ElderFemale],
            [`65-69\n${g6569.Elder} คน\n${g6569.ElderPerMale}%\n${g6569.ElderPerFeMale}%`, g6569.ElderMale, g6569.ElderFemale],
            [`70-74\n${g7074.Elder} คน\n${g7074.ElderPerMale}%\n${g7074.ElderPerFeMale}%`, g7074.ElderMale, g7074.ElderFemale],
            [`75-79\n${g7579.Elder} คน\n${g7579.ElderPerMale}%\n${g7579.ElderPerFeMale}%`, g7579.ElderMale, g7579.ElderFemale],
            [`80-84\n${g8084.Elder} คน\n${g8084.ElderPerMale}%\n${g8084.ElderPerFeMale}%`, g8084.ElderMale, g8084.ElderFemale],
            [`85-89\n${g8589.Elder} คน\n${g8589.ElderPerMale}%\n${g8589.ElderPerFeMale}%`, g8589.ElderMale, g8589.ElderFemale],
            [`90-94\n${g9094.Elder} คน\n${g9094.ElderPerMale}%\n${g9094.ElderPerFeMale}%`, g9094.ElderMale, g9094.ElderFemale],
            [`95+\n${g95.Elder} คน\n${g95.ElderPerMale}%\n${g95.ElderPerFeMale}%`, g95.ElderMale, g95.ElderFemale],
          ]}
          options={{
            // Material design options
            chart: {
              title:
                `จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ ทั้งหมด ${summary.Elder} คน`,
              subtitle: "จำแนกตามเพศ",
            },
          }}
        />
        <br />
      </div> */}
<div> 
      <TableContainer component={Paper}>
      <Table className="table-report" aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell align="center">ช่วงอายุ</StyledTableCell>
            <StyledTableCell align="center">จำนวนเพศชาย</StyledTableCell>
            <StyledTableCell align="center">จำนวนเพศหญิง </StyledTableCell>
            <StyledTableCell align="center">ร้อยละเพศชาย </StyledTableCell>
            <StyledTableCell align="center">ร้อยละเพศหญิง</StyledTableCell>
            <StyledTableCell align="center">รวม</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Age}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.Age}
              </StyledTableCell>
              <StyledTableCell align="center">{row.numMale}</StyledTableCell>
              <StyledTableCell align="center">{row.numFemale}</StyledTableCell>
              <StyledTableCell align="center">{row.numPer1==="NaN %"? "0 %" : row.numPer1}</StyledTableCell>
              <StyledTableCell align="center">{row.numPer2==="NaN %"? "0 %" : row.numPer2}</StyledTableCell>
              <StyledTableCell align="center">{row.sum}</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>

    </div>
  );
});

export default function Chart1() {
  
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h2 className="card-title" >
            จำนวนและร้อยละของประชากรผู้สูงอายุในแต่ละช่วงอายุ
          </h2>
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
                onClick={handlePrint}
              >
                <i className="fas fa-print"></i>
              </button>
            </Tooltip>
          </div>
        </div>
        <ShowChart ref={componentRef}/>
      </div>
    </div>
  );
}
