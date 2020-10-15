import React from 'react'

export default function Sections6_7() {
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form action="#">
    <h2>ส่วนที่ 6 TAI Classified</h2>
      <div className="question">
        {/* content */}
        <span>*</span>
            <strong>Feed</strong>
            <div className="each-question">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">IV</label>
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
                NG Tube
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
                ต้องป้อนและกลืนลำบาก
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
                ต้องป้อน แต่กลืนเองได้ปกติ
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
                <label className="form-check-label">กินได้เอง หกเลอะเทอะ</label>
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
                <label className="form-check-label">กินได้เอง ไม่หกเลอะเทอะ</label>
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
