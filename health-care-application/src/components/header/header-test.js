import React, { Component } from "react";
import "./header.css";
import logo1 from "../images/logo-saensukcity.png";
import { Container, Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container fluid className="header border-bottom shadow-sm p-3 mb-5 bg-white rounded">
        <Navbar expand="lg" className="header-navbar">
          <Navbar.Brand href="#home">
            <img
              className="header-logo"
              alt="logo"
              src={logo1}
            />
          </Navbar.Brand>
          <Nav.Link href="#home">
            Project Name
          </Nav.Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav.Link href="#home" className="header-link">
                ข้อมูลส่วนตัว
            </Nav.Link>
            <Nav.Link href="#home" className="header-link">
                เปลี่ยนรหัสผ่าน
            </Nav.Link>
            <Nav.Link href="../login" className="header-link">
                ออกจากระบบ
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
