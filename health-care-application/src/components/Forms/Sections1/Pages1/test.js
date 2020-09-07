import React, { useState } from "react";
import FormHeader from "../../formHeader/formHeader";
import "./Pages1.css";
import { Button } from "react-bootstrap";

export default function Test(props) {

  return (
    <div>
      <FormHeader />
      <form>
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>

        <div className="container">
          <div className="idcard row">
            <div className="col-12 con-sm-12 col-md-3 col-lg-2">
              <label htmlFor="box1">
                <span>*</span>เลขบัตรประชาชน
              </label>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-10">
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="fullname row">
            <div className="fname col-12 col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="fname">
                <span>*</span>ชื่อ
              </label>
              <input type="text" name="fname" className="form-control" />
            </div>
            <div className="lname col-12 col-sm-12 col-md-6 col-lg-6">
              <label htmlFor="lname">
                <span>*</span>นามสกุล
              </label>
              <input type="text" name="lname" className="form-control" />
            </div>
          </div>

          <div className="sex row">
            <div className="col-4">
                <label><span>*</span>เพศ</label>
              
            </div>
            <div className="col-4">
              <input
                type="radio"
                id="male"
                className="form-check-input"
                name="sex"
                value="M"
              />
              <label htmlFor="male" className="form-check-label">
                ชาย
              </label>
            </div>
            <div className="col-4">
              <input
                type="radio"
                id="female"
                className="form-check-input"
                name="sex"
                value="F"
              />
              <label htmlFor="female" className="form-check-label">
                หญิง
              </label>
            </div>
          </div>

          <div className="localname row">
            <div className="col-12 con-sm-12 col-md-3 col-lg-2">
              <label htmlFor="box1">
                ชื่อในชุมชน<span>(ถ้ามี)</span>
              </label>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-10">
              <input type="text" className="form-control" />
            </div>
            </div>
            <div className="date row align-items-end">
                <div className="col-12 col-sm-12 col-md-7 col-lg-8">
                <label><span>*</span>วันเกิด</label>
                <input type="date" className="form-control" />
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-4">
                    
                    <div className="row">
                        <div className="col-4">
                            <p>อายุ</p>
                        </div>
                        <div className="col-4">
                            <p> {} </p>
                        </div>
                        <div className="col-4">
                        <p>ปี</p>
                        </div>
                    </div>
                    
                </div>
            </div>
          <Button type="submit" size="lg">
            ถัดไป
          </Button>
        </div>
      </form>
    </div>
  );
}
