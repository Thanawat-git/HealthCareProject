import React, { useState } from "react";
import "./Sections2.css";
import '../form-style.css'
import '../../genaralConfig.css'
import { OutlinedInput, InputAdornment, TextField } from "@material-ui/core";

export default function Sections2_1() {
  const [waist, setWaist] = useState();
  const [waight, setWeight] = useState();
  const [high, setHigh] = useState();
  const [pulse, setPulse] = useState();
  const [bloodPressure1, setBloodPressure1] = useState();
  const [bloodPressure2, setBloodPressure2] = useState();
  const [sugar, setSugar] = useState();

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
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
                }}
                endAdornment={
                  <InputAdornment position="end">ซม.</InputAdornment>
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
                value={waight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
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
                onChange={(e) => {
                  setHigh(e.target.value);
                }}
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
              <h1 className="display-1 text-black-50">Display 1</h1>
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
            {/* <div className="col-12 txt-center">
                <p><strong>ความดันโลหิต</strong></p>
              </div> */}
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
          <button type="button" class="btn form-btn btn-back btn-lg">
            ย้อนกลับ
          </button>
          <button type="button" class="btn form-btn btn-primary btn-lg">
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
}
