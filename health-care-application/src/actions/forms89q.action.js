import { CREATE_NEW_FORMS89Q } from "../constants";
import Axios from 'axios';
export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS89Q,
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

export const updateDepressionScreening9q = (payload)=>{
    Axios.put("http://localhost:3001/depressionScreening/update/1",{
      DEP_8_1: payload[0],
      DEP_8_2: payload[1],
      DEP_8_3: payload[2],
      DEP_8_4: payload[3],
      DEP_8_5: payload[4],
      DEP_8_6: payload[5],
      DEP_8_7: payload[6],
      DEP_8_8: payload[7],
      DEP_8_9: payload[8],
      DEP_SUM_POINT: payload[9],
      DEP_9Q_RESULT: payload[10],
    }).then(()=>{
      alert("Depression_Screening Update Success")
    })
  }
