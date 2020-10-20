import React, {useState} from 'react'
import {TextField, OutlinedInput, InputAdornment} from '@material-ui/core';

export default function Sections2_3() {

    const [pulse, setPulse] = useState()
    const [bloodPressure1, setBloodPressure1] = useState()
    const [bloodPressure2, setBloodPressure2] = useState()

    return (
        <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
          <div className="question">
            {/* content */}
            <div className="row">
              {/* <div className="col-12 txt-center">
                <p><strong>ความดันโลหิต</strong></p>
              </div> */}
              <div className="col-12">
                <p>ความดันโลหิต</p>
              </div>
              <div className="col-6">
              <TextField id="bloodPressure1" 
              variant="outlined" 
              value={bloodPressure1}
              onChange={(e)=>{setBloodPressure1(e.target.value)} }
              fullWidth
              />
              </div>
              <div className="col-6">
              <OutlinedInput
                id="bloodPressure2"
                value={bloodPressure2}
                onChange={(e)=>{setBloodPressure2(e.target.value)} }
                endAdornment={<InputAdornment position="end">มม.ปรอท</InputAdornment>}
                fullWidth
              />
              </div>
            </div>
            {/* row-1 */}
<br/>
            
            <div className="row">
              <div className="col-12">
                <p>ชีพจร</p>
              </div>
              <div className="col-12">
              <OutlinedInput
                id="pulse"
                value={pulse}
                onChange={(e)=>{setPulse(e.target.value)} }
                endAdornment={<InputAdornment position="end">ครั้ง/นาที</InputAdornment>}
                fullWidth
              />
              </div>
            </div>
            {/* row-2 */}
<br/>
            <p><strong>ผลการประเมิน : </strong></p>
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
