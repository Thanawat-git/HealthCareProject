import React, {useState} from 'react'
import { RadioGroup, Radio, FormControlLabel, Checkbox, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import '../form-style.css'
import './Sections9.css'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '15ch',
    height: '8ch'
  },
}));

export default function Sections9_2() {

    const [ans9_1, setAns9_1] = useState()
    const [ans9_2, setAns9_2] = useState()
    const [ans9_3, setAns9_3] = useState()
    const [ans9_4, setAns9_4] = useState()
    const [ans9_5, setAns9_5] = useState()
    const [ans9_6, setAns9_6] = useState()
    const [ans9_7, setAns9_7] = useState()
    const [ans9_8, setAns9_8] = useState()
    const [ans9_9, setAns9_9] = useState()
    const [ans9_10, setAns9_10] = useState()
    const [ans9_11, setAns9_11] = useState()
    const [ans9_12, setAns9_12] = useState()
    
    const [ans1, setAns1] = useState()
    const [ans2, setAns2] = useState()
    const [ans3, setAns3] = useState()
    const [ans4, setAns4] = useState()
    const [ans5, setAns5] = useState()

    const classes = useStyles();

    const [collect, setCollect] = useState();
    const [results, setresults] = useState();
    const [show, setShow] = useState(false);
    return (
      <div className="css-form">
        <form action="#" className="shadow-lg p-3 mb-5 bg-white rounded" >
          <h2>ส่วนที่ 9 สุขภาพกระดูกและกล้ามเนื้อ</h2>
          <h4>คัดกรองโรคข้อเข่าเสื่อม</h4>
          <div className="question">
          <p>1. ข้อเข่าฝืดตึงหลังตื่นนอนตอนเช้า &lt; 30 นาที</p>
          <RadioGroup aria-label='questions1' name='questions1' value={ans1} onChange={(e)=>setAns1(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>2. เสียงดังกรอบแกรบขณะเคลื่อนไหว</p>
          <RadioGroup aria-label='questions2' name='questions2' value={ans2} onChange={(e)=>setAns2(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>3. กดเจ็บที่กระดูกข้อเข่า</p>
          <RadioGroup aria-label='questions3' name='questions3' value={ans3} onChange={(e)=>setAns3(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>4. ข้อใหญ่ผิดรูป</p>
          <RadioGroup aria-label='questions4' name='questions4' value={ans4} onChange={(e)=>setAns4(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          <hr/>
          <p>5. ไม่พบข้ออุ่น</p>
          <RadioGroup aria-label='questions5' name='questions5' value={ans5} onChange={(e)=>setAns5(e.target.value)}>
            <FormControlLabel className="radio-size" value="R"  control={<Checkbox color="primary" />} label="ขวา" />
            <FormControlLabel className="radio-size" value="L" control={<Checkbox color="primary" />} label="ซ้าย" />
            <FormControlLabel className="radio-size" value="N" control={<Checkbox color="primary" />} label="ไม่ใช่" />
          </RadioGroup>
          {/* <hr/> */}
          
          </div>



        <h4>ประเมินสมรรถภาพทางกาย</h4>
          <div className="question">
              <div className="each-question">
                  <p>Time Up & Go</p>
                  <div className="form-check form-check-inline">
                      <div>
                      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              // value={values.min}
                              // onChange={handleChange('min')}
                              endAdornment={<InputAdornment position="end">นาที</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              // inputProps={{ 'aria-label': 'min', }}
                              // labelWidth={0}
                            />
                          </FormControl>
                      </div>
                      <div>
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              // value={values.sec}
                              // onChange={handleChange('sec')}
                              endAdornment={<InputAdornment position="end">วินาที</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              // inputProps={{ 'aria-label': 'sec', }}
                              // labelWidth={0}
                            />
                          </FormControl>
                      </div>
                  </div> 

                  <p>เสี่ยงต่อการพลัดตกหกล้มสูงจากการตรวจ Time Up & Go</p>
              </div>
          </div>
  
          {/* bt */}
          <div className="row justify-content-between">
            <button type="button" className="btn form-btn btn-back btn-lg">ย้อนกลับ</button>
            <button type="button" className="btn form-btn btn-primary btn-lg">ถัดไป</button>
          </div>
        </form>
      </div>
    );
}
