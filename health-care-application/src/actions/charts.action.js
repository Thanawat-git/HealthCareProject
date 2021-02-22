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
  CHART10_ERROR,
  CHART10_FETCHING,
  CHART10_GET_SUCCRESS,
  CHART11_ERROR,
  CHART11_FETCHING,
  CHART11_GET_SUCCRESS,
  CHART14_ERROR,
  CHART14_FETCHING,
  CHART14_GET_SUCCRESS,
  CHART14_DEF_FETCHING,
  CHART16_ERROR,
  CHART16_FETCHING,
  CHART16_GET_SUCCRESS,
  CHART17_ERROR,
  CHART17_FETCHING,
  CHART17_GET_SUCCRESS,
  CHART18_ERROR,
  CHART18_FETCHING,
  CHART18_GET_SUCCRESS,
  CHART18_DEF_FETCHING,
  CHART20_GET_SUCCRESS,
  CHART20_FETCHING,
  CHART20_ERROR,
  CHART20_DEF_FETCHING,
  CHART21_FETCHING,
  CHART21_GET_SUCCRESS,
  CHART21_DEF_FETCHING,
  CHART21_ERROR,
  CHART22_FETCHING,
  CHART22_GET_SUCCRESS,
  CHART22_DEF_FETCHING,
  CHART22_ERROR,
  CHART23_FETCHING,
  CHART23_GET_SUCCRESS,
  CHART23_DEF_FETCHING,
  CHART23_ERROR,
  CHART31_FETCHING,
  CHART31_ERROR,
  CHART31_GET_SUCCRESS,
  CHART31_DEF_FETCHING,
  CHART32_FETCHING,
  CHART32_ERROR,
  CHART32_GET_SUCCRESS,
  CHART32_DEF_FETCHING,
  CHART33_FETCHING,
  CHART33_ERROR,
  CHART33_GET_SUCCRESS,
  CHART33_DEF_FETCHING,
  CHART34_FETCHING,
  CHART34_ERROR,
  CHART34_GET_SUCCRESS,
  CHART34_DEF_FETCHING,
  CHART35_FETCHING,
  CHART35_ERROR,
  CHART35_GET_SUCCRESS,
  CHART35_DEF_FETCHING,
  CHART36_FETCHING,
  CHART36_ERROR,
  CHART36_GET_SUCCRESS,
  CHART36_DEF_FETCHING,
  CHART37_FETCHING,
  CHART37_ERROR,
  CHART37_GET_SUCCRESS,
  CHART37_DEF_FETCHING,
} from "../constants";

export const getDataChart4 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART4_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/04-keeper/getAll`);
      console.log("chart4 ", data.data);
      await dispatch({
        type: CHART4_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART4_ERROR });
      console.log("error chart4 ", error);
    }
  };
};

export const getDataChart3 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART3_FETCHING });

    try {
      let data = await Axios.get(`${apiBase}/report01/03-survey/getAll`);
      console.log("chart3 ", data.data);
      await dispatch({
        type: CHART3_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART3_ERROR });
      console.log("error chart3 ", error);
    }
  };
};

export const getDataChart2 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART2_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/02-count/${community}`);
      console.log("chart2 ", data.data);
      await dispatch({
        type: CHART2_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART2_ERROR });
      console.log("error chart2 ", error);
    }
  };
};

export const getDataChart1 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART1_FETCHING });
    let data;
    try {
      data = await Axios.get(`${apiBase}/report01/01-count`);
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
  return async (dispatch) => {
    await dispatch({ type: CHART5_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/05-livelihood`);
      console.log("chart 5 ", data.data);
      await dispatch({
        type: CHART5_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART5_ERROR });
      console.log("error chart5 ", error);
    }
  };
};

export const getDataChart6 = (education) => {
  return async (dispatch) => {
    await dispatch({ type: CHART6_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/06-education`);
      console.log("chart 6 ", data.data);
      await dispatch({
        type: CHART6_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART6_ERROR });
      console.log("error chart6 ", error);
    }
  };
};
export const getDataChart7 = (Treatment) => {
  return async (dispatch) => {
    await dispatch({ type: CHART7_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/07-treatment`);
      console.log("chart 7 ", data.data);
      await dispatch({
        type: CHART7_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART7_ERROR });
      console.log("error chart7 ", error);
    }
  };
};
export const getDataChart8 = (Treatment) => {
  return async (dispatch) => {
    await dispatch({ type: CHART8_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report01/08-treatment`);
      console.log("chart 8 ", data.data);
      await dispatch({
        type: CHART8_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART8_ERROR });
      console.log("error chart8 ", error);
    }
  };
};

export const getDataChart9 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART9_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/09-waist`);
      console.log("chart 9 ", data.data);
      await dispatch({
        type: CHART9_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART9_ERROR });
      console.log("error chart9 ", error);
    }
  };
};

export const getDataChart10 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART10_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/10-bmi`);
      console.log("chart 10 ", data.data);
      await dispatch({
        type: CHART10_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART10_ERROR });
      console.log("error chart10 ", error);
    }
  };
};

export const getDataChart11 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART11_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/11-bmi`);
      console.log("chart 11 ", data.data);
      await dispatch({
        type: CHART11_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART11_ERROR });
      console.log("error chart11 ", error);
    }
  };
};

export const getDataChart14 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART14_FETCHING });
    try {
      let data =
        community === "ทุกชุมชน"
          ? await Axios.get(`${apiBase}/report02/14-bmi`)
          : await Axios.get(`${apiBase}/report02/15-bmi/${community}`);
      community === "ทุกชุมชน"
        ? console.log("chart 14 ", data.data)
        : console.log("chart 15 ", data.data);
      await dispatch({
        type: CHART14_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART14_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART14_ERROR });
      community === "ทุกชุมชน"
        ? console.log("error chart14 ", error)
        : console.log("error chart15 ", error);
    }
  };
};

export const getDataChart16 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART16_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/16-congenital`);
      console.log("chart 16 ", data.data);
      await dispatch({
        type: CHART16_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART16_ERROR });
      console.log("error chart16 ", error);
    }
  };
};

