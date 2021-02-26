import {
  CREATE_NEW_EDITACCOUNT,
  apiVol,
  UPDATE_EDITACCOUNT,
  apiAdmin,
  USER,
  HTTP_LOGIN_SUCCESS,
} from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: CREATE_NEW_EDITACCOUNT,
  payload,
});

// CREATE NEW FORM
export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const geteditAccount =  (payload,role) => {
  return async (dispatch) => {
      if(role==="VOLUNTEER"){
        await Axios.get(`${apiVol}/findByKeyword/${payload}`).then((res)=>{
            console.log("geteditAccount Vol ", res.data)
            const data = [
                res.data[0].VOL_FIRSTNAME,
                res.data[0].VOL_LASTNAME,
                res.data[0].VOL_PHONE,
              ]
              dispatch({
                type: CREATE_NEW_EDITACCOUNT,
                payload: data,
              });
        })
      } else {
        Axios.get(`${apiAdmin}/findByKeyword/${payload}`).then((res)=>{
            console.log("geteditAccount Admin ", res.data)
            const data = [
                res.data[0].ADM_FIRSTNAME,
                res.data[0].ADM_LASTNAME,
                res.data[0].ADM_PHONE,
              ]
              dispatch({
                type: CREATE_NEW_EDITACCOUNT,
                payload: data,
              });
        })
      }
      
  };
};
export const updateVolunteer = (payload) => {
    // console.log("updateVolunteer data ",payload)
    
    if(payload[0].Role==="VOLUNTEER"){
      Axios.put(`${apiVol}/update/${payload[0].Id}`,{
        VOL_FIRSTNAME: payload[1],
        VOL_LASTNAME: payload[2],
        VOL_PHONE: payload[3],
      })
      .then((res)=>{
          console.log("res.data updateVolunteer ",res.data);
          // localStorage.setItem(USER, {Id:})
      })
    } else {
      Axios.put(`${apiAdmin}/update/${payload[0].Id}`,{
        ADM_FIRSTNAME: payload[1],
        ADM_LASTNAME: payload[2],
        ADM_PHONE: payload[3],
      })
      .then((res)=>{
          console.log("res.data updateAdmin ",res.data);
          // localStorage.setItem(USER, {Id:})
      })
    }
    let data = {
      Id:payload[0].Id, 
      Password:payload[0].Password, 
      Fullname:payload[1]+" "+payload[2], 
      Role:payload[0].Role 
    }
    localStorage.setItem(USER, JSON.stringify(data))
    return dispatch => {
      dispatch({
        type: HTTP_LOGIN_SUCCESS,
        payload: { user: data },
      });
    }
    

}
