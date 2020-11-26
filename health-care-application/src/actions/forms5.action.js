import { CREATE_NEW_FORMS5 } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS5,
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
export const createExa5OralHealth = ()=>{
    Axios.post("http://localhost:3001/oralHealth/create",{
        ORAL_5_1: null,
        ORAL_5_2: null,
        ORAL_5_3: null,
        ORAL_5_4_1: null,
        ORAL_5_4_2: null,
        ORAL_5_4_3: null,
        ORAL_5_4_4: null,
        ORAL_5_4_5: null,
        ORAL_5_5: null,
        ORAL_5_6: null,
        ORAL_5_7: null,
        ORAL_5_8: null,
        ORAL_5_9: null,
        ORAL_5_10: null,
        ORAL_5_11: null,
        ORAL_5_12: null,
        ORAL_5_13: null,
        ORAL_COUNT: null,
        ORAL_RESULT: null,
        VIS_ID: "1",
        VIS_DATE: new Date()
    }).then(()=>{
      alert("Oral_Health Create Success")
    })
  }