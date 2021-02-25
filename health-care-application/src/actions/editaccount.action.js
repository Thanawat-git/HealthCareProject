import {
  CREATE_NEW_EDITACCOUNT,
  apiVol,
  UPDATE_EDITACCOUNT,
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

export const geteditAccount = (payload) => {
  return (dispatch) => {
    Axios.get(`${apiVol}/findByKeyword/${payload}`).then((res) => {
      console.log("geteditAccount ", res.data);
      const data = [
        res.data[0].VOL_FIRSTNAME,
        res.data[0].VOL_LASTNAME,
        res.data[0].VOL_PHONE,
      ];
      console.log("data :  ", data);
      dispatch({
        type: CREATE_NEW_EDITACCOUNT,
        payload: data,
      });
    });
  };
};
export const updateVolunteer = (payload) => {
console.log("updateVolunteer data ",payload)
return async dispatch => {
    await Axios.put(`${apiVol}/update/${payload[0]}`,{
      VOL_FIRSTNAME: payload[1],
      VOL_LASTNAME: payload[2],
      VOL_PHONE: payload[3],
    });
console.log("updateVolunteer Success");
}
}
