import React from "react";
import EditFollowup from "./EditFollowup";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as FpAction from "../../../../actions/followUp.action";
import { useState } from "react";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

let tmp = []
export default function FollowUp() {

  const [followUp, setfollowUp] = useState([])
  const [isFetching, setisFetching] = useState(true)
  const [isColor, setisColor] = useState('searchl30')
  // const [keyword, setkeyword] = useState('')
  const FpReducer = useSelector(({followUpReducer}) => followUpReducer)
  const dispatch = useDispatch()

  //------------------------Default Show less 30----------------------------------------//
  useEffect(() => {
    dispatch(FpAction.getFollowUp("searchl30"))
    setTimeout(() => {
      setisFetching(FpReducer.isFetching)
    }, 200);
  }, [])
  useEffect(() => {
    // if(tmp.length===0){
    //   for(let i=0; i<FpReducer.result.length; i++){
    //     tmp.push(FpReducer.result[i])
    //   }
    // }
    setfollowUp(FpReducer.result)
    return () => {
      setisFetching(true)
    }
  }, [isFetching])
  //------------------------Default Show less 30----------------------------------------//

  //------------------------Click Filter----------------------------------------//
  const clickFilter =(e)=>{
    let color = e.target.value
    switch (e.target.value) {
      case "searchl30":
        dispatch(FpAction.getFollowUp("searchl30"))
        break;
      case "searchl60":
        dispatch(FpAction.getFollowUp("searchl60"))
        break;
      case "searchover":
        dispatch(FpAction.getFollowUp("searchover"))
        break;
      case "canceldue":
        dispatch(FpAction.getFollowUp("canceldue"))
        break;
      default:
        break;
    }
    setTimeout(() => {
      setisFetching(FpReducer.isFetching)
      setisColor(color)
    }, 200);
  }
  //------------------------Click Filter----------------------------------------//

  //------------------------Search By Anything----------------------------------------//
  const searchByKeyword = (e)=>{
    let r = followUp.filter(v=>v.APPOINT_DATE.includes(e.target.value))
    // console.log('filter by keyword ', r)
    console.log('tmp ',tmp)
    // setfollowUp(r)
  }
  //------------------------Search By Anything----------------------------------------//

  //------------------------Delete----------------------------------------//
  const deleteFollowUp = (id)=>{
    dispatch(FpAction.deleteFollowUp(id,isColor))
    setTimeout(() => {
      setisFetching(FpReducer.isFetching)
    }, 200);
  }
  //------------------------Delete----------------------------------------//

  //------------------------Update----------------------------------------//
  const updateFollowUp = (id)=>{

    setTimeout(() => {
      setisFetching(FpReducer.isFetching)
    }, 200);
  }
  //------------------------Update----------------------------------------//

  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">ติดตามผล</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="filter-btnav">
            <button type="button" class="btn btn-warning" value="searchl30" onClick={(e)=>clickFilter(e)} >น้อยกว่า 30 วัน</button>
            <button type="button" class="btn btn-primary" value="searchl60" onClick={(e)=>clickFilter(e)} >31 - 60 วัน</button>
            <button type="button" class="btn btn-danger" value="searchover" onClick={(e)=>clickFilter(e)} >เกินกำหนด</button>
            <button type="button" class="btn btn-secondary" value="canceldue" onClick={(e)=>clickFilter(e)} >ยกเลิกนัด</button>
            <TextField
            // style={{ marginTop: 11}}
            label="ค้นหาโดยการกรอกชื่อ-นามสกุล"
            onChange={e=>searchByKeyword(e)}
            name="keyword"
            // value={keyword}
            InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>),}}
            fullWidth
            />
            </div>
          </div>
        </div>
        <div className="table-content">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ชื่อ - นามสกุล</th>
              <th>หัวข้อ</th>
              <th>วันที่</th>
              <th>สถานะ</th>
              <th>ชื่อ อสม.</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {followUp.map((value, index) => {
              return (
                <tr>
                  <td> {index + 1} </td> 
                  <td> {value.ELDER.FIRSTNAME} {value.ELDER.LASTNAME}</td>
                  <td> {value.APP_NAME} </td>
                  <td> {value.APPOINT_DATE} </td>
                  {
                    isColor === 'searchl30' ? <td> อีก <span className="badge badge-warning">{value.APP_STATUS}</span> วัน </td>
                    :isColor === 'searchl60' ? <td> อีก <span className="badge badge-primary">{value.APP_STATUS}</span> วัน </td>
                    :isColor === 'searchover' ? <td> อีก <span className="badge badge-danger">{value.APP_STATUS}</span> วัน </td>
                    :<td> อีก <span className="badge badge-secondary">{value.APP_STATUS}</span> วัน </td>
                  }
                  {
                  !value.VOLUNTEER_ADDER?<td> {value.ADMIN_ADDER.FIRSTNAME} {value.ADMIN_ADDER.LASTNAME}</td>
                  :<td> {value.VOLUNTEER_ADDER.FIRSTNAME} {value.VOLUNTEER_ADDER.LASTNAME}</td>
                  }
                  <td style={{ textAlign: "center" }}>
                  <EditFollowup selectValue={value}/>
                  <span style={{ color: "grey" }}> | </span>
                  <button
                    onClick={() => {
                      MySwal.fire({
                        title: "ต้องการลบการนัดหมายนี้ใช่หรือไม่",
                        text: `ลบการนัดหมายของ คุณ${value.ELDER.FIRSTNAME} ${value.ELDER.LASTNAME}!`,
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        confirmButtonText: " ลบ ",
                        cancelButtonText: "ยกเลิก"
                      }).then(result => {
                        if (result.value) {
                          deleteFollowUp(value.APP_ID)
                          Swal.fire(
                            'ลบสำเร็จ',
                            `การนัดหมายของคุณ${value.ELDER.FIRSTNAME} ${value.ELDER.LASTNAME} ได้ถูกลบแล้ว`,
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
                );
            })}
              {/* [
            {
              ELD_NAME: '',
              APP_NAME: 'Title',
              APPOINT_DATE: '',
              APP_STATUS: '',
              ADMIN_NAme: '',

            }
          ] */}
                    </tbody>
                  </table>
                  </div>
                </section>
              </React.Fragment>
            );
          }
