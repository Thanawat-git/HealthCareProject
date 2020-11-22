import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";

export default function Sections3() {
  const [ans3_1, setAns3_1] = useState();
  const [ans3_2, setAns3_2] = useState();
  const [ans3_3, setAns3_3] = useState();
  const [ans3_4, setAns3_4] = useState();
  const [ans3_5, setAns3_5] = useState();
  const [ans3_6, setAns3_6] = useState();
  const [ans3_7, setAns3_7] = useState({
    Y:true,
    N:false
  });
  const [check, setCheck] = useState();
  const [count, setCount] = useState(1);
  const [radio, setRadio] = useState("y");
  const [isradio, setIsRadio] = useState();

  const [show, setShow] = useState(false);

  const resultArray = [
    { title: "แปลผลความเสี่ยง", result: check },

    // {title: 'แปลผลเส้นรอบเอว', result: waist},
    // {title: 'แปลผลค่า BMI', result: bmi}
  ]
  var cou = count;
  function resu() {
    var a = "มีความเสี่ยง";
    var b = "มีความเสี่ยงสูง";
    var c = "มีความเสี่ยงสูงมาก";
    console.log("Input count is " + count);

    if (count >= 1 && count <= 2) {
      setCheck(a);
      console.log(a);
    } else if (count == 3 || count == 4) {
      setCheck(b);
      console.log(b);
    } else if (count >= 5) {
      setCheck(c);
      console.log(c);
    }
  }
function setAns(){
//setAns3_7(ans3_7.Y)
  
  //console.log("3_7: "+ans3_7.Y)
  if (
   ans3_2 == radio &&
   ans3_3 == radio &&
   ans3_4 == radio &&
   ans3_5 == radio
  ) {
    setAns3_7(ans3_7.Y)
    console.log("3_7: "+ans3_7.Y)
  }
}
  const handleChange = (e) => {
     console.log("Input ans3_1 is " + ans3_1);
    //console.log("Input ans3_2 is " + ans3_2);
    // console.log("Input ans3_3 is " + ans3_3);
    // console.log("Input ans3_4 is " + ans3_4);
    // console.log("Input ans3_5 is " + ans3_5);
    // console.log("Input ans3_7 is " + ans3_7);
    //console.log("Count is " + cou);
    //console.log("Value " + setAns3_1(e.target.value))
    resu()
    if (ans3_1 == radio) {
      cou += 1
      setCount(cou)
      resu()
      console.log("Input ans3_1 is " + ans3_1);
    } else if (ans3_2 == radio) {
      cou += 1
      setCount(cou)
      resu()
      console.log("Input ans3_1 is " + ans3_2);
    } else if (ans3_3 === radio) {
      cou += 1
      setCount(cou)
      resu()
      console.log("Input ans3_2 is " + ans3_2);
    } else if (ans3_4 === radio) {
      cou += 1
      setCount(cou)
      resu()
      console.log("Input ans3_2 is " + ans3_3);
    } else if (ans3_5 === radio) {
      cou += 1
      setCount(cou)
      resu()
      //setAns()
      console.log("Input ans3_2 is " + ans3_5);
    } else if (ans3_6 === radio) {
      cou += 1
      setCount(cou)
      resu()
      //setAns()
      console.log("Input ans3_2 is " + ans3_6);
    } else {
      console.log("Not set")
    }
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2>
        <div className="question">
          <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.1"
            name="questions3.1"
            value={ans3_1}
            onChange={(e) => {
              setAns3_1(e.target.value);
              handleChange();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n1"
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
            onChange={(e) => {
              setAns3_2(e.target.value);
              handleChange();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n2"
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
            onChange={(e) => {
              setAns3_3(e.target.value);
              handleChange();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n3"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans3_4}
            onChange={(e) => {
              setAns3_4(e.target.value);
              handleChange();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n4"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.5"
            name="questions3.5"
            value={ans3_5}
            onChange={(e) => {
              setAns3_5(e.target.value);
              handleChange();
              setAns();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n5"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.6"
            name="questions3.6"
            value={ans3_6}
            onChange={(e) => {
              setAns3_6(e.target.value);
              handleChange();
              setAns();
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y"
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value="n6"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
          </RadioGroup>
          <p>
            3.7 มีพ่อ แม่ พี่น้องท้องเดียวกันเป็นโรคหัวใจขาดเลือด หรืออัมพฤกษ์
            อัมพาต ก่อนวัยอันควร(ชายเป็นก่อน อายุ 55 ปี หญิงเป็นก่อน 65 )
          </p>
         
          
            <FormControlLabel
              className="radio-size"
              value={ans3_7.Y}
              checked={ans3_7 === true}
              onChange={(e) => setAns3_7(e.target.value)}
              control={<Radio color="primary" />}
              label="ใช่"
            />
            <FormControlLabel
              className="radio-size"
              value={ans3_7.N}
              checked={ans3_7 === false}
              onChange={(e) => setAns3_7(e.target.value)}
              control={<Radio color="primary" />}
              label="ไม่ใช่"
            />
       
        </div>

        <div className="row justify-content-between">
          <Link to="/mainmenu">
            <button type="button" class="btn form-btn btn-back btn-lg">
              ยกเลิก
            </button>
          </Link>
          <button
            type="button"
            class="btn form-btn btn-primary btn-lg"
            //onChange={handleChange()}
            //onChange={resu()}
            onClick={() => setShow(true)}
          >
            บันทึก
          </button>
        </div>
      </form>
      <ShowResultPopup
        title="ผลส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด"
        dataShow={resultArray}
        show={show}
        //isradio={() =>setIsRadio(false)}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}
