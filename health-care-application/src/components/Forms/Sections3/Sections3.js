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
          <hr />
          <p>3.2 ความดันโลหิต ≥ 130/85 หรือแพทย์บอกว่าเป็นความดันโลหิตสูง</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.2" id="art3.2y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.2y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.2" id="art3.2n" value="N" className="form-check-input"/>
            <label htmlFor="art3.3n" className="form-check-label">ไม่ใช่</label>
          </div>
          <hr />
          <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.3" id="art3.3y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.3y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.3" id="art3.3n" value="N" className="form-check-input"/>
            <label htmlFor="art3.3n" className="form-check-label">ไม่ใช่</label>
          </div>
          <hr />
          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.4" id="art3.4y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.4y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.4" id="art3.4n" value="N" className="form-check-input"/>
            <label htmlFor="art3.4n" className="form-check-label">ไม่ใช่</label>
          </div>
          <hr />
          <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.5" id="art3.5y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.5y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.5" id="art3.5n" value="N" className="form-check-input"/>
            <label htmlFor="art3.5n" className="form-check-label">ไม่ใช่</label>
          </div>
          <hr />
          <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต </p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.6" id="art3.6y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.6y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.6" id="art3.6n" value="N" className="form-check-input"/>
            <label htmlFor="art3.6n" className="form-check-label">ไม่ใช่</label>
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
