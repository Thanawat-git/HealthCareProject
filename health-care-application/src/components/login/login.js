import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
// import {  } from "react-bootstrap";
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
      <div className="body">
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
                  maxLength="13"
                  minLength="13"
                  name="username"
                  placeholder="เลขบัตรประชาชน"
                  // title="ใส่เฉพาะตัวเลยหรือใส่ให้ครบ 13 หลัก"
                  required
                ></Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>รหัสผ่าน</Label>
                <Input
                  type="password"
                  minLength="8"
                  name="password"
                  placeholder="รหัสผ่าน"
                  // title=""
                  required
                ></Input>
                  <NavLink className="forget-pw text-muted" href="#">ลืมรหัวผ่าน?</NavLink><br/>
              </FormGroup>
              
            </Col>
            <Button
              // onClick={this.onClickValidate}
              color="primary"
              className="mx-auto d-block"
              style={{ borderRadius: 20 }}
            >
              Login
            </Button>
          </Form>
          <p style={{textAlign:"center"}}>MyApp 2020</p>
        </Card>
      </Container>
      </div>
    );
  }
}
export default Login;
