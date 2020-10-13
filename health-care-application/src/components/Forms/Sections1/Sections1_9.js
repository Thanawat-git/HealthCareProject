import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'

export default function Sections1_9() {
    const [showInput, setShowInput] = useState(false)
    const Disease = []

    const congenitalDisease = () => {
        setShowInput(true)
    }

    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <div className="question">
                <div className="row">
                    <div className="col-4 p-0">
                        <p><span>*</span><strong>โรคประจำตัว</strong></p>
                    </div>
                    <div className="col-8">
                        <div className="input-group">
                            {showInput ?
                            <div className="input-group-append">
                            <input type="text" name="diseaseName" id="" value="" className="form-control"/> 
                            <button type="button" className="btn btn-secondary btn-md"
                            >
                            เพิ่ม</button>
                            </div>
                            :
                                <button type="button" className="btn btn-secondary btn-md"
                                onClick={congenitalDisease} >
                                เพิ่ม</button>
                            
                            }
                        </div>
                    </div>

                    <div className="col-12">
                        <ol>
                            {Disease.map((value, index)=>{
                                return(
                                    <li> {value} </li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
              {/* content */}
            </div>
  
            {/* bt */}
            <div className="row justify-content-center">
              <button type="button" className="btn form-btn btn-primary btn-lg">บันทึก</button>
            </div>
          </form>
        </div>
      );
}
