import React, { useEffect, useState } from "react";
import "../../genaralConfig.css";
import "../form-style.css";
import "./Sections1.css";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms1p5.action";

export default function Sections1_5() {
  const forms1p5Reducer = useSelector(({ forms1p5Reducer }) => forms1p5Reducer);
  const peopleID = useSelector(({ forms1p1Reducer }) => forms1p1Reducer.peopleID);
  const dispatch = useDispatch();

  const [drugAllergy, setdrugAllergy] = useState(forms1p5Reducer.drugAllergy);
  const [foodAllergy, setfoodAllergy] = useState(forms1p5Reducer.foodAllergy);

  const [food, setfood] = useState("");
  const [drug, setdrug] = useState("");
  const [foods, setfoods] = useState(forms1p5Reducer.foods); //array
  const [drugs, setdrugs] = useState(forms1p5Reducer.drugs); //array

  const confirmdrug = () => {
    formAction.createDrug([peopleID, drug])
    drug && setdrugs([...drugs, drug]);
    setdrug("");
  };
  const confirmfood = () => {
    formAction.createFood([peopleID, food])
    food && setfoods([...foods, food]);
    setfood("");
  };

  const handleSubmit = (e) => {
    drugAllergy===null && emptyValue()
    foodAllergy===null && emptyValue()
    drugAllergy=="drugallergic" && drugs.length==0 && emptyValue()
    foodAllergy=="foodallergic" && foods.length==0 && emptyValue()
    const data = [drugAllergy, drugs, foodAllergy, foods];
    dispatch(formAction.add(data));

    function emptyValue(){
      e.preventDefault(); 
      alert('กรุณากรอกข้อมูลให้ครบทุกข้อ'); 
      // return;
    }
  };

  const [disabled, setdisabled] = useState(false)
  const [disabled2, setdisabled2] = useState(false)

  useEffect(() => {
    drugs.length>0 && setdisabled(true)
    drugs.length==0 && setdisabled(false)
  }, [drugs]);

  useEffect(() => {
    foods.length>0 && setdisabled2(true)
    foods.length==0 && setdisabled2(false)
  }, [foods]);

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-12">
              <p>
                <span className="text-danger">*</span>
                <strong>ประวัติการแพ้ยา</strong>
              </p>
            </div>
            <RadioGroup
              className="pl-5"
              aria-label="drugAllergy"
              name="drugAllergy"
              defaultValue={drugAllergy}
              onChange={(event) => setdrugAllergy(event.target.value)}
            >
              <FormControlLabel
                value="drugallergic"
                control={<Radio color="primary" />}
                label="แพ้ยา"
              />
              {drugAllergy === "drugallergic" ? (
                <div className="row">
                  <div className="col-8">
                    <TextField
                      id="outlined-basic"
                      label="ระบุชื่อยา"
                      variant="outlined"
                      value={drug}
                      onChange={(e) => setdrug(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      className="btn btn-secondary btn-md"
                      onClick={confirmdrug}
                    >
                      เพิ่ม
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
              <FormControlLabel
                value="drugnoallergic"
                control={<Radio color="primary" />}
                label="ไม่แพ้ยา"
                disabled={disabled}
              />
              <FormControlLabel
                value="drugnotsure"
                control={<Radio color="primary" />}
                label="ไม่ทราบ/ไม่แน่ใจ"
                disabled={disabled}
              />
            </RadioGroup>
            <div className="col-12">
              <ul>
                {drugs.map((value, index) => {
                  let i = index
                  return <li key={index}> {`${index} ${value}`} 
                  <span> <button onClick={()=>{drugs.splice(index, 1); console.log('index: ', index); setdrugs([...drugs])}}>ลบ</button> </span> 
                  </li>;
                })}
              </ul>
            </div>
          </div>
          {/* row-1 */}
          <hr />
          <div className="row">
            <div className="col-12">
              <p>
                <span className="text-danger">*</span>
                <strong>ประวัติการแพ้อาหาร</strong>
              </p>
            </div>
            <RadioGroup
              className="pl-5"
              aria-label="foodAllergy"
              name="foodAllergy"
              defaultValue={foodAllergy}
              onChange={(event) => setfoodAllergy(event.target.value)}
            >
              <FormControlLabel
                value="foodallergic"
                control={<Radio color="primary" />}
                label="แพ้อาหาร"
              />
              {foodAllergy === "foodallergic" ? (
                <div className="row">
                  <div className="col-8">
                    <TextField
                      id="outlined-basic"
                      label="ระบุชื่ออาหาร"
                      variant="outlined"
                      value={food}
                      onChange={(e) => setfood(e.target.value)}
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className="col-4">
                    <button
                      type="button"
                      className="btn btn-secondary btn-md"
                      onClick={confirmfood}
                    >
                      เพิ่ม
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
              <FormControlLabel
                value="foodnoallergic"
                control={<Radio color="primary" />}
                label="ไม่แพ้อาหาร"
                disabled={disabled2}
              />
              <FormControlLabel
                value="foodnotsure"
                control={<Radio color="primary" />}
                label="ไม่ทราบ/ไม่แน่ใจ"
                disabled={disabled2}
              />
            </RadioGroup>
            <div className="col-12">
              <ul>
                {foods.map((value, index) => {
                  return <li key={index}> {`${index} ${value}`} 
                  <span> <button onClick={()=>{foods.splice(index, 1); setfoods([...foods])}}>ลบ</button> </span> 
                  {/* <span> <button onClick={()=>{diseases.splice(index, 1); console.log('index: ', index); setdiseases([...diseases])}}>ลบ</button> </span> */}
                  
                  </li>;
                })}
              </ul>
            </div>
          </div>
          {/* row-2 */}
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec1-page4">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <Link to="/sec1-page6">
            <button
              type="button"
              className="btn form-btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              ถัดไป
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
