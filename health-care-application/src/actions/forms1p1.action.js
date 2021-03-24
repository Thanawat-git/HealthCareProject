import { FORMS1P1_ADD_NEW, apiEld, USERLOGIN } from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: FORMS1P1_ADD_NEW,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

// create new elder table
const createElder = async (payload) => {
  await Axios.post(`${apiEld}/create`, {
    ELD_ID_NUMBER: payload[0],
    ELD_FIRSTNAME: payload[1],
    ELD_LASTNAME: payload[2],
    ELD_PHONE: null,
    ELD_LAST_VISIT_DATE: null,
    ELD_AKA: payload[4],
    adderRole: USERLOGIN.Role,
    updateBy: USERLOGIN.Fullname,
    ADDER_ID_NUMBER: USERLOGIN.Id,
    ELD_BIRTHDATE: payload[5],
    ELD_GENDER: payload[3],
  })

  // console.log("res ",res);
  // console.log("res.data ",res.data);
};

// update elder
export const updateElder = async (payload) => {
  await Axios.put(`${apiEld}/update/${payload[0]}`, {
    ELD_ID_NUMBER: payload[1],
    ELD_FIRSTNAME: payload[2],
    ELD_LASTNAME: payload[3],
    ELD_PHONE: payload[4],
    ELD_AKA: payload[5],
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Elder update Success");
};


export const createAllElder = async (payload) => {
  await createElder(payload);
};
