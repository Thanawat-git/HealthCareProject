import React, { Component } from 'react';
// Use css form App.css Not Import
import './Page1.css'

class Page1 extends Component {
  render() {
    return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <div className="box-form">
    <form>
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        <p>4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง</p>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.1" id="art4.1y" value="Y" className="form-check-input"/>
          <label htmlFor="art4.1y" className="form-check-label">ใช่</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.1" id="art4.1n" value="N" className="form-check-input"/>
          <label htmlFor="art4.1n" className="form-check-label">ไม่ใช่</label>
        </div>

        <p>4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้</p>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.2" id="art4.2y" value="Y" className="form-check-input"/>
          <label htmlFor="art4.2y" className="form-check-label">ใช่</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.2" id="art4.2n" value="N" className="form-check-input"/>
          <label htmlFor="art4.2n" className="form-check-label">ไม่ใช่</label>
        </div>

        <p>4.3 ตามัวคล้ายมีหมอกบัง</p>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.3" id="art4.3r" value="R" className="form-check-input"/>
          <label htmlFor="art4.3r" className="form-check-label">ตาข้างขวา</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.3" id="art4.3l" value="L" className="form-check-input"/>
          <label htmlFor="art4.3l" className="form-check-label">ตาข้างซ้าย</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.3" id="art4.3b" value="B" className="form-check-input"/>
          <label htmlFor="art4.3b" className="form-check-label">ทั้งสองข้าง</label>
        </div>
        <div className="form-check form-check-inline">
          <input type="radio" name="4.3" id="art4.3n" value="N" className="form-check-input"/>
          <label htmlFor="art4.3n" className="form-check-label">ไม่ใช่</label>
        </div>
      </div>
      <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
    </div>
  </div>
  );
  }
}

export default Page1;
