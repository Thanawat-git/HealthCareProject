import React from 'react'
import './Sections7.css'

export default function Sections7_2() {

  const qusetions = [
  "วันเดือนปีเกิดของท่านคือ", "เหตุการณ์ 14 ตุลา หรือวันมหาวิปโยคเกิดในพ.ศ.อะไร", "พระมหากษัตริย์องค์ปัจจุบัน มีพระนามว่าอะไร",
  "ให้นับถอยหลังจาก 20 จนถึง 1"
  ]


  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 7 การประเมินภาวะสมองเสื่อม</h2>
        <div className="question">
          {/* content */}
          {/* <form action="#"> */}
            <table width="100%" >
              <tr className="sec7-text-center" >
                <td width="75%"> <strong>คำถาม</strong> </td>
                <td> <strong>ผิด</strong> </td>
                <td> <strong>ถูก</strong> </td>
              </tr><br/>
              {qusetions.map((value, index) =>  {
                var i = index+7
                return (
                  <tr id={index} className="sec7-one-row" >
                    <td>
                      <div className="input-group input-group-sm">
                        <div className="input-group-prepend">{`${i}. ${value}`}</div>
                        <input type="text" name="" id="" className="form-control input-sec7"/>
                      </div>
                    </td>
                    <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="" /></td>
                    <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="" /></td>
                  </tr>
                )
              })}
              
              
            </table>
          {/* </form> */}

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
