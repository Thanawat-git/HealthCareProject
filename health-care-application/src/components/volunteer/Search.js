import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import * as elderly from "../../actions/elderly.action";
import Icon from "@mdi/react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { mdiCloseThick } from '@mdi/js';
import Header from "./Header";
import { createAllDatabase } from "../../actions/forms1p6.action";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    minWidth: 350,
  },
});
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);

  function handleClickOpen(value) {
    dispatch(elderly.setElderlySelectedToState(value));
    console.log("value: ", value);
    setOpen(true);
  }

  const createNewForm = ()=>{
    // dispatch(elderly.selectedEld(selectEld.ELDER.ELD_ID_NUMBER))
    const visId = new Date()
    // console.log(visId)
    dispatch(createAllDatabase(visId))
  }
  const onChange = (e) => {
    dispatch(elderly.getEldByKeyword(e));
  };
  return (
    <React.Fragment>
      {/* <Header/> */}
      <div className="search-fill">
        <TextField
          label="กรอกชื่อหรือนามสกุล"
          id="standard-start-adornment"
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="inner-seach2">
        {/* {elderlyReducer.result.length !== 0 &&
          elderlyReducer.result.map((value, index) => {
            console.log("v");
            console.log(value);
            return (
              <div>
                <Paper
                  className="paper-show"
                  onClick={() => handleClickOpen(value)}
                >
                  {`${value.ELD_ID_NUMBER}   ${value.ELD_FIRSTNAME} ${value.ELD_LASTNAME}`}
                </Paper>
              </div>
            );
          })} */}

        {/* {elderlyReducer.resultSelected !== null && ( */}
          <Dialog
            open={true}
            keepMounted
            onClose={() => setOpen(false)}
            className={classes.title}
          >
           <div className="setIcon" type="button" onClick={() => setOpen(false)}>
            <Icon path={mdiCloseThick}  size={1} color="red"   />
            </div>
            <DialogTitle>
              {/* หมายเลข {elderlyReducer.resultSelected.ELD_ID_NUMBER} */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {/* {`${elderlyReducer.resultSelected.ELD_FIRSTNAME} ${elderlyReducer.resultSelected.ELD_LASTNAME}`} */}
              </DialogContentText>
              <DialogContentText>
                ตรวจเยี่ยมครั้งล่าสุด{" "}
                {/* {elderlyReducer.resultSelected.ELD_LAST_VISIT_DATE} */}
              </DialogContentText>
              {/* <DialogContentText>
         ตรวจโดย {elderlyReducer.resultSelected.updateBy}
         </DialogContentText> */}
              <div className="bt-searchInfo">
                <Link to="/history">
                  {/* <Button className="bt1" onClick={saveSelected}> */}
                  <Button className="bt3">ประวัติการตรวจเยี่ยม</Button>
                </Link>
              </div>
            </DialogContent>

            <div className="bt-searchInfo">
              <Link to="/editeld">
                {/* <Button className="bt1" onClick={saveSelected}> */}
                <Button className="bt1">แก้ไขข้อมูลพื้นฐาน</Button>
              </Link>
              <Link to="/mainmenu">
                {/* <Button className="bt2" onClick={saveSelected} > */}
                <Button className="bt2" onClick={createNewForm}>เก็บข้อมูลสุขภาพ</Button>
              </Link>
            </div>
          </Dialog>
        {/* )} */}
      </div>
    </React.Fragment>
  );
}
