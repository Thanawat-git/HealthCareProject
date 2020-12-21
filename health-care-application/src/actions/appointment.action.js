import Axios from "axios";
import { APPOINTMENT,apiBase } from "../constants";



export const createAppointment = (payload) => {
console.log("88888888888888888888888888")
  Axios.post(`${apiBase}/appointment/create`, {
                    APPOINT_DATE:  payload[0],
                    APP_NAME:  payload[1],
                    APP_STATUS: null,
                    adderRole:  "ADMIN",
                    updateBy: null,
                    ELD_ID_NUMBER:payload[2]
  })
  .then(() => {
    alert("Appointment Create Success");
  });

};
