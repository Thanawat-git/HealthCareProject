import moment from "moment";
import React, { useEffect,useState } from "react";
import DatePicker from 'react-date-picker';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@material-ui/core";
import 'moment/locale/th';

moment.locale("th");

export default function EditFollowup({ value }) {
    let d = value.APPOINT_DATE.split("-")
    const [open, setOpen] = useState(false);
    // const [dateValue, setDate] = useState(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`);
    const [dateValue, setDate] = useState(new Date());
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
    const onClose = ()=>{
        setOpen(false)
    }
  return (
    <React.Fragment>
        <button
        type="button"
        className="btn btn-info"
        onClick={() => setOpen(true)}
        >
        แก้ไข
        </button>
      
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle>{"แก้ไขการนัดหมายของ"} คุณ{value.ELDER.FIRSTNAME} {value.ELDER.LASTNAME}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
            {value.ELDER.FIRSTNAME}
              <Grid container justify="space-around">
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="date"
                
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <DatePicker onChange={setDate} value={dateValue} id="updateDate" format="yyyy-MM-dd"/>
              </Grid>
          {moment(value.APPOINT_DATE).format("DD/MM/YYYY")}
          <br/>
          {/* {moment("2020-05-24").add(543, 'year').format("DD MM YYYY")} */}
          {moment(value.APPOINT_DATE).format("LLLL")}
          
            {/* <div className="datepicker">
              <DatePicker onChange={setDate} value={dateValue} format="yyyy-MM-dd" className="input-datepicker" />
            </div>
              <DatePicker onChange={setDate} value={dateValue} id="updateDate" format="yyyy-MM-dd"/> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            ยกเลิก
          </Button>
          <Button color="primary">
            บันทึก
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
