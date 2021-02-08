import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, ListItem, ListItemIcon } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from "../volunteer/Header";
import { Link, useHistory, useRouteMatch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SumaryReport from "./SumaryReport";
import * as getAction from "../../actions/getAllFormToReucer.action";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 700,
    fontSize: 20,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    marginTop: 50,
  },
  a: {
    textDecoration: "none",
    fontSize: 20,
    color: "red",
  },
});

const useStyles3 = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function MainMenu(props) {
  const { url, path } = useRouteMatch();
  useEffect(() => {
    console.log("url in mainmenu ", url, "path ", path);
  }, []);
  const collect2 = useSelector(({ forms2Reducer }) => forms2Reducer.collect);
  const collect3 = useSelector(({ forms3Reducer }) => forms3Reducer.collect);
  const collect4 = useSelector(({ forms4Reducer }) => forms4Reducer.collect);
  const collect5 = useSelector(({ forms5Reducer }) => forms5Reducer.collect);
  const collect6 = useSelector(({ forms6Reducer }) => forms6Reducer.collect);
  const collect7 = useSelector(({ forms7Reducer }) => forms7Reducer.collect);
  const collect8 = useSelector(({ forms8Reducer }) => forms8Reducer.collect);
  // const collect89q = useSelector(({ forms89qReducer }) => forms89qReducer.collect);
  // const results8 = useSelector(({ forms8Reducer }) => forms8Reducer.results);
  const collect9 = useSelector(({ forms9Reducer }) => forms9Reducer.collect);
  const collect10 = useSelector(({ forms10Reducer }) => forms10Reducer.collect);
  const classes = useStyles();
  const classes2 = useStyles3();
  const [i2, setI2] = useState("");
  const [i3, setI3] = useState("");
  const [i4, setI4] = useState("");
  const [i5, setI5] = useState("");
  const [i6, setI6] = useState("");
  const [i7, setI7] = useState("");
  const [i8, setI8] = useState("");
  const [i9, setI9] = useState("");
  const [i10, setI0] = useState("");

  useEffect(() => {
    // console.log("ans10: ", collect10);
    collect2 && setI2("green");
    collect3 && setI3("green");
    collect4 && setI4("green");
    collect5 && setI5("green");
    collect6 && setI6("green");
    collect7 && setI7("green");
    collect8 && setI8("green");
    collect9 && setI9("green");
    collect10 && setI0("green");
  }, []);

  const useStyles2 = makeStyles({
    i2: {
      color: i2,
    },
    i3: {
      color: i3,
    },
    i4: {
      color: i4,
    },
    i5: {
      color: i5,
    },
    i6: {
      color: i6,
    },
    i7: {
      color: i7,
    },
    i8: {
      color: i8,
    },
    i9: {
      color: i9,
    },
    i10: {
      color: i10,
    },
  });
  const colorIcon = useStyles2();
  const visitID = useSelector(({ visitID }) => visitID.visiId);
  // console.log('visitID ',visitID)
  const peopleID = useSelector(({ visitID }) => visitID.peopleId);
  useEffect(() => {
    dispatch(getAction.getEducate(peopleID))
  }, [])
  // const { user } = useSelector((state) => state.authReducer);
  let history = useHistory();
  const dispatch = useDispatch();
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  const forms2Reducer = useSelector(({ forms2Reducer }) => forms2Reducer);
  const forms3Reducer = useSelector(({ forms3Reducer }) => forms3Reducer);
  const forms4Reducer = useSelector(({ forms4Reducer }) => forms4Reducer);
  const forms5Reducer = useSelector(({ forms5Reducer }) => forms5Reducer);
  const forms6Reducer = useSelector(({ forms6Reducer }) => forms6Reducer);
  // const formsTaiReducer = useSelector(({ formsTaiReducer }) => formsTaiReducer);
  const forms7Reducer = useSelector(({ forms7Reducer }) => forms7Reducer);
  // const forms7mReducer = useSelector(({ forms7mReducer }) => forms7mReducer);
  const forms8Reducer = useSelector(({ forms8Reducer }) => forms8Reducer);
  // const forms89qReducer = useSelector(({ forms89qReducer }) => forms89qReducer);
  const forms9Reducer = useSelector(({ forms9Reducer }) => forms9Reducer);
  const forms10Reducer = useSelector(({ forms10Reducer }) => forms10Reducer);

  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    dispatch(getAction.getDataSec2(visitID));
    dispatch(getAction.getDataSec3(visitID));
    dispatch(getAction.getDataSec4(visitID));
    dispatch(getAction.getDataSec5(visitID));
    dispatch(getAction.getDataSec6(visitID));
    dispatch(getAction.getDataSec7(visitID));
    dispatch(getAction.getDataSec8(visitID));
    dispatch(getAction.getDataSec9(visitID));
    dispatch(getAction.getDataSec92(visitID));
    dispatch(getAction.getDataSec10(visitID));
  }, [])

  const getData = (sec) => {
    
    switch (sec) {
      case "sec2":
        dispatch(getAction.getDataSec2(visitID));
        // dispatch({
        //   type: "FETCHING2",
        // });
        if (forms2Reducer.isFetching === false) {
          setOpen(false);
          !forms2Reducer.isError && history.push(`${url}/sec2`);
          // setOpen(true);
          // setTimeout(() => {
          //   setOpen(false);
          //   history.push(`${url}/sec2`);
          // }, 200);
          
        } else {
          // setOpen(true);
        }
        break;
      case "sec3":
        dispatch(getAction.getDataSec3(visitID));
        if (!forms3Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec3`);
          }, 200);
        }
        break;
      case "sec4":
        dispatch(getAction.getDataSec4(visitID));
        if (!forms4Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec4`);
          }, 200);
        }
        break;
      case "sec5":
        dispatch(getAction.getDataSec5(visitID));
        if (!forms5Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec5`);
          }, 200);
        }
        break;
      case "sec6":
        dispatch(getAction.getDataSec6(visitID));
        dispatch(getAction.getDataTai(visitID));
        if (!forms6Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec6`);
          }, 200);
        }
        break;
      case "sec7":
        dispatch(getAction.getDataSec7(visitID));
        // dispatch(getAction.getEducate(peopleID))
        dispatch(getAction.getDatammse(visitID))
        if (!forms7Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec7`);
          }, 200);
        }
        break;
      case "sec8":
        dispatch(getAction.getDataSec8(visitID));
        if (!forms8Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec8_1`);
          }, 200);
        }
        break;
      case "sec9":
        dispatch(getAction.getDataSec9(visitID));
        dispatch(getAction.getDataSec92(visitID));
        if (!forms9Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec9`);
          }, 200);
        }
        break;
      case "sec10":
        dispatch(getAction.getDataSec10(visitID));
        if (!forms10Reducer.isFetching) {
          setTimeout(() => {
            history.push(`${url}/sec10`);
          }, 200);
        }
        break;

      default:
        break;
    }
  };

  return (
    <React.Fragment>
      
      <Header /> <br />
      <Backdrop className={classes2.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Card className={classes.root}>
        <h4 style={{ textAlign: "center" }}>
          คุณ{elderlyReducer.resultSelected.ELD_FIRSTNAME}{" "}
          {elderlyReducer.resultSelected.ELD_LASTNAME}
        </h4>
        <CardContent>
          <Link
            onClick={() => {
              history.push(`${url}/sec2`)
              // getData("sec2");
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i2} />
              </ListItemIcon>
              แบบคัดกรองสภาวะสุขภาพ
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec3");
              history.push(`${url}/sec3`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i3} />
              </ListItemIcon>
              ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec4");
              history.push(`${url}/sec4`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i4} />
              </ListItemIcon>
              แบบคัดกรองสุขภาพตา
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec5");
              history.push(`${url}/sec5`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i5} />
              </ListItemIcon>
              การประเมินสุขภาพช่องปาก
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec6");
              history.push(`${url}/sec6`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i6} />
              </ListItemIcon>
              การประเมินความสามารถในการทำกิจวัตรประจำ
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec7");
              history.push(`${url}/sec7`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i7} />
              </ListItemIcon>
              การประเมินภาวะสมองเสื่อม
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec8");
              history.push(`${url}/sec8_1`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i8} />
              </ListItemIcon>
              การคัดกรองโรคซึมเศร้า
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec9");
              history.push(`${url}/sec9`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i9} />
              </ListItemIcon>
              สุขภาพกระดูกและกล้ามเนื้อ
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              // getData("sec10");
              history.push(`${url}/sec10`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i10} />
              </ListItemIcon>
              การคัดกรองการกลั้นปัสสาวะ
            </ListItem>
          </Link>
          <hr />
          <SumaryReport />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default MainMenu;
