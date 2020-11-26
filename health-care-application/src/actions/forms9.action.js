import { CREATE_NEW_FORMS9 } from "../constants";
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

export const updateExa9BoneMuscle= (payload)=>{
    Axios.put("http://localhost:3001/boneMuscle/update/1",{
        BONE_9_1: payload[0],
        BONE_9_2: payload[1],
        BONE_9_3: payload[2],
        BONE_9_4: payload[3],
        BONE_9_5: payload[4],
        BONE_9_6: payload[5],
        BONE_9_7: payload[6],
        BONE_9_8: payload[7],
        BONE_9_9: payload[8],
        BONE_9_10: payload[9],
        BONE_9_11: payload[10],
        BONE_9_12: payload[11],
        BONE_RESULT: payload[12],
        BONE_WALK: payload[13],
        BONE_WALK_INFO: payload[14],
        BONE_PHY_FIT_MINUTE: payload[15],
        BONE_PHY_FIT_SECOND: payload[16],
        BONE_PHY_RESULT: payload[17],
    }).then(()=>{
      alert("Bone_Muscle Update Success")
    })
  }