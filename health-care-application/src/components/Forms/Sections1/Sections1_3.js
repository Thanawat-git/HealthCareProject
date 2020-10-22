import React, {useState} from 'react'
import '../form-style.css'
import './Sections1.css'
import Neighbor from './neighbor'

export default function Sections1_3() {
  const [oneNeighbor, setOneNeighbor] = useState(false);
  const [twoNeighbor, setTowNeighbor] = useState(false);

    return (
        <div className="css-form">
          <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
          <form action="#">
            <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
            <h4>ข้อมูลญาติผู้ดูแล <span className="text-danger">*ถ้าไม่มีญาติที่ดูแลให้กดถัดไป*</span> </h4>
            <div className="question">

                <Neighbor neighborID="1" />
                <hr/>
<br/>
                <div className="row">
                    <div className="col-6 p-0">
                        <p> <span>*</span> มีญาติคนที่ 2 หรือไม่</p>
                    </div>
                    <div className="col-3 p-0">
                        <div className="form-check form-check-inline">
                        <input type="radio" name="addressSame" id="addressSameY" value="Y" className="form-check-input" onClick={()=>setTowNeighbor(true)} />
                        <label htmlFor="addressSameY" className="form-check-label">ใช่</label>
                        </div>
                    </div>
                    <div className="col-3 p-0">
                        <div className="form-check form-check-inline">
                        <input type="radio" name="addressSame" id="addressSameN" value="N" className="form-check-input" onClick={()=>setTowNeighbor(false)} />
                        <label htmlFor="addressSameN" className="form-check-label">ไม่ใช่</label>
                        </div>
                    </div>
                </div>

                {twoNeighbor ? <Neighbor neighborID="2" /> :  '' }
              {/* content */}
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
