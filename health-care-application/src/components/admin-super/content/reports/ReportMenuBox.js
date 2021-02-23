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
import { useSelector } from "react-redux";

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
  const [loading, setLoading] = React.useState(true)
  const f0 = useSelector(({ chart9Reducer }) => chart9Reducer.isFetching);
  const f1 = useSelector(({ chart10Reducer }) => chart10Reducer.isFetching);
  const f2 = useSelector(({ chart11Reducer }) => chart11Reducer.isFetching);
  const f3 = useSelector(({ chart14Reducer }) => chart14Reducer.isFetching);
  const f4 = useSelector(({ chart16Reducer }) => chart16Reducer.isFetching);
  const f5 = useSelector(({ chart17Reducer }) => chart17Reducer.isFetching);
  const f6 = useSelector(({ chart18Reducer }) => chart18Reducer.isFetching);
  const f7 = useSelector(({ chart20Reducer }) => chart20Reducer.isFetching);
  const f8 = useSelector(({ chart21Reducer }) => chart21Reducer.isFetching);
  const f9 = useSelector(({ chart22Reducer }) => chart22Reducer.isFetching);
  const f10 = useSelector(({ chart23Reducer }) => chart23Reducer.isFetching);
  const f11 = useSelector(({ chart31Reducer }) => chart31Reducer.isFetching);
  const f12 = useSelector(({ chart32Reducer }) => chart32Reducer.isFetching);
  const f13 = useSelector(({ chart33Reducer }) => chart33Reducer.isFetching);
  const f14 = useSelector(({ chart35Reducer }) => chart35Reducer.isFetching);
  const f15 = useSelector(({ chart36Reducer }) => chart36Reducer.isFetching);
  const f16 = useSelector(({ chart37Reducer }) => chart37Reducer.isFetching);

  React.useEffect(()=>{
    if(f0&&f1&&f2&&f3&&f4&&f5&&f6&&f7&&f8&&f9&&f10&&f11&&f12&&f13&&f14&&f15&&f16){

    } else {
      setLoading(false)
    }
  },[f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16])

  return (
    <div className={classes.root}>
      <Paper className="report-box-content">
      {!loading
        ? <React.Fragment>
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
          </React.Fragment>
        : <React.Fragment>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </React.Fragment>
      }
        
      </Paper>
    </div>
  );
}
