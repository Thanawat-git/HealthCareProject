import React from 'react'
import '../form-style.css'
import './Sections1.css'

export default function Sections1_5() {

    const Educations = [
        {name:"ไม่ได้เรียนหนังสือ", value:"NE"},
        {name:"ประถมศึกษา", value:"PE"},
        {name:"มัธยมศึกษา", value:"SE"},
        {name:"อนุปริญญา/ ปวช./ ปวส.", value:"Diploma"},
        {name:"ปริญญาตรี", value:"BD"},
        {name:"สูงกว่าปริญญาตรี", value:"overBD"}
    ]

    const careers = [
        {name:"ไม่ได้ประกอบอาชีพ", value:"unemployed"},
        {name:"ค้าขาย", value:"trade"},
        {name:"ข้าราชการบำนาญ", value:"pensioner"},
        {name:"รับจ้าง", value:"employee"},
        {name:"ธุรกิจส่วนตัว", value:"privateBusiness"}
    ]

    return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-12 p-0">
             <p><span>*</span><strong>ระดับการศึกษา</strong></p>
            </div>
            {Educations.map((data, index)=>{
                return (
                    <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                     <div className="form-check form-check-inline">
                      <input type="radio" name="educations" id={data.value} value={data.value} className="form-check-input"/>
                      <label htmlFor={data.value} className="form-check-label">{data.name}</label>
                     </div> 
                    </div>
                )
            })}
          </div>
          {/* row-1 */}
          <br/>

        <div className="row">
            <div className="col-12 p-0">
             <p><span>*</span><strong>อาชีพ</strong></p>
            </div>
            {careers.map((data, index)=>{
                return (
                <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                    <div className="form-check form-check-inline">
                    <input type="radio" name="career" id={data.value} value={data.value} className="form-check-input"/>
                    <label htmlFor={data.value} className="form-check-label">{data.name}</label>
                    </div> 
               </div>
               )
            })}
            <div className="col-xl-4 col-md-6 col-sm-12 col-12">
                <div className="form-check form-check-inline">
                    <input type="radio" name="career" id="otherCareer" value="otherCareer" className="form-check-input"/>
                    <label htmlFor="otherCareer" className="form-check-label">
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend">อื่นๆ ระบุ</div>
                            <input type="text" name="" id="" className="form-control input-sec1"/> 
                        </div>
                    </label>
                </div> 
            </div>
        </div>  
          {/* row-2 */}

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
