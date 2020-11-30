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

// pid
// first name
// last name
// nick name
// phone number
// food
// drug
// disease
