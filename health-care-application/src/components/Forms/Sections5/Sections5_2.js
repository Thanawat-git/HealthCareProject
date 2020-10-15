import React from "react";
import "../form-style.css";
export default function Sections5_2() {
  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
        <div className="question">
          {/* content */}
          <div className="each-question">

          <div className="form-check form-check-inline ">
            <span>*</span>
            <strong>จำนวนฟันแท้</strong>

            <div className="col-5 p-3">
              {" "}
              <input
                type="text"
                name=""
                id=""
                className="form-control input-sec1 input-sec1-row2"
              />
            </div>
            <label className="form-check-label">ซี่</label>
          </div>


          <div>
            <div className="form-check form-check-inline ">
              <span>*</span>
              <strong>จำนวนฟันผุ</strong>
              <div className="col-5 p-3">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control input-sec1 input-sec1-row2"
                />
              </div>
              <label className="form-check-label">ซี่</label>
            </div>
          </div>

          <div>
            <span>*</span>
            <strong>จำนวนคู่สบฟันหลัง</strong>
            <div>
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

          <div>
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

          <div>
            <div className="form-check form-check-inline ">
            <label className="form-check-label">ฟันเทียม กับ ฟันเทียม</label>
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

 
          <span>*</span>
          <strong>สูบบุหรี่มากกว่า 10 มวนต่อวัน</strong>
   
            <div className="form-check form-check-inline">
              <div className="col-5 p-3">
              <input
                type="radio"
                name="relativeGender2"
                id="male2"
                value="male"
                className="form-check-input"
              /></div>
              <label htmlFor="male2" className="form-check-label">
                ใช่
              </label>
            </div>
     
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="relativeGender2"
                id="male2"
                value="male"
                className="form-check-input"
              />
              <label htmlFor="male2" className="form-check-label">
                ไม่ใช่
              </label>
          </div> 
<div> 
          <span>*</span>
          <strong>เคี้ยวหมากเป็นประจำ</strong>
     
            <div className="form-check form-check-inline">
            <div className="col-5 p-3">
              <input
                type="radio"
                name="relativeGender2"
                id="male2"
                value="male"
                className="form-check-input"
              /></div>
              <label htmlFor="male2" className="form-check-label">
                ใช่
              </label>
            </div>
         
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="relativeGender2"
                id="male2"
                value="male"
                className="form-check-input"
              />
              <label htmlFor="male2" className="form-check-label">
                ไม่ใช่
              </label>
            </div>
         </div>  
         </div>
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
