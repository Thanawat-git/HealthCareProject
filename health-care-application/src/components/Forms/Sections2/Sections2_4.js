import React from 'react'

export default function Sections2_4() {
    return (
        <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
          <div className="question">
            {/* content */}
            <div className="row sec2">
              <div className="col-12">
                <p><strong>ระดับน้ำตาลจากปลายนิ้ว (มก./ดล.)</strong></p>
              </div>
              <div className="col-12 align-self-center">
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <p><strong>ผลการประเมิน : </strong></p>
              </div>
            </div>
            {/* row-1 */}
            
            {/* content */}
          </div>
    
    
          <div className="row justify-content-between">
            <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
          </div>
        </form>
      </div>
      );
}
