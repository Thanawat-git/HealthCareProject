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
  InputLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  FormGroup,
} from "@material-ui/core";

export default function AllFormForPrint() {
  return (
    <div className="all-form-for-print" >
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Tai />
      <Section7 />
      {/* <MMSE /> */}
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

function Section4() {
  const forms4Reducer = useSelector(({forms4Reducer}) => forms4Reducer)
  const {ans4_1,ans4_2,ans4_3,ans4_4,ans4_5} = forms4Reducer
  return (
    <div className="css-form ">
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2> 
      <div className="question">
        
          <p>4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง</p>
          <RadioGroup className="pl-20" aria-label='questions4.1' name='questions4.1' value={ans4_1}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้</p>
          <RadioGroup className="pl-20" aria-label='questions4.2' name='questions4.2' value={ans4_2}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ใช่" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.3 ตามัวคล้ายมีหมอกบัง</p>
          <RadioGroup className="pl-20" aria-label='questions4.3' name='questions4.3' value={ans4_3}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ มักเดินชนประตู/สิ่งของบ่อยๆ</p>
          <RadioGroup className="pl-20" aria-label='questions4.4' name='questions4.4' value={ans4_4}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว</p>
          <RadioGroup className="pl-20" aria-label='questions4.5' name='questions4.5' value={ans4_5}>
            <FormControlLabel className="radio-size" value="1"  control={<Radio color="primary" />} label="ตาข้างขวา" />
            <FormControlLabel className="radio-size" value="2" control={<Radio color="primary" />} label="ตาข้างซ้าย" />
            <FormControlLabel className="radio-size" value="3"  control={<Radio color="primary" />} label="ทั้งสองข้าง" />
            <FormControlLabel className="radio-size" value="0" control={<Radio color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
      </div>
    </div>
  )
}

function Section5() {
  const forms5Reducer = useSelector(({ forms5Reducer }) => forms5Reducer);
  const {
    ans5_1,
    moreInfoAns5_1,
    ans5_2,
    ans5_3,
    ans5_4,
    ans5_5,
    ans5_6,
    ans5_7,
    ans5_8,
    ans5_9,
    ans5_10,
    ans5_11,
    ans5_12,
    ans5_13,
    ans5_14,
    ans5_15,
    ans5_16,
    ans5_17,
  } = forms5Reducer

  return (
    <div className="css-form">
        <h2>ส่วนที่ 5 การประเมินสุขภาพช่องปาก</h2>
        <div className="question">
          <p> การแปรงฟัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.1"
            name="questions5.1"
            value={ans5_1}
          >
            <FormControlLabel
              className="radio-size"
              value="ไม่ได้แปรงฟัน"
              control={<Radio color="primary" />}
              label="ไม่ได้แปรงฟัน"
            />
            <FormControlLabel
              className="radio-size"
              value="แปรงแต่ไม่ได้ใช้แปรงสีฟัน"
              control={<Radio color="primary" />}
              label="แปรงแต่ไม่ได้ใช้แปรงสีฟัน"
            />
            <FormControlLabel
              className="radio-size"
              value="แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน"
              control={<Radio color="primary" />}
              label="แปรงวันละ 1 ครั้ง เช้าหรือก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="แปรงวันละ 2 ครั้ง เช้าและก่อนนอน"
              control={<Radio color="primary" />}
              label="แปรงวันละ 2 ครั้ง เช้าและก่อนนอน"
            />
            <FormControlLabel
              className="radio-size"
              value="แปรงมากกว่า 2 ครั้งต่อวัน ระบุ"
              control={<Radio color="primary" />}
              label="แปรงมากกว่า 2 ครั้งต่อวัน ระบุ"
            />
            {ans5_1 === "แปรงมากกว่า 2 ครั้งต่อวัน ระบุ" ? (
              <TextField
                id="outlined-basic"
                defaultValue={moreInfoAns5_1}
                label=""
                variant="outlined"
                size="small"
              />
            ) : (
              ""
            )}
            <FormControlLabel
              className="radio-size"
              value="อื่นๆ ระบุ"
              control={<Radio color="primary" />}
              label="อื่นๆ ระบุ"
            />
            {ans5_1 === "อื่นๆ ระบุ" ? (
              <TextField
                id="outlined-basic"
                defaultValue={moreInfoAns5_1}
                label=""
                variant="outlined"
                size="small"
              />
            ) : (
              ""
            )}
          </RadioGroup>
          <hr />
          <p>การใช้ยาสีฟันผสมฟลูโอไรด์ทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.2"
            name="questions5.2"
            value={ans5_2}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช้"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช้"
            />
          </RadioGroup>
          <hr />
          <p>ทำความสะอาดซอกฟันทุกวัน/เกือบทุกวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.3"
            name="questions5.3"
            value={ans5_3}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำ"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ทำ"
            />
          </RadioGroup>
          <hr />
          <p>จำนวนฟัน</p>
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">
              จำนวนฟันแท้
            </InputLabel>
            <OutlinedInput
              type="number"
              value={parseInt(ans5_4)}
              endAdornment={<InputAdornment position="end">ซี่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormHelperText style={{ fontSize : 15}}>
            กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
          </FormHelperText>
          <br />
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">
              จำนวนฟันผุ
            </InputLabel>
            <OutlinedInput
              type="number"
              value={parseInt(ans5_5)}
              endAdornment={<InputAdornment position="end">ซี่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormHelperText style={{ fontSize : 15}}>
            กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
          </FormHelperText>
          <br />
          <p>จำนวนคู่สบฟันหลัง</p>

          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">
              ฟันแท้ กับ ฟันแท้
            </InputLabel>
            <OutlinedInput
              type="number"
              value={parseInt(ans5_6)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormHelperText style={{ fontSize : 15}}>
            กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
          </FormHelperText>
          <br />
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">
              ฟันแท้ กับ ฟันเทียม
            </InputLabel>
            <OutlinedInput
              type="number"
              value={parseInt(ans5_7)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormHelperText style={{ fontSize : 15}}>
            กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
          </FormHelperText>
          <br />
          <FormControl variant="outlined" fullWidth className="TextField">
            <InputLabel htmlFor="outlined-adornment-password">
              ฟันเทียม กับ ฟันเทียม
            </InputLabel>
            <OutlinedInput
              type="number"
              value={parseInt(ans5_8)}
              endAdornment={<InputAdornment position="end">คู่</InputAdornment>}
              labelWidth={70}
            />
          </FormControl>
          <FormHelperText style={{ fontSize : 15}}>
            กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
          </FormHelperText>
          <br />
          <hr />
          <p> สูบบุหรี่มากกว่า 10 มวนต่อวัน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.4"
            name="questions5.4"
            value={ans5_9}
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
          <p> เคี้ยวหมากเป็นประจำ</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions5.5"
            name="questions5.5"
            value={ans5_10}
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
          <p> เนื้อเยื่อช่องปากมีปุ่ม ก้อนเนื้อ หรือแผลเรื้อรัง</p>
          <RadioGroup
            className="pl-20"
            value={ans5_11}
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
          <p>เหงือกมีเลือดออก มีฝีหนอง หรือมีฟันโยก</p>
          <RadioGroup
            className="pl-20"
            value={ans5_12}
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
          <p>มีฟันผุเป็นรู เสียวฟัน ฟันหัก ฟันแตกเหลือแต่ตอฟัน</p>
          <RadioGroup
            className="pl-20"
            value={ans5_13}
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
          <p>ไม่มีฟันเคี้ยวอาหาร กลืนไม่ได้ สำลักอาหาร</p>
          <RadioGroup
            className="pl-20"
            value={ans5_14}
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
          <p>จำเป็นต้องใช้ฟันเทียมหรือ ทำฟันเทียมใหม่</p>
          <RadioGroup
            className="pl-20"
            value={ans5_15}
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
          <p> เคยได้รับการตรวจหรือรักษาจากทันตบุคลากร</p>
          <RadioGroup
            className="pl-20"
            value={ans5_16}
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
          <p>ท่านต้องการการดูแลรักษาช่องปาก</p>
          <RadioGroup
            className="pl-20"
            value={ans5_17}
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
        </div>
        </div>

        
  )
}

function Section6() {
  const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
  const {
    ans6_1,
    ans6_2,
    ans6_3,
    ans6_4,
    ans6_5,
    ans6_6,
    ans6_7,
    ans6_8,
    ans6_9,
    ans6_10,
  } = forms6Reducer
  return (
    <div className="css-form">
        <h2>ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</h2>
        <div className="question">
          <p>กินอาหารได้เอง เมื่อเตรียมสำรับไว้ให้ต่อหน้า</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.1"
            name="questions6.1"
            value={ans6_1}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ทำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำเองได้บ้างแต่ต้องมีคนช่วย"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ทำไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>ล้างหน้า หวีผม แปรงฟัน โกนหนวด 1-2 วันที่ผ่านมา</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.2"
            name="questions6.2"
            value={ans6_2}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ต้องการความช่วยเหลือ"
            />
          </RadioGroup>
          <hr />
          <p>ลุกนั่งจากที่นอน หรือจากเตียงไปเก้าอี้</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.3"
            name="questions6.3"
            value={ans6_3}
          >
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="ทำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ทำเองได้บ้างแต่ต้องมีคนช่วย"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ต้องการความช่วยเหลือ"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ทำไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>การใช้ห้องน้ำ ห้องส้วม</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.4"
            name="questions6.4"
            value={ans6_4}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ทำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำได้บ้าง หรือต้องช่วยเหลือบางอย่าง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ช่วยเหลือตนเองไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>การเคลื่อนที่ภายในห้องหรือบ้าน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.5"
            name="questions6.5"
            value={ans6_5}
          >
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="เดินได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="เดินได้ต้องช่วยพยุง"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช้รถเข็น แต่ไม่ต้องช่วย"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ทำไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>การสวมเสื้อผ้า</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.6"
            name="questions6.6"
            value={ans6_6}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ทำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ทำได้ แต่ต้องช่วยประมาณครึ่งหนึ่ง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ต้องมีคนสวมใส่ให้"
            />
          </RadioGroup>
          <hr />
          <p>การขึ้นลงบันได</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.7"
            name="questions6.7"
            value={ans6_7}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ขึ้นลงได้เอง / ถ้าใช้เครื่องช่วยต้องเอาขึ้นลงได้"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ต้องมีคนช่วย จึงจะขึ้นได้"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ทำไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>การอาบน้ำ</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.8"
            name="questions6.8"
            value={ans6_8}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="อาบน้ำได้เอง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ต้องมีคนช่วย หรือทำให้"
            />
          </RadioGroup>
          <hr />
          <p>การกลั้นอุจจาระ ในระยะ 1 สัปดาห์ที่ผ่านมา</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.9"
            name="questions6.9"
            value={ans6_9}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="กลั้นได้ปกติ"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="กลั้นไม่ได้บางครั้ง แต่น้อยกว่าวันละ 1 ครั้ง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="กลั้นไม่ได้"
            />
          </RadioGroup>
          <hr />
          <p>การกลั้นปัสสาวะ ในระยะ 1 สัปดาห์ที่ผ่านมา</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.10"
            name="questions6.10"
            value={ans6_10}
          >
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="กลั้นได้ปกติ"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="กลั้นไม่ได้บางครั้ง แต่น้อยกว่าวันละ 1 ครั้ง"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="กลั้นไม่ได้"
            />
          </RadioGroup>
          <hr />
          </div>
        </div>

  )
}

function Tai() {
  const formsTaiReducer = useSelector(({ formsTaiReducer }) => formsTaiReducer);
  const {
    ans6_Im,
    ans6_Me,
    ans6_Fe,
    ans6_To
  } = formsTaiReducer
  return (
    <div className="css-form">
        <h2>แบบประเมิน TAI Classified</h2>
        <div className="question">
          <p>Immobilize</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans6_Im}
          >
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="นอนบนเตียงตะแคงไม่ได้"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="นอนบนเตียงตะแคงไปมาได้"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ลุกนั่งและลงมายืนข้างเตียงได้"
            />
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="เดินทางราบได้โดยไม่ต้องช่วยเหลือ"
            />
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="ขึ้นบันไดไม่ได้ แต่เดินทางราบได้โดยไม่ต้องช่วย"
            />
            <FormControlLabel
              className="radio-size"
              value="5"
              control={<Radio color="primary" />}
              label="เดินขึ้นบันไดได้"
            />
          </RadioGroup>
          <hr />
          <p>Mental</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Me"
            name="questions6.Me"
            value={ans6_Me}
          >
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="No Response"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="มีปัญหาทั้ง Orientation อย่างรุนเเรงและปัญหาพฤติกรรม"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="มีปัญหาเฉพาะเรื่อง Orientation อย่างรุนเเรง"
            />
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="ไม่มีปัญหาเรื่อง Orientation แต่มีปัญหาพฤติกรรมจนสร้างความรำคาญ"
            />
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="มีปัญหาเรื่องการตัดสินใจและความจำ ด้านพฤติกรรม"
            />
            <FormControlLabel
              className="radio-size"
              value="5"
              control={<Radio color="primary" />}
              label="ไม่มีปัญหาเรื่องความจำ / การตัดสินใจ Orientation และพฤติกรรม"
            />
          </RadioGroup>
          <hr />
          <p>Feed</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Fe"
            name="questions6.Fe"
            value={ans6_Fe}
          >
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="IV"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="NG Tube"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ต้องป้อน และกลืนลำบาก"
            />
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="ต้องป้อน แต่กลืนเองได้ปกติ"
            />
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="กินได้เอง หกเลอะเทอะ"
            />
            <FormControlLabel
              className="radio-size"
              value="5"
              control={<Radio color="primary" />}
              label="กินได้เอง ไม่หกเลอะเทอะ"
            />
          </RadioGroup>
          <hr />
          <p>Toilet</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.To"
            name="questions6.To"
            value={ans6_To}
          >
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="คาสายสวนปัสสาวะ"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใส่/เปลี่ยนผ้าอ้อมด้วยความยากลำบาก"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="ใส่/เปลี่ยนผ้าอ้อมไม่ลำบาก ต้องช่วยบ้าง"
            />
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="ต้องช่วยประคองไปห้องน้ำและช่วยจัดการหลังถ่ายเสร็จ"
            />
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="ไปห้องน้ำเองได้ แต่ถ่ายไม่สำเร็จเป็นบางครั้ง"
            />
            <FormControlLabel
              className="radio-size"
              value="5"
              control={<Radio color="primary" />}
              label="ไปห้องน้ำเองได้ ถ่ายสำเร็จทุกครั้งใน 2 อาทิตย์ที่ผ่านมา"
            />
          </RadioGroup>
        </div>
        </div>
        
  )
}

function Section7() {
  const forms7Reducer = useSelector(({ forms7Reducer }) => forms7Reducer);
  const {
    ans7_1,
    ans7_2,
    ans7_3,
    ans7_4,
    ans7_5,
    ans7_6,
    ans7_7,
    ans7_8,
    ans7_9,
    ans7_10,
    textAns1,
    textAns2,
    textAns3,
    textAns4,
    textAns5,
    textAns6,
    textAns7,
    textAns8,
    textAns9,
    textAns10,
  } = forms7Reducer
  return (
    <div className="css-form">
        <h2>ส่วนที่ 7 การประเมินภาวะสมองเสื่อม</h2>
        <div className="question">
          <div className="row">
            <div className="col-12">
              <p>1. อายุเท่าไร</p>
            </div>
            <div className="col-12">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.1"
                name="questions7.1"
                value={ans7_1}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            {/* <div className="col-6">
              <p>เฉลย: <strong className="text-success" > {age} </strong> </p>
            </div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns1}
              />
            </div>
          </div>
          <hr />
          {/* row-1 */}

          <div className="row">
            <div className="col-12">
              <p>2. ขณะนี้เวลาอะไร</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.2"
                name="questions7.2"
                value={ans7_2}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns2}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>3. ที่อยู่ปัจจุบันของท่านคือ</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.3"
                name="questions7.3"
                value={ans7_3}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns3}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>4. ปีนี้ปีอะไร</p>
            </div>
            <div className="col-12">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.4"
                name="questions7.4"
                value={ans7_4}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-6">
              <p>เฉลย: </p>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns4}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>5. สถานที่ตรงนี้เรียกว่าอะไร</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.5"
                name="questions7.5"
                value={ans7_5}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns5}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>
                6. คนนี้คือใคร (ชี้คนสัมภาษณ์) และคนนี้คือใคร (ชี้ที่คนใกล้ๆ:
                ญาติ)
              </p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.6"
                name="questions7.6"
                value={ans7_6}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns6}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>7. วันเดือนปีเกิดของท่านคือ</p>
            </div>
            <div className="col-12">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.7"
                name="questions7.7"
                value={ans7_7}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            {/* <div className="col-12">
              <p>เฉลย: <strong className="text-success" > วัน{moment(eldBirthday).format("dddd")} ที่ {moment(eldBirthday).format("LL")} </strong> </p>
            </div> */}
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns7}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>8. เหตุการณ์ 14 ตุลา หรือวันมหาวิปโยคเกิดในพ.ศ.อะไร</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.8"
                name="questions7.8"
                value={ans7_8}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns8}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>9. พระมหากษัตริย์องค์ปัจจุบัน มีพระนามว่าอะไร</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.9"
                name="questions7.9"
                value={ans7_9}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns9}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <p>10. ให้นับถอยหลังจาก 20 จนถึง 1</p>
            </div>
            <div className="col-6">
              <RadioGroup
                className="pl-20"
                aria-label="questions7.10"
                name="questions7.10"
                value={ans7_10}
              >
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
              </RadioGroup>
            </div>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                label="ใส่ตัวเลขล่าสุดที่ผู้สูงอายุตอบ"
                defaultValue={textAns10}
              />
            </div>
          </div>
          <hr />
        </div>
        </div>
  )
}

