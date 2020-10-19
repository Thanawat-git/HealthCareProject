import React from 'react'

export default function Sections6_4() {
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form action="#">
    <h2>ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</h2>
      <div className="question">
        {/* content */}
        <div>
                <span>*</span>
                <label className="form-check-label">10. การกลั้นปัสสาวะ ในระยะ 1 สัปดาห์ที่ผ่านมา</label>
              </div>
              <div className="row"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">กลั้นได้ปกติ</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">กลั้นไม่ได้</label>
              </div>
              </div>
              <div className="row"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">กลั้นไม่ได้บางครั้ง แต่น้อยกว่า วันละ 1 ครั้ง</label>
              </div>
              </div>

              <p>แปลผล:</p>

              
              
      </div>

      {/* bt */}
      <div className="row justify-content-between">
        <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
  </div>
  )
}
