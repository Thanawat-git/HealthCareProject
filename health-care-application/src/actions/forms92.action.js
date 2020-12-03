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
   console.log('2222222222222222222222222222222222222222222222222222222222222',payload)
    Axios.put("http://localhost:3001/osteoarthritis/update/"+payload[34],{
        OST_1_KNEE_PAIN: payload[0],
        OST_1_LVL_PAIN: payload[1],
        OST_1_RESULT: payload[2],
        OST_2_1_R: payload[3],
        OST_2_1_L: payload[4],
        OST_2_1_N: payload[5],
        OST_2_2_R: payload[6],
        OST_2_2_L: payload[7],
        OST_2_2_N: payload[8],
        OST_2_3_R: payload[9],
        OST_2_3_L: payload[10],
        OST_2_3_N: payload[11],
        OST_2_4_R: payload[12],
        OST_2_4_L: payload[13],
        OST_2_4_N: payload[14],
        OST_2_5_R: payload[15],
        OST_2_5_L: payload[16],
        OST_2_5_N: payload[17],
        OST_2_RESULT: payload[18],
        OST_3_1: payload[19],
        OST_3_2: payload[20],
        OST_3_3: payload[21],
        OST_3_4: payload[22],
        OST_3_5: payload[23],
        OST_3_6: payload[24],
        OST_3_7: payload[25],
        OST_3_8: payload[26],
        OST_3_9: payload[27],
        OST_3_10: payload[28],
        OST_3_11: payload[29],
        OST_3_12: payload[30],
        OST_3_SUM_POINT: payload[31],
        OST_3_RESULT: payload[32],
        OST_CORRECT_FORM: payload[33],
    }).then(()=>{
      alert("Osteoarthritis Update Success")
    })
  }