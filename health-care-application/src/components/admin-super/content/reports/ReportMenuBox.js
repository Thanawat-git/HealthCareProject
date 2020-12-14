import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BodySize from "../../../images/weight-loss.svg";
import BMI from "../../../images/bmi.svg";
import Heart from "../../../images/heart.svg";
import Heart2 from "../../../images/heart2.svg";
import Bone from "../../../images/bone.svg";
import Brain from "../../../images/brain.svg";
import Day from "../../../images/day.svg";
import Eye from "../../../images/eye.svg";
import Toilet from "../../../images/toilet.svg";
import Bad from "../../../images/bad.svg";
import Mouth from "../../../images/mouth.svg";
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
        <strong><h4>{title}</h4></strong>
        <div className="report-box-content-img">
          {
            eachImg=='1' ? <img src={BodySize} />:
            eachImg=='2' ? <img src={BMI} />:
            eachImg=='3' ? <img src={Heart2} />:
            eachImg=='4' ? <img src={BodySize} />:
            eachImg=='5' ? <img src={Heart} />:
            eachImg=='6' ? <img src={Eye} />:
            eachImg=='7' ? <img src={Mouth} />:
            eachImg=='8' ? <img src={Day} />:
            eachImg=='9' ? <img src={BodySize} />:
            eachImg=='10' ? <img src={Brain} />:
            eachImg=='11' ? <img src={BodySize} />:
            eachImg=='12' ? <img src={Bad} />:
            eachImg=='13' ? <img src={Bone} />:
            <img src={Toilet} />
          }
          
        </div>
        <div className="report-box-content-bt">
          <Button fullWidth>ดูรายงาน</Button>
        </div>
      </Paper>
    </div>
  );
}
