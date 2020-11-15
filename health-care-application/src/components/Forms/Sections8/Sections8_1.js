import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, TextField } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections8.css'
import { Link } from 'react-router-dom';
import { ADD_NEW_ELDERLY } from '../../../Reducers/Actions/actionsType'
import { connect } from 'react-redux'

function Sections8_1(props) {

  const [ans8_1, setAns8_1] = useState('')
  const [ans8_2, setAns8_2] = useState('')

  // const qusetions = ["ผู้สูงอายุรู้สึกหดหู่ เศร้า หรือท้อแท้สิ้นหวัง", "ผู้สูงอายุรู้สึกทำอะไรก็ไม่เพลิดเพลิน"]
  const handelSubmit = ()=>{
    const data = {
      ans8_1,
      ans8_2
    }
    props.dispatch({
      type: ADD_NEW_ELDERLY,
      data
    })
  }

  return (
    <div className="css-form">
      <h1>ข้อมูลของผู้สูงอายุ</h1>
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
        <div className="question">
          {/* content */}
          <div className="row">
            <div className="col-12">
              <p>1. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกหดหู่ เศร้า หรือท้อแท้สิ้นหวัง</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions8.1' name='questions8.1' value={ans8_1} onChange={(e)=>setAns8_1(e.target.value)}>
              <FormControlLabel className="radio-size" value='yes'  control={<Radio color="primary" />} label="มี" />
              <FormControlLabel className="radio-size" value='no' control={<Radio color="primary" />} label="ไม่มี" />
            </RadioGroup>             
            </div>
          </div>
          <hr/>
          {/* row-1 */}

          <div className="row">
            <div className="col-12">
              <p>2. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกทำอะไรก็ไม่เพลิดเพลิน</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions8.2' name='questions8.2' value={ans8_2} onChange={(e)=>setAns8_2(e.target.value)}>
              <FormControlLabel className="radio-size" value='yes'  control={<Radio color="primary" />} label="มี" />
              <FormControlLabel className="radio-size" value='no' control={<Radio color="primary" />} label="ไม่มี" />
            </RadioGroup>             
            </div>
          </div>
          <hr/>
          {/* row-2 */}
          
          {/* question */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
          <Link to="/mainmenu">
            <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handelSubmit} >ถัดไป</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default connect()(Sections8_1);
