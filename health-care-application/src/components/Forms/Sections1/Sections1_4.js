import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'

export default function Sections1_4() {

    const [being, setBeing] = useState("")

    return (
    <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            {/* row-1 */}
            <div className="row">
                <div className="col-12 p-0">
                <p><span>*</span><strong>สถานภาพ</strong></p>
                </div>
                <div className="col-3">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="single" value="single" className="form-check-input"/>
                      <label htmlFor="single" className="form-check-label">โสด</label>
                    </div>
                </div>
                <div className="col-3 p-0">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="marry" value="marry" className="form-check-input"/>
                      <label htmlFor="marry" className="form-check-label">สมรส</label>
                    </div>
                </div>
                <div className="col-3 p-0">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="widow" value="widow" className="form-check-input"/>
                      <label htmlFor="widow" className="form-check-label">หม้าย</label>
                    </div>
                </div>
                <div className="col-3 p-0">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="divorced" value="divorced" className="form-check-input"/>
                      <label htmlFor="divorced" className="form-check-label">หย่าร้าง</label>
                    </div>
                </div>
            </div>
<br/>
            {/* row-2 */}
            <div className="row">
                <div className="col-12 p-0">
                    <p><span>*</span><strong>ความเป็นอยู่</strong></p>
                </div>
                <div className="col-6 mb-15">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="being" id="alone" value="alone" className="form-check-input" onClick={()=>setBeing("alone")} />
                      <label htmlFor="alone" className="form-check-label">อยู่ลำพัง</label>
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="being" id="notAlone" value="notAlone" className="form-check-input" onClick={()=>setBeing("notAlone")} />
                      <label htmlFor="notAlone" className="form-check-label">ไม่ได้อยู่ลำพัง</label>
                    </div>
                </div>
            </div>

            {/* Selected being */}
            {being === "alone"? <div>
                        <div className="form-check form-check-inline mb-15 pl-30">
                            <input type="radio" name="aloneTime" id="day" value="day" className="form-check-input"/>
                            <label htmlFor="day" className="form-check-label">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">กลางวัน กลางคืนอยู่กับ</div>
                                <input type="text" name="" id="" className="form-control input-sec1"/> 
                            </div>
                            </label>
                        </div>
                        <div className="form-check form-check-inline mb-15 pl-30">
                            <input type="radio" name="aloneTime" id="night" value="night" className="form-check-input"/>
                            <label htmlFor="night" className="form-check-label">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">กลางคืน กลางวันอยู่กับ</div>
                                <input type="text" name="" id="" className="form-control input-sec1"/> 
                            </div>
                            </label>
                        </div>
                        <div className="col-12 pl-30">
                            <div className="form-check form-check-inline">
                                <input type="radio" name="aloneTime" id="allTime" value="allTime" className="form-check-input"/>
                                <label htmlFor="allTime" className="form-check-label">
                                    <div className="input-group-prepend">ทั้งกลางวันและกลางคืน</div>
                                </label>
                            </div>
                        </div>
                    </div> : <span></span>}

            {being === "notAlone" ? 
            <div className="input-group input-group-sm pl-30">
                <div className="input-group-prepend"> <p>ไม่ได้อยู่ลำพัง อยู่กับ</p> </div>
                <input type="text" name="" id="" className="form-control input-sec1"/> 
            </div>
            : <p></p>}
            {/* row-2 */}

            {/* row-3 */}
            <div className="row">
                <div className="col-12 p-0">
                    <p><span>*</span><strong>ศาสนา</strong></p>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6 col-6">
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
                </div>
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
