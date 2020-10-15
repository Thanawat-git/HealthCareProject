import React, { Component } from 'react';

class Sections3 extends Component {
  render() {
    return (
      <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <div className="box-form">
      <form>
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
        <div className="question">
        <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.3" id="art3.3y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.3y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.3" id="art3.3n" value="N" className="form-check-input"/>
            <label htmlFor="art3.3n" className="form-check-label">ไม่ใช่</label>
          </div>

          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.1y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1n" value="N" className="form-check-input"/>
            <label htmlFor="art3.1n" className="form-check-label">ไม่ใช่</label>
          </div>
  
        </div>
        <div className="row justify-content-between">
          <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
          <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
        </div>
      </form>
      </div>
    </div>
    );;
  }
}

export default Sections3;
