import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
// import { Img } from "react-bootstrap";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  NavLink,
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  onClickLogin = () => {
    Axios.post("url", this.state);
  };

  render() {
    return (
      <Container className="form-position">
        <Card
          className="bg-transbox mx-auto"
          style={{ borderRadius: 30, borderColor: "#707070", minWidth:350 }}
        >
          <br />
          <img className="img-displayed" src={logo1} />
          <Form className="mx-auto" style={{ maxWidth: 400 }}>
            <br />

            <Col>
              <FormGroup>
                <Label>ชื่อผู้ใช้งาน</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="เลขบัตรประชาชน"
                  required
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>รหัสผ่าน</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="รหัสผ่าน"
                  required
                ></Input>
                  <NavLink className="forget-pw text-muted" href="#">ลืมรหัวผ่าน?</NavLink><br/>
              </FormGroup>
              
            </Col>
            <Button
              color="primary"
              className="mx-auto d-block"
              style={{ borderRadius: 20 }}
            >
              Login
            </Button>
            {/* <br /> */}
            
          </Form>
          <p style={{textAlign:"center"}}>MyApp 2020</p>
        </Card>
      </Container>
    );
  }
}
export default Login;
