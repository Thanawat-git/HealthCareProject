import Axios from "axios";
import {
  HTTP_ADMIN_FAILED,
  HTTP_ADMIN_FETCHING,
  HTTP_ADMIN_SUCCESS,
  apiAdmin,
} from "../constants";

export const setAdminStateToFetching = () => ({
  type: HTTP_ADMIN_FETCHING,
});

export const setAdminStateToSuccress = (payload) => ({
  type: HTTP_ADMIN_SUCCESS,
  payload,
});

export const setAdminStateToFailed = () => ({
  type: HTTP_ADMIN_FAILED,
});
 
export const createAdmin = (payload) => {
  return async (dispatch) => {
    await Axios.post(`${apiAdmin}/create`, {
      ADM_ID_NUMBER: payload[0],
      ADM_PASSWORD: payload[0],
      ADM_FIRSTNAME: payload[1],
      ADM_LASTNAME: payload[2],
      ADM_PHONE: payload[3],
      ADM_EMAIL: payload[4],
      ADM_GENDER: payload[5],
      ADM_BIRTHDATE: payload[6],
      ADM_POSITION: payload[7],
      // ADM_PHOTO: payload[8],
      ADM_STATUS: true,
    });
    await doGetAdmin(dispatch);
  };
};

export const updateAdmin = (payload) => {
  return async dispatch=>{
    await Axios.put(`${apiAdmin}/update/${payload[0]}`, {
      ADM_ID_NUMBER: payload[1],
      ADM_PASSWORD: payload[9],
      ADM_FIRSTNAME: payload[2],
      ADM_LASTNAME: payload[3],
      ADM_PHONE: payload[4],
      ADM_EMAIL: payload[5],
      ADM_GENDER: payload[6],
      ADM_BIRTHDATE: payload[7],
      ADM_POSITION: payload[8],
      // ADM_PHOTO: payload[9],
      ADM_STATUS: true,
    })
    await doGetAdmin(dispatch)
  }
}

export const updateAdminStatus = payload => {
  return async dispatch => {
    await Axios.put(`${apiAdmin}/update/${payload[0]}`, {
      ADM_STATUS: payload[1],
    })
    await doGetAdmin(dispatch)
  }
}

export const deleteAdmin = id => {
  return async dispatch => {
    await Axios.delete(`${apiAdmin}/delete/${id}`)
    await doGetAdmin(dispatch)
  }
}

export const getAdminByKeyword = (event) => {
  return (dispatch) => {
    dispatch(setAdminStateToFetching());
    try {
      var keyword = event.target.value;
      if (keyword !== null && keyword != "") {
        return Axios.get(`${apiAdmin}/findByKeyword/${keyword}`).then((res) => {
          dispatch(setAdminStateToSuccress(res.data));
        });
      } else {
        doGetAdmin(dispatch);
      }
    } catch (error) {
      dispatch(setAdminStateToFailed());
    }
  };
};

// get all
export const getAllAdmin = () => {
  return (dispatch) => {
    dispatch(setAdminStateToFetching());
    doGetAdmin(dispatch);
  };
};

const doGetAdmin = (dispatch) => {
  Axios.get(`${apiAdmin}/search`)
    .then((res) => {
      dispatch(setAdminStateToSuccress(res.data));
    })
    .catch((error) => {
      dispatch(setAdminStateToFailed());
    });
};
