import React, { useState } from 'react';
import '../form-style.css'
import './Sections1.css'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ADD_NEW_ELDERLY } from '../../../Reducers/Actions/actionsType'
import { connect } from 'react-redux'

function Sections1_2(props) {
  
    const [radioValue, setRadioValue] = useState('yes');

    const handleChange = (event) => {
      setRadioValue(event.target.value);
      // console.log(event.target.value)
    };

    const [homeNumber, setHomeNummber] = useState('') //บ้านเลขที่
    const [alley, setAlley] = useState('') //ตรอก ซอย
    const [street, setStreet] = useState('') //ถนน
    const [subDistrict, setSubDistrict] = useState('') // ตำบล
    const [area, setArea] = useState('') // ชุมชน

    const [curHomeNumber, setCurHomeNummber] = useState('') //บ้านเลขที่
    const [curAlley, setCurAlley] = useState('') //ตรอก ซอย
    const [curStreet, setCurStreet] = useState('') //ถนน
    const [curSubDistrict, setCurSubDistrict] = useState('') // ตำบล
    const [curArea, setCurArea] = useState('') // ชุมชน

    const handelClick = (e)=>{
      e.preventDefault()
      console.log(homeNumber)
    }

    const handelSubmit = (e)=>{
      const ELD_IDN_ADDR_NUMBER = homeNumber;
      const ELD_IDN_ADDR_LANE = alley;
      const ELD_IDN_ADDR_STREET = street;
      const ELD_IDN_ADDR_SUB_DISTRICT = subDistrict;
      const ELD_IDN_ADDR_VILLAGE = area;
      const ELD_CUR_ADDR_NUMBER = curHomeNumber;
      const ELD_CUR_ADDR_LANE = curAlley;
      const ELD_CUR_ADDR_STREET = curStreet;
      const ELD_CUR_ADDR_SUB_DISTRICT = curSubDistrict;
      const ELD_CUR_ADDR_VILLAGE = curArea;
      const ELD_ID_NUMBER = 0;

      const data = {
        ELD_ID_NUMBER,
        ELD_IDN_ADDR_NUMBER,
        ELD_IDN_ADDR_LANE,
        ELD_IDN_ADDR_STREET,
        ELD_IDN_ADDR_SUB_DISTRICT,
        ELD_IDN_ADDR_VILLAGE,
        ELD_CUR_ADDR_NUMBER,
        ELD_CUR_ADDR_LANE,
        ELD_CUR_ADDR_STREET,
        ELD_CUR_ADDR_SUB_DISTRICT,
        ELD_CUR_ADDR_VILLAGE
      }
      props.dispatch({
        type: ADD_NEW_ELDERLY,
        data
      })

    }

    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#"  className="shadow p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            <p><span className="text-danger">*</span>ที่อยู่ตามบัตรประชาชน </p>
            <div className="row">
              <div className="col-xl-6 col-12 mb-15">
                <TextField label='เลขที่' variant="outlined" placeholder='เลขที่' value={homeNumber} onChange={(e)=>setHomeNummber(e.target.value)} className="TextField"/>
              </div>
              <div className="col-xl-6 col-12 mb-15">
                <TextField label='ตรอก/ซอย' variant="outlined" placeholder='ตรอก/ซอย' value={alley} onChange={(e)=>setAlley(e.target.value)} className="TextField"/>
              </div>
              <div className="col-xl-6 col-12 mb-15">
                <TextField label='ถนน' variant="outlined" placeholder='ถนน' value={street} onChange={(e)=>setStreet(e.target.value)} className="TextField"/>
              </div>
              <div className="col-xl-6 col-12 mb-15">
                <TextField label='ตำบล' variant="outlined" placeholder='ตำบล' value={subDistrict} onChange={(e)=>setSubDistrict(e.target.value)} className="TextField"/>
              </div>
              <div className="col-xl-6 col-12 mb-15">
                <TextField label='ชุมชน' variant="outlined" placeholder='ชุมชน' value={area} onChange={(e)=>setArea(e.target.value)} className="TextField"/>
              </div>
            </div>
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
                <div className="row">
                <div className="col-xl-6 col-12 mb-15">
                  <TextField label='เลขที่' variant="outlined" placeholder='เลขที่' value={curHomeNumber} onChange={(e)=>setCurHomeNummber(e.target.value)} className="TextField"/>
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField label='ตรอก/ซอย' variant="outlined" placeholder='ตรอก/ซอย' value={curAlley} onChange={(e)=>setCurAlley(e.target.value)} className="TextField"/>
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField label='ถนน' variant="outlined" placeholder='ถนน' value={curStreet} onChange={(e)=>setCurStreet(e.target.value)} className="TextField"/>
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField label='ตำบล' variant="outlined" placeholder='ตำบล' value={curSubDistrict} onChange={(e)=>setCurSubDistrict(e.target.value)} className="TextField"/>
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField label='ชุมชน' variant="outlined" placeholder='ชุมชน' value={curArea} onChange={(e)=>setCurArea(e.target.value)} className="TextField"/>
                </div>
              </div>
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
            <Link to="/sec1-page1">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            </Link>
            <Link to="/sec1-page1">
            <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handelSubmit} >ถัดไป</button>
            </Link>
          </div>
        </form>
      </div>
    );
}

export default connect()(Sections1_2);