import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms6.action";

export default function Sections6() {
  const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
  const visId = useSelector(({ visitID }) => visitID.visiId);
  const dispatch = useDispatch();
  const [ans6_1, setAns6_1] = useState(forms6Reducer.ans6_1);
  const [ans6_2, setAns6_2] = useState(forms6Reducer.ans6_2);
  const [ans6_3, setAns6_3] = useState(forms6Reducer.ans6_3);
  const [ans6_4, setAns6_4] = useState(forms6Reducer.ans6_4);
  const [ans6_5, setAns6_5] = useState(forms6Reducer.ans6_5);
  const [ans6_6, setAns6_6] = useState(forms6Reducer.ans6_6);
  const [ans6_7, setAns6_7] = useState(forms6Reducer.ans6_7);
  const [ans6_8, setAns6_8] = useState(forms6Reducer.ans6_8);
  const [ans6_9, setAns6_9] = useState(forms6Reducer.ans6_9);
  const [ans6_10, setAns6_10] = useState(forms6Reducer.ans6_10);


  const [resultsTai, setresultsTai] = useState(forms6Reducer.resultsTai);
  const [group, setgroup] = useState(forms6Reducer.group);
  const [collect, setCollect] = useState(forms6Reducer.collect);
  const [count, setCount] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (collect) {
      const countNum =
        parseInt(ans6_1) +
        parseInt(ans6_2) +
        parseInt(ans6_3) +
        parseInt(ans6_4) +
        parseInt(ans6_5) +
        parseInt(ans6_6) +
        parseInt(ans6_7) +
        parseInt(ans6_8) +
        parseInt(ans6_9) +
        parseInt(ans6_10);
      setCount(countNum);
      if (countNum <= 4) {
        setgroup(3);
        setresultsTai("คะแนนของคุณจัดอยู่ในกลุ่ม "+ group +" ต้องทำแบบประเมิน TAI Classified")
      } else if (countNum >= 5 && countNum <= 11) {
        setgroup(2);
        setresultsTai("คะแนนของคุณจัดอยู่ในกลุ่ม "+ group +" ต้องทำแบบประเมิน TAI Classified")
      } else if (countNum > 12) {
        setgroup(1);
        setresultsTai("คะแนนของคุณจัดอยู่ในกลุ่ม "+ group +" ไม่ต้องทำแบบประเมิน TAI Classified")
      }
    }
  }, [
    collect,
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
    group,
    resultsTai
  ]);


  useEffect(() => {
    if (
      ans6_1 &&
      ans6_2 &&
      ans6_3 &&
      ans6_4 &&
      ans6_5 &&
      ans6_6 &&
      ans6_7 &&
      ans6_8 &&
      ans6_9 &&
      ans6_10
    ) {
      setCollect(true);
    }
  }, [
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
    collect,
    resultsTai,
  ]);

  const handleSubmit = () => {
    setShow(true);
    const data = [
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
      group,
      collect,
      resultsTai,
    ];
    dispatch(formAction.add(data));
  };
  const saveDataToServer = () => {
  formAction.updateAilityInLife([ans6_1,ans6_2,ans6_3,ans6_4,ans6_5,ans6_6,ans6_7,ans6_8,ans6_9,ans6_10,count,group,collect,visId])
};
  return (
    <div className="css-form">
      <form className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ</h2>
        <div className="question">
          {/* content */}
          <p>กินอาหารได้เอง เมื่อเตรียมสำรับไว้ให้ต่อหน้า</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.1"
            name="questions6.1"
            value={ans6_1}
            onChange={(e) => setAns6_1(e.target.value)}
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
            onChange={(e) => setAns6_2(e.target.value)}
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
            onChange={(e) => setAns6_3(e.target.value)}
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
            onChange={(e) => setAns6_4(e.target.value)}
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
            onChange={(e) => setAns6_5(e.target.value)}
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
            onChange={(e) => setAns6_6(e.target.value)}
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
            onChange={(e) => setAns6_7(e.target.value)}
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
          <hr />
          <p>การอาบน้ำ</p>
          <RadioGroup
            className="pl-20"
            aria-label="questions6.8"
            name="questions6.8"
            value={ans6_8}
            onChange={(e) => setAns6_8(e.target.value)}
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
            onChange={(e) => setAns6_9(e.target.value)}
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
            onChange={(e) => setAns6_10(e.target.value)}
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

        {/* bt */}
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
        title="ผลส่วนที่ 6 การประเมินสมรรถนะ / ความสามารถ ในการทำกิจวัตรประจำ"
        result={resultsTai}
        show={show}
         onClick={saveDataToServer}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
}
