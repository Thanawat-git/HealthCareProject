import React, { Component } from "react";
import "../form-style.css";

class Sections5 extends Component {
  render() {
    return (
      <div className="css-form">
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
          <div className="question">
            <div className="each-question">
              {/* content */}
              <p>
                <span>*</span>
                การแปรงฟัน
              </p>
              <div className="row pl-30">
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ไม่ได้แปรงฟัน</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      แปรงแต่ไม่ได้ใช้แปรงสีฟัน
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      แปรงวันละ 2 ครั้ง เช้าและก่อนนอน
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      แปรงมากกว่า 2 ครั้งต่อวัน ระบุ
                    </label>

                    <div className="col-5 p-0">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control input-sec1 input-sec1-row2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">อื่นๆ ระบุ</label>
                    <div className="col-7 p-0">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control input-sec1 input-sec1-row2"
                      />
                    </div>
                  </div>
                </div>
</div>
                <hr></hr>
                <p>
                  {/* <span>*</span> */}
                  การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน
                </p>
                <div className="row pl-30"> 

                <div className="col-6">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ใช้</label>
                  </div>  
                  </div>
                  <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label htmlFor="male2" className="form-check-label">
                      ไม่ใช้
                    </label>
                  </div>
                </div> 
                </div>
                
                <hr></hr>
                <p>
                  {/* <span>*</span> */}
                  ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน
                </p>
                <div className="row pl-30"> 
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ทำ</label>
                  </div>   </div>
                  <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ไม่ทำ</label>
                  </div>
                </div>
              </div>

             
              <hr></hr>
              <div className="form-check form-check-inline ">
                <p>
                  {/* <span>*</span> */}
                  จำนวนฟันแท้
                </p>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">ซี่</label>
              </div>
            
              <br></br>

              <div className="form-check form-check-inline ">
                <p>
                  {/* <span>*</span> */}
                  จำนวนฟันผุ
                </p>

                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">ซี่</label>
              </div>
              <p>
                {/* <span>*</span> */}
                จำนวนคู่สบฟันหลัง
              </p>
             
              <div className="row pl-30"> 
               <div className="col-12"> 
                <div className="form-check form-check-inline ">
                <label className="form-check-label">ฟันแท้ กับ ฟันแท้</label>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">คู่</label>
              </div>
              </div>
              <div className="col-12"> 
              <div className="form-check form-check-inline ">
                <label className="form-check-label">ฟันแท้ กับ ฟันเทียม</label>
                <div className="col-5 p-3">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control input-sec1 input-sec1-row2"
                  />
                </div>
                <label className="form-check-label">คู่</label>
              </div>
              </div>
              <div className="col-12"> 
                <div className="form-check form-check-inline ">
                  <label className="form-check-label">
                    ฟันเทียม กับ ฟันเทียม
                  </label>
                  <div className="col-5 p-3">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control input-sec1 input-sec1-row2"
                    />
                  </div>
                  <label className="form-check-label">คู่</label>
                </div>
              </div>
              </div>
             
              <hr></hr>
              <p>
                {/* <span>*</span> */}
                สูบบุหรี่มากกว่า 10 มวนต่อวัน
              </p>
              <div className="row pl-30"> 
              <div className="form-check form-check-inline">

                <div className="col-5 p-3">
                  <input
                    type="radio"
                    name="relativeGender2"
                    id="male2"
                    value="male"
                    className="form-check-input"
                  />
                </div>
                <label htmlFor="male2" className="form-check-label">
                  ใช่
                </label>
              </div>
<div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label htmlFor="male2" className="form-check-label">
                  ไม่ใช่
                </label>
              </div>  
              </div> 
              </div>
              <hr></hr>
              
                <p>
                  {/* <span>*</span> */}
                  เคี้ยวหมากเป็นประจำ
                </p>
                <div className="row pl-30"> 
                <div className="form-check form-check-inline">
                  <div className="col-5 p-3">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                  </div>
                  <label htmlFor="male2" className="form-check-label">
                    ใช่
                  </label>
                </div>
                <div className="col-12"> 
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="relativeGender2"
                    id="male2"
                    value="male"
                    className="form-check-input"
                  />
                  <label htmlFor="male2" className="form-check-label">
                    ไม่ใช่
                  </label>
                </div>
              </div>
              </div>
<hr></hr>
<p>
                {/* <span>*</span> */}
                เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง
              </p>
              <div className="row pl-30">
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ใช่</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label htmlFor="male2" className="form-check-label">
                      ไม่ใช่
                    </label>
                  </div>
                </div>
              </div>
              <hr></hr>
              <p>
                {/* <span>*</span>   */}
                เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก
              </p>
              <div className="row pl-30">
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ใช่</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label htmlFor="male2" className="form-check-label">
                      ไม่ใช่
                    </label>
                  </div>
                </div>
              </div>
              <hr></hr>
              <p>
                {/* <span>*</span> */}
                มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน
              </p>
              <div className="row pl-30">
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ใช่</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label htmlFor="male2" className="form-check-label">
                      ไม่ใช่
                    </label>
                  </div>
                </div>
              </div>
              <br></br>
              <p>
                {/* <span>*</span> */}
                ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร
              </p>
              <div className="row pl-30">
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label className="form-check-label">ใช่</label>
                  </div>{" "}
                </div>
                <div className="col-12">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="relativeGender2"
                      id="male2"
                      value="male"
                      className="form-check-input"
                    />
                    <label htmlFor="male2" className="form-check-label">
                      ไม่ใช่
                    </label>
                  </div>
                </div>
              </div>

<hr></hr>

<p>
                {/* <span>*</span> */}
                จำเป็นต้องใช้ฟันเทียมหรือ ทำฟันเทียมใหม่
              </p>
              <div className="row pl-30"> 
               <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
              </div> </div>
              <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label htmlFor="male2" className="form-check-label">
                  ไม่ใช่
                </label>
              </div>
              </div> 
              </div>
              <hr></hr>
            <p>
                {/* <span>*</span> */}
                เคยได้รับการตรวจหรือรักษาจากทันตบุคลากร
              </p>
              <div className="row pl-30"> 
               <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
              </div>  </div>
              <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label htmlFor="male2" className="form-check-label">
                  ไม่ใช่
                </label>
              </div>
              </div>
              </div>
              <hr></hr>
            <p>
                {/* <span>*</span> */}
               ท่านต้องการดูแลรักษาช่องปาก
              </p>
              <div className="row pl-30"> 
               <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label className="form-check-label">ใช่</label>
              </div></div>
              <div className="col-12"> 
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="relativeGender2"
                  id="male2"
                  value="male"
                  className="form-check-input"
                />
                <label htmlFor="male2" className="form-check-label">
                  ไม่ใช่
                </label>
              </div>
              </div>
              </div>

     <hr></hr>         
           <p>แปลผล:</p>
 

                
           
            </div>
          </div>

          {/* bt */}
          <div className="row justify-content-between">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
            <button type="button" className="btn form-btn btn-primary btn-lg">
              ถัดไป
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sections5;
