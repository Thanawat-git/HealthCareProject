import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Avatar, Button, Divider, Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './volunteer.css'
import Search from './Search'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <ListItem button >
              <ListItemIcon> <Avatar>U</Avatar> </ListItemIcon>
              <ListItemText primary='Volunteer User Name' />
            </ListItem>
          </List>
          <Divider />
          <List className="link" >
            <ListItem button >
              <ListItemIcon> <VpnKeyIcon /> </ListItemIcon>
              <ListItemText primary='เปลี่ยนรหัสผ่าน' />
            </ListItem>
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
            <div className="nav-vtcontainer linkicon">
              <div className={classes.root}>
                <AppBar position="fixed">
                  <Toolbar>
                    <Button onClick={toggleDrawer('left', true)} color="inherit">
                    <MenuIcon />
                    </Button>
                    <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                        {list('left')}
                    </Drawer>
                    <Typography variant="h6" className={classes.title}>
                        Project Name
                    </Typography>
                    <Link to="/login">
                    <Button color="inherit"><ExitToAppIcon /></Button>
                    </Link>
                  </Toolbar>
                </AppBar>
              </div>
            </div>
            <div className="seach-eld">
            <h3>ค้นหาผู้สูงอายุ</h3>
                <Search />
            </div>
            <div id="piechart_3d" style={{width: 900, height: 500}}></div>
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
