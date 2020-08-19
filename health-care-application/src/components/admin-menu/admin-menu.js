import React from "react";
import logo1 from '../images/logo-saensukcity.png'

export default function adminMenu() {
  return (
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link" style={{marginTop:10, marginBottom:10}}>
        <img
          src={logo1}
          alt="Logo"
          className="brand-image img-circle elevation-3"
          // style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Project Name</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div> */}
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-home" />
                <p>
                  หน้าแรก
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              {/* sub-menu */}
              {/* <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul> */}
            </li>

            <li className="nav-item">
              <a href="pages/widgets.html" className="nav-link">
                <i className="nav-icon fas fa-users-cog" />
                <p>
                  จัดการผู้ดูแลระบบ
                  {/* <span className="right badge badge-danger">New</span> */}
                </p>
              </a>
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
            
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
