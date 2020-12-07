import { FORMS1P1_ADD_NEW, apiEld } from "../constants";
import Axios from 'axios';

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
const createElder = (payload) => {
  Axios.post(`${apiEld}/create`, {
    ELD_ID_NUMBER: payload[0],
    ELD_FIRSTNAME: payload[1],
    ELD_LASTNAME: payload[2],
    ELD_PHONE: null,
    ELD_LAST_VISIT_DATE: null,
    ELD_AKA: payload[4],
  }).then(() => {
    alert("Elder Success");
  });
};

// update elder
export const updateElder = (payload) => {
  Axios.put(`${apiEld}/update/${payload[0]}`, {
    ELD_ID_NUMBER: payload[1],
    ELD_FIRSTNAME: payload[2],
    ELD_LASTNAME: payload[3],
    ELD_PHONE: payload[4],
    ELD_AKA: payload[5],
    updateBy: null
  }).then(() => {
    alert("Elder update Success");
  });
};

// Create form1 sec1-6
const createElderinfo = (payload) => {
  Axios.post(`${apiEld}/information/create`, {
    ELD_BIRTHDATE: payload[5],
    ELD_GENDER: payload[3],
    ELD_AGE: payload[6],
    ELD_STATUS: null,
    ELD_LIVELIHOOD: null,
    ELD_RELIGION: null,
    ELD_EDUCATION: null,
    ELD_JOB: null,
    ELD_TREATMENT: null,
    ELD_INCOME: null,
    updateBy: null,
    ELD_ID_NUMBER: payload[0],
  }).then(() => {
    alert("Elder Info Success");
  });
};

const createElderRelative = (payload) => {
  Axios.post(`${apiEld}/relative/create`, {
    ELD_REL_FIRSTNAME: null,
    ELD_REL_LASTNAME: null,
    ELD_REL_RELATION: null,
    ELD_REL_PHONE: null,
    updateBy: null,
    ELD_ID_NUMBER: payload[0],
  }).then(() => {
    alert("Elder Relative Success");
  });
};

const createElderCurrent = (payload) => { //ที่อยู่ปัจจุบัน
  Axios.post(`${apiEld}/currentaddress/create`, {
    ELD_CUR_NUMBER: null,
    ELD_CUR_VILLAGE: null,
    ELD_CUR_LANE: null,
    ELD_CUR_STREET: null,
    ELD_CUR_SUB_DISTRICT: null,
    ELD_CUR_DISTRICT: null,
    ELD_CUR_PROVINCE: null,
    updateBy: null,
    ELD_ID_NUMBER: payload[0],
  }).then(() => {
    alert("Elder Currentaddress Success");
  });
};

const createElderIdCurrent = (payload) => { //ที่อยู่ตามบัตรประชาชน
  Axios.post(`${apiEld}/idnumberaddress/create`, {
    ELD_IDN_ADDR_NUMBER: null,
    ELD_IDN_ADDR_VILLAGE: null,
    ELD_IDN_ADDR_LANE: null,
    ELD_IDN_ADDR_STREET: null,
    ELD_IDN_ADDR_SUB_DISTRICT: null,
    ELD_IDN_ADDR_DISTRICT: null,
    ELD_IDN_ADDR_PROVINCE: null,
    updateBy: null,
    ELD_ID_NUMBER: payload[0],
  }).then(() => {
    alert("Elder ID Currentaddress Success");
  });
};

export const createAllElder = (payload) => {
  createElder(payload);
  createElderinfo(payload);
  createElderRelative(payload);
  createElderCurrent(payload);
  createElderIdCurrent(payload);
};
