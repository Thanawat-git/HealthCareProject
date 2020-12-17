import {CREATE_NEW_FORMS6T,apiSectionTai } from "../constants";
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
  Axios.put(`${apiSectionTai}/update/${payload[0]}`, {
    TAI_IMMOBILIZE: payload[1],
    TAI_MENTAL: payload[2],
    TAI_FEED: payload[3],
    TAI_TOILET: payload[4],
    TAI_GROUP: payload[5],
    TAI_CORRECT_FORM: payload[6],
    updateBy: null
  }).then(()=>{
    alert("Alzheimer Tai Update Success")
  })
}