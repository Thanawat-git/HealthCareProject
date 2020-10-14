import React from 'react'

export default function Sections9_2() {
    const questions = ["ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า < 30 นาที", "เสียงดังกรอบแกรบขณะเคลื่อนไหว", "กดเจ็บที่กระดูกข้อเข่า", "ข้อใหญ่ผิดรูป", "ไม่พบข้ออุ่น"]

    return (
        <div className="css-form">
            <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
            <form>
                <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
                <h3>คัดกรองโรคข้อเข่าเสื่อม</h3>
                <div className="question">
          {/* content */}
          {/* <form action="#"> */}
            <table width="100%" >
              <tr className="sec9-text-center" >
                <td></td>
                <td> <strong>ขวา</strong> </td>
                <td> <strong>ซ้าย</strong> </td>
                <td> <strong>ไม่ใช่</strong> </td>
              </tr><br/>
              {questions.map((value, index) =>  {
                var i = index+1
                return (
                  <tr id={index} className="sec9-one-row" >
                    <td>
                        <div className="input-group-prepend">{`${i}. ${value}`}</div>
                    </td>
                    <td className="sec9-text-center" ><input type="checkbox" name={`a${i}`} value="R" /></td>
                    <td className="sec9-text-center" ><input type="checkbox" name={`a${i}`} value="L" /></td>
                    <td className="sec9-text-center" ><input type="checkbox" name={`a${i}`} value="LR" /></td>
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
                <div className="row justify-content-between">
                    <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
                    <button type="button" class="btn form-btn btn-primary btn-lg">ถัดไป</button>
                </div>
            </form>
        </div>
    );
}
