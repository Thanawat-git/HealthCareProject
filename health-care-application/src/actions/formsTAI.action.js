import {CREATE_NEW_FORMS6T,apiBase, USERLOGIN } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
  type: CREATE_NEW_FORMS6T,
  payload
})
export const add = (payload) =>{
  return dispatch=>{
      dispatch(setStateToAdd(payload))
  }
}
export const updateTAI = async (payload)=>{
await  Axios.put(`${apiBase}/TAI/update/${payload[0]}`, {
    TAI_IMMOBILIZE: payload[1],
    TAI_MENTAL: payload[2],
    TAI_FEED: payload[3],
    TAI_TOILET: payload[4],
    TAI_GROUP: payload[5], // result ที่ชื่อ group ไม่ต้อง งง 
    TAI_CORRECT_FORM: payload[6],
    updateBy: USERLOGIN.Fullname
  })
    alert("Alzheimer Tai Update Success")
}