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
              <Button variant="link" size="sm">
                <GroupAddIcon className="homeAdd-icon elevation-2"/><br/>
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
