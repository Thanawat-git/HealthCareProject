import { CREATE_NEW_FORMS4 } from "../constants";
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
export const createExa4Eye = ()=>{
    Axios.post("http://localhost:3001/eye/create",{
        EYE_4_1: null,
        EYE_4_2: null,
        EYE_4_3: null,
        EYE_4_4: null,
        EYE_4_5: null,
        EYE_COUNT: null,
        EYE_RESULT: null,
        VIS_ID: "1",
        VIS_DATE: new Date()
    }).then(()=>{
      alert("Eye Create Success")
    })
  }