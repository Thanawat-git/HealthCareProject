import { CREATE_NEW_FORMS8 } from "../constants";
import Axios from 'axios';
export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS8,
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
export const updateDepressionScreening = (payload)=>{
    Axios.put("http://localhost:3001/depressionScreening/update/1",{
      DEP_DEPRESSED: payload[0],
      DEP_NOT_ENJOYING: payload[1],
      DEP_CHECK:payload[3],
      DEP_RESULT: payload[4],
    }).then(()=>{
      alert("Depression_Screening Update Success")
    })
  }