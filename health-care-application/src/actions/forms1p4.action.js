import { FORMS1P4_ADD_NEW , apiEld } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: FORMS1P4_ADD_NEW,
    payload
})

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })


export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}

// export const edit = () =>{
//     return dispatch=>{
//         dispatch(setStateToEdit())
//     }
// }

export const updateElderinfo = (payload)=>{
    Axios.put(`${apiEld}/information/update/${payload[0]}`,{
      ELD_STATUS: payload[1],
      ELD_LIVELIHOOD: payload[2],
      ELD_LIVELIHOOD_DETAIL: [3],
      ELD_LIVELIHOOD_NEIGHBOR_NAME:[4],
      ELD_RELIGION: payload[5],
      ELD_EDUCATION: payload[6],
      ELD_JOB: payload[7],
      ELD_TREATMENT: payload[8],
      ELD_INCOME: payload[9],
      adderRole: "VOLUNTEER",
      updateBy: "กรองแก้ว ก้องวัฒนะกุล",
      ADDER_ID_NUMBER: "1200101000000",
    }).then(()=>{
      alert("Update Elder Info Success")
    })
  }