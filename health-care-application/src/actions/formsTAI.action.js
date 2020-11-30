
import Axios from 'axios';





export const updateTAI = (payload)=>{
  Axios.put("http://localhost:3001/TAI/update/1",{
    TAI_IMMOBILIZE: payload[0],
    TAI_MENTAL: payload[1],
    TAI_FEED: payload[2],
    TAI_TOILET: payload[3],
    TAI_GROUP: payload[4],
    TAI_CORRECT_FORM: payload[5],
  }).then(()=>{
    alert("Alzheimer Update Success")
  })
}