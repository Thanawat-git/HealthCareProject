import React from 'react'

export default function Sections4_1() {

  const questions = ["4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง", "4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้"]

  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form>
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        {questions.map((value, index) => {
          var i = index+1
          return (
            <div className="each-question">
              <p>{value}</p>
              <div className="form-check form-check-inline">
              <input type="radio" name={`4.${i}`} id={`art4.${i}y`} value="Y" className="form-check-input"/>
              <label htmlFor={`art4.${i}y`} className="form-check-label">ใช่</label>
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
