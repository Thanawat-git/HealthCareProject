import React, { Component } from "react";
import "./login.css";
import logo1 from "../images/logo1.svg";
import { Button, Form} from "react-bootstrap";
import { Container, Row, Col} from "reactstrap";

class Login extends Component {
  render() {
    return (
      <Container className="">
        <div className="row">
          <div className="col"></div>
          {/* <Button className="button" type="submit">ลงชื่อเข้าใช้</Button> */}
          <div className="col-7 shadow mx-auto my-5 p-3 mb-2 bg-transbox">
            <img className="displayed" src={logo1} />
            <div className="card-body">
              {/* <Col md={2} className="col-4 mx-auto">
            <Image src={logo1}/>
          </Col> */}

              <Form action="#" className="mx-5">
                <Row>
                  <Col xs={2}></Col>
                  <Col xs={8} className="">
                <Form.Group>
                  <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
                  <Form.Control type="text" placeholder="เลขบัตรประชาชน" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>รหัสผ่าน</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <a href="#" className="forget-pw">ลืมรหัสผ่าน?</a>
                </Form.Group>
                <br></br>
                </Col>
                <Col xs={2}></Col>
                </Row>
                
                <Button
                  className="mx-auto d-block btn-circle btn-xl"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <br />
              <p style={{textAlign:"center"}}>footer</p>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </Container>
    );
  }
}
export default Login;
