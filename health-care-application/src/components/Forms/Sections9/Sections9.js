import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, Checkbox } from '@material-ui/core';
import '../form-style.css'
import './Sections9.css'

export default function Sections9() {

    const [ans9_1, setAns9_1] = useState()
    const [ans9_2, setAns9_2] = useState()
    const [ans9_3, setAns9_3] = useState()
    const [ans9_4, setAns9_4] = useState()
    const [ans9_5, setAns9_5] = useState()
    const [ans9_6, setAns9_6] = useState()
    const [ans9_7, setAns9_7] = useState()
    const [ans9_8, setAns9_8] = useState()
    const [ans9_9, setAns9_9] = useState()
    const [ans9_10, setAns9_10] = useState()
    const [ans9_11, setAns9_11] = useState()
    const [ans9_12, setAns9_12] = useState()
    
    const [ans1, setAns1] = useState()
    const [ans2, setAns2] = useState()
    const [ans3, setAns3] = useState()
    const [ans4, setAns4] = useState()
    const [ans5, setAns5] = useState()

    return (
      <div className="css-form">
        <h1>ข้อมูลของผู้สูงอายุ</h1>
        <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
          <h4>การคัดกรองความเสี่ยงต่อการพลัดตกหกล้ม</h4>
          <div className="question">
          <p>9.1 เคยพลัดตกหกล้มในช่วง 1 ปีที่ผ่านมา</p>
          <RadioGroup className="pl-10" aria-label='questions9.1' name='questions9.1' value={ans9_1} onChange={(e)=>setAns9_1(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.2 ใช้ไม้เท้าหรืออุปกรณ์ช่วยเดิน</p>
          <RadioGroup className="pl-10" aria-label='questions9.2' name='questions9.2' value={ans9_2} onChange={(e)=>setAns9_2(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.3 บางครั้งมีความรู้สึกว่าเดินไม่ค่อยมั่นคง</p>
          <RadioGroup className="pl-10" aria-label='questions9.3' name='questions9.3' value={ans9_3} onChange={(e)=>setAns9_3(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.4 ต้องจับเฟอร์นิเจอร์เพื่อประคองตนเองขณะเดินในบ้าน</p>
          <RadioGroup className="pl-10" aria-label='questions9.4' name='questions9.4' value={ans9_4} onChange={(e)=>setAns9_4(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.5 ต้องใช้มือดันตัวเองขึ้นเวลาลุกจากเก้าอี้</p>
          <RadioGroup className="pl-10" aria-label='questions9.5' name='questions9.5' value={ans9_5} onChange={(e)=>setAns9_5(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.6 มีความกังวลว่าตนเองจะหกล้ม</p>
          <RadioGroup className="pl-10" aria-label='questions9.6' name='questions9.6' value={ans9_6} onChange={(e)=>setAns9_6(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.7 มีปัญหาเวลาก้าวขึ้นขอบฟุตบาท</p>
          <RadioGroup className="pl-10" aria-label='questions9.7' name='questions9.7' value={ans9_7} onChange={(e)=>setAns9_7(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.8 ต้องรีบเร่งเข้าห้องน้ำเมื่อปวดปัสสาวะหรืออุจจาระ</p>
          <RadioGroup className="pl-10" aria-label='questions9.8' name='questions9.8' value={ans9_8} onChange={(e)=>setAns9_8(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.9 มีอาการชาที่ฝ่าเท้า</p>
          <RadioGroup className="pl-10" aria-label='questions9.9' name='questions9.9' value={ans9_9} onChange={(e)=>setAns9_9(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.10 กินยาที่ทำให้เวียนหัวหรือเหนื่อยง่ายกว่าปกติ</p>
          <RadioGroup className="pl-10" aria-label='questions9.10' name='questions9.10' value={ans9_10} onChange={(e)=>setAns9_10(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.11 กินยานอนหลับหรือยาแก้เครียด</p>
          <RadioGroup className="pl-10" aria-label='questions9.11' name='questions9.11' value={ans9_11} onChange={(e)=>setAns9_11(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>9.12 รู้สึกเศร้าหรือหดหู่</p>
          <RadioGroup className="pl-10" aria-label='questions9.12' name='questions9.12' value={ans9_12} onChange={(e)=>setAns9_12(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <div className="resua"><p>การแปลผล : </p></div>
          <hr/>
          </div>


          <h4>คัดกรองโรคข้อเข่าเสื่อม</h4>
          <div className="question">
          <p>1. ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า &lt; 30 นาที</p>
          <RadioGroup aria-label='questions1' name='questions1' value={ans1} onChange={(e)=>setAns1(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>2. เสียงดังกรอบแกรบขณะเคลื่อนไหว</p>
          <RadioGroup aria-label='questions2' name='questions2' value={ans2} onChange={(e)=>setAns2(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>3. กดเจ็บที่กระดูกข้อเข่า</p>
          <RadioGroup aria-label='questions3' name='questions3' value={ans3} onChange={(e)=>setAns3(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4. ข้อใหญ่ผิดรูป</p>
          <RadioGroup aria-label='questions4' name='questions4' value={ans4} onChange={(e)=>setAns4(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>5. ไม่พบข้ออุ่น</p>
          <RadioGroup aria-label='questions5' name='questions5' value={ans5} onChange={(e)=>setAns5(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <div className="resua"><p>การแปลผล : </p></div>
          <hr/>
          </div>



        <h4>ประเมินสมรรถภาพทางกาย</h4>
                <div className="question">
                    <div className="each-question">

                        <div className="form-check form-check-inline">
                            <div className="col-3 col-sm-3 col-md-4 col-lg-4">
                                <p>Time Up & Go</p>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <input type="text" name="min" className="form-control" />
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <p htmlFor="min">นาที</p>
                            </div>

                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                <input type="text" name="sec" className="form-control" />
                            </div>
                            <div className="col-3 col-sm-3 col-md-2 col-lg-2">
                                <p htmlFor="sec">วินาที</p>
                            </div>

                        </div> 

                        <p>เสี่ยงต่อการพลัดตกหกล้มสูงจากการตรวจ Time Up & Go</p>
                        {/* <span>ผล</span> */}

                        {/* <div className="row align-items-end">
                                <div className="col-md-3" />
                                <div className="col-md-2 col-sm-12 col-xs-12">
                                    <p><span>*</span>วันที่สำรวจ</p>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" required />
                                </div>
                                <div className="col-md-4" />
                            </div> */}
                    </div>


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
