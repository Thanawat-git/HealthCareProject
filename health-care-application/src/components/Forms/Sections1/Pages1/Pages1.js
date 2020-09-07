import React, { Component } from "react";
import "./Pages1.css";
import {
  Button,
} from "react-bootstrap";

class Pages1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
    };
  }

  getAge = (e) => {
    // console.log(typeof(e.target.value))
    const str = e.target.value; // yyyy-mm-dd
    const strAge = str.split("-"); // ["yyyy","mm","dd"] => string
    const year = parseInt(strAge[0]);
    const month = parseInt(strAge[1]);
    const day = parseInt(strAge[2]);

    console.log(strAge);
    // date now
    const now = new Date();
    const nd = parseInt(now.getDate());
    const nm = parseInt(now.getMonth());
    const ny = parseInt(now.getFullYear());

    var numage = ny - year;

    if (nm > month || nm == month) {
      if (nd < day) {
        numage = numage - 1;
        this.setAge(numage);
      } else {
        this.setAge(numage);
      }
    } else {
      this.setAge(numage);
    }
    // console.log(nd)
  };

  setAge = (numage) => {
    // console.log(numage)
    this.setState({ age: numage });
    // console.log(this.state.age);
  };

  render() {
    return (
      <div className="Page1" >
        <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
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
                <label>
                  <span>*</span>เพศ
                </label>
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
                <label>
                  <span>*</span>วันเกิด
                </label>
                <input
                  type="date"
                  onChange={this.getAge}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-4">
                <div className="row">
                  <div className="col-4">
                    <p>อายุ</p>
                  </div>
                  <div className="col-4">
                    <p> {this.state.age} </p>
                  </div>
                  <div className="col-4">
                    <p>ปี</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
            <Button type="submit" size="lg">
              ถัดไป
            </Button>
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Pages1;
