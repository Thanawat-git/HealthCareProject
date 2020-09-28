import React, { Component } from 'react';
// import '../Pages3/Pages3.css'

class Page4 extends Component {
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <div className="box-form">
        <form>
          <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
          <h4>ข้อมูลญาติผู้ดูแล <span>*ถ้าไม่มีญาติที่ดูแลให้กดถัดไป*</span> </h4>
          <h5>ญาติคนที่ 2</h5>
          <div className="question">
            {/* row 1 */}
            <div className="row row1">
              <div className="col-6">
                <p>ชื่อ</p>
                <input type="text" className="form-control" />
              </div>
              <div className="col-6">
                <p>นามสกุล</p>
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* row 2 */}
            <div className="row align-items-end">
              <div className="col-2">
                <p>เพศ</p>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="male2" value="male" className="form-check-input"/>
                  <label htmlFor="male2" className="form-check-label">ชาย</label>
                </div>
              </div>
              <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="female2" value="female" className="form-check-input"/>
                  <label htmlFor="female2" className="form-check-label">หญิง</label>
                </div>
              </div>
              <div className="col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relativeGender2" id="other2" value="other" className="form-check-input"/>
                  <label htmlFor="other2" className="form-check-label">อื่นๆ</label>
                </div>
              </div>
            </div>

            {/* row 3 */}
            <p>ความสัมพันธ์กับผู้สูงอายุ</p>
            <div className="row relative">
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="son2" value="son2" className="form-check-input"/>
                  <label htmlFor="son2" className="form-check-label">บุตรชาย</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="daughter2" value="daughter" className="form-check-input"/>
                  <label htmlFor="daughter2" className="form-check-label">ลูกสาว</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="sonInLaw2" value="sonInLaw" className="form-check-input"/>
                  <label htmlFor="sonInLaw2" className="form-check-label">ลูกเขย</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="daughterInLaw2" value="daughterInLaw" className="form-check-input"/>
                  <label htmlFor="daughterInLaw2" className="form-check-label">ลูกสะใภ้</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="grandson2" value="grandson" className="form-check-input"/>
                  <label htmlFor="grandson2" className="form-check-label">หลานชาย</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="granddaughter2" value="granddaughter" className="form-check-input"/>
                  <label htmlFor="granddaughter2" className="form-check-label">หลานสาว</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="siblings2" value="siblings" className="form-check-input"/>
                  <label htmlFor="siblings2" className="form-check-label">พี่น้อง</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="father2" value="father" className="form-check-input"/>
                  <label htmlFor="father2" className="form-check-label">บิดา</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="mother2" value="mother" className="form-check-input"/>
                  <label htmlFor="mother2" className="form-check-label">มารดา</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="husband2" value="husband" className="form-check-input"/>
                  <label htmlFor="husband2" className="form-check-label">สามี</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="wife2" value="wife" className="form-check-input"/>
                  <label htmlFor="wife2" className="form-check-label">ภรรยา</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="relative-relational" id="otherperson2" value="otherperson" className="form-check-input"/>
                  <label htmlFor="otherperson2" className="form-check-label">บุคคลอื่น</label>
                </div>
              </div>
            </div>
            
            {/* row 4 */}
            <div className="row align-items-end phone-number ">
              <div className="col-4">
                <p>เบอร์โทรศัพท์ <span className="text-warning" >(ถ้ามี)</span> </p>
              </div>
              <div className="col-8">
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* row 5 */}
            <div className="row align-items-end time-with-old">
              <div className="col-md-4 col-sm-12 col-12">
                <p>เวลาที่อยู่กับผู้สูงอายุ</p>
              </div>
              <div className="col-md-2 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="allday2" value="allday" className="form-check-input"/>
                  <label htmlFor="allday2" className="form-check-label">ทั้งวัน</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="day2" value="day" className="form-check-input"/>
                  <label htmlFor="day2" className="form-check-label">กลางวัน</label>
                </div>
              </div>
              <div className="col-md-3 col-sm-4 col-4">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="night2" value="night" className="form-check-input"/>
                  <label htmlFor="night2" className="form-check-label">กลางคืน</label>
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
      </div>
    );
  }
}

export default Page4;
