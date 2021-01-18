import { FORMS1P4_ADD_NEW, apiEld, USERLOGIN } from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: FORMS1P4_ADD_NEW,
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

export const updateElderinfo = async (payload) =>{
  await  Axios.put(`${apiEld}/information/update/${payload[0]}`, {
    ELD_STATUS: payload[1],
    ELD_LIVELIHOOD: payload[2],
    ELD_LIVELIHOOD_DETAIL:payload[3],
    ELD_LIVELIHOOD_NEIGHBOR_NAME:payload[4],
    ELD_RELIGION: payload[5],
    ELD_EDUCATION: payload[6],
    ELD_JOB:payload[7],
    ELD_TREATMENT:payload[8],
    ELD_TREATMENT_HOSPITAL:payload[9],
    ELD_INCOME: payload[10],
    // adderRole: "VOLUNTEER",
    // updateBy: "กรองแก้ว ก้องวัฒนะกุล",
    // ADDER_ID_NUMBER: "1200101000000",
  })
  console.log("Update Elder Info Success");
  }


  export const createElderinfo = async (payload) => {
    await  Axios.post(`${apiEld}/information/create`, {
      ELD_BIRTHDATE: payload[11],
      ELD_GENDER: payload[12],
      ELD_AGE: payload[13],
      ELD_STATUS: payload[1],
      ELD_LIVELIHOOD: payload[2],
      ELD_LIVELIHOOD_DETAIL:payload[3],
      ELD_LIVELIHOOD_NEIGHBOR_NAME:payload[4],
      ELD_RELIGION: payload[5],
      ELD_EDUCATION: payload[6],
      ELD_JOB:payload[7],
      ELD_TREATMENT:payload[8],
      ELD_TREATMENT_HOSPITAL:payload[9],
      ELD_INCOME: payload[10],
      ELD_ID_NUMBER: payload[0],
      adderRole: USERLOGIN.Role,
      updateBy: USERLOGIN.Fullname,
      ADDER_ID_NUMBER: USERLOGIN.Id,
    })
    console.log("Elder Info Success");
  
  };
  
// export function updateElderinfo(payload) {
//   Axios.put(`${apiEld}/information/update/1249900485439`, {
//     ELD_STATUS: "โสดสัส",
//   }).then(() => {
//     console.log("Elder Relative Success");
//   });

