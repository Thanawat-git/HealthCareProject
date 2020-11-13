import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'
// import DatePicker from 'react-date-picker';
import { TextField, InputLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import MyDatePicker from '../MyDatePicker'
import { Link } from 'react-router-dom';



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
      <form action="#" className="shadow p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          {/* content */}

          {/* row-1 */}
          <div className="row">
            <div className="col-12 mb-15">
              <InputLabel htmlFor=""><span className="text-danger" >*</span><strong>รหัสบัตรประชาชน 13 หลัก</strong> </InputLabel>
            </div>
            <div className="col-12">
              <TextField id="" label="รหัสบัตรประชาชน 13 หลัก" variant="outlined" placeholder="รหัสบัตรประชาชน 13 หลัก" className="TextField"
              error={error}
              />
            </div>
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
          </div>
<br/>
          {/* row-3 */}
          <div className="row align-items-center">
            <div className="col-12 col-xl-3">
              <InputLabel htmlFor="gender"><span className="text-danger" >*</span><strong>เพศ</strong> </InputLabel>
            </div>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel className="radio-space" value="male" control={<Radio color='primary' />} label="ชาย"  />
              <FormControlLabel value="famale" control={<Radio color='primary' />} label="หญิง" />
            </RadioGroup>
          </div>
<br/>
          {/* row-4 */}
          <div className="row">
            
            <div className="col-12">
              <TextField id="" label="ชื่อในชุมชน (ถ้ามี)" variant="outlined" placeholder="ชื่อในชุมชน" className="TextField" />
            </div>
          </div>
<br/>
          {/* row-5 */}
          <div className="row">
            <div className="col-12 mb-15">
              <InputLabel htmlFor="bday"><span className="text-danger" >*</span><strong>วันเดือนปีเกิด</strong> 
              <small> หากไม่ทราบ เดือน หรือวัน ให้เลือกเป็น "วันที่ 1 เดือน มกราคม"</small> 
              </InputLabel>
            </div>
            <div className="col-12">
            <MyDatePicker xxx="years"/>
            </div>
          </div>
          
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-center">
          <Link to="/sec1-page2">
          <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
