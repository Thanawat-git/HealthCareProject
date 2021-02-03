import Axios from "axios";
import {
  apiBase,
  apiEld,
  GET_RESULT_FOLLOW_SEC2,
  GET_RESULT_FOLLOW_SEC3,
  GET_RESULT_FOLLOW_SEC5,
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
    doGetFollowUp(dispatch, key);
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

export const getResultFollowUp = (fid, fName) => {
  return async dispatch => {
    let res = await Axios.get(`${apiEld}/examsummary/exam2ForAppointment/${fid}`)
    try {
      console.log("res.data sec2 ", res.data);
      dispatch({
        type: GET_RESULT_FOLLOW_SEC2,
        payload: res.data,
      });
    } catch (error) {
      console.log("error get result follow sec2 : ", error)
    }
    if(fName === "โรคหัวใจและหลอดเลือด"){
      let res2 = await Axios.get(`${apiEld}/examsummary/exam3ForAppointment/${fid}`)
      try {
        console.log("res.data3 ", res2.data);
        dispatch({
          type: GET_RESULT_FOLLOW_SEC3,
          payload: res2.data,
        });
      } catch (error) {
        console.log("error get result follow sec3 : ", error)
      }
    } else {
      let res3 = await Axios.get(`${apiEld}/examsummary/exam5ForAppointment/${fid}`)
      try {
        console.log("res.data 5 ", res3.data);
        dispatch({
          type: GET_RESULT_FOLLOW_SEC5,
          payload: res3.data,
        });
      } catch (error) {
        console.log("error get result follow sec5 : ", error)
      }
    }
    
  }
}