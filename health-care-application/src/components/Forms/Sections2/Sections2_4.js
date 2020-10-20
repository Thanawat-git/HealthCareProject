import React, {useState} from 'react'
import {OutlinedInput, InputAdornment} from '@material-ui/core';

export default function Sections2_4() {

    const [sugar, setSugar] = useState()

    return (
        <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
          <div className="question">
            {/* content */}
            <div className="row">
              <div className="col-12">
                <p><strong>ระดับน้ำตาลจากปลายนิ้ว</strong></p>
              </div>
              <div className="col-12 mb-15">
              <OutlinedInput
                id="sugar"
                value={sugar}
                onChange={(e)=>{setSugar(e.target.value)} }
                endAdornment={<InputAdornment position="end">มก./ดล.</InputAdornment>}
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
