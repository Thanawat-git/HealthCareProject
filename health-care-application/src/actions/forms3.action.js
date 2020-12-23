import { CREATE_NEW_FORMS3, apiBase } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS3,
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

// export const createExa3Cardiovascular = (payload)=>{
//     Axios.post("http://localhost:3001/cardiovascular/create",{
//         CARDIO_3_1: payload[0],
//         CARDIO_3_1_COUNT: payload[1],
//         CARDIO_3_2: payload[2],
//         CARDIO_3_3: payload[3],
//         CARDIO_3_4: payload[4],
//         CARDIO_3_5: payload[5],
//         CARDIO_3_6: payload[6],
//         CARDIO_3_7: payload[7],
//         CARDIO_COUNT: payload[8],
//         CARDIO_COUNT_RESULT: payload[9],
//     }).then(()=>{
//       alert("Cardiovascular Create Success")
//     })
//   }

export const updateExa3Cardiovascular = async (payload)=>{
    await   Axios.put(`${apiBase}/cardiovascular/update/${payload[0]}`, {
        CARDIO_3_1: payload[1],
        CARDIO_3_1_COUNT: payload[2],
        CARDIO_3_2: payload[3],
        CARDIO_3_3: payload[4],
        CARDIO_3_4: payload[5],
        CARDIO_3_5: payload[6],
        CARDIO_3_6: payload[7],
        CARDIO_3_7: payload[8],
        CARDIO_COUNT: payload[9],
        CARDIO_COUNT_RESULT: payload[10],
        CARDIO_CORRECT_FORM:payload[11],
        updateBy: null
    })
      alert("Cardiovascular update Success")
  }