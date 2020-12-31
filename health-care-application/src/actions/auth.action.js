import {
  CLEAR_MESSAGE,
  HTTP_LOGIN_FAILED,
  HTTP_LOGIN_SUCCESS,
  LOGOUT,
  SET_MESSAGE,
  USER,
} from "../constants";
import AuthService from "../services/auth.service";

export const autoLogin = (history) =>{
  return ()=>{
    if(localStorage.getItem(USER)!==null){
      let data = JSON.parse(localStorage.getItem(USER))
      console.log("have user login ",data.Role)
      setTimeout(() => {
        switch (data.Role) {
          case "VOLUNTEER":
            history.push("/volunteerpage");
            break;
          case "ADMIN":
            history.push("/genaraladminpage");
            break;
          default:
            // history.push("/login");
            break;
        }
      }, 100);
    } else {
      console.log("no login ")
    }
  }
}

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

export const loginAdmin = (history, credential) => {
  return (dispatch) => {
    return AuthService.loginAdmin(
      credential.username,
      credential.password
    ).then(
      (data) => {
        dispatch({
          type: HTTP_LOGIN_SUCCESS,
          payload: { user: data },
        });
        history.push("/genaraladminpage");
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
