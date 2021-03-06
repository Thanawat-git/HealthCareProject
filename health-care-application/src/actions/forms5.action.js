import { CREATE_NEW_FORMS5 ,apiBase, USERLOGIN} from "../constants";
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
export const updateOralHealth = async (payload)=>{
  await   Axios.put(`${apiBase}/oralHealth/update/${payload[20]}`, {
      ORAL_5_1: payload[0],
      ORAL_5_1_1: payload[1],
      ORAL_5_2: payload[2],
      ORAL_5_3: payload[3],
      ORAL_5_4_1:payload[4],
      ORAL_5_4_2:payload[5],
      ORAL_5_4_3: payload[6],
      ORAL_5_4_4: payload[7],
      ORAL_5_4_5: payload[8],
      ORAL_5_5: payload[9],
      ORAL_5_6: payload[10],
      ORAL_5_7: payload[11],
      ORAL_5_8: payload[12],
      ORAL_5_9: payload[13],
      ORAL_5_10: payload[14],
      ORAL_5_11: payload[15],
      ORAL_5_12: payload[16],
      ORAL_5_13: payload[17],
      ORAL_COUNT: payload[18],
      ORAL_RESULT: payload[19],
      ORAL_CORRECT_FORM:payload[21],
      updateBy: USERLOGIN.Fullname
    }).then(()=>{
        console.log("Oral_Health Update Success")
    }).catch(error=>{
        console.log("error con not update Oral_Health SEC5 !!!", error)
    })
    
  }
  