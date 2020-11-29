import { FOUND_ELD } from "../constants";
import Axios from 'axios';

export const setStateToAdd = (payload) => ({
  type: FOUND_ELD,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const fetchData = () =>{
  Axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>{
      return add(res.data)
    })
}