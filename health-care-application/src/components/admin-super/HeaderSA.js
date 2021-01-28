import React from "react";
import { Avatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { Link,useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth.action";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function HeaderSA({ name }) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
    window.location.reload();
  };
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
                <Avatar className={classes.orange}>{name.substring(0,1)}</Avatar>
                <i className="info">
                  <a className="d-block">{name}</a>
                </i>
              </i>
            </a>

            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right"> 
            <Link to={`${url}/profile`}>
              <a href="#" className="dropdown-item">
                <i className="fas fa-user" style={{ paddingRight: 10 }}></i>
                ข้อมูลส่วนตัว
              </a>
               </Link>
               <Link to={`${url}/editpassadmin`}>
                <a href="#" className="dropdown-item">
                  <i class="fas fa-key" style={{ paddingRight: 10 }}></i>
                  เปลี่ยนรหัสผ่าน
                </a>
            </Link>
              <div
                className="dropdown-divider"
                onClick={logOut}
              />
              <a href="/login" className="dropdown-item" onClick={logOut}>
                <i class="fas fa-sign-out-alt" style={{ paddingRight: 10 }} onClick={logOut}></i>
                ออกจากระบบ
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
