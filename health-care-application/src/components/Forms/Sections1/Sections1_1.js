import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'
// import DatePicker from 'react-date-picker';
import { TextField, InputLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import MyDatePicker from '../MyDatePicker'



export default function Sections1_1() {
  // const [value, onChange] = useState(new Date());
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleError = (e) => {
    var str = e.target.value
    if (str===''){
      setError(true)
    } else {
      setError(false)
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    // console.log(event.target.value)
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          {/* content */}

          {/* row-1 */}
          <div className="row">
            <div className="col-12">
              <TextField id="" label="*รหัสบัตรประชาชน 13 หลัก" variant="outlined" placeholder="รหัสบัตรประชาชน 13 หลัก" className="TextField"
              onClick={handleError}
              onChange={handleError}
              error={error}
              helperText="กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก"
              />
            </div>
            {/* <div className="input-group">
              <div className="input-group-prepend">
                <span>*</span><strong>รหัสบัตรประชาชน</strong>
              </div>
              <input type="text" name="" id="" className="form-control input-sec1" />
            </div> */}
          </div>
<br/>
          {/* row-2 */}
          <div className="row">
            <div className="col-12 col-xl-6 mb-15">
              <TextField id="" label="*ชื่อ" variant="outlined" placeholder="ชื่อ" className="TextField"
              />
            </div>
            <div className="col-12 col-xl-6">
              <TextField id="" label="*นามสกุล" variant="outlined" placeholder="นามสกุล" className="TextField"
              />
            </div>
            {/* <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>ชื่อ</strong>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>นามสกุล</strong>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div> */}
          </div>
<br/>
          {/* row-3 */}
          <div className="row align-items-center">
            <div className="col-12 col-xl-3">
              <InputLabel htmlFor="gender"><span className="text-danger" >*</span><strong>เพศ</strong> </InputLabel>
            </div>
            {/* <div className="col-3 col-xl-3">
              <FormControlLabel name="gender" value="Male" control={<Radio color="secondary" />} label="ชาย" />
            </div>
            <div className="col-3 col-xl-3">
              <FormControlLabel name="gender" value="Female" control={<Radio color="secondary" />} label="หญิง" />
            </div> */}
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel className="radio-space" value="male" control={<Radio color='primary' />} label="ชาย"  />
              <FormControlLabel value="famale" control={<Radio color='primary' />} label="หญิง" />
            </RadioGroup>
            {/* <div className="col-3">
              <span>*</span><strong>เพศ</strong>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="Male" value="Male" className="form-check-input"/>
                <label htmlFor="Male" className="form-check-label">ชาย</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="Female" value="Female" className="form-check-input"/>
                <label htmlFor="Female" className="form-check-label">หญิง</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="" value="Other" className="form-check-input"/>
                <label htmlFor="Other" className="form-check-label">อื่นๆ</label>
              </div>
            </div> */}
          </div>
<br/>
          {/* row-4 */}
          <div className="row">
            
            <div className="col-12">
              <TextField id="" label="ชื่อในชุมชน (ถ้ามี)" variant="outlined" placeholder="ชื่อในชุมชน" className="TextField" />
            </div>
            {/* <div className="input-group">
                <div className="input-group-prepend">
                  <strong>ชื่อในชุมชน</strong><span className="text-warning" >(ถ้ามี)</span>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row4" />
              </div> */}
          </div>
<br/>
          {/* row-5 */}
          <div className="row">
            <div className="col-12 mb-15">
              <InputLabel htmlFor="bday"><span className="text-danger" >*</span><strong>วันเดือนปีเกิดที่ปรากฎในบัตรประชาชน</strong> </InputLabel>
            </div>
            <div className="col-12">
            <MyDatePicker xxx="years"/>
            </div>
          </div>
          
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-center">
          <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
        </div>
      </form>
    </div>
  );
}
