import React, { useState } from "react";
import "../form-style.css";
import "./Sections1.css";
import DatePicker from 'react-date-picker';

export default function Sections1_9() {
  const [showInput, setShowInput] = useState(false);
  const [valueDisease, setValueDisease ] = useState("");
  const [disease, setDisease] = useState([]);
  const [value, onChange] = useState(new Date());

  const setDiseaseData = (e) => {
    //   console.log(e.target.value)
    setValueDisease(e.target.value)
    console.log(valueDisease)
  };

  const confirm = () => {
    setDisease(disease=>[...disease, valueDisease])
    setValueDisease("")
    console.log(disease)
  }

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-4 p-0">
              <p>
                <span>*</span>
                <strong>โรคประจำตัว</strong>
              </p>
            </div>
            <div className="col-8">
              <div className="input-group">
                {showInput ? (
                  <div className="input-group-append">
                    <input
                      type="text"
                      name="diseaseName"
                      id=""
                      value={valueDisease}
                      className="form-control"
                      onChange={setDiseaseData}
                    />
                    <button type="button" className="btn btn-secondary btn-md"
                        onClick={confirm}
                    >
                      เพิ่ม
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary btn-md"
                    onClick={()=>setShowInput(true)}
                  >
                    เพิ่ม
                  </button>
                )}
              </div>
            </div>

            <div className="col-12">
              <ol>
                {disease.map((value, index) => {
                  return <li> {`${value}`} </li>;
                })}
              </ol>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-6">
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
