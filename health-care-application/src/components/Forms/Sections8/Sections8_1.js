import React from 'react'
// Some css in Sections7.css

export default function Sections8_1() {

  const qusetions = ["ผู้สูงอายุรู้สึกหดหู่ เศร้า หรือท้อแท้สิ้นหวัง", "ผู้สูงอายุรู้สึกทำอะไรก็ไม่เพลิดเพลิน"]

  return (
    <div className="css-form">
      <h1>ข้อมูลของผู้สูงอายุ</h1>
      <form action="#">
        <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
        <div className="question">
          {/* content */}
          {/* <form action="#"> */}
            <table width="100%" >
              <tr className="sec7-text-center" >
                <td width="75%"> <strong>ช่วง 2 สัปดาห์ที่ผ่านมา</strong> </td>
                <td> <strong>มี</strong> </td>
                <td> <strong>ไม่มี</strong> </td>
              </tr><br/>
              {qusetions.map((value, index) =>  {
                var i = index+1
                return (
                  <tr id={index} className="sec7-one-row" >
                    <td>
                        {`${i}. ${value}`}
                    </td>
                    <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="" /></td>
                    <td className="sec7-text-center" ><input type="radio" name={`a${i}`} value="" /></td>
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
