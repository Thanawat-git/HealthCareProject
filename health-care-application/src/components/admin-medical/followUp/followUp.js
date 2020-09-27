import React, { useState } from 'react';
import './followUp.css';

export default function FollowUp() {
  
  const [dateValue, setdateValue] = useState("Date Value");

  const [isInEditMode, setisInEditMode] = useState(true);
  const toEditMode = ()=>{
    setisInEditMode(!isInEditMode)
  }

  const upDateDate = (e)=>{
    setisInEditMode(true);
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
          <input type="text" className="form-control" placeholder="filter table" />
      </div>

      <div className="filter-btnav">
        <button type="button" class="btn btn-secondary">ยังไม่ได้นัดหมาย</button>
        <button type="button" class="btn btn-warning">น้อยกว่า 30 วัน</button>
        <button type="button" class="btn btn-primary">31 - 60 วัน</button>
        <button type="button" class="btn btn-danger">เกินกำหนด</button>
      </div>

      <div className="content2">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="number">ลำดับ</th>
            <th scope="col">ชื่อ - นามสกุล</th>
            <th scope="col">หัวข้อ</th>
            <th scope="col">วันที่</th>
            <th scope="col">สถานะ</th>
            <th scope="col">ชื่อ อสม.</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="number">1</td>
            <td>ป้าจุบแจง</td>
            <td>ตรวจความดัน</td>
            <td onDoubleClick={toEditMode}>
              {isInEditMode ? dateValue : 
              <div><input type="text" defaultValue={dateValue} onChange={e => setdateValue(e.target.value)} />
              <a href="#" onClick={upDateDate} ><i class="fas fa-check"></i></a></div> } 
            </td>
            <td class="text-warning">อีก 5 วัน</td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td>ป้าแตงโม</td>
            <td>ตรวจความดัน</td>
            <td>
              {isInEditMode ? <div> {dateValue} <a href="#" onClick={toEditMode} className="text-warning"><i class="fas fa-pencil-alt" /></a> </div>: 
              <div><input type="text" defaultValue={dateValue} onChange={e => setdateValue(e.target.value)} />
              <a href="#" onClick={upDateDate} className="text-success" ><i class="fas fa-check"></i></a></div> } 
            </td>
            <td class="text-primary">อีก 9 วัน</td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td>ลุงโมเสธ</td>
            <td>ตรวจน้ำตาล</td>
            <td>5/10/2020</td>
            <td class="text-primary">อีก 9 วัน</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td>ลุงสุทิน</td>
            <td>ตรวจน้ำตาล</td>
            <td>7/10/2020</td>
            <td class="text-primary">อีก 11 วัน</td>
          </tr>
          <tr>
            <td className="number">5</td>
            <td>ยายสำอาง</td>
            <td>ตรวจน้ำตาล</td>
            <td>8/10/2020</td>
            <td class="text-primary">อีก 12 วัน</td>
          </tr>
          <tr>
            <td className="number">6</td>
            <td>ลุงเริง</td>
            <td>ตรวจน้ำตาล</td>
            <td>22/09/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
          <tr>
            <td className="number">7</td>
            <td>ลุงธารา</td>
            <td>ตรวจน้ำตาล</td>
            <td>23/10/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
          <tr>
            <td className="number">8</td>
            <td>ลุงเริง</td>
            <td>ตรวจน้ำตาล</td>
            <td></td>
            <td class="text-secondary">ยังไม่ได้นัดหมาย</td>
          </tr>
          <tr>
            <td className="number">9</td>
            <td>ลุงธารา</td>
            <td>ตรวจน้ำตาล</td>
            <td></td>
            <td class="text-secondary">ยังไม่ได้นัดหมาย</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

