import React, { useState, useEffect } from "react";
import "../form-style.css";
import "./Sections1.css";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms1p2.action";

function Sections1_2(props) {
  const [radioValue, setRadioValue] = useState("yes");
  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  // Redux hook
  const forms1p2Reducer = useSelector(
    ({ forms1p2Reducer }) => forms1p2Reducer
  );
  const dispatch = useDispatch();
  // Redux hook

  const [homeNumber, setHomeNummber] = useState(forms1p2Reducer.homeNumber); //บ้านเลขที่
  const [alley, setAlley] = useState(forms1p2Reducer.alley); //ตรอก ซอย
  const [street, setStreet] = useState(forms1p2Reducer.street); //ถนน
  const [subDistrict, setSubDistrict] = useState(forms1p2Reducer.subDistrict); // ตำบล
  const [area, setArea] = useState(forms1p2Reducer.area); // ชุมชน

  const [curHomeNumber, setCurHomeNummber] = useState(
    forms1p2Reducer.curHomeNumber
  ); //บ้านเลขที่
  const [curAlley, setCurAlley] = useState(forms1p2Reducer.curAlley); //ตรอก ซอย
  const [curStreet, setCurStreet] = useState(forms1p2Reducer.curStreet); //ถนน
  const [curSubDistrict, setCurSubDistrict] = useState(
    forms1p2Reducer.curSubDistrict
  ); // ตำบล
  const [curArea, setCurArea] = useState(forms1p2Reducer.curArea); // ชุมชน
  const [phoneNumber, setPhoneNumber] = useState(forms1p2Reducer.phoneNumber);

  const handleSubmit = (e) => {
    if (homeNumber===null && alley===null && street===null && subDistrict===null && area===null) {
      emptyValue()
    }
    const data = [
      homeNumber,
      alley,
      street,
      subDistrict,
      area,
      curHomeNumber,
      curAlley,
      curStreet,
      curSubDistrict,
      curArea,
      phoneNumber,
    ];

    dispatch(formAction.add(data));
    function emptyValue(){
      e.preventDefault(); 
      alert('กรุณากรอกข้อมูลให้ครบทุกข้อ'); 
      // return;
    }
  };

  // useEffect(() => {
  //   for(const [key, value] of Object.entries(props.elderlyInfos)){
  //     console.log(`${key}: ${value}`);
  //     if(key==='ELD_BASIC_INFO'){
  //       for(const [key1, value1] of Object.entries(value)){
  //         setPID(value1.peopleID)
  //         console.log(`in ${key1}: ${value1.peopleID}`);
  //         // console.log(PID)
  //       }
  //     }
  //   }

  // }, []);

  // const handleSubmit = (e)=>{
  //   // console.log('PID in Submit '+PID)
  //   const ELD_IDN_ADDR_NUMBER = homeNumber;
  //   const ELD_IDN_ADDR_LANE = alley;
  //   const ELD_IDN_ADDR_STREET = street;
  //   const ELD_IDN_ADDR_SUB_DISTRICT = subDistrict;
  //   const ELD_IDN_ADDR_VILLAGE = area;
  //   const ELD_CUR_ADDR_NUMBER = curHomeNumber;
  //   const ELD_CUR_ADDR_LANE = curAlley;
  //   const ELD_CUR_ADDR_STREET = curStreet;
  //   const ELD_CUR_ADDR_SUB_DISTRICT = curSubDistrict;
  //   const ELD_CUR_ADDR_VILLAGE = curArea;
  //   const ELD_ID_NUMBER = PID;
  //   const ELD_PHONE = phoneNumber;

  //   const data = {
  //     ELD_ID_NUMBER,
  //     ELD_IDN_ADDR_NUMBER,
  //     ELD_IDN_ADDR_LANE,
  //     ELD_IDN_ADDR_STREET,
  //     ELD_IDN_ADDR_SUB_DISTRICT,
  //     ELD_IDN_ADDR_VILLAGE,
  //     ELD_CUR_ADDR_NUMBER,
  //     ELD_CUR_ADDR_LANE,
  //     ELD_CUR_ADDR_STREET,
  //     ELD_CUR_ADDR_SUB_DISTRICT,
  //     ELD_CUR_ADDR_VILLAGE,
  //     ELD_PHONE
  //   }
  //   props.dispatch({
  //     type: ADD_NEW_ELDERLY_ADDRESS,
  //     data
  //   })

  // }

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน </h2>
        <div className="question">
          {/* content */}
          <p>
            <span className="text-danger">*</span>ที่อยู่ตามบัตรประชาชน{" "}
          </p>
          <div className="row">
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="เลขที่"
                variant="outlined"
                placeholder="เลขที่"
                defaultValue={homeNumber}
                onChange={(e) => setHomeNummber(e.target.value)}
                className="TextField"
              />
            </div>
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="ตรอก/ซอย"
                variant="outlined"
                placeholder="ตรอก/ซอย"
                defaultValue={alley}
                onChange={(e) => setAlley(e.target.value)}
                className="TextField"
              />
            </div>
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="ถนน"
                variant="outlined"
                placeholder="ถนน"
                defaultValue={street}
                onChange={(e) => setStreet(e.target.value)}
                className="TextField"
              />
            </div>
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="ตำบล"
                variant="outlined"
                placeholder="ตำบล"
                defaultValue={subDistrict}
                onChange={(e) => setSubDistrict(e.target.value)}
                className="TextField"
              />
            </div>
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="ชุมชน"
                variant="outlined"
                placeholder="ชุมชน"
                defaultValue={area}
                onChange={(e) => setArea(e.target.value)}
                className="TextField"
              />
            </div>
          </div>
          <p>อำเภอเมือง ชลบุรี</p>
          <hr />

          <div className="row align-items-end">
            <div className="col-12">
              <p>ที่อยู่ปัจจุบันเป็นที่อยู่เดียวกับบัตรประชาชนใช่หรือไม่</p>
            </div>
            <div className="col-12 mb-15">
              <RadioGroup
                row
                aria-label="add2"
                name="add2"
                value={radioValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  className="radio-space"
                  value="yes"
                  control={<Radio color="primary" />}
                  label="ใช่"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio color="primary" />}
                  label="ไม่ใช่"
                />
              </RadioGroup>
            </div>
          </div>

          {/* Condition needed */}
          {radioValue === "no" ? (
            <div>
              <p>
                <span className="text-danger">*</span>ที่อยู่ปัจจุบัน{" "}
              </p>
              <div className="row">
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="เลขที่"
                    variant="outlined"
                    placeholder="เลขที่"
                    defaultValue={curHomeNumber}
                    onChange={(e) => setCurHomeNummber(e.target.value)}
                    className="TextField"
                  />
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="ตรอก/ซอย"
                    variant="outlined"
                    placeholder="ตรอก/ซอย"
                    defaultValue={curAlley}
                    onChange={(e) => setCurAlley(e.target.value)}
                    className="TextField"
                  />
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="ถนน"
                    variant="outlined"
                    placeholder="ถนน"
                    defaultValue={curStreet}
                    onChange={(e) => setCurStreet(e.target.value)}
                    className="TextField"
                  />
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="ตำบล"
                    variant="outlined"
                    placeholder="ตำบล"
                    defaultValue={curSubDistrict}
                    onChange={(e) => setCurSubDistrict(e.target.value)}
                    className="TextField"
                  />
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="ชุมชน"
                    variant="outlined"
                    placeholder="ชุมชน"
                    defaultValue={curArea}
                    onChange={(e) => setCurArea(e.target.value)}
                    className="TextField"
                  />
                </div>
              </div>
              <p>อำเภอเมือง ชลบุรี</p>
            </div>
          ) : (
            ""
          )}

          {/* <div className="row"> */}
          <div className="input-group">
            <p>
              เบอร์โทรศัพท์ <small className="text-warning">(ถ้ามี)</small>
            </p>
            <TextField
              id=""
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
              placeholder="+66"
              className="TextField"
              fullWidth
            />
          </div>
          {/* </div> */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec1-page1">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <Link to="/sec1-page3">
            <button
              type="button"
              className="btn form-btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              ถัดไป
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Sections1_2;
// const mapStateToProps = (state) => {
//   return {
//     elderlyInfos: state,
//   };
// };
// export default connect(mapStateToProps)(Sections1_2);
