import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./volunteer.css";
//import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { Button, Link } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import EmojiEmotionsTwoToneIcon from "@material-ui/icons/EmojiEmotionsTwoTone";
import { yellow, blue, grey } from "@material-ui/core/colors";
import { useRouteMatch } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    hover: false,
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    textAlign: "center",
    minWidth: 350,
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h3">{children}</Typography>
    </MuiDialogTitle>
  );
});

export default function Editpassword() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="vtcontainer">
      <div className="nav-vtcontainer linkicon">
        <AppBar position="static">
          <Toolbar>
            {/* <KeyboardBackspaceIcon
              fontSize="large"
              className={classes.icon}
            ></KeyboardBackspaceIcon> */}
          </Toolbar>
        </AppBar>
        <h3>
          <b> แก้ไขรหัสผ่าน </b>
        </h3>
        <div className="TextField">
          {/* <InputLabel htmlFor="">รหัสผ่านปัจจุบัน</InputLabel> */}
          <TextField
            id="outlined-basic"
            label="รหัสผ่านปัจจุบัน"
            fullWidth
            variant="outlined"
          />
          <br></br>
          {/* <InputLabel htmlFor="">รหัสผ่านใหม่</InputLabel> */}
          <TextField
            id="outlined-basic"
            label="รหัสผ่านใหม่"
            fullWidth
            variant="outlined"
          />
          <br></br>
          {/* <InputLabel htmlFor="">ยืนยันรหัสผ่านใหม่</InputLabel> */}
          <TextField
            id="outlined-basic"
            label="ยืนยันรหัสผ่านใหม่"
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
            onClick={handleClickOpen}
          >
            บันทึก
          </Button>
        </div>
        <div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className={classes.title}
          >
            <div style={{ width: 300, height: 300 }}>
              <DialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              ></DialogTitle>

              <EmojiEmotionsTwoToneIcon
                style={{ fontSize: 100, color: yellow[700] }}
              >
                {" "}
              </EmojiEmotionsTwoToneIcon>
              <Typography
                gutterBottom
                style={{ fontSize: 20, color: "#28be1a" }}
              >
                เปลี่ยนรหัสผ่านสำเร็จ
              </Typography>
              <div className="bt-searchInfo">
                <Button
                  style={{
                    backgroundColor: blue[500],
                    color: grey[50],
                    margin: 20,
                  }}
                  onClick={handleClose}
                >
                  ยืนยัน
                </Button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
