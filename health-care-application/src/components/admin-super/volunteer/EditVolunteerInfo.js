import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  Badge,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import * as volAction from "../../../actions/volunteer.action";

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 44,
    height: 44,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor: '#2196f3',
  },
}))(Avatar);

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

export default function EditVolunteerInfo({selectValue}) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUploaad, setImageUpload] = useState(null);
  
  const [state, setState] = useState({
    volId:selectValue.VOL_ID_NUMBER,fName:selectValue.VOL_FIRSTNAME,lName:selectValue.VOL_LASTNAME,phone:selectValue.VOL_PHONE,facebook:selectValue.VOL_FACEBOOK,line:selectValue.VOL_LINE
  });
  const {volId,fName,lName,phone,facebook,line} = state
  const dispatch = useDispatch();
  const onChange = (e)=>{
    console.log(e.target.value)
    setState({...state, [e.target.name]:e.target.value})
  }
  const [yea, setYea] = useState(); //ปี
  const [mon, setMon] = useState(); //เดือน
  const [day, setDay] = useState(); //วัน

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
  const [numMon, setNumMon] = useState(0); //เปลี่ยนเดือนเป็นตัวเลข
  function handleInputMonthChange(event, value) {
    setMon(value);
    Months.map((m, index) => {
      if (value === m) {
        setNumMon(index + 1);
      }
    });
  }
  function handleInputYearChange(event, value) {
    setYea(value);
  }
  function handleInputDayChange(event, value) {
    setDay(value);
  }

  const submitNewStaff = () => {
    const nowDate = new Date();
    const nowDay = nowDate.getDate();
    const nowMonth = nowDate.getMonth() + 1;
    const nowYear = nowDate.getFullYear() + 543;
    var Age = nowYear - parseInt(yea);
    if (numMon == nowMonth) {
      parseInt(day) >= nowDay ? (Age = Age) : (Age = Age - 1);
    } else if (numMon > nowMonth) {
      Age = Age - 1;
    } else {
      Age = Age;
    }

    const data = [volId,fName,lName,phone,facebook,line];
    dispatch(volAction.updateVolunteer(data));
    setOpen(false)
  };

  const onClose = ()=>{
    setOpen(false)
  }
  return (
    <React.Fragment>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="btn btn-info"
        >
        แก้ไข
        </button>

      <Dialog
        onClose={onClose}
        className="customized-dialog"
        open={open}
        maxWidth="md"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle
          className="customized-dialog-title"
          onClose={onClose}
        >
          แก้ไขข้อมูลของ {fName} {lName}
        </DialogTitle>
        <DialogContent dividers className="customized-dialog-content">
          <div className="container-add-staff-dialog">
            <div className="image-input">
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<SmallAvatar>
                <input type="file" id="image-upload" 
                onChange={event=>{
                  setImagePreview(null)
                  setImageUpload(null)
                  event.preventDefault()
                  setImageUpload(event.target.files[0])
                  setImagePreview(URL.createObjectURL(event.target.files[0]))
                }} 
                />
                <label for="image-upload" className="label-upload-image" >
                  <i className="fas fa-camera"></i>
                </label>
                </SmallAvatar>}
            >
              {/* Preview Image */}
              <Avatar src={imagePreview} style={{width:100, height:100}} /> 
            </Badge>
            </div>
            <div className="info-inputFill row">
              <div className="col-12 inputFill">
                <TextField
                  label="เลขประจำตัวประชาชน"
                  name="volId"
                  value={volId}
                  onChange={onChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-6 inputFill">
                <div className="inputadd-group">
                  <FormControl className="pre-name" variant="outlined">
                    <InputLabel>คำนำหน้า</InputLabel>
                    <Select
                      open={open2}
                      onClose={() => setOpen2(false)}
                      onOpen={() => setOpen2(true)}
                      name="preName"
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="นาย">นาย</MenuItem>
                      <MenuItem value="นาง">นาง</MenuItem>
                      <MenuItem value="นางสาว">นางสาว</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="ชื่อ"
                    name="fName"
                    value={fName}
                    onChange={onChange}
                    variant="outlined"
                    fullWidth
                  />
                </div>
              </div>
              <div className="col-6 inputFill">
                <TextField
                  label="นามสกุล"
                  name="lName"
                  value={lName}
                  onChange={onChange}
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="col-4 birthday-fill inputFill">
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
              <div className="col-4 birthday-fill inputFill">
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
              <div className="col-4 birthday-fill inputFill">
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
              <div className="col-6 inputFill">
                <TextField
                  placeholder="เบอร์โทรศัพท์"
                  variant="outlined"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="col-6 inputFill">
                {/* <TextField
                  placeholder="E-mail Address"
                  variant="outlined"
                  // name="phone"
                  // value={phone}
                  // onChange={onChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                /> */}
                <TextField
                  placeholder="เบอร์บุคคลอื่น เช่น คุณสมร 0912345678"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                       <AccountCircleIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="col-6 inputFill">
                <TextField
                  placeholder="facebook"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FacebookIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="col-6 inputFill">
                <TextField
                  placeholder="Line"
                  variant="outlined"
                  name="line"
                  value={line}
                  onChange={onChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <i
                          className="fab fa-line"
                          style={{ color: "green", fontSize: 23 }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              {/* <div className="col-12 inputFill">
                <TextField
                  placeholder="บุคคลอื่นเมื่อไม่สามาติดต่อคุณได้ ใส่ชื่อแล้วตามด้วยเบอร์โทร เช่น คุณสมร 0912345678"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                       <AccountCircleIcon/>
                      </InputAdornment>
                    ),
                  }}
                />
              </div> */}
              
              <div className="col-12 input-position-fill">
              <label>ที่อยู่</label>
              <textarea className="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="customized-dialog-footer">
          <Button
            onClick={() => submitNewStaff()}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
          >
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
