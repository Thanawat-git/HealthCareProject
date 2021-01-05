import Axios from "axios";
import {
  apiBase,
  apiEld,
  CREATE_NEW_FORMS89Q,
  CREATE_NEW_FORMS10,
  CREATE_NEW_FORMS2,
  CREATE_NEW_FORMS3,
  CREATE_NEW_FORMS4,
  CREATE_NEW_FORMS5,
  CREATE_NEW_FORMS6,
  CREATE_NEW_FORMS6T,
  CREATE_NEW_FORMS7,
  CREATE_NEW_FORMS7M,
  CREATE_NEW_FORMS8,
  CREATE_NEW_FORMS9,
  FORMS1P4_ADD_NEW,
  GET_COLLECT_S10,
  GET_COLLECT_S2,
  GET_COLLECT_S3,
  GET_COLLECT_S4,
  GET_COLLECT_S5,
  GET_COLLECT_S6,
  GET_COLLECT_S7,
  GET_COLLECT_S8,
  GET_COLLECT_S9,
} from "../constants";

export const getCollect = (visId) => {
  return (dispatch) => {
    return (
      Axios.get(`${apiEld}/examsummary/correct/${visId}`)
        // return Axios.get(`${apiEld}/examsummary/correct/${visId}`)
        .then((res) => {
          if (
            res.data.waist_correct &&
            res.data.bmi_correct &&
            res.data.bp_correct &&
            res.data.fbs_correct
          ) {
            dispatch({
              type: GET_COLLECT_S2,
              payload: true,
            });
          }
          console.log("visId in api ", visId);
          dispatch({ type: GET_COLLECT_S3, payload: res.data.cardio_correct });
          dispatch({ type: GET_COLLECT_S4, payload: res.data.eye_correct });
          dispatch({ type: GET_COLLECT_S5, payload: res.data.oral_correct });
          dispatch({ type: GET_COLLECT_S6, payload: res.data.abi_correct });
          dispatch({ type: GET_COLLECT_S7, payload: res.data.alz_correct });
          dispatch({ type: GET_COLLECT_S8, payload: res.data.dep_correct });
          dispatch({ type: GET_COLLECT_S9, payload: res.data.bone_correct });
          dispatch({ type: GET_COLLECT_S10, payload: res.data.uri_correct });
        })
        .catch((error) => {
          console.log("visId in error ", visId);
          console.log("err ", error);
        })
    );
  };
};

