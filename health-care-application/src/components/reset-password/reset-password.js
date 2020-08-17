import React, { Component, useState } from "react";
import "../verify-identity/verify-identity.css";
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";
import Popup from "../popup/popup";

class ResetPassword extends Component {
// export default function ResetPassword() {
  // const [modalShow, setModalShow] = React.useState(false);

  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    }
  }

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
              onClick={()=>this.props.history.push("/")}
              size="lg"
              className="bt-verify mx-auto d-block"
              variant="secondary"
            >
              ยกเลิก
            </Button>
            <Button
              // onClick={()=>setModalShow(true)}
              onClick={()=>this.setState({ modalShow: true})}
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
      <Popup show={this.state.modalShow} onHide={()=>this.setState({ modalShow: false})} />
      <br />
      <br />
      
    </Container>
  );
}
}

export default ResetPassword;
