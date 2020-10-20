import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import '../form-style.css'
import './Sections4.css'

export default function Sections4_1() {
  
  const [ans4_1, setAns4_1] = useState()
  const [ans4_2, setAns4_2] = useState()
  const [ans4_3, setAns4_3] = useState()
  const [ans4_4, setAns4_4] = useState()
  const [ans4_5, setAns4_5] = useState()

  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form>
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        
        <div className="each-question">
          <p>4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง</p>
          <RadioGroup className="pl-10" aria-label='questions4.1' name='questions4.1' value={ans4_1} onChange={(e)=>setAns4_1(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้</p>
          <RadioGroup className="pl-10" aria-label='questions4.2' name='questions4.2' value={ans4_2} onChange={(e)=>setAns4_2(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.3 ตามัวคล้ายมีหมอกบัง</p>
          <RadioGroup aria-label='questions4.3' name='questions4.3' value={ans4_3} onChange={(e)=>setAns4_3(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="A"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="N" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ</p>
          <RadioGroup aria-label='questions4.4' name='questions4.4' value={ans4_4} onChange={(e)=>setAns4_4(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="A"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="N" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว</p>
          <RadioGroup aria-label='questions4.5' name='questions4.5' value={ans4_5} onChange={(e)=>setAns4_5(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="A"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="N" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
        </div>

        

          
     

      </div>
      <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
  </div>
  );
}

const questions = ["4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง", "4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้"];
const questions2 = ["4.3 ตามัวคล้ายมีหมอกบัง", 
"4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ", 
"4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว"];