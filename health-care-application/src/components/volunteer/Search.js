import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import * as elderly from "../../actions/elderly.action";
// import Icon from "@mdi/react";
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
import { Link, useHistory } from "react-router-dom";
// import Header from "./Header";
import * as formAction from "../../actions/forms1p6.action";
import Axios from "axios";
import { apiEld } from "../../constants/index";
// import { mdiAccount } from "@mdi/js";
// import mdi from "@mdi/js"
import * as getAction from "../../actions/getAllFormToReucer.action";
import { updateLastVisDate } from "../../actions/forms1p6.action";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    //minWidth:350
  },
  dialogPaper: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },
});
export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('user'))
    console.log('local ',local)
  }, [])
  const dispatch = useDispatch();
  const classes = useStyles();
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  const [isVisId, setisVisId] = useState(true);
  const [visData, setvisData] = useState(null);
  let history = useHistory();
  const forms2Reducer = useSelector(({forms2Reducer}) => forms2Reducer)

  function handleClickOpen(value) {
    const d = new Date();
    const visDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    Axios.get(`${apiEld}/visit/search/${value.ELD_ID_NUMBER}/date/${visDate}`).then(res=>{
      setisVisId(true)
      setvisData(res.data)
      dispatch(getAction.getCollect(res.data[0].VIS_ID));
      dispatch(getAction.getAllResult(res.data[0].VIS_ID));
      console.log('res.data ',res.data)
    }).catch(error=>{
      setisVisId(false)
    })
    dispatch(elderly.setElderlySelectedToState(value));
    console.log("value: ", value);
    setOpen(true);
  }

  const createNewForm = (eldId) => {
    dispatch(getAction.resetCollectFromReducer())
    console.log("eldId ", eldId);
    const d = new Date();
    const visDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    const data = [visDate, eldId];
    dispatch(formAction.createVisitTable(data));
    updateLastVisDate(data)
  };
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
        {elderlyReducer.result.length !== 0 &&
          elderlyReducer.result.map((value, index) => {
            // console.log("v");
            // console.log(value);
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
          })}

        {elderlyReducer.resultSelected !== null && (
          <Dialog
            open={open}
            keepMounted
            onClose={() => setOpen(false)}
            className={classes.title}
            contentStyle={{ width: "100%", maxWidth: "none" }}
          >
            <DialogTitle>
              <b>หมายเลข</b>
            </DialogTitle>

            <DialogContent>
              <DialogContentText>
                {elderlyReducer.resultSelected.ELD_ID_NUMBER}
              </DialogContentText>

              <DialogContentText>
                {`${elderlyReducer.resultSelected.ELD_FIRSTNAME} ${elderlyReducer.resultSelected.ELD_LASTNAME}`}
              </DialogContentText>
              <DialogContentText>
                ตรวจเยี่ยมครั้งล่าสุด{" "}
                {elderlyReducer.resultSelected.ELD_LAST_VISIT_DATE}
              </DialogContentText>
              <DialogContentText>
                ตรวจโดย {elderlyReducer.resultSelected.updateBy}
              </DialogContentText>
            </DialogContent>

            {isVisId ? (
              <div className="bt-searchInfo">
                <Link className="bt-searchInfo-link">
                  {/* <Button className="bt1" onClick={saveSelected}> */}
                  <Button 
                  className="bt1" 
                  variant="contained" 
                  onClick={()=>{
                    const data = [visData[0].VIS_ID,elderlyReducer.resultSelected.ELD_ID_NUMBER]
                    dispatch({
                      type: "VIS_ID",
                      payload: data,
                    })
                    if(!forms2Reducer.isFetching){
                      setTimeout(() => {
                          history.push("/mainmenu");
                      }, 200);
                  }
                    
                  }}
                  fullWidth
                  >
                    แก้ไขการตรวจครั้งล่าสุด
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="bt-searchInfo">
                <Link to="/mainmenu" className="bt-searchInfo-link">
                  {/* <Button className="bt2" onClick={saveSelected} > */}
                  <Button
                    className="bt2"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      const eldId = elderlyReducer.resultSelected.ELD_ID_NUMBER;
                      createNewForm(eldId);
                    }}
                    fullWidth
                  >
                    เก็บข้อมูลสุขภาพ
                  </Button>
                </Link>
              </div>
            )}

            <div className="bt-searchInfo">
              <Link to="/editeld" className="bt-searchInfo-link">
                {/* <Button className="bt1" onClick={saveSelected}> */}
                <Button className="bt3" variant="contained" fullWidth>
                  แก้ไขข้อมูลพื้นฐาน
                </Button>
              </Link>
            </div>
          </Dialog>
        )}
      </div>
      {/* )} */}
    </React.Fragment>
  );
}
