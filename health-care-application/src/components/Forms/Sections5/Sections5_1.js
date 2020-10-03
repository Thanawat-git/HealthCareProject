import React, { Component } from 'react';

class Sections5 extends Component {
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ ...</h2>
          <div className="question">
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
}

export default Sections5;
