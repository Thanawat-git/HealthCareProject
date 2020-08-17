import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ButtonAdd from "./btAdd";
import Table from './table'
import "./home-body.css";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";

class HomeBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableShow: false
    }
  }

  render() {
    return (
      <Container fluid className="homeBody">
        <h4 className="text-center">ค้นหาผู้สูงอายุ</h4> <br />
        <Container className="homeBody-Input">
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="กรอกเลขบัตรประชาชน/ชื่อ-นามสกุล"
              className="input"
            />
            <InputGroup.Append>
              <Button 
              onClick={()=>this.setState({ tableShow: true})}
              variant="link">
                <SearchIcon />
              </Button>
            </InputGroup.Append>
          </InputGroup>
          { this.state.tableShow ? <Table /> : null }
          {/* <Table show={false}/> */}
          {/* <Table/> */}
        </Container>
        <ButtonAdd />
      </Container>
    );
  }
}

export default HomeBody;