// function MMSE() {
//   const forms7mReducer = useSelector(({ forms7mReducer }) => forms7mReducer);
//   const {
//     ans1,
//   ans12,
//   ans13,
//   ans14,
//   ans15,
//   ans2_1_1,
//   ans2_1_2,
//   ans2_1_3,
//   ans2_1_4,
//   ans2_1_5,
//   ans2_2_1,
//   ans2_2_2,
//   ans2_2_3,
//   ans2_2_4,
//   ans2_2_5,
//   ansF,
//   ansR,
//   ansT,
//   num1,
//   num2,
//   num3,
//   num4,
//   num5,
//   ansF2,
//   ansR2,
//   ansT2,
//   ans61,
//   ans62,
//   ans7,
//   ans9,
//   ans10,
//   ans11,
//   textAns11,
//   textAns12,
//   textAns13,
//   textAns14,
//   textAns15,
//   textAns211,
//   textAns212,
//   textAns213,
//   textAns214,
//   textAns215,
//   textAns221,
//   textAns222,
//   textAns223,
//   textAns224,
//   textAns225,
//   textAns10,
//   } = forms7mReducer
//   let divStyle = 0
//   return (
//     <div className="css-form">
//         <h2>การทดสอบสมองเบื่องต้นฉบับภาษาไทย</h2>
//         <div className="question">
//           <p>
//             <b>ข้อแนะนำ</b>
//           </p>
//           <span>
//             แบบทดสอบสภาพสมองเบื่องต้นใช้คัดกรองภาวะสมองเสื่อมในผู้สูงอายุ
//             สามารถใช้ได้ในผู้สูงอายุที่ไม่ได้เรียนหรือไม่รู้หนังสือ(อ่านไม่ออก
//             เขียนไม่ได้)ด้วยโดยไม่ต้องทำข้อ 4 ข้อ 9 และข้อ 10
//           </span>
//           <p>
//             <b>1. Orientation for time : ทดสอบการรับรู้เกี่ยวกับเวลาปัจจุบัน</b>
//           </p>
//           <p>1.1 วันนี้ วันที่เท่าไหร่</p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans1}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               defaultValue={textAns11}
//             />
//           </div>
//           <hr />
//           <p>1.2 วันนี้ วันอะไร</p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans12}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               defaultValue={textAns12}
//             />
//           </div>
//           <hr />
//           <p>1.3 เดือนนี้ เดือนอะไร</p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans13}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               defaultValue={textAns13}
//             />
//           </div>
//           <hr />
//           <p>1.4 ปีนี้ ปีอะไร</p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans14}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               defaultValue={textAns14}
//             />
//           </div>
//           <hr />
//           <p>1.5 ฤดูนี้ ฤดูอะไร</p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans15}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               defaultValue={textAns15}
//             />
//           </div>
//           <hr />
//           <p>
//             <b>
//               2. Orientation for place :
//               ทดสอบการรับรู้เกี่ยวกับที่อยู่ในปัจจุบัน
//             </b>
//           </p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions"
//             name="questions"
//             // value={anstf}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="2.1 กรณีอยู่สถานพยาบาล"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="2.2 กรณีอยู่ที่บ้านของผู้ถูกทดสอบ"
//             />
//           </RadioGroup>

