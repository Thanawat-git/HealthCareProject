import React, { useState } from 'react'
import './Sections8.css'

export default function Sections8_9Q() {

    const [count, setCount] = useState(0)

    const qusetions = ["เบื่อ ไม่สนใจอยากทำอะไร", "ไม่สบาย ซึมเศร้า ท้อเเท้", "หลับยาก หรือหลับๆ ตื่นๆ หรือ หลับมากไป",
    "เหนื่อยง่าย หรือ ไม่ค่อยมีแรง", "เบื่ออาหาร หรือ กินมากเกินไป", "รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว หรือทำให้ตนเองหรือครอบครัวผิดหวัง",
    "สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ", 
    "พูดช้า หรือทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้", "คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี"
    ]

    const countScore = (e) => {
        let score = parseInt(e.target.value)
        // console.log(score+1)
        setCount(count+score)
    }

    return (
        <div className="css-form sec8-9q">
          <h1>ข้อมูลของผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
            <div className="question sec-8">
              {/* content */}
                <table width="100%" className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th width="5%" >ข้อ</th>
                            <th width="50%" >ในช่วง 2 สัปดาห์ที่ผ่านมารวมทั้งวันนี้ท่านมีอาการเหล่านี้บ่อยแค่ไหน</th>
                            <th width="10%" >ไม่มีเลย</th>
                            <th width="10%" > บางวัน <span>(1-7 วัน)</span></th>
                            <th width="10%" > เป็นบ่อย <span>{`(> 7 วัน)`}</span></th>
                            <th width="10%" > เป็นทุกวัน </th>
                        </tr>
                    </thead>
                {qusetions.map((value, index) =>  {
                    var i = index+1
                    return (
                    <tr id={index} className="sec7-one-row" >
                        <td> {`${i}`} </td>
                        <td>
                            <div className="input-group-prepend">{`${value}`}</div>
                        </td>
                        <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="0" onChange={countScore} /></td>
                        <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="1" onChange={countScore} /></td>
                        <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="2" onChange={countScore} /></td>
                        <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="3" onChange={countScore} /></td>
                    </tr>
                    )
                })}
                    <tr>
                        <td></td>
                        <td>{`คะแนนรวม ${count} `}</td>
                        <td colSpan="4" ></td>
                    </tr>
                </table>

                <div className="resua">
                    การแปลผล :
                </div>
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
