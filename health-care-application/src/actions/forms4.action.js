import { CREATE_NEW_FORMS4,apiBase,USERLOGIN } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS4,
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
export const updateExa4Eye = async (payload)=>{
await   Axios.put(`${apiBase}/eye/update/${payload[0]}`, {
        EYE_4_1: payload[1],
        EYE_4_2: payload[2],
        EYE_4_3: payload[3],
        EYE_4_4: payload[4],
        EYE_4_5: payload[5],
        EYE_COUNT: payload[6],
        EYE_RESULT: payload[7],
        EYE_CORRECT_FORM:payload[8],
        updateBy: USERLOGIN.Fullname
    })
    console.log("Eye update Success")
  }