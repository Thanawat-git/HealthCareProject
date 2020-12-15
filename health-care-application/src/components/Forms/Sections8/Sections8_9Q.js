import React, {useEffect, useState} from 'react'
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections8.css'
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShowResultPopup from '../ResuleShowsPopUp'
import * as formAction from "../../../actions/forms89q.action";

export default function Sections8_9Q() {
    const forms89qReducer = useSelector(({forms89qReducer}) => forms89qReducer)
    const peopleID = true
    const dispatch = useDispatch()

    const [ans8_9q_1, setAns8_9q_1] = useState(forms89qReducer.ans8_9q_1)
    const [ans8_9q_2, setAns8_9q_2] = useState(forms89qReducer.ans8_9q_2)
    const [ans8_9q_3, setAns8_9q_3] = useState(forms89qReducer.ans8_9q_3)
    const [ans8_9q_4, setAns8_9q_4] = useState(forms89qReducer.ans8_9q_4)
    const [ans8_9q_5, setAns8_9q_5] = useState(forms89qReducer.ans8_9q_5)
    const [ans8_9q_6, setAns8_9q_6] = useState(forms89qReducer.ans8_9q_6)
    const [ans8_9q_7, setAns8_9q_7] = useState(forms89qReducer.ans8_9q_7)
    const [ans8_9q_8, setAns8_9q_8] = useState(forms89qReducer.ans8_9q_8)
    const [ans8_9q_9, setAns8_9q_9] = useState(forms89qReducer.ans8_9q_9)
    const [collect, setCollect] = useState(forms89qReducer.collect);
    const [results, setresults] = useState(forms89qReducer.results);
    const [show, setShow] = useState(false);
    const[point,setPoint] = useState()

    useEffect(() => {
        if(ans8_9q_1 && ans8_9q_2 && ans8_9q_3 && ans8_9q_4 && ans8_9q_5 && ans8_9q_6 && ans8_9q_7 && ans8_9q_8 && ans8_9q_9){
          setCollect(true)
        }
    }, [ans8_9q_1,ans8_9q_2,ans8_9q_3,ans8_9q_4,ans8_9q_5,ans8_9q_6,ans8_9q_7,ans8_9q_8,ans8_9q_9])
    useEffect(() => {
        let count = 0
        if(collect){
          count = parseInt(ans8_9q_1)+parseInt(ans8_9q_2)+parseInt(ans8_9q_3)+parseInt(ans8_9q_4)+parseInt(ans8_9q_5)+parseInt(ans8_9q_6)+parseInt(ans8_9q_7)+parseInt(ans8_9q_8)+parseInt(ans8_9q_9)
          setPoint(count)
          count<7? setresults('ไม่มีอาการโรคซึมเศร้า หรือ มีอาการโรคซึมเศร้าน้อยมาก'):
          count<=12? setresults('มีอาการของโรคซึมเศร้า ระดับน้อย'):
          count<=18? setresults('มีอาการของโรคซึมเศร้า  ระดับปานกลาง'):
          setresults('มีอาการของโรคซึมเศร้า  ระดับรุนแรง')
        }
    }, [collect,ans8_9q_1,ans8_9q_2,ans8_9q_3,ans8_9q_4,ans8_9q_5,ans8_9q_6,ans8_9q_7,ans8_9q_8,ans8_9q_9])

    const handleSubmit = (e) => {
        if(!collect){
            e.preventDefault();
            alert('กรุณากรอกข้อมูลให้ครบทุกข้อ'); 
            return
        }
        setShow(true)
        const data = [
            peopleID,ans8_9q_1,ans8_9q_2,ans8_9q_3,ans8_9q_4,ans8_9q_5,ans8_9q_6,ans8_9q_7,ans8_9q_8,ans8_9q_9,
            results,collect
        ]
        dispatch(formAction.add(data))

    }

    return (
        <div className="css-form">
          <h1>ข้อมูลของผู้สูงอายุ</h1>
          <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
            <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า 9Q</h2>
            <div className="question">
              {/* content */}
              <p> <strong>ในช่วง 2 สัปดาห์ที่ผ่านมารวมทั้งวันนี้ ท่านมีอาการเหล่านี้บ่อยแค่ไหน</strong> </p>
             <div className="row">
                <div className="col-12">
                    <p>1. เบื่อ ไม่สนใจอยากทำอะไร</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.1' name='questions8.9q.1' value={ans8_9q_1} onChange={(e)=>setAns8_9q_1(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-1 */}

          <div className="row">
                <div className="col-12">
                    <p>2. ไม่สบาย ซึมเศร้า ท้อเเท้</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.2' name='questions8.9q.2' value={ans8_9q_2} onChange={(e)=>setAns8_9q_2(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-2 */}

          <div className="row">
                <div className="col-12">
                    <p>3. หลับยาก หรือหลับๆ ตื่นๆ หรือ หลับมากไป</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.3' name='questions8.9q.3' value={ans8_9q_3} onChange={(e)=>setAns8_9q_3(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-3 */}

          <div className="row">
                <div className="col-12">
                    <p>4. เหนื่อยง่าย หรือ ไม่ค่อยมีแรง</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.4' name='questions8.9q.4' value={ans8_9q_4} onChange={(e)=>setAns8_9q_4(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-4 */}

          <div className="row">
                <div className="col-12">
                    <p>5. เบื่ออาหาร หรือ กินมากเกินไป</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.5' name='questions8.9q.5' value={ans8_9q_5} onChange={(e)=>setAns8_9q_5(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-5 */}

          <div className="row">
                <div className="col-12">
                    <p>6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือทำให้ตนเองหรือครอบครัวผิดหวัง</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.6' name='questions8.9q.6' value={ans8_9q_6} onChange={(e)=>setAns8_9q_6(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-6 */}

          <div className="row">
                <div className="col-12">
                    <p>7. สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.7' name='questions8.9q.7' value={ans8_9q_7} onChange={(e)=>setAns8_9q_7(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-7 */}

          <div className="row">
                <div className="col-12">
                    <p>8. พูดช้า หรือทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.8' name='questions8.9q.8' value={ans8_9q_8} onChange={(e)=>setAns8_9q_8(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-8 */}

          <div className="row">
                <div className="col-12">
                    <p>9. คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p>
                </div>
                <div className="col-12">
                <RadioGroup className="pl-20" aria-label='questions8.9q.9' name='questions8.9q.9' value={ans8_9q_9} onChange={(e)=>setAns8_9q_9(e.target.value)}>
                    <FormControlLabel className="radio-size" value='0'  control={<Radio color="primary" />} label="ไม่มีเลย" />
                    <FormControlLabel className="radio-size" value='1' control={<Radio color="primary" />} label="เป็นบางวัน (1-7 วัน)" />
                    <FormControlLabel className="radio-size" value='2'  control={<Radio color="primary" />} label="เป็นบ่อย (มากกว่า 7วัน)" />
                    <FormControlLabel className="radio-size" value='3' control={<Radio color="primary" />} label="เป็นทุกวัน" />
                </RadioGroup>             
                </div>
             </div>
             <hr/>
          {/* row-9 */}
            </div>

            {/* bt */}
            <div className="row justify-content-center">
              {/* <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button> */}
            {/* <Link to="/mainmenu"> */}
              <button type="button" className="btn btn-primary btn-lg"
              onClick={handleSubmit}>บันทึก</button>
            {/* </Link> */}
            </div>
          </form>

          <ShowResultPopup
          title='ผลการประเมินการคัดกรองโรคซึมเศร้า 9Q' 
          result={results}
          show={show}
          onHide={()=>setShow(false)}
          onClick={()=>formAction.updateDepressionScreening9q([ans8_9q_1,ans8_9q_2,ans8_9q_3,ans8_9q_4,ans8_9q_5,ans8_9q_6,ans8_9q_7,ans8_9q_8,ans8_9q_9,
            point,results,collect])}
          backdrop="static"
          keyboard={false}
        />
        </div>
    );
}