export const getDataSec2 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/elder/examsummary/exam2/${visId}`)
      .then((res) => {
        console.log("res.data.bmi_bmi ", res.data);
        const data = [
          res.data.waist_waist,
          res.data.bmi_weight,
          res.data.bmi_height,
          res.data.bp_pulse,
          res.data.bp_bio_sys,
          res.data.bp_bio_dia,
          res.data.fbs_fbs,
          res.data.waist_result,
          res.data.bmi_result,
          res.data.bp_result,
          res.data.fbs_result,  
          res.data.fbs_correct,
          res.data.fbs_fast,
        ];
        dispatch({
          type: "FETCHING2",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS2,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec3 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/cardiovascular/findOne/${visId}`)
      .then((res) => {
        console.log("res.data3 ", res.data);
        const data = [
          res.data.CARDIO_3_1,
          res.data.CARDIO_3_2,
          res.data.CARDIO_3_3,
          res.data.CARDIO_3_4,
          res.data.CARDIO_3_5,
          res.data.CARDIO_3_6,
          res.data.CARDIO_3_7,
          res.data.CARDIO_COUNT_RESULT,
          res.data.CARDIO_CORRECT_FORM,
          res.data.CARDIO_COUNT,
        ];
        dispatch({
          type: "FETCHING3",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS3,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec4 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/eye/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 4 ", res.data);
        const data = [
          res.data.EYE_4_1,
          res.data.EYE_4_2,
          res.data.EYE_4_3,
          res.data.EYE_4_4,
          res.data.EYE_4_5,
          res.data.EYE_COUNT,
          res.data.EYE_RESULT,
          res.data.EYE_CORRECT_FORM,
        ];
        dispatch({
          type: "FETCHING4",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS4,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec5 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/oralHealth/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 5 ", res.data);
        const data = [
          res.data.ORAL_5_1,
          res.data.ORAL_5_1_1,
          res.data.ORAL_5_2,
          res.data.ORAL_5_3,
          res.data.ORAL_5_4_1,
          res.data.ORAL_5_4_2,
          res.data.ORAL_5_4_3,
          res.data.ORAL_5_4_4,
          res.data.ORAL_5_4_5,
          res.data.ORAL_5_5,
          res.data.ORAL_5_6,
          res.data.ORAL_5_7,
          res.data.ORAL_5_8,
          res.data.ORAL_5_9,
          res.data.ORAL_5_10,
          res.data.ORAL_5_11,
          res.data.ORAL_5_12,
          res.data.ORAL_5_13,
          res.data.ORAL_COUNT,
          res.data.ORAL_RESULT,
          res.data.ORAL_CORRECT_FORM,
        ];
        dispatch({
          type: "FETCHING5",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS5,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec6 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/abilityInLife/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 6 ", res.data);
        const data = [
          res.data.ABI_6_1,
          res.data.ABI_6_2,
          res.data.ABI_6_3,
          res.data.ABI_6_4,
          res.data.ABI_6_5,
          res.data.ABI_6_6,
          res.data.ABI_6_7,
          res.data.ABI_6_8,
          res.data.ABI_6_9,
          res.data.ABI_6_10,
          res.data.ABI_SUM_POINT,
          res.data.ABI_GROUP,
          res.data.ABI_CORRECT_FORM,
        ];
        dispatch({
          type: "FETCHING6",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS6,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec7 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/alzheimer/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 7 ", res.data);
        const data = [
          res.data.ALZ_7_1_RESULT_AGE,
          res.data.ALZ_7_2_RESULT_TIME,
          res.data.ALZ_7_3_RESULT_ADDR,
          res.data.ALZ_7_4_RESULT_YEAR,
          res.data.ALZ_7_5_RESULT_PLACE,
          res.data.ALZ_7_6_RESULT_WHOM,
          res.data.ALZ_7_7_RESULT_BIRTHDATE,
          res.data.ALZ_7_8_RESULT_OCT14,
          res.data.ALZ_7_9_RESULT_KING,
          res.data.ALZ_7_10_RESULT_COUNTDOWN,
          res.data.ALZ_CORRECT_FORM,
          res.data.ALZ_RESULT,
          res.data.ALZ_7_1_EL_AGE,
          res.data.ALZ_7_2_EL_TIME,
          res.data.ALZ_7_3_EL_ADDR,
          res.data.ALZ_7_4_EL_YEAR,
          res.data.ALZ_7_5_EL_PLACE,
          res.data.ALZ_7_6_EL_WHOM,
          res.data.ALZ_7_7_EL_BIRTHDATE,
          res.data.ALZ_7_8_EL_OCT14,
          res.data.ALZ_7_9_EL_KING,
          res.data.ALZ_7_10_EL_COUNTDOWN, 
        ];
        dispatch({
          type: "FETCHING7",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS7,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec8 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/depressionScreening/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 8 ", res.data);
        const data = [
          res.data.DEP_DEPRESSED,
          res.data.DEP_NOT_ENJOYING,
          res.data.DEP_CORRECT_FORM,
          res.data.DEP_RESULT,
        ];
        dispatch({
          type: "FETCHING8",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS8,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};

export const getDataSec9 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/boneMuscle/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 9 ", res.data);
        const data = [
          res.data.BONE_9_1,
          res.data.BONE_9_2,
          res.data.BONE_9_3,
          res.data.BONE_9_4,
          res.data.BONE_9_5,
          res.data.BONE_9_6,
          res.data.BONE_9_7,
          res.data.BONE_9_8,
          res.data.BONE_9_9,
          res.data.BONE_9_10,
          res.data.BONE_9_11,
          res.data.BONE_9_12,
          res.data.BONE_RESULT,
          res.data.BONE_WALK,
          res.data.BONE_WALK_INFO,
          res.data.BONE_PHY_FIT_MINUTE,
          res.data.BONE_PHY_FIT_SECOND,
          res.data.BONE_PHY_RESULT,
          res.data.BONE_CORRECT_FORM,
        ];
        dispatch({
          type: "FETCHING9",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS9,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
export const getDataSec10 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/urination/findOne/${visId}`)
      .then((res) => {
        console.log("res.data 10", res.data);
        const data = [
          res.data.URI_10_1,
          res.data.URI_RESULT,
          res.data.URI_CORRECT_FORM,
        ];
        dispatch({
          type: "FETCHING10",
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS10,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};
//http://localhost:3001/elder/information/searchOneEdu/1103702726761
export const getEducate = (peopleId) => {
  //console.log("---------------------------get-----------")
  return (dispatch) => {
    return Axios.get(`${apiBase}/elder/information/searchOneEdu/${peopleId}`)
      .then((res) => {
        dispatch({
          type: "SET_EDUCATION",
          payload: res.data.ELD_EDU,
        });
        console.log(res.data.ELD_EDU);
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};

