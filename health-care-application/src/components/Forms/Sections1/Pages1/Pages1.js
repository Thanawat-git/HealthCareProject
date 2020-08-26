import React, { Component } from "react";
import "./Pages1.css";
import FormHeader from "../../formHeader/formHeader";
import FormFooter from "../../formFooter/formFooter";
import {
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";



class Pages1 extends Component {

  getAge = e=>{
    
  }

  render() {
    return (
      <div className="pagelayout">
        <FormHeader />
        <br />
        <Row className="justify-content-md-center rowlayout">
          <Col xs lg="4">
            <Card className="cardSize">
              <Form>
                <p>ส่วนที่ 1 ข้อมูลพื้นฐาน</p>
                <InputGroup className="mb-3">
                  <span className="text-danger">*</span>
                  รหัสบัตรประชาชน
                  <FormControl
                    type="text"
                    className="ml-2"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    required
                  />
                </InputGroup>

                <Row>
                  <Col>
                    <span className="text-danger">*</span>
                    ชื่อ
                    <FormControl
                      type="text"
                      className="ml-2"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      required
                    />
                  </Col>
                  <Col>
                    <span className="text-danger">*</span>
                    นามสกุล
                    <FormControl
                      type="text"
                      className="ml-2"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      required
                    />
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col>
                    <span className="text-danger">*</span>เพศ
                  </Col>
                  <Col>
                    <Form.Check inline name="sex" type="radio" value="Male" />
                    <span>ชาย</span>
                  </Col>
                  <Col>
                    <Form.Check inline name="sex" type="radio" value="Female" />
                    <span>หญิง</span>
                  </Col>
                </Row>
                <br />
                <InputGroup className="mb-3">
                  ชื่อในชุมชน
                  <span className="text-warning">(ถ้ามี)</span>
                  <FormControl
                    type="text"
                    className="ml-2"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
                <br />
                {/* <span className="text-danger dateLabel">วันเกิด</span> */}

                <Row>
                  <Col className="dateLabel">
                    <InputGroup className="mb-3">
                      <span className="text-danger">*</span>
                      วันเกิด
                      <FormControl
                        type="date"
                        className="ml-2"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={this.getAge}
                        required
                      />
                    </InputGroup>
                  </Col>
                  {/* <Col className="dateLabel">
                    <Row>
                      <Col xs={5}>อายุ</Col>
                      <Col xs={4}>
                        <span className="text-danger">72</span>
                      </Col>
                      <Col>ปี</Col>
                    </Row>
                  </Col> */}
                </Row>

                <Row>
                  <Col></Col>
                  <Col xs={7}>
                    <Row>
                      <Col>อายุ</Col>
                      <Col>
                        <span className="text-danger">72</span>
                      </Col>
                      <Col>ปี</Col>
                    </Row>
                  </Col>
                  <Col></Col>
                </Row>
                <br />
                
                <Button type="submit" size="lg">ถัดไป</Button>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* <FormFooter /> */}
      </div>
    );
  }
}

export default Pages1;
