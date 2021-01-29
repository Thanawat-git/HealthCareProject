import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, Divider, Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import './volunteer.css'
import { Link,useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/auth.action";
import { resetDateAllForm, resetCollectFromReducer, setDataToDefaultForAllSection } from "../../actions/getAllFormToReucer.action";
import { getEldByKeyword } from "../../actions/elderly.action";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#fff",
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
});
export default function Header() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [state, setState] = useState({
    left: false,
  });
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
    window.location.reload();
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/editaccount">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <Avatar>{user.Fullname.substring(0,1)}</Avatar>{" "}
            </ListItemIcon>
            <ListItemText primary={user.Fullname} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List className="link">
        {/* <Link to={`${url}/editaccount`}> */}
        <Link to="/editaccount">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <AccountBoxIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="แก้ไขข้อมูลส่วนตัว" />
          </ListItem>
        </Link>
        <Link to="/editpassword">
          <ListItem button>
            <ListItemIcon>
              {" "}
              <VpnKeyIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="เปลี่ยนรหัสผ่าน" />
          </ListItem>
        </Link>
        <Link to="/login" onClick={logOut}>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="ออกจากระบบ" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <div className="nav-vtcontainer linkicon">
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Button onClick={toggleDrawer("left", true)} color="inherit">
              <MenuIcon />
            </Button>
            <Drawer
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          
            <Typography variant="h6" className={classes.title}>
                <Link to="/volunteerpage/search" 
                onClick={()=>{
                  dispatch(resetDateAllForm())
                  dispatch(resetCollectFromReducer())
                  dispatch(setDataToDefaultForAllSection())
                  dispatch(getEldByKeyword(""))
                }} >
              Project Name
               </Link>
            </Typography>
           
            <Link to="/login" onClick={logOut} >
              <Button color="inherit">
                <ExitToAppIcon />
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
