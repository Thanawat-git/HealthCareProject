import React, {useEffect, useState} from "react";
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
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Chart } from "react-google-charts";
import { COMMUNITYS, PRINT_THIS_SECTION } from "../../../../constants";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { getDataChart4 } from "../../../../actions/charts.action";
import { CSVLink } from "react-csv"
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
  const [community, setCommunity] = React.useState("ชุมชนมณีแก้ว");
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
  const handleChange = (e) => {
    setCommunity(e.target.value);
    dispatch(getDataChart4(e.target.value));
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
  ]
  const [rows, setRow] = useState([])
  React.useEffect(() => {
    console.log('communi.length ',communi.length)
    if(chart4Reducer.isFetching === false){
    for (let i = 0; i < communi.length; i++) {
      rows.push(
        createData(Object.keys(chart4Reducer.results)[i],
          communi[i].Alone,
          communi[i].PerAlone==="NaN"? "0":communi[i].PerAlone,
          communi[i].NotAlone.SumNotAlone,
          communi[i].PerNotAlone.PerSumNotAlone==="NaN"? "0":communi[i].PerNotAlone.PerSumNotAlone,
          communi[i].NotAlone.Child, 
          communi[i].PerNotAlone.PerChild==="NaN"? "0":communi[i].PerNotAlone.PerChild,
          communi[i].NotAlone.SonInLaw, 
          communi[i].PerNotAlone.PerSonInLaw==="NaN"? "0":communi[i].PerNotAlone.PerSonInLaw,
          communi[i].NotAlone.GrandChild, 
          communi[i].PerNotAlone.PerGrandChild==="NaN"? "0":communi[i].PerNotAlone.PerGrandChild,
          communi[i].NotAlone.Sibling, 
          communi[i].PerNotAlone.PerSibling==="NaN"? "0":communi[i].PerNotAlone.PerSibling,
          communi[i].NotAlone.Parent, 
          communi[i].PerNotAlone.PerParent==="NaN"? "0":communi[i].PerNotAlone.PerParent,
          communi[i].NotAlone.Partner, 
          communi[i].PerNotAlone.PerPartner==="NaN"? "0":communi[i].PerNotAlone.PerPartner,
          communi[i].NotAlone.Other, 
          communi[i].PerNotAlone.PerOther==="NaN"? "0":communi[i].PerNotAlone.PerOther,
        )
      )
    }
  }
    console.log('row ',rows)
    console.log('row length ',rows.length)
    setOpen(rows.length)
  }, [chart4Reducer.isFetching])
  React.useEffect(() => {
    setRow([]);
  }, [community]);


  return (    
  <React.Fragment>
    <CSVLink data={rows} className="csv-link"> Download CSV </CSVLink>
    <div className="card-body">
      {/* <div>
        เลือกชุมชน &emsp;
        <Select
          native
          open={open}
          onClose={() => setOpen(false)}
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
      <br />
      <div className="row" ref={ref}>
        <div className="col-12">
          <p style={{ textAlign: "center" }}>
            จำนวนประชากรผู้สูงอายุทั้งหมดใน {community} จำนวน {Summary} คน
          </p>
        </div>
        <div
          className="chart col-6 align-self-center"
          style={{ textAlign: "center" }}
        >
          {Summary === 0 ? (
            <h1>ไม่มีข้อมูล</h1>
          ) : (
            <Chart
              //   maxWidth={"400px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["", "จำนวน"],
                ["มีผู้ดูแล", Keeper],
                ["ไม่มีผู้ดูแล", noKeeper],
              ]}
            />
          )}
        </div>
        <div className="chart col-6">
          <Chart
            // width={"300px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            // data={[
            //   ["ความสัมพันธ์", "จำนวน"],
            //   ["บุตรชาย/บุตรสาว", 11],
            //   ["ลูกเขย/ลูกสะใภ้", 2],
            //   ["หลานชาย/หลานสาว", 2],
            //   ["พี่น้อง", 2],
            //   ["บิดา/มารดา", 7],
            //   ["สามี/ภรรยา", 7],
            //   ["บุคคลอื่น", 7],
            // ]}
            data={[
              [
                "",
                "บุตรชาย/บุตรสาว",
                "ลูกเขย/ลูกสะใภ้",
                "หลานชาย/หลานสาว",
                "พี่น้อง",
                "บิดา/มารดา",
                "สามี/ภรรยา",
                "บุคคลอื่น",
              ],
              [
                "ผู้สูงอายุที่มีผู้ดูแล",
                Child,
                SonInLaw,
                GrandChild,
                Sibling,
                Parent,
                Partner,
                Other,
              ],
            ]}
            options={{
              title: "ผู้สูงอายุที่มีผู้ดูแล",
            }}
          />
        </div>
      </div>*/}

      <div ref={ref}>
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
            <TableRow>
                  <StyledTableCell align="center" colSpan={5}>จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน</StyledTableCell>
                </TableRow>
              <TableRow>
                <StyledTableCell align="center" colSpan={5}>การมีผู้ดูแล</StyledTableCell>

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
              {rows.map((row) => (
                <StyledTableRow key={row.ชุมชน}>
                  <StyledTableCell  component="th" scope="row">{row.ชุมชน}</StyledTableCell>
                  <StyledTableCell align="center">{row.การมีผู้ดูแล}</StyledTableCell>
                  <StyledTableCell align="center">{row.เปอร์เซ็นต์การมีผู้ดูแล} %</StyledTableCell>
                  <StyledTableCell align="center">{row.มีผู้ดูแล}</StyledTableCell>
                  <StyledTableCell align="center">{row.เปอร์เซ็นต์มีผู้ดูแล} %</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* ----------------------------Next--------------- */}
      <div style={{marginTop:10}}>     
        <TableContainer component={Paper}>
          <Table className="table-report" aria-label="customized table">
            <TableHead>
              <TableRow>             
                <StyledTableCell align="center" colSpan={10}>มีผู้ดูแล</StyledTableCell>                
              </TableRow>
              <TableRow>
              <StyledTableCell align="center"><strong>ชุมชน</strong></StyledTableCell>
              <StyledTableCell align="center">จำนวน/เปอร์เซ็นต์</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
                <StyledTableCell align="center">บุตรชาย/บุตรสาว</StyledTableCell>
                <StyledTableCell align="center">ลูกเขย/ลูกสะใภ้</StyledTableCell>
                <StyledTableCell align="center">หลานชาย/หลานสาว</StyledTableCell>
                <StyledTableCell align="center">พี่น้อง</StyledTableCell>
                <StyledTableCell align="center">บิดา/มารดา</StyledTableCell>
                <StyledTableCell align="center">สามี/ภรรยา</StyledTableCell>
                <StyledTableCell align="center">บุคคลอื่น</StyledTableCell> 
                                           
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.ชุมชน}>                  
                  <StyledTableCell  component="th" scope="row">
                    {row.ชุมชน}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                จำนวน
                  <br />
                  เปอร์เซ็นต์</StyledTableCell>                 
                  <StyledTableCell align="center">&nbsp;</StyledTableCell>  
                             
                  <StyledTableCell align="center">
                    {row.บุตรชายหรือบุตรสาว}
                    <br />
                    {row.เปอร์เซ็นต์บุตรชายหรือบุตรสาว} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ลูกเขยหรือลูกสะใภ้}
                    <br />
                    {row.เปอร์เซ็นต์ลูกเขยหรือลูกสะใภ้} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.หลานชายหรือหลานสาว}
                    <br />
                    {row.เปอร์เซ็นต์หลานชายหรือหลานสาว} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.พี่น้อง}
                    <br />
                    {row.เปอร์เซ็นต์พี่น้อง} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บิดาหรือมารดา}
                    <br />
                    {row.เปอร์เซ็นต์บิดาหรือมารดา} %
                  </StyledTableCell>
                  
                  <StyledTableCell align="center">
                    {row.สามีหรือภรรยา}
                    <br />
                    {row.เปอร์เซ็นต์สามีหรือภรรยา} %
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.บุคคลอื่น}
                    <br />
                    {row.เปอร์เซ็นต์บุคคลอื่น} %
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

export default function Chart4() {
  const componentRef = React.useRef();

  return (
    <div className="col-12">
      <div className="card card-light ">
        <div className="card-header">
          <h3 className="card-title"> CH4
            จำนวนและร้อยละของผู้สูงอายุที่มีผู้ดูแลและผู้ที่ดูแลของแต่ละชุมชน
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
