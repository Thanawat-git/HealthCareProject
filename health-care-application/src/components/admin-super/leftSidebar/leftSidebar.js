import React from 'react'
import logo1 from '../../images/logo-saensukcity.png'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom'

export default function LeftSidebar() {
  const { url } = useRouteMatch()
  // console.log('url', url)

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link" style={{marginTop:10}}>
        <img
          src={logo1}
          alt="Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">Project Name</span>
      </a>
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
              <Link to={`${url}/main-content`} className="nav-link">
                <i className="nav-icon fas fa-home" />
                <p>หน้าแรก</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={`${url}/admin-content`} className="nav-link">
                <i className="nav-icon fas fa-users-cog" />
                <p>
                  จัดการผู้ดูแลระบบ
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-user-shield" />
                <p>
                  จัดการอาสาสมัคร
                </p>
              </a>
            </li>

            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-star-of-life" />
                <p>
                  จัดการแพทย์
                </p>
              </a>
            </li>

            <li className="nav-header">อื่นๆ</li>
            <li className="nav-item">
              <a href="pages/calendar.html" className="nav-link">
                <i className="nav-icon fas fa-calendar-alt" />
                <p>
                  ตารางนัดหมาย
                  <span className="badge badge-info right">2</span>
                </p>
              </a>
            </li>

            {/* Report */}
            <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-file-alt" />
                  <p>
                    Report
                  </p>
                </a>
              </li>

            {/* up date form */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-align-left" />
                <p>
                  Form
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* sub-menu */}
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
            </li>
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
