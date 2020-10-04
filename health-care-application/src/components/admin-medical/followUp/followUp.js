import React, { useState } from 'react';
import './followUp.css';

export default function FollowUp() {
  const SimpleData = [
    {name: "นางจุบแจง", title: "ความดัน", date: "5/10/2020", status: "overdue", numDay: "เกินกำหนด", nameV: "สมหมาย"},
    {name: "นางแตงไทย", title: "เบาหวาน", date: "15/10/2020", status: "less30", numDay: "อีก 7 วัน",  nameV: "สมหมาย"},
    {name: "นางจรินทร์", title: "ความดัน", date: "15/10/2020", status: "less30", numDay: "อีก 7 วัน",  nameV: "สมหมาย"},
    {name: "นายใจดี", title: "ความดัน", date: "1/12/2020", status: "over30", numDay: "อีก 54 วัน",  nameV: "ดารินทร์"},
    {name: "นางวรรณา", title: "เบาหวาน", date: "1/12/2020", status: "over30", numDay: "อีก 54 วัน",  nameV: "ดารินทร์"},
    {name: "นายธาดา", title: "เบาหวาน", date: "8/11/2020", status: "less30", numDay: "อีก 26 วัน",  nameV: "ชบา"},
    {name: "นายปกรณ์", title: "เบาหวาน", date: "", status: "nodue", numDay: "",  nameV: ""},
    {name: "นายมงคล", title: "น้ำตาล", date: "", status: "nodue", numDay: "",  nameV: ""},
    {name: "นางชื่นใจ", title: "น้ำตาล", date: "", status: "nodue", numDay: "",  nameV: ""},
    {name: "นายชีพ", title: "น้ำตาล", date: "", status: "nodue", numDay: "",  nameV: ""},
    {name: "นางปลายฟ้า", title: "ความดัน", date: "", status: "nodue", numDay: "",  nameV: ""},
    {name: "นางชูใจ", title: "ความดัน", date: "", status: "nodue", numDay: "",  nameV: ""}
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
 
      <div className="content2" id="table">
        
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ลบ</th>
            <th scope="col" className="number">ลำดับ</th>
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
          index++
          return (
            <tr name={value.status} id={index} >
              <td className="number"><input type="checkbox"/></td>
              <td className="number">{index}</td>
              <td>{value.name}</td>
              <td>ตรวจ{value.title}</td>
              <td> {value.date} </td>
              <td className="text-warning">{value.numDay}</td>
              <td className="text"> {value.nameV} </td>
              <td></td>
            </tr>
          )
        })}
          {/* <tr name={data.status}>
            <td className="number"><input type="checkbox"/></td>
            <td className="number">1</td>
            <td>ป้าจุบแจง</td>
            <td>ตรวจความดัน</td>
            <td></td>
            <td class="text-warning">อีก 5 วัน</td>
            <td class="text-warning">อีก 5 วัน</td>
            <td class="text-warning">อีก 5 วัน</td>
          </tr> */}
          
        </tbody>
      </table>
      </div>
    </div>
  );
}

