import React, { useState, useEffect } from "react";
import "./history.css"
import { useSelector } from "react-redux";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
} from "@material-ui/core";

export default function AllFormForPrint() {
  return (
    <div className="all-form-for-print" >
      <Section2 />
      <Section3 />
      <Section10 />
    </div>
  );
}

function Section2() {
  const forms2Reducer = useSelector(({ forms2Reducer }) => forms2Reducer);
  const {
    waist,
    weight,
    high,
    pulse,
    bloodPressure1,
    bloodPressure2,
    sugar,
    noFood,
  } = forms2Reducer;
  
  return (
    <div className="css-form">
      <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2>
      <div className="question">
        <div className="row">
          <div className="col-12">
            <p className="txt-center">
              <strong>ความยาวเส้นรอบเอว</strong>
            </p>
          </div>
          <div className="col-12 mb-15">
            <OutlinedInput
              id="waist"
              value={waist}
              type="number"
              endAdornment={<InputAdornment position="end">ซม.</InputAdornment>}
              fullWidth
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 txt-center">
            <p>
              <strong>ดัชนีมวลการ(BMI)</strong>
            </p>
          </div>
          <div className="col-12">
            <p>น้ำหนัก</p>
          </div>
          <div className="col-12 mb-15">
            <OutlinedInput
              id="weight"
              value={weight}
              type="number"
              endAdornment={<InputAdornment position="end">กก.</InputAdornment>}
              fullWidth
            />
          </div>
          <div className="col-12">
            <p>ส่วนสูง</p>
          </div>
          <div className="col-12 mb-15">
            <OutlinedInput
              id="high"
              value={high}
              type="number"
              endAdornment={<InputAdornment position="end">ซม.</InputAdornment>}
              fullWidth
            />
          </div>
          <br />
          <div className="col-12 txt-center">
            <p>ดัชนีมวลการ(BMI)</p>
            <h1 className="display-1 text-black-50">
              {" "}
              {(weight / (high / 100) ** 2).toFixed(2)}{" "}
            </h1>
            <br />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 txt-center">
            <p>
              <strong>ความดันโลหิต</strong>
            </p>
          </div>
          <div className="col-12">
            <p>ความดันโลหิต</p>
          </div>
          <div className="col-6">
            <TextField
              id="bloodPressure1"
              variant="outlined"
              type="number"
              value={bloodPressure1}
              fullWidth
            />
          </div>
          <div className="col-6">
            <OutlinedInput
              id="bloodPressure2"
              value={bloodPressure2}
              type="number"
              endAdornment={
                <InputAdornment position="end">มม.ปรอท</InputAdornment>
              }
              fullWidth
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <p>ชีพจร</p>
          </div>
          <div className="col-12">
            <OutlinedInput
              id="pulse"
              type="number"
              value={pulse}
              endAdornment={
                <InputAdornment position="end">ครั้ง/นาที</InputAdornment>
              }
              fullWidth
            />
          </div>
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col-12">
            <p className="txt-center">
              <strong>ระดับน้ำตาลจากปลายนิ้ว</strong>
            </p>
          </div>
          <div className="col-12">
            <p>ผู้สูงอายุมีการงดอาหารก่อนมาตรวจอย่างน้อย 8 ชั่วโมงหรือไม่</p>
            <RadioGroup
              className="pl-20"
              aria-label="nofood"
              name="nofood"
              value={noFood}
              checked={noFood}
            >
              <FormControlLabel
                className="radio-size"
                value={true}
                control={<Radio color="primary" />}
                label="ใช่"
              />
              <FormControlLabel
                className="radio-size"
                value={false}
                control={<Radio color="primary" />}
                label="ไม่ใช่"
              />
            </RadioGroup>
          </div>
          {noFood !== null && (
            <div className="col-12 mb-15">
              <OutlinedInput
                id="sugar"
                type="number"
                value={sugar}
                endAdornment={
                  <InputAdornment position="end">มก./ดล.</InputAdornment>
                }
                fullWidth
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section3() {
  const forms3Reducer = useSelector(({ forms3Reducer }) => forms3Reducer);
  const { ans3_1,ans3_2,ans3_3,ans3_4,ans3_5,ans3_6,ans3_7, } = forms3Reducer
  return (
      <div className="css-form">
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2>
        <div className="question">
          <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.1"
            name="questions3.1"
            value={ans3_1}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>3.2 ความดันโลหิต ≥ 130/85 หรือแพทย์บอกว่าเป็นความดันโลหิตสูง</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.2"
            name="questions3.2"
            value={ans3_2}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.3"
            name="questions3.3"
            value={ans3_3}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans3_4}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.5"
            name="questions3.5"
            value={ans3_5}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.6"
            name="questions3.6"
            value={ans3_6}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <hr />
          <p>
            3.7 มีพ่อ แม่ พี่น้องท้องเดียวกันเป็นโรคหัวใจขาดเลือด หรืออัมพฤกษ์
            อัมพาต ก่อนวัยอันควร(ชายเป็นก่อน อายุ 55 ปี หญิงเป็นก่อน 65 )
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.7"
            name="questions3.7"
            value={ans3_7}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
        </div>
        </div>
  )
}

const Section10 = () => {
  const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);
  return (
    <div className="css-form">
      <h2>ส่วนที่ 10 การคัดกรองการกลั้นปัสสาวะ</h2>
      <div className="question">
        <p>
          ปัสสาวะเล็ดหรือราดทำให้การใช้ชีวิตประจำวันของผู้สูงอายุมีปัญหาหรือไม่
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions10.1"
          name="questions10.1"
          value={forms10Reducer.ans10}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="มี"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ไม่มี"
          />
        </RadioGroup>
      </div>
    </div>
  );
};
