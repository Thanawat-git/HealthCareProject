import React, {useState} from 'react'
import '../../genaralConfig.css'
import '../form-style.css'
import './Sections1.css'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Sections1_4() {
  
    const [elderlyStatus, setElderlyStatus] = useState('')
    const [elderlyBeing, setElderlyBeing] = useState('')
    const [elderlyBeingDetail, setElderlyBeingDetail] = useState('')
    const [being, setBeing] = useState('')
    const [religion, setReligion] = useState('')
    const [educations, setEducations] = useState('')
    const [careers, setCareers] = useState('')
    const [treatment, setTreatment] = useState('')
    const [salary, setSalary] = useState('')

    const handleChange1 = (event) => {setElderlyStatus(event.target.value);};
    const handleChange2 = (event) => {setElderlyBeing(event.target.value); setBeing(event.target.value);};
    const handleChange2_1 = (event) => {setElderlyBeingDetail(event.target.value);};
    const handleChange3 = (event) => {setReligion(event.target.value);};
    const handleChange4 = (event) => {setEducations(event.target.value);};
    const handleChange5 = (event) => {setCareers(event.target.value);};
    const handleChange6 = (event) => {setTreatment(event.target.value);};
    const handleChange7 = (event) => {setSalary(event.target.value);};

    return (
    <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            {/* row-1 */}
            <div className="row">
                <div className="col-12">
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
{/* <br/> */}
<hr/>
            {/* row-2 */}
            <div className="row">
              <div className="col-12">
                <p><span className="text-danger" >*</span><strong>ความเป็นอยู่</strong></p>
              </div>
              <RadioGroup className="pl-4" aria-label="elderlyBeing" name="elderlyBeing" value={elderlyBeing} onChange={handleChange2}>
                <FormControlLabel value="alone" control={<Radio color='primary' />} label="อยู่ลำพัง"  />
                {/* Selected being */}
                {being === "alone"? 
                <React.Fragment>
                  <RadioGroup className="pl-4" aria-label="elderlyBeingDetail" name="elderlyBeingDetail" value={elderlyBeingDetail} onChange={handleChange2_1}>
                    <FormControlLabel value="day" control={<Radio color='primary' />} label="กลางวัน กลางคืนอยู่กับ"  /> {elderlyBeingDetail === 'day'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''} 
                    <FormControlLabel value="night" control={<Radio color='primary' />} label="กลางคืน กลางวันอยู่กับ" />{elderlyBeingDetail === 'night'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
                    <FormControlLabel value="no" control={<Radio color='primary' />} label="ทั้งกลางวันและกลางคืน" />
                  </RadioGroup>
                </React.Fragment>
                : ''}
                <FormControlLabel value="notalone" control={<Radio color='primary' />} label="ไม่ได้อยู่ลำพัง" />
              </RadioGroup>
            </div>

            {being === "notalone" ? 
            <TextField id="outlined-basic" label="ใส่ชื่อญาติหรือคนที่อยู่ด้วย" variant="outlined" size="small" fullWidth className="TextField"/>
            : ''}
            {/* row-2 */}
{/* <br/> */}
<hr/>
            {/* row-3 */}
            <div className="row">
                <div className="col-12">
                    <p><span className="text-danger" >*</span ><strong>ศาสนา</strong></p>
                </div>

                <RadioGroup className="pl-5" aria-label="religion" name="religion" value={religion} onChange={handleChange3}>
                  <FormControlLabel value="buddhism" control={<Radio color='primary' />} label="พุทธ"  />
                  <FormControlLabel value="christianity" control={<Radio color='primary' />} label="คริสต์" />
                  <FormControlLabel value="islamic" control={<Radio color='primary' />} label="อิสลาม"  />
                  <FormControlLabel value="otherReligion" control={<Radio color='primary' />} label="อื่นๆ ระบุ" />
                  {religion === 'otherReligion'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
                </RadioGroup>
            </div>
            {/* row-3 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>ระดับการศึกษา</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="educations" name="educations" value={educations} onChange={handleChange4}>
              <FormControlLabel value="NE" control={<Radio color='primary' />} label="ไม่ได้เรียนหนังสือ"  />
              <FormControlLabel value="PE" control={<Radio color='primary' />} label="ประถมศึกษา" />
              <FormControlLabel value="SE" control={<Radio color='primary' />} label="มัธยมศึกษา"  />
              <FormControlLabel value="Diploma" control={<Radio color='primary' />} label="อนุปริญญา/ ปวช./ ปวส." />
              <FormControlLabel value="BD" control={<Radio color='primary' />} label="ปริญญาตรี" />
              <FormControlLabel value="OverBD" control={<Radio color='primary' />} label="สูงกว่าปริญญาตรี"  />
            </RadioGroup>
          </div>
          {/* row-4 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>อาชีพ</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="careers" name="careers" value={careers} onChange={handleChange5}>
              <FormControlLabel value="unemployed" control={<Radio color='primary' />} label="ไม่ได้ประกอบอาชีพ"  />
              <FormControlLabel value="trade" control={<Radio color='primary' />} label="ค้าขาย" />
              <FormControlLabel value="pensioner" control={<Radio color='primary' />} label="ข้าราชการบำนาญ"  />
              <FormControlLabel value="employee" control={<Radio color='primary' />} label="รับจ้าง" />
              <FormControlLabel value="privateBusiness" control={<Radio color='primary' />} label="ธุรกิจส่วนตัว" />
              <FormControlLabel value="otherCareers" control={<Radio color='primary' />} label="อื่นๆ ระบุ" />
              {careers === 'otherCareers'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
            </RadioGroup>
          </div>
          {/* row-5 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>สิทธิการรักษา</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="treatment" name="treatment" value={treatment} onChange={handleChange6}>
              <FormControlLabel value="withdrawMoney" control={<Radio color='primary' />} label="เบิกต้นสังกัด"  />
              <FormControlLabel value="payMyself" control={<Radio color='primary' />} label="ชำระเงินเอง" />
              <FormControlLabel value="goldCard" control={<Radio color='primary' />} label="บัตรทอง"  />
              {treatment === 'goldCard'? <TextField id="outlined-basic" label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="disabledCard" control={<Radio color='primary' />} label="บัตรผู้พิการ" />
              {treatment === 'disabledCard'? <TextField id="outlined-basic" label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="socialSecurity" control={<Radio color='primary' />} label="บัตรประกันสังคม" />
              {treatment === 'socialSecurity'? <TextField id="outlined-basic" label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="otherTreatment" control={<Radio color='primary' />} label="อื่นๆ" />
              {treatment === 'otherTreatment'? <TextField id="outlined-basic" label="" variant="outlined" size="small" /> :''}
            </RadioGroup>
          </div>
          {/* row-6 */}

<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span><strong>รายได้ต่อเดือน</strong><span className="text-secondary" >(บาท)</span></p>
            </div>
            <RadioGroup className="pl-5" aria-label="salary" name="salary" value={salary} onChange={handleChange7}>
              <FormControlLabel value="noSalary" control={<Radio color='primary' />} label="ไม่มีรายได้"  />
              <FormControlLabel value="less1k" control={<Radio color='primary' />} label="ไม่เกิน 1,000" />
              <FormControlLabel value="1kto3k" control={<Radio color='primary' />} label="1,001 - 3,000"  />
              <FormControlLabel value="3kto5k" control={<Radio color='primary' />} label="3,001 - 5,000" />
              <FormControlLabel value="5kto10k" control={<Radio color='primary' />} label="5,001 - 10,000" />
              <FormControlLabel value="10kto15k" control={<Radio color='primary' />} label="10,001 - 15,000" />
              <FormControlLabel value="15kto20k" control={<Radio color='primary' />} label="15,001 - 20,000" />
              <FormControlLabel value="20kto25k" control={<Radio color='primary' />} label="20,001 - 25,000" />
              <FormControlLabel value="over25k" control={<Radio color='primary' />} label="25,001 ขึ้นไป" />
            </RadioGroup>
          </div>
          {/* row-7 */}

          {/* content */}
           </div>

           {/* bt */}
           <div className="row justify-content-between">
            <Link to="/sec1-page3">
             <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            </Link>
            <Link to="/sec1-page8">
              <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
            </Link>
           </div>
         </form>
    </div>
    );
}
