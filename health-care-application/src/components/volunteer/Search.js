import moment from "moment";
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
import Skeleton from '@material-ui/lab/Skeleton';
import { Link, useHistory } from "react-router-dom";
import * as formAction from "../../actions/forms1p6.action";
import Axios from "axios";
import { apiEld } from "../../constants/index";
// import { mdiAccount } from "@mdi/js";
// import mdi from "@mdi/js"
import * as getAction from "../../actions/getAllFormToReucer.action";
import { updateLastVisDate } from "../../actions/forms1p6.action";
import * as followUpAction from "../../actions/followUp.action";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import searchImg from '../images/search.svg'
import nodataM from '../images/no_dataM.svg'
import "moment/locale/th";

moment.locale("th");

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
  const [open, setOpen] = useState(false);
  const [switchShow, setswitchShow] = useState("main");
  
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
    dispatch(followUpAction.getFollowUpById(value.ELD_ID_NUMBER))
    dispatch(getAction.resetCollectFromReducer())
    dispatch(getAction.resetDateAllForm())
    const d = new Date();
    const visDate = `${d.getFullYear()+543}-${d.getMonth() + 1}-${d.getDate()}`;
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
    dispatch(elderly.getHistoryEld(value.ELD_ID_NUMBER))
    console.log("value: ", value);
    setOpen(true);
  }
  const followUp = useSelector(({ followUpReducer }) => followUpReducer.result);
  useEffect(() => {
    console.log("get follow up ", followUp)
  }, [followUp])

  const createNewForm = (eldId) => {
    dispatch(getAction.resetCollectFromReducer())
    console.log("eldId ", eldId);
    const d = new Date();
    const visDate = `${d.getFullYear()+543}-${d.getMonth() + 1}-${d.getDate()}`;
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
      {
        elderlyReducer.isFetching === true
        ? [1,1,1,1,1,1,1,1,1,1].map(()=>{
          return <React.Fragment>
            <br/>
            <Skeleton variant="rect" width={300} height={24} style={{ borderRadius: 3 }} />
          </React.Fragment>
        })
        : <div className="inner-seach2">
        {elderlyReducer.result.length !== 0 ?
          elderlyReducer.result.map((value, index) => {
            return (
              <div>
                <Paper
                  className="paper-show"
                  onClick={() => {
                    handleClickOpen(value)
                    dispatch(getAction.getDisease(value.ELD_ID_NUMBER))
                    dispatch(getAction.getEducate(value.ELD_ID_NUMBER))
                  }}
                >
                  {`${value.ELD_ID_NUMBER}   ${value.ELD_FIRSTNAME} ${value.ELD_LASTNAME}`}
                </Paper>
              </div>
            );
          })
          : elderlyReducer.isFetching === null 
          ? <img src={searchImg} style={{ maxHeight: 250 }} />
          : <img src={nodataM} style={{ maxHeight: 250 }} />
        }

        {elderlyReducer.resultSelected !== null && (
          <Dialog
            open={open}
            keepMounted
            onClose={() => {
              setOpen(false)
              setTimeout(() => {
                setswitchShow("main")
              }, 200);
            }}
            className={classes.title}
            contentStyle={{ width: "100%", maxWidth: "none" }}
          >
          {
            switchShow === "main" ? (
              <React.Fragment>
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
                    {/* {moment(elderlyReducer.resultSelected.ELD_LAST_VISIT_DATE).add(543, 'year').format("LL")} */}
                    {moment(elderlyReducer.resultSelected.ELD_LAST_VISIT_DATE).format("dddd")} ที่ {moment(elderlyReducer.resultSelected.ELD_LAST_VISIT_DATE).format("LL")}
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
                          dispatch({
                            type: "VIS_ID",
                            payload: [null,elderlyReducer.resultSelected.ELD_ID_NUMBER],
                          })
                          createNewForm(elderlyReducer.resultSelected.ELD_ID_NUMBER);

                        }}
                        fullWidth
                      >
                        เก็บข้อมูลสุขภาพ
                      </Button>
                    </Link>
                  </div>
                )}
                <div className="bt-searchInfo">
                  <Link className="bt-searchInfo-link" onClick={()=>setswitchShow("history")}>
                    <Button className="btn btn-light" variant="contained" fullWidth>
                      ประวัติการตรวจ
                    </Button>
                  </Link>
                </div>
                <div className="bt-searchInfo">
                  <Link className="bt-searchInfo-link" onClick={()=>setswitchShow("followup")}>
                    <Button color="secondary" variant="contained" fullWidth>
                      ติดตามผล
                    </Button>
                  </Link>
                </div>
                <div className="bt-searchInfo">
                  <Link to="/editeld" className="bt-searchInfo-link">
                    {/* <Button className="bt1" onClick={saveSelected}> */}
                    <Button className="bt3" variant="contained" fullWidth>
                      แก้ไขข้อมูลพื้นฐาน
                    </Button>
                  </Link>
                </div>
              </React.Fragment>
            ): switchShow === "history" ? (
              <React.Fragment>
                <DialogTitle>
                  <ArrowBackIcon onClick={()=>setswitchShow("main")}/> ประวัติการตรวจของ คุณ
                  {`${elderlyReducer.resultSelected.ELD_FIRSTNAME} ${elderlyReducer.resultSelected.ELD_LASTNAME}`}
                </DialogTitle>
                <DialogContent>
                    {elderlyReducer.history.map(value=>{
                      return (
                        <React.Fragment>
                          <div className="bt-searchInfo">
                            <Link className="bt-searchInfo-link">
                              <Button 
                              className="btn btn-light" 
                              variant="contained"
                              onClick={()=>{
                                dispatch(getAction.resetCollectFromReducer())
                                dispatch(getAction.resetDateAllForm())
                                const data = [value.VIS_ID,elderlyReducer.resultSelected.ELD_ID_NUMBER]
                                dispatch({
                                  type: "VIS_ID",
                                  payload: data,
                                })
                                dispatch(getAction.getCollect(value.VIS_ID));
                                dispatch(getAction.getAllResult(value.VIS_ID));
                                if(!forms2Reducer.isFetching){
                                  setTimeout(() => {
                                    history.push("/mainmenu");
                                  }, 500);
                                }
                              }}
                              fullWidth>
                                การตรวจวัน{moment(value.VIS_DATE).format("dddd")} ที่ {moment(value.VIS_DATE).format("LL")}
                              </Button>
                            </Link>
                          </div>
                        </React.Fragment>
                      )
                    })}
                </DialogContent>
              </React.Fragment>
            ): switchShow === "followup" && (
              <React.Fragment>
                <DialogTitle>
                  <ArrowBackIcon onClick={()=>setswitchShow("main")}/> การติดการผล คุณ
                  {`${elderlyReducer.resultSelected.ELD_FIRSTNAME} ${elderlyReducer.resultSelected.ELD_LASTNAME}`}
                </DialogTitle>
                <DialogContent>
                    {followUp.map(value=>{
                      return (
                        <React.Fragment>
                          {
                            value.APPOINT_DATE !== null && !value.APP_FLAG &&
                            <div className="bt-searchInfo">
                            <Link className="bt-searchInfo-link">
                              <Button 
                              className="btn btn-light" 
                              variant="contained"
                              onClick={()=>{
                                dispatch(getAction.resetCollectFromReducer())
                                dispatch(getAction.setDataToDefaultForAllSection())
                                dispatch(followUpAction.selectedFollowUp(value))
                                // setTimeout(() => {
                                  history.push("/followupmenu");
                                // }, 300);
                              }}
                              fullWidth>
                                ติดตามผลวัน{moment(value.APPOINT_DATE).format("dddd")} ที่ {moment(value.APPOINT_DATE).format("LL")} {value.APP_NAME}
                              </Button>
                            </Link>
                          </div>
                          }
                        </React.Fragment>
                      )
                    })}
                </DialogContent>
              </React.Fragment>
            )
          }
          </Dialog>
        )}
      </div>
      }
    </React.Fragment>
  );
}
