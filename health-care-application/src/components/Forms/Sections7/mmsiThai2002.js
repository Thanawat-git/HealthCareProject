import React from 'react'

export default function mmsiThai2002() {

    const handleSubmit =()=>{
        
    }
    return (
        <div className="css-form">
      <h1>ข้อมูลของผู้สูงอายุ</h1>
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
        <div className="question">
          {/* content */}
          
          
          {/* question */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >ถัดไป</button>
        </div>
      </form>
      </div>
    )
}
