import { CREATE_NEW_FORMS92 } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS92,
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
export const updateExa9_1Osteoarthritis= (payload)=>{
   
    Axios.put("http://localhost:3001/osteoarthritis/update/1",{
        OST_1_KNEE_PAIN: null,
        OST_1_LVL_PAIN: null,
        OST_1_RESULT: null,
        OST_2_1_R: payload[0],
        OST_2_1_L: payload[1],
        OST_2_1_N: payload[2],
        OST_2_2_R: payload[3],
        OST_2_2_L: payload[4],
        OST_2_2_N: payload[5],
        OST_2_3_R: payload[6],
        OST_2_3_L: payload[7],
        OST_2_3_N: payload[8],
        OST_2_4_R: payload[9],
        OST_2_4_L: payload[10],
        OST_2_4_N: payload[11],
        OST_2_5_R: payload[12],
        OST_2_5_L: payload[13],
        OST_2_5_N: payload[14],
        OST_2_RESULT: payload[15],
    }).then(()=>{
      alert("Osteoarthritis Update Success")
    })
  }