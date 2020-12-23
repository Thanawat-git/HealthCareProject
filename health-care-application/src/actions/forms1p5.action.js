import { FORMS1P5_ADD_NEW , apiEld } from "../constants";
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

export const createDrug = async (payload) => {
  await  Axios.post(`${apiEld}/drug/create`, {
    ELD_ID_NUMBER: payload[0],
    DRUG_NAME: payload[1],
    EXAM_DATE: new Date(),
    updateBy: null
  })
  alert("drug Success");
};

export const createFood = async (payload) => {
  await  Axios.post(`${apiEld}/food/create`, {
    ELD_ID_NUMBER: payload[0],
    FOOD_NAME: payload[1],
    EXAM_DATE: new Date(),
    updateBy: null
  })
  .then(() => {
    alert("Food Success");
  });
};

export const deleteDrug = async (payload) => {
  await   Axios.delete(
    `${apiEld}/drug/delete/${payload[0]}/drugname/${payload[1]}`
  )

    alert("Delete Drug Success");
};

export const deleteFood = async (payload) => {
  await  Axios.delete(
    `${apiEld}/food/delete/${payload[0]}/foodname/${payload[1]}`
  )

    alert("Delete Food Success");

};
