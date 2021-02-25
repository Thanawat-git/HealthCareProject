import React, { Component } from "react";
import "../verify-identity/verify-identity.css";
import TextField from '@material-ui/core/TextField';
import {
  Container,
  Button,
} from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import Swal from "sweetalert2"; // ทำ alert
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {changePassword} from '../../actions/editpassword.action'
const MySwal = withReactContent(Swal);
// import Popup from "../popup/popup";


function ShowPage(){
  let history = useHistory();
  const checkuserReducer = useSelector(({checkuserReducer}) => checkuserReducer)
  const [newPss, setNewPass] = React.useState(null);
  const [conPss, setConPass] = React.useState(null);
  const [isErr, setIsErr] = React.useState(false);
  const dispatch = useDispatch()
  
  React.useEffect(()=>{
    if(checkuserReducer.isSuccess){
      MySwal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'แก้ไขรหัสผ่านสำเร็จ',
        showConfirmButton: false,
        timer: 1500
      })
      history.push("/");
    }
   
  },[checkuserReducer.isSuccess])

  const toChangePass = ()=>{
    if(newPss!==conPss){
      setIsErr(true)
      console.log("Pss not math")
    } else {
      setIsErr(false)
      console.log(checkuserReducer.id+" "+checkuserReducer.role+" "+newPss)
      dispatch(changePassword(checkuserReducer.id, checkuserReducer.role, newPss ))
    }
    // dispatch(checkUser(pid,moment(selectedDate).add(543, 'year').format("YYYY-MM-DD"),history ))
  }
  return (
    <Container>
      <div className="row form-verify mx-auto">
        <div className="col-12">
          <h1>ตั้งค่ารหัสผ่านใหม่</h1>
          {
            isErr && <Alert variant="filled" severity="error">
            รหัสผ่านไม่ตรงกัน
          </Alert>
          }
        </div>
        <div className="col-12 field-data">
          <p>รหัสผ่านใหม่</p>
          <TextField type="password" variant="outlined" value={newPss} onChange={(e)=>setNewPass(e.target.value)} fullWidth/>
        </div>
        
        <div className="col-12 field-data">
          <p>ยืนยันรหัสผ่าน</p>
          <TextField type="password" variant="outlined" value={conPss} onChange={(e)=>setConPass(e.target.value)} fullWidth/>
        </div>
        
        <div className="col-6 field-data">
          <Button
            onClick={()=>history.push("/")}
            size="lg"
            className="bt-verify mx-auto d-block"
            variant="secondary"
          >
            ยกเลิก
          </Button>
        </div>
        <div className="col-6 field-data">
          <Button
            onClick={toChangePass}
            size="lg" className="bt-verify mx-auto d-block">
              ยืนยัน
          </Button>
        </div>
        
        
      </div>
  </Container>
  )
}

class ResetPassword extends Component {
  
  render() {
    return (

      <ShowPage/>
        
        // {/* <br />
        // <br />
        // <br />
        // <br />
        // <br />
        // <Col></Col>
        // <Col>
        //   <h1 className="titel">ตั้งค่ารหัสผ่านใหม่</h1>
        //   <Form className="form-verify mx-auto">
        //     <Form.Label>รหัสผ่านใหม่</Form.Label>
        //     <FormControl
        //       type="text"
        //       minLength="13"
        //       maxLength="13"
        //       name="newPassword"
        //       onChange={this.handleChange}
        //       required
        //     ></FormControl>
        //     <Form.Label className="errorMessage">{this.state.formErrors.newPassword}</Form.Label>
        //     <br />
        //     <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
        //     <Form.Control
        //       type="text"
        //       minLength="8"
        //       maxLength="25"
        //       name="confirmPasword"
        //       required
        //       onChange={this.handleChange}
        //     ></Form.Control>
        //     <Form.Label className="errorMessage">{this.state.formErrors.confirmPasword}</Form.Label>
        //     <br />
        //     <ButtonToolbar>
        //       <Button
        //         onClick={() => this.props.history.push("/")}
        //         size="lg"
        //         className="bt-verify mx-auto d-block"
        //         variant="secondary"
        //       >
        //         ยกเลิก
        //       </Button>
        //       <Button
        //         // onClick={()=>setModalShow(true)}
        //         onClick={() => this.setState({ modalShow: true })}
        //         size="lg"
        //         className="bt-verify mx-auto d-block"
        //       >
        //         ยืนยัน
        //       </Button>
        //     </ButtonToolbar>
        //   </Form>
        // </Col>
        // <Col></Col>
        
        // <Popup
        //   titles="เปลี่ยนรหัสผ่านสำเร็จ"
        //   show={this.state.modalShow}
        //   onHide={() => this.setState({ modalShow: false })}
        // />
        // <br />
        // <br /> */}
    );
  }
}

export default ResetPassword;
