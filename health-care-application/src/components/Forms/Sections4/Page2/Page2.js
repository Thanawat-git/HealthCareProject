import React, { Component } from 'react';
import './Page2.css'

class Page2 extends Component {
  render() {
    return (
      <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <div className="box-form">
      <form>
        <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
        <div className="question">
          <p>4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.4" id="art4.4r" value="R" className="form-check-input"/>
            <label htmlFor="art4.4r" className="form-check-label">ตาข้างขวา</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.4" id="art4.4l" value="L" className="form-check-input"/>
            <label htmlFor="art4.4l" className="form-check-label">ตาข้างซ้าย</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.4" id="art4.4b" value="B" className="form-check-input"/>
            <label htmlFor="art4.4b" className="form-check-label">ทั้งสองข้าง</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.4" id="art4.4n" value="N" className="form-check-input"/>
            <label htmlFor="art4.4n" className="form-check-label">ไม่ใช่</label>
          </div>

          <p>4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.5" id="art4.5r" value="R" className="form-check-input"/>
            <label htmlFor="art4.5r" className="form-check-label">ตาข้างขวา</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.5" id="art4.5l" value="L" className="form-check-input"/>
            <label htmlFor="art4.5l" className="form-check-label">ตาข้างซ้าย</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.5" id="art4.5b" value="B" className="form-check-input"/>
            <label htmlFor="art4.5b" className="form-check-label">ทั้งสองข้าง</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="4.5" id="art4.5n" value="N" className="form-check-input"/>
            <label htmlFor="art4.5n" className="form-check-label">ไม่ใช่</label>
          </div>

          <p>แปลผล:</p>
          
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

export default Page2;
