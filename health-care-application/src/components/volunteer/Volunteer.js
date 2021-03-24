import React, { useEffect, useState } from 'react';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Fab, Toolbar } from '@material-ui/core';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './volunteer.css'
import Search from './Search'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetDataFromReducer } from "../../actions/resetDataSec1.action";
import ConnectAlert from "../connectionAlert"
import { isReachable } from "../../services/ServerReachable"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
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
  const netErr = useSelector(({ networkCheck }) => networkCheck.err)
  const dispatch = useDispatch()
  const creactNewEld = () => {

    isReachable(dispatch)
    if(!netErr){
      dispatch(resetDataFromReducer())
      setTimeout(() => {
        history.push("/sec1-page1");
      }, 200);
    } else {
      ConnectAlert("/volunteerpage/search")
    }
    
    
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
