import Axios from "axios";
import { APPOINTMENT, apiBase, USERLOGIN } from "../constants";

export const createAppointment = (payload) => {
  console.log("data sent to appoint ", payload);

  Axios.post(`${apiBase}/appointment/create`, {
    APPOINT_DATE: payload[0],
    APP_NAME: payload[1],
    APP_STATUS: null,
    adderRole: USERLOGIN.Role,
    updateBy: USERLOGIN.Fullname,
    ELD_ID_NUMBER: payload[2],
    ADDER_ID_NUMBER: USERLOGIN.Id,
  })
    .then((res) => {
      console.log("Appointment Create Success", res.data);
      console.log("Appointment id: ", res.data.APP_ID, "Appointment id: ", res.data.APP_NAME);
      createFollowUp(res.APP_ID,res.APP_NAME)
    })
    .catch((error) => {
      console.log("error ", error);
    });
    
};

const createFollowUp = (id, name) => {
  console.log("Create FollowUp!!!");
  Axios.post(`${apiBase}/followup/create`, {
    FOL_ORDER: name,
    VIS_ID: null,
    APP_ID: id,
  });
};
