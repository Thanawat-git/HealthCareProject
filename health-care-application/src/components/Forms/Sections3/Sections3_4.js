import React, { Component } from 'react';
import sademoji from '../images/sad.jpg';

class Sections3 extends Component {
  render() {
    // const [value, onChange] = useState(new Date());

  // Filter table
  // const filterTable = (e)=> {
  //   // console.log(e.target.value);
  //   var filter = e.target.value;
  //   // var x = document.getElementsByName(filter);

  //   var statusArr = ["less30", "over30", "overdue", "nodue", "canceldue"]

  //   for (var i=0; i<statusArr.length; i++){
  //     var tem = statusArr[i]
  //     if (tem != filter) {
  //       var x = document.getElementsByName(tem);
  //       for (var j = 0; j < x.length; j++) {
  //         x[j].style.display = "none";
  //       }
  //     } else {
  //       var x = document.getElementsByName(tem);
  //       for (var j = 0; j < x.length; j++) {
  //         x[j].style.display = "";
  //       }
  //     }
  //   }

  // }

  // const getDay = (day) => {
  //   console.log(day)
  //   const dayArr = day.split("/")
  //   const year = dayArr[2]
  //   const month = dayArr[1]
  //   const days = dayArr[0]
  //   const datef = `${month}/${days}/${year}`
  //   // console.log(datef)

  //   // date now
  //   const now = new Date();

  //   const date1 = new Date(datef)
  //   const date2 = new Date(now)
  //   // console.log(date1)
  //   // console.log(date2)

  //   const diffTime = date1.getTime() - date2.getTime()
  //   const diffDay = diffTime / (1000 * 3600 * 24)
  //   return Math.floor(diffDay)
  // }
  
  const getIndex = (e)=>{
    let indexs = e.target.value
    // // console.log(e.target.value)
    // document.getElementById("oldname").innerHTML = SimpleData[indexs].name;
    // document.getElementById("title").innerHTML = SimpleData[indexs].title;
    // document.getElementById("status").innerHTML = SimpleData[indexs].status;
  }

    return (
      <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <div className="box-form">
      <form>
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2> 
        <div className="question">
        
          <p>3.7 มีพ่อ แม่ พี่น้องท้องเดียวกันเป็นโรคหัวใจขาดเลือด หรือ อัมพฤกษ์ อัมพาตก่อนวัยอันควร <br/><span>(ชายเป็นก่อนอายุ 55 ปี หญิงเป็นก่อน 65 ปี)</span></p>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1y" value="Y" className="form-check-input"/>
            <label htmlFor="art3.1y" className="form-check-label">ใช่</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="3.1" id="art3.1n" value="N" className="form-check-input"/>
            <label htmlFor="art3.1n" className="form-check-label">ไม่ใช่</label>
          </div>
        </div>
        <div className="row justify-content-between">
          <button type="button" class="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
          <button type="button" class="btn form-btn btn-primary btn-lg" data-toggle="modal" data-target="#editTable" onClick={getIndex}>ถัดไป</button>
        </div>

        <div class="modal fade" id="editTable" tabindex="-1" role="dialog" aria-labelledby="editTableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">ผลการประเมิน</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style={{textAlign:"center"}}>
            <p><img className="img-displayed" src={sademoji} /></p>
              <p className="heading1">มีความเสี่ยงสูง</p>
              <p className="heading2">ติดตามการปรับพฤติกรรมสุขภาพ</p>
              <p className="heading2">ทุก 6 เดือน</p>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary" data-dismiss="modal">ยืนยัน</button>
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
    </div>
    );;
  }
}

export default Sections3;
