import React, {useState} from 'react'
import './Sections7.css'
import Checkbox from '@material-ui/core/Checkbox';


export default function MMSIThai2002() {

    const [stateCheck, setstateCheck] = useState({
        q11: false,q12: false,q13: false,q14: false,q15: false,q11Text: false,q12Text: false,q13Text: false,q14Text: false,q15Text: false,
        q2Type: null,q21: false,q22: false,q23: false,q24: false,q25: false,q21Text: false,q22Text: false,q23Text: false,q24Text: false,q25Text: false,
        q31: false,q32: false,q31Text: false,q32Text: false,
    })

    // const {q11, q12} = stateCheck
    const handleSubmit =()=>{    }
    return (
    <div className="css-form">
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>การทดสอบสมองเบื่องต้นฉบับภาษาไทย</h2>
        <div className="question">
        <strong><p>ข้อแนะนำ</p></strong>
        <span>แบบทดสอบสภาพสมองเบื่องต้นใช้คัดกรองภาวะสมองเสื่อมในผู้สูงอายุ สามารถใช้ได้ในผู้สูงอายุที่ไม่ได้เรียนหรือไม่รู้หนังสือ (อ่านไม่ออก เขียนไม่ได้) ด้วย โดยไม่ต้องทำข้อ 4 ข้อ 9 และข้อ 10</span>
          {/* content */}
          <div className="row s7-marginTop">
              <p><strong>1. Orientation for time :</strong> ทดสอบการรับรู้เกี่ยวกับเวลาปัจจุบัน</p>
            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
          </div>
          
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
