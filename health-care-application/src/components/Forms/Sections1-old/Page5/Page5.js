import React, { Component } from 'react';
import './Page5.css'

class Page5 extends Component {

  constructor(props){
    super(props);

    this.state = {
      disInput: ""
    }
  }

  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form>
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <div className="question sec1-5">
            {/* row 1 */}
            <div className="row align-items-end">
              <div className="col-md-2 col-sm-12 col-xs-12">
                <p><span>*</span>สถานภาพ</p>
              </div>
              <div className="col-md-10 col-sm-12 col-xs-12">
                <div className="row row2">
                  <div className="col-3">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="single" value="single" className="form-check-input"/>
                      <label htmlFor="single" className="form-check-label">โสด</label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="marry" value="marry" className="form-check-input"/>
                      <label htmlFor="marry" className="form-check-label">สมรส</label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="widow" value="widow" className="form-check-input"/>
                      <label htmlFor="widow" className="form-check-label">หม้าย</label>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="older-person-status" id="divorced" value="divorced" className="form-check-input"/>
                      <label htmlFor="divorced" className="form-check-label">หย่าร้าง</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br/>
            {/* row 2 */}
            <p><span>*</span>ความเป็นอยู่</p>
            <div className="row align-items-end">
              <div className="col-12">
                <div className="row">
                  <div className="col-xl-2 col-4">
                    <div className="form-check form-check-inline">
                      <input type="radio" name="being-status" id="alone" value="alone" className="form-check-input"/>
                      <label htmlFor="alone" className="form-check-label">อยู่ลำพัง</label>
                    </div>
                  </div>
                  <div className="col-xl-10 col-8">
                    <div className="row bg-success">
                      <div className="col-12 bg-light">
                        <div className="form-check form-check-inline">
                          <input type="radio" name="being-status" id="alone" value="alone" className="form-check-input"/>
                          <label htmlFor="alone" className="form-check-label">กลางวัน กลางคืนอยู่กับ </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check form-check-inline">
                          <input type="radio" name="being-status" id="alone" value="alone" className="form-check-input"/>
                          <label htmlFor="alone" className="form-check-label">กลางคืน กลางวันอยู่กับ </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check form-check-inline">
                          <input type="radio" name="being-status" id="alone" value="alone" className="form-check-input"/>
                          <label htmlFor="alone" className="form-check-label">ทั้งกลางวัน กลางคืน</label>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {/*  */}
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input type="radio" name="being-status" id="no_alone" value="no_alone" className="form-check-input"/>
                  <label htmlFor="no_alone" className="form-check-label">ไม่ได้อยู่ลำพัง</label>
                </div>
              </div>
            </div>

          {/* question */}
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

export default Page5;
