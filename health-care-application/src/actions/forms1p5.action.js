import { FORMS1P5_ADD_NEW } from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: FORMS1P5_ADD_NEW,
  payload,
});

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

// export const edit = () =>{
//     return dispatch=>{
//         dispatch(setStateToEdit())
//     }
// }

export const createDrug = (payload) => {
  Axios.post("http://localhost:3001/elder/drug/create", {
    ELD_ID_NUMBER: payload[0],
    DRUG_NAME: payload[1],
    EXAM_DATE: new Date(),
  }).then(() => {
    alert("Drug Success");
  });
};

export const createFood = (payload) => {
  Axios.post("http://localhost:3001/elder/food/create", {
    ELD_ID_NUMBER: payload[0],
    FOOD_NAME: payload[1],
    EXAM_DATE: new Date(),
  }).then(() => {
    alert("Food Success");
  });
};

export const deleteDrug = (payload) => {
  Axios.delete(
    "http://localhost:3001/elder/drug/delete/" +
      payload[0] +
      "/drugname/" +
      payload[1]
  ).then(() => {
    alert("Delete Drug Success");
  });
};

export const deleteFood = (payload) => {
  Axios.delete(
    "http://localhost:3001/elder/food/delete/" +
      payload[0] +
      "/foodname/" +
      payload[1]
  ).then(() => {
    alert("Delete Food Success");
  });
};
