import React, { useState, useEffect } from "react";
import "./history.css";
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
  makeStyles,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  // },
  formControl: {
    minWidth: 120,
  },
  magin_Fe: {
    marginTop: "100%",
    paddingTop: "3%",
  },
  magin_7A: {
    marginTop: "5%",
    paddingTop: "4%",
  },
  magin_5: {
    marginTop: "5%",
    paddingTop: "5%",
    marginLeft: "2%",
  },
  margin_MM2: {
    marginTop: "5%",
    paddingTop: "7%",
  },
}));

export default function AllFormForPrint() {
  return (
    <div className="all-form-for-print">
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Tai />
      <Section7 />
      <MMSE />
      <Section8 />
      {/* <Section89Q /> */}
      <Section9 />
      <Section92 />
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
  const {
    ans3_1,
    ans3_2,
    ans3_3,
    ans3_4,
    ans3_5,
    ans3_6,
    ans3_7,
  } = forms3Reducer;
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
  );
}

function Section4() {
  const forms4Reducer = useSelector(({ forms4Reducer }) => forms4Reducer);
  const { ans4_1, ans4_2, ans4_3, ans4_4, ans4_5 } = forms4Reducer;
  return (
    <div className="css-form ">
      <h2>ส่วนที่ 4 แบบคัดกรองสุขภาพตา</h2>
      <div className="question">
        <p>4.1 นับนิ้วในระยะ 3 เมตรผิด 2 ครั้งขึ้นไปจาก 4 ครั้ง</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions4.1"
          name="questions4.1"
          value={ans4_1}
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
        <p>4.2 อ่านหนังสือพิมพ์ในระยะ 1 ฟุต ไม่ได้</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions4.2"
          name="questions4.2"
          value={ans4_2}
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
        <p>4.3 ตามัวคล้ายมีหมอกบัง</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions4.3"
          name="questions4.3"
          value={ans4_3}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ตาข้างขวา"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="ตาข้างซ้าย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ทั้งสองข้าง"
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
          4.4 ตามองเห็นชัดตรงกลาง แต่ไม่เห็นสิ่งรอบข้าง หรือ
          มักเดินชนประตู/สิ่งของบ่อยๆ
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions4.4"
          name="questions4.4"
          value={ans4_4}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ตาข้างขวา"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="ตาข้างซ้าย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ทั้งสองข้าง"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ไม่ใช่"
          />
        </RadioGroup>
        <hr />
        <p>4.5 ตามองเห็นจุดดำกลางภาพหรือเห็นภาพบิดเบี้ยว</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions4.5"
          name="questions4.5"
          value={ans4_5}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ตาข้างขวา"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="ตาข้างซ้าย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ทั้งสองข้าง"
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
  );
}

function Section5() {
  const classes = useStyles();
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
  } = forms5Reducer;

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
        <FormHelperText style={{ fontSize: 15 }}>
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
        <FormHelperText style={{ fontSize: 15 }}>
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
        <FormHelperText style={{ fontSize: 15 }}>
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
        <FormHelperText style={{ fontSize: 15 }}>
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
        <FormHelperText style={{ fontSize: 15 }}>
          กรุณาระบุจำนวน ถ้าไม่มีให้ใส่ 0
        </FormHelperText>

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
      </div>
      <div className={classes.magin_5}>
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
        <RadioGroup className="pl-20" value={ans5_11}>
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
        <RadioGroup className="pl-20" value={ans5_12}>
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
        <RadioGroup className="pl-20" value={ans5_13}>
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
        <RadioGroup className="pl-20" value={ans5_14}>
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
        <RadioGroup className="pl-20" value={ans5_15}>
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
        <RadioGroup className="pl-20" value={ans5_16}>
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
        <RadioGroup className="pl-20" value={ans5_17}>
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

      <hr />
    </div>
  );
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
  } = forms6Reducer;
  return (
    <div className="css-form" style={{ marginTop: "10%", paddingTop: "5%" }}>
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

        <p style={{ marginTop: "3%", paddingTop: "3%" }}>การอาบน้ำ</p>
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
  );
}

function Tai() {
  const classes = useStyles();
  const formsTaiReducer = useSelector(({ formsTaiReducer }) => formsTaiReducer);
  const { ans6_Im, ans6_Me, ans6_Fe, ans6_To } = formsTaiReducer;
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
        <div className={classes.magin_Fe}>
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
          <hr />
        </div>
      </div>
    </div>
  );
}

function Section7() {
  const classes = useStyles();
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
  } = forms7Reducer;
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
            <hr />
          </div>
        </div>

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
            <hr />
          </div>
        </div>

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
            <hr />
          </div>
        </div>

        <div className={classes.magin_7A}>
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
              <hr />
            </div>
          </div>

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
              <hr />
            </div>
          </div>

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
              <hr />
            </div>
          </div>

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
              <hr />
            </div>
          </div>

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
              <hr />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "13%", paddingTop: "10%" }}>
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
              <hr />
            </div>
          </div>
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
    </div>
  );
}

