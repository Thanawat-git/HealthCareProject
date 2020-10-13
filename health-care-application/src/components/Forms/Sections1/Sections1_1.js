import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'
import DatePicker from 'react-date-picker';

export default function Sections1_1() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          {/* content */}
          {/* row-1 */}
          <div className="row">
            <div className="input-group">
              <div className="input-group-prepend">
                <span>*</span><strong>รหัสบัตรประชาชน</strong>
              </div>
              <input type="text" name="" id="" className="form-control input-sec1" />
            </div>
          </div>
<br/>
          {/* row-2 */}
          <div className="row">
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>ชื่อ</strong>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>นามสกุล</strong>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div>
          </div>
<br/>
          {/* row-3 */}
          <div className="row">
            <div className="col-3 p-0">
              <span>*</span><strong>เพศ</strong>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="Male" value="Male" className="form-check-input"/>
                <label htmlFor="Male" className="form-check-label">ชาย</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="Female" value="Female" className="form-check-input"/>
                <label htmlFor="Female" className="form-check-label">หญิง</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name="gender" id="" value="Other" className="form-check-input"/>
                <label htmlFor="Other" className="form-check-label">อื่นๆ</label>
              </div>
            </div>
          </div>
<br/>
          {/* row-4 */}
          <div className="row">
            <div className="input-group">
                <div className="input-group-prepend">
                  <strong>ชื่อในชุมชน</strong><span className="text-warning" >(ถ้ามี)</span>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1 input-sec1-row4" />
              </div>
          </div>
<br/>
          {/* row-5 */}
          <div className="row">
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>วันเกิด</strong>
                </div>
                <DatePicker dateFormat="dd/MM/yyyy" onChange={onChange} value={value} id="" className="" />
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="col-12"><p></p></div>
              <strong> {`อายุ ... ปี`} </strong>
            </div>
          </div>
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-center">
          <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
        </div>
      </form>
    </div>
  );
}
