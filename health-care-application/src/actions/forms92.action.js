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
export const updateExa9_1Osteoarthritis= (
    {ans1R,ans2R,ans3R,ans4R,ans5R,ans1L,ans2L,ans3L,ans4L,ans5L,ans1N,ans2N,ans3N,ans4N,ans5N,results}
)=>{
    Axios.put("http://localhost:3001/osteoarthritis/update/1",{
        OST_1_KNEE_PAIN: null,
        OST_1_LVL_PAIN: null,
        OST_1_RESULT: null,
        OST_2_1_R: ans1R,
        OST_2_1_L: ans1L,
        OST_2_1_N: ans1N,
        OST_2_2_R: ans2R,
        OST_2_2_L: ans2L,
        OST_2_2_N: ans2N,
        OST_2_3_R: ans3R,
        OST_2_3_L: ans3L,
        OST_2_3_N: ans3N,
        OST_2_4_R: ans4R,
        OST_2_4_L: ans4L,
        OST_2_4_N: ans4N,
        OST_2_5_R: ans5R,
        OST_2_5_L: ans5L,
        OST_2_5_N: ans5N,
        OST_2_RESULT: results,
    }).then(()=>{
      alert("Osteoarthritis Update Success")
    })
  }