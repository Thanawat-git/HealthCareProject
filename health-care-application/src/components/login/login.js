import React, { Component } from "react";
import Axios from "axios";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
import loginImg from '../images/undraw_surfer_m6jb.svg'
import { Link } from "react-router-dom";

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
      <div className="nlcontainer" >
        <div className="form-nlcontainer">
          <div className="signin">
            <form action="#" className="login-form sign-in-form">
              <img src={logo1} className="company-logo" />
              {/* <h2 className="title-signin">LOGIN</h2> */}
              <div className="input-field">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="password" placeholder="Password" />
              </div>
              {/* <Button className="btn-login solid" >ลงชื่อเข้าใช้</Button> */}
              <Link to="/volunteer-page" >
              <input type="submit" value="ลงชื่อเข้าใช้" className="btn-login solid" />
              </Link>
              <Link to="/verify" >ลืมรหัสผ่าน</Link>
            </form>
          </div>
        </div>

        <div className="panels-nlcontainer">
          <div className="panel left-panel">
            <div className="nlcontent">
              <h3>Hello !!!</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui atque dolore minus fugiat dolores, beatae, animi doloremque molestias nam ex quisquam iusto aliquam, sed ipsa commodi quod dolor in.</p>
            </div>
            <img src={loginImg} className="login-img" alt=""/>
          </div>
        </div>
      </div>
      // <Container fluid className="bg-img">

      //   <br /><br />
      //   <Card
      //     className="bg-transbox mx-auto"
      //     style={{ borderRadius: 30, borderColor: "#707070", minWidth: 300 }}
      //   >
      //     <br />
      //     <img className="img-displayed" src={logo1} />
      //     <Form className="mx-auto" style={{ maxWidth: 300 }}>
      //       <br />
      //       <Col>
      //         <FormGroup className="username">
      //           <Form.Label>ชื่อผู้ใช้งาน</Form.Label>
      //           <FormControl
      //             type="text"
      //             maxLength="13"
      //             minLength="13"
      //             name="username"
      //             placeholder="เลขบัตรประชาชน"
      //             required
      //             // noValidate
      //             // value={this.state.username}
      //             onChange={this.handleChange}
      //           > 
      //           </FormControl>
      //           {(
      //         <Form.Label className="errorMessage">{this.state.formErrors.username}</Form.Label>
      //       )}
      //         </FormGroup>
               
      //       </Col>
      //       <Col>
      //         <FormGroup className="password">
      //           <Form.Label>รหัสผ่าน</Form.Label>
      //           <FormControl
      //             type="password"
      //             minLength="8"
      //             maxLength="25"
      //             name="password"
      //             placeholder="รหัสผ่าน"
      //             required
      //             onChange={this.handleChange}
      //           ></FormControl>
      //           {(
      //         <Form.Label className="errorMessage">{this.state.formErrors.password}</Form.Label>
      //       )}
      //           <Button
      //             onClick={()=>this.props.history.push("/verify")}
      //             className="forget-pw text-muted"
      //             size="sm"
      //             variant="link"
      //           >
      //             ลืมรหัสผ่าน?
      //           </Button>
      //           <br />
      //         </FormGroup>
      //       </Col>
      //       <Button
      //         // onClick={this.onClickValidate}
      //         color="primary"
      //         className="mx-auto d-block"
      //         style={{ borderRadius: 20 }}
      //         noValidate
      //         // onClick={this.handleSubmit}
      //         onClick={()=>this.props.history.push("/volunteer-page")}
      //       >
      //         Login
      //         </Button>
      //     </Form>
      //     <br />
      //   </Card>

      // </Container>
    );
  }
}
export default Login;
