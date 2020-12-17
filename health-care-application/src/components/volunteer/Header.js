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
  const handlingButtonClick = () => {
    //doing redirect here.
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
        <Link to={`${url}/editaccount`}>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <Avatar>U</Avatar>{" "}
            </ListItemIcon>
            <ListItemText primary="Volunteer User Name" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List className="link">
        <Link to={`${url}/editaccount`}>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <AccountBoxIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="แก้ไขข้อมูลส่วนตัว" />
          </ListItem>
        </Link>
        <Link to={`${url}/editpassword`}>
          <ListItem button>
            <ListItemIcon>
              {" "}
              <VpnKeyIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="เปลี่ยนรหัสผ่าน" />
          </ListItem>
        </Link>
        <Link to="/login">
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
              Project Name
            </Typography>
            <Link to="/login">
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