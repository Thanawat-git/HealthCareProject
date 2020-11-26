import React, {useEffect, useState} from 'react'
import { FormControlLabel, Checkbox, FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../form-style.css'
import './Sections9.css'
import { useDispatch, useSelector } from 'react-redux';
import * as formAction from "../../../actions/forms92.action";
import { Link } from 'react-router-dom';
import ShowResultPopup from '../ResuleShowsPopUp'

export default function Sections9_2() {
    const forms92Reducer = useSelector(({forms92Reducer}) => forms92Reducer)
    const dispatch = useDispatch()
    const [stateCheck, setstateCheck] = useState({
        ans1R: forms92Reducer.ans1R,
        ans2R: forms92Reducer.ans2R,
        ans3R: forms92Reducer.ans3R,
        ans4R: forms92Reducer.ans4R,
        ans5R: forms92Reducer.ans5R,
        ans1L: forms92Reducer.ans1L,
        ans2L: forms92Reducer.ans2L,
        ans3L: forms92Reducer.ans3L,
        ans4L: forms92Reducer.ans4L,
        ans5L: forms92Reducer.ans5L,
        ans1N: forms92Reducer.ans1N,
        ans2N: forms92Reducer.ans2N,
        ans3N: forms92Reducer.ans3N,
        ans4N: forms92Reducer.ans4N,
        ans5N: forms92Reducer.ans5N,
    })
    const {ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N} = stateCheck
    const [collect, setCollect] = useState(forms92Reducer.collect);
    const [results, setresults] = useState(forms92Reducer.results);
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(forms92Reducer.count);

    const [dis1Y, setdis1Y] = useState(false)
    const [dis1N, setdis1N] = useState(false)
    const [dis2Y, setdis2Y] = useState(false)
    const [dis2N, setdis2N] = useState(false)
    const [dis3Y, setdis3Y] = useState(false)
    const [dis3N, setdis3N] = useState(false)
    const [dis4Y, setdis4Y] = useState(false)
    const [dis4N, setdis4N] = useState(false)
    const [dis5Y, setdis5Y] = useState(false)
    const [dis5N, setdis5N] = useState(false)

    const handleChange = (event) => {
        console.log(event.target.name,' ',event.target.value)
        setstateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        (ans1R || ans1L)? setdis1N(true) : setdis1N(false);
        (ans2R || ans2L)? setdis2N(true) : setdis2N(false);
        (ans3R || ans3L)? setdis3N(true) : setdis3N(false);
        (ans4R || ans4L)? setdis4N(true) : setdis4N(false);
        (ans5R || ans5L)? setdis5N(true) : setdis5N(false);
        ans1N? setdis1Y(true) : setdis1Y(false);
        ans2N? setdis2Y(true) : setdis2Y(false);
        ans3N? setdis3Y(true) : setdis3Y(false);
        ans4N? setdis4Y(true) : setdis4Y(false);
        ans5N? setdis5Y(true) : setdis5Y(false);
        if((ans1R||ans1L||ans1N)&&(ans2R||ans2L||ans2N)&&(ans3R||ans3L||ans3N)&&(ans4R||ans4L||ans4N)&&(ans5R||ans5L||ans5N)){
            setCollect(true)
        }
        let counter = 5
        if(collect){
            ans1N && counter--
            ans2N && counter--
            ans3N && counter--
            ans4N && counter--
            ans5N && counter--
            setCount(counter)
            counter>3?setresults('ใช่มากกว่า 3 ข้อ') : setresults('ใช่น้อยกว่า 3 ข้อ')
        }
    }, [collect,ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N])
    
    const handleSubmit = ()=>{
        setShow(true)
        const data = [
            ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N,
            collect,results,count
        ]
        dispatch(formAction.add(data))
    }
    function saveDataToServer(){
        console.log('xxxxxxxxxxxxx')
        formAction.updateExa9_1Osteoarthritis([
            ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N,results
        ])
    }
    
    return (
      <div className="css-form">
        <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
          <h4>คัดกรองโรคข้อเข่าเสื่อม</h4>
          <div className="question">
          <p>1. ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า &lt; 30 นาที</p>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={ans1R} value="ปวดข้างขวา" onChange={handleChange} name="ans1R" color="primary" />}
                label="ขวา" disabled={dis1Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans1L} value="ปวดข้างซ้าย" onChange={handleChange} name="ans1L" color="primary" />}
                label="ซ้าย" disabled={dis1Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans1N} value="ไม่ปวด" onChange={handleChange} name="ans1N" />}
                label="ไม่ใช่" disabled={dis1N}
            />
          </FormGroup>
          <hr/>
          <p>2. เสียงดังกรอบแกรบขณะเคลื่อนไหว</p>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={ans2R} onChange={handleChange} name="ans2R" color="primary" />}
                label="ขวา" disabled={dis2Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans2L} onChange={handleChange} name="ans2L" color="primary" />}
                label="ซ้าย" disabled={dis2Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans2N} onChange={handleChange} name="ans2N" />}
                label="ไม่ใช่" disabled={dis2N}
            />
          </FormGroup>
          <p>3. กดเจ็บที่กระดูกข้อเข่า</p>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={ans3R} onChange={handleChange} name="ans3R" color="primary" />}
                label="ขวา" disabled={dis3Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans3L} onChange={handleChange} name="ans3L" color="primary" />}
                label="ซ้าย" disabled={dis3Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans3N} onChange={handleChange} name="ans3N" />}
                label="ไม่ใช่" disabled={dis3N}
            />
          </FormGroup>
          <hr/>
          <p>4. ข้อใหญ่ผิดรูป</p>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={ans4R} onChange={handleChange} name="ans4R" color="primary" />}
                label="ขวา" disabled={dis4Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans4L} onChange={handleChange} name="ans4L" color="primary" />}
                label="ซ้าย" disabled={dis4Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans4N} onChange={handleChange} name="ans4N" />}
                label="ไม่ใช่" disabled={dis4N}
            />
          </FormGroup>
          <hr/>
          <p>5. ไม่พบข้ออุ่น</p>
          <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={ans5R} onChange={handleChange} name="ans5R" color="primary" />}
                label="ขวา" disabled={dis5Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans5L} onChange={handleChange} name="ans5L" color="primary" />}
                label="ซ้าย" disabled={dis5Y}
            />
            <FormControlLabel
                control={<Checkbox checked={ans5N} onChange={handleChange} name="ans5N" />}
                label="ไม่ใช่" disabled={dis5N}
            />
          </FormGroup>
          </div>
  
          {/* bt */}
          <div className="row justify-content-between">
            <Link to="/sec9">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            </Link>
            <button type="button" className="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
            >ถัดไป</button>
          </div>
        </form>
        <ShowResultPopup
          title='ผลการประเมินโรคข้อเข่าเสื่อม' 
          result={results}
          show={show}
          onClick={()=>formAction.updateExa9_1Osteoarthritis([ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N,results])}
          onHide={()=>setShow(false)}
          backdrop="static"
          keyboard={false}
        />
      </div>
    );
}
