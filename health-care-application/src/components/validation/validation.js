import React, { Component } from 'react';
//import { FormErrors } from './FormErrors';
import {
  Container,
  Form,
  Button,
  Col,
  FormControl,
  ButtonToolbar,
} from "react-bootstrap";

 const validationRules = {
    required: val => val !== null && val !== undefined && val !== "",
    phone: phone => {
      const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      return re.test(String(phone));
    },
    email: email => {
      const re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
      return re.test(String(email).toLowerCase());
    }
  };
class Validation extends Component {
    constructor(props) {
      super(props);
  
      this.formValidationRules = {
        firstName: [
          { rule: validationRules.required, message: "First name is required" }
        ],
        lastName: [
          { rule: validationRules.required, message: "Last name is required" }
        ],
        phone: [
          { rule: validationRules.phone, message: "Phone number is invalid" }
        ],
        email: [
          { rule: validationRules.required, message: "Email is required" },
          { rule: validationRules.email, message: "Email is invalid" }
        ]
      };
  
      this.fields = ["firstName", "lastName", "phone", "email"];
  
      this.state = {
        signupForm: { isValid: false },
        firstName: { value: "", isTouched: false, isValid: false, errors: [] },
        lastName: { value: "", isTouched: false, isValid: false, errors: [] },
        phone: { value: "", isTouched: false, isValid: false, errors: [] },
        email: { value: "", isTouched: false, isValid: false, errors: [] }
      };
    }
  
    handleFieldChange = e => {
      let newState = { ...this.state };
      newState[e.target.name].value = e.target.value;
      this.validateForm(newState);
    };
  
    handleSetTouched = e => {
      let field = { ...this.state[e.target.name], isTouched: true };
      this.setState({ [e.target.name]: { ...field } });
    };
  
    getClassName = fieldName => {
      const field = this.state[fieldName];
      return field.isTouched && !field.isValid ? "has-error" : "";
    };
  
    validateForm = newState => {
      newState = newState || { ...this.state };
      this.fields.forEach(fieldName => {
        let newField = newState[fieldName];
        newField.errors = [];
        newField.isValid = true;
        this.formValidationRules[fieldName].forEach(vRule => {
          if (!vRule.rule(this.state[fieldName].value)) {
            newField.errors.push(vRule.message);
            newField.isValid = false;
          }
          newState[fieldName] = newField;
        });
      });
      this.setState(newState);
    };
  
    componentWillMount() {
      this.validateForm();
    }
    render() {
      const { firstName, lastName, phone, email } = this.state;
      return (
        <Form>
          <div className="field-group">
            <label>บัตรประชาชน</label>
            <input
              className={phone.isTouched && !phone.isValid ? "has-error" : ""}
              name="phone"
              value={this.state.phone.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
            />
            {phone.isTouched &&
              phone.errors.length > 0 &&
              phone.errors.map((err, i) => (
                <span key={i} className="error-message">
                  {err}
                </span>
              ))}
          </div>
          <div className="field-group">
            <label>Email</label>
            <input
              className={email.isTouched && !email.isValid ? "has-error" : ""}
              name="email"
              value={this.state.email.value}
              onChange={this.handleFieldChange}
              onBlur={this.handleSetTouched}
            />
            {email.isTouched &&
              email.errors.length > 0 &&
              email.errors.map((err, i) => (
                <span key={i} className="error-message">
                  {err}
                </span>
              ))}
          </div>
          </Form>
      );
    }
  }
  
 // export default FormValidator;
export default Validation;

