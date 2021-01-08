import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./elderly.css";
import { Link, Redirect, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as actionP5 from '../../actions/forms1p5.action'; // เรียกมาใช้งานในการ ลบ และ เพิ่ม อาหาร และ ยา
import * as actionP6 from '../../actions/forms1p6.action';
import * as actionP1 from '../../actions/forms1p1.action';
import { USERLOGIN } from "../../constants";

const useStyles = makeStyles({
    title: {
      textAlign: 'center',
      // minWidth: 350,
    },
});

export default function EditInfo() {
  const classes = useStyles();
  const elderlyReducer = useSelector(({elderlyReducer}) => elderlyReducer)
  
  const [state, setState] = useState({
    eid: elderlyReducer.resultSelected.ELD_ID_NUMBER,
    fName: elderlyReducer.resultSelected.ELD_FIRSTNAME,
    lName: elderlyReducer.resultSelected.ELD_LASTNAME,
    nName: elderlyReducer.resultSelected.ELD_AKA,
    phone: elderlyReducer.resultSelected.ELD_PHONE,
  })
  const {eid,fName,lName,nName,phone} = state
  const [foods, setfoods] = useState([])
  const [drugs, setdrugs] = useState([])
  const [diseases, setdiseases] = useState([])
  useEffect(() => {
    if(elderlyReducer.resultSelected.FOOD.length!=0){
      for(let i=0;i<elderlyReducer.resultSelected.FOOD.length;i++){
        foods.push(elderlyReducer.resultSelected.FOOD[i].FOOD_NAME)
      }
    }
    if(elderlyReducer.resultSelected.DRUG.length!=0){
      for(let i=0;i<elderlyReducer.resultSelected.DRUG.length;i++){
        drugs.push(elderlyReducer.resultSelected.DRUG[i].DRUG_NAME)
      }
    }
    if(elderlyReducer.resultSelected.DISEASE.length!=0){
      for(let i=0;i<elderlyReducer.resultSelected.DISEASE.length;i++){
        diseases.push(elderlyReducer.resultSelected.DISEASE[i].DIS_NAME)
      }
    }
  }, []);
  const [open, setOpen] = useState(false);
  const [food, setfood] = useState(null); // ชื่อโรคทีละตัว
  const [drug, setdrug] = useState(null); // ชื่อโรคทีละตัว
  const [disease, setdisease] = useState(null); // ชื่อโรคทีละตัว
  const [defineDialog,setdefineDialog] = useState('')
  const [editFillFood, seteditFillFood] = useState(false) // ใช้เปิด fill ให้ edit food
  const [editFillDrug, seteditFillDrug] = useState(false) // ใช้เปิด fill ให้ edit drug
  const [editFillDisease, seteditFillDisease] = useState(false) // ใช้เปิด fill ให้ edit disease
  const [indexFood, setIndexFood] = useState(null) // ใช้ระบุ fill ที่ต้องการแก้ไข
  const [indexDrug, setIndexDrug] = useState(null) // ใช้ระบุ fill ที่ต้องการแก้ไข
  const [indexDisease, setIndexDisease] = useState(null) // ใช้ระบุ fill ที่ต้องการแก้ไข

  const openDialog = (iden) =>{
    setOpen(true)
    setfood('')
    setdrug('')
    setdisease('')
    setdefineDialog(iden)
  }
  const editFood =(i)=> {
    food ? foods.splice(i,1,food) : foods.splice(i, 1)
    seteditFillFood(false)
  }
  const editDrug =(i)=> {
    drug ? drugs.splice(i,1,drug) : drugs.splice(i, 1)
    seteditFillDrug(false)
  }
  const editDisease =(i)=> {
    disease ? diseases.splice(i,1,disease) : diseases.splice(i, 1)
    seteditFillDisease(false)
  }
 
  const addItem = ()=>{
    if(defineDialog=='foods'){
      food && setfoods([...foods, food])
      actionP5.createFood([eid, food])
    }
    if(defineDialog=='drugs'){
      drug && setdrugs([...drugs, drug])
      actionP5.createDrug([eid, drug])
    }
    if(defineDialog=='diseases'){
      disease && setdiseases([...diseases, disease])
      actionP6.createDisease([eid, disease])
    }
  }
  useEffect(() => {
    setfood(null)
    console.log('food1 ',food)
    setdrug(null)
    console.log('disease ',disease)
    setdisease('')
    setOpen(false)
  }, [foods,drugs,diseases])
  const deleteItem =(value, index, iden)=>{
    if(iden=='foods'){
      foods.splice(index, 1);
      setfoods([...foods])
      actionP5.deleteFood([eid, value])
    }
    if(iden=='drugs'){
      drugs.splice(index, 1);
      setdrugs([...drugs])
      actionP5.deleteDrug([eid, value])
    }
    if(iden=='diseases'){
      diseases.splice(index, 1);
      setdiseases([...diseases])
      actionP6.deleteDisease([eid, value])
    }
  }

  const onChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }
  const saveChange=()=>{
    console.log('aaaaa')
    actionP1.updateElder([elderlyReducer.resultSelected.ELD_ID_NUMBER,eid,fName,lName,phone,nName])
  //
  
  }

  return (
    <div className="editcontainer">
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <div className="ettitle">
          <h3>แก้ไขข้อมูล</h3>
          <h4>{elderlyReducer.resultSelected.ELD_ID_NUMBER}</h4>
        </div>
        {
          USERLOGIN.Role === 'ADMIN' &&
          <div className="edit-fill">
            <TextField name="eid" onChange={onChange} label="รหัสบัตรประชาชน" defaultValue={eid} fullWidth />
          </div>
        }
        
        <div className="edit-fill">
          <TextField name="fName" onChange={onChange} label="ชื่อ" defaultValue={fName} fullWidth />
        </div>
        <div className="edit-fill">
          <TextField name="lName" onChange={onChange} label="นามสกุล" defaultValue={lName} fullWidth />
        </div>
        <div className="edit-fill">
          <TextField name="nName" onChange={onChange} label="ชื่อในชุมชน" defaultValue={nName} fullWidth />
        </div>
        <div className="edit-fill">
          <TextField name="phone" onChange={onChange} label="เบอร์โทรศัพท์" defaultValue={phone} fullWidth />
        </div>
        <div className="edit-fill">
        <p>การแพ้อาหาร</p>
        <Button variant="outlined" color="primary" onClick={()=>openDialog("foods")}>เพิ่ม</Button>
        {
            foods.length!=0 &&
            <div className="">
              {
                foods.map((value,index)=>{
                  return(
                    <div>
                    <div className="listItem">
                      <span> {index+1}. {value} </span>
                      <div>
                      <Button variant="outlined" color="secondary" size="small" onClick={()=>deleteItem(value,index,'foods')}>ลบ</Button>&nbsp;
                      <Button variant="outlined" color="primary" size="small" onClick={()=>{setIndexFood(index); seteditFillFood(true)}}>แก้ไข</Button>
                      </div>
                    </div>
                    {index===indexFood &&  
                    <Dialog fullWidth="sm" open={editFillFood} keepMounted onClose={()=>seteditFillFood(false)} className={classes.title} >
                      <DialogTitle>แก้ไขอาหาร</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <TextField  defaultValue={value} className={classes.title} onChange={(e)=>setfood(e.target.value)} fullWidth />
                        </DialogContentText>
                        <DialogContentText className="listItem">
                          <Button variant="outlined" color="secondary" onClick={()=>seteditFillFood(false)}>ยกเลิก</Button>
                          <Button variant="outlined" color="primary" onClick={()=>editFood(index)}>บันทึก</Button>
                        </DialogContentText>
                      </DialogContent>
                      </Dialog> }
                  </div>
                  )
                })
              }
              
            </div>
        }
        </div>
        <div className="edit-fill">
        <p>การแพ้ยา</p>
        <Button variant="outlined" color="primary" onClick={()=>openDialog("drugs")}>เพิ่ม</Button>
        {
          drugs.length!=0 &&
          <div className="">
            {
              drugs.map((value,index)=>{
                return(
                  <div className="listItem">
                    <span> {index+1}. {value} </span>
                    <div>
                    <Button variant="outlined" color="secondary" size="small" onClick={()=>deleteItem(value,index,'drugs')}>ลบ</Button>&nbsp;
                    <Button variant="outlined" color="primary" size="small" onClick={()=>{setIndexDrug(index); seteditFillDrug(true)}}>แก้ไข</Button>
                    </div>
                    {index===indexDrug && 
                    <Dialog fullWidth="sm" open={editFillDrug} keepMounted onClose={()=>seteditFillDrug(false)} className={classes.title} >
                      <DialogTitle>แก้ไขยา</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <TextField  defaultValue={value} className={classes.title} onChange={(e)=>setdrug(e.target.value)} fullWidth />
                        </DialogContentText>
                        <DialogContentText className="listItem">
                          <Button variant="outlined" color="secondary" onClick={()=>seteditFillDrug(false)}>ยกเลิก</Button>
                          <Button variant="outlined" color="primary" onClick={()=>editDrug(index)}>บันทึก</Button>
                        </DialogContentText>
                      </DialogContent>
                      </Dialog> }
                  </div>
                )
              })
            }
          </div>
        }
        </div>
        <div className="edit-fill">
        <p>โรคประจำตัว</p>
        <Button variant="outlined" color="primary" onClick={()=>openDialog("diseases")}>เพิ่ม</Button>
        {
          diseases.length!=0 &&
          <div className="">
            {
              diseases.map((value,index)=>{
                return(
                  <div className="listItem">
                    <span> {index+1}. {value} </span>
                    <div>
                    <Button variant="outlined" color="secondary" size="small" onClick={()=>deleteItem(value,index, 'diseases')}>ลบ</Button>&nbsp;
                    <Button variant="outlined" color="primary" size="small" onClick={()=>{setIndexDisease(index); seteditFillDisease(true)}}>แก้ไข</Button>
                    </div>
                    {index===indexDisease && 
                    <Dialog fullWidth="sm" open={editFillDisease} keepMounted onClose={()=>seteditFillDisease(false)} className={classes.title} >
                      <DialogTitle>แก้ไข</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <TextField  defaultValue={value} className={classes.title} onChange={(e)=>setdisease(e.target.value)} fullWidth />
                        </DialogContentText>
                        <DialogContentText className="listItem">
                          <Button variant="outlined" color="secondary" onClick={()=>seteditFillDisease(false)}>ยกเลิก</Button>
                          <Button variant="outlined" color="primary" onClick={()=>editDisease(index)}>บันทึก</Button>
                        </DialogContentText>
                      </DialogContent>
                      </Dialog> }
                  </div>
                )
              })
            }
          </div>
        }
        </div>

        <div className="bt-saveEdit">
          <Link to="/volunteerpage">
            <Button variant="contained" size="large" onClick={saveChange} >บันทึก</Button>
          </Link>
        </div>
      </form>

    {/* Dialog Add */}
      <Dialog
        open={open}
        keepMounted
        fullWidth="xs"
        onClose={()=>setOpen(false)}
        className={classes.title} 
        >
        <DialogTitle >
            {defineDialog=='foods'?'เพิ่มรายการอาหารที่แพ้':defineDialog=='drugs'?'เพิ่มรายการยาที่แพ้':'เพิ่มโรคประจำตัว'} 
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            { defineDialog=='diseases' &&
            <Autocomplete
            className={classes.title} 
            options={SimpleDisease}
            getOptionLabel={(option) => option.name}
            size="small"
            inputValue={disease}
            onInputChange={(event, value)=>setdisease(value)}
            renderInput={(params) => (<TextField {...params} />)}
            /> }
            {defineDialog=='foods'&&<TextField autoFocus value={food} className={classes.title} onChange={(e)=>setfood(e.target.value)} label="ชื่ออาหาร" fullWidth/>}
            {defineDialog=='drugs'&&<TextField autoFocus value={drug} className={classes.title} onChange={(e)=>setdrug(e.target.value)} label="ชื่อยา" fullWidth />}
          </DialogContentText>
          <DialogContentText>
            <Button variant="outlined" color="primary" onClick={()=>addItem()}>เพิ่ม</Button>
          </DialogContentText>
        </DialogContent>
        </Dialog>

    </div>
  );
}


