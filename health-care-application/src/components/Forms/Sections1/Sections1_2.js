import React, { Component } from 'react';
import '../form-style.css'
import './Sections1.css'

export default class Sections1_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address : "Y"
    }
  }
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question">
            {/* content */}
            <p> <span>*</span>ที่อยู่ตามบัตรประชาชน </p>
            <div className="row">
              <div className="col-6 col-md-4">
                <p>เลขที่</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ตรอก/ซอย</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ถนน</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ตำบล</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ชุมชน</p>
                <input type="text" className="form-control" />
              </div>
            </div>
            <p>อำเภอเมื่อง ชลบุรี</p>
<hr/>
            <p> <span>*</span>ที่อยู่ปัจจุบัน </p>
            <div className="row">
              <div className="col-6">
                <p>ที่อยู่เดียวกับบัตรประชาชนใช่หรือไม่</p>
              </div>
              <div className="col-3 p-0">
                <div className="form-check form-check-inline">
                  <input type="radio" name="addressSame" id="addressSameY" value="Y" onClick={e => {this.setState({address:"Y"})}} className="form-check-input"/>
                  <label htmlFor="addressSameY" className="form-check-label">ใช่</label>
                </div>
              </div>
              <div className="col-3 p-0">
                <div className="form-check form-check-inline">
                  <input type="radio" name="addressSame" id="addressSameN" value="N" onClick={e => {this.setState({address:"N"})}} className="form-check-input"/>
                  <label htmlFor="addressSameN" className="form-check-label">ไม่ใช่</label>
                </div>
              </div>
            </div>

            {/* Condition needed */}
            {this.state.address == "Y" ? <p></p> :
            <div className="row address2">
              <div className="col-6 col-md-4">
                <p>เลขที่</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ตรอก/ซอย</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ถนน</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ตำบล</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6 col-md-4">
                <p>ชุมชน</p>
                <input type="text" className="form-control" />
              </div>
            <p>อำเภอเมื่อง ชลบุรี</p>
            </div>
          }

            {/* <div className="row"> */}
              <div className="input-group">
                <div className="input-group-prepend">
                  <p>เบอร์โทรศัพท์</p><span className="text-warning">(ถ้ามี)</span>
                </div>
                <input type="text" name="" id="" className="form-control input-sec1" />
              </div>
            {/* </div> */}
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
}
