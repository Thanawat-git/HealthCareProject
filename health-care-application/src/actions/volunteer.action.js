import Axios from "axios";
import {
  HTTP_VOL_FAILED,
  HTTP_VOL_FETCHING,
  HTTP_VOL_SUCCESS,
  apiVol,
  USERLOGIN,
} from "../constants";

export const setVolunteerStateToFetching = () => ({
  type: HTTP_VOL_FETCHING,
});

export const setVolunteerStateToSuccress = (payload) => ({
  type: HTTP_VOL_SUCCESS,
  payload,
});

export const setVolunteerStateToFailed = () => ({
  type: HTTP_VOL_FAILED,
});

export const createVolunteer = (payload) => {
  return async (dispatch) => {
    await Axios.post(`${apiVol}/create`, {
      VOL_ID_NUMBER: payload[0],
      VOL_PASSWORD: payload[0],
      VOL_FIRSTNAME: payload[1],
      VOL_LASTNAME: payload[2],
      VOL_PHONE: payload[3],
      VOL_LINE: payload[4],
      VOL_FACEBOOK: payload[5],
      VOL_REFERENCE:payload[6],
      VOL_PHOTO: "-",
      VOL_STATUS: true,
      updateBy: USERLOGIN.Fullname,
    });
    await Axios.post(`${apiVol}/information/create`,{
      VOL_ID_NUMBER: payload[0],
      VOL_GENDER: payload[7],
      VOL_AGE: null,
      VOL_BIRTHDATE: payload[9],
      VOL_ADDR_NUMBER: payload[10],
      VOL_ADDR_ALLEY: payload[11],
      VOL_ADDR_STREET: payload[12],
      VOL_ADDR_SUB_DISTRICT: payload[13],
      VOL_ADDR_AREA: payload[14],
      updateBy: USERLOGIN.Fullname,
    })
    await doGetVolunteer(dispatch);
  };
};
  
export const updateVolunteer = (payload) => {
    return async dispatch => {
        await Axios.put(`${apiVol}/update/${payload[0]}`,{
          VOL_ID_NUMBER: payload[1],
          VOL_PASSWORD: payload[2],
          VOL_FIRSTNAME: payload[3],
          VOL_LASTNAME: payload[4],
          VOL_PHONE: payload[5],
          VOL_LINE: payload[6],
          VOL_FACEBOOK: payload[7],
          VOL_REFERENCE:payload[8]
        })
        await Axios.put(`${apiVol}/information/update/${payload[0]}`, {
          VOL_ID_NUMBER: payload[1],
          VOL_GENDER: payload[9],
          VOL_AGE: payload[10],
          VOL_BIRTHDATE: payload[11],
          VOL_ADDR_NUMBER: payload[12],
          VOL_ADDR_ALLEY: payload[13],
          VOL_ADDR_STREET: payload[14],
          VOL_ADDR_SUB_DISTRICT: payload[15],
          VOL_ADDR_AREA: payload[16],
        })
        await doGetVolunteer(dispatch);
    }
}

export const updateVolStatus = payload => {
  return async dispatch => {
    await Axios.put(`${apiVol}/update/${payload[0]}`, {
      VOL_STATUS: payload[1]
    })
    await doGetVolunteer(dispatch);
  }
}

export const deleteVolunteer = (id) => {
  return async (dispatch) => {
    dispatch(setVolunteerStateToFetching());
    await Axios.delete(`${apiVol}/delete/${id}`);
    await doGetVolunteer(dispatch);
  };
};

export const getVolunteerByKeyword = (event) => {
  return (dispatch) => {
    dispatch(setVolunteerStateToFetching());
    try {
      var keyword = event.target.value;
      if (keyword !== null && keyword != "") {
        return Axios.get(`${apiVol}/findByKeyword/${keyword}`).then((res) => {
          dispatch(setVolunteerStateToSuccress(res.data));
        });
      } else {
        doGetVolunteer(dispatch);
      }
    } catch (error) {
      dispatch(setVolunteerStateToFailed());
    }
  };
};

export const getAllVolunteers = () => {
  return (dispatch) => {
    dispatch(setVolunteerStateToFetching());
    doGetVolunteer(dispatch);
    // return Axios.get(`${apiVol}/findAll`).then(res=>{
    //     dispatch(setVolunteerStateToSuccress(res.data))
    // })
  };
};

const doGetVolunteer = (dispatch) => {
  Axios.get(`${apiVol}/findAll`)
    .then((res) => {
      console.log("res.data ", res.data);
      dispatch(setVolunteerStateToSuccress(res.data));
    })
    .catch((error) => {
      dispatch(setVolunteerStateToFailed());
    });
};


