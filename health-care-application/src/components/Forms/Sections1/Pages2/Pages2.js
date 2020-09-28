import React, { Component } from 'react';
import './Pages2.css'

class Pages2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address : "N"
    }
  }

  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <div className="box-form">
        <form>
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2> 
          <div className="question">
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
            <div className="row align-items-end">
              <div className="col-7">
                <p>ที่อยู่เดียวกับบัตรประชาชนใช่หรือไม่</p>
              </div>
              <div className="col-5">
                <div className="form-check form-check-inline">
                  <input type="radio" name="addressSame" id="addressSameY" value="Y" onClick={e => {this.setState({address:"Y"})}} className="form-check-input"/>
                  <label htmlFor="addressSameY" className="form-check-label">ใช่</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" name="addressSame" id="addressSameN" value="N" onClick={e => {this.setState({address:"N"})}} className="form-check-input"/>
                  <label htmlFor="addressSameN" className="form-check-label">ไม่ใช่</label>
                </div>
              </div>
            </div>

            {/* Condition needed */}
            {this.state.address == "N" ? <p></p> :
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

          <div className="row align-items-end phone-number ">
            <div className="col-4">
              <p>เบอร์โทรศัพท์ <span className="text-warning" >(ถ้ามี)</span> </p>
            </div>
            <div className="col-8">
              <input type="text" className="form-control" />
            </div>
          </div>

          </div>
          <div className="row justify-content-between">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Pages2;
