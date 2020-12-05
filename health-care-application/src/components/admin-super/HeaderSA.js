import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function HeaderSA() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown">
              <i className="user-panel d-flex">
                <Avatar className={classes.orange}>S</Avatar>
                <i className="info">
                  <a className="d-block">
                    Super Admin Name
                  </a>
                </i>
              </i>
            </a>

            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
              <i className="fas fa-user" style={{ paddingRight: 10 }}></i>
              ข้อมูลส่วนตัว
            </a>
            <a href="#" className="dropdown-item">
              <i class="fas fa-key" style={{ paddingRight: 10 }}></i>
              เปลี่ยนรหัสผ่าน
            </a>

            <div className="dropdown-divider" />
            <a href="/login" className="dropdown-item">
              <i class="fas fa-sign-out-alt" style={{ paddingRight: 10 }}></i>
              ออกจากระบบ
            </a>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
