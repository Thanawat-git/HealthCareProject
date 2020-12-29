import React, { Component } from "react";
import "./login.css";
import logo1 from "../images/logo-saensukcity.png";
import loginImg from "../images/undraw_surfer_m6jb.svg";
import { Link } from "react-router-dom";
import { loginVolunteer } from "../../actions/auth.action";
import { connect } from "react-redux";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="nlcontainer">
        <div className="form-nlcontainer">
          <div className="signin">
            <form action="#" className="login-form sign-in-form">
              <img src={logo1} className="company-logo" />
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              {this.props.messageReducer.isError && <div class="alert alert-danger" role="alert">
                username or password wrong!!!
              </div>}
              <Link to="/Volunteer">
                <input
                  type="submit"
                  value="ลงชื่อเข้าใช้"
                  className="btn-login solid"
                  onClick={e=>{
                    e.preventDefault()
                    this.props.loginVolunteer(this.props.history, this.state) //dispatch เรียกใช้งาน loginVolunteer ใน action
                  }}
                />
              </Link>
              <Link to="/verify">ลืมรหัสผ่าน</Link>
            </form>
            
          </div>
        </div>

        <div className="panels-nlcontainer">
          <div className="panel left-panel">
            <div className="nlcontent">
              <h3>Hello Volunteers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                qui atque dolore minus fugiat dolores, beatae, animi doloremque
                molestias nam ex quisquam iusto aliquam, sed ipsa commodi quod
                dolor in.
              </p>
            </div>
            <img src={loginImg} className="login-img" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer,messageReducer }) => ({ authReducer,messageReducer }); //state
const mapDispatchToProps = {loginVolunteer};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
