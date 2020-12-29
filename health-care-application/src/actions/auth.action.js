import {
  CLEAR_MESSAGE,
  HTTP_LOGIN_FAILED,
  HTTP_LOGIN_SUCCESS,
  LOGOUT,
  SET_MESSAGE,
} from "../constants";
import AuthService from "../services/auth.service";

// message from server
// export const setMessage = (message) => ({
//   type: SET_MESSAGE,
//   payload: message,
// });
// export const clearMessage = () => ({
//   type: CLEAR_MESSAGE,
// });
// message from server

export const loginVolunteer = (history, credential) => {
  return (dispatch) => {
    return AuthService.loginVolunteer(
      credential.username,
      credential.password
    ).then(
      (data) => {
        dispatch({
          type: HTTP_LOGIN_SUCCESS,
          payload: { user: data },
        });
        history.push("/volunteerpage");
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({ type: HTTP_LOGIN_FAILED });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_MESSAGE,
  });
};
