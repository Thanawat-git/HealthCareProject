import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo1 from '../../images/logo-saensukcity.png'

// add active class on click


export default function leftSidebar() {

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link" style={{ marginTop: 10 }}>
          <img
            src={logo1}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            // style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Project Name</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar" id="sidemenu">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/medical-staff" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>
                    หน้าแรก
                  </p>
                </Link>
              </li>

              <li className="nav-header">อื่นๆ</li>
              <li className="nav-item">
                <Link to="/follow-up" className="nav-link active">
                  <i className="nav-icon fas fa-calendar-alt" />
                  <p>
                    ตารางนัดหมาย
                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li>

            {/* Report */}
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-file-alt" />
                  <p>
                    Report
                  </p>
                </Link>
              </li>

              {/* up date form */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i class="nav-icon fas fa-align-left"></i>
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
  )
}
