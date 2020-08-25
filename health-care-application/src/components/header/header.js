import React, { Component } from "react";
import "./header.css";
import logo1 from "../images/logo-saensukcity.png";
import { Container, Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand header border-bottom shadow-sm p-3 mb-5 bg-white rounded">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <img src={logo1} alt="logo" className="img-circle header-logo" />
            </a>
          </li>
        </ul>

        {/* center */}
        <ul className="mx-auto">
            <a href="#" className="nav-link">
              ProjectName
            </a>
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              {/* <i className="far fa-comments" /> */}
              {/* <span className="badge badge-danger navbar-badge">10</span> */}
              <i className="user-panel d-flex">
                <i className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle"
                    alt="User Image"
                  />
                </i>
                <i className="info">
                  <a href="#" className="d-block">
                    <i className="fas fa-bars" />
                  </a>
                </i>
                {/* <i className="nav-icon fas fa-caret-down"></i> */}
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

          {/* <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
          >
            <i className="fas fa-caret-down" />
          </a>
        </li> */}
        </ul>
      </nav>
    );
  }
}

export default Header;
