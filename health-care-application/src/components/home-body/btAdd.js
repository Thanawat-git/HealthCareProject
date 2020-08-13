import React from 'react'
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import {
    Container,
    Button,
    Row,
    Col,
  } from "react-bootstrap";


function btAdd() {
    return (
        <Container className="homeAdd">
          <Row>
            <Col></Col>
            <Col className="align-self-end">
              <Button variant="link">
                <GroupAddIcon className="homeAdd-icon" />
                <br />
                <Button variant="success" className="homeAdd-bt" size="sm">
                  เพิ่มผู้สูงอายุรายใหม่
                </Button>
              </Button>
            </Col>
          </Row>
        </Container>
    )
}

export default btAdd
