
import Axios from 'axios';





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