import React from 'react'
import './followUp.css';

export default function followUp() {
  
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
      <div className="content2">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">ชื่อ - นามสกุล</th>
            <th scope="col">หัวข้อ</th>
            <th scope="col">วันที่</th>
            <th scope="col">สถานะ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>ป้าจุบแจง</td>
            <td>ตรวจความดัน</td>
            <td>29/09/2020</td>
            <td class="text-warning">อีก 7 วัน</td>
          </tr>
          <tr>
            <td>2</td>
            <td>ป้าแตงโม</td>
            <td>ตรวจความดัน</td>
            <td>5/10/2020</td>
            <td class="text-primary">อีก 9 วัน</td>
          </tr>
          <tr>
            <td>3</td>
            <td>ลุงโมเสธ</td>
            <td>ตรวจน้ำตาล</td>
            <td>5/10/2020</td>
            <td class="text-primary">อีก 9 วัน</td>
          </tr>
          <tr>
            <td>4</td>
            <td>ลุงสุทิน</td>
            <td>ตรวจน้ำตาล</td>
            <td>7/10/2020</td>
            <td class="text-primary">อีก 11 วัน</td>
          </tr>
          <tr>
            <td>5</td>
            <td>ยายสำอาง</td>
            <td>ตรวจน้ำตาล</td>
            <td>8/10/2020</td>
            <td class="text-primary">อีก 12 วัน</td>
          </tr>
          <tr>
            <td>6</td>
            <td>ลุงเริง</td>
            <td>ตรวจน้ำตาล</td>
            <td>22/09/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
          <tr>
            <td>7</td>
            <td>ลุงธารา</td>
            <td>ตรวจน้ำตาล</td>
            <td>23/10/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
          <tr>
            <td>6</td>
            <td>ลุงเริง</td>
            <td>ตรวจน้ำตาล</td>
            <td>22/09/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
          <tr>
            <td>7</td>
            <td>ลุงธารา</td>
            <td>ตรวจน้ำตาล</td>
            <td>23/10/2020</td>
            <td class="text-danger">เกินกำหนด</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