function MMSE() {
  const classes = useStyles();
  const forms1p4Reducer = useSelector(
    ({ forms1p4Reducer }) => forms1p4Reducer.educations
  );
  const forms7mReducer = useSelector(({ forms7mReducer }) => forms7mReducer);
  const {
    textAns11,
    ans1,
    textAns12,
    ans12,
    textAns13,
    ans13,
    textAns14,
    ans14,
    textAns15,
    ans15,
    textAns211,
    ans2_1_1,
    textAns212,
    ans2_1_2,
    textAns213,
    ans2_1_3,
    textAns214,
    ans2_1_4,
    textAns215,
    ans2_1_5,
    ansF,
    ansR,
    ansT,
    num1,
    num2,
    num3,
    num4,
    num5,
    ansF2,
    ansR2,
    ansT2,
    ans61,
    ans62,
    ans7,
    think1,
    think2,
    think3,
    ans9,
    textAns10,
    ans10,
    ans11,
    atHospital,
    thinkNumber,
  } = forms7mReducer;
  let divStyle = { color: "darkgray" };
  return (
    <div className="css-form">
      <h2>การทดสอบสมองเบื่องต้นฉบับภาษาไทย</h2>
      <div className="question">
        <p>
          <b>ข้อแนะนำ</b>
        </p>
        <span>
          แบบทดสอบสภาพสมองเบื่องต้นใช้คัดกรองภาวะสมองเสื่อมในผู้สูงอายุ
          สามารถใช้ได้ในผู้สูงอายุที่ไม่ได้เรียนหรือไม่รู้หนังสือ(อ่านไม่ออก
          เขียนไม่ได้)ด้วยโดยไม่ต้องทำข้อ 4 ข้อ 9 และข้อ 10
        </span>
        <p>
          <b>1. Orientation for time : ทดสอบการรับรู้เกี่ยวกับเวลาปัจจุบัน</b>
        </p>
        <p>1.1 วันนี้ วันที่เท่าไหร่</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans1}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <div className="col-12">
          <p>คำตอบของผู้สูงอายุ</p>
          <TextField
            id=""
            variant="outlined"
            className="TextField"
            size="small"
            defaultValue={textAns11}
          />
        </div>
        <hr />
        <p>1.2 วันนี้ วันอะไร</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans12}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <div className="col-12">
          <p>คำตอบของผู้สูงอายุ</p>
          <TextField
            id=""
            variant="outlined"
            className="TextField"
            size="small"
            defaultValue={textAns12}
          />
        </div>
        <hr />
        <p>1.3 เดือนนี้ เดือนอะไร</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans13}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <div className="col-12">
          <p>คำตอบของผู้สูงอายุ</p>
          <TextField
            id=""
            variant="outlined"
            className="TextField"
            size="small"
            defaultValue={textAns13}
          />
        </div>
        <hr />
        <div className={classes.magin_7A}>
          <p>1.4 ปีนี้ ปีอะไร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans14}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ถูก"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ผิด"
            />
          </RadioGroup>
          <div className="col-12">
            <p>คำตอบของผู้สูงอายุ</p>
            <TextField
              id=""
              variant="outlined"
              className="TextField"
              size="small"
              defaultValue={textAns14}
            />
          </div>
          <hr />
        </div>
        <p>1.5 ฤดูนี้ ฤดูอะไร</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans15}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <div className="col-12">
          <p>คำตอบของผู้สูงอายุ</p>
          <TextField
            id=""
            variant="outlined"
            className="TextField"
            size="small"
            defaultValue={textAns15}
          />
        </div>
        <hr />
        <p>
          <b>
            2. Orientation for place : ทดสอบการรับรู้เกี่ยวกับที่อยู่ในปัจจุบัน
          </b>
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions"
          name="questions"
          value={atHospital}
        >
          <FormControlLabel
            className="radio-size"
            value="อยู่สถานพยาบาล"
            control={<Radio color="primary" />}
            label="2.1 กรณีอยู่สถานพยาบาล"
          />
          <FormControlLabel
            className="radio-size"
            value="อยู่ที่บ้าน"
            control={<Radio color="primary" />}
            label="2.2 กรณีอยู่ที่บ้านของผู้ถูกทดสอบ"
          />
        </RadioGroup>

        {atHospital === "อยู่สถานพยาบาล" ? (
          <React.Fragment>
            <p>
              <b>2.1 กรณีอยู่สถานพยาบาล</b>
            </p>
            <p>2.1.1 สถานที่ตรงนี้เรียกว่าอะไร และชื่อว่าอะไร</p>
            <RadioGroup
              className="pl-20"
              aria-label="questions3.4"
              name="questions3.4"
              value={ans2_1_1}
            >
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="ถูก"
              />
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ผิด"
              />
            </RadioGroup>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns211}
              />
            </div>
            <hr />
            <p>2.1.2 ขณะนี้อยู่ชั้นที่เท่าไหร่ของตัวอาคาร</p>
            <RadioGroup
              className="pl-20"
              aria-label="questions3.4"
              name="questions3.4"
              value={ans2_1_2}
            >
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="ถูก"
              />
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ผิด"
              />
            </RadioGroup>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns212}
              />
            </div>
            <hr />
            <p>2.1.3 ที่นี่อยู่ในอำเภออะไร</p>
            <RadioGroup
              className="pl-20"
              aria-label="questions3.4"
              name="questions3.4"
              value={ans2_1_3}
            >
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="ถูก"
              />
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ผิด"
              />
            </RadioGroup>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns213}
              />
            </div>
            <hr />
            <div className={classes.margin_MM2}>
              <p>2.1.4 ที่นี่จังหวัดอะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_4}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns214}
                />
              </div>
              <hr />
            </div>
            <p>2.1.5 ที่นี่ภาคอะไร</p>
            <RadioGroup
              className="pl-20"
              aria-label="questions3.4"
              name="questions3.4"
              value={ans2_1_5}
            >
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="ถูก"
              />
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ผิด"
              />
            </RadioGroup>
            <div className="col-12">
              <p>คำตอบของผู้สูงอายุ</p>
              <TextField
                id=""
                variant="outlined"
                className="TextField"
                size="small"
                defaultValue={textAns215}
              />
            </div>
            <hr />
          </React.Fragment>
        ) : (
          atHospital === "อยู่ที่บ้าน" && (
            <React.Fragment>
              <p>
                <b>2.2 กรณีอยู่ที่บ้านของผู้ถูกทดสอบ</b>
              </p>
              <p>2.2.1 สถานที่ตรงนี้เรียกว่าอะไร และเลขที่เท่าไหร่</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_1}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns211}
                />
              </div>
              <hr />
              <p>2.2.2 ที่นี่หมู่บ้าน(หรือละแวก คุ้ม ย่าน ถนน) อะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_2}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns212}
                />
              </div>
              <hr />
              <p>2.2.3 ที่นี่อำเภอ หรือเขตอะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_3}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns213}
                />
              </div>
              <hr />
              <div className={classes.margin_MM2}>
                <p>2.2.4 ที่นี่จังหวัดอะไร</p>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions3.4"
                  name="questions3.4"
                  value={ans2_1_4}
                >
                  <FormControlLabel
                    className="radio-size"
                    value="1"
                    control={<Radio color="primary" />}
                    label="ถูก"
                  />
                  <FormControlLabel
                    className="radio-size"
                    value="0"
                    control={<Radio color="primary" />}
                    label="ผิด"
                  />
                </RadioGroup>
                <div className="col-12">
                  <p>คำตอบของผู้สูงอายุ</p>
                  <TextField
                    id=""
                    variant="outlined"
                    className="TextField"
                    size="small"
                    defaultValue={textAns214}
                  />
                </div>
                <hr />
              </div>
              <p>2.2.5 ที่นี่ภาคอะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_5}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ถูก"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ผิด"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns215}
                />
              </div>
            </React.Fragment>
          )
        )}
        <hr />
        <p>
          <b>
            3. Registration : ทดสอบการบันทึกความจำโดยให้จำชื่อของ 3 อย่าง
            ต่อไปนี้จะเป็นการทดสอบความจำโดยจะบอกชื่อของ 3 อย่าง ให้คุณ(ตายาย)
            ฟังดีๆนะคะ จะบอกเพียงครั้งเดียว เมื่อพูดจบแล้วให้คุณ(ตายาย)
            พูดทวนตามที่ได้ยินทั้ง 3 ชื่อ แล้วจำไว้ให้ดีนะคะ เดี๋ยวจะถามซ้ำ
          </b>
        </p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ansF} name="ansF" color="primary" />}
            label="ดอกไม้"
          />
          <FormControlLabel
            control={<Checkbox checked={ansR} name="ansR" color="primary" />}
            label="แม่น้ำ"
          />
          <FormControlLabel
            control={<Checkbox checked={ansT} name="ansT" color="primary" />}
            label="รถไฟ"
          />
        </FormGroup>
        <hr />

        <p style={divStyle}>
          <b>
            4.Attention or Calculation : ทดสอบสมาธิโดยให้คิดเลขในใจ
            ถามผู้ถูกทดสอบว่า "คิดเลขในใจเป็นหรือไม่" ถ้าคิดเป็นให้ทำข้อ 4.1
            ถ้าคิดไม่เป็น หรือไม่ตอบให้ทำข้อ 4.2
          </b>

          {forms1p4Reducer == "ไม่ได้เรียนหนังสือ" ? (
            ""
          ) : (
            <React.Fragment>
              <RadioGroup
                className="pl-20"
                aria-label="questions"
                name="questions"
                value={thinkNumber}
              >
                <FormControlLabel
                  className="radio-size"
                  value="คิดเลขได้"
                  control={<Radio color="primary" />}
                  label="4.1 ข้อนี้ให้คิดเลขในใจโดยเอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อยๆ
              ได้ผลลัพธ์เท่าไหร่บอกมา"
                />

                <FormControlLabel
                  className="radio-size"
                  value="คิดเลขไม่ได้"
                  control={<Radio color="primary" />}
                  label="4.2 เดี๋ยวผม/ดิฉัน จะสะกดคำว่ามะนาวให้คุณ(ตายาย)
              ฟังแล้วให้คุณ(ตายาย) สะกดถอยหลังจากพยัญชนะตัวหลังไปตัวเเรก
              คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู-สระอา-วอแหวน คุณ(ตายาย)
              สะกดถอยหลังให้ฟังสิครับ/ค่ะ"
                />
              </RadioGroup>
              {thinkNumber === "คิดเลขได้" ? (
                <React.Fragment>
                  <p>
                    4.1 ข้อนี้ให้คิดเลขในใจโดยเอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อยๆ
                    ได้ผลลัพธ์เท่าไหร่บอกมา
                  </p>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={num1} name="num1" color="primary" />
                      }
                      label="(100-7) = 93 "
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={num2} name="num2" color="primary" />
                      }
                      label="(93-7) = 86 "
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={num3} name="num3" color="primary" />
                      }
                      label="(86-7) = 79"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={num4}
                          name="num4"
                          value="0"
                          color="primary"
                        />
                      }
                      label="(79-7) = 72"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={num5} name="num5" color="primary" />
                      }
                      label="(72-7) = 65"
                    />
                  </FormGroup>
                  <hr />
                </React.Fragment>
              ) : (
                thinkNumber === "คิดเลขไม่ได้" && (
                  <React.Fragment>
                    <p>
                      4.2 เดี๋ยวผม/ดิฉัน จะสะกดคำว่ามะนาวให้คุณ(ตายาย)
                      ฟังแล้วให้คุณ(ตายาย) สะกดถอยหลังจากพยํญชนะตัวหลังไปตัวเเรก
                      คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู- สระอา-วอแหวน
                      คุณ(ตายาย) สะกดถอยหลังให้ฟังสิครับ/ค่ะ
                    </p>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num1}
                            name="num1"
                            color="primary"
                          />
                        }
                        label="ว"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num2}
                            name="num2"
                            color="primary"
                          />
                        }
                        label="า"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num3}
                            name="num3"
                            color="primary"
                          />
                        }
                        label="น"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num4}
                            name="num4"
                            value="0"
                            color="primary"
                          />
                        }
                        label="ะ"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num5}
                            name="num5"
                            color="primary"
                          />
                        }
                        label="ม"
                      />
                    </FormGroup>
                    <hr />
                  </React.Fragment>
                )
              )}
            </React.Fragment>
          )}
        </p>

        <p>
          <b>
            5.Recall : ทดสอบความจำระยะสั้นของชื่อสิ่งของ 3 อย่างที่ให้จำไว้แล้ว
          </b>
        </p>
        <p>เมื่อสักครู่ให้จำของ 3 อย่าง จำได้ไหม มีอะไรบ้าง</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ansF2} name="ansF2" color="primary" />}
            label="ดอกไม้"
          />
          <FormControlLabel
            control={<Checkbox checked={ansR2} name="ansR2" color="primary" />}
            label="แม่น้ำ"
          />
          <FormControlLabel
            control={<Checkbox checked={ansT2} name="ansT2" color="primary" />}
            label="รถไฟ"
          />
        </FormGroup>
        <div className="col-12">
          <p>คำตอบของผู้สูงอายุ</p>
          <TextField
            id=""
            variant="outlined"
            className="TextField"
            size="small"
            // defaultValue={textAns5}
          />
        </div>
        <hr />
        <div style={{ marginTop: "20%", paddingTop: "10%" }}>
          <p>
            <b>6.Naming : ทดสอบการบอกชื่อสิ่งของที่ได้เห็น</b>
          </p>
          <p>
            6.1 ยื่นดินสอให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans61}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ถูก"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ผิด"
            />
          </RadioGroup>
          <hr />
        </div>
        <p>6.2 ชี้นาฬิกาให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans62}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <hr />
        <p>
          <b>
            7.Repetiton : ทดสอบการพูดซ้ำคำที่ได้ยิน ตั้งใจฟังผม/ดิฉันนะ
            เมื่อผม/ดิฉันพูดข้อความนี้ แล้วให้คุณ(ตายาย) พูดตามผม/ดิฉัน
            จะบอกเพียงครั้งเดียว "ใครใคร่ขายไก่ไข่"
          </b>
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans7}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ถูก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ผิด"
          />
        </RadioGroup>
        <hr />
        <p>
          <b>
            8.Verbal command : ทดสอบการเข้าใจความหมายและทำตามคำสั่ง
            ข้อนี้ให้ทำตามที่บอก ตั้งใจฟังดีๆนะ เดี๋ยวผม/ดิฉัน จะส่งกระดาษให้
            แล้วให้คุณ(ตายาย) รับด้วยมือขวา พับครึ่งด้วยมือทั้ง 2 ข้าง
            เสร็จแล้ววางไว้ที่(พื้น,โต๊ะ,เตียง)
          </b>
        </p>
        <p>ผู้ทดสอบส่งกระดาษเปล่าขนาดประมาณ A4 ไม่มีรอยพับ ให้ผู้ทดสอบ</p>
        <RadioGroup>
          <FormControlLabel
            control={
              <Checkbox checked={think1} name="think1" color="primary" />
            }
            label="รับด้วยมือขวา"
          />
          <FormControlLabel
            control={
              <Checkbox checked={think2} name="think2" color="primary" />
            }
            label="พับครึ่งด้วยมือ 2 ข้าง"
          />
          <FormControlLabel
            control={
              <Checkbox checked={think3} name="think3" color="primary" />
            }
            label="วางไว้ที่(พื้น,โต๊ะ,เตียง)"
          />
        </RadioGroup>
        <hr />

        <p style={divStyle}>
          <b>
            9.Written command : ทดสอบการอ่าน การเข้าใจความหมาย สามารถทำตามได้
            ให้คุณ(ตายาย) อ่านแล้วทำตาม จะอ่านออกเสียงหรือในใจก็ได้
          </b>
          {forms1p4Reducer == "ไม่ได้เรียนหนังสือ" ? (
            ""
          ) : (
            <React.Fragment>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans9}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ทำได้"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ทำไม่ได้"
                />
              </RadioGroup>
            </React.Fragment>
          )}
        </p>
        <hr />
        <p style={divStyle}>
          <b>
            10.Written : ทดสอบการเขียนภาษาอย่างมีความหมาย ให้คุณ(ตายาย)
            เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมาย
          </b>
          {forms1p4Reducer == "ไม่ได้เรียนหนังสือ" ? (
            ""
          ) : (
            <React.Fragment>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans10}
              >
                <FormControlLabel
                  className="radio-size"
                  value="1"
                  control={<Radio color="primary" />}
                  label="ประโยคมีความหมาย"
                />
                <FormControlLabel
                  className="radio-size"
                  value="0"
                  control={<Radio color="primary" />}
                  label="ประโยคไม่มีความหมาย"
                />
              </RadioGroup>
              <div className="col-12">
                <p>คำตอบของผู้สูงอายุ</p>
                <TextField
                  id=""
                  variant="outlined"
                  className="TextField"
                  size="small"
                  defaultValue={textAns10}
                />
              </div>
            </React.Fragment>
          )}
        </p>
        <hr />
        <p>
          <b>
            11.Visuoconstruction : ทดสอบความสัมพันธ์ระหว่างตากับมือ
            ให้คุณ(ตายาย) วาดภาพ
          </b>
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans11}
        >
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ทำได้"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ทำไม่ได้"
          />
        </RadioGroup>
      </div>
    </div>
  );
}

