import { CREATE_NEW_FORMS2 } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS2,
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

export const updateExa2Waist = (payload)=>{
    Axios.put("http://localhost:3001/waist/update/1",{
      WAI_WAIST: payload[0],
      WAI_RESULT: payload[1],
    }).then(()=>{
      alert("Waist update Success")
    })
  }
  
  export  const updateExa2Bmi = (payload)=>{
    Axios.put("http://localhost:3001/bmi/update/1",{
      BMI_WEIGHT: payload[0],
      BMI_HEIGHT: payload[1],
      BMI_BMI: payload[2],
      BMI_RESULT: payload[3],
    }).then(()=>{
      alert("Bmi update Success")
    })
  }
  
  export  const updateExa2Bp = (payload)=>{
    Axios.put("http://localhost:3001/bp/update/1",{
      BP_PULSE: payload[0],
      BP_BLO_SYS: payload[1],
      BP_BLO_DIA: payload[2],
      BP_RESULT: payload[3],
    }).then(()=>{
      alert("Bp update Success")
    })
  }
  
  export  const updateExa2Fbs = (payload)=>{
    Axios.put("http://localhost:3001/fbs/update/1",{
      FBS_FBS: payload[0],
      FBS_RESULT: payload[1],
    }).then(()=>{
      alert("Fbs update Success")
    })
  }
