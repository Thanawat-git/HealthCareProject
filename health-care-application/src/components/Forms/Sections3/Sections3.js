import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import { BackToMainmenuBT } from "../../AppButtons";
// import ShowResultPopup from "../ResuleShowsPopUp";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms3.action";
import * as appointAction from "../../../actions/appointment.action";
import { CancelBT } from "../../AppButtons";

export default function Sections3() {
  const forms3Reducer = useSelector(({ forms3Reducer }) => forms3Reducer);
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  const visId = useSelector(({ visitID }) => visitID.visiId);
  const peopleId = useSelector(({ visitID }) => visitID.peopleId);
  const forms1p6Reducer = useSelector(
    ({ forms1p6Reducer }) => forms1p6Reducer.diseases
  );
  const forms2Reducer = useSelector(
    ({ forms2Reducer }) => forms2Reducer.waistResult
  );
  const dispatch = useDispatch();
  const [ans3_1, setAns3_1] = useState(forms3Reducer.ans3_1);
  const [ans3_2, setAns3_2] = useState(forms3Reducer.ans3_2);
  const [ans3_3, setAns3_3] = useState(forms3Reducer.ans3_3);
  const [ans3_4, setAns3_4] = useState(forms3Reducer.ans3_4);
  const [ans3_5, setAns3_5] = useState(forms3Reducer.ans3_5);
  const [ans3_6, setAns3_6] = useState(forms3Reducer.ans3_6);
  const [ans3_7, setAns3_7] = useState(forms3Reducer.ans3_7);
  const [collect, setCollect] = useState(forms3Reducer.collect);
  const [results, setresults] = useState(forms3Reducer.results3);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(forms3Reducer.count);
  const [dis1Y, setdis1Y] = useState(false);
  const [dis1N, setdis1N] = useState(false);
  const [dis2Y, setdis2Y] = useState(false);
  const [dis2N, setdis2N] = useState(false);
  const [dis3Y, setdis3Y] = useState(false);
  const [dis3N, setdis3N] = useState(false);
  const [dis4Y, setdis4Y] = useState(false);
  const [dis4N, setdis4N] = useState(false);
  const [dis2, setdis2] = useState(false);
  const [disf2, setdisf2] = useState(false);

  const [datesec3, setdateSec3] = useState();
  const [topicsec3, settopicsec3] = useState();



  useEffect(() => {
    forms2Reducer === "อ้วนลงพุง" && setAns3_5("1");
    if (forms2Reducer === "อ้วนลงพุง") {
      dis2 == false ? setdis2(false) : setdis2(true);
      disf2 == true ? setdisf2(false) : setdisf2(true);
    }
    forms1p6Reducer.map((value) => {
      // value == "ความดันโลหิตสูง" && setAns3_2("1");
      // value == "เบาหวาน" && setAns3_3("1");
      // value == "ไขมันในเส้นเลือดสูง" && setAns3_4("1");
      // value == "โรคหัวใจ" && setAns3_6("1");

      switch (value) {
        case "ความดันโลหิตสูง":
          setAns3_2("1")
          setdis1N(true)
          break;
        case "เบาหวาน":
          setAns3_3("1");
          setdis2N(true)
          break;
        case "ไขมันในเส้นเลือดสูง":
          setAns3_4("1");
          setdis3N(true)
          break;
        case "โรคหัวใจ":
            setAns3_6("1");
            setdis4N(true)
            break;
        case "อัมพฤตษ์ อัมพาต":
              setAns3_6("1");
              setdis4N(true)
              break;
        default:
          break;
      }
    });
  }, []);

  useEffect(() => {
    if (collect) {
      const countNum =
        parseInt(ans3_1) +
        parseInt(ans3_2) +
        parseInt(ans3_3) +
        parseInt(ans3_4) +
        parseInt(ans3_5) +
        parseInt(ans3_6) +
        parseInt(ans3_7);
      console.log("countNum : " + countNum);
      setCount(countNum);
      if (countNum == 0) {
        setresults("ไม่มีความเสี่ยง");
      } else if (countNum >= 1 && countNum <= 2) {
        setresults("มีความเสี่ยง");
        calDate(1);
        settopicsec3("โรคหัวใจและหลอดเลือด");
      } else if (countNum >= 3 && countNum <= 4) {
        setresults("มีความเสี่ยงสูง");
        calDate(2);
        settopicsec3("โรคหัวใจและหลอดเลือด");
      } else if (countNum >= 5) {
        setresults("มีความเสี่ยงสูงมาก");
        calDate(3);
        settopicsec3("โรคหัวใจและหลอดเลือด");
      }
    }
  }, [collect, ans3_1, ans3_2, ans3_3, ans3_4, ans3_5, ans3_6, ans3_7]);

  useEffect(() => {
    if (ans3_1 && ans3_2 && ans3_3 && ans3_4 && ans3_5 && ans3_6 && ans3_7) {
      setCollect(true);
    }
  }, [ans3_1, ans3_2, ans3_3, ans3_4, ans3_5, ans3_6, ans3_7, results]);

  const handleSubmit = () => {
    setShow(true);
    const data = [
      ans3_1,
      ans3_2,
      ans3_3,
      ans3_4,
      ans3_5,
      ans3_6,
      ans3_7,
      results,
      collect,
      count,
    ];
    dispatch(formAction.add(data));
  };
  const saveDataToServer = () => {
    console.log("sec3 ")
    sendValueTofollow();
    formAction.updateExa3Cardiovascular([
      visId,
      ans3_1,
      "บุหรี่",
      ans3_2,
      ans3_3,
      ans3_4,
      ans3_5,
      ans3_6,
      ans3_7,
      count,
      results,
      collect,
    ]);
  };
  const sendValueTofollow = () => {
    results !== "ไม่มีความเสี่ยง" && appointAction.createAppointment([datesec3, topicsec3, peopleId], "หัวใจ"); //หัวใจ
    console.log("date" + datesec3);
  };

  function calDate(y) {
    console.log("week = " + y);
    if (y == 1) {
      var d = new Date(); // วันนี้
      d.setDate(d.getDate() + 365); //  1year
      dateToYMD(d);
      //console.log(topicblood + toDay)
    } else if (y == 2) {
      var d = new Date(); // วันนี้
      d.setDate(d.getDate() + 182.5); //  6month
      dateToYMD(d);
      //console.log(topicsuga + toDay)
    } else if (y == 3) {
      var d = new Date(); // วันนี้
      d.setDate(d.getDate() + 91.25); // 3month
      dateToYMD(d);
      //console.log(topicsuga + toDay)
    }
  }
  function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear() + 543;

    setdateSec3(
      "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d)
    );
    return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  }
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 3 ความเสี่ยงต่อโรคหัวใจและหลอดเลือด</h2>
        <div className="question">
          <p>3.1 ยังสูบบุหรี่ ยาเส้น หรือหยุดสูบไม่เกิน 1 ปี </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.1"
            name="questions3.1"
            value={ans3_1}
            onChange={(e) => setAns3_1(e.target.value)}
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
            onChange={(e) => setAns3_2(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
              disabled={dis1Y}
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
              disabled={dis1N}
            />
          </RadioGroup>
          <hr />
          <p>3.3 ระดับน้ำตาลในเลือด ≥ 100 หรือแพทย์บอกว่าเป็นเบาหวาน</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.3"
            name="questions3.3"
            value={ans3_3}
            onChange={(e) => setAns3_3(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
              disabled={dis2Y}
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
              disabled={dis2N}
            />
          </RadioGroup>
          <hr />
          <p>3.4 แพทย์หรือพยาบาลบอกว่ามีไขมันในเลือดสูง</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.4"
            name="questions3.4"
            value={ans3_4}
            onChange={(e) => setAns3_4(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
              disabled={dis3Y}
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
              disabled={dis3N}
            />
          </RadioGroup>
          <hr />
          <p>3.5 เส้นรอบเอวเกินเกณฑ์</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.5"
            name="questions3.5"
            value={ans3_5}
            onChange={(e) => setAns3_5(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
              disabled={dis2}
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
              disabled={disf2}
            />
          </RadioGroup>
          <hr />
          <p>3.6 แพทย์บอกว่าเป็นโรคหัวใจขาดเลือดหรือ อัมพฤกษ์ อัมพาต</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions3.6"
            name="questions3.6"
            value={ans3_6}
            onChange={(e) => setAns3_6(e.target.value)}
          >
            <FormControlLabel
              className="radio-size"
              value="1"
              control={<Radio color="primary" />}
              label="ใช่"
              disabled={dis4Y}
            />
            <FormControlLabel
              className="radio-size"
              value="0"
              control={<Radio color="primary" />}
              label="ไม่ใช่"
              disabled={dis4N}
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
            onChange={(e) => setAns3_7(e.target.value)}
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

        <div className="row justify-content-between">
        <CancelBT/>
          {/* <Link to="/mainmenu">
            <button type="button" class="btn form-btn btn-back btn-lg">
              ยกเลิก
            </button>
          </Link> */}
          <button
            type="button"
            class="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            บันทึก
          </button>
        </div>
      </form>
      {/* <ShowResultPopup
        title="ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด"
        result={results}
        show={show}
        onClick={()=>saveDataToServer}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      /> */}
      <Dialog
      open={show}
      scroll="paper"
      maxWidth="xs"
      fullWidth={true}
      onClose={()=>setShow(false)}
      onClick={saveDataToServer}
    >
      <DialogTitle style={{ textAlign: "center" }}>
        ผลการประเมินความเสี่ยงต่อโรคหัวใจและหลอดเลือด
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
