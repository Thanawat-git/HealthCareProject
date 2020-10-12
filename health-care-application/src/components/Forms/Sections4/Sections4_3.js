import React from 'react'

export default function Sections4_3() {

  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form>
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
          <div className="each-question">
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
          </div>

          <p>แปลผล:</p>
      </div>
      
      <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
  </div>
  );
}
