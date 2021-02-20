import React, {useEffect, useState} from "react";
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
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
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
                Download CSV
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
              {row.map((value) => {
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
                })}
              </TableBody>
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
