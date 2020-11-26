import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms10.action";

export default function Sections10() {
  const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);
  const dispatch = useDispatch();

  const [ans10, setAns10] = useState(forms10Reducer.ans10);
  // const [show, setShow] = useState(false);

  const handleSubmit = () => {
    // setShow(true); 
    dispatch(formAction.add(ans10));
    formAction.upadateExa10Urination(ans10);
  };
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 10 -----------------------------</h2>
        <div className="question">
          <p>
            ปัสสาวะเล็ดหรือราดทำให้การใช้ชีวิตประจำวันของผู้สูงอายุมีปัญหาหรือไม่
          </p>
          <RadioGroup
            className="pl-20"
            aria-label="questions10.1"
            name="questions10.1"
            value={ans10}
            onChange={(e) => setAns10(e.target.value)}
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
        <div className="row justify-content-between">
          <Link to="/mainmenu">
            <button type="button" class="btn form-btn btn-back btn-lg">
              ยกเลิก
            </button>
          </Link>
          <Link to="/mainmenu">
          <button
            type="button"
            class="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            บันทึก
          </button></Link>
        </div>
      </form>
      {/* <ShowResultPopup
        //title="ผลส่วนที่ 10"
        //result={results3}
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      /> */}
    </div>
  );
}
