import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Fab, Toolbar } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './volunteer.css'
import Search from './Search'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetDataFromReducer } from "../../actions/resetDataSec1.action";

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
  let history = useHistory();
  const dispatch = useDispatch()
  const creactNewEld = () => {
    dispatch(resetDataFromReducer())
    setTimeout(() => {
      history.push("/sec1-page1");
    }, 200);
    
  }

  return (
    <div className="vtcontainer">
 
      <div className="seach-eld">
        <h3>ค้นหาผู้สูงอายุ</h3>
        <Search />
      </div>
      <div className="nav-bottom">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Link name="createeld" onClick={()=>creactNewEld()} >
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
