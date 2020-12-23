import React, { useState } from 'react';
import './followUp.css';
import DatePicker from 'react-date-picker'; 

export default function FollowUp() {
  const [value, onChange] = useState(new Date());

  const [status, setStatus] = useState("nodue");

  const SimpleData = [
    {name: "นางจุบแจง", title: "ความดัน", date: "10/10/2020", status: "" , nameV: "สมหมาย"},
    {name: "นางแตงไทย", title: "เบาหวาน", date: "15/10/2020", status: "" ,  nameV: "สมหมาย"},
    {name: "นางจรินทร์", title: "ความดัน", date: "15/10/2020", status: "", nameV: "สมหมาย"},
    {name: "นายใจดี", title: "ความดัน", date: "01/12/2020", status: "", nameV: "ดารินทร์"},
    {name: "นางวรรณา", title: "เบาหวาน", date: "01/12/2020", status: "", nameV: "ดารินทร์"},
    {name: "นายธาดา", title: "เบาหวาน", date: "08/11/2020", status: "", nameV: "ชบา"},
    {name: "นายปกรณ์", title: "เบาหวาน", date: "", status: "", nameV: ""},
    {name: "นายมงคล", title: "น้ำตาล", date: "", status: "", nameV: ""},
    {name: "นางชื่นใจ", title: "น้ำตาล", date: "", status: "", nameV: ""},
    {name: "นายชีพ", title: "น้ำตาล", date: "", status: "", nameV: ""},
    {name: "นางปลายฟ้า", title: "ความดัน", date: "", status: "", nameV: ""},
    {name: "นางชูใจ", title: "ความดัน", date: "", status: "", nameV: ""}
  ]

  // Filter table
  const filterTable = (e)=> {
    // console.log(e.target.value);
    var filter = e.target.value;
    // var x = document.getElementsByName(filter);

    var statusArr = ["less30", "over30", "overdue", "nodue", "canceldue"]

    for (var i=0; i<statusArr.length; i++){
      var tem = statusArr[i]
      if (tem != filter) {
        var x = document.getElementsByName(tem);
        for (var j = 0; j < x.length; j++) {
          x[j].style.display = "none";
        }
      } else {
        var x = document.getElementsByName(tem);
        for (var j = 0; j < x.length; j++) {
          x[j].style.display = "";
        }
      }
    }

  }

  const getDay = (day, index) => {
    console.log(day)
    const dayArr = day.split("/")
    const year = dayArr[2]
    const month = dayArr[1]
    const days = dayArr[0]
    const datef = `${month}/${days}/${year}`
    // console.log(datef)

    // date now
    const now = new Date();

    const date1 = new Date(datef)
    const date2 = new Date(now)
    // console.log(date1)
    // console.log(date2)

    const diffTime = date1.getTime() - date2.getTime()
    const diffDay = diffTime / (1000 * 3600 * 24)

    const IntDay = Math.floor(diffDay)+1
    if (IntDay < 0) {
      SimpleData[index].status = "overdue"
    } else if (IntDay<= 30) {
      SimpleData[index].status = "less30"
    } else {
      SimpleData[index].status = "over30"
    }
    return IntDay
  }
  
  const getIndex = (e)=>{
    let indexs = e.target.value
    // console.log(e.target.value)
    document.getElementById("oldname").innerHTML = SimpleData[indexs].name;
    document.getElementById("title").innerHTML = SimpleData[indexs].title;
    document.getElementById("status").innerHTML = SimpleData[indexs].status;
  }

  const updateSimpleDate = () => {
    var newDate = document.getElementById("updateDate").value
    console.log(newDate)
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">นัดหมาย</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <div className="top-input">
          <input type="text" className="form-control" placeholder={SimpleData[1].name} />
      </div>

      <div className="filter-btnav">
        <button type="button" class="btn btn-warning" value="less30" onClick={filterTable} >น้อยกว่า 30 วัน</button>
        <button type="button" class="btn btn-primary" value="over30" onClick={filterTable} >31 - 60 วัน</button>
        <button type="button" class="btn btn-danger" value="overdue" onClick={filterTable} >เกินกำหนด</button>
        <button type="button" class="btn btn-secondary" value="nodue" onClick={filterTable} >ยังไม่ได้นัดหมาย</button>
        <button type="button" class="btn btn-secondary" value="canceldue" onClick={filterTable} >ยกเลิกนัด</button>
      </div>
 
      <div className="content2">
        
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ลบ</th>
            {/* <th scope="col" className="number">ลำดับ</th> */}
            <th scope="col">ชื่อ - นามสกุล</th>
            <th scope="col">หัวข้อ</th>
            <th scope="col">วันที่</th>
            <th scope="col">สถานะ</th>
            <th scope="col">ชื่อ อสม.</th>
            <th scope="col">แก้ไข</th>
          </tr>
        </thead>

        <tbody>
        {SimpleData.map((value, index) => {
          // index++
          var statusColorTxt = ""
          if (value.status != "nodue" && value.status != "overdue") {
            var day = getDay(value.date, index)
            day > 30 ? statusColorTxt = "primary" : statusColorTxt = "warning"
            day = `อีก ${day} วัน`
          } else if(value.status === "overdue"){
            day = "เกินกำหนด"
            statusColorTxt = "danger"
          } else {
            day = "ไม่ได้นัดหมาย"
          }
          return (
            <tr name={value.status} id={index} >
              <td className="number"><input type="checkbox" name={index} /></td>
              {/* <td className="number">{index}</td> */}
              <td>{value.name}</td>
              <td>ตรวจ{value.title}</td>
              <td> {value.date} </td>
              <td className={`text-${statusColorTxt}`}>{day}</td>
              <td className="text"> {value.nameV} </td>
              <td>
                <button type="button" className="btn btn-warning" value={index} data-toggle="modal" data-target="#editTable" onClick={getIndex}>แก้ไข</button>
              </td>
            </tr>
          )
        })} 
        </tbody>
      </table>
      </div>

      {/* <!-- Modal (Pop-Up) --> */}
      <div class="modal fade" id="editTable" tabindex="-1" role="dialog" aria-labelledby="editTableTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">แก้ไขนัดหมาย</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={updateSimpleDate}>
              <p id="oldname" ></p>
              <p id="title" ></p>
              <DatePicker onChange={onChange} value={value} id="updateDate" />
              <button type="submit" class="btn btn-primary" >บันทึก</button>
              <p id="status" ></p>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
