import React from 'react'

export default function Sections4_2() {

  const questions = ["4.3 ตามัวคล้ายมีหมอกบัง", "4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ"]

  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form>
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        {questions.map((value, index) => {
          var i = index+3
          return (
            <div className="each-question">
              <p>{value}</p>
              <div className="form-check form-check-inline">
                <input type="radio" name={`4.${i}`} id={`art4.${i}r`} value="R" className="form-check-input"/>
                <label htmlFor={`art4.${i}r`} className="form-check-label">ตาข้างขวา</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" name={`4.${i}`} id={`art4.${i}l`} value="L" className="form-check-input"/>
                <label htmlFor={`art4.${i}l`} className="form-check-label">ตาข้างซ้าย</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" name={`4.${i}`} id={`art4.${i}a`} value="A" className="form-check-input"/>
                <label htmlFor={`art4.${i}a`} className="form-check-label">ทั้งสองข้าง</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" name={`4.${i}`} id={`art4.${i}n`} value="N" className="form-check-input"/>
                <label htmlFor={`art4.${i}n`} className="form-check-label">ไม่ใช่</label>
              </div>
            </div>
          )
        })}
      </div>

      <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
  </div>
  );
}
