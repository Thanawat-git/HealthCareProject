import Axios from "axios";
import { APPOINTMENT, apiBase, USERLOGIN } from "../constants";

export const createAppointment = (payload) => {
  console.log("88888888888888888888888888");
  Axios.post(`${apiBase}/appointment/create`, {
    APPOINT_DATE: payload[0],
    APP_NAME: payload[1],
    APP_STATUS: null,
    adderRole: USERLOGIN.Role,
    updateBy: USERLOGIN.Fullname,
    ELD_ID_NUMBER: payload[2],
    ADDER_ID_NUMBER: USERLOGIN.Id
  }).then(() => {
    alert("Appointment Create Success");
  }).catch(error=>{
    console.log('error ', error)
  })
};