//           <div id="myID21">
//             <p>
//               <b>2.1 กรณีอยู่สถานพยาบาล</b>
//             </p>
//             <p>2.1.1 สถานที่ตรงนี้เรียกว่าอะไร และชื่อว่าอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_1_1}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns211}
//               />
//             </div>
//             <hr />
//             <p>2.1.2 ขณะนี้อยู่ชั้นที่เท่าไหร่ของตัวอาคาร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_1_2}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns212}
//               />
//             </div>
//             <hr />
//             <p>2.1.3 ที่นี่อยู่ในอำเภออะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_1_3}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns213}
//               />
//             </div>
//             <hr />
//             <p>2.1.4 ที่นี่จังหวัดอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_1_4}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns214}
//               />
//             </div>
//             <hr />
//             <p>2.1.5 ที่นี่ภาคอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_1_5}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns215}
//               />
//             </div>
//             <hr />
//           </div>
//           <div id="myID22">
//             <p>
//               <b>2.2 กรณีอยู่ที่บ้านของผู้ถูกทดสอบ</b>
//             </p>
//             <p>2.2.1 สถานที่ตรงนี้เรียกว่าอะไร และเลขที่เท่าไหร่</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_2_1}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns221}
//               />
//             </div>
//             <hr />
//             <p>2.2.2 ที่นี่หมู่บ้าน(หรือละแวก คุ้ม ย่าน ถนน) อะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_2_2}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns222}
//               />
//             </div>
//             <hr />
//             <p>2.2.3 ที่นี่อำเภอ หรือเขตอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_2_3}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns223}
//               />
//             </div>
//             <hr />
//             <p>2.2.4 ที่นี่จังหวัดอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_2_4}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns224}
//               />
//             </div>
//             <hr />
//             <p>2.2.5 ที่นี่ภาคอะไร</p>
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans2_2_5}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ถูก"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ผิด"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns225}
//               />
//             </div>
//           </div>
//           <hr />
//           <p>
//             <b>
//               3. Registration : ทดสอบการบันทึกความจำโดยให้จำชื่อของ 3 อย่าง
//               ต่อไปนี้จะเป็นการทดสอบความจำโดยจะบอกชื่อของ 3 อย่าง ให้คุณ(ตายาย)
//               ฟังดีๆนะคะ จะบอกเพียงครั้งเดียว เมื่อพูดจบแล้วให้คุณ(ตายาย)
//               พูดทวนตามที่ได้ยินทั้ง 3 ชื่อ แล้วจำไว้ให้ดีนะคะ เดี๋ยวจะถามซ้ำ
//             </b>
//           </p>
//           <FormGroup>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansF}
//                   name="ansF"
//                   color="primary"
//                 />
//               }
//               label="ดอกไม้"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansR}
//                   name="ansR"
//                   color="primary"
//                 />
//               }
//               label="แม่น้ำ"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansT}
//                   name="ansT"
//                   color="primary"
//                 />
//               }
//               label="รถไฟ"
//             />
//           </FormGroup>
//           <hr />

