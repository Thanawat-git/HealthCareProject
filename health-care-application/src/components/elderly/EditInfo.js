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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as actionP5 from '../../actions/forms1p5.action' // เรียกมาใช้งานในการ ลบ และ เพิ่ม อาหาร และ ยา
import * as actionP6 from '../../actions/forms1p6.action'
import * as actionP1 from '../../actions/forms1p1.action'

const useStyles = makeStyles({
    title: {
      textAlign: 'center',
      minWidth: 350,
    },
});

export default function EditInfo() {
  const classes = useStyles();
  const elderly = useSelector(({ searchEld }) => searchEld.selectEld);
  const [state, setState] = useState({
    eid: elderly.ELD_ID_NUMBER,
    fName: elderly.ELD_FIRSTNAME,
    lName: elderly.ELD_LASTNAME,
    nName: elderly.ELD_AKA,
    phone: elderly.ELD_PHONE,
  })
  const {eid,fName,lName,nName,phone} = state
  const [foods, setfoods] = useState([])
  const [drugs, setdrugs] = useState([])
  const [diseases, setdiseases] = useState([])
  useEffect(() => {
    console.log("selectEld: ");
    console.log(typeof diseases);
    console.log(foods);
    if(elderly.FOOD_ALLERGY.length!=0){
      for(let i=0;i<elderly.FOOD_ALLERGY.length;i++){
        foods.push(elderly.FOOD_ALLERGY[i].FOOD_NAME)
      }
    }
    if(elderly.DRUG_ALLERGY.length!=0){
      for(let i=0;i<elderly.DRUG_ALLERGY.length;i++){
        drugs.push(elderly.DRUG_ALLERGY[i].DRUG_NAME)
      }
    }
    if(elderly.DISEASE.length!=0){
      for(let i=0;i<elderly.DISEASE.length;i++){
        diseases.push(elderly.DISEASE[i].DIS_NAME)
      }
    }
    console.log(foods);
  }, []);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [food, setfood] = useState(null); // ชื่อโรคทีละตัว
  const [drug, setdrug] = useState(null); // ชื่อโรคทีละตัว
  const [disease, setdisease] = useState(null); // ชื่อโรคทีละตัว
  const [defineDialog,setdefineDialog] = useState('')

  const openDialog = (iden) =>{
    setOpen(true)
    setdefineDialog(iden)
  }
 
  const addItem = ()=>{
    if(defineDialog=='foods'){
      food && setfoods([...foods, food])
      actionP5.createFood([elderly.ELD_ID_NUMBER, food])
    }
    if(defineDialog=='drugs'){
      food && setdrugs([...drugs, drug])
      actionP5.createDrug([elderly.ELD_ID_NUMBER, drug])
    }
    if(defineDialog=='diseases'){
      food && setdiseases([...diseases, disease])
      actionP6.createDisease([elderly.ELD_ID_NUMBER, disease])
    }
  }
  const deleteItem =(value, index)=>{
    if(defineDialog=='foods'){
      foods.splice(index, 1);
      setfoods([...foods])
      actionP5.deleteFood([elderly.ELD_ID_NUMBER, value])
    }
    if(defineDialog=='drugs'){
      drugs.splice(index, 1);
      setdrugs([...drugs])
      actionP5.deleteDrug([elderly.ELD_ID_NUMBER, value])
    }
    if(defineDialog=='diseases'){
      diseases.splice(index, 1);
      setdiseases([...diseases])
      actionP6.deleteDisease([elderly.ELD_ID_NUMBER, value])
    }
  }
  const onChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }
  const saveChange=()=>{
    console.log('aaaaa')
    actionP1.updateElder([elderly.ELD_ID_NUMBER,eid,fName,lName,phone,nName])
  }

  return (
    <div className="editcontainer">
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <div className="ettitle">
          <h3>แก้ไขข้อมูล</h3>
          <h4>{elderly.ELD_ID_NUMBER}</h4>
        </div>
        <div className="edit-fill">
          <TextField name="eid" onChange={onChange} label="รหัสบัตรประชาชน" defaultValue={eid} fullWidth />
        </div>
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
        {

            foods.length!=0? 
            <div className="listItem">
              {
                foods.map(value=>{
                  return(
                      <span> {value}, </span>
                  )
                })
              }
              <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("foods")}>แก้ไข</Button>
            </div>
            :<Button variant="outlined" color="primary" onClick={()=>openDialog("foods")}>เพิ่ม</Button>
        }
        </div>
        <div className="edit-fill">
        <p>การแพ้ยา</p>
        {
              drugs.length!=0? 
              <div className="listItem">
                {
                  drugs.map(value=>{
                    return(
                      <span> {value}, </span>
                    )
                  })
                }
                <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("drugs")}>แก้ไข</Button>
              </div>
              :<Button variant="outlined" color="primary" onClick={()=>openDialog("drugs")}>เพิ่ม</Button>
        }
        </div>
        <div className="edit-fill">
        <p>โรคประจำตัว</p>
        {
              diseases.length==0? 
              <Button variant="outlined" color="primary" onClick={()=>openDialog("diseases")}>เพิ่ม</Button>
              :
              <div className="listItem">
                {
                  diseases.map(value=>{
                    return(
                      <span> {value}, </span>
                    )
                  })
                }
                <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("diseases")}>แก้ไข</Button>
              </div>
              
        }
        </div>

        <div className="bt-saveEdit">
          <Link to="/volunteer">
            <Button variant="contained" size="large" onClick={saveChange} >บันทึก</Button>
          </Link>
        </div>
      </form>

      <Dialog
        open={open}
        keepMounted
        onClose={()=>setOpen(false)}
        className={classes.title} 
        >
        <DialogTitle >
            {defineDialog=='foods'?'แก้ไขรายการอาหารที่แพ้':defineDialog=='drugs'?'แก้ไขรายการยาที่แพ้':'แก้ไขโรคประจำตัว'} 
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                { defineDialog=='diseases' ?
                <Autocomplete
                className={classes.title} 
                options={SimpleDisease}
                getOptionLabel={(option) => option.name}
                size="small"
                onInputChange={(event, value)=>setdisease(value)}
                renderInput={(params) => (<TextField {...params} />)}
                />
                :defineDialog=='foods'?<TextField  className={classes.title} onChange={(e)=>setfood(e.target.value)} label="ชื่ออาหาร" fullWidth />
                :<TextField className={classes.title} onChange={(e)=>setdrug(e.target.value)} label="ชื่อยา" fullWidth />}
            </DialogContentText>
            <DialogContentText>
                <Button variant="outlined" color="primary" onClick={()=>addItem()}>เพิ่ม</Button>
            </DialogContentText>
            <hr/>
            {/* show all item */}
            <DialogContentText>
            
            {
                defineDialog=='foods' ?
                foods.length!=0&& foods.map((value,index)=>{
                    return(
                        <div className="listItem" >
                        <span> {value} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value,index)}>ลบ</Button>
                        </div>
                    )
                })
                : defineDialog=='drugs' ?
                drugs.length!=0&& drugs.map((value,index)=>{
                    return(
                        <div className="listItem" >
                        <span> {value} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value,index)}>ลบ</Button>
                        </div>
                    )
                })
                :
                diseases.length==0&& diseases.map((value,index)=>{
                    return(
                        <div className="listItem" >
                        <span> {value} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value,index)}>ลบ</Button>
                        </div>
                    )
                })
            }
            
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
  