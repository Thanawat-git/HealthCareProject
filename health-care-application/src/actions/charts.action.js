import Axios from "axios";
import {
  apiBase,
  CHART1_ERROR,
  CHART1_FETCHING,
  CHART1_GET_SUCCRESS,
  CHART2_ERROR,
  CHART2_FETCHING,
  CHART2_GET_SUCCRESS,
} from "../constants";

export const getDataChart1 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART1_FETCHING });
    let data
    try {
        data = await Axios.get(`${apiBase}/report01/01-count`)
        await dispatch({
            type: CHART1_GET_SUCCRESS,
            payload: data.data,
          });
    } catch (error) {
        dispatch({ type: CHART1_ERROR });
        console.log("error chart1 ", error);
    }
  };
};

export const getDataChart2 = community => {
    return async dispatch => {
        await dispatch({ type: CHART2_FETCHING });
        try {
            let data = await Axios.get(`${apiBase}/report02/02-count/${community}`)
            console.log("chart2 ", data.data);
            await dispatch({
                type: CHART2_GET_SUCCRESS,
                payload: data.data,
              });
        } catch (error) {
            dispatch({ type: CHART2_ERROR });
            console.log("error chart1 ", error);
        }
    }
}