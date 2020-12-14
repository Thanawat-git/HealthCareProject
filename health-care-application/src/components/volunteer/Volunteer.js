import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Button, Divider, Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './volunteer.css'
import Search from './Search'
import { Link,useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/auth.action";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#fff',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

export default function Volunteer() {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      <Link to={`${url}/editaccount`} > 
        <ListItem button>
          <ListItemIcon> <Avatar>U</Avatar> </ListItemIcon>
          <ListItemText primary='Volunteer User Name' />
        </ListItem>
        </Link>
      </List>
      <Divider />
      <List className="link" >
        <Link to={`${url}/editaccount`} >
          <ListItem button >
            <ListItemIcon> <AccountBoxIcon /> </ListItemIcon>
            <ListItemText primary='แก้ไขข้อมูลส่วนตัว' />
          </ListItem>
        </Link>
        <Link to={`${url}/editpassword`}>
          <ListItem button >
            <ListItemIcon> <VpnKeyIcon /> </ListItemIcon>
            <ListItemText primary='เปลี่ยนรหัสผ่าน' />
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary='ออกจากระบบ' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className="vtcontainer">
 
      <div className="seach-eld">
        <h3>ค้นหาผู้สูงอายุ</h3>
        <Search />
      </div>
      <div id="piechart_3d" style={{ width: 900, height: 500 }}></div>
      <div className="nav-bottom">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Link to="/sec1-page1">
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <PersonAddIcon />
              </Fab>
            </Link>
            <p>เพิ่มผู้สูงอายุรายใหม่</p>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
