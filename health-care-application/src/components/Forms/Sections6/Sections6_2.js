import React from 'react'
import "../form-style.css";

export default function Sections6_2() {
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
                <label className="form-check-label">4.การใช้ห้องน้ำ ห้องส้วม</label>
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
                <label className="form-check-label">ทำได้เอง</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label  className="form-check-label">ทำได้บ้าง หรือต้องช่วยเหลือบางอย่าง</label>
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
                <label className="form-check-label">ช่วยเหลือตนเองไม่ได้</label>
              </div>
</div>
              <div>
                <span>*</span>
                <label className="form-check-label">5.การเคลื่อนที่ภายในห้องหรือบ้าน</label>
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
                <label className="form-check-label">เดินได้เอง</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label  className="form-check-label">เดินได้ต้องช่วยพยุง</label>
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
                <label  className="form-check-label">ใช้รถเข็น แต่ไม่ต้องช่วย</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label  className="form-check-label">ทำไม่ได้</label>
              </div>
              </div>
              <div>
                <span>*</span>
                <label className="form-check-label">6.การสวมเสื้อผ้า</label>
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
                <label className="form-check-label">ทำได้เอง</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ทำได้ แต่ต้องช่วยประมาณครึ่งหนึ่ง</label>
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
                <label className="form-check-label">ต้องมีคนสวมใส่ให้</label>
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
