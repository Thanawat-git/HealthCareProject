import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Button,
  Card,
  NavLink,
  FormControl,
} from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container fluid className="bg-img">
        <br />
        <br />
        <br />
        <br />
        <Card
          className="bg-transbox mx-auto"
          style={{ borderRadius: 30, borderColor: "#707070", minWidth: 300 }}
        >
          <br />
          <img className="img-displayed" src={logo1} />
          <Form className="mx-auto" style={{ maxWidth: 300 }}>
            <br />
            <Col>
              <FormGroup>
                <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
                <FormControl
                  type="text"
                  maxLength="13"
                  minLength="13"
                  name="username"
                  placeholder="เลขบัตรประชาชน"
                  required
                ></FormControl>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Form.Label>รหัสผ่าน</Form.Label>
                <FormControl
                  type="password"
                  minLength="8"
                  maxLength="25"
                  name="password"
                  placeholder="รหัสผ่าน"
                  required
                ></FormControl>
                <Button
                  onClick={()=>this.props.history.push("/verify")}
                  className="forget-pw text-muted"
                  size="sm"
                  variant="link"
                >
                  ลืมรหัวผ่าน?
                </Button>
                <br />
              </FormGroup>
            </Col>
            <Button
              onClick={()=>this.props.history.push("/home")}
              color="primary"
              className="mx-auto d-block"
              style={{ borderRadius: 20 }}
            >
              Login
            </Button>
          </Form>
          <p style={{ textAlign: "center" }}>MyApp 2020</p>
        </Card>
      </Container>
    );
  }
}
export default Login;
