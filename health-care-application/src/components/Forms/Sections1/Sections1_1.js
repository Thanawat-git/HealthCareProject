import React, { useState, useEffect } from "react";
import "../form-style.css";
import "./Sections1.css";
import {
  TextField,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import FormHelperText from '@material-ui/core/FormHelperText';
import * as formAction from "../../../actions/forms1p1.action";
import { USER } from "../../../constants";

function Sections1_1(props) {
  const forms1p1Reducer = useSelector(({ forms1p1Reducer }) => forms1p1Reducer);
  const dispatch = useDispatch();
  const [PID, setPID] = useState(forms1p1Reducer.peopleID);
  const [firstname, setFirstname] = useState(forms1p1Reducer.firstname);
  const [lastanme, setLastname] = useState(forms1p1Reducer.lastname);
  const [elderlyGender, setElderlyGender] = useState(
    forms1p1Reducer.elderlyGender
  );
  const [nickname, setNickname] = useState(forms1p1Reducer.nickname);
  const [yea, setYea] = useState(forms1p1Reducer.year);
  const [mon, setMon] = useState(forms1p1Reducer.month);
  const [day, setDay] = useState(forms1p1Reducer.day);

  const handleChange = (event) => {
    setElderlyGender(event.target.value);
  };

const[err,seterr]= useState(false);




  // DatePicker
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [cy, setCY] = useState(true);
  const [cd, setCD] = useState(true);
  const getyear = (e) => {
    var i = 60;
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
        // console.log(years)
      }
    }
    setYea(e.target.value);
    // console.log(yea)
    // console.log(mon)
  };

  const getday = () => {
    // console.log(yea);
    // console.log(mon);
    // console.log(a)
    if (mon != undefined) {
      // console.log(2);
      // console.log(typeof mon);
      // console.log(mon);
      if (mon === "กุมภาพันธ์") {
        console.log(5);
        if (yea === undefined) {
          // console.log(3);
          loopDays(28);
        } else {
          // console.log(4);
          var a = parseInt(yea) - 543;
          if (
            (a % 4 == 0 && a % 100 != 0) ||
            (a % 4 == 0 && a % 100 == 0 && a % 400 == 0)
          ) {
            // console.log(5.1);
            loopDays(29);
          } else {
            // console.log(5.2);
            loopDays(28);
          }
        }
      } else if (
        mon === "เมษายน" ||
        mon === "มิถุนายน" ||
        mon === "กันยายน" ||
        mon === "พฤศจิกายน"
      ) {
        // console.log(6);
        // setDays([])
        loopDays(30);
      } else {
        // console.log(7);
        loopDays(31);
      }
    }
  };

  const loopDays = (d) => {
    // setDays([])
    var x = 0;
    const countDay = (s) => {
      return s + 1;
    };
    // console.log(`mon ${mon}`);
    // console.log(`d ${d}`);
    // console.log(`length day ${days.length}`);
    // days.length!=d || days === undefined ? setCD(true) : setCD(false)
    if (days.length != d || days === undefined || days.length / 2 != d) {
      setCD(true);
      setDays([]);
    } else {
      setCD(false);
    }

    if (cd) {
      // setCD(false)
      while (x < d) {
        const dd = countDay(x);
        setDays((days) => [...days, dd.toString()]);
        x++;
      }
    }
  };

  const [numMon, setNumMon] = useState(0);
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

  // Redux Hooks
  const handleSubmit = (e) => {
    if (
      PID === null ||
      firstname === null ||
      lastanme === null ||
      elderlyGender === null ||
      yea === null ||
      mon === null ||
      day === null
    ) {
      emptyValue();
    }

    const elderlyBirthday = `${yea}-${numMon}-${day}`;
    // cal Age
    const nowDate = new Date();
    // const nowDay = nowDate.getDate();
    // const nowMonth = nowDate.getMonth() + 1;
    // const nowYear = nowDate.getFullYear() + 543;
    // var Age = nowYear - parseInt(yea);
    // if (numMon == nowMonth) {
    //   parseInt(day) >= nowDay ? (Age = Age) : (Age = Age - 1);
    // } else if (numMon > nowMonth) {
    //   Age = Age - 1;
    // } else {
    //   Age = Age;
    // }
    const data = [
      PID,
      firstname,
      lastanme,
      elderlyGender,
      nickname,
      elderlyBirthday,
      // Age,
    ];
    dispatch(formAction.add(data));
    // dispatch(savePID.addPidOnly(PID))
    function emptyValue() {
      e.preventDefault();
      //alert("กรุณากรอกข้อมูลให้ครบทุกข้อ");
      seterr(true)
      return;
    }
    formAction.createAllElder(data);
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form
        onSubmit={handleSubmit}
        className="shadow p-3 mb-5 bg-white rounded"
      >
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน {forms1p1Reducer.elderlyAge} </h2>
        <div className="question">
          {/* content */}

          {/* row-1 */}
          <div className="row">
            <div className="col-12 mb-15">
              <InputLabel htmlFor="">
                <span className="text-danger">*</span>
                <strong>รหัสบัตรประชาชน 13 หลัก</strong>{" "}
              </InputLabel>
            </div>
            <div className="col-12">
              <TextField
                id="PID"
                // name='PID'
                type="number"
                label="รหัสบัตรประชาชน 13 หลัก"
                variant="outlined"
                placeholder="รหัสบัตรประชาชน 13 หลัก"
                className="TextField"
                error={err}
                helperText={err ? "กรุณากรอกรหัสบัตรประชาชน" : ""}
                defaultValue={forms1p1Reducer.peopleID}
                onInput={(e) => {
                  e.target.value = e.target.value.slice(0, 13);
                }} //fix13digit
                // value={forms1p1Reducer.peopleID}
                onChange={(e) => setPID(e.target.value)}
              />
            </div>
          </div>
          <br />
          {/* row-2 */}
          <div className="row">
            <div className="col-12 col-xl-6 mb-15">
              <TextField
                id="firstname"
                pattern="^[ก-๏\s]+$"
                label="*ชื่อ"
                variant="outlined"
                placeholder="ชื่อ"
                className="TextField"
                value={forms1p1Reducer.firstname}
                error={err}
                helperText={err ? "กรุณากรอกชื่อ" : ""}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="col-12 col-xl-6">
              <TextField
                id="lastname"
                label="*นามสกุล"
                variant="outlined"
                placeholder="นามสกุล"
                className="TextField"
                value={forms1p1Reducer.lastname}
                error={err}
                helperText={err ? "กรุณากรอกนามสกุล" : ""}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <br />
          {/* row-3 */}
          <div className="row align-items-center">
            <div className="col-12 col-xl-3">
              <InputLabel htmlFor="gender">
                <span className="text-danger">*</span>
                <strong>เพศ</strong>{" "}
              </InputLabel>
            </div>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={elderlyGender}
              error={err}
              onChange={handleChange}
            >
              <FormControlLabel
                className="radio-space"
                value="ชาย"
                control={<Radio id="rmale" color="primary" />}
                label="ชาย"
              />
              <FormControlLabel
                value="หญิง"
                control={<Radio id="fmale" color="primary" />}
                label="หญิง"
              />
            </RadioGroup>
          </div>
          <FormHelperText style={{color:'red'}} >{err ? "กรุณาระบุเพศ" : ""}</FormHelperText>
          <br />
          {/* row-4 */}
          <div className="row">
            <div className="col-12">
              <TextField
                id=""
                label="ชื่อในชุมชน (ถ้ามี)"
                variant="outlined"
                placeholder="ชื่อในชุมชน"
                className="TextField"
                value={forms1p1Reducer.nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
          <br />
          {/* row-5 */}
          <div className="row">
            <div className="col-12 mb-15">
              <InputLabel htmlFor="bday">
                <span className="text-danger">*</span>
                <strong>วันเดือนปีเกิด</strong>
                <small>
                  {" "}
                  หากไม่ทราบ เดือน หรือวัน ให้เลือกเป็น "วันที่ 1 เดือน มกราคม"
                  {/* {props.elderlyInfos.map((elderlyInfo)=> elderlyInfo.Age )} */}
                </small>
              </InputLabel>
            </div>
            <div className="col-12">
              {/* <MyDatePicker xxx="years" value={bd} onChange={ (e)=> setbd(e.target.value)} /> */}
              <div className="row">
                <div className="col-12 col-xl-4 mb-15">
                  <Autocomplete
                    id="year"
                    options={years}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    freeSolo
                    onInputChange={handleInputYearChange}
                    defaultValue={forms1p1Reducer.year}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="ปี พ.ศ."
                        variant="outlined"
                        // value={yea}
                        error={err}
                helperText={err ? "กรุณากรอกปี พ.ศ" : ""}
                        onClick={getyear}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-4 mb-15">
                  <Autocomplete
                    id="month"
                    options={Months}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    //   value={mon}
                    freeSolo
                    onInputChange={handleInputMonthChange}
                    defaultValue={forms1p1Reducer.month}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="เดือน"
                        variant="outlined"
                        error={err}
                helperText={err ? "กรุณากรอกเดือน" : ""}
                        //   onClick={(e) => setMon(e.target.value)}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-4">
                  <Autocomplete
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    freeSolo
                    onInputChange={handleInputDayChange}
                    defaultValue={forms1p1Reducer.day}
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
          </div>

          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-center">
          <Link to="/sec1-page2">
            <button
              type="submit"
              value="Submit"
              className="btn form-btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              ถัดไป
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    elderlyInfos: state,
  };
};
export default connect(mapStateToProps)(Sections1_1);

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
