import React from 'react'
import add from "../images/add.png"
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
              {/* <Button variant="link">
                <img className="add" src={add}/>
              </Button> */}
              <a href="#"><img className="add" src={add}/></a>
            </Col>
          </Row>
        </Container>
    )
}

export default btAdd
