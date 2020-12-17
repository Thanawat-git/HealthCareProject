import { FORMS1P2_ADD_NEW, apiEld } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
  type: FORMS1P2_ADD_NEW,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const updateElder = (payload) => {
  Axios.put(`${apiEld}/update/${payload[0]}`, {
    ELD_PHONE: payload[1],
  }).then(() => {
    alert("Update Elder Success");
  });
};

export const updateElderCurrent = (payload) => {
  Axios.put(`${apiEld}/currentaddress/update/${payload[0]}`, {
    ELD_CUR_NUMBER: payload[1],
    ELD_CUR_ALLEY: payload[2],
    ELD_CUR_STREET: payload[3],
    ELD_CUR_SUB_DISTRICT: payload[4],
    ELD_CUR_AREA: payload[5],
    updateBy: null
  }).then(() => {
    alert("Update Elder Current Address Success");
  });
};

export const updateElderIdCurrent = (payload) => {
  Axios.put(
    `${apiEld}/idnumberaddress/update/${payload[0]}`,
    {
      ELD_IDN_ADDR_NUMBER: payload[1],
      ELD_IDN_ADDR_ALLEY: payload[2],
      ELD_IDN_ADDR_STREET: payload[3],
      ELD_IDN_ADDR_SUB_DISTRICT: payload[4],
      ELD_IDN_ADDR_AREA: payload[5],
      updateBy: null
    }
  ).then(() => {
    alert("Update Elder ID Currentaddress Success");
  });
};
