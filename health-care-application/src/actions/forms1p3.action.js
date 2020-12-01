import { FORMS1P3_ADD_NEW } from "../constants";
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
    Axios.put("http://localhost:3001/elder/relative/update/"+payload[0],{
      ELD_REL_FIRSTNAME: payload[1],
      ELD_REL_LASTNAME: payload[2],
      ELD_REL_RELATION: payload[5],
      ELD_REL_PHONE: payload[6],
    }).then(()=>{
      alert("Update Elder Relative Success")
    })
  }
  
export function createElderRelative2(payload) {
    Axios.post("http://localhost:3001/elder/relative/create",{
      ELD_REL_FIRSTNAME: payload[0],
      ELD_REL_LASTNAME: payload[1],
      ELD_REL_RELATION: payload[4],
      ELD_REL_PHONE: payload[5],
      ELD_ID_NUMBER: payload[6]
    }).then(()=>{
      alert("Elder Relative Success")
    })
  }