import React from 'react'

export default function Sections9_1() {
  const questions = ["เคยพลัดตกหกล้มในช่วง 1 ปีที่ผ่านมา", "ใช้ไม้เท้าหรืออุปกรณ์ช่วยเดิน", "บางครั้งมีความรู้สึกว่าเดินไม่ค่อยมั่นคง", "ต้องจับเฟอร์นเจอร์เพื่อประคองตนเองขณะเดินในบ้าน",
    "ต้องใช้มือดันตัวเองขึ้นเวลาลุกจากเก้าอี้", "มีความกังวลว่าตนเองจะหกล้ม", "มีปัญหาเวลาก้าวขึ้นขอบฟุตบาท"]

    return (
      <div className="css-form">
        <h1>ข้อมูลของผู้สูงอายุ</h1>
        <form action="#">
          <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
          <h4>การคัดกรองความเสี่ยงต่อการพลัดตกหกล้ม</h4>
          <div className="question">
            {/* content */}
            {/* <form action="#"> */}
              <table width="100%" >
                <tr className="sec9-text-center" >
                  <td></td>
                  <td> <strong>ใช่</strong> </td>
                  <td> <strong>ไม่ใช่</strong> </td>
                </tr><br/>
                {questions.map((value, index) =>  {
                  var i = index+1
                  return (
                    <tr id={index} className="sec9-one-row" >
                      <td>
                          <div className="input-group-prepend">{`${i}. ${value}`}</div>
                      </td>
                      <td className="sec9-text-center" ><input type="radio" name={`a${i}`} value="Y" /></td>
                      <td className="sec9-text-center" ><input type="radio" name={`a${i}`} value="N" /></td>
                    </tr>
                  )
                })}
              </table>
            {/* </form> */}
  
            <div className="resua">
                การแปลผล :
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
