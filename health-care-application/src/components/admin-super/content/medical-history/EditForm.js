import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import MainMenuInFormHistory from "./MainMenuInFormHistory";
import { Sec2 } from "../../../Forms/Sections2";
import { Sec3 } from "../../../Forms/Sections3";
import { Sec4 } from "../../../Forms/Sections4";
import { Sec5 } from "../../../Forms/Sections5";
import { Sec6, Tai } from "../../../Forms/Sections6";

import { Mmsi, Sec7 } from "../../../Forms/Sections7";
import { Sec8_1, Sec8_9q } from "../../../Forms/Sections8";
import { Sec9, Sec9_2 } from "../../../Forms/Sections9";
import { Sec10 } from "../../../Forms/Sections10";
import { useDispatch, useSelector } from "react-redux";
import * as getAction from "../../../../actions/getAllFormToReucer.action";

export default function EditForm({ value }) {
  const [open, setOpen] = useState(false);

  const selectFormSection = useSelector(({selectFormSection}) => selectFormSection)
  useEffect(() => {
    console.log("edit form value ", value);
    console.log("edit form name ", value.ELD_NAME.split(" ")[0]);
  }, []);
  const dispatch = useDispatch();
  const getForm = () => {
    
    const data = [value.VIS_ID, value.ELD_ID_NUMBER];
    dispatch({
      type: "VIS_ID",
      payload: data,
    });
    dispatch(getAction.getCollect(value.VIS_ID));
    dispatch(getAction.getAllResult(value.VIS_ID));
    setTimeout(() => {
      setOpen(true);
    }, 500);
  };

  return (
    <React.Fragment>
      <button onClick={getForm} type="button" className="btn btn-info">
        แก้ไข
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll="paper"
        maxWidth="md"
        fullWidth={true}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle 
        style={{ textAlign: "center" }}
        onClick={()=>{
          dispatch({
            type: "SELECT_SECTION",
            payload: "mainmenu",
          });
        }}
        >
          แก้ไขการตรวจ
        </DialogTitle>
        <DialogContent style={{ textAlign: "center" }}>
          content
          {
          selectFormSection.section === "mainmenu" ? 
          <MainMenuInFormHistory 
          fname={value.ELD_NAME.split(" ")[0]} 
          lname={value.ELD_NAME.split(" ")[1]}
          />
          : selectFormSection.section === "sec2" ? <Sec2/>
          : selectFormSection.section === "sec3" ? <Sec3/>
          : selectFormSection.section === "sec4" ? <Sec4/>
          : selectFormSection.section === "sec5" ? <Sec5/>
          : selectFormSection.section === "sec6" ? <Sec6/>
          : selectFormSection.section === "sec7" ? <Sec7/>
          : selectFormSection.section === "sec8" ? <Sec8_1/>
          : selectFormSection.section === "s89q" ? <Sec8_9q/>
          : selectFormSection.section === "sec9" ? <Sec9/>
          : selectFormSection.section === "s92" ? <Sec9_2/>
          : selectFormSection.section === "sec10" ? <Sec10/>
          : selectFormSection.section === "tai" ? <Tai/>
          : selectFormSection.section === "mmse" && <Mmsi/>
          }
          {/* <MainMenuInFormHistory 
          fname={value.ELD_NAME.split(" ")[0]} 
          lname={value.ELD_NAME.split(" ")[1]} 
          /> */}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              dispatch(getAction.resetCollectFromReducer());
              dispatch({
                type: "SELECT_SECTION",
                payload: "mainmenu",
              });
            }}
            variant="contained"
            style={{ marginRight: 30 }}
          >
            ปิด
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
