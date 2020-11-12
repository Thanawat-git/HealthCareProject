import React, { Component } from 'react';
import "../form-style.css";

class Sections3 extends Component {
  render() {
    return (
      <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <div className="box-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 10 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
        <div className="question">
          <p>ปัสสาวะเล็ดหรือราดทำให้การใช้ชีวิตประจำวันของผู้สูงอายุมีปัญหาหรือไม่</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="10" id="art10y" value="Y" className="form-check-input"/>
            <label htmlFor="art10y" className="form-check-label">มี</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="10" id="art10n" value="N" className="form-check-input"/>
            <label htmlFor="art10n" className="form-check-label">ไม่มี</label>
          </div>

        </div>
        <div className="row justify-content-between">
          <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
          <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
        </div>
      </form>
      </div>
    </div>);
  }
}

export default Sections3;
