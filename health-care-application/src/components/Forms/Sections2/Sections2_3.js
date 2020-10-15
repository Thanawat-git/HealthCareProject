import React from 'react'

export default function Sections2_3() {
    return (
        <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2> 
          <div className="question">
            {/* content */}
            <div className="row sec2">
              <div className="col-12 p-0">
                <p><strong>ความดันโลหิต</strong></p>
              </div>
              <div className="col-3">
                <p>ชีพจร</p>
              </div>
              <div className="col-6 p-0">
                <input type="text" className="form-control" />
              </div>
              <div className="col-3 p-0">
                <p>ครั้ง/นาที</p>
              </div>
                {/* col */}
            </div>
            {/* row-1 */}
<br/>
            
            <div className="row sec2">
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 p-0">
                <p>ความดันโลหิต</p>
              </div>
              
                    <div className="col-lg-2 col-xl-2 col-md-2 col-sm-5 col-5 p-0">
                        <input type="text" className="form-control" />
                    </div> 
                    <div className="col-lg-2 col-xl-2 col-md-2 col-sm-5 col-5 p-0">
                        <input type="text" className="form-control" />
                    </div>
              
              <div className="col-lg-4 col-xl-4 col-md-4 col-sm-2 col-2 p-0">
                <p>มม.ปรอท</p>
              </div>
                {/* col */}

              <div className="col-12">
                <p><strong>ผลการประเมิน : </strong></p>
              </div>
            </div>
            {/* row-2 */}
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
