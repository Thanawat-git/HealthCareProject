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
                <label className="form-check-label">จำเป็นต้องใช้ฟันเทียมหรือ ทำฟันเทียมใหม่</label>
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
                <label className="form-check-label">เคยได้รับการตรวจหรือรักษาจากทันตบุคลากร</label>
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
                <label className="form-check-label">ท่านต้องการดูแลรักษาช่องปาก</label>
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
           <p className="pL">แปลผล:</p>
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
