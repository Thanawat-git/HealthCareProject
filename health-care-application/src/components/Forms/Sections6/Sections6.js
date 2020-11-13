import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import '../form-style.css'

export default function Sections6() {
  
  const [ans6_1, setAns6_1] = useState()
  const [ans6_2, setAns6_2] = useState()
  const [ans6_3, setAns6_3] = useState()
  const [ans6_4, setAns6_4] = useState()
  const [ans6_5, setAns6_5] = useState()
  const [ans6_6, setAns6_6] = useState()
  const [ans6_7, setAns6_7] = useState()
  const [ans6_8, setAns6_8] = useState()
  const [ans6_9, setAns6_9] = useState()
  const [ans6_10, setAns6_10] = useState()
  const [ans6_Im, setAns6_Im] = useState()
  const [ans6_Me, setAns6_Me] = useState()
  const [ans6_Fe, setAns6_Fe] = useState()
  const [ans6_To, setAns6_To] = useState()


  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</h2>
        <div className="question">
         
            {/* content */}
            <p>6.1 กินอาหารได้เอง เมื่อเตรียมสำรับไว้ให้ต่อหน้า</p>
          <RadioGroup className="pl-20" aria-label='questions6.1' name='questions6.1' value={ans6_1} onChange={(e)=>setAns6_1(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ทำได้เอง" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="ทำเองได้บ้างแต่ต้องมีคนช่วย" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ทำไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.2 ล้างหน้า หวีผม แปรงฟัน โกนหนวด 1-2 วันที่ผ่านมา</p>
          <RadioGroup className="pl-20" aria-label='questions6.2' name='questions6.2' value={ans6_2} onChange={(e)=>setAns6_2(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ทำได้เอง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ต้องการความช่วยเหลือ" />
          </RadioGroup>
          <hr/>
          <p>6.3 ลุกนั่งจากที่นอน หรือจากเตียงไปเก้าอี้</p>
          <RadioGroup className="pl-20" aria-label='questions6.3' name='questions6.3' value={ans6_3} onChange={(e)=>setAns6_3(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ทำได้เอง" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="ทำเองได้บ้างแต่ต้องมีคนช่วย" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ต้องการความช่วยเหลือ" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ทำไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.4 การใช้ห้องน้ำ ห้องส้วม</p>
          <RadioGroup className="pl-20" aria-label='questions6.4' name='questions6.4' value={ans6_4} onChange={(e)=>setAns6_4(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ทำได้เอง" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="ทำได้บ้าง หรือต้องช่วยเหลือบางอย่าง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ช่วยเหลือตนเองไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.5 การเคลื่อนที่ภายในห้องหรือบ้าน</p>
          <RadioGroup className="pl-20" aria-label='questions6.5' name='questions6.5' value={ans6_5} onChange={(e)=>setAns6_5(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="เดินได้เอง" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="เดินได้ต้องช่วยพยุง" />
            <FormControlLabel className="radio-size" value="nohelp" control={<Radio color="primary" />} label="ใช้รถเข็น แต่ไม่ต้องช่วย" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ทำไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.6 การสวมเสื้อผ้า</p>
          <RadioGroup className="pl-20" aria-label='questions6.6' name='questions6.6' value={ans6_6} onChange={(e)=>setAns6_6(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ทำได้เอง" />
            <FormControlLabel className="radio-size" value="maybe one" control={<Radio color="primary" />} label="ทำได้ แต่ต้องช่วยประมาณครึ่งหนึ่ง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ต้องมีคนสวมใส่ให้" />
          </RadioGroup>
          <hr/>
          <p>6.7 การขึ้นลงบันได</p>
          <RadioGroup className="pl-20" aria-label='questions6.7' name='questions6.7' value={ans6_7} onChange={(e)=>setAns6_7(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ขึ้นลงได้เอง / ถ้าใช้เครื่องช่วยต้องเอาขึ้นลงได้" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="ต้องมีคนช่วย จึงจะขึ้นได้" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ทำไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.8 การอาบน้ำ</p>
          <RadioGroup className="pl-20" aria-label='questions6.8' name='questions6.8' value={ans6_8} onChange={(e)=>setAns6_8(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="อาบน้ำได้เอง" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ต้องมีคนช่วย หรือทำให้" />
          </RadioGroup>
          <hr/>
          <p>6.9 การกลั้นอุจจาระ ในระยะ 1 สัปดาห์ที่ผ่านมา</p>
          <RadioGroup className="pl-20" aria-label='questions6.9' name='questions6.9' value={ans6_9} onChange={(e)=>setAns6_9(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="กลั้นได้ปกติ" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="กลั้นไม่ได้บางครั้ง แต่น้อยกว่าวันละ 1 ครั้ง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="กลั้นไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>6.10 การกลั้นปัสสาวะ ในระยะ 1 สัปดาห์ที่ผ่านมา</p>
          <RadioGroup className="pl-20" aria-label='questions6.10' name='questions6.10' value={ans6_10} onChange={(e)=>setAns6_10(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="กลั้นได้ปกติ" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="กลั้นไม่ได้บางครั้ง แต่น้อยกว่าวันละ 1 ครั้ง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="กลั้นไม่ได้" />
          </RadioGroup>
          <hr/>
          <p>Immobilize</p>
          <RadioGroup className="pl-20" aria-label='questions6.Im' name='questions6.Im' value={ans6_Im} onChange={(e)=>setAns6_Im(e.target.value)}>
            <FormControlLabel className="radio-size" value="no"  control={<Radio color="primary" />} label="นอนบนเตียงตะแคงไม่ได้" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="นอนบนเตียงตะแคงไปมาได้" />
            <FormControlLabel className="radio-size" value="yes" control={<Radio color="primary" />} label="ลุกนั่งและลงมายืนข้างเตียงได้" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="เดินทางราบได้โดยไม่ต้องช่วยเหลือ" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ขึ้นบันไดไม่ได้ แต่เดินทางราบได้โดยไม่ต้องช่วย" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="เดินขึ้นบันไดได้" />
          </RadioGroup>
          <hr/>
          <p>Mental</p>
          <RadioGroup className="pl-20" aria-label='questions6.Me' name='questions6.Me' value={ans6_Me} onChange={(e)=>setAns6_Me(e.target.value)}>
            <FormControlLabel className="radio-size" value="no"  control={<Radio color="primary" />} label="No Response" />
            <FormControlLabel className="radio-size" value="maybe" control={<Radio color="primary" />} label="มีปัญหาทั้ง Orientation อย่างรุนเเรงและปัญหาพฤติกรรม" />
            <FormControlLabel className="radio-size" value="yes" control={<Radio color="primary" />} label="มีปัญหาเฉพาะเรื่อง Orientation อย่างรุนเเรง" />
            <FormControlLabel className="radio-size" value="noproblem" control={<Radio color="primary" />} label="ไม่มีปัญหาเรื่อง Orientation แต่มีปัญหาพฤติกรรมจนสร้างความรำคาญ" />
            <FormControlLabel className="radio-size" value="yesproblem" control={<Radio color="primary" />} label="มีปัญหาเรื่องการตัดสินใจและความจำ ด้านพฤติกรรม" />
            <FormControlLabel className="radio-size" value="noproblem" control={<Radio color="primary" />} label="ไม่มีปัญหาเรื่องความจำ / การตัดสินใจ Orientation และพฤติกรรม" />
          </RadioGroup>
          <hr/>
          <p>Feed</p>
          <RadioGroup className="pl-20" aria-label='questions6.Fe' name='questions6.Fe' value={ans6_10} onChange={(e)=>setAns6_Fe(e.target.value)}>
            <FormControlLabel className="radio-size" value="IV"  control={<Radio color="primary" />} label="IV" />
            <FormControlLabel className="radio-size" value="NG" control={<Radio color="primary" />} label="NG Tube" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ต้องป้อน และกลืนลำบาก" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ต้องป้อน แต่กลืนเองได้ปกติ" />
            <FormControlLabel className="radio-size" value="yes" control={<Radio color="primary" />} label="กินได้เอง หกเลอะเทอะ" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="กินได้เอง ไม่หกเลอะเทอะ" />
          </RadioGroup>
          <hr/>
          <p>Toilet</p>
          <RadioGroup className="pl-20" aria-label='questions6.To' name='questions6.To' value={ans6_To} onChange={(e)=>setAns6_To(e.target.value)}>
            <FormControlLabel className="radio-size" value="IV"  control={<Radio color="primary" />} label="คาสายสวนปัสสาวะ" />
            <FormControlLabel className="radio-size" value="NG" control={<Radio color="primary" />} label="ใส่/เปลี่ยนผ้าอ้อมด้วยความยากลำบาก" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ใส่/เปลี่ยนผ้าอ้อมไม่ลำบาก ต้องช่วยบ้าง" />
            <FormControlLabel className="radio-size" value="help" control={<Radio color="primary" />} label="ต้องช่วยประคองไปห้องน้ำและช่วยจัดการหลังถ่ายเสร็จ" />
            <FormControlLabel className="radio-size" value="yes" control={<Radio color="primary" />} label="ไปห้องน้ำเองได้ แต่ถ่ายไม่สำเร็จเป็นบางครั้ง" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไปห้องน้ำเองได้ ถ่ายสำเร็จทุกครั้งใน 2 อาทิตย์ที่ผ่านมา" />
          </RadioGroup>
          <hr/>

        </div>

        {/* bt */}
        <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
      </form>
    </div>
  );
}
