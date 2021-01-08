import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShowHistory from "./ShowHistory";
import { FormControl, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import * as historyAction from "../../../../actions/history.action";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
const testArr = []
export default function MedicalHistory() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const historyReducer = useSelector(({historyReducer}) => historyReducer)
    const [isFetching, setisFetching] = useState(true)

    useEffect(() => {
      dispatch(historyAction.getAllAssessmentForms())
      setTimeout(() => {
        setisFetching(historyReducer.isFetching)
        // console.log('isFetching ',isFetching)
      }, 500);
    }, [])
    useEffect(() => {
      // console.log('isFetching ',isFetching)
      if(!testArr.length){
        // console.log('Arr is Emtry')
        if(!historyReducer.inError && !historyReducer.isFetching){
          historyReducer.result.map(v=>{
            testArr.push({VIS_ID:v.VIS_ID, VIS_DATE:v.VIS_DATE,ELD_ID_NUMBER:v.ELD_ID_NUMBER,
              ELD_NAME:`${v.ELDER.ELD_FIRSTNAME} ${v.ELDER.ELD_LASTNAME}`
            })
          })
          // console.log('testArr ',testArr)
        }
      }
      historyReducer.resultSelected!==null && console.log('historyReducer.resultSelected not null')
      return () => {
        setisFetching(true)
      }
    }, [isFetching])
    const [state, setState] = useState({
        y1:'',y2:'',m1:'',m2:'',keyword:'',
    })
    const {y1,y2,m1,m2,keyword,} = state
    const [reArr, setreArr] = useState(testArr) //array for show

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleChange = (event) => {setState({...state,[event.target.name]:event.target.value})};
   
  //---------------------------------Years List------------------------------------------//
  const [years, setYears] = useState([])
  useEffect(() => {
    let tmp = []
    const d = new Date();
    const y = d.getFullYear();
    // console.log('year ', y)
    for(let i=y+543; i>=2558; i--){
      tmp.push(i)
    }
    setYears(tmp)
  }, [])
  //---------------------------------Years List------------------------------------------//

//-----------------------------------Filter By Date-----------------------------------------------//
    useEffect(() => {
        if(y1!=='' && y2!==''){ //both year have
          let tempArr = []
          for(let i=0; i<testArr.length; i++){
            let c = testArr[i].VIS_DATE.split("-",2) // c[0]=year, c[1]=month
            y1<=y2 
            ?(parseInt(y1)<=parseInt(c[0]) && parseInt(c[0])<=parseInt(y2)) && tempArr.push(testArr[i]) // between y1 to y2 case y1 over y2
            :(parseInt(y1)>=parseInt(c[0]) && parseInt(c[0])>=parseInt(y2)) && tempArr.push(testArr[i]) // between y1 to y2 case y2 over y1
          }
          if(m1!='' || m2!=''){ //ถ้ามีการระบุเดือน
            let tempArr2 = []
            let tempArr3 = []
            let tempArr4 = []
            for(let i=0; i<tempArr.length; i++){
              let c = tempArr[i].VIS_DATE.split("-",2)
              if(y1===y2){ // same year
                // console.log('ปีตรงกัน')
                if(m1===m2){
                  m1===c[1] && tempArr2.push(tempArr[i])
                } else if(m1>m2){
                  (parseInt(m1)>=parseInt(c[1]) && parseInt(c[1])>=parseInt(m2)) && tempArr2.push(tempArr[i])
                } else if(m1<m2){
                  (parseInt(m1)<=parseInt(c[1]) && parseInt(c[1])<=parseInt(m2)) && tempArr2.push(tempArr[i])
                }
                searchByKeyword(tempArr2)
                // setreArr(tempArr2)
              } else if (parseInt(y1)>parseInt(y2)){
                // console.log('ปีไม่ตรงกัน ปีแรกมากกว่าปีสอง')
                c[0]===y1&&parseInt(c[1])<=parseInt(m1)&&tempArr3.push(tempArr[i]) //ทุกเดือนที่น้อยกว่าหรือเท่ากับ m1
                c[0]===y2&&parseInt(c[1])>=parseInt(m2)&&tempArr3.push(tempArr[i]) //ทุกเดือนที่มากกว่าหรือเท่ากับ m2
                i<testArr.length && searchByKeyword(tempArr3) // set ค่าเมื่อวน loop ครบ และใช้ set คัดตัวซ้ำออก
              } else if(parseInt(y1)<parseInt(y2)) {
                // console.log('ปีไม่ตรงกัน ปีแรกน้อยกว่าปีสอง')
                c[0]===y1&&parseInt(c[1])>=parseInt(m1)&&tempArr4.push(tempArr[i]) //ทุกเดือนที่มากกว่าหรือเท่ากับ m1
                c[0]===y2&&parseInt(c[1])<=parseInt(m2)&&tempArr4.push(tempArr[i]) //ทุกเดือนที่น้อยกว่าหรือเท่ากับ m2
                i<testArr.length && searchByKeyword(tempArr4)
              }
            }
          } else {
            searchByKeyword(tempArr)
            // setreArr(tempArr)
          }
        } else {
          if(y1!=='' || m1!==''){ // y1 or m1 have
            setShowArr(y1,m1)
          } else if(y2!=='' || m2!=='') { // y2 or m2 have
            setShowArr(y2,m2)
          } else {
            searchByKeyword(testArr)
            // setreArr(testArr)
          }
        }
        
    }, [y1,y2,m1,m2,keyword,isFetching])
    const setShowArr = (y, m)=> {
      let tempArr = []
      for(let i=0; i<testArr.length; i++){
        let c = testArr[i].VIS_DATE.split("-",2) // c[0]=year, c[1]=month
        y=='' && c[1]==m && tempArr.push(testArr[i]) // only month1 have
        m=='' && c[0]==y && tempArr.push(testArr[i]) // only year1 have
        y!=='' && m!=='' && c[0]==y && c[1]==m && tempArr.push(testArr[i]) // both feild have
      }
      searchByKeyword(tempArr)
      // setreArr(tempArr)
    }
//-----------------------------------Filter By Date-----------------------------------------------//

//-----------------------------------Filter By Keyword-----------------------------------------------//
    const searchByKeyword = (x)=>{
      let r = x.filter(value=>value.ELD_NAME.includes(keyword))
      setreArr([...(new Set(r.map(v=>v)))]) // set ค่าเมื่อวน loop ครบ และใช้ set คัดตัวซ้ำออก
    }
//-----------------------------------Filter By Keyword-----------------------------------------------//
    
  return (
    <React.Fragment>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">ประวัติการตรวจ</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Filter */}
              <h6>ช่วงเวลา</h6>
              <FormControl className={classes.formControl}>
                <InputLabel>ปี</InputLabel>
                <Select
                open={open1}
                onClose={()=>setOpen1(false)}
                onOpen={()=>setOpen1(true)}
                name="y1"
                value={y1}
                onChange={handleChange}
                >
                <MenuItem value=""><em>All</em></MenuItem>
                {years.map(v=>{return (<MenuItem value={`${v}`}>{v}</MenuItem>)})}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>เดือน</InputLabel>
                <Select
                open={open2}
                onClose={()=>setOpen2(false)}
                onOpen={()=>setOpen2(true)}
                name="m1"
                value={m1}
                onChange={handleChange}
                >
                <MenuItem value=""><em>All</em></MenuItem>
                {Months.map((value,index)=>{
                  if(index+1<=9){
                    return <MenuItem value={`0${index+1}`}>{value}</MenuItem>
                  } else {
                    return <MenuItem value={`${index+1}`}>{value}</MenuItem>
                  }
                })}
                </Select>
            </FormControl>
            <strong style={{ fontSize: 50 }}> <span>-</span> </strong>
            <FormControl className={classes.formControl}>
                <InputLabel>ปี</InputLabel>
                <Select
                open={open3}
                onClose={()=>setOpen3(false)}
                onOpen={()=>setOpen3(true)}
                name="y2"
                value={y2}
                onChange={handleChange}
                >
                <MenuItem value=""><em>All</em></MenuItem>
                {years.map(v=>{return (<MenuItem value={`${v}`}>{v}</MenuItem>)})}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>เดือน</InputLabel>
                <Select
                open={open4}
                onClose={()=>setOpen4(false)}
                onOpen={()=>setOpen4(true)}
                name="m2"
                value={m2}
                onChange={handleChange}
                >
                <MenuItem value=""><em>All</em></MenuItem>
                {Months.map((value,index)=>{
                  if(index+1<=9){
                    return <MenuItem value={`0${index+1}`}>{value}</MenuItem>
                  } else {
                    return <MenuItem value={`${index+1}`}>{value}</MenuItem>
                  }
                })}
                </Select>
            </FormControl>
            <TextField
            style={{ marginTop: 9, minWidth: '36%'}}
            label="ค้นหาโดยการกรอกชื่อ-นามสกุล"
            onChange={handleChange}
            name="keyword"
            value={keyword}
            InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>),}}
            // fullWidth
            />
            </div>
            
          </div>
        </div>
        <div className="table-content">
        <table className="table table-hover" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">รหัสผู้สูงอายุ</th>
              <th scope="col">ชื่อ - นามสกุล</th>
              <th scope="col">วันที่</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {reArr.map((value, index) => {
              return (
                <React.Fragment>
                <tr>
                  <td> {index + 1} </td> 
                  <td> {value.ELD_ID_NUMBER} </td>
                  <td> {value.ELD_NAME} </td>
                  <td> {value.VIS_DATE} </td>
                  {/* <td style={{ textAlign: "center" }}>
                    <button
                      // onClick={() => {}}
                      type="button"
                      className="btn btn-info"
                    >
                      แก้ไข
                    </button>
                    <span style={{ color: "grey" }}> | </span>
                    <ShowHistory value={value} />
                  </td> */}
                  <td> <ShowHistory value={value} /> </td>
                </tr>
                </React.Fragment>
                );
            })}
          </tbody>
        </table>
        </div>
      </section>
    </React.Fragment>
  );
}

const Months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];