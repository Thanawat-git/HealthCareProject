import { CREATE_NEW_FORMS10 } from "../constants";
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
export const upadateExa10Urination= (payload)=>{
    Axios.put("http://localhost:3001/urination/update/1",{
        URI_10_1: payload,
    }).then(()=>{
      alert("Urination update Success")
    })
  }