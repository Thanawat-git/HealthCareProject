import React, {useState, useEffect} from 'react'
import '../../genaralConfig.css'
import '../form-style.css'
import './Sections1.css'
import { TextField, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import * as formAction from "../../../actions/forms1p4.action";

function Sections1_4(props) {

  const forms1p4Reducer = useSelector(({forms1p4Reducer}) => forms1p4Reducer)
  const peopleID = useSelector(({forms1p1Reducer})=>forms1p1Reducer.peopleID)
  const dispatch = useDispatch()

    const [elderlyStatus, setElderlyStatus] = useState(forms1p4Reducer.elderlyStatus) // หลัก
    const [elderlyBeing, setElderlyBeing] = useState(forms1p4Reducer.elderlyBeing) // หลัก
    const [elderlyBeingDetail, setElderlyBeingDetail] = useState(forms1p4Reducer.elderlyBeingDetail)
    const [being, setBeing] = useState(forms1p4Reducer.being)
    const [neighborName, setneighborName] = useState(forms1p4Reducer.neighborName)
    const [religion, setReligion] = useState(forms1p4Reducer.religion) // หลัก
    const [otherReligion, setotherReligion] = useState(forms1p4Reducer.otherReligion)
    const [educations, setEducations] = useState(forms1p4Reducer.educations) // หลัก
    const [careers, setCareers] = useState(forms1p4Reducer.careers) // หลัก
    const [treatment, setTreatment] = useState(forms1p4Reducer.treatment) // หลัก
    const [hospital, sethospital] = useState(forms1p4Reducer.hospital)
    const [otherTreatment, setotherTreatment] = useState(forms1p4Reducer.otherTreatment)
    const [salary, setSalary] = useState(forms1p4Reducer.salary) // หลัก
    const [otherCareers, setotherCareers] = useState(forms1p4Reducer.otherCareers)
    
    // being ตัวแปลซ้ำซ้อ ต้องเอาออก!!!!!!
    const handleSubmit = (e)=>{
      const data = [
        elderlyStatus, 
        elderlyBeing, 
        elderlyBeingDetail, 
        being, neighborName, 
        religion, educations, careers, 
        treatment, hospital, otherTreatment, 
        salary, otherReligion, otherCareers
      ]
      formAction.updateElderinfo([peopleID,elderlyStatus,elderlyBeing,elderlyBeingDetail,neighborName,religion,educations,
      careers,treatment,hospital,salary
      ])

      elderlyStatus===null && emptyValue()

      if(elderlyBeing!==null){
        if(elderlyBeing=="alone"){
          if(elderlyBeingDetail!==null){
            if(elderlyBeingDetail!= "D/N"){
              if(neighborName===null)emptyValue()
            }
          }else {emptyValue()}
        } else {
          if(neighborName===null)emptyValue()
        }
      } else {emptyValue()}

      if(religion!==null){
        if(religion=="otherReligion"){
          if(otherReligion===null)emptyValue()
        }
      } else {emptyValue()}

      educations===null && emptyValue()

      if(careers!==null){
        if(careers=="otherCareers"){
          if(otherCareers===null)emptyValue()
        }
      }else {emptyValue()}

      if(treatment!==null){
        if(treatment!="withdrawMoney" && treatment!="payMyself") {
          if(treatment=="otherTreatment"){
            if(otherTreatment===null){emptyValue()}
          } else {
            if(hospital===null){emptyValue()}
          }
        }
      }
      else {emptyValue()}

      salary===null && emptyValue()

      dispatch(formAction.add(data))
      function emptyValue(){
        e.preventDefault(); 
        //alert('กรุณากรอกข้อมูลให้ครบทุกข้อ'); 
        // return;
      }
    }
    
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

                <RadioGroup className="pl-5" aria-label="elderlyStatus" name="elderlyStatus" defaultValue={elderlyStatus} onChange={(event) => setElderlyStatus(event.target.value)}>
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
              <RadioGroup className="pl-4" aria-label="elderlyBeing" name="elderlyBeing" defaultValue={elderlyBeing} onChange={(e)=>{setElderlyBeing(e.target.value); setBeing(e.target.value);}}>
                <FormControlLabel value="alone" control={<Radio color='primary' />} label="อยู่ลำพัง"  />
                {/* Selected being */}
                {being === "alone"? 
                <React.Fragment>
                  <RadioGroup className="pl-4" aria-label="elderlyBeingDetail" name="elderlyBeingDetail" defaultValue={elderlyBeingDetail} onChange={(event) => {setElderlyBeingDetail(event.target.value)}}>
                    <FormControlLabel value="day" control={<Radio color='primary' />} label="กลางวัน กลางคืนอยู่กับ"  /> {elderlyBeingDetail === 'day'? <TextField id="outlined-basic" defaultValue={neighborName} onChange={(e)=>setneighborName(e.target.value)} label="" variant="outlined" size="small" /> :''} 
                    <FormControlLabel value="night" control={<Radio color='primary' />} label="กลางคืน กลางวันอยู่กับ" />{elderlyBeingDetail === 'night'? <TextField id="outlined-basic" defaultValue={neighborName} onChange={(e)=>setneighborName(e.target.value)} label="" variant="outlined" size="small" /> :''}
                    <FormControlLabel value="D/N" control={<Radio color='primary' />} label="ทั้งกลางวันและกลางคืน" />
                  </RadioGroup>
                </React.Fragment>
                : ''}
                <FormControlLabel value="notalone" control={<Radio color='primary' />} label="ไม่ได้อยู่ลำพัง" />
              </RadioGroup>
            </div>

            {being === "notalone" ? 
            <TextField id="outlined-basic" label="ใส่ชื่อญาติหรือคนที่อยู่ด้วย" defaultValue={neighborName} onChange={(e)=>setneighborName(e.target.value)} variant="outlined" size="small" fullWidth className="TextField"/>
            : ''}
            {/* row-2 */}
{/* <br/> */}
<hr/>
            {/* row-3 */}
            <div className="row">
                <div className="col-12">
                    <p><span className="text-danger" >*</span ><strong>ศาสนา</strong></p>
                </div>

                <RadioGroup className="pl-5" aria-label="religion" name="religion" defaultValue={religion} onChange={(e)=>setReligion(e.target.value)}>
                  <FormControlLabel value="buddhism" control={<Radio color='primary' />} label="พุทธ"  />
                  <FormControlLabel value="christianity" control={<Radio color='primary' />} label="คริสต์" />
                  <FormControlLabel value="islamic" control={<Radio color='primary' />} label="อิสลาม"  />
                  <FormControlLabel value="otherReligion" control={<Radio color='primary' />} label="อื่นๆ ระบุ" />
                  {religion === 'otherReligion'? <TextField id="outlined-basic" defaultValue={otherReligion} onChange={(e)=>setotherReligion(e.target.value)} label="" variant="outlined" size="small" /> :''}
                </RadioGroup>
            </div>
            {/* row-3 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>ระดับการศึกษา</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="educations" name="educations" defaultValue={educations} onChange={(e)=>setEducations(e.target.value)}>
              <FormControlLabel value="ไม่ได้เรียนหนังสือ" control={<Radio color='primary' />} label="ไม่ได้เรียนหนังสือ"  />
              <FormControlLabel value="ประถมศึกษา" control={<Radio color='primary' />} label="ประถมศึกษา" />
              <FormControlLabel value="มัธยมศึกษา" control={<Radio color='primary' />} label="มัธยมศึกษา"  />
              <FormControlLabel value="อนุปริญญา/ปวช./ปวส." control={<Radio color='primary' />} label="อนุปริญญา/ ปวช./ ปวส." />
              <FormControlLabel value="ปริญญาตรี" control={<Radio color='primary' />} label="ปริญญาตรี" />
              <FormControlLabel value="สูงกว่าปริญญาตรี" control={<Radio color='primary' />} label="สูงกว่าปริญญาตรี"/>
            </RadioGroup>
          </div>
          {/* row-4 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>อาชีพ</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="careers" name="careers" defaultValue={careers} onChange={(e)=>setCareers(e.target.value)}>
              <FormControlLabel value="unemployed" control={<Radio color='primary' />} label="ไม่ได้ประกอบอาชีพ"  />
              <FormControlLabel value="trade" control={<Radio color='primary' />} label="ค้าขาย" />
              <FormControlLabel value="pensioner" control={<Radio color='primary' />} label="ข้าราชการบำนาญ"  />
              <FormControlLabel value="employee" control={<Radio color='primary' />} label="รับจ้าง" />
              <FormControlLabel value="privateBusiness" control={<Radio color='primary' />} label="ธุรกิจส่วนตัว" />
              <FormControlLabel value="otherCareers" control={<Radio color='primary' />} label="อื่นๆ ระบุ" />
              {careers === 'otherCareers'? <TextField id="outlined-basic" defaultValue={otherCareers} onChange={(e)=>setotherCareers(e.target.value)} label="" variant="outlined" size="small" /> :''}
            </RadioGroup>
          </div>
          {/* row-5 */}
<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span ><strong>สิทธิการรักษา</strong></p>
            </div>
            <RadioGroup className="pl-5" aria-label="treatment" name="treatment" defaultValue={treatment} onChange={(e)=>setTreatment(e.target.value)}>
              <FormControlLabel value="withdrawMoney" control={<Radio color='primary' />} label="เบิกต้นสังกัด"  />
              <FormControlLabel value="payMyself" control={<Radio color='primary' />} label="ชำระเงินเอง" />
              <FormControlLabel value="goldCard" control={<Radio color='primary' />} label="บัตรทอง"  />
              {treatment === 'goldCard'? <TextField id="outlined-basic" defaultValue={hospital} onChange={(e)=>sethospital(e.target.value)} label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="disabledCard" control={<Radio color='primary' />} label="บัตรผู้พิการ" />
              {treatment === 'disabledCard'? <TextField id="outlined-basic" defaultValue={hospital} onChange={(e)=>sethospital(e.target.value)} label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="socialSecurity" control={<Radio color='primary' />} label="บัตรประกันสังคม" />
              {treatment === 'socialSecurity'? <TextField id="outlined-basic" defaultValue={hospital} onChange={(e)=>sethospital(e.target.value)} label="ระบุโรงพยาบาล" variant="outlined" size="small" /> :''}
              <FormControlLabel value="otherTreatment" control={<Radio color='primary' />} label="อื่นๆ" />
              {treatment === 'otherTreatment'? <TextField id="outlined-basic" defaultValue={otherTreatment} onChange={(e)=>setotherTreatment(e.target.value)} label="" variant="outlined" size="small" /> :''}
            </RadioGroup>
          </div>
          {/* row-6 */}

<hr/>
          <div className="row">
            <div className="col-12">
              <p><span className="text-danger" >*</span><strong>รายได้ต่อเดือน</strong><span className="text-secondary" >(บาท)</span></p>
            </div>
            <RadioGroup className="pl-5" aria-label="salary" name="salary" defaultValue={salary} onChange={(e)=>setSalary(e.target.value)}>
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
            <Link to="/sec1-page5">
              <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >ถัดไป</button>
            </Link>
           </div>
         </form>
    </div>
    );
}

export default Sections1_4
