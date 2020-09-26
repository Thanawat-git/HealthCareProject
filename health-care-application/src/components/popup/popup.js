import React from "react";
// import { useHistory } from "react-router-dom";
import { Modal, Button, Nav } from "react-bootstrap";
import Smile from "../images/face.svg";
import "./popup.css";

export default function popup(props) {
  // let history = useHistory();

  // function handleClick() {
  //   history.push("/");
  // }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <img src={Smile} className="popup-img" /> <br />
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <h4>{props.titles}</h4>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <Button
        // onClick={handleClick}
        // onClick={props.onHide}
        >
          <Nav.Link href="../login" className="popup-link-color">
            ยืนยัน
          </Nav.Link>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
