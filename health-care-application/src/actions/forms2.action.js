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

// export const updateExa2Waist = (payload)=>{
//     Axios.put("http://localhost:3001/waist/update/1",{
//       WAI_WAIST: payload[0],
//       WAI_RESULT: payload[1],
//     }).then(()=>{
//       alert("Waist update Success")
//     })
//   }
  
//   export  const updateExa2Bmi = ()=>{
//     Axios.put("http://localhost:3001/bmi/update/1",{
//       BMI_WEIGHT: weight,
//       BMI_HEIGHT: high,
//       BMI_BMI: bmi,
//       BMI_RESULT: bmiResult,
//     }).then(()=>{
//       alert("Bmi update Success")
//     })
//   }
  
//   export  const updateExa2Bp = ()=>{
//     Axios.put("http://localhost:3001/bp/update/1",{
//       BP_PULSE: pulse,
//       BP_BLO_SYS: bloodPressure1,
//       BP_BLO_DIA: bloodPressure2,
//       BP_RESULT: bloodPressureResult,
//     }).then(()=>{
//       alert("Bp update Success")
//     })
//   }
  
//   export  const updateExa2Fbs = ()=>{
//     Axios.put("http://localhost:3001/fbs/update/1",{
//       FBS_FBS: sugar,
//       FBS_RESULT: sugarResult,
//     }).then(()=>{
//       alert("Fbs update Success")
//     })
//   }
