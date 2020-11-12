import React, { useState } from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import ShowResultPopup from '../ResuleShowsPopUp'
import { Link } from 'react-router-dom';


export default function Sections3() {
  const [ans3_1, setAns3_1] = useState()
  const [ans3_2, setAns3_2] = useState()
  const [ans3_3, setAns3_3] = useState()
  const [ans3_4, setAns3_4] = useState()
  const [ans3_5, setAns3_5] = useState()
  const [ans3_6, setAns3_6] = useState()

  const [show, setShow] = useState(false);

  const resultArray = [
    // {title: 'แปลผลเส้นรอบเอว', result: waist},
    // {title: 'แปลผลค่า BMI', result: bmi}
  ]
  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form className="shadow-lg p-3 mb-5 bg-white rounded" >
      <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
      <div className="question">
        
          <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี</p>
          <RadioGroup className="pl-20" aria-label='questions3.1' name='questions3.1' value={ans3_1} onChange={(e)=>setAns3_1(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>3.2 ความดันโลหิต ≥ 130/85 หรือแพทย์บอกว่าเป็นความดันโลหิตสูง</p>
          <RadioGroup className="pl-20" aria-label='questions3.2' name='questions3.2' value={ans3_2} onChange={(e)=>setAns3_2(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
          <RadioGroup className="pl-20" aria-label='questions3.3' name='questions3.3' value={ans3_3} onChange={(e)=>setAns3_3(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <RadioGroup className="pl-20" aria-label='questions3.4' name='questions3.4' value={ans3_4} onChange={(e)=>setAns3_4(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
          <RadioGroup className="pl-20" aria-label='questions3.5' name='questions3.5' value={ans3_5} onChange={(e)=>setAns3_5(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต</p>
          <RadioGroup className="pl-20" aria-label='questions3.6' name='questions3.6' value={ans3_6} onChange={(e)=>setAns3_6(e.target.value)}>
            <FormControlLabel className="radio-size" value="yes"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="no" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>

      </div>
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
          title='ผลส่วนที่ 3' 
          dataShow={resultArray}
          show={show}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
  </div>
  )
}


// class Sections3 extends Component {
//   render() {
//     return (
//       <div className="css-form">
//       <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
//       <div className="box-form">
//       <form className="shadow-lg p-3 mb-5 bg-white rounded" >
//         <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
//         <div className="question">
//           <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี</p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.1" id="art3.1y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.1y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.1" id="art3.1n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.1n" className="form-check-label">ไม่ใช่</label>
//           </div>
//           <hr />
//           <p>3.2 ความดันโลหิต ≥ 130/85 หรือแพทย์บอกว่าเป็นความดันโลหิตสูง</p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.2" id="art3.2y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.2y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.2" id="art3.2n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.3n" className="form-check-label">ไม่ใช่</label>
//           </div>
//           <hr />
//           <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.3" id="art3.3y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.3y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.3" id="art3.3n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.3n" className="form-check-label">ไม่ใช่</label>
//           </div>
//           <hr />
//           <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.4" id="art3.4y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.4y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.4" id="art3.4n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.4n" className="form-check-label">ไม่ใช่</label>
//           </div>
//           <hr />
//           <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.5" id="art3.5y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.5y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.5" id="art3.5n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.5n" className="form-check-label">ไม่ใช่</label>
//           </div>
//           <hr />
//           <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต </p>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.6" id="art3.6y" value="Y" className="form-check-input"/>
//             <label htmlFor="art3.6y" className="form-check-label">ใช่</label>
//           </div>
//           <div className="form-check form-check-inline">
//             <input type="radio" name="3.6" id="art3.6n" value="N" className="form-check-input"/>
//             <label htmlFor="art3.6n" className="form-check-label">ไม่ใช่</label>
//           </div>
//         </div>
//         <div className="row justify-content-between">
//           <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
//           <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
//         </div>
//       </form>
//       </div>
//     </div>);
//   }
// }

// export default Sections3;
