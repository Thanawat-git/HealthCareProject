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
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms1p2.action";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function Sections1_2(props) {
  const [radioValue, setRadioValue] = useState("yes");
  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  // Redux hook
  const forms1p2Reducer = useSelector(({ forms1p2Reducer }) => forms1p2Reducer);
  const peopleID = useSelector(
    ({ forms1p1Reducer }) => forms1p1Reducer.peopleID
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
  const [err, seterr] = useState(false);
  const handleSubmit = (e) => {
    if (
      homeNumber === null &&
      alley === null &&
      street === null &&
      subDistrict === null &&
      area === null
    ) {
      emptyValue();
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

    phoneNumber && formAction.updateElder([peopleID, phoneNumber]);
    formAction.updateElderIdCurrent([
      peopleID,
      homeNumber,
      alley,
      street,
      subDistrict,
      area,
    ]);
    radioValue == "no"
      ? formAction.updateElderCurrent([
          peopleID,
          curHomeNumber,
          curAlley,
          curStreet,
          curSubDistrict,
          curArea,
        ])
      : formAction.updateElderCurrent([
          peopleID,
          homeNumber,
          alley,
          street,
          subDistrict,
          area,
        ]);

    dispatch(formAction.add(data));
    function emptyValue() {
      e.preventDefault();
      //alert("กรุณากรอกข้อมูลให้ครบทุกข้อ");
      // return;

      seterr(true);
    }
  };
  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน </h2>
        <div className="question">
          {/* content */}
          <p><b>
            <span className="text-danger">*</span>ที่อยู่ตามบัตรประชาชน{" "}
           </b></p>
          <div className="row">
            <div className="col-xl-6 col-12 mb-15">
              <TextField
                label="เลขที่"
                variant="outlined"
                placeholder="เลขที่"
                defaultValue={homeNumber}
                error={err}
                helperText={err ? "กรุณากรอกเลขที่" : ""}
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
                error={err}
                helperText={err ? "กรุณากรอกตรอก/ซอย" : ""}
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
                error={err}
                helperText={err ? "กรุณากรอกถนน" : ""}
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
                error={err}
                helperText={err ? "กรุณากรอกตำบล" : ""}
                onChange={(e) => setSubDistrict(e.target.value)}
                className="TextField"
              />
            </div>
            <div className="col-xl-6 col-12 mb-15">
              <Autocomplete
                options={Areas}
                getOptionLabel={(option) => option}
                disableClearable={true}
                // size="small"
                defaultValue={area}
                onInputChange={(event, value) => setArea(value)}
                renderInput={(params) => (
                  <TextField
                    error={err}
                    helperText={err ? "กรุณาเลือกชุมชน" : ""}
                    {...params}
                    label="ชุมชน"
                    variant="outlined"
                  />
                )}
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
              <p><b>
                <span className="text-danger">*</span>ที่อยู่ปัจจุบัน{" "}
              </b></p>
              <div className="row">
                <div className="col-xl-6 col-12 mb-15">
                  <TextField
                    label="เลขที่"
                    variant="outlined"
                    placeholder="เลขที่"
                    defaultValue={curHomeNumber}
                    error={err}
                    helperText={err ? "กรุณากรอกเลขที่" : ""}
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
                    error={err}
                    helperText={err ? "กรุณากรอกตรอก/ซอย" : ""}
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
                    error={err}
                    helperText={err ? "กรุณากรอกถนน" : ""}
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
                    error={err}
                    helperText={err ? "กรุณากรอกตำบล" : ""}
                    onChange={(e) => setCurSubDistrict(e.target.value)}
                    className="TextField"
                  />
                </div>
                <div className="col-xl-6 col-12 mb-15">
                  <Autocomplete
                    options={Areas}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    // size="small"
                    defaultValue={curArea}
                    onInputChange={(event, value) => setCurArea(value)}
                    renderInput={(params) => (
                      <TextField
                        error={err}
                        helperText={err ? "กรุณาเลือกชุมชน" : ""}
                        {...params}
                        label="ชุมชน"
                        variant="outlined"
                      />
                    )}
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
              type="number"
              defaultValue={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
              placeholder="+66"
              className="TextField"
              fullWidth
              onInput={(e) => {
                e.target.value = e.target.value.slice(0, 10);
              }} //fix10digit
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

const Areas = [
  "ชุมชนมณีแก้ว",
  "ชุมชนดอนบน",
  "ชุมชนบางแสนทาวเวอร์",
  "ชุมชนตาลล้อม 1",
  "ชุมชนตาลล้อม 2",
  "ชุมชนบ้านเหมือง",
  "ชุมชนพัฒนา 2",
  "ชุมชนดอนนารา",
  "ชุมชนวัดกลางดอน",
  "ชุมชนแสนสุข",
  "ชุมชนมาบมะยม",
  "ชุมชนท้ายตลาด",
  "ชุมชนร่วมใจพัฒนา",
  "ชุมชนบางแสนบน",
  "ชุมชนหาดวอนนภา",
  "ชุมชนบางเป้ง",
  "ชุมชนหน้ามอ",
  "ชุมชนโชคดี",
  "ชุมชนสมใจนึก",
  "ชุมชนหน้าเทศบาล",
  "ชุมชนวัดแสนสุข",
  "ชุมชนมุขแสนเจริญ 1",
  "ชุมชนมุขแสนเจริญ 2",
  "ชุมชนเขาสามมุข",
  "ชุมชนบ้านแหลมแท่น",
];
