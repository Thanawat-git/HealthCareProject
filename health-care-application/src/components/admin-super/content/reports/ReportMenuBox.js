import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BodySize from "../../../images/weight-loss.svg";
import { Button, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "auto",
      height: "14rem",
      background: "#D6E6F2",
    },
  },
}));

export default function ReportMenuBox({ title, eachImg }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className="report-box-content">
        <h4>{title}</h4>
        <div className="report-box-content-img">
          <img src={BodySize} />
        </div>
        <div className="report-box-content-bt">
          <Button fullWidth>ดูรายงาน</Button>
        </div>
      </Paper>
    </div>
  );
}
