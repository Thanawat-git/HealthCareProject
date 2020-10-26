import React, {useState} from 'react'
import '../../genaralConfig.css'
import '../form-style.css'
import './Sections1.css'
import { TextField, InputLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';


export default function Sections1_4() {

    const [elderlyStatus, setElderlyStatus] = useState('')
    const [elderlyBeing, setElderlyBeing] = useState('')
    const [elderlyBeingDetail, setElderlyBeingDetail] = useState('')
    const [being, setBeing] = useState('')
    const [religion, setReligion] = useState('')

    const handleChange1 = (event) => {setElderlyStatus(event.target.value);};
    const handleChange2 = (event) => {setElderlyBeing(event.target.value); setBeing(event.target.value);};
    const handleChange2_1 = (event) => {setElderlyBeingDetail(event.target.value);};
    const handleChange3 = (event) => {setReligion(event.target.value);};

    return (
    <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            {/* row-1 */}
            <div className="row">
                <div className="col-12 p-0">
                <p><span className="text-danger" >*</span><strong>สถานภาพ</strong></p>
                </div>

                <RadioGroup className="pl-5" aria-label="elderlyStatus" name="elderlyStatus" value={elderlyStatus} onChange={handleChange1}>
                  <FormControlLabel value="single" control={<Radio color='primary' />} label="โสด"  />
                  <FormControlLabel value="marry" control={<Radio color='primary' />} label="สมรส" />
                  <FormControlLabel value="widow" control={<Radio color='primary' />} label="หม้าย"  />
                  <FormControlLabel value="divorced" control={<Radio color='primary' />} label="หย่าร้าง" />
                  <FormControlLabel value="broken" control={<Radio color='primary' />} label="แยกกันอยู่" />
                </RadioGroup>
                
            </div>
<br/>
            {/* row-2 */}
            <div className="row">
              <div className="col-12 p-0">
                <p><span className="text-danger" >*</span><strong>ความเป็นอยู่</strong></p>
              </div>
              <RadioGroup row aria-label="elderlyBeing" name="elderlyBeing" value={elderlyBeing} onChange={handleChange2}>
                <FormControlLabel className="pr-4" value="alone" control={<Radio color='primary' />} label="อยู่ลำพัง"  />
                <FormControlLabel value="notalone" control={<Radio color='primary' />} label="ไม่ได้อยู่ลำพัง" />
              </RadioGroup>
            </div>

            {/* Selected being */}
            {being === "alone"? 
            <React.Fragment>
              <RadioGroup aria-label="elderlyBeingDetail" name="elderlyBeingDetail" value={elderlyBeingDetail} onChange={handleChange2_1}>
                <FormControlLabel value="day" control={<Radio color='primary' />} label="กลางวัน กลางคืนอยู่กับ"  /> {elderlyBeingDetail === 'day'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''} 
                <FormControlLabel value="night" control={<Radio color='primary' />} label="กลางคืน กลางวันอยู่กับ" />{elderlyBeingDetail === 'night'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
                <FormControlLabel value="no" control={<Radio color='primary' />} label="ทั้งกลางวันและกลางคืน" />
              </RadioGroup>
              
            </React.Fragment>
            : ''}

            {being === "notalone" ? 
            <TextField id="outlined-basic" label="ใส่ชื่อญาติหรือคนที่อยู่ด้วย" variant="outlined" size="small" fullWidth className="TextField"/>
            : ''}
            {/* row-2 */}
<br/>
            {/* row-3 */}
            <div className="row">
                <div className="col-12 p-0">
                    <p><span className="text-danger" >*</span ><strong>ศาสนา</strong></p>
                </div>

                <RadioGroup className="pl-5" aria-label="religion" name="religion" value={religion} onChange={handleChange3}>
                  <FormControlLabel value="buddhism" control={<Radio color='primary' />} label="พุทธ"  />
                  <FormControlLabel value="christianity" control={<Radio color='primary' />} label="คริสต์" />
                  <FormControlLabel value="islamic" control={<Radio color='primary' />} label="อิสลาม"  />
                  <FormControlLabel value="otherReligion" control={<Radio color='primary' />} label="อื่นๆ ระบุ" />
                  {religion === 'otherReligion'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
                </RadioGroup>
                {/* <div className="col-xl-3 col-md-6 col-sm-6 col-6">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="religion" id="buddhism" value="buddhism" className="form-check-input"/>
                      <label htmlFor="buddhism" className="form-check-label">พุทธ</label>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-6 p-0">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="religion" id="christianity" value="christianity" className="form-check-input"/>
                      <label htmlFor="christianity" className="form-check-label">คริสต์</label>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-6">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="religion" id="islamic" value="islamic" className="form-check-input"/>
                      <label htmlFor="islamic" className="form-check-label">อิสลาม</label>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-6 p-0">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="religion" id="otherReligion" value="otherReligion" className="form-check-input"/>
                      <label htmlFor="otherReligion" className="form-check-label">
                        <div className="input-group input-group-sm">
                            <div className="input-group-prepend">อื่นๆ ระบุ</div>
                            <input type="text" name="" id="" className="form-control input-sec1"/> 
                        </div>
                      </label>
                    </div>
                </div> */}
            </div>
            {/* row-3 */}

            {/* content */}
           </div>

           {/* bt */}
           <div className="row justify-content-between">
             <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
             <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
           </div>
         </form>
    </div>
    );
}
