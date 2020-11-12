import React, { useState } from 'react';
import '../form-style.css'
import './Sections1.css'
import { TextField, InputLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

function AddressInfo(porps) {
  const titleInfo = ['เลขที่', 'ตรอก/ซอย', 'ถนน', 'ตำบล', 'ชุมชน']

  return (
    <div className="row">
      {titleInfo.map((value)=>{
        return(
          <React.Fragment>
            <div className="col-xl-6 col-12 mb-15">
            <TextField id={`${porps.addressID}`} label={value} variant="outlined" placeholder={value} className="TextField"/>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}


export default function Sections1_2() {
  
    const [radioValue, setRadioValue] = useState('yes');

    const handleChange = (event) => {
      setRadioValue(event.target.value);
      // console.log(event.target.value)
    };

    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#"  className="shadow p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            <p><span className="text-danger">*</span>ที่อยู่ตามบัตรประชาชน </p>
            <AddressInfo addressID='1' />
            <p>อำเภอเมือง ชลบุรี</p>
<hr/>
            
            <div className="row align-items-end">
              <div className="col-12">
                <p>ที่อยู่ปัจจุบันเป็นที่อยู่เดียวกับบัตรประชาชนใช่หรือไม่</p>
              </div>
              <div className="col-12 mb-15">
              <RadioGroup row aria-label="add2" name="add2" value={radioValue} onChange={handleChange}>
                <FormControlLabel className="radio-space" value="yes" control={<Radio color='primary' />} label="ใช่"  />
                <FormControlLabel value="no" control={<Radio color='primary' />} label="ไม่ใช่" />
              </RadioGroup>
              </div>
              
            </div>

            {/* Condition needed */}
            {radioValue === 'no' ? 
            <div>
              <p><span className="text-danger">*</span>ที่อยู่ปัจจุบัน </p>
              <AddressInfo addressID='2'/> 
              <p>อำเภอเมือง ชลบุรี</p>
            </div>
            : ''}

            {/* <div className="row"> */}
              <div className="input-group">
                <p>เบอร์โทรศัพท์ <small className="text-warning">(ถ้ามี)</small></p>
                <TextField id="" label="" variant="outlined" placeholder="+66" className="TextField" fullWidth />
              </div>
            {/* </div> */}
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
