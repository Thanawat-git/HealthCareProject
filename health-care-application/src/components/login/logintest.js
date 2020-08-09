import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onClickLogin = ()=>{
    Axios.post("url", this.state)
  }

  render() {
    return (
      <Container className="">
        <div className="row">
          <div className="col"></div>
          <div className="col-7 shadow mx-auto my-5 p-3 bg-transbox">
            <img className="displayed" src={logo1} />
            <div className="card-body">

              {/* Login Form  */}
              <Form action="#" className="mx-5">
                  <Col  className="color">
                    <Form.Group>
                      {/* <Form.Label>ชื่อผู้ใช้งาน</Form.Label> */}
                      <Form.Control 
                        
                        name="username"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                        pattern="[0-9]"
                        type="text"
                        minLength={13}
                        maxLength={13}
                        title="กรุณาใส่หมายเลยบัตรประชาชนเท่านั้น"
                        placeholder="เลขบัตรประชาชน 13 หลัก"
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      {/* <Form.Label>รหัสผ่าน</Form.Label> */}
                      <Form.Control
                        name="password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <a href="#" className="forget-pw">
                        ลืมรหัสผ่าน?
                      </a>
                    </Form.Group>
                    <br></br>
                  </Col>

                <Button
                  onClick={this.onClickLogin}
                  className="mx-auto d-block btn-xl"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              {/* Login Form  */}
                      {/* <p>{JSON.stringify(this.state)}</p> */}
                      
              <br />
              <p style={{ textAlign: "center" }}>footer</p>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </Container>
    );
  }
}
export default Login;
