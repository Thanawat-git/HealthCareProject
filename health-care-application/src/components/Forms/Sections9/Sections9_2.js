import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { Modal, Button } from "react-bootstrap";
import "../form-style.css";
import "./Sections9.css";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms92.action";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
      width: "100%",
    },
  });


export default function Sections9_2() {
  const forms92Reducer = useSelector(({ forms92Reducer }) => forms92Reducer);
  const peopleID = true
  const dispatch = useDispatch();
  const classes = useStyles();
  const [stateCheck, setstateCheck] = useState({
    ans1R: forms92Reducer.ans1R,
    ans2R: forms92Reducer.ans2R,
    ans3R: forms92Reducer.ans3R,
    ans4R: forms92Reducer.ans4R,
    ans5R: forms92Reducer.ans5R,
    ans1L: forms92Reducer.ans1L,
    ans2L: forms92Reducer.ans2L,
    ans3L: forms92Reducer.ans3L,
    ans4L: forms92Reducer.ans4L,
    ans5L: forms92Reducer.ans5L,
    ans1N: forms92Reducer.ans1N,
    ans2N: forms92Reducer.ans2N,
    ans3N: forms92Reducer.ans3N,
    ans4N: forms92Reducer.ans4N,
    ans5N: forms92Reducer.ans5N,
  });
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
  } = stateCheck;
  const [collect, setCollect] = useState(forms92Reducer.collect);
  const [results, setresults] = useState(forms92Reducer.results);
  const [results2, setresults2] = useState(forms92Reducer.results2);
  const [results3, setresults3] = useState(forms92Reducer.results3);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(forms92Reducer.count);
  const [point, setPoint] = useState(forms92Reducer.point);

  const [dis1Y, setdis1Y] = useState(false);
  const [dis1N, setdis1N] = useState(false);
  const [dis2Y, setdis2Y] = useState(false);
  const [dis2N, setdis2N] = useState(false);
  const [dis3Y, setdis3Y] = useState(false);
  const [dis3N, setdis3N] = useState(false);
  const [dis4Y, setdis4Y] = useState(false);
  const [dis4N, setdis4N] = useState(false);
  const [dis5Y, setdis5Y] = useState(false);
  const [dis5N, setdis5N] = useState(false);
  const [ans1_1, setans1_1] = useState(forms92Reducer.ans1_1);
  const [ans1_2, setans1_2] = useState(forms92Reducer.ans1_2);
  const [ans3_1, setAns3_1] = useState(forms92Reducer.ans3_1);
  const [ans3_2, setAns3_2] = useState(forms92Reducer.ans3_2);
  const [ans3_3, setAns3_3] = useState(forms92Reducer.ans3_3);
  const [ans3_4, setAns3_4] = useState(forms92Reducer.ans3_4);
  const [ans3_5, setAns3_5] = useState(forms92Reducer.ans3_5);
  const [ans3_6, setAns3_6] = useState(forms92Reducer.ans3_6);
  const [ans3_7, setAns3_7] = useState(forms92Reducer.ans3_7);
  const [ans3_8, setAns3_8] = useState(forms92Reducer.ans3_8);
  const [ans3_9, setAns3_9] = useState(forms92Reducer.ans3_9);
  const [ans3_10, setAns3_10] = useState(forms92Reducer.ans3_10);
  const [ans3_11, setAns3_11] = useState(forms92Reducer.ans3_11);
  const [ans3_12, setAns3_12] = useState(forms92Reducer.ans3_12);

  const handleChange = (event) => {
    console.log(event.target.name, " ", event.target.value);
    setstateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    ans1R || ans1L ? setdis1N(true) : setdis1N(false);
    ans2R || ans2L ? setdis2N(true) : setdis2N(false);
    ans3R || ans3L ? setdis3N(true) : setdis3N(false);
    ans4R || ans4L ? setdis4N(true) : setdis4N(false);
    ans5R || ans5L ? setdis5N(true) : setdis5N(false);
    ans1N ? setdis1Y(true) : setdis1Y(false);
    ans2N ? setdis2Y(true) : setdis2Y(false);
    ans3N ? setdis3Y(true) : setdis3Y(false);
    ans4N ? setdis4Y(true) : setdis4Y(false);
    ans5N ? setdis5Y(true) : setdis5Y(false);
    if (
      (ans1R || ans1L || ans1N) &&
      (ans2R || ans2L || ans2N) &&
      (ans3R || ans3L || ans3N) &&
      (ans4R || ans4L || ans4N) &&
      (ans5R || ans5L || ans5N)
    ) {
      setCollect(true);
    }
    let counter = 5;
    var x = document.getElementById("myDIV");
    x.style.display = "none";
    parseInt(ans1_1);
    parseInt(ans1_2);
    if (collect) {
      ans1N && counter--;
      ans2N && counter--;
      ans3N && counter--;
      ans4N && counter--;
      ans5N && counter--;
      setCount(counter);
      counter > 3
        ? setresults("ใช่มากกว่า 3 ข้อ")
        : setresults("ใช่น้อยกว่า 3 ข้อ");
      const sum =
        parseInt(ans3_1) +
        parseInt(ans3_2) +
        parseInt(ans3_3) +
        parseInt(ans3_4) +
        parseInt(ans3_5) +
        parseInt(ans3_6) +
        parseInt(ans3_7) +
        parseInt(ans3_8) +
        parseInt(ans3_9) +
        parseInt(ans3_10) +
        parseInt(ans3_11) +
        parseInt(ans3_12);
        setPoint(sum)
      if (sum <= 19) {
        setresults3(
          "เป็นโรคข้อเข่าเสื่อมระดับรุนแรง ควรรับการรักษาจากศัลยแพทย์ผู้เชี่ยวชาญกระดูกและข้อทันที"
        );
      } else if (sum > 19 && sum <= 29) {
        setresults3(
          "มีอาการโรคข้อเข่าเสื่อมระดับปานกลาง ควรปรึกษาศัลยแพทย์ผู้เชี่ยวชาญกระดูกและข้อเพื่อรับการตรวจรักษา เอกซเรย์ข้อเข่า และประเมินอาการของโรค"
        );
      } else if (sum > 29 && sum <= 39) {
        setresults3(
          "พบเริ่มมีอาการของโรคข้อเข่าเสื่อม ควรได้รับคำแนะนำจากศัลยแพทย์ผู้เชี่ยวชาญกระดูกและข้อเรื่องการออกกำลังกายอย่างเหมาะสม การควบคุมน้ำหนักเพื่อไม่ให้อ้วน หลีกเลี่ยงท่าหรือกิจกรรมที่จะทำให้เกิดอาการและความรุนแรง ของโรคมากขึ้น และการประเมินระดับอาการของโรค"
        );
      } else if (sum > 39 && sum <= 48) {
        setresults3("ยังไม่พบอาการผิดปกติ แต่ควรตรวจร่างกายเป็นประจำทุกปี");
      }
    }
   
    
    if (parseInt(ans1_1) == 1) {
      x.style.display = "block";
    }else{
      setresults2('ไม่มีอาการปวดเข่า');
    }
    if (x.style.display == "block") {
      if (ans1_2 == 0) {
        setresults2(ans1_2);
      } else if (ans1_2 == 2) {
        setresults2(ans1_2);
      } else if (ans1_2 == 4) {
        setresults2(ans1_2);
      } else if (ans1_2 == 6) {
        setresults2(ans1_2);
      } else if (ans1_2 == 8) {
        setresults2(ans1_2);
      } else if (ans1_2 == 10) {
        setresults2(ans1_2);
      }
    }
  }, [
    collect,
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
  ]);

  const handleSubmit = () => {
    setShow(true);
    const data = [
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
      collect,
      count, 
      results,
      results2,
      results3,
      point
    ];
    dispatch(formAction.add(data));
  };

  return (
    <div className="css-form">
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
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
            onChange={(e) => setans1_1(e.target.value)}
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
              onChange={(e) => setans1_2(e.target.value)}
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
                  onChange={handleChange}
                  name="ans1R"
                  color="primary"
                />
              }
              label="ขวา"
              disabled={dis1Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans1L}
                  value="ปวดข้างซ้าย"
                  onChange={handleChange}
                  name="ans1L"
                  color="primary"
                />
              }
              label="ซ้าย"
              disabled={dis1Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans1N}
                  value="ไม่ปวด"
                  onChange={handleChange}
                  name="ans1N"
                />
              }
              label="ไม่ใช่"
              disabled={dis1N}
            />
          </FormGroup>
          <hr />
          <p>2. เสียงดังกรอบแกรบขณะเคลื่อนไหว</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans2R}
                  onChange={handleChange}
                  name="ans2R"
                  color="primary"
                />
              }
              label="ขวา"
              disabled={dis2Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans2L}
                  onChange={handleChange}
                  name="ans2L"
                  color="primary"
                />
              }
              label="ซ้าย"
              disabled={dis2Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans2N}
                  onChange={handleChange}
                  name="ans2N"
                />
              }
              label="ไม่ใช่"
              disabled={dis2N}
            />
          </FormGroup>
          <p>3. กดเจ็บที่กระดูกข้อเข่า</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans3R}
                  onChange={handleChange}
                  name="ans3R"
                  color="primary"
                />
              }
              label="ขวา"
              disabled={dis3Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans3L}
                  onChange={handleChange}
                  name="ans3L"
                  color="primary"
                />
              }
              label="ซ้าย"
              disabled={dis3Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans3N}
                  onChange={handleChange}
                  name="ans3N"
                />
              }
              label="ไม่ใช่"
              disabled={dis3N}
            />
          </FormGroup>
          <hr />
          <p>4. ข้อใหญ่ผิดรูป</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans4R}
                  onChange={handleChange}
                  name="ans4R"
                  color="primary"
                />
              }
              label="ขวา"
              disabled={dis4Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans4L}
                  onChange={handleChange}
                  name="ans4L"
                  color="primary"
                />
              }
              label="ซ้าย"
              disabled={dis4Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans4N}
                  onChange={handleChange}
                  name="ans4N"
                />
              }
              label="ไม่ใช่"
              disabled={dis4N}
            />
          </FormGroup>
          <hr />
          <p>5. ไม่พบข้ออุ่น</p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans5R}
                  onChange={handleChange}
                  name="ans5R"
                  color="primary"
                />
              }
              label="ขวา"
              disabled={dis5Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans5L}
                  onChange={handleChange}
                  name="ans5L"
                  color="primary"
                />
              }
              label="ซ้าย"
              disabled={dis5Y}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={ans5N}
                  onChange={handleChange}
                  name="ans5N"
                />
              }
              label="ไม่ใช่"
              disabled={dis5N}
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
            onChange={(e) => setAns3_1(e.target.value)}
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
          <p>
            2.ท่านมีปัญหาเรื่องเข่าในการทำกิจวัตรประจำวันด้วยตัวเองหรือไม่ เช่น
            การยืนอาบน้ำเป็นต้น
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans3_2}
            onChange={(e) => setAns3_2(e.target.value)}
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

          <p>3.ท่านมีปัญหาเรื่องเข่า เมื่อก้าวขึ้นลงรถหรือรถประจำทางหรือไม่</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans3_3}
            onChange={(e) => setAns3_3(e.target.value)}
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
            onChange={(e) => setAns3_4(e.target.value)}
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
            onChange={(e) => setAns3_5(e.target.value)}
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
            onChange={(e) => setAns3_6(e.target.value)}
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
          <p>7.ท่านสามารถนั่งลงคุกเข่าและลุกขึ้นได้หรือไม่</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans3_7}
            onChange={(e) => setAns3_7(e.target.value)}
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
            onChange={(e) => setAns3_8(e.target.value)}
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
            onChange={(e) => setAns3_9(e.target.value)}
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
            onChange={(e) => setAns3_10(e.target.value)}
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
            onChange={(e) => setAns3_11(e.target.value)}
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
          <p>12.ท่านสามารถเดินลงบันไดได้หรือไม่</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans3_12}
            onChange={(e) => setAns3_12(e.target.value)}
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
        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec9">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <button
            type="button"
            className="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            ถัดไป
          </button>
        </div>
      </form>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ผลการประเมินโรคข้อเข่าเสื่อม</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลตอนที่ 1 ระดับความเจ็บปวดของข้อเข่า </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms92Reducer.results2} </p>
              </strong>
            </div>
            <hr/>
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลตอนที่ 2 </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms92Reducer.results} </p>
              </strong>
            </div>
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลตอนที่ 3 </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms92Reducer.results3} </p>
              </strong>
            </div>
          </div>
          
        </Modal.Body>

        <Modal.Footer>
          <Link to="/mainmenu" className={classes.root}>
            <Button variant="primary" block onClick={()=>formAction.updateExa9_1Osteoarthritis([ans1_1,ans1_2
                ,results2,ans1R,ans1L,ans1N,ans2R,ans2L,ans2N,ans3R,ans3L,ans3N,ans4R,ans4L,ans4N,ans5R,ans5L,ans5N
                ,results,ans3_1,ans3_2,ans3_3,ans3_4,ans3_5,ans3_6,ans3_7,ans3_8,ans3_9,ans3_10,ans3_11,ans3_12
                ,point,results3,collect,peopleID])} >
              กลับสู่หน้าเมนูหลัก
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}
