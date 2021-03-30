import React, { Component } from "react";
import moment from "moment";
// import MomentUtils from "@date-io/moment";
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";
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
    const elderlyBirthday = `${yea}-${numMon}-${day}`;
    dispatch(checkUser(pid,moment(elderlyBirthday).format("YYYY-MM-DD"),history ))
  }
  const [yea, setYea] = React.useState();
  const [mon, setMon] = React.useState();
  const [day, setDay] = React.useState();
  const [err, seterr] = React.useState(false);
  const [years, setYears] = React.useState([]);
  const [days, setDays] = React.useState([]);
  const [cy, setCY] = React.useState(true);
  const [cd, setCD] = React.useState(true);
  const getyear = (e) => {
    var i = 10;
    var ny = new Date();
    var y = ny.getFullYear();
    const xxx = (s) => {
      return y - s + 543;
    };
    if (cy) {
      setCY(false);
      while (i < 150) {
        const r = xxx(i);
        setYears((years) => [...years, r.toString()]);
        i++;
      }
    }
    setYea(e.target.value);
  };

  const getday = () => {
    if (mon != undefined) {
      if (mon === "กุมภาพันธ์") {
        console.log(5);
        if (yea === undefined) {
          loopDays(28);
        } else {
          var a = parseInt(yea) - 543;
          if (
            (a % 4 == 0 && a % 100 != 0) ||
            (a % 4 == 0 && a % 100 == 0 && a % 400 == 0)
          ) {
            loopDays(29);
          } else {
            loopDays(28);
          }
        }
      } else if (
        mon === "เมษายน" ||
        mon === "มิถุนายน" ||
        mon === "กันยายน" ||
        mon === "พฤศจิกายน"
      ) {
        loopDays(30);
      } else {
        loopDays(31);
      }
    }
  };

  const loopDays = (d) => {
    var x = 0;
    const countDay = (s) => {
      return s + 1;
    };
    if (days.length != d || days === undefined || days.length / 2 != d) {
      setCD(true);
      setDays([]);
    } else {
      setCD(false);
    }

    if (cd) {
      while (x < d) {
        const dd = countDay(x);
        setDays((days) => [...days, dd.toString()]);
        x++;
      }
    }
  };

  const [numMon, setNumMon] = React.useState(0);
  function handleInputMonthChange(event, value) {
    setMon(value);
    Months.map((m, index) => {
      if (value === m) {
        setNumMon(index + 1);
      }
    });
    // console.log(`numMon = ${numMon}`)
  }
  function handleInputYearChange(event, value) {
    setYea(value);
  }
  function handleInputDayChange(event, value) {
    setDay(value);
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
          
          <div className="row">
                <div className="col-12 col-xl-12 mb-15">
                  <Autocomplete
                    id="year"
                    options={years}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputYearChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="ปี พ.ศ."
                        variant="outlined"
                        error={err}
                        helperText={err ? "กรุณากรอกปี พ.ศ" : ""}
                        onClick={getyear}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-12 mb-15">
                  <Autocomplete
                    id="month"
                    options={Months}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputMonthChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="เดือน"
                        variant="outlined"
                        error={err}
                        helperText={err ? "กรุณากรอกเดือน" : ""}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-12">
                  <Autocomplete
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputDayChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="วัน"
                        variant="outlined"
                        error={err}
                        helperText={err ? "กรุณากรอกวัน" : ""}
                        onClick={getday}
                      />
                    )}
                  />
                </div>
              </div>
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

const Months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];