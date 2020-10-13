import React from 'react'
import '../form-style.css'
import './Sections1.css'

export default function Sections1_7() {

    const Salary = [
        {name:"ไม่มีรายได้", value:"noSalary"},
        {name:"ไม่เกิน 1,000", value:"less1k"},
        {name:"1,001 - 3,000", value:"1kto3k"},
        {name:"3,001 - 5,000", value:"3kto5k"},
        {name:"5,001 - 10,000", value:"5kto10k"},
        {name:"10,001 - 15,000", value:"10kto15k"},
        {name:"15,001 - 20,000", value:"15kto20k"},
        {name:"20,001 - 25,000", value:"20kto25k"},
        {name:"25,001 ขึ้นไป", value:"over25k"}
    ]

    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <div className="question">
              {/* content */}
              <div className="row">
                <div className="col-12 p-0">
                    <p><span>*</span><strong>รายได้ต่อเดือน</strong><span className="text-secondary" >(บาท)</span></p>
                </div>
                {Salary.map((data, index)=>{
                    return (
                        <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div className="form-check form-check-inline">
                                <input type="radio" name="salary" id={data.value} value={data.value} className="form-check-input"/>
                                <label htmlFor={data.value} className="form-check-label">{data.name}</label>
                            </div> 
                        </div>
                    )
                })}
              </div>
              {/* content */}
            </div>
  
            {/* bt */}
            <div className="row justify-content-between">
              <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
              <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
            </div>
          </form>
        </div>
      );
}
