import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as eldAction from "../../../../actions/elderly.action";
import ShowElderyInfo from "./ShowElderyInfo"
import Skeleton from '@material-ui/lab/Skeleton';

export default function ElderyContent() {
  const dispatch = useDispatch();
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  useEffect(() => {
    elderlyReducer.allEldery.length === 0 && dispatch(eldAction.getAllEldery());
  }, []);

  const createRow = () => {
    try {
      const { allEldery, isFetching } = elderlyReducer;
      return (
        !isFetching ? (
        allEldery.length !== 0 &&
        allEldery.map((value, index) => {
          return (
            <tr onClick={() => console.log("xxx")}>
              <td>{index + 1}</td>
              <td>{value.ELD_ID_NUMBER}</td>
              <td>
                {value.Elder_Information.ELD_GENDER === "ชาย" ? "นาย" 
                : value.Elder_Information.ELD_STATUS === "โสด" ? "นางสาว"
                : "นาง"
                }
                {value.ELD_FIRSTNAME} {value.ELD_LASTNAME}
              </td>
              <td>{value.ELD_PHONE}</td>
              <td>
                <ShowElderyInfo data={value}/>
              </td>
            </tr>
          );
        })):
        <Skeleton />
        // "กำลังโหลดข้อมูล"
      );
    } catch (e) {}
  };
  //   const onChange = e =>{
  //     dispatch(adminAction.getAdminByKeyword(e))
  //   }
  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">จัดการผู้สูงอายุ</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 card-body">
              {/* <TextField
                label="ค้นหาโดยการกรอกชื่อ-นามสกุล หรือรหัสประจำตัว"
                id="standard-start-adornment"
                onChange={onChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              /> */}
            </div>
            <div className="col-4 card-body add-staff-bt">
              {/* <AddNewAdmin /> */}
            </div>
            {/* table */}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">รหัสประจำตัว</th>
                  <th scope="col">ชื่อ - นามสกุล</th>
                  <th scope="col">เบอร์โทรศัพท์</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>

              <tbody>{createRow()}</tbody>
            </table>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
