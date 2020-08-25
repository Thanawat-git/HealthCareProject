import React, { Component } from "react";
import "../verify-identity/verify-identity.css";
import "../validation/validation";
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";
import Popup from "../popup/popup";

// const validationRules = {
//   required: val => val !== null && val !== undefined && val !== "",
//   passNew: passNew => {
//     const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
//     return re.test(String(passNew));
//   },
//   passCheck: passCheck => {
//     const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
//     return re.test(String(passCheck));
//     //const re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
//     //return re.test(String(email).toLowerCase());
//   }
// };

const formValid = (formErrors) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: null,
      confirmPasword: null,
      formErrors: {
        newPassword: "", //กรุณากรอกเลขบัตรประชาชน 13 หลัก
        confirmPasword: "", //กรุณากรอกรหัสผ่าน
      },
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`
      --Submitting--
      newPassword: ${this.state.newPassword}
      confirmPasword: ${this.state.confirmPasword}`);
    } else {
      console.error("Error");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "newPassword":
        formErrors.newPassword =
          value.length > 7 && value.length < 25
          ? "" 
          : "กรุณากรอกรหัสผ่าน 8-25 หลัก";
        break;
      case "confirmPasword":
        formErrors.confirmPasword = 
          value.length > 7 && value.length < 25
            ? ""
            : "กรุณากรอกรหัสผ่านให้ตรงกัน";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () =>
      console.log(this.state.formErrors)
    );
  };
  // constructor(props) {
  //   super(props);

  //   this.formValidationRules = {
  //     passNew: [
  //       { rule: validationRules.passNew, message: "Pass number is invalid" }
  //     ],
  //     passCheck: [
  //       { rule: validationRules.required, message: "passCheck is required" },
  //       { rule: validationRules.passCheck, message: "passCheck is invalid" }
  //     ],
  //     password_has_error: [false]
  //   };

  //   this.fields = ["passNew", "passCheck"];

  //   this.state = {
  //     signupForm: { isValid: false },
  //     passNew: { value: "", isTouched: false, isValid: false, errors: [] },
  //     passCheck: { value: "", isTouched: false, isValid: false, errors: [] }
  //   };
  // }

  // handleFieldChange = e => {
  //   let newState = { ...this.state };
  //   newState[e.target.name].value = e.target.value;
  //   this.validateForm(newState);
  // };

  // handleSetTouched = e => {
  //   let field = { ...this.state[e.target.name], isTouched: true };
  //   this.setState({ [e.target.name]: { ...field } });
  // };

  // getClassName = fieldName => {
  //   const field = this.state[fieldName];
  //   return field.isTouched && !field.isValid ? "has-error" : "";
  // };

  // validateForm = newState => {
  //   newState = newState || { ...this.state };
  //   this.fields.forEach(fieldName => {
  //     let newField = newState[fieldName];
  //     newField.errors = [];
  //     newField.isValid = true;
  //     this.formValidationRules[fieldName].forEach(vRule => {
  //       if (!vRule.rule(this.state[fieldName].value)) {
  //         newField.errors.push(vRule.message);
  //         newField.isValid = false;
  //       }
  //       newState[fieldName] = newField;
  //     });
  //   });
  //   this.setState(newState);
  // };

  // componentWillMount() {
  //   this.validateForm();
  // }
  render() {
    // const { passNew, passCheck } = this.state;
    return (
      // <Container>
      //   <br />
      //   <br />
      //   <br />
      //   <br />
      //   <br />
      //   <Col></Col>
      //   <Col>
      //     <h1 className="titel">ตั้งค่ารหัสผ่านใหม่</h1>

      //     <Form>
      //       <Form.Label >รหัสผ่านใหม่</Form.Label>
      //       <FormControl
      //         className={passNew.isTouched && !passNew.isValid ? "has-error" : ""}
      //         type="text"
      //         name="passNew"
      //         value={this.state.passNew.value}
      //         onChange={this.handleFieldChange}
      //         onBlur={this.handleSetTouched}
      //       ></FormControl>
      //       {passNew.isTouched &&
      //         passNew.errors.length > 0 &&
      //         passNew.errors.map((err, i) => (
      //           <span key={i} className="error-message">
      //             {err}
      //           </span>
      //         ))}

      //       <br />
      //       <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
      //       <Form.Control className={passCheck.isTouched && !passCheck.isValid ? "has-error" : ""}
      //         type="password"
      //         name="passCheck"
      //         value={this.state.passCheck.value}
      //         checked={this.state.passCheck.checkPassword}
      //         onChange={this.handleFieldChange}
      //         onBlur={this.handleSetTouched}
      //       ></Form.Control>
      //       {passCheck.isTouched &&
      //         passCheck.errors.length > 0 &&
      //         passCheck.errors.map((err, i) => (
      //           <span key={i} className="error-message">
      //             {err}
      //           </span>
      //         ))}
      //       <br />
      //       <ButtonToolbar>
      //         <Button
      //           onClick={() => this.props.history.push("/login")}
      //           size="lg"
      //           className="bt-verify mx-auto d-block"
      //           variant="secondary"
      //         >
      //           ยกเลิก
      //         </Button>
      //         <Button size="lg" className="bt-verify mx-auto d-block"

      //         >
      //           ยืนยัน
      //         </Button>
      //       </ButtonToolbar>
      //     </Form>
      //   </Col>
      //   <Col></Col>
      // </Container>

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
              name="newPassword"
              onChange={this.handleChange}
              required
            ></FormControl>
            <Form.Label className="errorMessage">{this.state.formErrors.newPassword}</Form.Label>
            <br />
            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
            <Form.Control
              type="text"
              minLength="8"
              maxLength="25"
              name="confirmPasword"
              required
              onChange={this.handleChange}
            ></Form.Control>
            <Form.Label className="errorMessage">{this.state.formErrors.confirmPasword}</Form.Label>
            <br />
            <ButtonToolbar>
              <Button
                onClick={() => this.props.history.push("/")}
                size="lg"
                className="bt-verify mx-auto d-block"
                variant="secondary"
              >
                ยกเลิก
              </Button>
              <Button
                // onClick={()=>setModalShow(true)}
                onClick={() => this.setState({ modalShow: true })}
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
        <Popup
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
        <br />
        <br />
      </Container>
    );
  }
}

export default ResetPassword;
