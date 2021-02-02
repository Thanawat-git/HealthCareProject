import React from "react";
import Header from "../volunteer/Header";
import { Sec2F } from "../Forms/Sections2";
import { Sec3F } from "../Forms/Sections3";
import { Sec5F } from "../Forms/Sections5";
import { makeStyles } from "@material-ui/core/styles";
import * as appAction from "../../actions/appointment.action";
import { Card, CardContent, ListItem, ListItemIcon, Button } from "@material-ui/core";
import { Link, useHistory, useRouteMatch, Route, Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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

function Menu() {
  const { url, path } = useRouteMatch();
  const classes = useStyles();
  let history = useHistory();
  const selectFollowUp = useSelector(({ followUpReducer }) => followUpReducer.resultSelected);

  const submitAppointment = ()=> {
    MySwal.fire({
      title: 'ตรวจสอบข้อมูล',
      text: "กรุณาตรวจสอบข้อมูลให้ถูกต้องก่อนกด บันทึกข้อมูล เนื่องจากจะไม่สามารถแก้ไขข้อมูลได้หากบันทึกข้อมูลแล้ว !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'บันทึกข้อมูล',
      confirmButtonColor: '#4BB543',
      cancelButtonText: 'ยกเลิก',
      cancelButtonColor: '#d33',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        appAction.clearAppointment(selectFollowUp.APP_ID)
        MySwal.fire(
          'บันทึกข้อมูลสำเร็จ',
          'การติดตามผลสำเร็จ',
          'success'
        )
        history.push("/volunteerpage");
      }
    })
  }

  return (
    <React.Fragment>
      <Header /> <br />
      <Card className={classes.root}>
        <h4 style={{ textAlign: "center" }}>การติดตามผลการตรวจคุณ {selectFollowUp.ELDER.FIRSTNAME} {selectFollowUp.ELDER.LASTNAME} </h4>
        <CardContent>
          <Link
            onClick={() => {
              history.push(`${url}/sec2f`);
            }}
          >
            <ListItem button>
              <ListItemIcon>
              </ListItemIcon>
              แบบคัดกรองสภาวะสุขภาพ
            </ListItem>
          </Link>
          {
            selectFollowUp.APP_NAME === "โรคหัวใจและหลอดเลือด" && (
              <React.Fragment>
              <hr />
              <Link
                onClick={() => {
                  history.push(`${url}/sec3f`);
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  ความเสี่ยงต่อโรคหัวใจและหลอดเลือด
                </ListItem>
              </Link>{" "}
              <hr />
              </React.Fragment>
            )
          }
          {
            selectFollowUp.APP_NAME === "ตรวจสุขภาพช่องปาก" && (
              <React.Fragment>
              <hr />
              <Link
                onClick={() => {
                  history.push(`${url}/sec5f`);
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  การประเมินสุขภาพช่องปาก
                </ListItem>
              </Link>
              </React.Fragment>
            )
          }
          
          <div>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={submitAppointment}
            >
              บันทึกข้อมูล
            </Button>
          </div>

        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default function FollowUpMenu() {
  const { path } = useRouteMatch();
  const redirectToFollowmenu = () => {
    return <Redirect to={`${path}/`} />;
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${path}/sec2f`} component={Sec2F} />
        <Route path={`${path}/sec3f`} component={Sec3F} />
        <Route path={`${path}/sec5f`} component={Sec5F} />
        <Route path={`${path}/`} component={Menu} />
        <Route exact={true} path={`${path}/`} component={redirectToFollowmenu} />
      </Switch>
    </React.Fragment>
  );
}
