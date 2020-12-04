import { CREATE_NEW_FORMS6 } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS6,
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

export const updateAilityInLife = (payload)=>{
    Axios.put("http://localhost:3001/abilityInLife/update/"+payload[13],{
        ABI_6_1: payload[0],
        ABI_6_2: payload[1],
        ABI_6_3: payload[2],
        ABI_6_4: payload[3],
        ABI_6_5: payload[4],
        ABI_6_6: payload[5],
        ABI_6_7: payload[6],
        ABI_6_8: payload[7],
        ABI_6_9: payload[8],
        ABI_6_10: payload[9],
        ABI_SUM_POINT: payload[10],
        ABI_GROUP: payload[11],
        ABI_CORRECT_FORM: payload[12],
        updateBy: null
    }).then(()=>{
      alert("AilityInLife Update Success")
    })
  }