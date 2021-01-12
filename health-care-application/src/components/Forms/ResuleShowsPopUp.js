import React from "react";
import { BackToMainmenuBT } from "../AppButtons";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

function ResuleShowsPopUp(props) {
  return (
    <Dialog
      open={props.show}
      scroll="paper"
      maxWidth="xs"
      fullWidth={true}
    >
      <DialogTitle style={{ textAlign: "center" }}>{props.title}</DialogTitle>
      <DialogContent>
        <div className="row">
          <div className="col-12 col-xl-6 title-result">
            <p> ผลการประเมิน </p>
          </div>
          <div className="col-12 col-xl-6 result-result">
            <p> {props.result} </p>
          </div>
        </div>
        <BackToMainmenuBT />
      </DialogContent>
    </Dialog>
  );
}
export default ResuleShowsPopUp;
