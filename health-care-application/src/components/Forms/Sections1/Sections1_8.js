import React from 'react'
import '../form-style.css'
import './Sections1.css'
 
function Allergy(props) {
    return (
    <div className="row">
        <div className="col-12 p-0">
            <p><span>*</span><strong>{`ประวัติการแพ้${props.name}`}</strong></p>
        </div>
        <div className="col-12">
            <div className="form-check form-check-inline">
                <input type="radio" name={`${props.type}Allergy`} id={`${props.type}A`} value={`${props.type}A`} className="form-check-input"/>
                <label htmlFor={`${props.type}A`} className="form-check-label">
                    <div className="input-group input-group-sm">
                    <div className="input-group-prepend"> <label className="form-check-label">{`แพ้ ระบุชื่อ${props.name}`}</label></div>
                        <input type="text" name="" id="" className="form-control input-sec1"/> 
                    </div>
                </label>
            </div>
        </div>
        <div className="col-12">
            <div className="form-check form-check-inline">
                <input type="radio" name={`${props.type}Allergy`} id={`N${props.type}A`} value={`N${props.type}A`} className="form-check-input"/>
                <label htmlFor={`N${props.type}A`} className="form-check-label">ไม่แพ้</label>
            </div>
        </div>
        <div className="col-12">
            <div className="form-check form-check-inline">
                <input type="radio" name={`${props.type}Allergy`} id={`Unknow${props.type}A`} value={`Unknow${props.type}A`} className="form-check-input"/>
                <label htmlFor={`Unknow${props.type}A`} className="form-check-label">ไม่ทราบ/ไม่แน่ใจ</label>
            </div>
        </div>
    </div>
    )
}

export default function Sections1_8() {
    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <div className="question">
            {/* row-1 */}
            <Allergy name="ยา" type="drug"/>
            <br/>
            <Allergy name="อาหาร" type="food"/>
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


