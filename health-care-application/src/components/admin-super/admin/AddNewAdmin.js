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
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [yea, setYea] = useState(); //ปี
  const [mon, setMon] = useState(); //เดือน
  const [day, setDay] = useState(); //วัน
  const [position, setPosition] = useState(null)

//   date picker
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [cy, setCY] = useState(true);
  const [cd, setCD] = useState(true);
  const getyear = (e) => {
    var i = 10; //ปีเริ่มต้น ลบจากปัจจุบัน
    var ny = new Date();
    var y = ny.getFullYear();
    const xxx = (s) => {
      return y - s + 543;
    };
    if (cy) {
      setCY(false);
      while (i < 150) {
        const r = xxx(i);
        setYears((years) => [...years, r.toString()]);
        i++;
      }
    }
    setYea(e.target.value);
  };
  const getday = () => {
    if (mon != undefined) {
      if (mon === "กุมภาพันธ์") {
        console.log(5);
        if (yea === undefined) {
          loopDays(28);
        } else {
          var a = parseInt(yea) - 543;
          if (
            (a % 4 == 0 && a % 100 != 0) ||
            (a % 4 == 0 && a % 100 == 0 && a % 400 == 0)
          ) {
            loopDays(29);
          } else {
            loopDays(28);
          }
        }
      } else if (
        mon === "เมษายน" ||
        mon === "มิถุนายน" ||
        mon === "กันยายน" ||
        mon === "พฤศจิกายน"
      ) {
        loopDays(30);
      } else {
        loopDays(31);
      }
    }
  };
  const loopDays = (d) => {
    var x = 0;
    const countDay = (s) => {
      return s + 1;
    };
    if (days.length != d || days === undefined || days.length / 2 != d) {
      setCD(true);
      setDays([]);
    } else {
      setCD(false);
    }

    if (cd) {
      while (x < d) {
        const dd = countDay(x);
        setDays((days) => [...days, dd.toString()]);
        x++;
      }
    }
  };
  const [numMon, setNumMon] = useState(0) //เปลี่ยนเดือนเป็นตัวเลข
  function handleInputMonthChange(event, value) {
    setMon(value)
    Months.map((m, index)=>{
      if (value===m){setNumMon(index+1)}
    })
  }
  function handleInputYearChange(event, value) {
    setYea(value)
  }
  function handleInputDayChange(event, value) {
    setDay(value)
  }

  const submitNewStaff = ()=>{
    const nowDate = new Date();
    const nowDay = nowDate.getDate();
    const nowMonth = nowDate.getMonth()+1;
    const nowYear = nowDate.getFullYear()+543;
    var Age = nowYear-parseInt(yea)
    if(numMon==nowMonth) {
      parseInt(day)>=nowDay ? Age=Age : Age=Age-1
    } else if(numMon>nowMonth) {
      Age = Age-1
    } else {
      Age = Age
    }
  }

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
        maxWidth="md"
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
              <div className="col-6 inputFill">
                <div className="inputadd-group">
                    <FormControl className="pre-name" variant="outlined">
                        <InputLabel>คำนำหน้า</InputLabel>
                        <Select
                        open={open2}
                        onClose={()=>setOpen2(false)}
                        onOpen={()=>setOpen2(true)}
                        name="preName"
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
              <div className="col-6 inputFill">
                <TextField label="นามสกุล" name="lname" variant="outlined" fullWidth/>
              </div>
              <div className="col-12 inputFill">
                <TextField label="เบอร์โทรศัพท์" name="phone" variant="outlined" fullWidth/>
              </div>
              <div className="col-12 inputFill">
                <TextField label="E-mail Address" type="email" name="email" variant="outlined" fullWidth/>
              </div>
              <div className="col-4">
                <Autocomplete
                id="year"
                options={years}
                getOptionLabel={(option) => option}
                disableClearable={true}
                onInputChange={handleInputYearChange}
                defaultValue={yea}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="ปี พ.ศ. เกิด"
                    variant="outlined"
                    onClick={getyear}
                    />
                )}
                />
                </div>
              <div className="col-4">
                    <Autocomplete
                    id="month"
                    options={Months}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    onInputChange={handleInputMonthChange}
                    defaultValue={mon}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="เดือนเกิด"
                        variant="outlined"
                        />
                    )}
                    />
                </div>
              <div className="col-4">
                    <Autocomplete
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    onInputChange={handleInputDayChange}
                    defaultValue={day}
                    renderInput={(params) => (
                        <TextField
                        {...params}
                        label="วันเกิด"
                        variant="outlined"
                        onClick={getday}
                        />
                    )}
                    />
                </div>
              <div className="col-12 input-position-fill">
                <TextField id="select" label="ตำแหน่งงาน" variant="outlined" value={position} select fullWidth>
                  <MenuItem onClick={()=>setPosition("")} ><em>ไม่มีตำแหน่ง</em></MenuItem>
                  <MenuItem onClick={()=>setPosition("พยาบาลวิชาชีพ")} >พยาบาลวิชาชีพ</MenuItem>
                  <MenuItem onClick={()=>setPosition("นักกายภาพบำบัด")}>นักกายภาพบำบัด</MenuItem>
                  <MenuItem onClick={()=>setPosition("นักวิชาการสาธารสุข")}>นักวิชาการสาธารสุข</MenuItem>
                </TextField>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="customized-dialog-footer">
          <Button onClick={()=>setOpen(false)} size="large" variant="contained" color="primary" fullWidth>
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>
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