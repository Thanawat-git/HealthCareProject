import { FOUND_ELD, SELECT_ELD } from "../constants";
import Axios from 'axios';

const urlApi = 'http://localhost:3001/elder/'

export const setStateToAdd = (payload) => ({
  type: FOUND_ELD,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const setPidToState = (payload) =>({
  type: 'AddPidToState',
  payload,
})
export const addPidOnly = (payload)=>{
  return (dispatch) => {
    dispatch(setPidToState(payload))
  }
}

export const setStateToSelectEld = (payload) => ({
  type: SELECT_ELD,
  payload,
});

export const selectedEld = (payload)=>{
  console.log('here');
 return (dispatch)=>{
    // console.log('here');
    return Axios.get(`${urlApi}findToEdit/${payload}`)
      .then(res=>{
        dispatch(setStateToSelectEld(res.data))
      });
  };
};

export const getEldByKeyword = event =>{
  // console.log('result.data', event.target.value)
  return (dispatch) => {
    var keyword = event.target.value;
    console.log('here');
    return Axios.get(`http://10.80.6.136:3001/elder/search/${keyword}`)
      .then(res=>{
      console.log('result.data', res.data)
      dispatch(setStateToAdd(res.data)) // เอาเฉพาะที่เจอมาแสดง
    });
    // if (keyword !== null && keyword != ""){
    //     Axios.get(`http://localhost:3001/elder/search/${keyword}`).then(result=>{
    //       console.log('result.data', result.data)
    //       dispatch(setStateToSelectEld(result.data)) // เอาเฉพาะที่เจอมาแสดง
    //     })
    //   } else {
    //     // doGetElds(dispatch) //เอาทั้งหมดที่มีมาแสดง
    //   }
    
    
  }
}