import React, { useState } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";

export default function Sections5_1() {
  const [ans5_1, setAns5_1] = useState();
  const [ans5_2, setAns5_2] = useState();
  const [ans5_3, setAns5_3] = useState();
  const [ans5_4, setAns5_4] = useState();
  const [ans5_5, setAns5_5] = useState();
  const [ans5_6, setAns5_6] = useState();
  const [ans5_7, setAns5_7] = useState();
  const [ans5_8, setAns5_8] = useState();
  const [ans5_9, setAns5_9] = useState();
  const [ans5_10, setAns5_10] = useState();
  const [ans5_11, setAns5_11] = useState();
  const [ans5_12, setAns5_12] = useState();

  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
        <div className="question">
          <p> การแปรงฟัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.1"
            name="questions5.1"
            value={ans5_1}
            onChange={(e) => setAns5_1(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ไม่ได้แปรงฟัน"
            />
            <FormControlLabel
              className="radio-size"
              value="maybe"
              control={<Radio color="primary" />}
              label="แปรงแต่ไม่ได้ใช้แปรงสีฟัน"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label=" แปรงวันละ 2 ครั้ง เช้าและก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="แปรงมากกว่า 2 ครั้งต่อวัน ระบุ"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="อื่นๆ ระบุ"
            />
          </RadioGroup>
          <hr />
          <p>การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.2"
            name="questions5.2"
            value={ans5_2}
            onChange={(e) => setAns5_2(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช้"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช้"
            />
          </RadioGroup>
          <hr />
          <p>ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.3"
            name="questions5.3"
            value={ans5_3}
            onChange={(e) => setAns5_3(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ทำ"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ทำ"
            />
          </RadioGroup>
          <hr />
          <div className="form-check form-check-inline ">
            <p>
              {/* <span>*</span> */}
              จำนวนฟันแท้
            </p>
            <div className="col-5 p-3">
              <input
                type="text"
                name=""
                id=""
                className="form-control input-sec1 input-sec1-row2"
              />
            </div>
            <label className="form-check-label">ซี่</label>
          </div>

          <br></br>

          <div className="form-check form-check-inline ">
            <p>
              {/* <span>*</span> */}
              จำนวนฟันผุ
            </p>

            <div className="col-5 p-3">
              <input
                type="text"
                name=""
                id=""
                className="form-control input-sec1 input-sec1-row2"
              />
            </div>
            <label className="form-check-label">ซี่</label>
          </div>
          <p>
            {/* <span>*</span> */}
            จำนวนคู่สบฟันหลัง
          </p>

          <div className="row pl-30">
            <div className="col-12">
              <div className="form-check form-check-inline ">
                <label className="form-check-label">ฟันแท้ กับ ฟันแท้</label>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">คู่</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check form-check-inline ">
                <label className="form-check-label">ฟันแท้ กับ ฟันเทียม</label>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">คู่</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check form-check-inline ">
                <label className="form-check-label">
                  ฟันเทียม กับ ฟันเทียม
                </label>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">คู่</label>
              </div>
            </div>
          </div>
          <hr />
          <p> สูบบุหรี่มากกว่า 10 มวนต่อวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.4"
            name="questions5.4"
            value={ans5_4}
            onChange={(e) => setAns5_4(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เคี้ยวหมากเป็นประจำ</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.5"
            name="questions5.5"
            value={ans5_5}
            onChange={(e) => setAns5_5(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.6"
            name="questions5.6"
            value={ans5_6}
            onChange={(e) => setAns5_6(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.7"
            name="questions5.7"
            value={ans5_7}
            onChange={(e) => setAns5_7(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.8"
            name="questions5.8"
            value={ans5_8}
            onChange={(e) => setAns5_8(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.9"
            name="questions5.9"
            value={ans5_9}
            onChange={(e) => setAns5_9(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>จำเป็นต้องใช้ฟันเทียมหรือ ทำฟันเทียมใหม่</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.10"
            name="questions5.10"
            value={ans5_10}
            onChange={(e) => setAns5_10(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เคยได้รับการตรวจหรือรักษาจากทันตบุคลากร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.11"
            name="questions5.11"
            value={ans5_11}
            onChange={(e) => setAns5_11(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>ท่านต้องการการดูแลรักษาช่องปาก</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.12"
            name="questions5.12"
            value={ans5_12}
            onChange={(e) => setAns5_12(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="yes"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="no"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>แปลผล:</p>
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <button type="button" className="btn form-btn btn-back btn-lg">
            ย้อนกลับ
          </button>
          <button type="button" className="btn form-btn btn-primary btn-lg">
            ถัดไป
          </button>
        </div>
      </form>
    </div>
  );
}
