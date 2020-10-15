import React, { Component } from "react";
import "../form-style.css";

class Sections5 extends Component {
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
          <div className="question"> 
          <div className="each-question">
            {/* content */}
            
            <div className="row">
              <div className="col-12 p-0">
                <p><span>*</span><strong>การแปรงฟัน</strong></p>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="relativeGender2"
                    id="male2"
                    value="male"
                    className="form-check-input"
                  />
                  <label className="form-check-label">ไม่ได้แปรงฟัน</label>
                </div>
              </div>
              

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">
                  แปรงแต่ไม่ได้ใช้แปรงสีฟัน
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
                <label className="form-check-label">
                  แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน
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
                <label className="form-check-label">
                  แปรงวันละ 2 ครั้ง เช้าและก่อนนอน
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
                <label className="form-check-label">แปรงมากกว่า 2 ครั้งต่อวัน ระบุ</label>
                <div className="col-5 p-0">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">อื่นๆ ระบุ</label>
                <div className="col-6 p-0">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
              </div>
              </div>

              <div>
                <span>*</span>
                <strong>การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน</strong>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช้</label>
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
                  ไม่ใช้
                </label>
              </div>
              <div>
                <span>*</span>
                <strong>ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน</strong>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ทำ</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ไม่ทำ</label>
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
}

export default Sections5;
