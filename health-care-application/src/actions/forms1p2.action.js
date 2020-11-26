import { FORMS1P2_ADD_NEW } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
  type: FORMS1P2_ADD_NEW,
  payload,
});

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

// export const edit = () =>{
//     return dispatch=>{
//         dispatch(setStateToEdit())
//     }
// }

export const updateElder = (payload) => {
  Axios.put("http://localhost:3001/elder/update/" + payload[0], {
    ELD_PHONE: payload[1],
  }).then(() => {
    alert("Update Elder Success");
  });
};

export const updateElderCurrent = (payload) => {
  Axios.put("http://localhost:3001/elder/currentaddress/update/1103702726761", {
    ELD_CUR_NUMBER: payload[0],
    ELD_CUR_VILLAGE: payload[1],
    ELD_CUR_LANE: payload[2],
    ELD_CUR_STREET: payload[3],
    ELD_CUR_SUB_DISTRICT: payload[4],
    ELD_CUR_DISTRICT: "เมือง",
    ELD_CUR_PROVINCE: "ชลบุรี",
  }).then(() => {
    alert("Update Elder Currentaddress Success");
  });
};

export const updateElderIdCurrent = (payload) => {
  Axios.put(
    "http://localhost:3001/elder/idnumberaddress/update/1103702726761",
    {
      ELD_IDN_ADDR_NUMBER: payload[0],
      ELD_IDN_ADDR_VILLAGE: payload[1],
      ELD_IDN_ADDR_LANE: payload[2],
      ELD_IDN_ADDR_STREET: payload[3],
      ELD_IDN_ADDR_SUB_DISTRICT: payload[4],
      ELD_IDN_ADDR_DISTRICT: "เมือง",
      ELD_IDN_ADDR_PROVINCE: "ชลบุรี",
    }
  ).then(() => {
    alert("Update Elder ID Currentaddress Success");
  });
};