export const getDataChart17 = () => {
  return async (dispatch) => {
    await dispatch({ type: CHART17_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/17-congenital`);
      console.log("chart 17 ", data.data);
      await dispatch({
        type: CHART17_GET_SUCCRESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({ type: CHART17_ERROR });
      console.log("error chart17 ", error);
    }
  };
};

export const getDataChart18 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART18_FETCHING });
    try {
      let data =
        community === "ทุกชุมชน"
          ? await Axios.get(
              `${apiBase}/report02/18-congenital/ใส่อะไรก็ได้แต่ต้องใส่เพราะไอ้บิ๊กไม่ยอมแก้`
            )
          : await Axios.get(`${apiBase}/report02/19-congenital/${community}`);
      community === "ทุกชุมชน"
        ? console.log("chart 18 ", data.data)
        : console.log("chart 19 ", data.data);
      await dispatch({
        type: CHART18_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART18_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART18_ERROR });
      community === "ทุกชุมชน"
        ? console.log("error chart18 ", error)
        : console.log("error chart19 ", error);
    }
  };
};

export const getDataChart20 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART20_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/20-fbs/${community}`);
      console.log("chart 20 ", data.data);
      await dispatch({
        type: CHART20_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART20_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART20_ERROR });
      console.log("error chart20 ", error);
    }
  };
};
export const getDataChart21 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART21_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report02/21-bp/${community}`);
      console.log("chart 21 ", data.data);
      await dispatch({
        type: CHART21_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART21_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART21_ERROR });
      console.log("error chart21 ", error);
    }
  };
};

export const getDataChart22 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART22_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report03/22-cardio`); //ไม่แน่ใจว่าพาทถูกมั้ยนะ
      console.log("chart 22 ", data.data);
      await dispatch({
        type: CHART22_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART22_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART22_ERROR });
      console.log("error chart22 ", error);
    }
  };
};

export const getDataChart23 = (community) => {
  return async (dispatch) => {
    await dispatch({ type: CHART23_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report03/23-cardio`);
      console.log("chart 23 ", data.data);
      await dispatch({
        type: CHART23_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART23_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART23_ERROR });
      console.log("error chart23 ", error);
    }
  };
};

export const getDataChart31 = (community) => {
  return async dispatch=> {
    await dispatch({ type: CHART31_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report05/31-oral/${community}`)
      console.log("chart 31 ", data.data)
      await dispatch({
        type: CHART31_GET_SUCCRESS,
        payload: data.data,
      });
      await dispatch({ type: CHART31_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART31_ERROR });
      console.log("error chart31 ", error);
    }
  }
};
export const getDataChart32 = () => {
  return async dispatch=> {
    await dispatch({ type: CHART32_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report06/32-abi`)
      console.log("chart 32 ", data.data)
      await dispatch({
        type: CHART32_GET_SUCCRESS,
        payload: data.data,
      });
      //await dispatch({ type: CHART32_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART32_ERROR });
      console.log("error chart32 ", error);
    }
  }
};
export const getDataChart33 = (community) => {
  return async dispatch=> {
    await dispatch({ type: CHART33_FETCHING });
    try {
      let data =
        community === "ทุกชุมชน"
          ? await Axios.get(
              `${apiBase}/report06/33-abi`
            )
          : await Axios.get(`${apiBase}/report06/34-abi/${community}`);
      community === "ทุกชุมชน"
        ? console.log("chart 33 ", data.data)
        : console.log("chart 34 ", data.data);
        await dispatch({
          type: CHART33_GET_SUCCRESS,
          payload: data.data,
        })
      await dispatch({ type: CHART33_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART33_ERROR });
      community === "ทุกชุมชน"
        ? console.log("error chart33 ", error)
        : console.log("error chart34 ", error);
    }
  }
};

export const getDataChart35 = () => {
  return async dispatch=> {
    await dispatch({ type: CHART35_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report07/35-alzheimer`)
      console.log("chart 35 ", data.data)
      await dispatch({
        type: CHART35_GET_SUCCRESS,
        payload: data.data,
      });
      // await dispatch({ type: CHART35_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART35_ERROR });
      console.log("error chart35 ", error);
    }
  }
};
export const getDataChart36 = (community) => {
  return async dispatch=> {
    await dispatch({ type: CHART36_FETCHING });
    try {
      let data = await Axios.get(`${apiBase}/report07/36-alzheimer`)
      console.log("chart 36 ", data.data)
      await dispatch({
        type: CHART36_GET_SUCCRESS,
        payload: data.data,
      });
      //await dispatch({ type: CHART36_DEF_FETCHING });
    } catch (error) {
      dispatch({ type: CHART36_ERROR });
      console.log("error chart36 ", error);
    }
  }
};
export const getDataChart37 = (community) => {
  // return async dispatch=> {
  //   await dispatch({ type: CHART23_FETCHING });
  //   try {
  //     let data = await Axios.get(`${apiBase}/report03/23-cardio`)
  //     console.log("chart 23 ", data.data)
  //     await dispatch({
  //       type: CHART23_GET_SUCCRESS,
  //       payload: data.data,
  //     });
  //     await dispatch({ type: CHART23_DEF_FETCHING });
  //   } catch (error) {
  //     dispatch({ type: CHART23_ERROR });
  //     console.log("error chart23 ", error);
  //   }
  // }
};
