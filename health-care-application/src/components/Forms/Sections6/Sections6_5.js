import React from 'react'

export default function Sections6_5() {
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form action="#">
    <h2>ส่วนที่ 6 TAI Classified</h2>
      <div className="question">
        {/* content */}
        <span>*</span>
            <strong>Immobilize</strong>
            <div className="each-question">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">นอนบนเตียงตะแคงไม่ได้</label>
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
                นอนบนเตียงตะแคงไปมาได้
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
                ลุกนั่งและลงมายืนข้างเตียงได้
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
                เดินทางราบได้โดยไม่ต้องช่วยเหลือ
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
                <label className="form-check-label">ขึ้นบันไดไม่ได้ แต่เดินทางราบได้โดยไม่ต้องช่วย</label>
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
                <label className="form-check-label">เดินขึ้นบันไดได้</label>
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
