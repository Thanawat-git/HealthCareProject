import React, { useState } from "react";
import "../form-style.css";
import "./Sections1.css";
import DatePicker from 'react-date-picker';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Sections1_9() {
  const [value, onChange] = useState(new Date());

  const [valueDisease, setValueDisease ] = useState();
  const [disease, setDisease] = useState([]);


  const setDiseaseData = (event, value) => {
    //   console.log(e.target.value)
    setValueDisease(value)
    // console.log(valueDisease)
  };

  const confirm = () => {
    setDisease(disease=>[...disease, valueDisease])
    setValueDisease(" ")
    // console.log(disease)
  }

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-12">
              <p>
                {/* <span>*</span> */}
                <strong>โรคประจำตัว</strong>
              </p>
            </div>
            <div className="col-1"></div>
            <div className="col-8">
                    <Autocomplete
                      id="SimpleDisease"
                      options={SimpleDisease}
                      getOptionLabel={(option) => option}
                      disableClearable={true}
                      size="small"
                      value={valueDisease}
                      // getOptionSelected={setDiseaseData}
                      //   style={{ width: 300 }}
                      onInputChange={setDiseaseData}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                        />
                        )}
                    />
            </div>
            <button type="button" className="btn btn-secondary btn-md"
                    onClick={confirm}
            > เพิ่ม
            </button>

            <div className="col-12 mt-10">
              <ol>
                {disease.map((value, index) => {
                  return <li> {`${value}`} </li>;
                })}
              </ol>
            </div>
          </div>

<br/>
          <div className="row justify-content-center">
              <div className="col-4">
                  <strong>วันที่สำรวจ</strong>
              </div>
              <div className="col-6">
                <DatePicker dateFormat="dd/MM/yyyy" onChange={onChange} value={value} id="" className="" />
              </div>
          </div>
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-center">
          <button type="button" className="btn form-btn btn-primary btn-lg">
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}

const SimpleDisease = [
  'ความดันโลหิตสูง',
  'เบาหวาน',
  'ไขมันในเส้นเลือดสูง',
  'โรคหัวใจ',
  'อัมพฤต อัมพาต',
  'หลอดเลือดในสมอง',
  'หลอดเลือดหัวใจ',
  'กระดูกพรุน',
  'ข้อเข่าเสื่อม/อักเสบ',
  'กระดูกทับเส้น',
  'กล้ามเนื้ออ่อนแรง/ชา',
  'เก๊าซ์',
  'รูมาตอยด์',
  'ปวดเมื่อยกล้ามเนื้อ',
  'ไตเรื้อรัง',
  'นิ่วในไต',
  'ต่อมลูกหมากโต',
  'หอบหืด/หลอดลมตีบ/ภูมิแพ้/ไซนัส',
  'ปอด',
  'โรคกระเพาะ/กรดไหลย้อน/ลำไส้',
  'ริดสีดวง',
  'ตับ/ถุงน้ำดี',
  'โรคตา',
  'หูพิการ',
  'พิการ',
  'ลมชัก',
  'พากินสัน',
  'ไมเกรน',
  'โรคประสาท',
  'Hypothyroid',
  'มะเร็ง/เนื้องอก',
  'โลหิตจาง'
]