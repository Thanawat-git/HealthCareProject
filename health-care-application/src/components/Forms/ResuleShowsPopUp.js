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
    // const resultTitle = props.title
    const forms2Reducer = useSelector(({forms2Reducer}) => forms2Reducer)
    const classes = useStyles();

    for (var key of Object.keys(forms2Reducer)) {
      console.log(key + " -> " + forms2Reducer[key])
    }
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
                <div className="col-12 col-xl-6">
                <strong><p> ผลการประเมิน </p></strong>
                </div>
                <div className="col-12 col-xl-6">
                <p> {props.result} </p>
                </div>
              </div>
              <hr/>
            </React.Fragment>
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
export default ResuleShowsPopUp;
// export default connect()(ResuleShowsPopUp);