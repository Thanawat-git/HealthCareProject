import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import './admin.css'
import SearchIcon from "@material-ui/icons/Search";
import AddNewAdmin from "../admin/AddNewAdmin";

export default function AdminContent() {
  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">จัดการผู้ดูแลระบบ</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 card-body">
              <TextField
                label="ค้นหาโดยการกรอกชื่อหรือนามสกุล"
                id="standard-start-adornment"
                //   onKeyUp={(e)=>searchArr(e)}
                InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>),}}
                fullWidth
              />
            </div>
            <div onClick={() => console.log("yyyy")} className="col-2 card-body add-staff">
                <AddNewAdmin/>
            </div>
            {/* table */} 
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">ชื่อ - นามสกุล</th>
                  <th scope="col">ตำแหน่ง</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th scope="col">ชื่อผู้ใช้</th>
                  <th scope="col">สถานะ</th>
                </tr>
              </thead>

              <tbody>
                  <tr onClick={() => console.log("xxx")}>
                    <td>1</td>
                    <td>xxxxx</td>
                    <td>xxxxx</td>
                    <td>xxxxxx</td>
                    <td>xxxxxx</td>
                    <td>xxxxxx</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
