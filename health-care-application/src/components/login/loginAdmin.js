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

class LoginAdmin extends Component {
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
              <div className="input-field">
                <i className="fas fa-user"/>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"/>
                <input type="password" placeholder="Password" />
              </div>
              <Link to="/superadminpage" >
              <input type="submit" value="ลงชื่อเข้าใช้" className="btn-login solid" />
              </Link>
              <Link to="/verify" >ลืมรหัสผ่าน</Link>
            </form>
          </div>
        </div>

        <div className="panels-nlcontainer">
          <div className="panel left-panel">
            <div className="nlcontent">
              <h3>Hello Admin</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui atque dolore minus fugiat dolores, beatae, animi doloremque molestias nam ex quisquam iusto aliquam, sed ipsa commodi quod dolor in.</p>
            </div>
            <img src={loginImg} className="login-img" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginAdmin;
