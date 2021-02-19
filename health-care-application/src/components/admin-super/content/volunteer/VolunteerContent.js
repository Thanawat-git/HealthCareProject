import { InputAdornment, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import AddNewVolunteer from "./AddNewVolunteer";
import EditVolunteerInfo from "./EditVolunteerInfo";
import * as volAction from "../../../../actions/volunteer.action";
import { useDispatch, useSelector } from 'react-redux';
import notfound from '../../../images/notfound.svg'
import Skeleton from '@material-ui/lab/Skeleton';

export default function VolunteerContent() {
  const dispatch = useDispatch()
  const volunteerReducer = useSelector(({volunteerReducer}) => volunteerReducer)
  useEffect(() => {
    if(volunteerReducer.result===null){
      dispatch(volAction.getAllVolunteers())
    }
  },[]);

  const updateStatus = (value)=>{
    dispatch(volAction.updateVolStatus([value.VOL_ID_NUMBER, !value.VOLUNTEER.VOL_STATUS]))
  }
  const {result, isFetching, isError} = volunteerReducer
  
  const createRow = ()=>{
    try{
      return (
        !isFetching &&
        result !== null && 
        result.length !== 0 ? result.map((value, index)=>{
          return (
          <tr key={value.VOL_ID_NUMBER} onClick={() => console.log("xxx")}>
            <td>{index+1}</td>
            <td>{value.VOLUNTEER.VOL_FIRSTNAME} {value.VOLUNTEER.VOL_LASTNAME}</td>
            <td>{value.VOLUNTEER.VOL_PHONE}</td>
            <td>{value.VOLUNTEER.VOL_ID_NUMBER}</td>
            <td>
            {
              value.VOLUNTEER.VOL_STATUS ? 
              <span className="text-success" >ปฏิบัติงานอยู่</span>
              : <span className="text-secondary" >พักงาน</span>
            }
            </td>
            <td style={{ textAlign: "center" }}>
              <EditVolunteerInfo selectValue={value} />
              <span style={{ color: "grey" }}> | </span>
              {
                value.VOLUNTEER.VOL_STATUS ?
                <button
                type="button"
                className="btn btn-warning"
                onClick={()=>updateStatus(value)}
              >
                ปิด
              </button>
              :
              <button
              type="button"
              className="btn btn-secondary"
              onClick={()=>updateStatus(value)}
              > เปิด
              </button>
              }
              
            </td>
          </tr>
          )
        })
        : <React.Fragment>
          {/* <img src={notfound} alt=""/> */}
        </React.Fragment>
        
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
              {isFetching === false 
              ? createRow()
              : [1,1,1,1,1,1,1,1,1,1].map((v,i)=>{
                return <React.Fragment>
                  <tr key={i}>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                    <td><Skeleton variant="rect" style={{ borderRadius: 3 }} /></td>
                  </tr>
                </React.Fragment>
              })
              }
              </tbody>
            </table>
            
            {
              isFetching === false && isError === false && result.length === 0 && 
              <div className="nodata-display">
              <img src={notfound} className="nodata-img" />
              <h4>ไม่พบข้อมูล</h4>
              </div>
            }
            
            
          </div>
        </div>
      </section>
    </React.Fragment>
    )
}
