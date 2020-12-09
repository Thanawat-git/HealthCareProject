import { InputAdornment, TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import './admin.css'
import SearchIcon from "@material-ui/icons/Search";
import AddNewAdmin from "./AddNewAdmin";
import EditAdminInfo from "./EditAdminInfo";
import * as adminAction from "../../../actions/admin.action";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content"; 
import { useDispatch, useSelector } from 'react-redux';
const MySwal = withReactContent(Swal);

export default function AdminContent() {
  const dispatch = useDispatch()
  const adminReducer = useSelector(({adminReducer}) => adminReducer)
  useEffect(() => {
    adminReducer.result===null && dispatch(adminAction.getAllAdmin())
  }, [])

  const createRow = () => {
    try{
      const {result, isFetching} = adminReducer
      return (
        !isFetching &&
        result != null && result.map((value, index)=>{
          return (
            <tr onClick={() => console.log("xxx")}>
              <td>{index+1}</td>
              <td>{value.ADM_GENDER}{value.ADM_FIRSTNAME} {value.ADM_LASTNAME}</td>
              <td>{value.ADM_POSITION}</td>
              <td>{value.ADM_PHONE}</td>
              <td>{value.ADM_EMAIL}</td>
              <td>xxxxx</td>
              <td style={{ textAlign: "center" }}>
              <EditAdminInfo selectValue={value} />
              <span style={{ color: "grey" }}> | </span>
              <button
                onClick={() => {
                  MySwal.fire({
                    title: "ต้องการลบอาสาสมัครคนนี้ใช่หรือไม่",
                    text: `คุณ${value.ADM_FIRSTNAME} ${value.ADM_LASTNAME} กำลังจะถูกลบ!`,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    confirmButtonText: " ลบ ",
                    cancelButtonText: "ยกเลิก"
                  }).then(result => {
                    if (result.value) {
                      dispatch(adminAction.deleteAdmin(value.ADM_ID_NUMBER))
                      Swal.fire(
                        'ลบสำเร็จ',
                        `คุณ${value.ADM_FIRSTNAME} ${value.ADM_LASTNAME} ได้ถูกลบแล้ว`,
                        'success'
                      )
                    }
                  });
                }}
                type="button"
                className="btn btn-danger"
              >
                ลบ
              </button>
              </td>
            </tr>
          )
        })
      )
    }catch(e){}
  }

  const onChange = e =>{
    dispatch(adminAction.getAdminByKeyword(e))
  }
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
            <div className="col-8 card-body">
              <TextField
                label="ค้นหาโดยการกรอกชื่อ-นามสกุล หรือรหัสประจำตัว"
                id="standard-start-adornment"
                onChange={onChange}
                InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>),}}
                fullWidth
              />
            </div>
            <div onClick={() => console.log("yyyy")} className="col-4 card-body add-staff-bt">
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
                  <th style={{ textAlign: "center" }}>ชื่อผู้ใช้</th>
                  <th scope="col">สถานะ</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>

              <tbody>
              {createRow()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
