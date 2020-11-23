import React, {useEffect, useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, TextField } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections7.css'
import ShowResultPopup from '../ResuleShowsPopUp'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as formAction from "../../../actions/forms7.action";

export default function Sections7_1() {
  const forms7Reducer = useSelector(({forms7Reducer}) => forms7Reducer)
  const dispatch = useDispatch()

  const [ans7_1, setAns7_1] = useState(forms7Reducer.ans7_1)
  const [ans7_2, setAns7_2] = useState(forms7Reducer.ans7_2)
  const [ans7_3, setAns7_3] = useState(forms7Reducer.ans7_3)
  const [ans7_4, setAns7_4] = useState(forms7Reducer.ans7_4)
  const [ans7_5, setAns7_5] = useState(forms7Reducer.ans7_5)
  const [ans7_6, setAns7_6] = useState(forms7Reducer.ans7_6)
  const [ans7_7, setAns7_7] = useState(forms7Reducer.ans7_7)
  const [ans7_8, setAns7_8] = useState(forms7Reducer.ans7_8)
  const [ans7_9, setAns7_9] = useState(forms7Reducer.ans7_9)
  const [ans7_10, setAns7_10] = useState(forms7Reducer.ans7_10)
  const [collect, setCollect] = useState(forms7Reducer.collect);
  const [results, setresults] = useState(forms7Reducer.results);
  const [textAns1, settextAns1] = useState(forms7Reducer.textAns1)
  const [textAns2, settextAns2] = useState(forms7Reducer.textAns2)
  const [textAns3, settextAns3] = useState(forms7Reducer.textAns3)
  const [textAns4, settextAns4] = useState(forms7Reducer.textAns4)
  const [textAns5, settextAns5] = useState(forms7Reducer.textAns5)
  const [textAns6, settextAns6] = useState(forms7Reducer.textAns6)
  const [textAns7, settextAns7] = useState(forms7Reducer.textAns7)
  const [textAns8, settextAns8] = useState(forms7Reducer.textAns8)
  const [textAns9, settextAns9] = useState(forms7Reducer.textAns9)
  const [textAns10, settextAns10] = useState(forms7Reducer.textAns10)

  const [show, setShow] = useState(false);

  useEffect(() => {
    if(ans7_1 && ans7_2 && ans7_3 && ans7_4 && ans7_5 && ans7_6 && ans7_7 && ans7_8 && ans7_9 && ans7_10){
      setCollect(true)
    }
    if(collect){
      const count = parseInt(ans7_1) + parseInt(ans7_2) + parseInt(ans7_3) + parseInt(ans7_4) + parseInt(ans7_5) + parseInt(ans7_6) + parseInt(ans7_7) + parseInt(ans7_8) + parseInt(ans7_9) + parseInt(ans7_10)
      count <= 7 ? setresults('การรู้คิดผิดปกติ ส่งต่อเจ้าหน้าที่ทำแบบประเมิน MMSE-Thai 2002'):setresults('การรู้คิดปกติ')
    }
  }, [ans7_1, ans7_2, ans7_3, ans7_4, ans7_5, ans7_6, ans7_7, ans7_8, ans7_9, ans7_10])
  useEffect(() => {
    if(collect){
      const count = parseInt(ans7_1) + parseInt(ans7_2) + parseInt(ans7_3) + parseInt(ans7_4) + parseInt(ans7_5) + parseInt(ans7_6) + parseInt(ans7_7) + parseInt(ans7_8) + parseInt(ans7_9) + parseInt(ans7_10)
      count <= 7 ? setresults('การรู้คิดผิดปกติ ส่งต่อเจ้าหน้าที่ทำแบบประเมิน MMSE-Thai 2002'):setresults('การรู้คิดปกติ')
    }
  }, [collect])

  const handleSubmit = ()=>{
    setShow(true)
    const data = [
      ans7_1, ans7_2, ans7_3, ans7_4, ans7_5, ans7_6, ans7_7, ans7_8, ans7_9, ans7_10, collect, results,
      textAns1,textAns2,textAns3,textAns4,textAns5,textAns6,textAns7,textAns8,textAns9,textAns10
    ]
    dispatch(formAction.add(data))
  }


  return (
    <div className="css-form">
      {/* <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1> */}
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 7 การประเมินภาวะสมองเสื่อม</h2>
        <div className="question">
          {/* content */}
          <div className="row">
            <div className="col-12">
              <p>1. อายุเท่าไร</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.1' name='questions7.1' value={ans7_1} onChange={(e)=>setAns7_1(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns1} onChange={(e)=>textAns1(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-1 */}

          <div className="row">
            <div className="col-12">
              <p>2. ขณะนี้เวลาอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.2' name='questions7.2' value={ans7_2} onChange={(e)=>setAns7_2(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns2} onChange={(e)=>textAns2(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-2 */}

          <div className="row">
            <div className="col-12">
              <p>3. ที่อยู่ปัจจุบันของท่านคือ</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.3' name='questions7.3' value={ans7_3} onChange={(e)=>setAns7_3(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns3} onChange={(e)=>textAns3(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-3 */}

          <div className="row">
            <div className="col-12">
              <p>4. ปีนี้ปีอะไร</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.4' name='questions7.4' value={ans7_4} onChange={(e)=>setAns7_4(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns4} onChange={(e)=>textAns4(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-4 */}

          <div className="row">
            <div className="col-12">
              <p>5. สถานที่ตรงนี้เรียกว่าอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.5' name='questions7.5' value={ans7_5} onChange={(e)=>setAns7_5(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns5} onChange={(e)=>textAns5(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-5 */}

          <div className="row">
            <div className="col-12">
              <p>6. คนนี้คือใคร (ชี้คนสัมภาษณ์) และคนนี้คือใคร (ชี้ที่คนใกล้ๆ: ญาติ)</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.6' name='questions7.6' value={ans7_6} onChange={(e)=>setAns7_6(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns6} onChange={(e)=>textAns6(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-6 */}

          <div className="row">
            <div className="col-12">
              <p>7. วันเดือนปีเกิดของท่านคือ</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions7.7' name='questions7.7' value={ans7_7} onChange={(e)=>setAns7_7(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            <div className="col-6"><p>เฉลย: </p></div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" defaultValue={textAns7} onChange={(e)=>textAns7(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-7 */}

          <div className="row">
            <div className="col-12">
              <p>8. เหตุการณ์ 14 ตุลา หรือวันมหาวิปโยคเกิดในพ.ศ.อะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.8' name='questions7.8' value={ans7_8} onChange={(e)=>setAns7_8(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              defaultValue={textAns8} onChange={(e)=>textAns8(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-8 */}

          <div className="row">
            <div className="col-12">
              <p>9. พระมหากษัตริย์องค์ปัจจุบัน มีพระนามว่าอะไร</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.9' name='questions7.9' value={ans7_9} onChange={(e)=>setAns7_9(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small"
              defaultValue={textAns9} onChange={(e)=>textAns9(e.target.value)}
              />
            </div>
          </div>
          <hr/>
          {/* row-9 */}

          <div className="row">
            <div className="col-12">
              <p>10. ให้นับถอยหลังจาก 20 จนถึง 1</p>
            </div>
            <div className="col-6">
            <RadioGroup className="pl-20" aria-label='questions7.10' name='questions7.10' value={ans7_10} onChange={(e)=>setAns7_10(e.target.value)}>
              <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ผิด" />
              <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="ถูก" />
            </RadioGroup>             
            </div>
            {/* <div className="col-6"><p>เฉลย: </p></div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField id="" variant="outlined" className="TextField" size="small" label='ใส่ตัวเลขล่าสุดที่ผู้สูงอายุตอบ' 
              defaultValue={textAns10} onChange={(e)=>textAns10(e.target.value)}
              // InputLabelProps={{
              //   shrink: true,
              // }}
              />
            </div>
          </div>
          <hr/>
          {/* row-10 */}

          {/* question */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/mainmenu">
          <button type="button" class="btn form-btn btn-back btn-lg">
            ยกเลิก
          </button>
          </Link>
          <button type="button" class="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >
            บันทึก
          </button>
        </div>
      </form>
      <ShowResultPopup
          title='ผลการประเมินภาวะสมองเสื่อม' 
          result={results}
          show={show}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
    </div>
  );
}
