import moment from "moment";
import MomentUtils from "@date-io/moment";
import React, { useEffect,useState } from "react";
// import DatePicker from 'react-date-picker';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@material-ui/core";
import 'moment/locale/th';

moment.locale("th");

export default function EditFollowup({ value }) {
    let d = value.APPOINT_DATE.split("-")
    const [open, setOpen] = useState(false);
    // const [dateValue, setDate] = useState(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`);
    const [selectedDate, handleDateChange] = useState(null);
    // const setDa = da => {
    //     let d = da.split("-")
    //     let dd = new Date(new Date(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`).toISOString())
    //     console.log(dd)
    //     onChange(dd)
    // }
    // useEffect(() => {
    //     let d = value.APPOINT_DATE.split("-")
    //     let dd = new Date(new Date(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`).toISOString())
    //     // console.log(dd)
    //     setDate(dd)
    // }, [])
    const handleClose = () => {
      setOpen(false)
      handleDateChange(null)
    };
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
            <Grid container justify="center"><strong>วันนัดหมายเดิม: </strong>วัน{moment(value.APPOINT_DATE).format("dddd")} ที่ {moment(value.APPOINT_DATE).format("LL")}</Grid>
            <Grid container justify="center"> <strong>การนัดหมาย: </strong> ติดตามผล{value.APP_NAME}</Grid>
            
              <Grid container justify="space-around">
              <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="th">
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
                />
              </MuiPickersUtilsProvider>
              </Grid>
          {/* {moment(value.APPOINT_DATE).format("DD/MM/YYYY")} */}
          {/* {moment("2020-05-24").add(543, 'year').format("DD MM YYYY")} */}
          {/* {moment(value.APPOINT_DATE).format("LL")} */}
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Grid container justify="space-around">
          <Button color="secondary" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button color="primary">
            บันทึก
          </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
