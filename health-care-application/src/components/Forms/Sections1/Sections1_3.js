import React, { useState, useEffect } from "react";
import "../../genaralConfig.css";
import "../form-style.css";
import "./Sections1.css";
import {
  TextField,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from '@material-ui/core/FormHelperText';
import * as formAction from "../../../actions/forms1p3.action";
import ConnectAlert from "../../connectionAlert"
import { isReachable } from "../../../services/ServerReachable"

export default function Sections1_3() {
  const [firstNeighbor, setFirstNeighbor] = useState("no1");
  const [secondNeighbor, setSecondNeighbor] = useState("no2");
  const[err,seterr]= useState(false);
  const netErr = useSelector(({ networkCheck }) => networkCheck.err)
  useEffect(() => {netErr && ConnectAlert("/volunteerpage/search")})
  const handleChange = (event) => {
    switch (event.target.value) {
      case "yes1":
      case "no1":
        setFirstNeighbor(event.target.value);
        break;
      default:
        setSecondNeighbor(event.target.value);
        break;
    }
  };

  const forms1p3Reducer = useSelector(({forms1p3Reducer}) => forms1p3Reducer)
  const peopleID = useSelector(({forms1p1Reducer})=>forms1p1Reducer.peopleID)
  const dispatch = useDispatch()

  const [neighborFirstName1, setneighborFirstName1] = useState(forms1p3Reducer.neighborFirstName1)
  const [neighborLastName1, setneighborLastName1] = useState(forms1p3Reducer.neighborLastName1)
  const [neighborGender1, setNeighborGender1] = useState(forms1p3Reducer.neighborGender1);
  const [neighbortime1, setneighborTime1] = useState(forms1p3Reducer.neighbortime1);
  const [neighborRelative1, setneighborRelative1] = useState(forms1p3Reducer.neighborRelative1);
  const [neighborPhoneNumber1, setneighborPhoneNumber1] = useState(forms1p3Reducer.neighborPhoneNumber1);

  const [neighborFirstName2, setneighborFirstName2] = useState(forms1p3Reducer.neighborFirstName2)
  const [neighborLastName2, setneighborLastName2] = useState(forms1p3Reducer.neighborLastName2)
  const [neighborGender2, setNeighborGender2] = useState(forms1p3Reducer.neighborGender2);
  const [neighbortime2, setneighborTime2] = useState(forms1p3Reducer.neighbortime2);
  const [neighborRelative2, setneighborRelative2] = useState(forms1p3Reducer.neighborRelative2);
  const [neighborPhoneNumber2, setneighborPhoneNumber2] = useState(forms1p3Reducer.neighborPhoneNumber2);

  const handleSubmit = (e)=>{
    isReachable(dispatch)
    if(!netErr){
      if(firstNeighbor=='yes1'){
        if(neighborFirstName1 === null || 
          neighborLastName1 === null ||
          neighborGender1=== null ||
          neighbortime1=== null ||
          neighborRelative1=== null
          ){   emptyValue()   }
        else{formAction.updateElderRelative([
          peopleID,
          neighborFirstName1,
          neighborLastName1,
          neighborGender1,
          neighbortime1,
          neighborRelative1,
          neighborPhoneNumber1])}
      } 
  
      if(secondNeighbor=='yes2'){
        if(neighborFirstName2 === null || 
          neighborLastName2 === null ||
          neighborGender2=== null ||
          neighbortime2=== null ||
          neighborRelative2=== null
          ){   emptyValue()   }
        else{
          formAction.createElderRelative2([
          neighborFirstName2,
          neighborLastName2,
          neighborGender2,
          neighbortime2,
          neighborRelative2,
          neighborPhoneNumber2,
          peopleID
        ])}
      } 
  
      const data = [
        neighborFirstName1,
        neighborLastName1,
        neighborGender1,
        neighbortime1,
        neighborRelative1,
        neighborPhoneNumber1,
        neighborFirstName2,
        neighborLastName2,
        neighborGender2,
        neighbortime2,
        neighborRelative2,
        neighborPhoneNumber2
      ]
  
      dispatch(formAction.add(data))
    } else {
      ConnectAlert("/volunteerpage/search")
    }
    
  }
  const emptyValue = ()=>{
    seterr(true)
  }

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <h4>ข้อมูลญาติผู้ดูแล</h4>
        <div className="question">
          <p>มีญาติหรือผู้ดูแลหรือไม่</p>
          <RadioGroup
            row
            aria-label="firstNeighbor"
            name="firstNeighbor"
            value={firstNeighbor}
            onChange={handleChange}
          >
            <FormControlLabel
              value="yes1"
              className="radio-space"
              control={<Radio id="yes1" color="primary" />}
              label="มี"
            />
            <FormControlLabel value="no1" control={<Radio id="no1" />} label="ไม่มี" />
          </RadioGroup>
          <br />
          {firstNeighbor === "yes1" ? (
            <React.Fragment>
              <h4>ญาติคนที่ 1</h4>
              <div className="row">
                <div className="col-12 mb-15">
                  <TextField
                    id="outlined-basic"
                    label="*ชื่อ"
                    variant="outlined"
                    defaultValue={neighborFirstName1}
                    error={err}
                    helperText={err ? "กรุณากรอกชื่อ" : ""}
                    onChange={(event)=>setneighborFirstName1(event.target.value)}
                    fullWidth
                  />
                </div>
                <div className="col-12 mb-15">
                  <TextField
                    id="outlined-basic"
                    label="*นามสกุล"
                    variant="outlined"
                    defaultValue={neighborLastName1}
                    error={err}
                    helperText={err ? "กรุณากรอกนามสกุล" : ""}
                    onChange={(event)=>setneighborLastName1(event.target.value)}
                    fullWidth
                  />
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12 col-xl-3">
                  <InputLabel htmlFor="gender1">
                    <span className="text-danger">*</span>
                    <strong>เพศ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  row
                  aria-label="gender1"
                  name="gender1"
                  value={neighborGender1}
                  onChange={(event)=>setNeighborGender1(event.target.value)}
                >
                  <FormControlLabel
                    className="radio-space"
                    value="ชาย"
                    control={<Radio color="primary" />}
                    label="ชาย"
                  />
                  <FormControlLabel
                    value="หญิง"
                    control={<Radio color="primary" />}
                    label="หญิง"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาระบุเพศ" : ""}</FormHelperText>
              <br />
              <div className="row">
                <div className="col-12">
                  <InputLabel htmlFor="time1">
                    <span className="text-danger">*</span>
                    <strong>เวลาที่อยู่กับผู้สูงอายุ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  className="pl-5"
                  aria-label="time1"
                  name="time1"
                  defaultValue={neighbortime1}
                  onChange={(event)=>setneighborTime1(event.target.value)}
                >
                  <FormControlLabel
                    value="ทั้งวัน"
                    control={<Radio color="primary" />}
                    label="ทั้งวัน"
                  />
                  <FormControlLabel
                    value="เฉพาะกลางวัน"
                    control={<Radio color="primary" />}
                    label="เฉพาะกลางวัน"
                  />
                  <FormControlLabel
                    value="เฉพาะกลางคืน"
                    control={<Radio color="primary" />}
                    label="เฉพาะกลางคืน"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาเลือกเวลาที่อยู่กับผู้สูงอายุ" : ""}</FormHelperText>
          
              <hr />
              <div className="row">
                <div className="col-12">
                  <InputLabel htmlFor="relative1">
                    <span className="text-danger">*</span>
                    <strong>ความสัมพันธ์กับผู้สูงอายุ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  className="pl-5"
                  aria-label="relative1"
                  name="relative1"
                  defaultValue={neighborRelative1}
                  onChange={(event)=>setneighborRelative1(event.target.value)}
                >
                  <FormControlLabel
                    value="บุตรชาย/บุตรสาว"
                    control={<Radio color="primary" />}
                    label="บุตรชาย/บุตรสาว"
                  />
                  <FormControlLabel
                    value="ลูกเขย/ลูกสะใภ้"
                    control={<Radio color="primary" />}
                    label="ลูกเขย/ลูกสะใภ้"
                  />
                  <FormControlLabel
                    value="หลานชาย/หลานสาว"
                    control={<Radio color="primary" />}
                    label="หลานชาย/หลานสาว"
                  />
                  <FormControlLabel
                    value="พี่น้อง"
                    control={<Radio color="primary" />}
                    label="พี่น้อง"
                  />
                  <FormControlLabel
                    value="บิดา/มารดา"
                    control={<Radio color="primary" />}
                    label="บิดา/มารดา"
                  />
                  <FormControlLabel
                    value="สามี/ภรรยา"
                    control={<Radio color="primary" />}
                    label="สามี/ภรรยา"
                  />
                  <FormControlLabel
                    value="บุคคลอื่น"
                    control={<Radio color="primary" />}
                    label="บุคคลอื่น"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาระบุความสัมพันธ์กับผู้สูงอายุ" : ""}</FormHelperText>
              <br />
              <p>
                เบอร์โทรศัพท์ <small>(ถ้ามี)</small>
              </p>
              <TextField
                id=""
                type="number"
                label=""
                variant="outlined"
                placeholder="+66"
                className="TextField"
                defaultValue={neighborPhoneNumber1}
                onChange={(event)=>setneighborPhoneNumber1(event.target.value)}
                fullWidth
                onInput = {(e) =>{
                  e.target.value = e.target.value.slice(0,10)
              }}//fix10digit

              />
              <hr />
              <p>มีญาติหรือผู้ดูแลคนที่ 2 หรือไม่</p>
              <RadioGroup
                row
                aria-label="secondNeighbor"
                name="secondNeighbor"
                value={secondNeighbor}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="yes2"
                  className="radio-space"
                  control={<Radio id="yes2" color="primary" />}
                  label="มี"
                />
                <FormControlLabel
                  value="no2"
                  control={<Radio id="no2" />}
                  label="ไม่มี"
                />
              </RadioGroup>
              {/* END 111111111111111111111111111111111111111111111111111111111 */}
              {secondNeighbor === "yes2" ? 
              <React.Fragment>
              <h4>ญาติคนที่ 2</h4>
              <div className="row">
                <div className="col-12 mb-15">
                  <TextField
                    id="outlined-basic"
                    label="*ชื่อ"
                    variant="outlined"
                    defaultValue={neighborFirstName2}
                    error={err}
                helperText={err ? "กรุณากรอกชื่อ" : ""}
                    onChange={(event)=>setneighborFirstName2(event.target.value)}
                    fullWidth
                  />
                </div>
                <div className="col-12 mb-15">
                  <TextField
                    id="outlined-basic"
                    label="*นามสกุล"
                    variant="outlined"
                    defaultValue={neighborLastName2}
                    error={err}
                helperText={err ? "กรุณากรอกนามสกุล" : ""}
                    onChange={(event)=>setneighborLastName2(event.target.value)}
                    fullWidth
                  />
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-12 col-xl-3">
                  <InputLabel htmlFor="gender1">
                    <span className="text-danger">*</span>
                    <strong>เพศ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  row
                  aria-label="gender1"
                  name="gender1"
                  value={neighborGender2}
                  onChange={(event)=>setNeighborGender2(event.target.value)}
                >
                  <FormControlLabel
                    className="radio-space"
                    value="ชาย"
                    control={<Radio color="primary" />}
                    label="ชาย"
                  />
                  <FormControlLabel
                    value="หญิง"
                    control={<Radio color="primary" />}
                    label="หญิง"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาระบุเพศ" : ""}</FormHelperText>
              <br />
              
              <div className="row">
                <div className="col-12">
                  <InputLabel htmlFor="time1">
                    <span className="text-danger">*</span>
                    <strong>เวลาที่อยู่กับผู้สูงอายุ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  className="pl-5"
                  aria-label="time1"
                  name="time1"
                  defaultValue={neighbortime2}
                  onChange={(event)=>setneighborTime2(event.target.value)}
                >
                  <FormControlLabel
                    value="ทั้งวัน"
                    control={<Radio color="primary" />}
                    label="ทั้งวัน"
                  />
                  <FormControlLabel
                    value="เฉพาะกลางวัน"
                    control={<Radio color="primary" />}
                    label="เฉพาะกลางวัน"
                  />
                  <FormControlLabel
                    value="เฉพาะกลางคืน"
                    control={<Radio color="primary" />}
                    label="เฉพาะกลางคืน"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาเลือกเวลาที่อยู่กับผู้สูงอายุ" : ""}</FormHelperText>
              <hr />
              <div className="row">
                <div className="col-12">
                  <InputLabel htmlFor="relative1">
                    <span className="text-danger">*</span>
                    <strong>ความสัมพันธ์กับผู้สูงอายุ</strong>{" "}
                  </InputLabel>
                </div>
                <RadioGroup
                  className="pl-5"
                  aria-label="relative1"
                  name="relative1"
                  defaultValue={neighborRelative2}
                  onChange={(event)=>setneighborRelative2(event.target.value)}
                >
                  <FormControlLabel
                    value="บุตรชาย/บุตรสาว"
                    control={<Radio color="primary" />}
                    label="บุตรชาย/บุตรสาว"
                  />
                  <FormControlLabel
                    value="ลูกเขย/ลูกสะใภ้"
                    control={<Radio color="primary" />}
                    label="ลูกเขย/ลูกสะใภ้"
                  />
                  <FormControlLabel
                    value="หลานชาย/หลานสาว"
                    control={<Radio color="primary" />}
                    label="หลานชาย/หลานสาว"
                  />
                  <FormControlLabel
                    value="พี่น้อง"
                    control={<Radio color="primary" />}
                    label="พี่น้อง"
                  />
                  <FormControlLabel
                    value="บิดา/มารดา"
                    control={<Radio color="primary" />}
                    label="บิดา/มารดา"
                  />
                  <FormControlLabel
                    value="สามี/ภรรยา"
                    control={<Radio color="primary" />}
                    label="สามี/ภรรยา"
                  />
                  <FormControlLabel
                    value="บุคคลอื่น"
                    control={<Radio color="primary" />}
                    label="บุคคลอื่น"
                  />
                </RadioGroup>
              </div>
              <FormHelperText style={{color:'red'}} >{err ? "กรุณาระบุความสัมพันธ์กับผู้สูงอายุ" : ""}</FormHelperText>
              <br />
              <p>
                เบอร์โทรศัพท์ <small>(ถ้ามี)</small>
              </p>
              <TextField
                id=""
                label=""
                variant="outlined"
                placeholder="+66"
                className="TextField"
                defaultValue={neighborPhoneNumber2}
                onChange={(event)=>setneighborPhoneNumber2(event.target.value)}
                fullWidth
                onInput = {(e) =>{
                  e.target.value = e.target.value.slice(0,10)
              }}//fix10digit
              />
              </React.Fragment>
              : ""}
            </React.Fragment>
          ) : (
            ""
          )}
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec1-page2">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <Link to="/sec1-page4">
            <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >
              ถัดไป
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
