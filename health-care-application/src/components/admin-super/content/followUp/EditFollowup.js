import moment from "moment";
import MomentUtils from "@date-io/moment";
import React, { useState,useEffect } from "react";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Alert from '@material-ui/lab/Alert';
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
import 'moment/locale/th';
import * as FpAction from "../../../../actions/followUp.action";
import { useDispatch } from "react-redux";
const MySwal = withReactContent(Swal);

moment.locale("th");

export default function EditFollowup({ value,headKey }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    // const FpReducer = useSelector(({followUpReducer}) => followUpReducer)
    const [isFetching, setisFetching] = useState(true)
    const [selectedDate, handleDateChange] = useState("null");
    // useEffect(() => {
    //   setfollowUp(FpReducer.result)
    //   return () => {
    //     setisFetching(true)
    //   }
    // }, [isFetching])
    
    const updateFollowUpDate =()=>{
      const elderlyBirthday = `${yea}-${numMon}-${day}`;
      // handleDateChange(`${yea}-${numMon}-${day}`)
      // setTimeout(() => {
        if(selectedDate!=="null"){
          // console.log('selectedDate on Update ', moment(selectedDate).add(543, 'year').format("YYYY-MM-DD"))
          
          dispatch(FpAction.updateFollowUp(value.APP_ID, headKey, moment(elderlyBirthday).format("YYYY-MM-DD")))
          handleClose()
          MySwal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'เปลี่ยนแปลงวันนัดหมายสำเร็จ!',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          handleDateChange(false)
        }
      // }, 500);
      
    }
    const handleClose = () => {
      setOpen(false)
      handleDateChange(null)
    };
    const [yea, setYea] = React.useState();
  const [mon, setMon] = React.useState();
  const [day, setDay] = React.useState();
  const [err, seterr] = React.useState(false);
  const [years, setYears] = React.useState([]);
  const [days, setDays] = React.useState([]);
  const [cy, setCY] = React.useState(true);
  const [cd, setCD] = React.useState(true);
  const [numMon, setNumMon] = React.useState(0);
  React.useEffect(()=>{
    console.log("yea ",yea)
    console.log("selectedDate ",selectedDate)
  },[])
  React.useEffect(()=>{
    console.log("selectedDate3 ",selectedDate)
  },[selectedDate])
  React.useEffect(()=>{
    console.log("yea ",yea)
    console.log("numMon ",numMon)
    console.log("day ",day)
    if(typeof(yea)!=="undefined" && numMon!==0 && typeof(day)!=="undefined"){
      handleDateChange(`${yea}-${numMon}-${day}`)
    } else {
      handleDateChange("null")
    }
    console.log("selectedDate2 ",selectedDate)
  },[yea,numMon,day])
  const getyear = (e) => {
    var i = -2;
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

  
  function handleInputMonthChange(event, value) {
    setMon(value);
    Months.map((m, index) => {
      if (value === m) {
        setNumMon(index + 1);
      }
    });
    // console.log(`numMon = ${numMon}`)
  }
  function handleInputYearChange(event, value) {
    setYea(value);
  }
  function handleInputDayChange(event, value) {
    setDay(value);
  }
  return (
    <React.Fragment>
        <button
        type="button"
        className="btn btn-info"
        onClick={()=>setOpen(true)}
        >
        แก้ไข
        </button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle style={{ textAlign: "center" }}>{"แก้ไขการนัดหมายของ"} คุณ{value.ELDER.FIRSTNAME} {value.ELDER.LASTNAME}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            <Grid container justify="center">วันนัดหมายเดิม{": "}<strong>วัน{moment(value.APPOINT_DATE).format("dddd")} ที่ {moment(value.APPOINT_DATE).format("LL")}</strong></Grid>
            <Grid container justify="center"> การนัดหมาย{": "}<strong>ติดตามผล{value.APP_NAME}</strong></Grid>
            <br/>
              <Grid container justify="space-around">
              {/* <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="th">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="วันนัดหมายใหม่"
                  format="DD/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  invalidDateMessage=" "
                />
              </MuiPickersUtilsProvider> */}
              <div className="row">
              <div className="col-12 col-xl-12 mb-15">
                  <Autocomplete
                    id="year"
                    options={years}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputYearChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="ปี พ.ศ."
                        variant="outlined"
                        // value={yea}
                        error={err}
                        helperText={err ? "กรุณากรอกปี พ.ศ" : ""}
                        onClick={getyear}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-12 mb-15">
                  <Autocomplete
                    id="month"
                    options={Months}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    //   value={mon}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputMonthChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="เดือน"
                        variant="outlined"
                        error={err}
                        helperText={err ? "กรุณากรอกเดือน" : ""}
                        //   onClick={(e) => setMon(e.target.value)}
                      />
                    )}
                  />
                </div>
                <div className="col-12 col-xl-12">
                  <Autocomplete
                    id="day"
                    options={days}
                    getOptionLabel={(option) => option}
                    disableClearable={true}
                    //   style={{ width: 300 }}
                    autoSelect={true}
                    autoHighlight={true}
                    onInputChange={handleInputDayChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="วัน"
                        variant="outlined"
                        error={err}
                        helperText={err ? "กรุณากรอกวัน" : ""}
                        onClick={getday}
                      />
                    )}
                  />
                </div>
              </div>
              </Grid>
              <Grid container justify="center">
                {selectedDate===false && <Alert severity="error">กรุณากรอกวันนัดหมายใหม่</Alert>}
              </Grid>
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Grid container justify="space-around">
          <Button color="secondary" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button 
          color="primary" 
          onClick={updateFollowUpDate} 
          >
            บันทึก
          </Button>
          </Grid>
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