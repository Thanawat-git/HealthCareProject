import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, ListItem, ListItemIcon } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Header from "../volunteer/Header";
import { Link, useHistory, useRouteMatch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SumaryReport from "./SumaryReport";
// import { USERLOGIN } from "../../constants";
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
  const collectMM = useSelector(({ forms7mReducer }) => forms7mReducer.collect);
  const classes = useStyles();
  const [i2, setI2] = useState("");
  const [i3, setI3] = useState("");
  const [i4, setI4] = useState("");
  const [i5, setI5] = useState("");
  const [i6, setI6] = useState("");
  const [i7, setI7] = useState("");
  const [i8, setI8] = useState("");
  const [i9, setI9] = useState("");
  const [i10, setI0] = useState("");
  const [i11, setI11] = useState("");

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
    collectMM && setI11("green");
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
    i11: {
      color: i11,
    },
  });
  const colorIcon = useStyles2();
  const visitID = useSelector(({ visitID }) => visitID.visiId);
   console.log('visitID ',visitID)
  const peopleID = useSelector(({ visitID }) => visitID.peopleId);
  useEffect(() => {
    dispatch(getAction.getEducate(peopleID));
  }, []);
  // const { user } = useSelector((state) => state.authReducer);
  let history = useHistory();
  const dispatch = useDispatch();
  const elderlyReducer = useSelector(({ elderlyReducer }) => elderlyReducer);
  const { user } = useSelector((state) => state.authReducer);

  const getData = (sec) => {

    switch (sec) {
      case "sec2":
        dispatch(getAction.getDataSec2(history, visitID, `${url}/sec2`));

        break;
      case "sec3":
        dispatch(getAction.getDataSec3(history, visitID, `${url}/sec3`));

        break;
      case "sec4":
        dispatch(getAction.getDataSec4(history, visitID, `${url}/sec4`));
  
        break;
      case "sec5":
        dispatch(getAction.getDataSec5(history, visitID, `${url}/sec5`));

        break;
      case "sec6":
        dispatch(getAction.getDataSec6(history, visitID, `${url}/sec6`));
        dispatch(getAction.getDataTai(visitID));
    
        break;
      case "sec7":
        dispatch(getAction.getDataSec7(history, visitID, `${url}/sec7`));
        dispatch(getAction.getDatammse(visitID));
  
        break;
      case "sec8":
        dispatch(getAction.getDataSec8(history, visitID, `${url}/sec8_1`));
  
        break;
      case "sec9":
        dispatch(getAction.getDataSec9(history, visitID, `${url}/sec9`));
        dispatch(getAction.getDataSec92(visitID));
  
        break;
      case "sec10":
        dispatch(getAction.getDataSec10(history, visitID, `${url}/sec10`));
   
        break;
      case "mmsi":
        dispatch(getAction.getDatammse(history, visitID, `${url}/mmsi`));
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Header /> <br />
      <Card className={classes.root}>
        <h4 style={{ textAlign: "center" }}>
          คุณ{elderlyReducer.resultSelected.ELD_FIRSTNAME}{" "}
          {elderlyReducer.resultSelected.ELD_LASTNAME}
        </h4>
        <CardContent>
          <Link
            onClick={() => {
              // history.push(`${url}/sec2`)
              getData("sec2");
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
              getData("sec3");
              // history.push(`${url}/sec3`)
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
              getData("sec4");
              // history.push(`${url}/sec4`)
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
              getData("sec5");
              // history.push(`${url}/sec5`)
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
              getData("sec6");
              // history.push(`${url}/sec6`)
            }}
          >
            <ListItem button>
              <ListItemIcon>
                <CheckCircleIcon className={colorIcon.i6} />
              </ListItemIcon>
              การประเมินความสามารถในการทำกิจวัตรประจำวัน
            </ListItem>
          </Link>{" "}
          <hr />
          <Link
            onClick={() => {
              getData("sec7");
              // history.push(`${url}/sec7`)
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
              getData("sec8");
              // history.push(`${url}/sec8_1`)
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
              getData("sec9");
              // history.push(`${url}/sec9`)
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
              getData("sec10");
              // history.push(`${url}/sec10`)
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
          {user.Role !== "VOLUNTEER" && (
            <React.Fragment>
              <Link
                onClick={() => {
                  getData("mmsi");
                  // history.push(`${url}/mmsi`);
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                    <CheckCircleIcon className={colorIcon.i11} />
                  </ListItemIcon>
                  MMSE
                </ListItem>
              </Link>

              <hr />
            </React.Fragment>
          )}
          <SumaryReport />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default MainMenu;
