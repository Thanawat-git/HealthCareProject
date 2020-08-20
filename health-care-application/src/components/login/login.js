import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
import {
  Container,
  // Row,
  Col,
  Form,
  FormGroup,
  Button,
  Card,
  NavLink,
  FormControl,
} from "react-bootstrap";

const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",//กรุณากรอกเลขบัตรประชาชน 13 หลัก
        password: ""//กรุณากรอกรหัสผ่าน
      }
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`
      --Submitting--
      username: ${this.state.username}
      password: ${this.state.password}`);
    } else {
      console.error("Error");
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name,value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name){
      case 'username': 
        formErrors.username = value.length===13 ? '':'กรุณากรอกเลขบัตรประชาชน 13 หลัก';
        break;
      case 'password':
        formErrors.password = value.length>7 && value.length<25 ? '':'กรุณากรอกรหัสผ่าน 8-25 หลัก';
        break;
      default:
          break;
    }
    this.setState({formErrors,[name]:value},()=>console.log(this.state.formErrors));
  }

  render() {
    const {formErrors} = this.state;
    return (
      <Container fluid className="bg-img">

        <br /><br /><br /><br /><br />
        <Card
          className="bg-transbox mx-auto"
          style={{ borderRadius: 30, borderColor: "#707070", minWidth: 300 }}
        >
          <br />
          <img className="img-displayed" src={logo1} />
          <Form className="mx-auto" style={{ maxWidth: 300 }}>
            <br />
            <Col>
              <FormGroup className="username">
                <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
                <FormControl
                  type="text"
                  maxLength="13"
                  minLength="13"
                  name="username"
                  placeholder="เลขบัตรประชาชน"
                  required
                  // noValidate
                  // value={this.state.username}
                  onChange={this.handleChange}
                > 
                </FormControl>
                {(
              <Form.Label className="errorMessage">{this.state.formErrors.username}</Form.Label>
            )}
              </FormGroup>
              
            </Col>
            <Col>
              <FormGroup className="password">
                <Form.Label>รหัสผ่าน</Form.Label>
                <FormControl
                  type="password"
                  minLength="8"
                  maxLength="25"
                  name="password"
                  placeholder="รหัสผ่าน"
                  required
                  onChange={this.handleChange}
                ></FormControl>
                {(
              <Form.Label className="errorMessage">{this.state.formErrors.password}</Form.Label>
            )}
                <NavLink className="forget-pw text-muted" href="#">
                  ลืมรหัสผ่าน?
                  </NavLink>
                <br />
              </FormGroup>
            </Col>
            <Button
              // onClick={this.onClickValidate}
              color="primary"
              className="mx-auto d-block"
              style={{ borderRadius: 20 }}
              noValidate
              onClick={this.handleSubmit}
            >
              Login
              </Button>
          </Form>
          <br />
        </Card>

      </Container>
    );
  }
}
export default Login;
