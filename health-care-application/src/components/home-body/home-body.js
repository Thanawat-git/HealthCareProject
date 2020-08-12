import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./home-body.css";
import { Container, Form, FormControl, InputGroup, Button } from "react-bootstrap";

class HomeBody extends Component {
  render() {
    return (
      <Container fluid className="homeBody">
        <p className="text-center">
          ค้นหาด้วยหมายเลขบัตรประชาชน หรือ ชื่อ-นามสกุล ของผู้สูงอายุ
        </p> <br/>
        <Container className="homeBody-Input">
          <InputGroup className="mb-3">
            <FormControl type="text" placeholder="ค้นหาผู้สูงอายุ" className="input"/>
            <InputGroup.Append>
            <Button variant="link"><SearchIcon /></Button>
            </InputGroup.Append>
          </InputGroup>
        </Container>
      </Container>
    );
  }
}

export default HomeBody;
