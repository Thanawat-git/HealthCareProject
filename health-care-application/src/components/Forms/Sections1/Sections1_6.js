import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'

export default function Sections1_6() {

    const [showHospital, setShowHospital] = useState("")

    const Treatment = [
        {name:"เบิกต้นสังกัด", value:"withdrawMoney"},
        {name:"ชำระเงินเอง", value:"payMyself"},
        {name:"บัตรทอง", value:"goldCard"},
        {name:"บัตรผู้พิการ", value:"disabledCard"},
        {name:"บัตรประกันสังคม", value:"socialSecurity"},
        {name:"อื่นๆ", value:"otherTreatment"}
    ]

    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <div className="question">
              {/* content */}
              <div className="row">
                <div className="col-12 p-0">
                    <p><span>*</span><strong>สิทธิการรักษา</strong></p>
                </div>

                {Treatment.map((data, index)=>{
                    if (index < 2) {
                        return (
                            <div className="col-12">
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="treatment" id={data.value} value={data.value} className="form-check-input" onClick={()=>setShowHospital("")}/>
                                    <label htmlFor={data.value} className="form-check-label">{data.name}</label>
                                </div> 
                            </div>
                        )
                    } else if (data.name!="อื่นๆ"){
                        return (
                            <div className="col-12">
                                <div className="form-check form-check-inline">
                                    <input type="radio" name="treatment" id={data.value} value={data.value} className="form-check-input"
                                    onClick={(e)=>setShowHospital(e.target.value)} />
                                    <label htmlFor={data.value} className="form-check-label">{data.name}</label>
                                </div>
                                {showHospital === data.value ? 
                                <div className="input-group input-group-sm pl-30">
                                    <div className="input-group-prepend"> <label className="form-check-label">ระบุโรงพยาบาล</label></div>
                                    <input type="text" name="" id="" className="form-control input-sec1"/> 
                                </div> : <span></span>}
                                
                            </div>
                        )
                    } else {
                        return (
                            <div className="col-12">
                                <div className="form-check form-check-inline mt-15">
                                    <input type="radio" name="treatment" id={data.value} value={data.value} className="form-check-input" onClick={()=>setShowHospital("")}/>
                                    <label htmlFor={data.value} className="form-check-label">
                                    <div className="input-group input-group-sm">
                                        <div className="input-group-prepend">{data.name}</div>
                                        <input type="text" name="" id="" className="form-control input-sec1"/> 
                                    </div>
                                    </label>
                                </div> 
                            </div>
                        )
                    }
                })}

              </div>
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