//           <p style={divStyle}>
//             <b>
//               4.Attention or Calculation : ทดสอบสมาธิโดยให้คิดเลขในใจ
//               ถามผู้ถูกทดสอบว่า "คิดเลขในใจเป็นหรือไม่" ถ้าคิดเป็นให้ทำข้อ 4.1
//               ถ้าคิดไม่เป็น หรือไม่ตอบให้ทำข้อ 4.2
//             </b>
//           </p>
//           <div id="myID4">
//             <p>
//               4.1 ข้อนี้ให้คิดเลขในใจโดยเอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อยๆ
//               ได้ผลลัพธ์เท่าไหร่บอกมา
//             </p>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={num1}
//                     name="num1"
//                     color="primary"
//                   />
//                 }
//                 label="(100-7) = 93 "
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={num2}
//                     name="num2"
//                     color="primary"
//                   />
//                 }
//                 label="(93-7) = 86 "
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={num3}
//                     name="num3"
//                     color="primary"
//                   />
//                 }
//                 label="(86-7) = 79"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={num4}
//                     name="num4"
//                     value="0"
//                     color="primary"
//                   />
//                 }
//                 label="(79-7) = 72"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={num5}
//                     name="num5"
//                     color="primary"
//                   />
//                 }
//                 label="(72-7) = 65"
//               />
//             </FormGroup>
//             <hr />
//             <p>
//               4.2 เดี๋ยวผม/ดิฉัน จะสะกดคำว่ามะนาวให้คุณ(ตายาย)
//               ฟังแล้วให้คุณ(ตายาย) สะกดถอยหลังจากพยํญชนะตัวหลังไปตัวเเรก
//               คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู- สระอา-วอแหวน คุณ(ตายาย)
//               สะกดถอยหลังให้ฟังสิครับ/ค่ะ
//             </p>
//             <FormGroup>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={spell1}
//                     name="spell1"
//                     color="primary"
//                   />
//                 }
//                 label="ว"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={spell2}
//                     name="spell2"
//                     color="primary"
//                   />
//                 }
//                 label="า"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={spell3}
//                     name="spell3"
//                     color="primary"
//                   />
//                 }
//                 label="น"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={spell4}
//                     name="spell4"
//                     value="0"
//                     color="primary"
//                   />
//                 }
//                 label="ะ"
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     // checked={spell5}
//                     name="spell5"
//                     color="primary"
//                   />
//                 }
//                 label="ม"
//               />
//             </FormGroup>
//           </div>
//           <hr />

