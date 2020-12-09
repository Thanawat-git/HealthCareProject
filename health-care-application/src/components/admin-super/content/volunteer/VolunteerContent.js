import { InputAdornment, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import AddNewVolunteer from "./AddNewVolunteer";
import EditVolunteerInfo from "./EditVolunteerInfo";
import * as volAction from "../../../../actions/volunteer.action";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content"; 
import { useDispatch, useSelector } from 'react-redux';
const MySwal = withReactContent(Swal);

export default function VolunteerContent() {
  const dispatch = useDispatch()
  const volunteerReducer = useSelector(({volunteerReducer}) => volunteerReducer)
  
  useEffect(() => {
    if(volunteerReducer.result===null){
      dispatch(volAction.getAllVolunteers())
    }
  },[]);
  const createRow = ()=>{
    try{
      const {result, isFetching} = volunteerReducer
      return (
        !isFetching &&
        result != null && result.map((value, index)=>{
          return (
          <tr key={value.VOL_ID_NUMBER} onClick={() => console.log("xxx")}>
            <td>{index+1}</td>
            <td>{value.VOL_FIRSTNAME} {value.VOL_LASTNAME}</td>
            <td>{value.VOL_PHONE}</td>
            <td>{value.VOL_ID_NUMBER}</td>
            <td>{value.VOL_LINE}</td>
            <td style={{ textAlign: "center" }}>
              <EditVolunteerInfo selectValue={value} />
              <span style={{ color: "grey" }}> | </span>
              <button
                onClick={() => {
                  MySwal.fire({
                    title: "ต้องการลบอาสาสมัครคนนี้ใช่หรือไม่",
                    text: `คุณ${value.VOL_FIRSTNAME} ${value.VOL_LASTNAME} กำลังจะถูกลบ!`,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    confirmButtonText: " ลบ ",
                    cancelButtonText: "ยกเลิก"
                  }).then(result => {
                    if (result.value) {
                      dispatch(volAction.deleteVolunteer(value.VOL_ID_NUMBER))
                      Swal.fire(
                        'ลบสำเร็จ',
                        `คุณ${value.VOL_FIRSTNAME} ${value.VOL_LASTNAME} ได้ถูกลบแล้ว`,
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
  const onChange = (e)=>{
    dispatch(volAction.getVolunteerByKeyword(e))
  }
    return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">จัดการอาสาสมัคร</h1>
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
                onChange={onChange}
                InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>),}}
                fullWidth
              />
            </div>
            <div onClick={() => console.log("yyyy")} className="col-4 card-body add-staff-bt">
                <AddNewVolunteer/>
            </div>
            {/* table */} 
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">ชื่อ - นามสกุล</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th scope="col">ชื่อผู้ใช้</th>
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
    )
}
