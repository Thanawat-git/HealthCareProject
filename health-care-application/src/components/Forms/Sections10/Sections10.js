import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms10.action";
import { CancelBT } from "../../AppButtons";

export default function Sections10() {
  const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);
  const visId = useSelector(({ visitID }) => visitID.visiId);
  const dispatch = useDispatch();

  const [ans10, setAns10] = useState(forms10Reducer.ans10);
  const [collect, setCollect] = useState(forms10Reducer.collect);
  const [results, setresults] = useState(forms10Reducer.results);
  const [show, setShow] = useState(false);

  useEffect(() => {
    //console.log(collect)
    if(collect) {
      const countNum =parseInt(ans10)
      if(countNum == 1){ 
       setresults("ผิดปกติ") 
      }if(countNum == 0){
        setresults("ปกติ")
      }
    }
  }, [collect,ans10]);

  useEffect(() => {
    if (ans10) {
      setCollect(true);
    }
  }, [ans10,results]);

  const handleSubmit = () => {
    setShow(true);
    const data = [ans10,collect,results]
    dispatch(formAction.add(data))
  };
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 10 การคัดกรองการกลั้นปัสสาวะ</h2>
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
      <ShowResultPopup
        title='ผลการคัดกรองการกลั้นปัสสาวะ'
        result={results}
        show={show}
        onClick={()=>formAction.upadateExa10Urination([visId,ans10,results,collect])}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}
