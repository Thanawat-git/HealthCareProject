import Axios from "axios";
import { apiAdmin, apiBase, apiVol, CHECK_USER, CHECK_USER_ERROR, CHANGE_PASS_SUCCESS } from "../constants";

export const checkUser = (pid, data, history) => {
  return (dispatch) => {
    Axios.get(`${apiBase}/checkuser/id/${pid}/birthday/${data}`).then((res) => {
      if (res.data !== "Dont have !!") {
        dispatch({
          type: CHECK_USER,
          payload: [pid, res.data],
        });
        history.push("/reset-password");
      } else {
        dispatch({
          type: CHECK_USER_ERROR,
        });
      }
    });
  };
};

export const changePassword = (pid, role, pass) => {
  return (dispatch) => {
    if (role === "volunteer") {
        console.log("volunteer")
      Axios.put(`${apiVol}/update/${pid}`, {
        VOL_PASSWORD: pass,
      }).then((res)=>{
        console.log(res)
        console.log(res.message)
          if(res.data.message==="Update success!"){
              dispatch({
                  type: CHANGE_PASS_SUCCESS
              })
          }
      });
    } else {
        console.log("Admin")
      Axios.put(`${apiAdmin}/update/${pid}`, {
        ADM_PASSWORD: pass,
      }).then((res)=>{
        console.log(res.data.message)
        if(res.data.message==="Update success!"){
            dispatch({
                type: CHANGE_PASS_SUCCESS
            })
        }
    });
    }
  };
};
// 01/01/1977