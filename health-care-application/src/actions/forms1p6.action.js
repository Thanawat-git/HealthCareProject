import { FORMS1P6_ADD_NEW } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: FORMS1P6_ADD_NEW,
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

// export const createTable = () => ({
//     type: FORMS1P6_ADD_NEW,
// })
export const createExa2Waist = ()=>{
    Axios.post("http://localhost:3001/waist/create",{
      WAI_WAIST: null,
      WAI_RESULT: null,
      VIS_ID: "1",
      VIS_DATE: new Date()
    }).then(()=>{
      alert("Waist Create Success")
    })
}