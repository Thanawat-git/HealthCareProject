import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms3.action";

export default function Sections3() {
  const forms3Reducer = useSelector(({forms3Reducer}) => forms3Reducer)
  const dispatch = useDispatch()
  const [ans3_1, setAns3_1] = useState(forms3Reducer.ans3_1);
  const [ans3_2, setAns3_2] = useState(forms3Reducer.ans3_2);
  const [ans3_3, setAns3_3] = useState(forms3Reducer.ans3_3);
  const [ans3_4, setAns3_4] = useState(forms3Reducer.ans3_4);
  const [ans3_5, setAns3_5] = useState(forms3Reducer.ans3_5);
  const [ans3_6, setAns3_6] = useState(forms3Reducer.ans3_6);
  const [check, setCheck] = useState();
  const [count, setCount] = useState(1);
  const [collect, setCollect] = useState(forms3Reducer.collect);
  const [results3, setresults3] = useState(forms3Reducer.results3);


  useEffect(() => {
    if(collect){
      const count = ans3_1+ans3_2+ans3_3+ans3_4+ans3_5+ans3_6
      setresults3()
    }
  }, [])

  useEffect(() => {
    if (
    ans3_1 &&
    ans3_2 &&
    ans3_3 &&
    ans3_4 &&
    ans3_5 &&
    ans3_6
  ) {
    setCollect(true);
  }
  }, [ans3_1,ans3_2,ans3_3,ans3_4,ans3_5,ans3_6])

  useEffect(() => {

  }, [ans3_1])


 

  const [show, setShow] = useState(false);
  const handleSubmit = ()=>{
    setShow(true)
    const data = [ans3_1,results3]
    dispatch(formAction.add(data))
  }

  const resultArray = [
    { title: "แปลผลความเสี่ยง", result: check },

    // {title: 'แปลผลเส้นรอบเอว', result: waist},
    // {title: 'แปลผลค่า BMI', result: bmi}
  ];
  //console.log("Input1 is " + ans3_1);
  //  console.log("Input2 is "+ ans3_2)
  //  console.log("Input3 is "+ input)
  //  console.log("Input4 is "+ check)

  const resu = () => {
    //var i = 0;
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
  };

  const handleChange = () => {
    console.log("Input ans3_1 is " + ans3_1);
    // console.log("Input ans3_2 is " + ans3_2);
    // console.log("Input ans3_3 is " + ans3_3);
    // console.log("Input ans3_4 is " + ans3_4);
    // console.log("Input ans3_5 is " + ans3_5);
    // console.log("Input ans3_6 is " + ans3_6);
    // console.log("Count is " + count);
    var a = "y1";
    var b = "y2";
    var c = "y3";
    var d = "y4";
    var e = "y5";
    var f = "y6";
    if (ans3_1 == a) {
      setCount(count + 1);
      resu();
    }
    if (ans3_2 == b) {
      setCount(count + 2);
      resu();
    }
    if (ans3_3 == c) {
      setCount(count + 3);
      resu();
    }
    if (ans3_4 == d) {
      setCount(count + 4);
      resu();
    }
    if (ans3_5 == e) {
      setCount(count + 5);
      resu();
    }
    if (ans3_6 == f) {
      setCount(count + 6);
      resu();
    } else {
      console.log("Not set");
      //setCount(0)
    }
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด {forms3Reducer.ans3_1} </h2>
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
              value="y1"
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
              value="y2"
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
              value="y3"
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
              value="y4"
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
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y5"
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
            }}
          >
            <FormControlLabel
              className="radio-size"
              value="y6"
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
            onClick={handleSubmit}
          >
            บันทึก
          </button>
        </div>
      </form>
      <ShowResultPopup
        title="ผลส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด"
        result={results3}
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}
