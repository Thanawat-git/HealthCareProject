import axios from "axios";
import { apiBase, NETWORK_CONNECTED, NETWORK_ERROR } from "../constants";

export const isReachable = (dispatch) => {
    console.log("request ")
//   const request = axios.get(`${apiBase}`);
  axios.get(`${apiBase}`).then(res=>{
    console.log("request ",res.data)
    dispatch({ type: NETWORK_CONNECTED });
  }).catch((err)=>{
    console.log("request err")
    dispatch({ type: NETWORK_ERROR });
  });
//   try {
//       const response = await Promise.race([fetch(`${apiBase}`)]);
//       console.log("ปกติดี")
//       console.log("response ",response)
//         dispatch({ type: NETWORK_CONNECTED });
//         return true;
//   } catch (error) {
//     console.log("ไม่ปกติดี")
//     dispatch({ type: NETWORK_ERROR });
//     return 
//   }

};
