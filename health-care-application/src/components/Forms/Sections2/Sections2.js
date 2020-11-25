import React, { useState, useEffect } from "react";
import "./Sections2.css";
import "../form-style.css";
import "../../genaralConfig.css";
import { OutlinedInput, InputAdornment, TextField, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms2.action";
import { Modal, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Sections2_1() {
  const classes = useStyles();
  const forms2Reducer = useSelector(({ forms2Reducer }) => forms2Reducer);
  const elderlyGender = useSelector(
    ({ forms1p1Reducer }) => forms1p1Reducer.elderlyGender
  ); // check gender
  const dispatch = useDispatch();

  const [waist, setWaist] = useState(forms2Reducer.waist);
  const [weight, setWeight] = useState(forms2Reducer.weight);
  const [high, setHigh] = useState(forms2Reducer.high);
  const [bmi, setBmi] = useState(null);
  const [pulse, setPulse] = useState(forms2Reducer.pulse);
  const [bloodPressure1, setBloodPressure1] = useState(
    forms2Reducer.bloodPressure1
  );
  const [bloodPressure2, setBloodPressure2] = useState(
    forms2Reducer.bloodPressure2
  );
  const [sugar, setSugar] = useState(forms2Reducer.sugar);

  const [show, setShow] = useState(false);
  const [collect, setCollect] = useState(forms2Reducer.collect);
  const [noFood, setnoFood] = useState(null)

  useEffect(() => {
    if (
      waist &&
      weight &&
      high &&
      pulse &&
      bloodPressure1 &&
      bloodPressure2 &&
      sugar
    ) {
      setCollect(true);
    }
  }, [waist, weight, high, pulse, bloodPressure1, bloodPressure2, sugar]);

  useEffect(() => {
    waist !== null && calwaist();
  }, [waist]);
  useEffect(() => {
    if (weight === null || weight == 0 || high === null || high == 0) return;
    calbmi();
  }, [weight, high]);
  useEffect(() => {
    if (
      bloodPressure1 === null ||
      bloodPressure1 == 0 ||
      bloodPressure2 === null ||
      bloodPressure2 == 0
    )
      return;
    calbloodPressure();
  }, [bloodPressure1, bloodPressure2]);
  useEffect(() => {
    sugar !== null && calsugar();
  }, [sugar]);
  useEffect(() => {
    if (bmi !== null) {
      if (bmi < 18.5) {
        setbmiResult("ผอม");
      } else if (bmi < 23.0) {
        setbmiResult("ปกติ");
      } else if (bmi < 25.0) {
        setbmiResult("ท้วม");
      } else if (bmi < 30.0) {
        setbmiResult("อ้วน");
      } else {
        setbmiResult("อ้วนมาก");
      }
    }
  }, [bmi]);
  // result State
  const [waistResult, setWaistResult] = useState("");
  const [bmiResult, setbmiResult] = useState("");
  const [bloodPressureResult, setbloodPressureResult] = useState("");
  const [sugarResult, setsugarResult] = useState("");

  const calwaist = () => {
    elderlyGender == "Male" ? calInner(90) : calInner(80);
    function calInner(num) {
      waist <= num ? setWaistResult("ปกติ") : setWaistResult("อ้วนลงพุง");
    }
  };
  const calbmi = () => {
    setBmi((parseFloat(weight) / (parseFloat(high) / 100) ** 2).toFixed(2));
  };
  const calbloodPressure = () => {
    if (bloodPressure1 < 140 && bloodPressure2 < 90) {
      setbloodPressureResult("ปรับพฤติกรรม");
    } else if (bloodPressure1 < 180 && bloodPressure2 < 110) {
      setbloodPressureResult(
        "วัดซ้ำใน 2 สัปดาห์ เพื่อยืนยัน *แจ้งเตือน 2 สัปดาห์"
      );
    } else {
      setbloodPressureResult("ส่งพบผู้เชี่ยวชาญทันที");
    }
  };
  const calsugar = () => {
    if(noFood == true){
      sugar < 100
      ? setsugarResult("ปกติ")
      : sugar < 126
      ? setsugarResult("ตรวจซ้ำภายใน 1 เดือน *แจ้งเตือน 1 เดือน")
      : setsugarResult("ตรวจซ้ำ DTX ภายใน 2 สัปดาห์");
    } else {
      sugar < 100
      ? setsugarResult("ยังไม่มีแปลผลสำหรับ case นี้")
      : sugar < 126
      ? setsugarResult("ตรวจซ้ำภายใน 1 เดือน *แจ้งเตือน 1 เดือน")
      : setsugarResult("ตรวจซ้ำ DTX ภายใน 2 สัปดาห์");
    }
    
  };

  const handleSubmit = () => {
    setShow(true);
    const data = [
      waist,
      weight,
      high,
      pulse,
      bloodPressure1,
      bloodPressure2,
      sugar,
      waistResult,
      bmiResult,
      bloodPressureResult,
      sugarResult,
      collect,
    ];
    dispatch(formAction.add(data));
  };

  const saveDataToServer =()=>{
    // formAction.updateExa2Waist([waist,waistResult])
  }

  return (
    <div className="css-form">
      {/* <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1> */}
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 2 แบบคัดกรองสภาวะสุขภาพ</h2>
        <div className="question">
          {/* content */}
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
                onChange={(e) => {
                  setWaist(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">ซม.</InputAdornment>
                }
                fullWidth
              />
            </div>
          </div>
          {/* row-1 */}
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
                onChange={(event) => setWeight(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">กก.</InputAdornment>
                }
                fullWidth
              />
            </div>
            {/* col */}
            <div className="col-12">
              <p>ส่วนสูง</p>
            </div>
            <div className="col-12 mb-15">
              <OutlinedInput
                id="high"
                value={high}
                onChange={(event) => setHigh(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">ซม.</InputAdornment>
                }
                fullWidth
              />
            </div>
            <br />
            {/* col */}
            <div className="col-12 txt-center">
              <p>ดัชนีมวลการ(BMI)</p>
              {/* <h1 className="display-1 text-black-50"> {(weight/((high/100)**2)).toFixed(2)} </h1> */}
              <h1 className="display-1 text-black-50"> {bmi} </h1>
              <br />
            </div>
          </div>
          {/* row-2 */}

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
                value={bloodPressure1}
                onChange={(e) => {
                  setBloodPressure1(e.target.value);
                }}
                fullWidth
              />
            </div>
            <div className="col-6">
              <OutlinedInput
                id="bloodPressure2"
                value={bloodPressure2}
                onChange={(e) => {
                  setBloodPressure2(e.target.value);
                }}
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
                value={pulse}
                onChange={(e) => {
                  setPulse(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">ครั้ง/นาที</InputAdornment>
                }
                fullWidth
              />
            </div>
          </div>
          <br />

          {/* row-3 */}
          <hr />
          <div className="row">
            <div className="col-12">
              <p className="txt-center">
                <strong>ระดับน้ำตาลจากปลายนิ้ว</strong>
              </p>
            </div>
            <div className="col-12">
              <p>ผู้สูงอายุมีการงดอาหารก่อนมาตรวจอย่างน้อย 8 ชั่วโมงหรือไม่</p>
              <RadioGroup className="pl-20" aria-label='nofood' name='nofood' value={noFood} onChange={(e)=>setnoFood(!noFood)}>
                <FormControlLabel className="radio-size" value={true}  control={<Radio color="primary" />} label="ใช่" />
                <FormControlLabel className="radio-size" value={false} control={<Radio color="primary" />} label="ไม่ใช่" />
              </RadioGroup>
            </div>
            {noFood !== null && 
            <div className="col-12 mb-15">
              <OutlinedInput
                id="sugar"
                value={sugar}
                onChange={(e) => {
                  setSugar(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">มก./ดล.</InputAdornment>
                }
                fullWidth
              />
            </div>
            }
          </div>
          {/* row-4 */}
          {/* content */}
        </div>

        <div className="row justify-content-between">
          <Link to="/mainmenu">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ยกเลิก
            </button>
          </Link>
          <button
            type="button"
            className="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            บันทึก
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
          <Modal.Title>ผลการประเมินสภาวะสุขภาพ</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลเส้นรอบเอว </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms2Reducer.waistResult} </p>
              </strong>
            </div>
            <hr/>
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลค่า BMI </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms2Reducer.bmiResult} </p>
              </strong>
            </div>
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลความดันโลหิต </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms2Reducer.bloodPressureResult} </p>
              </strong>
            </div>
            <div className="col-12 col-xl-6 title-result">
              <p> แปลผลการตรวจระดับน้ำตาล </p>
            </div>
            <div className="col-12 col-xl-6 result-result">
              <strong>
                <p> {forms2Reducer.sugarResult} </p>
              </strong>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/mainmenu" className={classes.root}>
            <Button variant="primary" block onClick={saveDataToServer} >
              กลับสู่หน้าเมนูหลัก
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

