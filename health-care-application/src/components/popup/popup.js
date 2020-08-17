import React from "react";
import { Modal, Button } from "react-bootstrap";
import Smile from "../images/face.svg"

export default function popup(props) {


  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img src={Smile}  /> <br/>
      </Modal.Header>
      <Modal.Body>
        <h4>เปลี่ยนรหัสผ่านสำเร็จ</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
