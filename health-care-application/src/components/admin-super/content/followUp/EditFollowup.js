import moment from "moment";
import React, { useEffect,useState } from "react";
// import DatePicker from 'react-date-picker';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from "@material-ui/core";
import 'moment/locale/th';

moment.locale("th");

export default function EditFollowup({ selectValue }) {
    let d = selectValue.APPOINT_DATE.split("-")
    const [open, setOpen] = useState(false);
    const [dateValue, setDate] = useState(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`);
    // const setDa = da => {
    //     let d = da.split("-")
    //     let dd = new Date(new Date(`${parseInt(d[0])-543}-${d[1]}-${d[2]}`).toISOString())
    //     console.log(dd)
    //     onChange(dd)
    // }
    // useEffect(() => {
    //     let d = selectValue.APPOINT_DATE.split("-")
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
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
              <Grid container justify="space-around">
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="date"
                format="dd/mm/yyyy"
                // value={dateValue}
                onChange={date=>setDate(date)}
                // defaultValue="2017-05-24T10:30"
                defaultValue={dateValue}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
          {/* {moment("20010704T120854").format("MMMM Do YYYY")}{" "} */}
          {moment(selectValue.APPOINT_DATE).format("MM/DD/YYYY")}
          {moment("2020-05-24").add(543, 'year').format("DD MM YYYY")}
          {moment(dateValue).format("LLLL")}
            {/* <div className="datepicker">
              <DatePicker onChange={setDate} value={dateValue} format="yyyy-MM-dd" className="input-datepicker" />
            </div>
              <DatePicker onChange={setDate} value={dateValue} id="updateDate" format="yyyy-MM-dd"/> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Disagree
          </Button>
          <Button color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
