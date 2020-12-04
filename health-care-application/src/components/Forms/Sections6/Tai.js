import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/formsTAI.action";

export default function Sections6_Tai() {
  const formsTaiReducer = useSelector(({ formsTaiReducer }) => formsTaiReducer);
  const dispatch = useDispatch();
  const peopleID = useSelector(
    ({ searchEld }) => searchEld.selectEld.ELD_ID_NUMBER
  );
  const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);

  const [ans6_Im, setAns6_Im] = useState(formsTaiReducer.ans6_Im);
  const [ans6_Me, setAns6_Me] = useState(formsTaiReducer.ans6_Me);
  const [ans6_Fe, setAns6_Fe] = useState(formsTaiReducer.ans6_Fe);
  const [ans6_To, setAns6_To] = useState(formsTaiReducer.ans6_To);
  const [results, setresultsTai] = useState(formsTaiReducer.results);
  const [groupT, setgroupT] = useState(formsTaiReducer.groupT);

  const [collect, setCollect] = useState(formsTaiReducer.collect);
  //const [results, setresults] = useState(formsTaiReducer.results);
  const [show, setShow] = useState(false);

  useEffect(() => {
    parseInt(ans6_Im);
    parseInt(ans6_Fe);
    parseInt(ans6_Me);
    parseInt(ans6_To);
    if (collect) {
      if (ans6_Im >= 3) {
        //mobility
        if (ans6_Me >= 4) {
          //confuse
          if (ans6_Me == 5 && ans6_To == 5 && ans6_Fe && ans6_Im == 5) {
            setgroupT("Group สปสช");
            setresultsTai(groupT + " : B5 ");
          } else if (ans6_Fe >= 4 && ans6_To >= 4) {
            setgroupT("Group สปสช");
            setresultsTai(groupT + " : B4 ");
          } else if (ans6_Fe <= 3 && ans6_To <= 3) {
            setgroupT("Group 1");
            setresultsTai(groupT + " : B3 ");
          }
        } else if (ans6_Me <= 3) {
          if (ans6_Fe >= 4 && ans6_To >= 4) {
            setgroupT("Group 2");
            setresultsTai(groupT + " : C4 ");
          } else if (
            (ans6_Fe == 4 && ans6_To == 3) ||
            (ans6_Fe == 3 && ans6_To == 4)
          ) {
            setgroupT("Group 2");
            setresultsTai(groupT + " : C3 ");
          } else if (ans6_Fe <= 3 && ans6_To <= 3) {
            setgroupT("Group 2");
            setresultsTai(groupT + " : C2 ");
          }
        }
      } else if (ans6_Im < 3) {
        if (ans6_Fe >= 4) {
          setgroupT("Group 3");
          setresultsTai(groupT + " : I3 ");
        } else if (ans6_Fe == 3) {
          setgroupT("Group 4");
          setresultsTai(groupT + " : I2 ");
        } else if (ans6_Fe <= 2) {
          setgroupT("Group 4");
          setresultsTai(groupT + " : I1 ");
        }
      }
    }
  }, [collect, results, ans6_Im, ans6_Fe, ans6_Me, ans6_To, groupT]);

  useEffect(() => {
    if (ans6_Im && ans6_Me && ans6_To && ans6_Fe) {
      setCollect(true);
    }
  }, [ans6_Im, ans6_Me, ans6_To, ans6_Fe, collect, results]);

  const handleSubmit = () => {
    setShow(true);
    const data = [ans6_Im, ans6_Me, ans6_To, ans6_Fe, groupT, collect, results];
    dispatch(formAction.add(data));
  };

  const saveDataToServer = () => {
    formAction.updateTAI([
      peopleID,
      ans6_Im,
      ans6_Me,
      ans6_To,
      ans6_Fe,
      groupT,
      collect,
    ]);
  };
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>แบบประเมิน TAI Classified</h2>
        <div className="question">
          <p>Immobilize</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.Im"
            name="questions6.Im"
            value={ans6_Im}
            onChange={(e) => setAns6_Im(e.target.value)}
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
            onChange={(e) => setAns6_Me(e.target.value)}
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
            onChange={(e) => setAns6_Fe(e.target.value)}
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
            onChange={(e) => setAns6_To(e.target.value)}
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
        title="ผลการประเมิน TAI Classified"
        result={results}
        show={show}
        onClick={saveDataToServer}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}
