import React, { Component } from 'react';
import "../form-style.css";
class Sections5 extends Component {
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
          <div className="question">
            {/* content */}
            <span>*การแปรงฟัน</span>
            <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ไม่ได้แปรงฟัน</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">แปรง แต่ไม่ได้ใช้แปรงสีฟัน</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">แปรงวันละ 2 ครั้ง เช้าและก่อนนอน</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">แปรงมากกว่า 2 ครั้งต่อวัน ระบุ</label>
                  <input type="number" name="Wh" className="form-control" />
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">อื่นๆ ระบุ</label>
                  <input type="number" name="Wh" className="form-control" />
                </div>
              </div>

              <span>*การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน</span>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ใช้</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ไม่ใช้</label>
                </div>
              </div>

              <span>*ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน</span>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ทำ</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ไม่ทำ</label>
                </div>
              </div>


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

export default Sections5;