//           <p>
//             <b>
//               5.Recall : ทดสอบความจำระยะสั้นของชื่อสิ่งของ 3
//               อย่างที่ให้จำไว้แล้ว
//             </b>
//           </p>
//           <p>เมื่อสักครู่ให้จำของ 3 อย่าง จำได้ไหม มีอะไรบ้าง</p>
//           <FormGroup>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansF2}
//                   name="ansF2"
//                   color="primary"
//                 />
//               }
//               label="ดอกไม้"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansR2}
//                   name="ansR2"
//                   color="primary"
//                 />
//               }
//               label="แม่น้ำ"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={ansT2}
//                   name="ansT2"
//                   color="primary"
//                 />
//               }
//               label="รถไฟ"
//             />
//           </FormGroup>
//           <div className="col-12">
//             <p>คำตอบของผู้สูงอายุ</p>
//             <TextField
//               id=""
//               variant="outlined"
//               className="TextField"
//               size="small"
//               // defaultValue={textAns5}
//             />
//           </div>
//           <hr />
//           <p>
//             <b>6.Naming : ทดสอบการบอกชื่อสิ่งของที่ได้เห็น</b>
//           </p>
//           <p>
//             6.1 ยื่นดินสอให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"
//           </p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans61}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <hr />
//           <p>
//             6.2 ชี้นาฬิกาให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"
//           </p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans62}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <hr />
//           <p>
//             <b>
//               7.Repetiton : ทดสอบการพูดซ้ำคำที่ได้ยิน ตั้งใจฟังผม/ดิฉันนะ
//               เมื่อผม/ดิฉันพูดข้อความนี้ แล้วให้คุณ(ตายาย) พูดตามผม/ดิฉัน
//               จะบอกเพียงครั้งเดียว "ใครใคร่ขายไก่ไข่"
//             </b>
//           </p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans7}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ถูก"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ผิด"
//             />
//           </RadioGroup>
//           <hr />
//           <p>
//             <b>
//               8.Verbal command : ทดสอบการเข้าใจความหมายและทำตามคำสั่ง
//               ข้อนี้ให้ทำตามที่บอก ตั้งใจฟังดีๆนะ เดี๋ยวผม/ดิฉัน จะส่งกระดาษให้
//               แล้วให้คุณ(ตายาย) รับด้วยมือขวา พับครึ่งด้วยมือทั้ง 2 ข้าง
//               เสร็จแล้ววางไว้ที่(พื้น,โต๊ะ,เตียง)
//             </b>
//           </p>
//           <p>ผู้ทดสอบส่งกระดาษเปล่าขนาดประมาณ A4 ไม่มีรอยพับ ให้ผู้ทดสอบ</p>
//           <RadioGroup>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   // checked={think1}
//                   name="think1"
//                   color="primary"
//                 />
//               }
//               label="รับด้วยมือขวา"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   // checked={think2}
//                   name="think2"
//                   color="primary"
//                 />
//               }
//               label="พับครึ่งด้วยมือ 2 ข้าง"
//             />
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   // checked={think3}
//                   name="think3"
//                   color="primary"
//                 />
//               }
//               label="วางไว้ที่(พื้น,โต๊ะ,เตียง)"
//             />
//           </RadioGroup>
//           <hr />

