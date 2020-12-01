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
    Axios.put("http://localhost:3001/waist/update/"+payload[0],{
      WAI_WAIST: payload[1],
      WAI_RESULT: payload[2],
    }).then(()=>{
      alert("Waist update Success")
    })
  }
  
  export  const updateExa2Bmi = (payload)=>{
    Axios.put("http://localhost:3001/bmi/update/"+payload[0],{
      BMI_WEIGHT: payload[1],
      BMI_HEIGHT: payload[2],
      BMI_BMI: payload[3],
      BMI_RESULT: payload[4],
    }).then(()=>{
      alert("Bmi update Success")
    })
  }
  
  export  const updateExa2Bp = (payload)=>{
    Axios.put("http://localhost:3001/bp/update/"+payload[0],{
      BP_PULSE: payload[1],
      BP_BLO_SYS: payload[2],
      BP_BLO_DIA: payload[3],
      BP_RESULT: payload[4],
    }).then(()=>{
      alert("Bp update Success")
    })
  }
  
  export  const updateExa2Fbs = (payload)=>{
    Axios.put("http://localhost:3001/fbs/update/"+payload[0],{
      FBS_FBS: payload[1],
      FBS_RESULT: payload[2],
    }).then(()=>{
      alert("Fbs update Success")
    })
  }
