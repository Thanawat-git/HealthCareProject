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

export const updateExa9BoneMuscle= ({ans9_1,ans9_2,ans9_3,ans9_4,ans9_5,ans9_6,ans9_7,ans9_8,ans9_9,ans9_10,ans9_11,ans9_12,result1,walk,walkInfo,minute,second,result2})=>{
    Axios.put("http://localhost:3001/boneMuscle/update/1",{
        BONE_9_1: ans9_1,
        BONE_9_2: ans9_2,
        BONE_9_3: ans9_3,
        BONE_9_4: ans9_4,
        BONE_9_5: ans9_5,
        BONE_9_6: ans9_6,
        BONE_9_7: ans9_7,
        BONE_9_8: ans9_8,
        BONE_9_9: ans9_9,
        BONE_9_10: ans9_10,
        BONE_9_11: ans9_11,
        BONE_9_12: ans9_12,
        BONE_RESULT: result1,
        BONE_WALK: walk,
        BONE_WALK_INFO: walkInfo,
        BONE_PHY_FIT_MINUTE: minute,
        BONE_PHY_FIT_SECOND: second,
        BONE_PHY_RESULT: result2,
    }).then(()=>{
      alert("Bone_Muscle Update Success")
    })
  }