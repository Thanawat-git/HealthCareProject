import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import warning from "../images/warning-triangle.png";
import ButtonAdd from "./btAdd";
import Table from './table'
import "./home-body.css";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";

class HomeBody extends Component {

  constructor(props){
    super(props);
    this.state = {
      // search : null,
      formErrors: {
        search : ""
      }
    }
  }
  handleChange = e =>{
    e.preventDefault();
    const {name,value} = e.target;
    let formErrors = this.state.formErrors;
    formErrors.search = value === 'test' ? <Form.Label className="errorMessage2"><img className="warning-img" src={warning}/>ไม่พบข้อมูลผู้สูงอายุ กรุณาเพิ่มผู้สูงอายุรายใหม่</Form.Label>:<Table />;
    this.setState({formErrors,[name]:value},console.log(this.state.formErrors));
  }

  render() {
    const {formErrors} = this.state;
    return (
      <Container fluid className="homeBody">
        <p className="text-center">ค้นหาผู้สูงอายุ</p> <br />
        <Container className="homeBody-Input">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="กรอกเลขบัตรประชาชน/ชื่อ-นามสกุล"
              className="input"
              name="search"
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant="link">
                <SearchIcon />
              </Button>
            </InputGroup.Append>
             
          </InputGroup>
          {this.state.formErrors.search}
          {/* <Table/> */}
        </Container>
        <ButtonAdd />
        {/* <Button ><img className="add" src={add}/></Button> */}
      </Container>
    );
  }
}

export default HomeBody;
