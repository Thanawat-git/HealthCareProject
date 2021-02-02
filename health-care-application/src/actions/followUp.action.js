import Axios from "axios";
import {
  apiBase,
  HTTP_FOLLOWUP_FAILED,
  HTTP_FOLLOWUP_FETCHING,
  HTTP_FOLLOWUP_SELECTED,
  HTTP_FOLLOWUP_SUCCESS,
} from "../constants";

export const setFollowupToFetching = () => ({
  type: HTTP_FOLLOWUP_FETCHING,
});
export const setFollowupToSuccress = (payload) => ({
  type: HTTP_FOLLOWUP_SUCCESS,
  payload,
});
export const setFollowupToFailed = (payload) => ({
  type: HTTP_FOLLOWUP_FAILED,
  payload,
});

export const selectedFollowUp = value => {
  return dispatch =>{
    dispatch({
      type: HTTP_FOLLOWUP_SELECTED,
      payload: value
    })
  } 
}

export const getFollowUp = (key) => {
  return (dispatch) => {
    // dispatch(setFollowupToFetching())
    doGetFollowUp(dispatch, key);
    // return Axios.get(`${apiBase}/appointment/${key}`).then(res=>{
    //     dispatch(setFollowupToSuccress(res.data))
    // }).catch(error=>{
    //     dispatch(setFollowupToFailed(error))
    // })
  };
};

export const deleteFollowUp = (id, key) => {
  // console.log('id ',id, ' key ',key)
  return async (dispatch) => {
    await Axios.delete(`${apiBase}/appointment/delete/${id}`);
    await doGetFollowUp(dispatch, key);
  };
};

// http://localhost:3001/appointment/update/6
export const updateFollowUp = (id, key, value) => {
  return async (dispatch) => {
    try {
      await Axios.put(`${apiBase}/appointment/update/${id}`, {
        APPOINT_DATE: value,
      });
      await doGetFollowUp(dispatch, key);
    } catch (error) {
      console.log("error ", error);
    }
  };
};

// http://localhost:3001/appointment/findAllBykeyword/สม
export const getFollowUpByKeyword = (event,key) => {
    return dispatch => {
        dispatch(setFollowupToFetching());
        try {
            var keyword = event.target.value;
            if(keyword!==null && keyword!=""){
                return Axios.get(`${apiBase}/appointment/findAllBykeyword/${keyword}`).then(res=>{
                    dispatch(setFollowupToSuccress(res.data))
                })
            } else {
               doGetFollowUp(dispatch, key)
            }
        } catch (error) {
            dispatch(setFollowupToFailed(error))
        }
    }
}

export const getFollowUpById = id => {
  return dispatch => {
      dispatch(setFollowupToFetching());
      try {
        
          return Axios.get(`${apiBase}/appointment/findAllBykeyword/${id}`).then(res=>{
            dispatch(setFollowupToSuccress(res.data))
          })
      
      } catch (error) {
          dispatch(setFollowupToFailed(error))
      }
  }
}
// export const doFollowUp = ()=> {

// }

const doGetFollowUp = (dispatch, key) => {
  dispatch(setFollowupToFetching());
  if(key !== "finished") {
    Axios.get(`${apiBase}/appointment/${key}`)
    .then((res) => {
      dispatch(setFollowupToSuccress(res.data));
    })
    .catch((error) => {
      dispatch(setFollowupToFailed(error));
    });
  } else {
    Axios.get(`${apiBase}/appointment/findAllAppointmented`).then(res=>{
      dispatch(setFollowupToSuccress(res.data))
    }).catch((error) => {
      dispatch(setFollowupToFailed(error));
    });
  }
  
};
