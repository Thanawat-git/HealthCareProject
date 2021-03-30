import React, { useEffect, useState } from "react";
import "./volunteer.css";
import Header from "./Header";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as formAction from "../../../src/actions/editaccount.action";
import { Link,useHistory } from "react-router-dom";
import { blue, grey } from "@material-ui/core/colors";

export default function Editaccount() {
  const dispatch = useDispatch();
  const editaccountReducer = useSelector(({ editaccountReducer }) => editaccountReducer);
  const { user } = useSelector((state) => state.authReducer);
  const [firstname, setFirstname] = useState(editaccountReducer.firstname);
  const [lastanme, setLastname] = useState(editaccountReducer.lastanme);
  const [phone, setphone] = useState(editaccountReducer.phone);

  useEffect(() => {
    console.log(editaccountReducer.firstname);
    setFirstname(editaccountReducer.firstname);
    setLastname(editaccountReducer.lastanme);
    setphone(editaccountReducer.phone);

  },[editaccountReducer.firstname]);
  
  let history = useHistory();
  const handleClickOpen = () => {
    dispatch(formAction.updateVolunteer(
      [user, firstname, lastanme, phone]
    ));
    dispatch({ type: "DEAFALUT_ACCOUNT" })
  };
  

  return (
    <div className="vtcontainer">
      <Header /> <br /> <br />
      <div className="nav-vtcontainer linkicon">
        <h3>
          <b> แก้ไขข้อมูลส่วนตัว </b>
        </h3>

        <div className="TextField">
            <TextField
              id="firstname"
              value={firstname}
              label="ชื่อ"
              variant="outlined"             
              onChange={(e)=>setFirstname(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
            <TextField
              id="lastanme"
              value={lastanme}
              label="นามสกุล"
              variant="outlined"
              onChange={(e) => setLastname(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br></br>
          <TextField
            id="phone"
            label="เบอร์โทรศัพท์"
            variant="outlined"
            value={phone}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setphone(e.target.value)}
            fullWidth
          />
        </div>

        <div className="bt-edit">
          <Link to="/volunteerpage/search">
          <Button
            style={{
              backgroundColor: blue[500],
              color: grey[50],
              margin: 20,
              height: 40,
              width: 90,
            }}
            onClick={handleClickOpen}
          >
            บันทึก
          </Button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}
