import React, {useState} from 'react'
import '../../genaralConfig.css'
import '../form-style.css'
import './Sections1.css'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Sections1_8() {

    const [drug, setDrug] = useState('')
    const [food, setFood] = useState('')

    const handleChange1 = (event) => {setDrug(event.target.value)}
    const handleChange2 = (event) => {setFood(event.target.value)}

    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#" className="shadow p-3 mb-5 bg-white rounded" >
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <div className="question">
                <div className="row">
                    <div className="col-12">
                        <p><span className="text-danger" >*</span ><strong>ประวัติการแพ้ยา</strong></p>
                    </div>
                    <RadioGroup className="pl-5" aria-label="drug" name="drug" value={drug} onChange={handleChange1}>
                        <FormControlLabel value="allergic" control={<Radio color='primary' />} label="แพ้ยา"  />
                        {drug === 'allergic'? <TextField id="outlined-basic" label="ระบุชื่อยา" variant="outlined" size="small" fullWidth/> :''}
                        <FormControlLabel value="noallergic" control={<Radio color='primary' />} label="ไม่แพ้ยา" />
                        <FormControlLabel value="notsure" control={<Radio color='primary' />} label="ไม่ทราบ/ไม่แน่ใจ" />
                     </RadioGroup>
                </div>
            {/* row-1 */}
<hr/>
                <div className="row">
                    <div className="col-12">
                        <p><span className="text-danger" >*</span ><strong>ประวัติการแพ้อาหาร</strong></p>
                    </div>
                    <RadioGroup className="pl-5" aria-label="food" name="food" value={food} onChange={handleChange2}>
                        <FormControlLabel value="allergic" control={<Radio color='primary' />} label="แพ้อาหาร"  />
                        {food === 'allergic'? <TextField id="outlined-basic" label="ระบุชื่ออาหาร" variant="outlined" size="small" fullWidth/> :''}
                        <FormControlLabel value="noallergic" control={<Radio color='primary' />} label="ไม่แพ้ยา" />
                        <FormControlLabel value="notsure" control={<Radio color='primary' />} label="ไม่ทราบ/ไม่แน่ใจ" />
                     </RadioGroup>
                </div>
            {/* row-2 */}
            {/* content */}
            </div>
  
            {/* bt */}
            <div className="row justify-content-between">
            <Link to="/sec1-page4">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            </Link>
            <Link to="/sec1-page9">
            <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
            </Link>
            </div>
          </form>
        </div>
      );
}


