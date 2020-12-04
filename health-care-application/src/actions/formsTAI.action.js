import {CREATE_NEW_FORMS6T } from "../constants";
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
export const updateTAI = (payload)=>{
  Axios.put("http://localhost:3001/TAI/update/"+payload[0],{
    TAI_IMMOBILIZE: payload[1],
    TAI_MENTAL: payload[2],
    TAI_FEED: payload[3],
    TAI_TOILET: payload[4],
    TAI_GROUP: payload[5],
    TAI_CORRECT_FORM: payload[6],
  }).then(()=>{
    alert("Alzheimer Tai Update Success")
  })
}