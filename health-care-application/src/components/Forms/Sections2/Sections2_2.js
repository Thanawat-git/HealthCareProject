import React, {useState} from 'react'
import {OutlinedInput, InputAdornment} from '@material-ui/core';

export default function Sections2_2() {

    const [waight, setWeight] = useState()
    const [high, setHigh] = useState()

    return (
        <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
          <div className="question">
            {/* content */}
            <div className="row">
                <div className="col-12 txt-center">
                    <p><strong>ดัชนีมวลการ(BMI)</strong></p>
                </div>
              <div className="col-xl-3 col-12">
                <p>น้ำหนัก</p>
              </div>
              <div className="col-xl-9 col-12 mb-15">
              <OutlinedInput
                id="weight"
                value={waight}
                onChange={(e)=>{setWeight(e.target.value)} }
                endAdornment={<InputAdornment position="end">กก.</InputAdornment>}
                fullWidth
              />
              </div>
              
                {/* col */}

              <div className="col-xl-3 col-12">
                <p>ส่วนสูง</p>
              </div>
              <div className="col-xl-9 col-12 mb-15">
              <OutlinedInput
                id="high"
                value={high}
                onChange={(e)=>{setHigh(e.target.value)} }
                endAdornment={<InputAdornment position="end">ซม.</InputAdornment>}
                fullWidth
              />
              </div>
              <br/>
              {/* col */}
              <div className="col-12 txt-center">
                <p>ดัชนีมวลการ(BMI)</p>
              </div>

            {/* BMI Resulte */}

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
