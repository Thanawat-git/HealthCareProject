import { CREATE_NEW_FORMS89Q ,apiBase} from "../constants";
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

export const updateDepressionScreening9q = async (payload)=>{
    console.log("............"+ payload)
await Axios.put(`${apiBase}/depressionScreening/update/${payload[0]}`, {
      DEP_8_1: payload[1],
      DEP_8_2: payload[2],
      DEP_8_3: payload[3],
      DEP_8_4: payload[4],
      DEP_8_5: payload[5],
      DEP_8_6: payload[6],
      DEP_8_7: payload[7],
      DEP_8_8: payload[8],
      DEP_8_9: payload[9],
      DEP_SUM_POINT: payload[10],
      DEP_9Q_RESULT: payload[11],
      DEP_CORRECT_FORM: payload[12]
    })
    console.log("Depression_Screening Update Success")
  }
