import React, { useEffect, useState } from "react";
import "./volunteer.css";
import Axios from "axios";
import Header from "./Header"
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
import { Button, TextField } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {changePassword} from "../../actions/editpassword.action"
import { apiBase, CHANGE_PASS_STATE_DEF } from "../../constants";
const MySwal = withReactContent(Swal);



export default function Editpassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conNewPass, setConNewPass] = useState("");
  const [checkPassSame, setChackPassSame] = useState(null)
  const [toCheckOldPass, setToChackOldPass] = useState(false)
  const { user } = useSelector((state) => state.authReducer);
  const checkuserReducer = useSelector(({checkuserReducer}) => checkuserReducer)
  const dispatch = useDispatch()
  let history = useHistory();

  const handleClick = () => {
    if(checkPassSame===false&&newPass!==""&&conNewPass!=="") {
      Axios.get(`${apiBase}/checkuser/id/${user.Id}`).then((res)=>{
        if(res.data+""===oldPass){
          console.log("math ")
          setToChackOldPass(false)
          dispatch(changePassword(user.Id, user.Role, newPass ))
        } else {
          console.log("not math ")
          setToChackOldPass(true)
        }
      })
      
    }
  };

  useEffect(()=>{
    if(checkuserReducer.isSuccess){
      MySwal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'แก้ไขรหัสผ่านสำเร็จ',
        showConfirmButton: false,
        timer: 1500
      })
      history.goBack();
      dispatch({
        type: CHANGE_PASS_STATE_DEF
      })
    }
   
  },[checkuserReducer.isSuccess])

  useEffect(() => {
    if(newPass!=="" && conNewPass!== ""){
      if(newPass!==conNewPass){
        setChackPassSame(true)
      }else{
        setChackPassSame(false)
      }
    }
  }, [newPass,conNewPass])

  return (
    <div className="vtcontainer">
      <Header /> <br/> <br/>
      <div className="nav-vtcontainer linkicon">
        <h3>
          <b> แก้ไขรหัสผ่าน </b>
        </h3>
        <div className="TextField">
          <TextField
            id="outlined-basic"
            label="รหัสผ่านปัจจุบัน"
            type="password"
            value={oldPass}
            error={toCheckOldPass}
            helperText={toCheckOldPass && "รหัสผ่านไม่ถูกต้อง"}
            onChange={(e)=>setOldPass(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="รหัสผ่านใหม่"
            type="password"
            value={newPass}
            error={checkPassSame}
            helperText={checkPassSame && "รหัสผ่านไม่ตรงกัน"}
            onChange={(e)=>setNewPass(e.target.value)}
            fullWidth
            variant="outlined"
          />
          
          <br></br>
          <TextField
            id="outlined-basic"
            label="ยืนยันรหัสผ่านใหม่"
            type="password"
            value={conNewPass}
            error={checkPassSame}
            helperText={checkPassSame && "รหัสผ่านไม่ตรงกัน"}
            onChange={(e)=>setConNewPass(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </div>
        <div className="bt-edit">
          <Button
            style={{
              backgroundColor: blue[500],
              color: grey[50],
              margin: 20,
              height: 40,
              width: 90,
            }}
            onClick={handleClick}
          >
            บันทึก
          </Button>
        </div>
        </div>
      </div>
  );
}
