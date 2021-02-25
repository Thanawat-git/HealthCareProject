import React, { Component } from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from '@material-ui/core/TextField';
import "./verify-identity.css";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import {checkUser} from '../../actions/editpassword.action'
import {
  Container,
  Button,
} from "react-bootstrap";

import 'moment/locale/th';
moment.locale("th");

function ShowPage(){
  let history = useHistory();
  const checkuserReducer = useSelector(({checkuserReducer}) => checkuserReducer)
  const [selectedDate, handleDateChange] = React.useState(null);
  const [pid, setPid] = React.useState(null);
  const [isErr, setIsErr] = React.useState(false);
  const dispatch = useDispatch()
  
  React.useEffect(()=>{
    setIsErr(checkuserReducer.isError)
  },[checkuserReducer.isError])

  const toCheckUser = ()=>{
    dispatch(checkUser(pid,moment(selectedDate).add(543, 'year').format("YYYY-MM-DD"),history ))
  }
  return (
    <Container>
      <div className="row form-verify mx-auto">
        <div className="col-12">
          <h1>ยืนยันตัวตน</h1>
          {
            isErr && <Alert variant="filled" severity="error">
            ไม่พบข้อมูล กรุณาติดต่อเจ้าหน้าที่
          </Alert>
          }
        </div>
        <div className="col-12 field-data">
          <p>เลขประจำตัวประชาชน</p>
          <TextField variant="outlined" value={pid} onChange={(e)=>setPid(e.target.value)} fullWidth/>
        </div>
        
        <div className="col-12 field-data">
          <p>วัน/เดือน/ปีเกิด</p>
          <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="th">
            <KeyboardDatePicker
              id="date-picker-dialog"
              format="DD/MM/yyyy"
              fullWidth
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              inputVariant="outlined"
              invalidDateMessage=" "
            />
          </MuiPickersUtilsProvider>
        </div>
        
        <div className="col-6 field-data">
          <Button
            onClick={()=>history.goBack()}
            size="lg"
            className="bt-verify mx-auto d-block"
            variant="secondary"
          >
            ยกเลิก
          </Button>
        </div>
        <div className="col-6 field-data">
          <Button
            onClick={toCheckUser}
            size="lg" className="bt-verify mx-auto d-block">
              ยืนยัน
          </Button>
        </div>
        
        
      </div>
  </Container>
  )
}

class VerifyIdentity extends Component {
  render() {
    return (
      <ShowPage/>
    );
  }
}

export default VerifyIdentity;
