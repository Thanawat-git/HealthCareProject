import React, { useState, useEffect } from "react";
import "./form-style.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 700,
    fontSize: 20,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
 
});

export default function BasicTable() {
const dispatch = useDispatch();
const classes = useStyles();

  const forms2Reducer = useSelector(
  ({ forms2Reducer }) => forms2Reducer
);
const forms3Reducer = useSelector(
  ({ forms3Reducer }) => forms3Reducer
);
const forms4Reducer = useSelector(
  ({ forms4Reducer }) => forms4Reducer
);
const forms5Reducer = useSelector(
  ({ forms5Reducer }) => forms5Reducer
);
const forms6Reducer = useSelector(
  ({ forms6Reducer }) => forms6Reducer
);
const forms7Reducer = useSelector(
  ({ forms7Reducer }) => forms7Reducer
);
const forms8Reducer = useSelector(
  ({ forms8Reducer }) => forms8Reducer
);
const forms89qReducer = useSelector(
  ({ forms89qReducer }) => forms89qReducer
);
const forms9Reducer = useSelector(
  ({ forms9Reducer }) => forms9Reducer
);
const forms92Reducer = useSelector(
  ({ forms92Reducer }) => forms92Reducer
);
const forms10Reducer = useSelector(
  ({ forms10Reducer }) => forms10Reducer
);

function createData2(name2,name3,name4,name5) {
  return { name2,name3,name4,name5};
}

const rows = [createData2(" แปลผลเส้นรอบเอว","แปลผลค่า BMI","แปลผลความดันโลหิต","แปลผลการตรวจระดับน้ำตาล")];
console.log(forms2Reducer.sugarResult)
  
  return (
    <div className="css-form">
      <div className="row ">  
                    <h1></h1>    
        {/* <h1>สรุปผลแบบประเมินภาวะสุขภาพผู้สูงอายุ</h1> */}
        <TableContainer  component={Paper} className={classes.root}>
          <Table>
              <TableCell>
                <h1>สรุปผลแบบประเมิน</h1>
              </TableCell>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" >
                  <h4 >ผลการประเมินสภาวะสุขภาพ</h4>
                  {/* {forms2Reducer ? null : "null"}  */} 
                  <h5> {row.name2} </h5>
                  <h6 >{forms2Reducer.waistResult}</h6>
                  <h5> {row.name3}  </h5>
                  <h6>{forms2Reducer.bmiResult}</h6>
                  <h5> {row.name4}  </h5>
                  <h6>{forms2Reducer.bloodPressureResult}</h6>
                  <h5> {row.name5}  </h5>
                  <h6 >{forms2Reducer.sugarResult}</h6>
              <hr></hr>
                 <h4 >ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h4>
                 <h5> {forms3Reducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินสุขภาพตา</h4>
                <h5> {forms4Reducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินสุขภาพช่องปาก</h4>
                <h5> {forms5Reducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินสมรรถนะ/ความสามารถ ในการทำกิจวัตรประจำ</h4>
                <h5> {forms6Reducer.resultsTai}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินภาวะสมองเสื่อม</h4>
                <h5> {forms7Reducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินการคัดกรองโรคซึมเศร้า</h4>
                <h5> {forms8Reducer.results}  </h5>
                <h5> {forms89qReducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินสุขภาพกระดูกและกล้ามเนื้อ</h4>
                <h5> {forms9Reducer.result1}  </h5>
                <h5> {forms9Reducer.result2}  </h5>
                <h5> {forms92Reducer.results}  </h5>
              <hr></hr>
                <h4 >ผลการประเมินการคัดกรองการกลั้นปัสสาวะ</h4>
                <h5> {forms10Reducer.results}  </h5>
                </TableCell>

              </TableRow>
            ))}
          </Table>
        </TableContainer>  
        </div>
      </div>
 
  );
}
