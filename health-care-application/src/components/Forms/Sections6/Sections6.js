import React, { useState, useEffect } from "react";
import { RadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import "../form-style.css";
import "../../genaralConfig.css";
import ShowResultPopup from "../ResuleShowsPopUp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms6.action";
import * as formActionT from "../../../actions/formsTAI.action";

export default function Sections6() {
  const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
  const peopleID = useSelector(({searchEld})=>searchEld.selectEld.ELD_ID_NUMBER)
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
  const [ans6_Im, setAns6_Im] = useState(forms6Reducer.ans6_Im);
  const [ans6_Me, setAns6_Me] = useState(forms6Reducer.ans6_Me);
  const [ans6_Fe, setAns6_Fe] = useState(forms6Reducer.ans6_Fe);
  const [ans6_To, setAns6_To] = useState(forms6Reducer.ans6_To);
  const [results, setresults] = useState(forms6Reducer.results);
  const [resultsTai, setresultsTai] = useState(forms6Reducer.resultsTai);
  const [group, setgroup] = useState(forms6Reducer.group);
  const [groupT, setgroupT] = useState(forms6Reducer.groupT);
  const [collect, setCollect] = useState(forms6Reducer.collect);
  const [count, setCount] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    var x = document.getElementById("myDIV");
    x.style.display = "none";
    //x.style.display = "block";
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
        setresults(3);
        setgroup(3);
        x.style.display = "block";
      } else if (countNum >= 5 && countNum <= 11) {
        x.style.display = "block";
        setresults(2);
        setgroup(2);
      } else if (countNum > 12) {
        setresults(1);
        setgroup(1);
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
  ]);

  useEffect(() => {
    parseInt(ans6_Im);
    parseInt(ans6_Fe);
    parseInt(ans6_Me);
    parseInt(ans6_To);
    if (group == 2 || group == 3) {
      if (ans6_Im >=3) {
        //mobility
        if (ans6_Me >=4) {
          //confuse
          if (ans6_Me == 5 && ans6_To == 5 && ans6_Fe && ans6_Im == 5) {
            setgroupT('Group สปสช')
            setresultsTai(groupT + " : B5 ");
          } else if (ans6_Fe >= 4 && ans6_To >= 4) {
            setgroupT('Group สปสช')
            setresultsTai(groupT + " : B4 ");
          } else if (ans6_Fe <= 3 && ans6_To <= 3) {
            setgroupT('Group 1')
            setresultsTai(groupT + " : B3 ");
          }
        } else if (ans6_Me <=3) {
          if (ans6_Fe >= 4 && ans6_To >= 4) {
            setgroupT('Group 2')
            setresultsTai(groupT + " : C4 ");
          } else if (
            (ans6_Fe == 4 && ans6_To == 3) ||
            (ans6_Fe == 3 && ans6_To == 4)
          ) {
            setgroupT('Group 2')
            setresultsTai(groupT + " : C3 ");
          } else if (ans6_Fe <= 3 && ans6_To <= 3) {
            setgroupT('Group 2')
            setresultsTai(groupT + " : C2 ");
          }
        }
      } else if (ans6_Im <3) {
        if (ans6_Fe >= 4) {
          setgroupT('Group 3')
          setresultsTai(groupT + " : I3 ");
        } else if (ans6_Fe == 3) {
          setgroupT('Group 4')
          setresultsTai(groupT + " : I2 ");
        } else if (ans6_Fe <=2) {
          setgroupT('Group 4')
          setresultsTai(groupT + " : I1 ");
        }
      }
    }
  }, [resultsTai, ans6_Im, ans6_Fe, ans6_Me, ans6_To, groupT]);

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
    results,
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
      ans6_Im,
      ans6_Me,
      ans6_To,
      ans6_Fe,
      group,
      groupT,
      collect,
      results,
      resultsTai,
    ];
    dispatch(formAction.add(data));
  };
  const saveDataToServer = () => {
  formAction.updateAilityInLife([ans6_1,ans6_2,ans6_3,ans6_4,ans6_5,ans6_6,ans6_7,ans6_8,ans6_9,ans6_10,count,group,collect,peopleID])
  formActionT.updateTAI([peopleID,ans6_Im,ans6_Me,ans6_To,ans6_Fe,groupT,collect])
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

          <div id="myDIV">
            <h3>
              คะแนนของคุณจัดอยู่ในกลุ่ม {group} ต้องทำแบบประเมิน TAI Classified
            </h3>
            <hr />
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
