import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  TextField,
  FormGroup,
  RadioGroup,
  Radio,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { BackToMainmenuBT } from "../../AppButtons";
import "../form-style.css";
import "../../genaralConfig.css";
import "./Sections7.css";
// import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/formsMMSE.action";
import { SELECT_SECTION } from "../../../constants";

export default function MMSIThai2002() {
  const forms7mReducer = useSelector(({ forms7mReducer }) => forms7mReducer);
  const visId = useSelector(({ visitID }) => visitID.visiId);
  const selectFormSection = useSelector(
    ({ selectFormSection }) => selectFormSection
  );
  const dispatch = useDispatch();

  const [ans1, setAns1] = useState(forms7mReducer.ans1);
  const [ans12, setAns12] = useState(forms7mReducer.ans12);
  const [ans13, setAns13] = useState(forms7mReducer.ans13);
  const [ans14, setAns14] = useState(forms7mReducer.ans14);
  const [ans15, setAns15] = useState(forms7mReducer.ans15);
  const [ans2_1_1, setAns2_1_1] = useState(forms7mReducer.ans2_1_1);
  const [ans2_1_2, setAns2_1_2] = useState(forms7mReducer.ans2_1_2);
  const [ans2_1_3, setAns2_1_3] = useState(forms7mReducer.ans2_1_3);
  const [ans2_1_4, setAns2_1_4] = useState(forms7mReducer.ans2_1_4);
  const [ans2_1_5, setAns2_1_5] = useState(forms7mReducer.ans2_1_5);

  const [ans61, setAns61] = useState(forms7mReducer.ans61);
  const [ans62, setAns62] = useState(forms7mReducer.ans62);
  const [ans7, setAns7] = useState(forms7mReducer.ans7);
  const [ans9, setAns9] = useState(forms7mReducer.ans9);
  const [ans10, setAns10] = useState(forms7mReducer.ans10);
  const [ans11, setAns11] = useState(forms7mReducer.ans11);

  const [textAns11, settextAns11] = useState(forms7mReducer.textAns11);
  const [textAns12, settextAns12] = useState(forms7mReducer.textAns12);
  const [textAns13, settextAns13] = useState(forms7mReducer.textAns13);
  const [textAns14, settextAns14] = useState(forms7mReducer.textAns14);
  const [textAns15, settextAns15] = useState(forms7mReducer.textAns15);
  const [textAns211, settextAns211] = useState(forms7mReducer.textAns211);
  const [textAns212, settextAns212] = useState(forms7mReducer.textAns212);
  const [textAns213, settextAns213] = useState(forms7mReducer.textAns213);
  const [textAns214, settextAns214] = useState(forms7mReducer.textAns214);
  const [textAns215, settextAns215] = useState(forms7mReducer.textAns215);
  const [textAns10, settextAns10] = useState(forms7mReducer.textAns10);
  const [textAns5, settextAns5] = useState(forms7mReducer.textAns5);

  const [collect, setCollect] = useState(forms7mReducer.collect);
  
  const [results, setresults] = useState(forms7mReducer.results);
  const [point, setPoint] = useState(0);
  const [group, setGroup] = useState(forms7mReducer.group);
  const [show, setShow] = useState(false);
  const [colorS, setcolorS] = useState("");
  const [atHospital, setatHospital] = useState(forms7mReducer.atHospital);
  const [thinkNumber, setthinkNumber] = useState(forms7mReducer.thinkNumber);

  const forms1p4Reducer = useSelector(
    ({ forms1p4Reducer }) => forms1p4Reducer.educations
  );
  //const[num_4_2_1,setnum_4_2_1]= useState(false);
  const [state, setState] = useState({
    //3
    ansF: forms7mReducer.ansF,
    ansR: forms7mReducer.ansR,
    ansT: forms7mReducer.ansT,
    //5
    ansF2: forms7mReducer.ansF2,
    ansR2: forms7mReducer.ansR2,
    ansT2: forms7mReducer.ansT2,
    //4.1
    num1: forms7mReducer.num1,
    num2: forms7mReducer.num2,
    num3: forms7mReducer.num3,
    num4: forms7mReducer.num4,
    num5: forms7mReducer.num5,
    //4.2
    num_4_2_1: forms7mReducer.num1,
    num_4_2_2: forms7mReducer.num2,
    num_4_2_3: forms7mReducer.num3,
    num_4_2_4: forms7mReducer.num4,
    num_4_2_5: forms7mReducer.num5,
    //8
    think1: forms7mReducer.thank1,
    think2: forms7mReducer.thank2,
    think3: forms7mReducer.thank3,
  });
  const {
    ansF,
    ansR,
    ansT,
    ansF2,
    ansR2,
    ansT2,

    num1,
    num2,
    num3,
    num4,
    num5,

    num_4_2_1,
    num_4_2_2,
    num_4_2_3,
    num_4_2_4,
    num_4_2_5,

    think1,
    think2,
    think3,
  } = state;
  

  useEffect(() => {
    console.log("การศึกษา", forms1p4Reducer)
    forms1p4Reducer === "ไม่ได้เรียนหนังสือ" && setGroup(1);
    forms1p4Reducer === "ประถมศึกษา" && setGroup(2);
    forms1p4Reducer === "มัธยมศึกษา" && setGroup(3);
    forms1p4Reducer === "อนุปริญญา/ปวช./ปวส." && setGroup(4);
    forms1p4Reducer === "ปริญญาตรี" && setGroup(5);
    forms1p4Reducer === "สูงกว่าปริญญาตรี" && setGroup(6);

    if (forms1p4Reducer === "ไม่ได้เรียนหนังสือ") {
      setcolorS("darkgray");
    }
    console.log("collect ", collect)
    console.log("group", group);

  }, []);

  useEffect(() => {
    console.log("collect in group change", collect)
    console.log("group in group change", group);
  }, [group])
  var c = colorS;
  const divStyle = {
    color: c,
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    event.target.checked ? cal(1) : cal(-1);
  };

  const cal = (v) => {
    setPoint(point + v);
  };

  useEffect(() => {
    if (collect) {
      var ansNo1_1 = parseInt(ans1);
      var ansNo1_2 = parseInt(ans12);
      var ansNo1_3 = parseInt(ans13);
      var ansNo1_4 = parseInt(ans14);
      var ansNo1_5 = parseInt(ans15);
      var ansNo2_1 = parseInt(ans2_1_1);
      var ansNo2_2 = parseInt(ans2_1_2);
      var ansNo2_3 = parseInt(ans2_1_3);
      var ansNo2_4 = parseInt(ans2_1_4);
      var ansNo2_5 = parseInt(ans2_1_5);
      var ansNo6_1 = parseInt(ans61);
      var ansNo6_2 = parseInt(ans62);
      var ansNo7 = parseInt(ans7);
      var ansNo9 = parseInt(ans9);
      var ansNo10 = parseInt(ans10);
      var ansNo11 = parseInt(ans11);
      const sum =
        ansNo1_1 +
        ansNo1_2 +
        ansNo1_3 +
        ansNo1_4 +
        ansNo1_5 +
        ansNo2_1 +
        ansNo2_2 +
        ansNo2_3 +
        ansNo2_4 +
        ansNo2_5 +
        ansNo6_1 +
        ansNo6_2 +
        ansNo7 +
        ansNo9 +
        ansNo10 +
        ansNo11 +
        point;
      // setPoint(sum)
      console.log(" sum in coll ", sum);

      console.log("point in collect ture ", point);
      if (group == 1) {
        if (sum <= 14) {
          setresults("เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม(Cognitive impairment)");
        } else {
          setresults("ปกติ");
        }
      } else if (group == 2) {
        if (sum <= 17) {
          setresults(" เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม(Cognitive impairment)");
        } else {
          setresults("ปกติ");
        }
      } else if (group > 2) {
        if (sum <= 22) {
          setresults(" เป็นผู้สงสัยว่ามีภาวะสมองเสื่อม(Cognitive impairment)");
        } else {
          setresults(" ปกติ");
        }
      }
    } else {
      console.log("point in collect false ", point);
    }

  }, [
    collect,
    ans1,
    ans12,
    ans13,
    ans14,
    ans15,
    ans2_1_1,
    ans2_1_2,
    ans2_1_3,
    ans2_1_4,
    ans2_1_5,
    ans61,
    ans62,
    ans7,
    ans9,
    ans10,
    ans11,
    point,
    group,
  ]);

  useEffect(() => {
    console.log("in function set collect")
    if (
      ans1 !== "null" &&
      ans12 !== "null" &&
      ans13 !== "null" &&
      ans14 !== "null" &&
      ans15 !== "null" &&
      ans61 !== "null" &&
      ans62 !== "null" &&
      ans7 !== "null" &&
      ans11 !== "null"
    ) {
      console.log("set collect here!!!")
      console.log("ans1: ", typeof(ans1), "\nans12", ans12
      , "\nans13: ", ans13, "\nans14: ", ans14, "\nans15: ", ans15
      , "\nans61: ", ans61, "\nans62: ", ans62, "\nans7: ", ans7, "\nan11: ", ans11)
      setCollect(true);
    } else {
      console.log("set collect to false")
      setCollect(false);
    }
  }, [
    ans1,
    ans12,
    ans13,
    ans14,
    ans15,
    ans2_1_1,
    ans2_1_2,
    ans2_1_3,
    ans2_1_4,
    ans2_1_5,
    atHospital,
    ans61,
    ans62,
    ans7,
    ans11,
  ]);

  const handleSubmit = () => {
    setShow(true);
    const data = [
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
      collect,
      results,
      atHospital,
      thinkNumber,
    ];
    dispatch(formAction.add(data));
    //console.log();
  };
  const saveDataToServer = () => {
    console.log("SaveDataToServer +++++++++++++++++");
    formAction.updatemmse([
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
      atHospital, //2
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
      ansT, //3
      thinkNumber,
      num1,
      num2,
      num3,
      num4,
      num5, //4
      ansF2,
      ansR2,
      ansT2, //5
      ans61,
      ans62,
      ans7,
      think1,
      think2,
      think3, //8
      ans9,
      textAns10,
      ans10,
      ans11,
      collect,
      results,
      visId,
    ]);
  };
  return (
    <div className="css-form">
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>การทดสอบสมองเบื้องต้นฉบับภาษาไทย</h2>
        <div className="question">
          <p>
            <b>ข้อแนะนำ</b>
          </p>
          <span>
            แบบทดสอบสภาพสมองเบื้องต้นใช้คัดกรองภาวะสมองเสื่อมในผู้สูงอายุ
            สามารถใช้ได้ในผู้สูงอายุที่ไม่ได้เรียนหรือไม่รู้หนังสือ(อ่านไม่ออก
            เขียนไม่ได้)ด้วยโดยไม่ต้องทำข้อ 4 ข้อ 9 และข้อ 10
          </span>
          {/* content */}

          <p>
            <b>1. Orientation for time : ทดสอบการรับรู้เกี่ยวกับเวลาปัจจุบัน</b>
          </p>
          <p>1.1 วันนี้ วันที่เท่าไหร่</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans1}
            onChange={(e) => setAns1(e.target.value)}
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
              onChange={(e) => settextAns11(e.target.value)}
            />
          </div>
          <hr />
          <p>1.2 วันนี้ วันอะไร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans12}
            onChange={(e) => setAns12(e.target.value)}
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
              onChange={(e) => settextAns12(e.target.value)}
            />
          </div>
          <hr />
          <p>1.3 เดือนนี้ เดือนอะไร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans13}
            onChange={(e) => setAns13(e.target.value)}
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
              onChange={(e) => settextAns13(e.target.value)}
            />
          </div>
          <hr />
          <p>1.4 ปีนี้ ปีอะไร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans14}
            onChange={(e) => setAns14(e.target.value)}
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
              onChange={(e) => settextAns14(e.target.value)}
            />
          </div>
          <hr />
          <p>1.5 ฤดูนี้ ฤดูอะไร</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans15}
            onChange={(e) => setAns15(e.target.value)}
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
              onChange={(e) => settextAns15(e.target.value)}
            />
          </div>
          <hr />
          <p>
            <b>
              2. Orientation for place :
              ทดสอบการรับรู้เกี่ยวกับที่อยู่ในปัจจุบัน
            </b>
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions"
            name="questions"
            value={atHospital}
            onChange={(e) => setatHospital(e.target.value)}
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
                onChange={(e) => setAns2_1_1(e.target.value)}
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
                  onChange={(e) => settextAns211(e.target.value)}
                />
              </div>
              <hr />
              <p>2.1.2 ขณะนี้อยู่ชั้นที่เท่าไหร่ของตัวอาคาร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_2}
                onChange={(e) => setAns2_1_2(e.target.value)}
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
                  onChange={(e) => settextAns212(e.target.value)}
                />
              </div>
              <hr />
              <p>2.1.3 ที่นี่อยู่ในอำเภออะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_3}
                onChange={(e) => setAns2_1_3(e.target.value)}
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
                  onChange={(e) => settextAns213(e.target.value)}
                />
              </div>
              <hr />
              <p>2.1.4 ที่นี่จังหวัดอะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_4}
                onChange={(e) => setAns2_1_4(e.target.value)}
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
                  onChange={(e) => settextAns214(e.target.value)}
                />
              </div>
              <hr />
              <p>2.1.5 ที่นี่ภาคอะไร</p>
              <RadioGroup
                className="pl-20"
                aria-label="questions3.4"
                name="questions3.4"
                value={ans2_1_5}
                onChange={(e) => setAns2_1_5(e.target.value)}
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
                  onChange={(e) => settextAns215(e.target.value)}
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
                  onChange={(e) => setAns2_1_1(e.target.value)}
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
                    onChange={(e) => settextAns211(e.target.value)}
                  />
                </div>
                <hr />
                <p>2.2.2 ที่นี่หมู่บ้าน(หรือละแวก คุ้ม ย่าน ถนน) อะไร</p>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions3.4"
                  name="questions3.4"
                  value={ans2_1_2}
                  onChange={(e) => setAns2_1_2(e.target.value)}
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
                    onChange={(e) => settextAns212(e.target.value)}
                  />
                </div>
                <hr />
                <p>2.2.3 ที่นี่อำเภอ หรือเขตอะไร</p>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions3.4"
                  name="questions3.4"
                  value={ans2_1_3}
                  onChange={(e) => setAns2_1_3(e.target.value)}
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
                    onChange={(e) => settextAns213(e.target.value)}
                  />
                </div>
                <hr />
                <p>2.2.4 ที่นี่จังหวัดอะไร</p>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions3.4"
                  name="questions3.4"
                  value={ans2_1_4}
                  onChange={(e) => setAns2_1_4(e.target.value)}
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
                    onChange={(e) => settextAns214(e.target.value)}
                  />
                </div>
                <hr />
                <p>2.2.5 ที่นี่ภาคอะไร</p>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions3.4"
                  name="questions3.4"
                  value={ans2_1_5}
                  onChange={(e) => setAns2_1_5(e.target.value)}
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
                    onChange={(e) => settextAns215(e.target.value)}
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
              control={
                <Checkbox
                  checked={ansF}
                  onChange={handleChange}
                  name="ansF"
                  color="primary"
                />
              }
              label="ดอกไม้"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ansR}
                  onChange={handleChange}
                  name="ansR"
                  color="primary"
                />
              }
              label="แม่น้ำ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ansT}
                  onChange={handleChange}
                  name="ansT"
                  color="primary"
                />
              }
              label="รถไฟ"
            />
          </FormGroup>
          <hr />
          {/* ////////////////////////////4///////////////////////////// */}
          <p style={divStyle}>
            <b>
              4.Attention or Calculation : ทดสอบสมาธิโดยให้คิดเลขในใจ
              ถามผู้ถูกทดสอบว่า "คิดเลขในใจเป็นหรือไม่" ถ้าคิดเป็นให้ทำข้อ 4.1
              ถ้าคิดไม่เป็น หรือไม่ตอบให้ทำข้อ 4.2
            </b>
            <br />
            {forms1p4Reducer == "ไม่ได้เรียนหนังสือ" ? (
              ""
            ) : (
              <React.Fragment>
                <RadioGroup
                  className="pl-20"
                  aria-label="questions"
                  name="questions"
                  value={thinkNumber}
                  onChange={(e) => setthinkNumber(e.target.value)}
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
                    style={{ marginTop: 15 }}
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
                      <b>
                        4.1 ข้อนี้ให้คิดเลขในใจโดยเอา 100 ตั้ง ลบออกทีละ 7
                        ไปเรื่อยๆ ได้ผลลัพธ์เท่าไหร่บอกมา
                      </b>
                    </p>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num1}
                            onChange={handleChange}
                            name="num1"
                            color="primary"
                          />
                        }
                        label="(100-7) = 93 "
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num2}
                            onChange={handleChange}
                            name="num2"
                            color="primary"
                          />
                        }
                        label="(93-7) = 86 "
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num3}
                            onChange={handleChange}
                            name="num3"
                            color="primary"
                          />
                        }
                        label="(86-7) = 79"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num4}
                            onChange={handleChange}
                            name="num4"
                            value="0"
                            color="primary"
                          />
                        }
                        label="(79-7) = 72"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={num5}
                            onChange={handleChange}
                            name="num5"
                            color="primary"
                          />
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
                        <b>
                          4.2 เดี๋ยวผม/ดิฉัน จะสะกดคำว่ามะนาวให้คุณ(ตายาย)
                          ฟังแล้วให้คุณ(ตายาย)
                          สะกดถอยหลังจากพยัญชนะตัวหลังไปตัวเเรก
                          คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู-สระอา-วอแหวน
                          คุณ(ตายาย) สะกดถอยหลังให้ฟังสิครับ/ค่ะ
                        </b>
                      </p>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={num1}
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
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
              5.Recall : ทดสอบความจำระยะสั้นของชื่อสิ่งของ 3
              อย่างที่ให้จำไว้แล้ว
            </b>
          </p>
          <p>เมื่อสักครู่ให้จำของ 3 อย่าง จำได้ไหม มีอะไรบ้าง</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ansF2}
                  onChange={handleChange}
                  name="ansF2"
                  color="primary"
                />
              }
              label="ดอกไม้"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ansR2}
                  onChange={handleChange}
                  name="ansR2"
                  color="primary"
                />
              }
              label="แม่น้ำ"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ansT2}
                  onChange={handleChange}
                  name="ansT2"
                  color="primary"
                />
              }
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
              defaultValue={textAns5}
              onChange={(e) => settextAns5(e.target.value)}
            />
          </div>
          <hr />
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
            onChange={(e) => setAns61(e.target.value)}
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
            6.2 ชี้นาฬิกาให้ผู้ถูกทดสอบดูแล้วถามว่า "ของสิ่งนี้เรียกว่าอะไร"
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans62}
            onChange={(e) => setAns62(e.target.value)}
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
            onChange={(e) => setAns7(e.target.value)}
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
                <Checkbox
                  checked={think1}
                  onChange={handleChange}
                  name="think1"
                  color="primary"
                />
              }
              label="รับด้วยมือขวา"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={think2}
                  onChange={handleChange}
                  name="think2"
                  color="primary"
                />
              }
              label="พับครึ่งด้วยมือ 2 ข้าง"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={think3}
                  onChange={handleChange}
                  name="think3"
                  color="primary"
                />
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
                  onChange={(e) => setAns9(e.target.value)}
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
                  onChange={(e) => setAns10(e.target.value)}
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
                    onChange={(e) => settextAns10(e.target.value)}
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
            onChange={(e) => setAns11(e.target.value)}
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

        {/* question */}
        <div className="row justify-content-between">
          {selectFormSection.section === "mainmenu" ? (
            <Link to="/mainmenu/sec7">
              <button type="button" className="btn form-btn btn-back btn-lg">
                ย้อนกลับ
              </button>
            </Link>
          ) : (
            <Link>
              <button
                type="button"
                className="btn form-btn btn-back btn-lg"
                onClick={() => {
                  dispatch({
                    type: SELECT_SECTION,
                    payload: "sec7",
                  });
                }}
              >
                ย้อนกลับ
              </button>
            </Link>
          )}
          <button
            type="button"
            class="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
            disabled={!collect}
          >
            บันทึก
          </button>
        </div>
      </form>

      <Dialog
        open={show}
        scroll="paper"
        maxWidth="xs"
        fullWidth={true}
        onClick={saveDataToServer}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          ผลการประเมินการทดสอบเบื้องต้นฉบับภาษาไทย
        </DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col-12 col-xl-6 title-result">
              <p> ผลการประเมิน </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <p> {results} </p>
            </div>
          </div>
          <BackToMainmenuBT />
        </DialogContent>
      </Dialog>
    </div>
  );
}