function Section8() {
  const forms8Reducer = useSelector(({ forms8Reducer }) => forms8Reducer);
  const forms89qReducer = useSelector(({ forms89qReducer }) => forms89qReducer);
  const {
    ans8_9q_1,
    ans8_9q_2,
    ans8_9q_3,
    ans8_9q_4,
    ans8_9q_5,
    ans8_9q_6,
    ans8_9q_7,
    ans8_9q_8,
    ans8_9q_9,
  } = forms89qReducer;
  const { ans8_1, ans8_2 } = forms8Reducer;
  return (
    <div
      className="css-form"
      style={{ marginTop: "10%", paddingTop: "3%", marginBottom: 0 }}
    >
      <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
      <div className="question">
        <div className="row">
          <div className="col-12">
            <p>
              1. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกหดหู่ เศร้า
              หรือท้อแท้สิ้นหวัง
            </p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.1"
              name="questions8.1"
              value={ans8_1}
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
        <hr />
        <div className="row">
          <div className="col-12">
            <p>
              2. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกทำอะไรก็ไม่เพลิดเพลิน
            </p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.2"
              name="questions8.2"
              value={ans8_2}
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
        <hr />
      </div>
      <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า 9Q</h2>
      <div className="question">
        <p>
          <strong>
            ในช่วง 2 สัปดาห์ที่ผ่านมารวมทั้งวันนี้ ท่านมีอาการเหล่านี้บ่อยแค่ไหน
          </strong>
        </p>
        <div className="row">
          <div className="col-12">
            <p>1. เบื่อ ไม่สนใจอยากทำอะไร</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.1"
              name="questions8.9q.1"
              value={ans8_9q_1}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>2. ไม่สบาย ซึมเศร้า ท้อเเท้</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.2"
              name="questions8.9q.2"
              value={ans8_9q_2}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>3. หลับยาก หรือหลับๆ ตื่นๆ หรือ หลับมากไป</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.3"
              name="questions8.9q.3"
              value={ans8_9q_3}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>4. เหนื่อยง่าย หรือ ไม่ค่อยมีแรง</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.4"
              name="questions8.9q.4"
              value={ans8_9q_4}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row" style={{ marginTop: "5%", paddingTop: "4%" }}>
          <div className="col-12">
            <p>5. เบื่ออาหาร หรือ กินมากเกินไป</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.5"
              name="questions8.9q.5"
              value={ans8_9q_5}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>
              6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลว
              หรือทำให้ตนเองหรือครอบครัวผิดหวัง
            </p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.6"
              name="questions8.9q.6"
              value={ans8_9q_6}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>
              7. สมาธิไม่ดีเวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ
              หรือทำงานที่ต้องใช้ความตั้งใจ
            </p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.7"
              name="questions8.9q.7"
              value={ans8_9q_7}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <p>
              8. พูดช้า หรือทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้
              หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้
            </p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.8"
              name="questions8.9q.8"
              value={ans8_9q_8}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-12">
            <p>9. คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี</p>
          </div>
          <div className="col-12">
            <RadioGroup
              className="pl-20"
              aria-label="questions8.9q.9"
              name="questions8.9q.9"
              value={ans8_9q_9}
            >
              <FormControlLabel
                className="radio-size"
                value="0"
                control={<Radio color="primary" />}
                label="ไม่มีเลย"
              />
              <FormControlLabel
                className="radio-size"
                value="1"
                control={<Radio color="primary" />}
                label="เป็นบางวัน (1-7 วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="2"
                control={<Radio color="primary" />}
                label="เป็นบ่อย (มากกว่า 7วัน)"
              />
              <FormControlLabel
                className="radio-size"
                value="3"
                control={<Radio color="primary" />}
                label="เป็นทุกวัน"
              />
            </RadioGroup>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

function Section9() {
  const classes = useStyles();
  const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
  const {
    ans9_1,
    ans9_2,
    ans9_3,
    ans9_4,
    ans9_5,
    ans9_6,
    ans9_7,
    ans9_8,
    ans9_9,
    ans9_10,
    ans9_11,
    ans9_12,
    walk,
    walkInfo,
    minute,
    second,
  } = forms9Reducer;
  return (
    <div className="css-form">
      <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
      <h4 style={{ marginLeft: 10, marginTop: 10 }}>
        การคัดกรองความเสี่ยงต่อการพลัดตกหกล้ม
      </h4>
      <div className="question">
        <p>เคยพลัดตกหกล้มในช่วง 1 ปีที่ผ่านมา</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_1"
          name="ans9_1"
          value={ans9_1}
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
        <p style={{ marginTop: "5%", paddingTop: "4%" }}>
          ใช้ไม้เท้าหรืออุปกรณ์ช่วยเดิน
        </p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_2"
          name="ans9_2"
          value={ans9_2}
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
        <p>บางครั้งมีความรู้สึกว่าเดินไม่ค่อยมั่นคง</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_3"
          name="ans9_3"
          value={ans9_3}
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
        <p>ต้องจับเฟอร์นิเจอร์เพื่อประคองตนเองขณะเดินในบ้าน</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_4"
          name="ans9_4"
          value={ans9_4}
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
        <p>ต้องใช้มือดันตัวเองขึ้นเวลาลุกจากเก้าอี้</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_5"
          name="ans9_5"
          value={ans9_5}
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
        <p>มีความกังวลว่าตนเองจะหกล้ม</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_6"
          name="ans9_6"
          value={ans9_6}
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
        <p>มีปัญหาเวลาก้าวขึ้นขอบฟุตบาท</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_7"
          name="ans9_7"
          value={ans9_7}
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
        <p>ต้องรีบเร่งเข้าห้องน้ำเมื่อปวดปัสสาวะหรืออุจจาระ</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_8"
          name="ans9_8"
          value={ans9_8}
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
        <p>มีอาการชาที่ฝ่าเท้า</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_9"
          name="ans9_9"
          value={ans9_9}
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
        <p>กินยาที่ทำให้เวียนหัวหรือเหนื่อยง่ายกว่าปกติ</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_10"
          name="ans9_10"
          value={ans9_10}
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
        <p style={{ marginTop: "10%", paddingTop: "4%" }}>
          กินยานอนหลับหรือยาแก้เครียด
        </p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_11"
          name="ans9_11"
          value={ans9_11}
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
        <p>รู้สึกเศร้าหรือหดหู่</p>
        <RadioGroup
          className="pl-10"
          aria-label="ans9_12"
          name="ans9_12"
          value={ans9_12}
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
        <h4>
          <b>ประเมินสมรรถภาพทางกาย</b>
        </h4>
        <h4 style={{ marginLeft: 10 }}>การเดิน</h4>
        <RadioGroup
          className="pl-10"
          aria-label="walk"
          name="walk"
          value={walk}
        >
          <FormControlLabel
            className="radio-size"
            value="เดินได้ด้วยตัวเอง"
            control={<Radio color="primary" />}
            label="เดินได้ด้วยตัวเอง"
          />
          <FormControlLabel
            className="radio-size"
            value="เดินโดยใช้อุปกรณ์"
            control={<Radio color="primary" />}
            label="เดินโดยใช้อุปกรณ์"
          />
          {walk === "เดินโดยใช้อุปกรณ์" && (
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="useEquipment">เลือกอุปกรณ์</InputLabel>
              <Select name="walkInfo" id="useEquipment" value={walkInfo}>
                <MenuItem value="ไม้เท้า">ไม้เท้า</MenuItem>
                <MenuItem value="ไม้ค้ำยืน">ไม้ค้ำยืน</MenuItem>
                <MenuItem value="ไม้เท้าแบบ3ขา">ไม้เท้าแบบ 3 ขา</MenuItem>
                <MenuItem value="ไม้เท้าแบบ4ขา">ไม้เท้าแบบ 4 ขา</MenuItem>
              </Select>
            </FormControl>
          )}
          <FormControlLabel
            className="radio-size"
            value="เดินไม่ได้"
            control={<Radio color="primary" />}
            label="เดินไม่ได้"
          />
          {walk === "เดินไม่ได้" ? (
            <TextField
              id="outlined-basic"
              defaultValue={walkInfo}
              name="walkInfo"
              label="ระบุสาเหตุ"
              variant="outlined"
              size="small"
            />
          ) : (
            ""
          )}
        </RadioGroup>

        {(walk == "เดินได้ด้วยตัวเอง" || walk == "เดินโดยใช้อุปกรณ์") && (
          <React.Fragment>
            <p>Time Up & Go</p>
            <div className="row">
              <div className="col-6">
                <OutlinedInput
                  name="minute"
                  defaultValue={minute}
                  endAdornment={
                    <InputAdornment position="end">นาที</InputAdornment>
                  }
                  fullWidth
                />
              </div>
              <div className="col-6">
                <OutlinedInput
                  name="second"
                  defaultValue={second}
                  endAdornment={
                    <InputAdornment position="end">วินาที</InputAdornment>
                  }
                  fullWidth
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Section92() {
  const classes = useStyles();
  const forms92Reducer = useSelector(({ forms92Reducer }) => forms92Reducer);
  const {
    ans1R,
    ans2R,
    ans3R,
    ans4R,
    ans5R,
    ans1L,
    ans2L,
    ans3L,
    ans4L,
    ans5L,
    ans1N,
    ans2N,
    ans3N,
    ans4N,
    ans5N,
    ans1_1,
    ans1_2,
    ans3_1,
    ans3_2,
    ans3_3,
    ans3_4,
    ans3_5,
    ans3_6,
    ans3_7,
    ans3_8,
    ans3_9,
    ans3_10,
    ans3_11,
    ans3_12,
  } = forms92Reducer;
  return (
    <div className="css-form">
      <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ (ต่อ) </h2>
      <div className="question">
        <p>
          <b>ตอนที่ 1 คัดกรองโรคข้อเข่าเสื่อม</b>
        </p>
        <p>ท่านมีอาการปวดเข่าหรือไม่</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions3.4"
          name="questions3.4"
          value={ans1_1}
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
        <div id="myDIV">
          <hr />
          <p>
            หากท่านมีอาการปวดเข่าหรือเคยมี
            ขณะนี้ท่านมีระดับความเจ็บปวดของข้อเข่าอยู่ในระดับใด
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans1_2}
          >
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่เจ็บ"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="เจ็บเล็กน้อย"
            />
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="เจ็บปานกลาง"
            />
            <FormControlLabel
              className="radio-size"
              value="6"
              control={<Radio color="primary" />}
              label="เจ็บมาก"
            />
            <FormControlLabel
              className="radio-size"
              value="8"
              control={<Radio color="primary" />}
              label="เจ็บมากที่สุด"
            />
            <FormControlLabel
              className="radio-size"
              value="10"
              control={<Radio color="primary" />}
              label="เจ็บอย่างรุนเเรง"
            />
          </RadioGroup>
        </div>
        <hr />
        <p>
          <b>ตอนที่ 2 การคัดกรองข้อเข่าเสื่อมทางคลินิก</b>
        </p>
        <p>1. ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า &lt; 30 นาที</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={ans1R}
                value="ปวดข้างขวา"
                name="ans1R"
                color="primary"
              />
            }
            label="ขวา"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ans1L}
                value="ปวดข้างซ้าย"
                name="ans1L"
                color="primary"
              />
            }
            label="ซ้าย"
          />
          <FormControlLabel
            control={<Checkbox checked={ans1N} value="ไม่ปวด" name="ans1N" />}
            label="ไม่ใช่"
          />
        </FormGroup>
        <hr />
        <p style={{ marginTop: "5%", paddingTop: "3%" }}>
          2. เสียงดังกรอบแกรบขณะเคลื่อนไหว
        </p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ans2R} name="ans2R" color="primary" />}
            label="ขวา"
          />
          <FormControlLabel
            control={<Checkbox checked={ans2L} name="ans2L" color="primary" />}
            label="ซ้าย"
          />
          <FormControlLabel
            control={<Checkbox checked={ans2N} name="ans2N" />}
            label="ไม่ใช่"
          />
        </FormGroup>
        <p>3. กดเจ็บที่กระดูกข้อเข่า</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ans3R} name="ans3R" color="primary" />}
            label="ขวา"
          />
          <FormControlLabel
            control={<Checkbox checked={ans3L} name="ans3L" color="primary" />}
            label="ซ้าย"
          />
          <FormControlLabel
            control={<Checkbox checked={ans3N} name="ans3N" />}
            label="ไม่ใช่"
          />
        </FormGroup>
        <hr />
        <p>4. ข้อใหญ่ผิดรูป</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ans4R} name="ans4R" color="primary" />}
            label="ขวา"
          />
          <FormControlLabel
            control={<Checkbox checked={ans4L} name="ans4L" color="primary" />}
            label="ซ้าย"
          />
          <FormControlLabel
            control={<Checkbox checked={ans4N} name="ans4N" />}
            label="ไม่ใช่"
          />
        </FormGroup>
        <hr />
        <p>5. ไม่พบข้ออุ่น</p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={ans5R} name="ans5R" color="primary" />}
            label="ขวา"
          />
          <FormControlLabel
            control={<Checkbox checked={ans5L} name="ans5L" color="primary" />}
            label="ซ้าย"
          />
          <FormControlLabel
            control={<Checkbox checked={ans5N} name="ans5N" />}
            label="ไม่ใช่"
          />
        </FormGroup>
        <hr />
        <p>
          <b>
            ตอนที่ 3 แบบประเมินระดับความรุนแรงของโรคข้อเข่าเสื่อม (Oxford Knee
            Score)
          </b>
        </p>
        <p>1.ให้ท่านบรรยายลักษณะอาการเจ็บปวดเข่าของท่าน</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_1}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่มีอาการ"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="แทบไม่มีอาการ"
          />
          <p className="hh">
            (เช่น อาการปวดลึกๆที่เข่าเล็กน้อย
            เฉพาะเวลาขยับตัวหรือในบางท่าเท่านั้น)
          </p>

          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="มีอาการปวดเล็กน้อย"
          />
          <p className="hh">
            (เช่น หลังใช้งานนาน อาการปวดเข่ามากขึ้น พักแล้วดีขึ้น เป็นๆหายๆ)
          </p>
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="มีอาการปวดปานกลาง"
          />
          <p className="hh">(เช่น อาการปวดเข่าเพิ่มมากขึ้น ปวดนานขึ้น)</p>
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="มีอาการปวดรุนแรง"
          />
          <p className="hh">(เช่น อยู่เฉยๆก็ปวดมาก ขยับไม่ได้)</p>
        </RadioGroup>
        <hr />
        <div style={{ marginTop: "15%", paddingTop: "6%" }}>
          <p>
            2.ท่านมีปัญหาเรื่องเข่าในการทำกิจวัตรประจำวันด้วยตัวเองหรือไม่ เช่น
            การยืนอาบน้ำเป็นต้น
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans3_2}
          >
            <FormControlLabel
              className="radio-size"
              value="4"
              control={<Radio color="primary" />}
              label="ไม่มีปัญหา"
            />
            <FormControlLabel
              className="radio-size"
              value="3"
              control={<Radio color="primary" />}
              label="มีอาการปวดเข่า/ข้อเข่าฝืดตึงขัดเล็กน้อย แต่น้อยมาก"
            />
            <FormControlLabel
              className="radio-size"
              value="2"
              control={<Radio color="primary" />}
              label="มีอาการปวดเข่า/ข้อเข่าฝืดตึงปานกลาง"
            />
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="เริ่มมีปัญหาทำกิจกรรมด้วยความยากลำบาก"
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่สามารถทำได้"
            />
          </RadioGroup>
          <hr />
        </div>
        <p>3.ท่านมีปัญหาเรื่องเข่า เมื่อก้าวขึ้นลงรถหรือรถประจำทางหรือไม่</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_3}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่มีอาการใดๆ"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่า/ข้อเข่าฝืดตึงขัดเล็กน้อย แต่น้อยมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่า/ข้อเข่าฝืดปานกลาง ก้าวขึ้นลงได้ช้ากว่าปกติ"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่า/ข้อเข่าฝืด ก้าวขึ้นลงด้วยความยากลำบาก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ไม่สามารถทำได้"
          />
        </RadioGroup>
        <hr />
        <p>
          4.ระยะเวลานานเท่าไหร่ที่ท่านเดินได้มากที่สุดก่อนที่ท่านจะมีอาการปวดเข่า
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_4}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="เดินได้เกิน 1 ชั่วโมง โดยไม่มีอาการอะไร"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="เดินได้ 6-60 นาที เริ่มมีอาการปวด"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="เดินได้เพียง 5-15 นาที เริ่มมีอาการปวด"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="เดินได้แค่รอบบ้านเท่านั้น เริ่มมีอาการปวด"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ทำไม่ได้และเดินไม่ไหว"
          />
        </RadioGroup>
        <hr />
        <p>
          5.หลังทานอาหารเสร็จ ในขณะที่ลุกขึ้นจากเก้าอี้นั่ง
          เข่าของท่านมีอาการอย่างไร
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_5}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่มีอาการใดๆ"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่า/ข้อเข่าฝืดตึงขัดเล็กน้อย แต่น้อยมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่า/ข้อเข่าฝืดปานกลาง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="มีอาการปวดเข่ามาก/ข้อเข่าฝืด ลุกขึ้นยืนได้ด้วยความยากลำบาก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ปวดมากไม่สามารถลุกขึ้นได้"
          />
        </RadioGroup>
        <hr />
        <p>
          6.ท่านต้องเดินโยกตัว(เดินกระโผลกกระเผลก)
          เพราะอาการที่เกิดจากเข่าของท่าน หรือไม่
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_6}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่เคย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ในช่วง 2-3 ก้าวแรกที่ออกเดินเท่านั้น"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="เป็นบางครั้ง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="เป็นส่วนใหญ่"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ตลอดเวลา"
          />
        </RadioGroup>
        <hr />
        <p style={{ marginTop: "7%", paddingTop: "4%" }}>
          7.ท่านสามารถนั่งลงคุกเข่าและลุกขึ้นได้หรือไม่
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_7}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ลุกได้ง่าย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ลุกได้ ลำบากเล็กน้อย"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="ได้แต่ลำบากปานกลาง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ลุกได้แต่ยากลำบากมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ลุกไม่ไหว"
          />
        </RadioGroup>
        <hr />
        <p>8.ท่านเคยมีปัญหาปวดเข่าในขณะที่นอนตอนกลางคืนหรือไม่</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_8}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่เคย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ใน 1 เดือน มี 1-2 ครั้ง"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="บางคืน"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="เกือบทุกคืน"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ทุกคืน"
          />
        </RadioGroup>
        <hr />
        <p>9.ในขณะที่คุณทำงาน/ทำงานบ้าน ท่านมีอาการปวดเข่าหรือไม่</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_9}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่มี"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="น้อยมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="บางครั้ง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="ส่วนมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ตลอดเวลา"
          />
        </RadioGroup>
        <hr />
        <p>
          10.ท่านเคยมีความรู้สึกว่าเข่าของท่านทรุดลงทันทีหรือหมดแรงทันทีจนตัวทรุดลง
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_10}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ไม่เคย"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ในช่วงแรกที่ก้าวเดินเท่านั้น "
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="บ่อยครั้ง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="แทบจะตลอดเวลา"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ตลอดเวลา"
          />
        </RadioGroup>
        <hr />
        <p>11.ท่านสามารถไปซื้อของใช้ต่างๆได้ด้วยตัวท่านเอง</p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_11}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="ได้เป็นปกติ"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="ได้ เริ่มมีอาการปวดเข่า/ตึงเข่าเล็กน้อย"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="ไปได้ เริ่มมีอาการปวดเข่า /ตึงเข่าปานกลาง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="พอไปได้ แต่ด้วยความยากลำบากมาก"
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="ไปไม่ไหว"
          />
        </RadioGroup>
        <hr />
        <p style={{ marginTop: "7%", paddingTop: "4%" }}>
          12.ท่านสามารถเดินลงบันไดได้หรือไม่
        </p>
        <RadioGroup
          className="pl-20"
          aria-label="questions6.Im"
          name="questions6.Im"
          value={ans3_12}
        >
          <FormControlLabel
            className="radio-size"
            value="4"
            control={<Radio color="primary" />}
            label="เดินลงได้ เป็นปกติ"
          />
          <FormControlLabel
            className="radio-size"
            value="3"
            control={<Radio color="primary" />}
            label="เดินลงได้ เริ่มมีอาการปวดเข่า/ตึงเข่าเล็กน้อย"
          />
          <FormControlLabel
            className="radio-size"
            value="2"
            control={<Radio color="primary" />}
            label="เดินลงได้ เริ่มมีอาการปวดเข่า/ตึงเข่าปานกลาง"
          />
          <FormControlLabel
            className="radio-size"
            value="1"
            control={<Radio color="primary" />}
            label="เดินลงได้ด้วยความยากลำบากมาก "
          />
          <FormControlLabel
            className="radio-size"
            value="0"
            control={<Radio color="primary" />}
            label="เดินลงไม่ได้"
          />
        </RadioGroup>
        <hr />
      </div>
    </div>
  );
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
