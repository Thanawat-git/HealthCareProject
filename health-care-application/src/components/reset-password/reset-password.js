import React, { Component } from "react";
import "../verify-identity/verify-identity.css";
import "../validation/validation";
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";
import Popup from "../popup/popup";

const formValid = (formErrors) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: null,
      confirmPasword: null,
      formErrors: {
        newPassword: "", //กรุณากรอกเลขบัตรประชาชน 13 หลัก
        confirmPasword: "", //กรุณากรอกรหัสผ่าน
      },
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`
      --Submitting--
      newPassword: ${this.state.newPassword}
      confirmPasword: ${this.state.confirmPasword}`);
    } else {
      console.error("Error");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "newPassword":
        formErrors.newPassword =
          value.length > 7 && value.length < 25
          ? "" 
          : "กรุณากรอกรหัสผ่าน 8-25 หลัก";
        break;
      case "confirmPasword":
        formErrors.confirmPasword = 
          value.length > 7 && value.length < 25
            ? ""
            : "กรุณากรอกรหัสผ่านให้ตรงกัน";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () =>
      console.log(this.state.formErrors)
    );
  };
  
  render() {
    return (

      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Col></Col>
        <Col>
          <h1 className="titel">ตั้งค่ารหัสผ่านใหม่</h1>
          <Form className="form-verify mx-auto">
            <Form.Label>รหัสผ่านใหม่</Form.Label>
            <FormControl
              type="text"
              minLength="13"
              maxLength="13"
              name="newPassword"
              onChange={this.handleChange}
              required
            ></FormControl>
            <Form.Label className="errorMessage">{this.state.formErrors.newPassword}</Form.Label>
            <br />
            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
            <Form.Control
              type="text"
              minLength="8"
              maxLength="25"
              name="confirmPasword"
              required
              onChange={this.handleChange}
            ></Form.Control>
            <Form.Label className="errorMessage">{this.state.formErrors.confirmPasword}</Form.Label>
            <br />
            <ButtonToolbar>
              <Button
                onClick={() => this.props.history.push("/")}
                size="lg"
                className="bt-verify mx-auto d-block"
                variant="secondary"
              >
                ยกเลิก
              </Button>
              <Button
                // onClick={()=>setModalShow(true)}
                onClick={() => this.setState({ modalShow: true })}
                size="lg"
                className="bt-verify mx-auto d-block"
              >
                ยืนยัน
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
        <Col></Col>
        {/* <Popup show={modalShow} onHide={() => setModalShow(false)} /> */}
        <Popup
          titles="เปลี่ยนรหัสผ่านสำเร็จ"
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <br />
        <br />
      </Container>
    );
  }
}

export default ResetPassword;
