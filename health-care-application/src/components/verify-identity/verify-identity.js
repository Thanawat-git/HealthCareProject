import React, { Component } from "react";
import "./verify-identity.css";
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";

class VerifyIdentity extends Component {
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
          <h1 className="titel">ยืนยันตัวตน</h1>
          <Form className="form-verify mx-auto">
            <Form.Label>เลขประจำตัวประชาชน</Form.Label>
            <FormControl
              type="text"
              minLength="13"
              maxLength="13"
              required
            ></FormControl>
            <br />
            <Form.Label>วัน/เดือน/ปีเกิด</Form.Label>
            <Form.Control type="date" required></Form.Control>
            <br />
            <ButtonToolbar>
              <Button
                onClick={()=>this.props.history.goBack()}
                size="lg"
                className="bt-verify mx-auto d-block"
                variant="secondary"
              >
                ยกเลิก
              </Button>
              <Button 
              onClick={()=>this.props.history.push("/resetpassword")}
              size="lg" className="bt-verify mx-auto d-block">
                ยืนยัน
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
        <Col></Col>
        <br />
        <br />
      </Container>
    );
  }
}

export default VerifyIdentity;
