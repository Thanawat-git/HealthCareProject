import React from 'react'

export default function Sections6_6() {
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form action="#">
    <h2>ส่วนที่ 6 TAI Classified</h2>
      <div className="question">
        {/* content */}
        <span>*</span>
            <strong>Mental</strong>
            <div className="each-question">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">No Response </label>
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
                มีปัญหาทั้ง Orientation อย่างรุนเเรงและปัญหาพฤติกรรม
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
                มีปัญหาเฉพาะเรื่อง Orientation อย่างรุนเเรง
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
                ไม่มีปัญหาเรื่อง Orientation แต่มีปัญหาพฤติกรรมจนสร้างความรำคาญ
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
                <label className="form-check-label">มีปัญหาเรื่องการตัดสินใจและความจำ ด้านพฤติกรรม</label>
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
                <label className="form-check-label">ไม่มีปัญหาเรื่องความจำ / การตัดสินใจ Orientation และพฤติกรรม  </label>
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
