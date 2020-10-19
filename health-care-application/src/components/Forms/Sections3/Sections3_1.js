import React, { Component } from 'react';
import "../form-style.css";

class Sections3 extends Component {
  render() {
    return (
      <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <div className="box-form">
      <form>
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
        <div className="question">
          <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.1y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1n" value="N" className="form-check-input"/>
            <label htmlFor="art3.1n" className="form-check-label">ไม่ใช่</label>
          </div>
  
          <p>3.2 ความดันโลหิต ≥ 130/85 หรือแพทย์บอกว่าเป็นความดันโลหิตสูง</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.2" id="art3.2y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.2y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.2" id="art3.2n" value="N" className="form-check-input"/>
            <label htmlFor="art3.2n" className="formzzzcheck-label">ไม่ใช่</label>
          </div>
  
        </div>
        <div className="row justify-content-between">
          <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
          <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
        </div>
      </form>
      </div>
    </div>);
  }
}

export default Sections3;