//           <p style={divStyle}>
//             <b>
//               9.Written command : ทดสอบการอ่าน การเข้าใจความหมาย สามารถทำตามได้
//               ให้คุณ(ตายาย) อ่านแล้วทำตาม จะอ่านออกเสียงหรือในใจก็ได้
//             </b>
//           </p>
//           <div id="myID9">
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans9}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ทำได้"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ทำไม่ได้"
//               />
//             </RadioGroup>
//           </div>
//           <hr />

//           <p style={divStyle}>
//             <b>
//               10.Written : ทดสอบการเขียนภาษาอย่างมีความหมาย ให้คุณ(ตายาย)
//               เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมาย
//             </b>
//           </p>
//           <div id="myID10">
//             <RadioGroup
//               className="pl-20"
//               aria-label="questions3.4"
//               name="questions3.4"
//               value={ans10}
//             >
//               <FormControlLabel
//                 className="radio-size"
//                 value="1"
//                 control={<Radio color="primary" />}
//                 label="ประโยคมีความหมาย"
//               />
//               <FormControlLabel
//                 className="radio-size"
//                 value="0"
//                 control={<Radio color="primary" />}
//                 label="ประโยคไม่มีความหมาย"
//               />
//             </RadioGroup>
//             <div className="col-12">
//               <p>คำตอบของผู้สูงอายุ</p>
//               <TextField
//                 id=""
//                 variant="outlined"
//                 className="TextField"
//                 size="small"
//                 defaultValue={textAns10}
//               />
//             </div>
//           </div>
//           <hr />

//           <p>
//             <b>
//               11.Visuoconstruction : ทดสอบความสัมพันธ์ระหว่างตากับมือ
//               ให้คุณ(ตายาย) วาดภาพ
//             </b>
//           </p>
//           <RadioGroup
//             className="pl-20"
//             aria-label="questions3.4"
//             name="questions3.4"
//             value={ans11}
//           >
//             <FormControlLabel
//               className="radio-size"
//               value="1"
//               control={<Radio color="primary" />}
//               label="ทำได้"
//             />
//             <FormControlLabel
//               className="radio-size"
//               value="0"
//               control={<Radio color="primary" />}
//               label="ทำไม่ได้"
//             />
//           </RadioGroup>
//         </div>
//         </div>
//   )
// }

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
