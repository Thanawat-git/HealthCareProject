import { CREATE_NEW_FORMS2, apiBase, USERLOGIN } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS2,
    payload
})

// CREATE NEW FORM
export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}

export const updateExa2Waist = async (payload)=>{
  await   Axios.put(`${apiBase}/waist/update/${payload[0]}`, {
      WAI_WAIST: payload[1], //payload[1]
      WAI_RESULT: payload[2],
      WAI_CORRECT_FORM:payload[3],
      updateBy: USERLOGIN.Fullname,
    })
    console.log("Waist update Success")
  }
  
  export  const updateExa2Bmi = async (payload)=>{
    await  Axios.put(`${apiBase}/bmi/update/${payload[0]}`, {
      BMI_WEIGHT: payload[1],
      BMI_HEIGHT: payload[2],
      BMI_BMI: payload[3],
      BMI_RESULT: payload[4],
      BMI_CORRECT_FORM:payload[5],
      updateBy: USERLOGIN.Fullname,
    })
    console.log("Bmi update Success")
  }
  
  export  const updateExa2Bp = async (payload)=>{
    await  Axios.put(`${apiBase}/bp/update/${payload[0]}`, {
      BP_PULSE: payload[1],
      BP_BLO_SYS: payload[2],
      BP_BLO_DIA: payload[3],
      BP_RESULT: payload[4],
      BP_CORRECT_FORM:payload[5],
      updateBy: USERLOGIN.Fullname,
    })
    console.log("Bp update Success")
  }
  
  export  const updateExa2Fbs = async (payload)=>{
    console.log(payload[1])
    await  Axios.put(`${apiBase}/fbs/update/${payload[0]}`, {
      FBS_FAST:payload[1],
      FBS_FBS: payload[2],
      FBS_RESULT: payload[3],
      FBS_CORRECT_FORM:payload[4],
      updateBy: USERLOGIN.Fullname,
    })
    console.log("Fbs update Success")
  }
