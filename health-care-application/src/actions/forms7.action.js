import { CREATE_NEW_FORMS7 } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS7,
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

export const updateAlzheimer = (payload)=>{
    Axios.put("http://localhost:3001/alzheimer/update/"+payload[22],{
      ALZ_7_1_EL_AGE: payload[0],
      ALZ_7_1_RESULT_AGE: payload[1],
      ALZ_7_2_EL_TIME: payload[2],
      ALZ_7_2_RESULT_TIME: payload[3],
      ALZ_7_3_EL_ADDR: payload[4],
      ALZ_7_3_RESULT_ADDR: payload[5],
      ALZ_7_4_EL_YEAR: payload[6],
      ALZ_7_4_RESULT_YEAR: payload[7],
      ALZ_7_5_EL_PLACE: payload[8],
      ALZ_7_5_RESULT_PLACE: payload[9],
      ALZ_7_6_EL_WHOM: payload[10],
      ALZ_7_6_RESULT_WHOM: payload[11],
      ALZ_7_7_EL_BIRTHDATE: payload[12],
      ALZ_7_7_RESULT_BIRTHDATE: payload[13],
      ALZ_7_8_EL_OCT14: payload[14],
      ALZ_7_8_RESULT_OCT14: payload[15],
      ALZ_7_9_EL_KING: payload[16],
      ALZ_7_9_RESULT_KING: payload[17],
      ALZ_7_10_EL_COUNTDOWN: payload[18],
      ALZ_7_10_RESULT_COUNTDOWN: payload[19],
      ALZ_RESULT:[20],
      ALZ_CORRECT_FORM:payload[21],

    }).then(()=>{
      alert("Alzheimer Update Success")
    })
  }