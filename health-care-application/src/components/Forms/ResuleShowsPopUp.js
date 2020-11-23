import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector } from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function ResuleShowsPopUp(props) {
    const classes = useStyles();

  return (
        <Modal
        {...props}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <React.Fragment>
              <div className="row">
                <div className="col-12 title-result">
                <p> ผลการประเมิน </p>
                </div>
                <div className="col-12 result-result">
                <p> {props.result} </p>
                </div>
              </div>
            </React.Fragment>
          </Modal.Body>

          <Modal.Footer>
              <Link to="/mainmenu" className={classes.root}>
                <Button variant="primary" block>
                  กลับสู่หน้าเมนูหลัก
                </Button>
              </Link>
          </Modal.Footer>
        </Modal>
  )
}
export default ResuleShowsPopUp;
// export default connect()(ResuleShowsPopUp);