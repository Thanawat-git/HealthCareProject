import React, { Component } from 'react';
import '../verify-identity/verify-identity.css'
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";

class ResetPassword extends Component {
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
              required
            ></FormControl>
            <br />
            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
            <Form.Control type="text" required></Form.Control>
            <br />
            <ButtonToolbar>
              <Button
                onClick={()=>this.props.history.push("/login")}
                size="lg"
                className="bt-verify mx-auto d-block"
                variant="secondary"
              >
                ยกเลิก
              </Button>
              <Button size="lg" className="bt-verify mx-auto d-block">
                ยืนยัน
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
        <Col></Col>
      </Container>
    );
  }
}

export default ResetPassword;
