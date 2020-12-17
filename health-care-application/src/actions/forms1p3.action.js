import { FORMS1P3_ADD_NEW , apiEld } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: FORMS1P3_ADD_NEW,
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

export function updateElderRelative(payload) {
    Axios.put(`${apiEld}/relative/update/${payload[0]}`,{
      ELD_REL_FIRSTNAME: payload[1],
      ELD_REL_LASTNAME: payload[2],
      ELD_REL_GENDER: payload[3],
      ELD_REL_TIME: payload[4],
      ELD_REL_RELATION: payload[5],
      ELD_REL_PHONE: payload[6],
      updateBy: null
    }).then(()=>{
      alert("Update Elder Relative Success")
    })
  }
  
export function createElderRelative2(payload) {
    Axios.post(`${apiEld}/relative/create`,{
      ELD_REL_FIRSTNAME: payload[0],
      ELD_REL_LASTNAME: payload[1],
      ELD_REL_GENDER: payload[2],
      ELD_REL_TIME: payload[3],
      ELD_REL_RELATION: payload[4],
      ELD_REL_PHONE: payload[5],
      ELD_ID_NUMBER: payload[6],
      updateBy: null
    }).then(()=>{
      alert("Elder Relative Success")
    })
  }