const SimpleDisease = [
    {name: "ความดันโลหิตสูง"},
    {name: "เบาหวาน"},
    {name: "ไขมันในเส้นเลือดสูง"},
    {name: "โรคหัวใจ"},
    {name: "อัมพฤต อัมพาต"},
    {name: "หลอดเลือดในสมอง"},
    {name: "หลอดเลือดหัวใจ"},
    {name: "กระดูกพรุน"},
    {name: "ข้อเข่าเสื่อม/อักเสบ"},
    {name: "กระดูกทับเส้น"},
    {name: "กล้ามเนื้ออ่อนแรง/ชา"},
    {name: "เก๊าซ์"},
    {name: "รูมาตอยด์"},
    {name: "ปวดเมื่อยกล้ามเนื้อ"},
    {name: "ไตเรื้อรัง"},
    {name: "นิ่วในไต"},
    {name: "ต่อมลูกหมากโต"},
    {name: "หอบหืด/หลอดลมตีบ/ภูมิแพ้/ไซนัส"},
    {name: "ปอด"},
    {name: "โรคกระเพาะ/กรดไหลย้อน/ลำไส้"},
    {name: "ริดสีดวง"},
    {name: "ตับ/ถุงน้ำดี"},
    {name: "โรคตา"},
    {name: "หูพิการ"},
    {name: "พิการ"},
    {name: "ลมชัก"},
    {name: "พากินสัน"},
    {name: "ไมเกรน"},
    {name: "โรคประสาท"},
    {name: "Hypothyroid"},
    {name: "มะเร็ง/เนื้องอก"},
    {name: "โลหิตจาง"},
  ];
  