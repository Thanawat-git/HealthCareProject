import moment from "moment";
import MomentUtils from "@date-io/moment";
import React, { useState,useEffect } from "react";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@material-ui/core";
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
    const [selectedDate, handleDateChange] = useState(null);
    // useEffect(() => {
    //   setfollowUp(FpReducer.result)
    //   return () => {
    //     setisFetching(true)
    //   }
    // }, [isFetching])
    const updateFollowUpDate =()=>{
      if(selectedDate!==null){
        // console.log('selectedDate on Update ', moment(selectedDate).add(543, 'year').format("YYYY-MM-DD"))
        dispatch(FpAction.updateFollowUp(value.APP_ID, headKey, moment(selectedDate).add(543, 'year').format("YYYY-MM-DD")))
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
    }
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
            <Grid container justify="center">วันนัดหมายเดิม{": "}<strong>วัน{moment(value.APPOINT_DATE).format("dddd")} ที่ {moment(value.APPOINT_DATE).format("LL")}</strong></Grid>
            <Grid container justify="center"> การนัดหมาย{": "}<strong>ติดตามผล{value.APP_NAME}</strong></Grid>
            
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
                  invalidDateMessage=" "
                />
              </MuiPickersUtilsProvider>
              </Grid>
              <Grid container justify="center">
                {selectedDate===false && <Alert severity="error">กรุณากรอกวันนัดหมายใหม่</Alert>}
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
