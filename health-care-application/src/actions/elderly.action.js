import {
  HTTP_ELD_FAILED,
  HTTP_ELD_FETCHING,
  HTTP_ELD_SUCCESS,
  HTTP_ELD_SELECTED,
  apiEld,
  GET_HISTORY_EDL,
  GET_ALL_ELDERY,
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
      console.log("keyword", keyword);
      if(keyword !== null && keyword != ""){
        return Axios.get(`${apiEld}/findByKeyword/${keyword}`).then((res) => {
          console.log("result.data", res.data);
          dispatch(setElderlyStateToSuccress(res.data)); // เอาเฉพาะที่เจอมาแสดง
        });
      } else {
        dispatch(setElderlyStateToSuccress([]));
      }
      
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

export const getEldByKeyword2 = (event) => {
  return (dispatch) => {
    dispatch(setElderlyStateToFetching());
    try {
      var keyword = event.target.value;
      console.log("keyword", keyword);
      if(keyword !== null && keyword != ""){
        return Axios.get(`${apiEld}/findAllEverythingByKeyword/${keyword}`).then((res) => {
          console.log("result.data", res.data);
          dispatch({
            type: GET_ALL_ELDERY,
            payload: res.data
          }); // เอาเฉพาะที่เจอมาแสดง
        });
      } else {
        console.log("no keyword");
        doGetElderly(dispatch)
      }
      
    } catch (error) {
      dispatch(setElderlyStateToFailed());
    }
  }
}

export const getAllEldery = ()=> {
  return dispatch => {
    dispatch(setElderlyStateToFetching());
    doGetElderly(dispatch)
  }
}

const doGetElderly = (dispatch)=>{
  Axios.get(`${apiEld}/findAllEverything`)
  .then((res) => {
    console.log("res.data ", res.data);
    dispatch({
      type: GET_ALL_ELDERY,
      payload: res.data
    });
  })
  .catch((error) => {
    dispatch(setElderlyStateToFailed());
  });
}