import React, {useState} from 'react'
import './Sections2.css'
import {OutlinedInput, InputAdornment} from '@material-ui/core';

export default function Sections2_1() {

  const [waist, setWaist] = useState()

  return (
    <div className="css-form">
    <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
    <form>
      <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
      <div className="question">
        {/* content */}
        <div className="row">
          <div className="col-12">
            <p><strong>ความยาวเส้นรอบเอว</strong></p>
          </div>
          <div className="col-12 mb-15">
              <OutlinedInput
                id="waist"
                value={waist}
                onChange={(e)=>{setWaist(e.target.value)} }
                endAdornment={<InputAdornment position="end">ซม.</InputAdornment>}
                fullWidth
              />
          </div>
          <div className="col-12">
            <p><strong>ผลการประเมิน : </strong></p>
          </div>
        </div>
        {/* row-1 */}
        
        {/* content */}
      </div>


      <div className="row justify-content-between">
        <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
        <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
      </div>
    </form>
  </div>
  );
}
