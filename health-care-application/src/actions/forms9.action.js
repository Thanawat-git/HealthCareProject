import { CREATE_NEW_FORMS9,apiBase } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS9,
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

export const updateExa9BoneMuscle = async (payload)=>{
    await    Axios.put(`${apiBase}/boneMuscle/update/${payload[0]}`, {
        BONE_9_1: payload[1],
        BONE_9_2: payload[2],
        BONE_9_3: payload[3],
        BONE_9_4: payload[4],
        BONE_9_5: payload[5],
        BONE_9_6: payload[6],
        BONE_9_7: payload[7],
        BONE_9_8: payload[8],
        BONE_9_9: payload[9],
        BONE_9_10: payload[10],
        BONE_9_11: payload[11],
        BONE_9_12: payload[12],
        BONE_RESULT: payload[13],
        BONE_WALK: payload[14],
        BONE_WALK_INFO: payload[15],
        BONE_PHY_FIT_MINUTE: payload[16],
        BONE_PHY_FIT_SECOND: payload[17],
        BONE_PHY_RESULT: payload[18],
        BONE_CORRECT_FORM:payload[19],
        updateBy: null
    })
      alert("Bone_Muscle Update Success")
  }