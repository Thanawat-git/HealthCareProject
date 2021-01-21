import Axios from "axios";
import {
  apiBase,
  CHART1_ERROR,
  CHART1_FETCHING,
  CHART1_GET_SUCCRESS,
  CHART2_ERROR,
  CHART2_FETCHING,
  CHART2_GET_SUCCRESS,
  CHART3_ERROR,
  CHART3_FETCHING,
  CHART3_GET_SUCCRESS,
  CHART4_ERROR,
  CHART4_FETCHING,
  CHART4_GET_SUCCRESS,
  CHART5_ERROR,
  CHART5_FETCHING,
  CHART5_GET_SUCCRESS,
} from "../constants";

export const getDataChart4 = community => {
  return async dispatch => {
    await dispatch({ type: CHART4_FETCHING })
    try {
      let data = await Axios.get(`${apiBase}/report01/04-keeper/${community}`)
      console.log("chart4 ", data.data);
      await dispatch({
        type: CHART4_GET_SUCCRESS,
        payload: data.data,
      })
    } catch (error) {
      dispatch({ type: CHART4_ERROR });
      console.log("error chart4 ", error)
    }
  }
}

export const getDataChart3 = () => {
  
}

export const getDataChart2 = community => {
  return async dispatch => {
      await dispatch({ type: CHART2_FETCHING });
      try {
          let data = await Axios.get(`${apiBase}/report01/02-count/${community}`)
          console.log("chart2 ", data.data);
          await dispatch({
              type: CHART2_GET_SUCCRESS,
              payload: data.data,
            });
      } catch (error) {
          dispatch({ type: CHART2_ERROR });
          console.log("error chart2 ", error);
      }
  }
}

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

export const getDataChart5 = (community) => {
  return async dispatch=>{
    await dispatch({ type: CHART5_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/05-livelihood/${community}`)
      console.log("chart 5 ", data.data)
      await dispatch({
        type: CHART5_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART5_ERROR });
      console.log("error chart5 ", error);
    }
  }
}
