import React, { useEffect, useState } from "react";
import "../form-style.css";
import "./Sections1.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms1p6.action";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { SIMPLEDISEASE } from "../../../constants";

export default function Sections1_6() {
  const [open, setOpen] = useState(false); // open dialog
  const forms1p6Reducer = useSelector(({ forms1p6Reducer }) => forms1p6Reducer);
  const forms1p1Reducer = useSelector(({ forms1p1Reducer }) => forms1p1Reducer);
  const peopleID = useSelector(
    ({ forms1p1Reducer }) => forms1p1Reducer.peopleID
  );
  const dispatch = useDispatch();
  const [disease, setdisease] = useState(null);
  const [diseases, setdiseases] = useState(forms1p6Reducer.diseases);
  const [date, setdate] = useState(new Date());

  const confirm = () => {
    formAction.createDisease([peopleID, disease]);
    disease && setdiseases([...diseases, disease]);
    setdisease("");
    console.log(disease);
  };

  useEffect(() => {
    // setdisease('')
    console.log(disease);
  }, [disease]);

  const handleSubmit = () => {
    const data = [diseases, date];
    dispatch(formAction.add(data));
    setOpen(true);
  };

  const deletedisease = (index, value) => {
    console.log("index: ", index, " Disease: ", value);
    formAction.deleteDisease([peopleID, value]);
    diseases.splice(index, 1);
    setdiseases([...diseases]);
  };
  const createNewForm = (eldId) => {
    console.log("eldId ", eldId);
    const d = new Date();
    const visDate = `${d.getFullYear() + 543}-${
      d.getMonth() + 1
    }-${d.getDate()}`;
    const data = [visDate, eldId];
    dispatch(formAction.createVisitTable(data));
    dispatch(
      formAction.setSelectEldFromNewEld([
        forms1p1Reducer.firstname,
        forms1p1Reducer.lastname,
      ])
    );
    // formAction.updateLastVisDate(data);
  };

  return (
    <div className="css-form">
      <h1>แบบประเมินภาวะสุขภาพผู้สูงอายุ</h1>
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 1 ข้อมูลพื้นฐาน</h2>
        <div className="question">
          <div className="row">
            <div className="col-12">
              <p>
                <strong>โรคประจำตัว</strong>
              </p>
              <h>ถ้าหากพิมพ์ผิดสามารถกดลบได้</h>
            </div>
            <div className="col-9">
              <Autocomplete
                id="SimpleDisease"
                options={SIMPLEDISEASE}
                getOptionLabel={(option) => option.name}
                inputValue={disease}
                size="small"
                // freeSolo
                onInputChange={(event, value)=>setdisease(value)}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" />
                )}
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-secondary btn-md"
                onClick={confirm}
              >
                {" "}
                เพิ่ม
              </button>
            </div>
            <br />
            <div className="col-12" style={{ marginTop: 20 }}>
              <ol>
                {diseases.map((value, index) => {
                  return (
                    <div className="listItem">
                      <div className="">
                        <li key={index}> {`${value}`}</li>
                      </div>
                      <div className="">
                        <Button
                          variant="outlined"
                          color="secondary"
                          size="small"
                          onClick={() => deletedisease(index, value)}
                        >
                          ลบ
                        </Button>
                      </div>
                    </div>
                  );
                })}
                {}
              </ol>
            </div>
          </div>

          <br />
          {/* <div className="row justify-content-center">
            <div className="col-4">
              <strong>วันที่สำรวจ</strong>
            </div>
            <div className="col-6">
              <DatePicker
                dateFormat="dd/MM/yyyy"
                onChange={setdate}
                value={date}
              />
            </div>
          </div> */}
          {/* content */}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="/sec1-page5">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          <button
            type="button"
            className="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            สำเร็จ
          </button>
        </div>
      </form>
      <Dialog open={open} keepMounted onClose={() => setOpen(false)}>
        <DialogTitle>บันทึกข้อมูลผู้สูงอายุรายใหม่สำเร็จ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ท่านต้องการทำแบบประเมินภาวะสุขภาพผู้สูงอายุต่อหรือไม่?
          </DialogContentText>
        </DialogContent>
        <div className="links1p6">
          <Link to="/volunteerpage">
            <Button color="primary">กลับหน้าหลัก</Button>
          </Link>
          <Link to="/mainmenu">
            <Button
              color="primary"
              onClick={() => {
                createNewForm(peopleID);
              }}
            >
              ต้องการทำต่อ
            </Button>
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

const SimpleDisease = [
  { name: "ความดันโลหิตสูง" },
  { name: "เบาหวาน" },
  { name: "ไขมันในเส้นเลือดสูง" },
  { name: "โรคหัวใจ" },
  { name: "อัมพฤตษ์ อัมพาต" },
  { name: "หลอดเลือดในสมอง" },
  { name: "หลอดเลือดหัวใจ" },
  { name: "กระดูกพรุน" },
  { name: "ข้อเข่าเสื่อม/อักเสบ" },
  { name: "กระดูกทับเส้น" },
  { name: "กล้ามเนื้ออ่อนแรง/ชา" },
  { name: "เก๊าท์" },
  { name: "รูมาตอยด์" },
  { name: "ปวดเมื่อยกล้ามเนื้อ" },
  { name: "ไตเรื้อรัง" },
  { name: "นิ่วในไต" },
  { name: "ต่อมลูกหมากโต" },
  { name: "หอบหืด/หลอดลมตีบ/ภูมิแพ้/ไซนัส" },
  { name: "ปอด" },
  { name: "โรคกระเพาะ/กรดไหลย้อน/ลำไส้" },
  { name: "ริดสีดวง" },
  { name: "ตับ/ถุงน้ำดี" },
  { name: "โรคตา" },
  { name: "หูพิการ" },
  { name: "พิการ" },
  { name: "ลมชัก" },
  { name: "พากินสัน" },
  { name: "ไมเกรน" },
  { name: "โรคประสาท" },
  { name: "Hypothyroid" },
  { name: "มะเร็ง/เนื้องอก" },
  { name: "โลหิตจาง" },
];
