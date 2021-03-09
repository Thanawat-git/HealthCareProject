import React, { useEffect,useState } from "react";
import logo1 from "../images/logo-saensukcity.png";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

export default function LeftSideBarMenu() {
  const { url } = useRouteMatch();
  const [countFollowUp, setcountFollowUp] = useState(null)
  const user = useSelector(({authReducer}) => authReducer.user);

  return (
    <React.Fragment>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to={`${url}/`} className="brand-link">
          <img
            src={logo1}
            alt="Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text font-weight-light">ระบบคัดกรองสุขภาพ</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to={`${url}/`} className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>หน้าแรก</p>
                </Link>
              </li>

              {user.Role!=="ADMIN" && user.Role!=="VOLUNTEER" && 
                <li className="nav-item">
                <Link to={`${url}/admin-content`} className="nav-link">
                  <i className="nav-icon fas fa-users-cog" />
                  <p>จัดการผู้ดูแลระบบ</p>
                </Link>
                </li>
              }

              <li className="nav-item">
                <Link to={`${url}/volunteer-content`} className="nav-link">
                  <i className="nav-icon fas fa-user-shield" />
                  <p>จัดการอาสาสมัคร</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={`${url}/eldery`} className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>จัดการผู้สูงอายุ</p>
                </Link>
              </li>

              <li className="nav-header">อื่นๆ</li>
              <li className="nav-item">
                <Link to={`${url}/followup`} className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    ติดตามผล
                    <span className="badge badge-info right">{countFollowUp}</span>
                  </p>
                </Link>
              </li>

              {/* Report */}
              <li className="nav-item">
                <Link to={`${url}/reports`} className="nav-link">
                  <i className="nav-icon fas fa-file-alt" />
                  <p>รายงาน</p>
                </Link>
              </li>

              {/* Report */}
              <li className="nav-item">
                <Link to={`${url}/medicalhistory`} className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>ประวัติการตรวจ</p>
                </Link>
              </li>

              {/* up date form */}
              {/* <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-paste" />
                  <p>
                    Form
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ข้อมูลพื้นฐาน</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ส่วนที่ 1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>ส่วนที่ 2</p>
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </React.Fragment>
  );
}
