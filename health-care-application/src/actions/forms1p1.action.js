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
    updateBy: USERLOGIN.Fullname,
  })
  console.log("Elder Success");
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

//Create form1 sec1-6
const createElderinfo = async (payload) => {
  await  Axios.post(`${apiEld}/information/create`, {
    ELD_BIRTHDATE: payload[5],
    ELD_GENDER: payload[3],
    ELD_AGE: payload[6],
    ELD_STATUS: null,
    ELD_LIVELIHOOD: null,
    ELD_LIVELIHOOD_DETAIL: null,
    ELD_LIVELIHOOD_NEIGHBOR_NAME: null,
    ELD_RELIGION: null,
    ELD_EDUCATION: null,
    ELD_JOB: null,
    ELD_TREATMENT: null,
    ELD_TREATMENT_HOSPITAL: null,
    ELD_INCOME: null,
    ELD_ID_NUMBER: payload[0],
    adderRole: USERLOGIN.Role,
    updateBy: USERLOGIN.Fullname,
    ADDER_ID_NUMBER: USERLOGIN.Id,
  })
  console.log("Elder Info Success");

};

const createElderRelative = async (payload) => {
  await  Axios.post(`${apiEld}/relative/create`, {
    ELD_REL_FIRSTNAME: null,
    ELD_REL_LASTNAME: null,
    ELD_REL_RELATION: null,
    ELD_REL_PHONE: null,
    updateBy: USERLOGIN.Fullname,
    ELD_ID_NUMBER: payload[0],
  })
  console.log("Elder Relative Success");
};

const createElderCurrent = async (payload) => {
  //ที่อยู่ปัจจุบัน
  await  Axios.post(`${apiEld}/currentaddress/create`, {
    ELD_CUR_NUMBER: null,
    ELD_CUR_VILLAGE: null,
    ELD_CUR_LANE: null,
    ELD_CUR_STREET: null,
    ELD_CUR_SUB_DISTRICT: null,
    ELD_CUR_DISTRICT: null,
    ELD_CUR_PROVINCE: null,
    updateBy: USERLOGIN.Fullname,
    ELD_ID_NUMBER: payload[0],
  })
  console.log("Elder Currentaddress Success");
};

const createElderIdCurrent = async (payload) => {
  //ที่อยู่ตามบัตรประชาชน
  await  Axios.post(`${apiEld}/idnumberaddress/create`, {
    ELD_IDN_ADDR_NUMBER: null,
    ELD_IDN_ADDR_VILLAGE: null,
    ELD_IDN_ADDR_LANE: null,
    ELD_IDN_ADDR_STREET: null,
    ELD_IDN_ADDR_SUB_DISTRICT: null,
    ELD_IDN_ADDR_DISTRICT: null,
    ELD_IDN_ADDR_PROVINCE: null,
    updateBy: USERLOGIN.Fullname,
    ELD_ID_NUMBER: payload[0],
  })
  console.log("Elder ID Currentaddress Success");
};

export const createAllElder = async (payload) => {
  await createElder(payload);
  await createElderinfo(payload);
  await createElderRelative(payload);
  await createElderCurrent(payload);
  await createElderIdCurrent(payload);
};
