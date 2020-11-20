import React, { useState } from "react";
import "../form-style.css";
import "./Sections1.css";
import DatePicker from "react-date-picker";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";

export default function Sections1_9() {
  const [value, onChange] = useState(new Date());

  const [valueDisease, setValueDisease] = useState('');
  const [disease, setDisease] = useState([]);

  const setDiseaseData = (event, value) => {
    //   console.log(e.target.value)
    setValueDisease(value);
    // console.log(valueDisease)
  };

  const confirm = () => {
    if (valueDisease) {
      setDisease((disease) => [...disease, valueDisease]);
      setValueDisease("");
    }
    // console.log(disease)
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-12">
              <p>
                <strong>โรคประจำตัว</strong>
              </p>
            </div>
            <div className="col-10">
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
                  <TextField {...params} variant="outlined" />
                )}
              />
            </div>
            <div className="col-2">
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={confirm}
            >
              {" "}
              เพิ่ม
            </button>
            </div>
            <br />
            <div className="col-12" style={{marginTop:20}} >
              <ol>
                {disease.map((value, index) => {
                  return <li key={index} > {`${value}`} </li>;
                })}
              </ol>
            </div>
          </div>

          <br />
          <div className="row justify-content-center">
            <div className="col-4">
              <strong>วันที่สำรวจ</strong>
            </div>
            <div className="col-6">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={onChange}
                value={value}
                id=""
                className=""
              />
            </div>
          </div>
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec1-page5">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <Link to="/mainmenu">
            <button type="button" className="btn form-btn btn-primary btn-lg">
              สำเร็จ
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

const SimpleDisease = [
  "ความดันโลหิตสูง",
  "เบาหวาน",
  "ไขมันในเส้นเลือดสูง",
  "โรคหัวใจ",
  "อัมพฤต อัมพาต",
  "หลอดเลือดในสมอง",
  "หลอดเลือดหัวใจ",
  "กระดูกพรุน",
  "ข้อเข่าเสื่อม/อักเสบ",
  "กระดูกทับเส้น",
  "กล้ามเนื้ออ่อนแรง/ชา",
  "เก๊าซ์",
  "รูมาตอยด์",
  "ปวดเมื่อยกล้ามเนื้อ",
  "ไตเรื้อรัง",
  "นิ่วในไต",
  "ต่อมลูกหมากโต",
  "หอบหืด/หลอดลมตีบ/ภูมิแพ้/ไซนัส",
  "ปอด",
  "โรคกระเพาะ/กรดไหลย้อน/ลำไส้",
  "ริดสีดวง",
  "ตับ/ถุงน้ำดี",
  "โรคตา",
  "หูพิการ",
  "พิการ",
  "ลมชัก",
  "พากินสัน",
  "ไมเกรน",
  "โรคประสาท",
  "Hypothyroid",
  "มะเร็ง/เนื้องอก",
  "โลหิตจาง",
];
