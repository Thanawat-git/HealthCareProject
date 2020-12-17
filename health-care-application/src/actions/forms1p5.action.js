import { FORMS1P5_ADD_NEW } from "../constants";
import Axios from "axios";

export const setStateToAdd = (payload) => ({
  type: FORMS1P5_ADD_NEW,
  payload,
});

export const add = (payload) => {
  return (dispatch) => {
    dispatch(setStateToAdd(payload));
  };
};

export const createDrug = (payload) => {
  Axios.post("http://10.80.6.136/elder/drug/create", {
    ELD_ID_NUMBER: payload[0],
    DRUG_NAME: payload[1],
    EXAM_DATE: new Date(),
    updateBy: null
  }).then(() => {
    alert("Drug Success");
  });
};

export const createFood = (payload) => {
  Axios.post("http://10.80.6.136/elder/food/create", {
    ELD_ID_NUMBER: payload[0],
    FOOD_NAME: payload[1],
    EXAM_DATE: new Date(),
    updateBy: null
  }).then(() => {
    alert("Food Success");
  });
};

export const deleteDrug = (payload) => {
  Axios.delete(
    "http://10.80.6.136/elder/drug/delete/" +
      payload[0] +
      "/drugname/" +
      payload[1]
  ).then(() => {
    alert("Delete Drug Success");
  });
};

export const deleteFood = (payload) => {
  Axios.delete(
    "http://10.80.6.136/elder/food/delete/" +
      payload[0] +
      "/foodname/" +
      payload[1]
  ).then(() => {
    alert("Delete Food Success");
  });
};
