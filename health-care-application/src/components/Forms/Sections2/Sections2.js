import React, { useState } from "react";
import "./Sections2.css";
import '../form-style.css'
import '../../genaralConfig.css'
import { OutlinedInput, InputAdornment, TextField } from "@material-ui/core";
import ShowResultPopup from '../ResuleShowsPopUp'
import { Link } from 'react-router-dom';

export default function Sections2_1() {
  const [elderlyGender, setElderlyGender] = useState('Male');
  const [waist, setWaist] = useState();
  const [weight, setWeight] = useState();
  const [high, setHigh] = useState();
  const [bmi, setBmi] = useState();
  const [pulse, setPulse] = useState();
  const [bloodPressure1, setBloodPressure1] = useState();
  const [bloodPressure2, setBloodPressure2] = useState();
  const [sugar, setSugar] = useState();

  const [show, setShow] = useState(false);

  // result State
  const [waistR, setWaistR] = useState()
  const [BMIR, setBMIR] = useState('')
  const [BPR, setBPR] = useState()
  const [sugarR, setSugarR] = useState()
  
  // cul waist
  const culWaist = ()=>{
    if(elderlyGender=='Male'){
      waist <=90 ? setWaistR('ปกติ'):setWaistR('อ้วนลงพุง')
    } else {
      waist <=80 ? setWaistR('ปกติ'):setWaistR('อ้วนลงพุง')
    }
  }

  const culBloodPressure = ()=>{
    if(bloodPressure1<=139 && bloodPressure2<=89){
      setBPR('ปรับพฤติกรรม')
    } else if (139<bloodPressure1<=179 && 89<bloodPressure2<=109){
      setBPR('วัดซ้ำใน 2 สัปดาห์ เพื่อยืนยัน')
    } else {
      setBPR('ส่งพบผู้เชี่ยวชาญทันที')
    }
  }

  const culSugar = ()=>{
    if (sugar<=125){
      setSugarR('ตรวจซ้ำภายใน 1 เดือน')
    } else {
      setSugarR('ตรวจซ้ำ DTX ภายใน 2 สัปดาห์')
    }
  }
  // เอาไว้ก่อน ยังแก้ไม่ได้
  var r = 0
  const culBMI = ()=>{
    if (r<20){
      setBMIR('ผอม')
    } else {
      setBMIR('ปกติ')
    }
    console.log(BMIR)

  }

  const handleWeight = (event)=>{setWeight(event.target.value)}
  const handleHigh = (event)=>{setHigh(event.target.value)}
  const resultArray = [
    {title: 'แปลผลเส้นรอบเอว', result: waistR},
    {title: 'แปลผลค่า BMI', result: bmi},
    {title: 'แปลผลความดันโลหิต', result: BPR},
    {title: 'แปลผลการตรวจระดับน้ำตาล', result: sugarR}

  ]
  return (
    <div className="css-form">
      {/* <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1> */}
      <form className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2>
        <div className="question">
          {/* content */}
          <div className="row">
            <div className="col-12">
              <p className="txt-center" >
                <strong>ความยาวเส้นรอบเอว</strong>
              </p>
            </div>
            <div className="col-12 mb-15">
              <OutlinedInput
                id="waist"
                value={waist}
                onChange={(e) => {
                  setWaist(e.target.value);
                  culWaist()
                }}
                endAdornment={
                  <InputAdornment position="end">ซม.</InputAdornment>
                }
                fullWidth
              />
            </div>
          </div>
          {/* row-1 */}
          <hr />

          <div className="row">
            <div className="col-12 txt-center">
              <p>
                <strong>ดัชนีมวลการ(BMI)</strong>
              </p>
            </div>
            <div className="col-12">
              <p>น้ำหนัก</p>
            </div>
            <div className="col-12 mb-15">
              <OutlinedInput
                id="weight"
                value={weight}
                onChange={
                  handleWeight
                  // culBMI()
                }
                endAdornment={
                  <InputAdornment position="end">กก.</InputAdornment>
                }
                fullWidth
              />
            </div>
            {/* col */}
            <div className="col-12">
              <p>ส่วนสูง</p>
            </div>
            <div className="col-12 mb-15">
              <OutlinedInput
                id="high"
                value={high}
                onChange={
                  handleHigh
                  // culBMI()
                  // setBmi(r)
                }
                endAdornment={
                  <InputAdornment position="end">ซม.</InputAdornment>
                }
                fullWidth
              />
            </div>
            <br />
            {/* col */}
            <div className="col-12 txt-center">
              <p>ดัชนีมวลการ(BMI)</p>
              <h1 className="display-1 text-black-50"> {r = (weight/((high/100)*2)).toFixed(2)} </h1>
              <h1 className="display-1 text-black-50"> {bmi} </h1>
<br/>
            </div>
            {/* BMI Resulte */}

            {/* <div className="col-12">
              <p>
                <strong>ผลการประเมิน : </strong>
              </p>
            </div> */}
          </div>
          {/* row-2 */}

          <hr />
          <div className="row">
            <div className="col-12 txt-center">
                <p><strong>ความดันโลหิต</strong></p>
              </div>
            <div className="col-12">
              <p>ความดันโลหิต</p>
            </div>
            <div className="col-6">
              <TextField
                id="bloodPressure1"
                variant="outlined"
                value={bloodPressure1}
                onChange={(e) => {
                  setBloodPressure1(e.target.value);
                  culBloodPressure()
                }}
                fullWidth
              />
            </div>
            <div className="col-6">
              <OutlinedInput
                id="bloodPressure2"
                value={bloodPressure2}
                onChange={(e) => {
                  setBloodPressure2(e.target.value);
                  culBloodPressure()
                }}
                endAdornment={
                  <InputAdornment position="end">มม.ปรอท</InputAdornment>
                }
                fullWidth
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-12">
              <p>ชีพจร</p>
            </div>
            <div className="col-12">
              <OutlinedInput
                id="pulse"
                value={pulse}
                onChange={(e) => {
                  setPulse(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">ครั้ง/นาที</InputAdornment>
                }
                fullWidth
              />
            </div>
          </div>
          <br />
          {/* <p>
            <strong>ผลการประเมิน : </strong>
          </p> */}
          {/* row-3 */}
          <hr />
          <div className="row">
            <div className="col-12">
              <p className="txt-center" >
                <strong>ระดับน้ำตาลจากปลายนิ้ว</strong>
              </p>
            </div>
            <div className="col-12 mb-15">
              <OutlinedInput
                id="sugar"
                value={sugar}
                onChange={(e) => {
                  setSugar(e.target.value);
                  culSugar()
                }}
                endAdornment={
                  <InputAdornment position="end">มก./ดล.</InputAdornment>
                }
                fullWidth
              />
            </div>
            {/* <div className="col-12">
              <p>
                <strong>ผลการประเมิน : </strong>
              </p>
            </div> */}
          </div>
          {/* row-4 */}
          {/* content */}
        </div>

        <div className="row justify-content-between">
          <Link to="/mainmenu">
          <button type="button" className="btn form-btn btn-back btn-lg">
            ยกเลิก
          </button>
          </Link>
          <button type="button" className="btn form-btn btn-primary btn-lg" onClick={()=>setShow(true)} >
            บันทึก
          </button>
        </div>
      </form>
      <ShowResultPopup
          title='ผลส่วนที่ 2' 
          dataShow={resultArray}
          show={show}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
    </div>
  );
}
