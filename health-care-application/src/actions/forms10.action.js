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
export const createExa10Urination= ()=>{
    Axios.post("http://localhost:3001/urination/create",{
        URI_10_1: null,
        VIS_ID: "1",
        VIS_DATE: new Date()
    }).then(()=>{
      alert("Urination Create Success")
    })
  }