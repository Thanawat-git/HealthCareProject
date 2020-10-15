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
  
          <div>
                <span>*</span>
                {/* <strong>เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง</strong> */}
                <label className="form-check-label">เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
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
                {/* <strong>เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก</strong> */}
                <label className="form-check-label">เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
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
                {/* <strong>มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน</strong> */}
                <label className="form-check-label">มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
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
                {/* <strong>ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร</strong> */}
                <label className="form-check-label">ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
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
