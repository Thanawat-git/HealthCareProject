import React, {useState} from 'react'
import '../../genaralConfig.css'
import '../form-style.css'
import './Sections1.css'
import { TextField, InputLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Neighbor1(props) {
  const [gender1, setGender1] = useState('')
  const [time1, setTime1] = useState('')
  const [relative1, setRelative1] = useState('')
  const handleChange = (event) => {
    switch(event.target.value){
      case 'famale1' :
      case 'male1' :
        setGender1(event.target.value);
        break;
      case 'allday' :
      case 'day' :
      case 'night' :
        setTime1(event.target.value);
        break;
      default:
        setRelative1(event.target.value);
        break;
    }
  };
  return (
    <React.Fragment>
      <h4>ญาติคนที่ {props.no}</h4>
      <div className="row">
        <div className="col-12 mb-15">
          <TextField id="outlined-basic" label="*ชื่อ" variant="outlined" fullWidth />
        </div>
        <div className="col-12 mb-15">
          <TextField id="outlined-basic" label="*นามสกุล" variant="outlined" fullWidth />
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-12 col-xl-3">
          <InputLabel htmlFor="gender1"><span className="text-danger" >*</span><strong>เพศ</strong> </InputLabel>
        </div>
        <RadioGroup row aria-label="gender1" name="gender1" value={gender1} onChange={handleChange}>
          <FormControlLabel className="radio-space" value="male1" control={<Radio color='primary' />} label="ชาย"  />
          <FormControlLabel value="famale1" control={<Radio color='primary' />} label="หญิง" />
        </RadioGroup>
      </div>
<br/>
      <div className="row">
        <div className="col-12">
          <InputLabel htmlFor="time1"><span className="text-danger" >*</span><strong>เวลาที่อยู่กับผู้สูงอายุ</strong> </InputLabel>
        </div>
        <RadioGroup className="pl-5" aria-label="time1" name="time1" value={time1} onChange={handleChange}>
          <FormControlLabel value="allday" control={<Radio color='primary' />} label="ทั้งวัน"  />
          <FormControlLabel value="day" control={<Radio color='primary' />} label="เฉพาะกลางวัน" />
          <FormControlLabel value="night" control={<Radio color='primary' />} label="เฉพาะกลางคืน" />
        </RadioGroup>
      </div>
<br/>
      <div className="row">
        <div className="col-12">
          <InputLabel htmlFor="relative1"><span className="text-danger" >*</span><strong>ความสัมพันธ์กับผู้สูงอายุ</strong> </InputLabel>
        </div>
        <RadioGroup className="pl-5" aria-label="relative1" name="relative1" value={relative1} onChange={handleChange}>
          <FormControlLabel value="child1" control={<Radio color='primary' />} label="บุตรชาย/บุตรสาว"  />
          <FormControlLabel value="sonInLaw1" control={<Radio color='primary' />} label="ลูกเขย/ลูกสะใภ้" />
          <FormControlLabel value="grandchild1" control={<Radio color='primary' />} label="หลานสาว/หลานสาว" />
          <FormControlLabel value="siblings1" control={<Radio color='primary' />} label="พี่น้อง" />
          <FormControlLabel value="parents1" control={<Radio color='primary' />} label="บิดา/มารดา" />
          <FormControlLabel value="partner1" control={<Radio color='primary' />} label="สามี/ภรรยา" />
          <FormControlLabel value="otherP1" control={<Radio color='primary' />} label="บุคคลอื่น" />
        </RadioGroup>
      </div>
      <br/>
      <p>เบอร์โทรศัพท์ <small>(ถ้ามี)</small></p>
      <TextField id="" label="" variant="outlined" placeholder="+66" className="TextField" fullWidth />
      {/* <p> {gender1} </p> */}
    </React.Fragment>
  )
}



export default function Sections1_3() {
  const [firstNeighbor, setFirstNeighbor] = useState('');
  const [secondNeighbor, setSecondNeighbor] = useState('');

  const handleChange = (event) => {
    switch (event.target.value) {
      case 'yes1' :
      case 'no1' :
        setFirstNeighbor(event.target.value);
        break;
      default :
        setSecondNeighbor(event.target.value);
        break;
    }
    // console.log(event.target.value)
  };
    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#" className="shadow p-3 mb-5 bg-white rounded" >
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <h4>ข้อมูลญาติผู้ดูแล</h4>
            <div className="question">
              <p>มีญาติหรือผู้ดูแลหรือไม่</p>
            <RadioGroup row aria-label="firstNeighbor" name="firstNeighbor" value={firstNeighbor} onChange={handleChange}>
              <FormControlLabel value="yes1" className="radio-space" control={<Radio color='primary'/>} label="มี" />
              <FormControlLabel value="no1" control={<Radio />} label="ไม่มี" />
            </RadioGroup>
<br/>
            {firstNeighbor === 'yes1' ? 
            <React.Fragment>
              <Neighbor1 no="1"/>
              <hr/>
              <p>มีญาติหรือผู้ดูแลคนที่ 2 หรือไม่</p>
              <RadioGroup row aria-label="secondNeighbor" name="secondNeighbor" value={secondNeighbor} onChange={handleChange}>
                <FormControlLabel value="yes2" className="radio-space" control={<Radio color='primary'/>} label="มี" />
                <FormControlLabel value="no2" control={<Radio />} label="ไม่มี" />
              </RadioGroup> 
              {secondNeighbor === 'yes2' ? 
                <Neighbor1 no="2"/>
              : ''}
            </React.Fragment>
            : '' }
              {/* content */}
            </div>
  
            {/* bt */}
            <div className="row justify-content-between">
            <Link to="/sec1-page2">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            </Link>
            <Link to="/sec1-page4">
            <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
            </Link>
            </div>
          </form>
        </div>
      );
}
