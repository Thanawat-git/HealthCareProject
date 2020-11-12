import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, TextField } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections7.css'
import ShowResultPopup from '../ResuleShowsPopUp'
import { Link } from 'react-router-dom';

export default function Sections7_1() {

  const [ans7_1, setAns7_1] = useState()
  const [ans7_2, setAns7_2] = useState()
  const [ans7_3, setAns7_3] = useState()
  const [ans7_4, setAns7_4] = useState()
  const [ans7_5, setAns7_5] = useState()
  const [ans7_6, setAns7_6] = useState()
  const [ans7_7, setAns7_7] = useState()
  const [ans7_8, setAns7_8] = useState()
  const [ans7_9, setAns7_9] = useState()
  const [ans7_10, setAns7_10] = useState()

  const [show, setShow] = useState(false);

  const resultArray = [
    // {title: 'แปลผลเส้นรอบเอว', result: waist},
    // {title: 'แปลผลค่า BMI', result: bmi}
  ]

  // const qusetions = ["อายุเท่าไร", "ขณะนี้เวลาอะไร", "ที่อยู่ปัจจุบันของท่านคือ", 
  // "ปีนี้ปีอะไร", "สถานที่ตรงนี้เรียกว่าอะไร", "คนนี้คือใคร (ชี้คนสัมภาษณ์) และ"
  // ]


  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 7 การประเมินภาวะสมองเสื่อม</h2>
        <div className="question">
          {/* content */}
          <div className="row">
            <div className="col-12">
              <p>1. อายุเท่าไร</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.1' name='questions7.1' value={ans7_1} onChange={(e)=>setAns7_1(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-1 */}

          <div className="row">
            <div className="col-12">
              <p>2. ขณะนี้เวลาอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.2' name='questions7.2' value={ans7_2} onChange={(e)=>setAns7_2(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-2 */}

          <div className="row">
            <div className="col-12">
              <p>3. ที่อยู่ปัจจุบันของท่านคือ</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.3' name='questions7.3' value={ans7_3} onChange={(e)=>setAns7_3(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-3 */}

          <div className="row">
            <div className="col-12">
              <p>4. ปีนี้ปีอะไร</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.4' name='questions7.4' value={ans7_4} onChange={(e)=>setAns7_4(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-4 */}

          <div className="row">
            <div className="col-12">
              <p>5. สถานที่ตรงนี้เรียกว่าอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.5' name='questions7.5' value={ans7_5} onChange={(e)=>setAns7_5(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-5 */}

          <div className="row">
            <div className="col-12">
              <p>6. คนนี้คือใคร (ชี้คนสัมภาษณ์) และคนนี้คือใคร (ชี้ที่คนใกล้ๆ: ญาติ)</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.6' name='questions7.6' value={ans7_6} onChange={(e)=>setAns7_6(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-6 */}

          <div className="row">
            <div className="col-12">
              <p>7. วันเดือนปีเกิดของท่านคือ</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.7' name='questions7.7' value={ans7_7} onChange={(e)=>setAns7_7(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-7 */}

          <div className="row">
            <div className="col-12">
              <p>8. เหตุการณ์ 14 ตุลา หรือวันมหาวิปโยคเกิดในพ.ศ.อะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.8' name='questions7.8' value={ans7_8} onChange={(e)=>setAns7_8(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-8 */}

          <div className="row">
            <div className="col-12">
              <p>9. พระมหากษัตริย์องค์ปัจจุบัน มีพระนามว่าอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.9' name='questions7.9' value={ans7_9} onChange={(e)=>setAns7_9(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              />
            </div>
          </div>
          <hr/>
          {/* row-9 */}

          <div className="row">
            <div className="col-12">
              <p>10. ให้นับถอยหลังจาก 20 จนถึง 1</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.10' name='questions7.10' value={ans7_10} onChange={(e)=>setAns7_10(e.target.value)}>
              <FormControlLabel className="radio-size" value='false'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='true' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" label='ใส่ตัวเลขล่าสุดที่ผู้สูงอายุตอบ' 
              // InputLabelProps={{
              //   shrink: true,
              // }}
              />
            </div>
          </div>
          <hr/>
          {/* row-10 */}

          {/* question */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/mainmenu">
          <button type="button" class="btn form-btn btn-back btn-lg">
            ยกเลิก
          </button>
          </Link>
          <button type="button" class="btn form-btn btn-primary btn-lg" onClick={()=>setShow(true)} >
            บันทึก
          </button>
        </div>
      </form>
      <ShowResultPopup
          title='ผลส่วนที่ 7' 
          dataShow={resultArray}
          show={show}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
    </div>
  );
}
