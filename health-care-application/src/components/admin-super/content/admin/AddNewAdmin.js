import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
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
import * as adminAction from "../../../../actions/admin.action";

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

export default function AddNewAdmin() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false); //preName
  const [open3, setOpen3] = useState(false); // position
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUploaad, setImageUpload] = useState(null);
  const [state, setState] = useState({
    adminId:'',fName:'',lName:'',phone:'',email:''
  });
  const {adminId,fName,lName,phone,email} = state
  const dispatch = useDispatch();
  const onChange = (e)=>{
    console.log(e.target.value)
    setState({...state, [e.target.name]:e.target.value})
  }
  //----------------- Error State ----------------------//
  const [error1, setError1] = useState(false)
  const [errorText1, setErrorText1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  const [error4, setError4] = useState(false)
  const [error5, setError5] = useState(false)
  const [error6, setError6] = useState(false)
  const [error7, setError7] = useState(false)
  const [error8, setError8] = useState(false)
  //----------------- Error State ----------------------//
  
  const [yea, setYea] = useState(); //ปี
  const [mon, setMon] = useState(); //เดือน
  const [day, setDay] = useState(); //วัน
  const [position, setPosition] = useState(null);
  const [preName, setpreName] = useState(null)

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

  const checkValue = ()=>{
    let count = 0
    if(`${adminId}`.length!=13){
      setError1(true)
      setErrorText1("กรอกเลขให้ครบด้วยไอ้พวกเหี้ย จาก บิ๊กบ้านโป่ง!!!")
      count+=1
    } else {
      setError1(false)
      setErrorText1("")
    }
    if(preName=="" || preName==null){
      setError2(true)
      count+=1
    } else {setError2(false)}
    if(fName=="" || fName==null){
      setError3(true)
      count+=1
    } else {setError3(false)}
    if(lName=="" || lName==null){
      setError4(true)
      count+=1
    } else {setError4(false)}
    if(phone=="" || phone==null){
      setError5(true)
      count+=1
    } else {setError5(false)}
    if(yea=="" || yea==null){
      setError6(true)
      count+=1
    } else {setError6(false)}
    if(mon=="" || mon==null){
      setError7(true)
      count+=1
    } else {setError7(false)}
    if(day=="" || day==null){
      setError8(true)
      count+=1
    } else {setError8(false)}
    count==0 && submitNewStaff()
  }

  const submitNewStaff = () => {
    const nowDate = new Date();
    const nowDay = nowDate.getDate();
    const nowMonth = nowDate.getMonth() + 1;
    const nowYear = nowDate.getFullYear() + 543;
    var Age = nowYear - parseInt(yea);
    const elderlyBirthday = `${yea}-${numMon}-${day}`
    if (numMon == nowMonth) {
      parseInt(day) >= nowDay ? (Age = Age) : (Age = Age - 1);
    } else if (numMon > nowMonth) {
      Age = Age - 1;
    } else {
      Age = Age;
    }
    const data = [adminId,fName,lName,phone,email,preName,elderlyBirthday,position,imageUploaad]
    dispatch(adminAction.createAdmin(data))
    onClose()
  };
  const onClose = ()=>{
    setImagePreview(null)
    setImageUpload(null)
    setpreName(null)
    setPosition(null)
    setYea('')
    setMon('')
    setDay('')
    setState({adminId:'',fName:'',lName:'',phone:'',email:''})
    setError1(false)
    setErrorText1("")
    setError2(false)
    setError3(false)
    setError4(false)
    setError5(false)
    setError6(false)
    setError7(false)
    setError8(false)
    setOpen(false)
  }
  const openSelect =()=>{
    setOpen2(true)
  }
  const colseSelect =()=>{
    setOpen2(false)
  }
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={() => setOpen(true)}
        className="bt-add"
      >
        เพิ่มผู้ดูแลระบบ
      </Button>

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
          เพิ่มผู้ดูแลระบบ
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
                  name="adminId"
                  value={adminId}
                  type="number"
                  onChange={onChange}
                  onInput={(e) => {e.target.value = e.target.value.slice(0, 13)}}
                  helperText={errorText1}
                  label="เลขประจำตัวประชาชน"
                  variant="outlined"
                  fullWidth
                  error={error1}
                  required
                />
              </div>
              <div className="col-6 inputFill">
                <div className="inputadd-group">
                  <FormControl className="pre-name" variant="outlined" error={error2}>
                    <InputLabel>คำนำหน้า</InputLabel>
                    <Select
                      open={open2}
                      onClose={colseSelect}
                      onOpen={openSelect}
                      name="preName"
                      value={preName}
                      onChange={e=>setpreName(e.target.value)}
                    >
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
                    error={error3}
                    required
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
                  error={error4}
                  required
                />
              </div>
              <div className="col-12 inputFill">
              <TextField
                  placeholder="เบอร์โทรศัพท์"
                  variant="outlined"
                  name="phone"
                  value={phone}
                  type="number"
                  onInput={(e) => {e.target.value = e.target.value.slice(0, 10)}}
                  onChange={onChange}
                  fullWidth
                  error={error5}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="col-12 inputFill">
                <TextField
                  placeholder="E-mail Address"
                  variant="outlined"
                  name="email"
                  value={email}
                  type="email"
                  onChange={onChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
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
                      error={error6}
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
                      error={error7}
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
                      error={error8}
                    />
                  )}
                />
              </div>
              <div className="col-12 input-position-fill">
                <FormControl variant="outlined" fullWidth >
                    <InputLabel style={{backgroundColor: '#fff'}} >ตำแหน่งงาน</InputLabel>
                    <Select
                      id="s0"
                      open={open3}
                      onClose={() => setOpen3(false)}
                      onOpen={() => setOpen3(true)}
                      name="position"
                      value={position}
                      onChange={e=>setPosition(e.target.value)}
                    >
                      <MenuItem value="" id="s1" ><em>ไม่มี</em></MenuItem>
                      <MenuItem value="พยาบาลวิชาชีพ" id="s2">พยาบาลวิชาชีพ</MenuItem>
                      <MenuItem value="นักกายภาพบำบัด" id="s3">นักกายภาพบำบัด</MenuItem>
                      <MenuItem value="นักวิชาการสาธารสุข" id="s4">นักวิชาการสาธารสุข</MenuItem>
                    </Select>
                  </FormControl>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="customized-dialog-footer">
          <Button
            onClick={() => checkValue()}
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
