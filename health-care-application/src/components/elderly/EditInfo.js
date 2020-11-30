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
    fName: elderly.ELD_FIRSTNAME,
    lName: elderly.ELD_LASTNAME,
    nName: elderly.ELD_AKA,
    phone: elderly.ELD_PHONE,
    foods: elderly.FOOD_ALLERGY,
    drugs: elderly.DRUG_ALLERGY,
    diseases: elderly.DISEASE
  })
  const {fName,lName,nName,phone,foods,drugs,diseases} = state
  useEffect(() => {
    // console.log("selectEld: ", searchEld.DRUG_ALLERGY[0].DRUG_NAME);
    console.log("selectEld: ", elderly);
    
  }, []);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [food, setfood] = useState(null); // ชื่อโรคทีละตัว
  const [drug, setdrug] = useState(null); // ชื่อโรคทีละตัว
  const [disease, setdisease] = useState(null); // ชื่อโรคทีละตัว
//   const [localDiseases, localDiseases] = useState([]); // โรคทั้งหมด
  const [defineDialog,setdefineDialog] = useState('')

  const openDialog = (iden) =>{
    setOpen(true)
    console.log("e: ", iden);
    setdefineDialog(iden)
  }
  const addItem = ()=>{
    defineDialog=='foods' && dispatch(actionP5.createFood([elderly.ELD_ID_NUMBER, food]))
    defineDialog=='drugs' && dispatch(actionP5.createDrug([elderly.ELD_ID_NUMBER, drug]))
    defineDialog=='diseases' && dispatch(actionP6.createDisease([elderly.ELD_ID_NUMBER, disease]))
  }
  const deleteItem =(value)=>{
    defineDialog=='foods' && dispatch(actionP5.deleteFood([elderly.ELD_ID_NUMBER, value]))
    defineDialog=='drugs' && dispatch(actionP5.deleteDrug([elderly.ELD_ID_NUMBER, value]))
    defineDialog=='diseases' && dispatch(actionP6.deleteDisease([elderly.ELD_ID_NUMBER, value]))
  }
  const onChange = (e)=>{
    setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <div className="editcontainer">
      <form action="#" className="shadow p-3 mb-5 bg-white rounded">
        <div className="ettitle">
          <h3>แก้ไขข้อมูล</h3>
          <h4>{elderly.ELD_ID_NUMBER}</h4>
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
            foods[0].FOOD_NAME!=null? foods.map(value=>{
                // console.log("food: ", food.lenght);
                return(
                    <React.Fragment>
                    <span> {value.FOOD_NAME}, </span>
                    <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("foods")}>
                        แก้ไข
                    </Button>
                    </React.Fragment>
                )
            }):<Button variant="outlined" color="primary" onClick={()=>openDialog("foods")}>เพิ่ม</Button>
        }
        </div>
        <div className="edit-fill">
        <p>การแพ้ยา</p>
        {
            drugs[0].FOOD_NAME!=null? drugs.map(value=>{
                // console.log("food: ", food.lenght);
                return(
                    <React.Fragment>
                    <span> {value.DRUG_NAME}, </span>
                    <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("drugs")}>
                        แก้ไข
                    </Button>
                    </React.Fragment>
                )
            }):<Button variant="outlined" color="primary" onClick={()=>openDialog("drugs")}>เพิ่ม</Button>
        }
        </div>
        <div className="edit-fill">
        <p>โรคประจำตัว</p>
        {
            diseases[0].FOOD_NAME!=null? diseases.map(value=>{
                // console.log("food: ", food.lenght);
                return(
                    <React.Fragment>
                    <span> {value.DIS_NAME}, </span>
                    <Button variant="outlined" color="primary" size="small" onClick={()=>openDialog("diseases")}>
                        แก้ไข
                    </Button>
                    </React.Fragment>
                )
            }):<Button variant="outlined" color="primary" onClick={()=>openDialog("diseases")}>เพิ่ม</Button>
        }
        </div>

        <div className="bt-saveEdit">
            <Button variant="contained" size="large">บันทึก</Button>
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
                foods[0].FOOD_NAME!=null&& foods.map(value=>{
                    return(
                        <div className="listItem" >
                        <span> {value.FOOD_NAME} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value)}>ลบ</Button>
                        </div>
                    )
                })
                : defineDialog=='drugs' ?
                drugs[0].FOOD_NAME!=null&& drugs.map(value=>{
                    return(
                        <div className="listItem" >
                        <span> {value.DRUG_NAME} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value)}>ลบ</Button>
                        </div>
                    )
                })
                :
                diseases[0].FOOD_NAME!=null&& diseases.map(value=>{
                    return(
                        <div className="listItem" >
                        <span> {value.DIS_NAME} </span>
                        <Button variant="contained" size="small" onClick={()=>deleteItem(value)}>ลบ</Button>
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
  