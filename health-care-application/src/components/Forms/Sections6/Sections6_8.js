import React from 'react'

export default function Sections6_8() {
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form action="#">
    <h2>ส่วนที่ 6 TAI Classified</h2>
      <div className="question">
        {/* content */}
        <span>*</span>
            <strong>Toilet</strong>
            <div className="each-question">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">คาสายสวนปัสสาวะ</label>
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
                <label className="form-check-label">
                ใส่/เปลี่ยนผ้าอ้อมด้วยความยากลำบาก
                </label>
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
                <label className="form-check-label">
                ใส่/เปลี่ยนผ้าอ้อมไม่ลำบาก ต้องช่วยบ้าง
                </label>
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
                <label className="form-check-label">
                ต้องช่วยประคองไปห้องน้ำและช่วยจัดการหลังถ่ายเสร็จ
                </label>
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
                <label className="form-check-label">ไปห้องน้ำเองได้ แต่ถ่ายไม่สำเร็จเป็นบางครั้ง</label>
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
                <label className="form-check-label">ไปห้องน้ำเองได้ ถ่ายสำเร็จทุกครั้งใน 2 อาทิตย์ที่ผ่านมา</label>
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
