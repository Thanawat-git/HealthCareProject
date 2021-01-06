import React, { useEffect, useState } from "react";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { Modal, Button } from "react-bootstrap";
import "../form-style.css";
import "./Sections9.css";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../actions/forms9.action";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Sections9() {
  const classes = useStyles();

  const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
  const visId = useSelector(({ visitID }) => visitID.visiId);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    ans9_1: forms9Reducer.ans9_1,
    ans9_2: forms9Reducer.ans9_2,
    ans9_3: forms9Reducer.ans9_3,
    ans9_4: forms9Reducer.ans9_4,
    ans9_5: forms9Reducer.ans9_5,
    ans9_6: forms9Reducer.ans9_6,
    ans9_7: forms9Reducer.ans9_7,
    ans9_8: forms9Reducer.ans9_8,
    ans9_9: forms9Reducer.ans9_9,
    ans9_10: forms9Reducer.ans9_10,
    ans9_11: forms9Reducer.ans9_11,
    ans9_12: forms9Reducer.ans9_12,
    walk: forms9Reducer.walk,
    walkInfo: forms9Reducer.walkInfo,
    minute: forms9Reducer.minute,
    second: forms9Reducer.second,
  });
  const {
    ans9_1,
    ans9_2,
    ans9_3,
    ans9_4,
    ans9_5,
    ans9_6,
    ans9_7,
    ans9_8,
    ans9_9,
    ans9_10,
    ans9_11,
    ans9_12,
    walk,
    walkInfo,
    minute,
    second,
  } = state;
  const handleChange = (event) => {
    console.log(event.target.name, " ", event.target.value);
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const [collect, setCollect] = useState(forms9Reducer.collect);
  const [collect1, setCollect1] = useState(forms9Reducer.collect);
  const [collect2, setCollect2] = useState(forms9Reducer.collect);
  const [result1, setresult1] = useState(forms9Reducer.result1);
  const [result2, setresult2] = useState(forms9Reducer.result2);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(forms9Reducer.count);

  useEffect(() => {
    let c = 0;
    if (
      ans9_1 &&
      ans9_2 &&
      ans9_3 &&
      ans9_4 &&
      ans9_5 &&
      ans9_6 &&
      ans9_7 &&
      ans9_8 &&
      ans9_9 &&
      ans9_10 &&
      ans9_11 &&
      ans9_12
    ) {
      setCollect1(true);
    }
    if (collect1) {
      c =
        parseInt(ans9_1) +
        parseInt(ans9_2) +
        parseInt(ans9_3) +
        parseInt(ans9_4) +
        parseInt(ans9_5) +
        parseInt(ans9_6) +
        parseInt(ans9_7) +
        parseInt(ans9_8) +
        parseInt(ans9_9) +
        parseInt(ans9_10) +
        parseInt(ans9_11) +
        parseInt(ans9_12);
      setCount(c);
      if (c >= 4) {
        setresult1("เสี่ยงต่อการพลัดตกหกล้ม");
      } else {
        if (ans9_1 == 1 || ans9_3 == 1 || ans9_6 == 1) {
          setresult1("เสี่ยงต่อการพลัดตกหกล้ม");
        } else {
          setresult1("ไม่มีความเสี่ยงต่อการพลัดตกหกล้ม");
        }
      }
    }
  }, [
    collect1,
    ans9_1,
    ans9_2,
    ans9_3,
    ans9_4,
    ans9_5,
    ans9_6,
    ans9_7,
    ans9_8,
    ans9_9,
    ans9_10,
    ans9_11,
    ans9_12,
  ]);

  useEffect(() => {
    if (collect1 && collect2) {
      setCollect(true);
    }
  }, [collect1, collect2]);

  useEffect(() => {
    walk && setCollect2(true);
    if (collect2) {
      if (walk == "เดินไม่ได้") {
        setresult2(
          "ผู้สูงอายุไม่สามารถเดินได้ ไม่มีความเสี่ยงต่อการพลัดตกหกล้ม"
        );
      } else {
        if (second < 10) {
          setresult2("ปกติ");
        } else if (second >= 10 && second <= 29) {
          setresult2("เสี่ยงต่อการพลัดตกหกล้มปานกลาง");
        } else if (second >= 30) {
          setresult2("เสี่ยงต่อการพลัดตกหกล้มสูง");
        }
      }
    }
  }, [collect2, walk, walkInfo, minute, second]);

  const handleSubmit = () => {
    setShow(true);
    const data = [
      ans9_1,
      ans9_2,
      ans9_3,
      ans9_4,
      ans9_5,
      ans9_6,
      ans9_7,
      ans9_8,
      ans9_9,
      ans9_10,
      ans9_11,
      ans9_12,
      collect,
      result1,
      count,
      walk,
      walkInfo,
      minute,
      second,
      result2,
    ];
    dispatch(formAction.add(data));
  };

  return (
    <div className="css-form">
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
        <h4 style={{ marginLeft: 10, marginTop: 10 }}>
          การคัดกรองความเสี่ยงต่อการพลัดตกหกล้ม
        </h4>
        <div className="question">
          <p>เคยพลัดตกหกล้มในช่วง 1 ปีที่ผ่านมา</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_1"
            name="ans9_1"
            value={ans9_1}
            onChange={handleChange}
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
          <p>ใช้ไม้เท้าหรืออุปกรณ์ช่วยเดิน</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_2"
            name="ans9_2"
            value={ans9_2}
            onChange={handleChange}
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
          <p>บางครั้งมีความรู้สึกว่าเดินไม่ค่อยมั่นคง</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_3"
            name="ans9_3"
            value={ans9_3}
            onChange={handleChange}
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
          <p>ต้องจับเฟอร์นิเจอร์เพื่อประคองตนเองขณะเดินในบ้าน</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_4"
            name="ans9_4"
            value={ans9_4}
            onChange={handleChange}
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
          <p>ต้องใช้มือดันตัวเองขึ้นเวลาลุกจากเก้าอี้</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_5"
            name="ans9_5"
            value={ans9_5}
            onChange={handleChange}
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
          <p>มีความกังวลว่าตนเองจะหกล้ม</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_6"
            name="ans9_6"
            value={ans9_6}
            onChange={handleChange}
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
          <p>มีปัญหาเวลาก้าวขึ้นขอบฟุตบาท</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_7"
            name="ans9_7"
            value={ans9_7}
            onChange={handleChange}
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
          <p>ต้องรีบเร่งเข้าห้องน้ำเมื่อปวดปัสสาวะหรืออุจจาระ</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_8"
            name="ans9_8"
            value={ans9_8}
            onChange={handleChange}
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
          <p>มีอาการชาที่ฝ่าเท้า</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_9"
            name="ans9_9"
            value={ans9_9}
            onChange={handleChange}
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
          <p>กินยาที่ทำให้เวียนหัวหรือเหนื่อยง่ายกว่าปกติ</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_10"
            name="ans9_10"
            value={ans9_10}
            onChange={handleChange}
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
          <p>กินยานอนหลับหรือยาแก้เครียด</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_11"
            name="ans9_11"
            value={ans9_11}
            onChange={handleChange}
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
          <p>รู้สึกเศร้าหรือหดหู่</p>
          <RadioGroup
            className="pl-10"
            aria-label="ans9_12"
            name="ans9_12"
            value={ans9_12}
            onChange={handleChange}
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
          <h4>
            <b>ประเมินสมรรถภาพทางกาย</b>
          </h4>
          <h4 style={{ marginLeft: 10 }}>การเดิน</h4>
          <RadioGroup
            className="pl-10"
            aria-label="walk"
            name="walk"
            value={walk}
            onChange={handleChange}
          >
            <FormControlLabel
              className="radio-size"
              value="เดินได้ด้วยตัวเอง"
              control={<Radio color="primary" />}
              label="เดินได้ด้วยตัวเอง"
            />
            <FormControlLabel
              className="radio-size"
              value="เดินโดยใช้อุปกรณ์"
              control={<Radio color="primary" />}
              label="เดินโดยใช้อุปกรณ์"
            />
            {walk === "เดินโดยใช้อุปกรณ์" && (
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="useEquipment">เลือกอุปกรณ์</InputLabel>
                <Select
                  name="walkInfo"
                  id="useEquipment"
                  onChange={handleChange}
                  value={walkInfo}
                >
                  {/* <MenuItem value="">ไม่เลือก</MenuItem> */}
                  <MenuItem value="ไม้เท้า">ไม้เท้า</MenuItem>
                  <MenuItem value="ไม้ค้ำยืน">ไม้ค้ำยืน</MenuItem>
                  <MenuItem value="ไม้เท้าแบบ3ขา">ไม้เท้าแบบ 3 ขา</MenuItem>
                  <MenuItem value="ไม้เท้าแบบ4ขา">ไม้เท้าแบบ 4 ขา</MenuItem>
                </Select>
              </FormControl>
            )}
            <FormControlLabel
              className="radio-size"
              value="เดินไม่ได้"
              control={<Radio color="primary" />}
              label="เดินไม่ได้"
            />
            {walk === "เดินไม่ได้" ? (
              <TextField
                id="outlined-basic"
                defaultValue={walkInfo}
                name="walkInfo"
                onChange={handleChange}
                label="ระบุสาเหตุ"
                variant="outlined"
                size="small"
              />
            ) : (
              ""
            )}
          </RadioGroup>

          {(walk == "เดินได้ด้วยตัวเอง" || walk == "เดินโดยใช้อุปกรณ์") && (
            <React.Fragment>
              <p>Time Up & Go</p>
              <div className="row">
                <div className="col-6">
                  <OutlinedInput
                    name="minute"
                    defaultValue={minute}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">นาที</InputAdornment>
                    }
                    fullWidth
                  />
                </div>
                <div className="col-6">
                  <OutlinedInput
                    name="second"
                    defaultValue={second}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">วินาที</InputAdornment>
                    }
                    fullWidth
                  />
                </div>
              </div>
            </React.Fragment>
          )}
        </div>

        {/* bt */}
        <div className="row justify-content-between">
          <Link to="./mainmenu">
            <button type="button" className="btn form-btn btn-back btn-lg">
              ย้อนกลับ
            </button>
          </Link>
          {/* <Link to="./sec9-2"> */}
          <button
            type="button"
            className="btn form-btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            ถัดไป
          </button>
          {/* </Link> */}
        </div>
      </form>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ผลการประเมิน</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12 col-xl-3 title-result">
              <p> ความเสี่ยงต่อการพลัดตกหกล้ม </p>
            </div>
            <div className="col-12 col-xl-9 result-result">
              <strong>
                <p> {result1} </p>
              </strong>
            </div>
            <div className="col-12 col-xl-3 title-result">
              <p> ประเมินผลการเดิน </p>
            </div>
            <div className="col-12 col-xl-9 result-result">
              <strong>
                <p> {result2} </p>
              </strong>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/mainmenu/sec9-2" className={classes.root}>
            <Button
              variant="primary"
              block
              onClick={() =>
                formAction.updateExa9BoneMuscle([
                  visId,
                  ans9_1,
                  ans9_2,
                  ans9_3,
                  ans9_4,
                  ans9_5,
                  ans9_6,
                  ans9_7,
                  ans9_8,
                  ans9_9,
                  ans9_10,
                  ans9_11,
                  ans9_12,
                  result1,
                  walk,
                  walkInfo,
                  minute,
                  second,
                  result2,
                  collect,
                ])
              }
            >
              ทำแบบประเมินคัดกรองโรคข้อเข่าเสื่อม
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
