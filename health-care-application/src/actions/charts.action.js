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
  CHART6_ERROR,
  CHART6_FETCHING,
  CHART6_GET_SUCCRESS,
  CHART7_ERROR,
  CHART7_FETCHING,
  CHART7_GET_SUCCRESS,
  CHART8_ERROR,
  CHART8_FETCHING,
  CHART8_GET_SUCCRESS,
  CHART9_ERROR,
  CHART9_FETCHING,
  CHART9_GET_SUCCRESS,
} from "../constants";

export const getDataChart4 = community => {
  return async dispatch => {
    await dispatch({ type: CHART4_FETCHING })
    try {
      let data = await Axios.get(`${apiBase}/report01/04-keeper/getAll`)
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

export const getDataChart3 = (community) => {
  return async dispatch => {
    await dispatch({ type: CHART3_FETCHING })
    
    try {
      let data = await Axios.get(`${apiBase}/report01/03-survey/getAll`)
      console.log("chart3 ", data.data);
      await dispatch({
        type: CHART3_GET_SUCCRESS,
        payload: data.data,
      })
    } catch (error) {
      dispatch({ type: CHART3_ERROR });
      console.log("error chart3 ", error)
    }
  }
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
      let data = await Axios.get(`${apiBase}/report01/05-livelihood`)
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

export const getDataChart6 = education => {
  return async dispatch=> {
    await dispatch({ type: CHART6_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/06-education`)
      console.log("chart 6 ", data.data)
      await dispatch({
        type: CHART6_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART6_ERROR });
      console.log("error chart6 ", error);
    }
  }
}
export const getDataChart7 = Treatment => {
  return async dispatch=> {
    await dispatch({ type: CHART7_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/07-treatment`)
      console.log("chart 7 ", data.data)
      await dispatch({
        type: CHART7_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART7_ERROR });
      console.log("error chart7 ", error);
    }
  }
}
export const getDataChart8 = Treatment => {
  return async dispatch=> {
    await dispatch({ type: CHART8_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/08-treatment`)
      console.log("chart 8 ", data.data)
      await dispatch({
        type: CHART8_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART8_ERROR });
      console.log("error chart8 ", error);
    }
  }
}

export const getDataChart9 = () => {
  return async dispatch=> {
    await dispatch({ type: CHART9_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/09-waist`)
      console.log("chart 9 ", data.data)
      await dispatch({
        type: CHART9_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART9_ERROR });
      console.log("error chart9 ", error);
    }
  }
}