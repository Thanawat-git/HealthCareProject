import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ResuleShowsPopUp(props) {
    const resultArray = props.dataShow
    const classes = useStyles();
  return (
        <Modal
        {...props}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {resultArray.map((value) =>
            <React.Fragment>
              <div className="row">
                <div className="col-12 col-xl-6">
                <strong><p> {value.title} </p></strong>
                </div>
                <div className="col-12 col-xl-6">
                <p> {value.result} </p>
                </div>
              </div>
              <hr/>
            </React.Fragment>
            )}
          </Modal.Body>

          <Modal.Footer>
              <Link to="/mainmenu" className={classes.root}>
                <Button variant="primary" block>
                  บันทึก
                </Button>
              </Link>
          </Modal.Footer>
        </Modal>
  )
}
