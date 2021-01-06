import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./volunteer.css";
import Header from "./Header"
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
// import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import * as formAction from "../../../src/actions/editaccount.action"
import {
  blue,
  grey,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    display: "none",
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  title: {
    textAlign: "center",
    minWidth: 350,
  },
}));

export default function Editpassword() {
  const classes = useStyles();
  const dispatch = useDispatch()
  //const editaccountReducer = useSelector(({editaccountReducer}) => editaccountReducer)
  const [open, setOpen] = useState(false);

  const uploadedImage = useState();
  const imageUploader = useState();

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleSubmit = ()=>{
  //   const data = [imageUploader
  //   ]
  //   dispatch(formAction.add(data))
  // }
  return (
    <div className="vtcontainer">
      <Header /> <br/> <br/>
      <div className="nav-vtcontainer linkicon">
        {/* <Header /> */}
        <h3>
          <b> แก้ไขข้อมูลส่วนตัว </b>
        </h3>
        <div style={{ textAlign: "center" }}>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={handleImageUpload}
            ref={imageUploader}
          />

          <label htmlFor="icon-button-file" >
            <Avatar
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{ width: 90, height: 90 }}
             
            >
              <PhotoCamera style={{ fontSize: 40 }} onClick={() => imageUploader.current.click()} />
              <img
                ref={uploadedImage}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              />
            </Avatar>
          </label>
        </div>
        <div className="TextField" style={{ textAlign: "center" }}>
          <div className={classes.root}>
            <TextField id="outlined-basic" label="ชื่อ" variant="outlined" />
            <TextField id="outlined-basic" label="นามสกุล" variant="outlined" />
          </div>
        </div>
        <div className="TextField1" style={{ textAlign: "center" }}>
          <TextField
            id="outlined-basic"
            label="ชื่อผู้ใช้งาน"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 20 }}
          />

          <TextField
            id="outlined-basic"
            label="เบอร์โทรศัพท์"
            variant="outlined"
            fullWidth
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
            onClick={handleClickOpen}
          >
            บันทึก
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
