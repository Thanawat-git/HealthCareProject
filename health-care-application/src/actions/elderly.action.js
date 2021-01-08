import {
  HTTP_ELD_FAILED,
  HTTP_ELD_FETCHING,
  HTTP_ELD_SUCCESS,
  HTTP_ELD_SELECTED,
  apiEld,
  GET_HISTORY_EDL,
} from "../constants";
import Axios from "axios";

export const setElderlyStateToFetching = () => ({
  type: HTTP_ELD_FETCHING,
});

export const setElderlyStateToSuccress = (payload) => ({
  type: HTTP_ELD_SUCCESS,
  payload,
});

export const setElderlyStateToFailed = () => ({
  type: HTTP_ELD_FAILED,
});

export const getEldByKeyword = (event) => {
  return (dispatch) => {
    dispatch(setElderlyStateToFetching());
    try {
      var keyword = event.target.value;
      // console.log("keyword", keyword);
      return Axios.get(`${apiEld}/findByKeyword/${keyword}`).then((res) => {
        // console.log("result.data", res.data);
        dispatch(setElderlyStateToSuccress(res.data)); // เอาเฉพาะที่เจอมาแสดง
      });
    } catch (error) {
      dispatch(setElderlyStateToFailed());
    }
  };
};

export const setElderlyStateToSelected = (payload) => ({
    type: HTTP_ELD_SELECTED,
    payload,
});

export const setElderlySelectedToState = (payload)=>{
    return dispatch =>{
        dispatch(setElderlyStateToSelected(payload))
    }
}

export const getHistoryEld = id => {
  return dispatch=>{
    return Axios.get(`${apiEld}/visit/findAllVisitsForHistoryDraw/${id}`).then(res=>{
      console.log('res.data in getHistoryEld ',res.data)
      dispatch({
        type: GET_HISTORY_EDL,
        payload: res.data,
      })
    })
  }
}