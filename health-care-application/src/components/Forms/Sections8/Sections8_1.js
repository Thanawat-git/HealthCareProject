import React, {useEffect, useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, makeStyles } from '@material-ui/core';
import { Modal, Button } from "react-bootstrap";
import '../form-style.css'
import '../../genaralConfig.css'
import './Sections8.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import * as formAction from "../../../actions/forms8.action";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function Sections8_1() {
  const forms8Reducer = useSelector(({forms8Reducer}) => forms8Reducer)
  const peopleID = useSelector(({searchEld})=>searchEld.selectEld.ELD_ID_NUMBER)
  const dispatch = useDispatch()
  const classes = useStyles();

  const [ans8_1, setAns8_1] = useState(forms8Reducer.ans8_1);
  const [ans8_2, setAns8_2] = useState(forms8Reducer.ans8_2);
  const [collect, setCollect] = useState(forms8Reducer.collect);
  const [results, setresults] = useState(forms8Reducer.results);
  const [show, setShow] = useState(false);
  const [linkTo9Q, setlinkTo9Q] = useState(false)

  useEffect(() => {
    if(ans8_1 && ans8_2){
      setCollect(true)
    }
  }, [ans8_1,ans8_2])
  useEffect(() => {
    let count = 0
    if(collect){
      count = parseInt(ans8_1)+parseInt(ans8_2)
      if(count>0){
        setresults('มีความเสี่ยงหรือมีแนวโน้มที่จะเป็นโรคซึมเศร้า')
        setlinkTo9Q(true)
      } else {
        setresults('ปกติ')
        setlinkTo9Q(false)
      }
    }
  }, [collect,ans8_1,ans8_2])

  const handleSubmit = ()=>{
    setShow(true)
    const data = [ans8_1,ans8_2,collect,results]
    dispatch(formAction.add(data))

  }

  return (
    <div className="css-form">
      <h1>ข้อมูลของผู้สูงอายุ</h1>
      <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
        <h2>ส่วนที่ 8 การคัดกรองโรคซึมเศร้า</h2>
        <div className="question">
          {/* content */}
          <div className="row">
            <div className="col-12">
              <p>1. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกหดหู่ เศร้า หรือท้อแท้สิ้นหวัง</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions8.1' name='questions8.1' value={ans8_1} onChange={(e)=>setAns8_1(e.target.value)}>
              <FormControlLabel className="radio-size" value='1'  control={<Radio color="primary" />} label="มี" />
              <FormControlLabel className="radio-size" value='0' control={<Radio color="primary" />} label="ไม่มี" />
            </RadioGroup>
            </div>
          </div>
          <hr/>
          {/* row-1 */}

          <div className="row">
            <div className="col-12">
              <p>2. ช่วง 2 สัปดาห์ที่ผ่านมา ผู้สูงอายุรู้สึกทำอะไรก็ไม่เพลิดเพลิน</p>
            </div>
            <div className="col-12">
            <RadioGroup className="pl-20" aria-label='questions8.2' name='questions8.2' value={ans8_2} onChange={(e)=>setAns8_2(e.target.value)}>
              <FormControlLabel className="radio-size" value='1'  control={<Radio color="primary" />} label="มี" />
              <FormControlLabel className="radio-size" value='0' control={<Radio color="primary" />} label="ไม่มี" />
            </RadioGroup>
            </div>
          </div>
          <hr/>
          {/* row-2 */}
          
          {/* question */}
        </div>

        {/* bt */}
        <Link to="/mainmenu">
        <div className="row justify-content-between">
          <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            <button type="button" className="btn form-btn btn-primary btn-lg" onClick={handleSubmit} >ถัดไป</button>
        </div>
        </Link>
      </form>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ผลการประเมินโรคซึมเศร้า</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12 col-xl-3 title-result">
              <p> ผลการประเมิน </p>
            </div>
            <div className="col-12 col-xl-9 result-result">
              <strong>
                <p> {results} </p>
              </strong>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {linkTo9Q ?
          <Link to="/sec8-9q" className={classes.root}>
            <Button variant="primary" block onClick={()=>formAction.updateDepressionScreening([peopleID,ans8_1,ans8_2,linkTo9Q,results,collect])}>
              ทำแบบประเมินโรคซึมเศร้า 9Q
            </Button>
          </Link>
          :
          <Link to="/mainmenu" className={classes.root}>
            <Button variant="primary" block onClick={()=>formAction.updateDepressionScreening([peopleID,ans8_1,ans8_2,linkTo9Q,results,collect])}>
              กลับสู่หน้าเมนูหลัก
            </Button>
          </Link>
          }
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sections8_1;
