import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import FollowMenu from "../../../Forms/FollowUpMenu";
import { Sec2F } from "../../../Forms/Sections2";
import { Sec3F } from "../../../Forms/Sections3";
import { Sec5F } from "../../../Forms/Sections5";
import { useDispatch, useSelector } from "react-redux";
import * as getAction from "../../../../actions/getAllFormToReucer.action";
import * as FAction from "../../../../actions/followUp.action";
import * as appAction from "../../../../actions/appointment.action";
import { SELECT_SECTION } from "../../../../constants";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// use css from content.css


export default function DoFollow({ value,headKey }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const selectFormSection = useSelector(
    ({ selectFormSection }) => selectFormSection
  );
  const selectFollowUp = useSelector(({ followUpReducer }) => followUpReducer.resultSelected);
  const openFollowMenu = () => {
    dispatch(FAction.selectedFollowUp(value));
    dispatch({
      type: SELECT_SECTION,
      payload: "followupmenu",
    });
    dispatch({
        type: 'VIS_ID',
        payload: [null, value.ELD_ID_NUMBER]
    })
    setOpen(true);
  };
  const submitAppointment = ()=> {
    setOpen(false);
    console.log("submitAppointment desktop")
    appAction.clearAppointment(selectFollowUp.APP_ID)
    dispatch(getAction.setDataToDefaultForAllSection());
    
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'ติดตามผลสำเร็จ',
        showConfirmButton: false,
        timer: 1500
      })
    setTimeout(() => {
        dispatch(FAction.getFollowUp(headKey))
    }, 100);
  }
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-success"
        onClick={openFollowMenu}
      >
        ดำเนินการ
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        maxWidth="md"
        className="d-follow"
        fullWidth={true}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle
          style={{ textAlign: "center" }}
          onClick={() => {
            dispatch({
              type: SELECT_SECTION,
              payload: "followupmenu",
            });
          }}
        >
          การติดตามผล
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          {/* ข้อมูลการตรวจของคุณ {value.ELD_NAME} วัน{moment(value.VIS_DATE).format("dddd")} ที่ {moment(value.VIS_DATE).format("LL")} */}
          {selectFormSection.section === "followupmenu" ? (
            <FollowMenu />
          ) : selectFormSection.section === "sec2f" ? (
            <Sec2F />
          ) : selectFormSection.section === "sec3f" ? (
            <Sec3F />
          ) : (
            selectFormSection.section === "sec5f" && <Sec5F />
          )}
        </DialogContent>

        {/* <DialogActions> */}
        {
            selectFormSection.section === "followupmenu" &&
            <div className="row justify-content-around bt-menu-follow">
            <button
              onClick={() => {
                setOpen(false);
                dispatch(getAction.resetCollectFromReducer());
                dispatch({
                    type: SELECT_SECTION,
                    payload: "mainmenu",
                  });
              }}
              className="btn btn-secondary btn-lg"
            >
              ยกเลิก
            </button>
            <button
              onClick={submitAppointment}
              className="btn btn-success btn-lg"
            >
              บันทึกข้อมูล
            </button>
            </div>

        }
        
        {/* </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
