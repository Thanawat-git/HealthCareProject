import { CREATE_NEW_FORMS7M ,apiBase ,USERLOGIN} from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS7M,
    payload
})

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

// CREATE NEW FORM
export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
        // updatemmse()
    }
}

export const updateMMSE = async (payload)=>{
await  Axios.put(`${apiBase}/MMSE/update/${payload[43]}`, {
      MMSE_1_1: payload[0],
      MMSE_1_1_POINT: payload[1],
      MMSE_1_2: payload[2],
      MMSE_1_2_POINT: payload[3],
      MMSE_1_3: payload[4],
      MMSE_1_3_POINT: payload[5],
      MMSE_1_4: payload[6],
      MMSE_1_4_POINT: payload[7],
      MMSE_1_5: payload[8],
      MMSE_1_5_POINT: payload[9],
      MMSE_2_1: payload[10],
      MMSE_2_1_POINT: payload[11],
      MMSE_2_2: payload[12],
      MMSE_2_2_POINT: payload[13],
      MMSE_2_3: payload[14],
      MMSE_2_3_POINT: payload[15],
      MMSE_2_4: payload[16],
      MMSE_2_4_POINT: payload[17],
      MMSE_2_5: payload[18],
      MMSE_2_5_POINT: payload[19],
      MMSE_3_1_POINT: payload[20],
      MMSE_3_2_POINT: payload[21],
      MMSE_3_3_POINT: payload[22],
      MMSE_4_1_POINT: payload[23],
      MMSE_4_2_POINT: payload[24],
      MMSE_4_3_POINT: payload[25],
      MMSE_4_4_POINT: payload[26],
      MMSE_4_5_POINT: payload[27],
      MMSE_5_1_POINT: payload[28],
      MMSE_5_2_POINT: payload[29],
      MMSE_5_3_POINT: payload[30],
      MMSE_6_1_POINT: payload[31],
      MMSE_6_2_POINT: payload[32],
      MMSE_7_POINT: payload[33],
      MMSE_8_1_POINT:payload[34],
      MMSE_8_2_POINT:payload[35],
      MMSE_8_3_POINT:payload[36],
      MMSE_9_POINT:payload[37],
      MMSE_10: payload[38],
      MMSE_10_POINT: payload[39],
      MMSE_11_POINT: payload[40],
      MMSE_CORRECT_FORM: payload[41],
      MMSE_RESULT:payload[42],
      updateBy: USERLOGIN.Fullname
  })
  console.log("MMSE Update Success")
}

// export const updatemmse = () =>{
//   console.log('updatemmse ')
//   Axios.put("http://localhost:3001/MMSE/update/8", {
//     MMSE_1_1_POINT: '0',
//   }).then(()=>{
//     console.log("MMSE Update Success")
//     // console.log('res ', res.data)
//   })
// }