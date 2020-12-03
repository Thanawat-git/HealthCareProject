import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

// Full Dialog
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import Slide from '@material-ui/core/Slide';

// Full Dialog
// const useStyles = makeStyles((theme) => ({
//     appBar: {
//       position: 'relative',
//     },
//     title: {
//       marginLeft: theme.spacing(2),
//       textAlign: 'center',
//       flex: 1,
//     },
//   }));
// const Transition = React.forwardRef(function Transition(props, ref) {
// return <Slide direction="up" ref={ref} {...props} />;
// });

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddNewAdmin() {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={()=>setOpen(true)}
        className="bt-add"
      >
        เพิ่มผู้ดูแลระบบ
      </Button>

      <Dialog
        onClose={()=>setOpen(false)}
        className="customized-dialog"
        open={open}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle className="customized-dialog-title" onClose={()=>setOpen(false)}>
          เพิ่มผู้ดูแลระบบ
        </DialogTitle>
        <DialogContent dividers className="customized-dialog-content">
          <div className="container-add-staff-dialog">
            <div className="image-input">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                className="avatar-pic"
              />
              <input type="file" />
            </div>
            <div className="info-inputFill row">
              <div className="col-12 inputFill">
                <TextField label="เลขประจำตัวประชาชน" name="adminId" variant="outlined" fullWidth />
              </div>
              <div className="col-12 inputFill">
                <div className="inputadd-group">
                    <FormControl className="pre-name" variant="outlined">
                        <InputLabel>คำนำหน้า</InputLabel>
                        <Select
                        open={open2}
                        onClose={()=>setOpen2(false)}
                        onOpen={()=>setOpen2(true)}
                        // value={age}
                        // onChange={handleChange}
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="นาย">นาย</MenuItem>
                        <MenuItem value="นาง">นาง</MenuItem>
                        <MenuItem value="นางสาว">นางสาว</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label="ชื่อ" name="fname" variant="outlined" fullWidth/>
                </div>
              </div>
              <div className="col-12 inputFill">
                <TextField label="นามสกุล" name="lname" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField label="เบอร์โทรศัพท์" name="phone" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField type="date" label="" name="" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField label="ชื่อ" name="fname" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField label="นามสกุล" name="lname" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField label="ชื่อ" name="fname" variant="outlined" fullWidth/>
              </div>
              <div className="col-6 inputFill">
                <TextField label="นามสกุล" name="lname" variant="outlined" fullWidth/>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="customized-dialog-footer">
          <Button onClick={handleClose} size="large" color="primary">
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>

      {/* Full Dialog */}
      {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              เพิ่มผู้ดูแลระบบ
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              บันทึก
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog> */}
    </React.Fragment>
  );
}
