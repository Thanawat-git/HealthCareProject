import { CREATE_NEW_FORMS10 ,apiBase} from "../constants";
import Axios from 'axios';
export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS10,
    payload
})

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

// CREATE NEW FORM
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
export const upadateExa10Urination = async (payload)=>{
    await   Axios.put(`${apiBase}/urination/update/${payload[0]}`, {
        URI_10_1: payload[1],
        URI_RESULT:payload[2],
        URI_CORRECT_FORM:payload[3],
        updateBy: null
    })
      alert("Urination update Success")
  }