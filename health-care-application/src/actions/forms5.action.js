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
export const updateOralHealth = (payload)=>{
    Axios.put("http://localhost:3001/oralHealth/update/"+payload[19],{
      ORAL_5_1: payload[0],
      ORAL_5_2: payload[1],
      ORAL_5_3: payload[2],
      ORAL_5_4_1:payload[3],
      ORAL_5_4_2:payload[4],
      ORAL_5_4_3: payload[5],
      ORAL_5_4_4: payload[6],
      ORAL_5_4_5: payload[7],
      ORAL_5_5: payload[8],
      ORAL_5_6: payload[9],
      ORAL_5_7: payload[10],
      ORAL_5_8: payload[11],
      ORAL_5_9: payload[12],
      ORAL_5_10: payload[13],
      ORAL_5_11: payload[14],
      ORAL_5_12: payload[15],
      ORAL_5_13: payload[16],
      ORAL_COUNT: payload[17],
      ORAL_RESULT: payload[18],
      ORAL_CORRECT_FORM:payload[20]
    }).then(()=>{
      alert("Oral_Health Update Success")
    })
  }
  