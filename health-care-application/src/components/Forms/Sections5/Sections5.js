import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, FormControlLabel, TextField, OutlinedInput, InputAdornment, FormControl, InputLabel } from "@material-ui/core";
import "../form-style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import * as formAction from "../../../actions/forms5.action";
import ShowResultPopup from '../ResuleShowsPopUp'


export default function Sections5_1() {
  const forms5Reducer = useSelector(({forms5Reducer}) => forms5Reducer)
  const peopleID = true
  const dispatch = useDispatch()
  const [ans5_1, setAns5_1] = useState(forms5Reducer.ans5_1);
  const [moreInfoAns5_1, setmoreInfoAns5_1] = useState(forms5Reducer.moreInfoAns5_1);
  const [ans5_2, setAns5_2] = useState(forms5Reducer.ans5_2);
  const [ans5_3, setAns5_3] = useState(forms5Reducer.ans5_3);
  const [ans5_4, setAns5_4] = useState(forms5Reducer.ans5_4); //ฟันแท้
  const [ans5_5, setAns5_5] = useState(forms5Reducer.ans5_5); //ฟันผุ
  const [ans5_6, setAns5_6] = useState(forms5Reducer.ans5_6);
  const [ans5_7, setAns5_7] = useState(forms5Reducer.ans5_7);
  const [ans5_8, setAns5_8] = useState(forms5Reducer.ans5_8);
  const [ans5_9, setAns5_9] = useState(forms5Reducer.ans5_9);
  const [ans5_10, setAns5_10] = useState(forms5Reducer.ans5_10);
  const [ans5_11, setAns5_11] = useState(forms5Reducer.ans5_11); //
  const [ans5_12, setAns5_12] = useState(forms5Reducer.ans5_12); //
  const [ans5_13, setAns5_13] = useState(forms5Reducer.ans5_13); //
  const [ans5_14, setAns5_14] = useState(forms5Reducer.ans5_14); //
  const [ans5_15, setAns5_15] = useState(forms5Reducer.ans5_15); //
  const [ans5_16, setAns5_16] = useState(forms5Reducer.ans5_16);
  const [ans5_17, setAns5_17] = useState(forms5Reducer.ans5_17);
  const [collect, setCollect] = useState(forms5Reducer.collect);
  const [results, setresults] = useState(forms5Reducer.results);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(forms5Reducer.count);

  useEffect(() => {
    if(ans5_1 && ans5_2 && ans5_3 && ans5_4 && ans5_5 && ans5_6 && ans5_7 && ans5_8 && ans5_9 && ans5_10 && ans5_11 && ans5_12 && ans5_13 && ans5_14 && ans5_15 && ans5_16 && ans5_17){
      setCollect(true)
    }
  }, [ans5_1, ans5_2, ans5_3, ans5_4, ans5_5, ans5_6, ans5_7, ans5_8, ans5_9, ans5_10, ans5_11, ans5_12, ans5_13, ans5_14, ans5_15, ans5_16, ans5_17])

  useEffect(() => {
    let c = 0
    if(collect){
      c = parseInt(ans5_11)+parseInt(ans5_12)+parseInt(ans5_13)+parseInt(ans5_14)+parseInt(ans5_15)
      c == 5 ? setresults('ส่งต่อเพื่อดูแลรักษาช่องปาก'): setresults('ไม่ต้องส่งต่อ')
      setCount(c)
    }
  }, [collect,ans5_11, ans5_12, ans5_13, ans5_14, ans5_15])

  const handleSubmit = ()=>{
    console.log('c',count)
    setShow(true)
    const data = [
      ans5_1, moreInfoAns5_1, ans5_2, ans5_3, ans5_4, ans5_5, 
      ans5_6, ans5_7, ans5_8, ans5_9, ans5_10, ans5_11, ans5_12, 
      ans5_13, ans5_14, ans5_15, ans5_16, ans5_17,results,collect,count]
    dispatch(formAction.add(data))
  }
  const saveDataToServer = () => {
    formAction.updateOralHealth([
      ans5_1,ans5_2, ans5_3, ans5_4, ans5_5,ans5_6, ans5_7, ans5_8, ans5_9, 
      ans5_10, ans5_11, ans5_12, ans5_13, ans5_14, ans5_15, ans5_16, ans5_17,
      count,results,peopleID,collect]);
  }
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
        <div className="question">
          <p> การแปรงฟัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.1"
            name="questions5.1"
            value={ans5_1}
            onChange={(e) => setAns5_1(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="notooth"
              control={<Radio color="primary" />}
              label="ไม่ได้แปรงฟัน"
            />
            <FormControlLabel
              className="radio-size"
              value="withouttoothbrush"
              control={<Radio color="primary" />}
              label="แปรงแต่ไม่ได้ใช้แปรงสีฟัน"
            /> 
            <FormControlLabel
              className="radio-size"
              value="atimeforday"
              control={<Radio color="primary" />}
              label="แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="twotimeforday"
              control={<Radio color="primary" />}
              label=" แปรงวันละ 2 ครั้ง เช้าและก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="overtwotimeforday"
              control={<Radio color="primary" />}
              label="แปรงมากกว่า 2 ครั้งต่อวัน ระบุ"
            />
            {ans5_1 === 'overtwotimeforday'? <TextField id="outlined-basic" defaultValue={moreInfoAns5_1} onChange={(e)=>setmoreInfoAns5_1(e.target.value)} label="" variant="outlined" size="small" /> :''}
            <FormControlLabel
              className="radio-size"
              value="other"
              control={<Radio color="primary" />}
              label="อื่นๆ ระบุ"
            />
            {ans5_1 === 'other'? <TextField id="outlined-basic" defaultValue={moreInfoAns5_1} onChange={(e)=>setmoreInfoAns5_1(e.target.value)} label="" variant="outlined" size="small" /> :''}
          </RadioGroup>
          <hr />
          <p>การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.2"
            name="questions5.2"
            value={ans5_2}
            onChange={(e) => setAns5_2(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช้"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช้"
            />
          </RadioGroup>
          <hr />
          <p>ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.3"
            name="questions5.3"
            value={ans5_3}
            onChange={(e) => setAns5_3(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำ"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ทำ"
            />
          </RadioGroup>
          <hr />

          {/* จำนวนฟัน */}
          <p>จำนวนฟัน</p>
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">จำนวนฟันแท้</InputLabel>
            <OutlinedInput
              type="number"
              value={ans5_4}
              onChange={(e)=>setAns5_4(e.target.value)}
              endAdornment={<InputAdornment position="end">ซี่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <br/>
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">จำนวนฟันผุ</InputLabel>
            <OutlinedInput
              type="number"
              value={ans5_5}
              onChange={(e)=>setAns5_5(e.target.value)}
              endAdornment={<InputAdornment position="end">ซี่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
<br/>
          <p>จำนวนคู่สบฟันหลัง</p>

          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">ฟันแท้ กับ ฟันแท้</InputLabel>
            <OutlinedInput
              type="number"
              value={ans5_6}
              onChange={(e)=>setAns5_6(e.target.value)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <br/>
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">ฟันแท้ กับ ฟันเทียม</InputLabel>
            <OutlinedInput
              type="number"
              value={ans5_7}
              onChange={(e)=>setAns5_7(e.target.value)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <br/>
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">ฟันเทียม กับ ฟันเทียม</InputLabel>
            <OutlinedInput
              type="number"
              value={ans5_8}
              onChange={(e)=>setAns5_8(e.target.value)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <br/>
          <hr />
          <p> สูบบุหรี่มากกว่า 10 มวนต่อวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.4"
            name="questions5.4"
            value={ans5_9}
            onChange={(e) => setAns5_9(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เคี้ยวหมากเป็นประจำ</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.5"
            name="questions5.5"
            value={ans5_10}
            onChange={(e) => setAns5_10(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง</p>
          <RadioGroup
            className="pl-20"
            value={ans5_11}
            onChange={(e) => setAns5_11(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก</p>
          <RadioGroup
            className="pl-20"
            value={ans5_12}
            onChange={(e) => setAns5_12(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน</p>
          <RadioGroup
            className="pl-20"
            value={ans5_13}
            onChange={(e) => setAns5_13(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร</p>
          <RadioGroup
            className="pl-20"
            value={ans5_14}
            onChange={(e) => setAns5_14(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>จำเป็นต้องใช้ฟันเทียมหรือ ทำฟันเทียมใหม่</p>
          <RadioGroup
            className="pl-20"
            value={ans5_15}
            onChange={(e) => setAns5_15(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p> เคยได้รับการตรวจหรือรักษาจากทันตบุคลากร</p>
          <RadioGroup
            className="pl-20"
            value={ans5_16}
            onChange={(e) => setAns5_16(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>ท่านต้องการการดูแลรักษาช่องปาก</p>
          <RadioGroup
            className="pl-20"
            value={ans5_17}
            onChange={(e) => setAns5_17(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
        </div>

        {/* bt */}
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
          title='ผลการประเมินสุขภาพช่องปาก' 
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
