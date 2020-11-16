import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_NEW_FORM_SEC2 } from '../../Reducers/Actions/actionsType'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function ResuleShowsPopUp(props) {
    const ResultArray = props.dataShow
    const RawData = props.RawData
    const Collect = props.collect
    const classes = useStyles();

    const onSubmit = ()=>{

      const data = {
        ResultArray,
        RawData,
        Collect
      }
      props.dispatch({
        type: ADD_NEW_FORM_SEC2,
        data
      })
    }
  return (
        <Modal
        {...props}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {ResultArray.map((value) =>
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
            <ul>
              {RawData.map(data => <li> {data} </li> )}
            </ul>
          </Modal.Body>

          <Modal.Footer>
              <Link to="/mainmenu" className={classes.root}>
                <Button variant="primary" block onClick={onSubmit} >
                  บันทึก
                </Button>
              </Link>
          </Modal.Footer>
        </Modal>
  )
}

export default connect()(ResuleShowsPopUp);