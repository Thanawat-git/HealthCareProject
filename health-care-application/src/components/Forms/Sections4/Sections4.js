import React, {useEffect, useState} from 'react'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections4.css'
import ShowResultPopup from '../ResuleShowsPopUp'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as formAction from "../../../actions/forms4.action";

export default function Sections4_1() {
  
  const forms4Reducer = useSelector(({forms4Reducer}) => forms4Reducer)
  const dispatch = useDispatch()

  const [ans4_1, setAns4_1] = useState(forms4Reducer.ans4_1)
  const [ans4_2, setAns4_2] = useState(forms4Reducer.ans4_2)
  const [ans4_3, setAns4_3] = useState(forms4Reducer.ans4_3)
  const [ans4_4, setAns4_4] = useState(forms4Reducer.ans4_4)
  const [ans4_5, setAns4_5] = useState(forms4Reducer.ans4_5)
  const [collect, setCollect] = useState(forms4Reducer.collect);
  const [results, setresults] = useState(forms4Reducer.result);
  const [count ,setCount] = useState(forms4Reducer.count)

  const [show, setShow] = useState(false);
  useEffect(() => {
    if(collect === true){
    const c = parseInt(ans4_1)+parseInt(ans4_2)+parseInt(ans4_3)+parseInt(ans4_4)+parseInt(ans4_5)
    setCount(c)
    c>0 ? setresults('มีปัญหาการมองเห็น'):setresults('ปกติ')
    }
  }, [collect,ans4_1,ans4_2,ans4_3,ans4_4,ans4_5])

  useEffect(() => { 
    if(ans4_1 && ans4_2 && ans4_3 && ans4_4 && ans4_5){
      setCollect(true)
    }
  }, [ans4_1,ans4_2,ans4_3,ans4_4,ans4_5])

  const handleSubmit = ()=>{
    setShow(true)
    const data = [ans4_1,ans4_2,ans4_3,ans4_4,ans4_5,results,collect,count]
    dispatch(formAction.add(data))
  }
  const saveDataToServer = () => {
    formAction.updateExa4Eye([ans4_1,ans4_2,ans4_3,ans4_4,ans4_5,count,results]);
  };

  return (
    <div className="css-form ">
    <form className="shadow-lg p-3 mb-5 bg-white rounded" >
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        
          <p>4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง</p>
          <RadioGroup className="pl-20" aria-label='questions4.1' name='questions4.1' value={ans4_1} onChange={(e)=>setAns4_1(e.target.value)}>
            <FormControlLabel className="radio-size" value='1'  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value='0' control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้</p>
          <RadioGroup className="pl-20" aria-label='questions4.2' name='questions4.2' value={ans4_2} onChange={(e)=>setAns4_2(e.target.value)}>
            <FormControlLabel className="radio-size" value='1'  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value='0' control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.3 ตามัวคล้ายมีหมอกบัง</p>
          <RadioGroup className="pl-20" aria-label='questions4.3' name='questions4.3' value={ans4_3} onChange={(e)=>setAns4_3(e.target.value)}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ</p>
          <RadioGroup className="pl-20" aria-label='questions4.4' name='questions4.4' value={ans4_4} onChange={(e)=>setAns4_4(e.target.value)}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว</p>
          <RadioGroup className="pl-20" aria-label='questions4.5' name='questions4.5' value={ans4_5} onChange={(e)=>setAns4_5(e.target.value)}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>

      </div>
      <div className="row justify-content-between">
        <Link to="/mainmenu">
        <button type="button" className="btn form-btn btn-back btn-lg">
          ยกเลิก
        </button>
        </Link>
        <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >
          บันทึก
        </button>
      </div>
      </form>
      <ShowResultPopup
          title='ผลการประเมินสุขภาพตา' 
          result={results}
          show={show}
          onClick={saveDataToServer}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
  </div>
  );
}

// const questions = ["4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง", "4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้"];
// const questions2 = ["4.3 ตามัวคล้ายมีหมอกบัง", 
// "4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ", 
// "4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว"];