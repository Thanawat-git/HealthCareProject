import React from 'react'
import "../form-style.css";

export default function Sections6_3() {
  return (
    <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</h2>
          <div className="question">
          <div className="each-question">
            {/* content */}
            <div>
                <span>*</span>
                <label className="form-check-label">7.การขึ้นลงบันได </label>
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
                <label className="form-check-label">ขึ้นลงได้เอง / ถ้าใช้เครื่องช่วยต้องเอาขึ้นลงได้</label>
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
                <label  className="form-check-label">ต้องมีคนช่วย จึงจะขึ้นได้</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ทำไม่ได้</label>
              </div>
</div>
              <div>
                <span>*</span>
                <label className="form-check-label">8.การอาบน้ำ</label>
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
                <label className="form-check-label">อาบน้ำได้เอง</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label  className="form-check-label">ต้องมีคนช่วย หรือทำให้</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label  className="form-check-label">ใช้รถเข็น แต่ไม่ต้องช่วย</label>
              </div>
            
              </div>
              <div>
                <span>*</span>
                <label className="form-check-label">9.การกลั้นอุจจาระ ในระยะ 1 สัปดาห์ที่ผ่านมา</label>
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
                <label className="form-check-label">กลั้นไม่ได้บางครั้ง แต่น้อยกว่า 1 ครั้ง / สัปดาห์</label>
              </div>
              </div>
              </div>

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
