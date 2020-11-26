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
export const updateExa4Eye = (payload)=>{
    Axios.put("http://localhost:3001/eye/update",{
        EYE_4_1: payload[0],
        EYE_4_2: payload[1],
        EYE_4_3: payload[2],
        EYE_4_4: payload[3],
        EYE_4_5: payload[4],
        EYE_COUNT: payload[5],
        EYE_RESULT: payload[6],
        VIS_ID: "1",
        VIS_DATE: new Date()
    }).then(()=>{
      alert("Eye update Success")
    })
  }