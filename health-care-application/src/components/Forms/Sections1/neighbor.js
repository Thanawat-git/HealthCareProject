import React from 'react'

export default function neighbor(props) {
    return (
        <div>
            <h5>ญาติคนที่ {props.neighborID}</h5>
        {/* row 1 */}
        <div className="row">
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>ชื่อ</strong>
                </div>
                <input type="text" name={`neighborname${props.neighborID}`} id={`neighborname${props.neighborID}`} className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="input-group">
                <div className="input-group-prepend col-12 p-0">
                  <span>*</span><strong>นามสกุล</strong>
                </div>
                <input type="text" name={`neighborlastname${props.neighborID}`} id={`neighborlastname${props.neighborID}`} className="form-control input-sec1 input-sec1-row2" />
              </div>
            </div>
          </div>
<br/>
          {/* row-2 */}
          <div className="row">
            <div className="col-xl-3 col-12 p-0">
              <span>*</span><strong>เพศ</strong>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name={`relativeGender${props.neighborID}`} id={`Male${props.neighborID}`} value={`Male${props.neighborID}`} className="form-check-input"/>
                <label htmlFor={`Male${props.neighborID}`} className="form-check-label">ชาย</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name={`relativeGender${props.neighborID}`} id={`Female${props.neighborID}`} value={`Female${props.neighborID}`} className="form-check-input"/>
                <label htmlFor={`Female${props.neighborID}`} className="form-check-label">หญิง</label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check form-check-inline">
                <input type="radio" name={`relativeGender${props.neighborID}`} id={`Other${props.neighborID}`} value={`Other${props.neighborID}`} className="form-check-input"/>
                <label htmlFor={`Other${props.neighborID}`} className="form-check-label">อื่นๆ</label>
              </div>
            </div>
          </div>
<br/>

      {/* row 3 */}
      <p><span>*</span>ความสัมพันธ์กับผู้สูงอายุ</p>
      <div className="row relative">
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="son1" value="son1" className="form-check-input"/>
            <label htmlFor="son1" className="form-check-label">บุตรชาย</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="daughter1" value="daughter" className="form-check-input"/>
            <label htmlFor="daughter1" className="form-check-label">ลูกสาว</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="sonInLaw1" value="sonInLaw" className="form-check-input"/>
            <label htmlFor="sonInLaw1" className="form-check-label">ลูกเขย</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="daughterInLaw1" value="daughterInLaw" className="form-check-input"/>
            <label htmlFor="daughterInLaw1" className="form-check-label">ลูกสะใภ้</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="grandson1" value="grandson" className="form-check-input"/>
            <label htmlFor="grandson1" className="form-check-label">หลานชาย</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id={`granddaughter${props.neighborID}`} value="granddaughter" className="form-check-input"/>
            <label htmlFor="granddaughter1" className="form-check-label">หลานสาว</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="siblings1" value="siblings" className="form-check-input"/>
            <label htmlFor="siblings1" className="form-check-label">พี่น้อง</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="father1" value="father" className="form-check-input"/>
            <label htmlFor="father1" className="form-check-label">บิดา</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="mother1" value="mother" className="form-check-input"/>
            <label htmlFor="mother1" className="form-check-label">มารดา</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="husband1" value="husband" className="form-check-input"/>
            <label htmlFor="husband1" className="form-check-label">สามี</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="wife1" value="wife" className="form-check-input"/>
            <label htmlFor="wife1" className="form-check-label">ภรรยา</label>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-12">
          <div className="form-check form-check-inline">
            <input type="radio" name={`relative-relational${props.neighborID}`} id="otherperson1" value="otherperson" className="form-check-input"/>
            <label htmlFor="otherperson1" className="form-check-label">บุคคลอื่น</label>
          </div>
        </div>
      </div>
<br/>   
      {/* row 4 */}
      <div className="row align-items-end phone-number ">
        <div className="col-4 p-0">
          <p>เบอร์โทรศัพท์ <span className="text-warning" >(ถ้ามี)</span> </p>
        </div>
        <div className="col-8">
          <input type="text" className="form-control" />
        </div>
      </div>
<br/>
      {/* row 5 */}
      <div className="row">
            <div className="col-3 p-0">
              <p>เวลาที่อยู่กับผู้สูงอายุ</p>
            </div>
            <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="allday1" value="allday" className="form-check-input"/>
                  <label htmlFor="allday1" className="form-check-label">ทั้งวัน</label>
                </div>
            </div>
            <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="day1" value="day" className="form-check-input"/>
                  <label htmlFor="day1" className="form-check-label">กลางวัน</label>
                </div>
            </div>
            <div className="col-3">
                <div className="form-check form-check-inline">
                  <input type="radio" name="time-with-old" id="night1" value="night" className="form-check-input"/>
                  <label htmlFor="night1" className="form-check-label">กลางคืน</label>
                </div>
            </div>
          </div>
      </div>
      );
}
