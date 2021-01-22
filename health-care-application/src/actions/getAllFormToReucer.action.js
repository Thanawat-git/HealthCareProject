import Axios from "axios";
import {
  apiBase,
  apiEld,
  // CREATE_NEW_FORMS89Q,
  CREATE_NEW_FORMS10,
  CREATE_NEW_FORMS2,
  CREATE_NEW_FORMS3,
  CREATE_NEW_FORMS4,
  CREATE_NEW_FORMS5,
  CREATE_NEW_FORMS6,
  CREATE_NEW_FORMS6T,
  // CREATE_NEW_FORMS6T,
  CREATE_NEW_FORMS7,
  CREATE_NEW_FORMS7M,
  //CREATE_NEW_FORMS7M,
  CREATE_NEW_FORMS8,
  CREATE_NEW_FORMS89Q,
  CREATE_NEW_FORMS9,
  CREATE_NEW_FORMS92,
  FORMS1P6_ADD_NEW,
  // FORMS1P4_ADD_NEW,
  GET_COLLECT_S10,
  GET_COLLECT_S2,
  GET_COLLECT_S3,
  GET_COLLECT_S4,
  GET_COLLECT_S5,
  GET_COLLECT_S6,
  GET_COLLECT_S7,
  GET_COLLECT_S8,
  GET_COLLECT_S9,
  GET_RESULT_S10,
  GET_RESULT_S2,
  GET_RESULT_S3,
  GET_RESULT_S4,
  GET_RESULT_S5,
  GET_RESULT_S6,
  GET_RESULT_S7,
  GET_RESULT_S7M,
  GET_RESULT_S8,
  GET_RESULT_S89Q,
  GET_RESULT_S9,
  GET_RESULT_S92,
  GET_RESULT_TAI,
  SELECT_SECTION,
  SET_89Q_TO_DEFAULT,
  SET_MMSE_TO_DEFAULT,
  SET_SEC10_TO_DEFAULT,
  SET_SEC2_TO_DEFAULT,
  SET_SEC3_TO_DEFAULT,
  SET_SEC4_TO_DEFAULT,
  SET_SEC5_TO_DEFAULT,
  SET_SEC6_TO_DEFAULT,
  SET_SEC7_TO_DEFAULT,
  SET_SEC8_TO_DEFAULT,
  SET_SEC92_TO_DEFAULT,
  SET_SEC9_TO_DEFAULT,
  SET_TAI_TO_DEFAULT,
} from "../constants";

export const setDataToDefaultForAllSection = () => {
  return (dispatch) => {
    dispatch({ type: SET_SEC2_TO_DEFAULT });
    dispatch({ type: SET_SEC3_TO_DEFAULT });
    dispatch({ type: SET_SEC4_TO_DEFAULT });
    dispatch({ type: SET_SEC5_TO_DEFAULT });
    dispatch({ type: SET_SEC6_TO_DEFAULT });
    dispatch({ type: SET_SEC7_TO_DEFAULT });
    dispatch({ type: SET_SEC8_TO_DEFAULT });
    dispatch({ type: SET_SEC9_TO_DEFAULT });
    dispatch({ type: SET_SEC92_TO_DEFAULT });
    dispatch({ type: SET_SEC10_TO_DEFAULT });
    dispatch({ type: SET_TAI_TO_DEFAULT });
    dispatch({ type: SET_MMSE_TO_DEFAULT });
    dispatch({ type: SET_89Q_TO_DEFAULT });
  };
};

export const getDisease = (eldId) => {
  return (dispatch) => {
    return Axios.get(`${apiEld}/disease/findOne/${eldId}`).then((res) => {
      let disease = [];
      if (res.data !== null) {
        res.data.DISEASE.map((value) => {
          return disease.push(value.DIS_NAME);
        });
      }
      console.log("getDisease Arr ", disease);
      dispatch({
        type: FORMS1P6_ADD_NEW,
        payload: [disease],
      });
    });
  };
};

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
          } else {
            dispatch({
              type: GET_COLLECT_S2,
              payload: false,
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

export const resetCollectFromReducer = () => {
  return (dispatch) => {
    dispatch({ type: GET_COLLECT_S2, payload: false });
    dispatch({ type: GET_COLLECT_S3, payload: false });
    dispatch({ type: GET_COLLECT_S4, payload: false });
    dispatch({ type: GET_COLLECT_S5, payload: false });
    dispatch({ type: GET_COLLECT_S6, payload: false });
    dispatch({ type: GET_COLLECT_S7, payload: false });
    dispatch({ type: GET_COLLECT_S8, payload: false });
    dispatch({ type: GET_COLLECT_S9, payload: false });
    dispatch({ type: GET_COLLECT_S10, payload: false });
  };
};

export const getAllResult = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiEld}/examsummary/${visId}`)
      .then((res) => {
        console.log("res.data result in getAllresult ", res.data);
        let resultsec2 = [
          res.data.WAI_RESULT,
          res.data.BMI_RESULT,
          res.data.BP_RESULT,
          res.data.FBS_RESULT,
        ];
        let resultsec9 = [res.data.BONE_RESULT, res.data.BONE_PHY_RESULT];
        let resultsec92 = [
          res.data.OST_1_RESULT,
          res.data.OST_2_RESULT,
          res.data.OST_3_RESULT,
        ];
        dispatch({ type: GET_RESULT_S2, payload: resultsec2 });
        dispatch({
          type: GET_RESULT_S3,
          payload: res.data.CARDIO_COUNT_RESULT,
        }); //หัวใจและหลอดเลือด
        dispatch({ type: GET_RESULT_S4, payload: res.data.EYE_RESULT }); //สุขภาพตา
        dispatch({ type: GET_RESULT_S5, payload: res.data.ORAL_RESULT }); //ช่องปาก
        dispatch({ type: GET_RESULT_S6, payload: res.data.ABI_GROUP }); //การทำกิจวัตร => ชื่อ group
        dispatch({ type: GET_RESULT_TAI, payload: res.data.TAI_GROUP }); //TAI
        dispatch({ type: GET_RESULT_S7, payload: res.data.ALZ_RESULT }); //สมองเสื่อม
        dispatch({ type: GET_RESULT_S7M, payload: res.data.MMSE_RESULT }); //MMSE
        dispatch({ type: GET_RESULT_S8, payload: res.data.DEP_RESULT }); //ซึ่มเศร้า
        dispatch({ type: GET_RESULT_S89Q, payload: res.data.DEP_9Q_RESULT }); //89q
        dispatch({ type: GET_RESULT_S9, payload: resultsec9 }); //กระดูก 2 result => 9r1[0], 9r2[1]
        dispatch({ type: GET_RESULT_S92, payload: resultsec92 }); //กระดูก 92 3 result
        dispatch({ type: GET_RESULT_S10, payload: res.data.URI_RESULT }); //ปัสสาวะ
      })
      .catch((error) => {
        console.log("Err in get all result ", error);
      });
  };
};

export const resetDateAllForm = () => {
  return (dispatch) => {
    let resultsec2 = [null, null, null, null];
    let resultsec9 = [null, null];
    let resultsec92 = [null, null, null];
    dispatch({ type: GET_RESULT_S2, payload: resultsec2 });
    dispatch({ type: GET_RESULT_S3, payload: null }); //หัวใจและหลอดเลือด
    dispatch({ type: GET_RESULT_S4, payload: null }); //สุขภาพตา
    dispatch({ type: GET_RESULT_S5, payload: null }); //ช่องปาก
    dispatch({ type: GET_RESULT_S6, payload: null }); //การทำกิจวัตร => ชื่อ group
    dispatch({ type: GET_RESULT_TAI, payload: null }); //TAI
    dispatch({ type: GET_RESULT_S7, payload: null }); //สมองเสื่อม
    dispatch({ type: GET_RESULT_S7M, payload: null }); //MMSE
    dispatch({ type: GET_RESULT_S8, payload: null }); //ซึ่มเศร้า
    dispatch({ type: GET_RESULT_S89Q, payload: null }); //89q
    dispatch({ type: GET_RESULT_S9, payload: resultsec9 }); //กระดูก 2 result => 9r1[0], 9r2[1]
    dispatch({ type: GET_RESULT_S92, payload: resultsec92 }); //กระดูก 92 3 result
    dispatch({ type: GET_RESULT_S10, payload: null }); //ปัสสาวะ
    dispatch({ type: SET_MMSE_TO_DEFAULT });
    dispatch({ type: SET_TAI_TO_DEFAULT });
    dispatch({ type: SET_89Q_TO_DEFAULT });
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
        });
        dispatch({
          type: CREATE_NEW_FORMS2,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec2",
        // });
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
        });
        dispatch({
          type: CREATE_NEW_FORMS3,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec3",
        // });
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
        });
        dispatch({
          type: CREATE_NEW_FORMS4,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec4",
        // });
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
          res.data.ORAL_RESULT,
          res.data.ORAL_CORRECT_FORM,
          res.data.ORAL_COUNT,
        ];
        dispatch({
          type: "FETCHING5",
        });
        dispatch({
          type: CREATE_NEW_FORMS5,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec5",
        // });
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
        });
        dispatch({
          type: CREATE_NEW_FORMS6,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec6",
        // });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};

export const getDataTai = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/TAI/findOne/${visId}`)
      .then((res) => {
        console.log("res.data tai ", res.data);
        const data = [
          res.data.TAI_IMMOBILIZE+"",
          res.data.TAI_MENTAL+"",
          res.data.TAI_TOILET+"",
          res.data.TAI_FEED+"",
          res.data.TAI_GROUP,
          res.data.TAI_CORRECT_FORM
        ];
        dispatch({
          type: "FETCHING6T",
        });
        dispatch({
          type: CREATE_NEW_FORMS6T,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec6",
        // });
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
        });
        dispatch({
          type: CREATE_NEW_FORMS7,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec7",
        // });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};

export const getDatammse = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/MMSE/findOne/${visId}`)
      .then((res) => {
        console.log("res.data mmse ", res.data);
        const data = [
          res.data.MMSE_1_1,
          res.data.MMSE_1_1_POINT + "",
          res.data.MMSE_1_2,
          res.data.MMSE_1_2_POINT + "",
          res.data.MMSE_1_3,
          res.data.MMSE_1_3_POINT + "",
          res.data.MMSE_1_4,
          res.data.MMSE_1_4_POINT + "",
          res.data.MMSE_1_5,
          res.data.MMSE_1_5_POINT + "",
          res.data.MMSE_2_1,
          res.data.MMSE_2_1_POINT + "",
          res.data.MMSE_2_2,
          res.data.MMSE_2_2_POINT + "",
          res.data.MMSE_2_3,
          res.data.MMSE_2_3_POINT + "",
          res.data.MMSE_2_4,
          res.data.MMSE_2_4_POINT + "",
          res.data.MMSE_2_5,
          res.data.MMSE_2_5_POINT + "",
          res.data.MMSE_3_1_POINT,
          res.data.MMSE_3_2_POINT,
          res.data.MMSE_3_3_POINT,
          res.data.MMSE_4_1_POINT,
          res.data.MMSE_4_2_POINT,
          res.data.MMSE_4_3_POINT,
          res.data.MMSE_4_4_POINT,
          res.data.MMSE_4_5_POINT,
          res.data.MMSE_5_1_POINT,
          res.data.MMSE_5_2_POINT,
          res.data.MMSE_5_3_POINT,
          res.data.MMSE_6_1_POINT + "",
          res.data.MMSE_6_2_POINT + "",
          res.data.MMSE_7_POINT + "",
          res.data.MMSE_8_1_POINT,
          res.data.MMSE_8_2_POINT,
          res.data.MMSE_8_3_POINT,
          res.data.MMSE_9_POINT,
          res.data.MMSE_10,
          res.data.MMSE_10_POINT,
          res.data.MMSE_11_POINT + "",
          res.data.MMSE_CORRECT_FORM,
          res.data.MMSE_RESULT,
          res.data.MMSE_2_CHECK_LOCATION,
          res.data.MMSE_4_CHECK_CALCULATE
        ];
        dispatch({
          type: "FETCHING7M",
        });
        dispatch({
          type: CREATE_NEW_FORMS7M,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec7",
        // });
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
        const data2 =[
          res.data.DEP_8_1+"",
          res.data.DEP_8_2+"",
          res.data.DEP_8_3+"",
          res.data.DEP_8_4+"",
          res.data.DEP_8_5+"",
          res.data.DEP_8_6+"",
          res.data.DEP_8_7+"",
          res.data.DEP_8_8+"",
          res.data.DEP_8_9+"",
          res.data.DEP_9Q_RESULT,
          res.data.DEP_CORRECT_FORM,
        ]

        dispatch({
          type: "FETCHING8",
        });
        dispatch({
          type: CREATE_NEW_FORMS8,
          payload: data,
        });
        dispatch({
          type: CREATE_NEW_FORMS89Q,
          payload:data2
        })
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec8",
        // });
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
          res.data.BONE_CORRECT_FORM,
          res.data.BONE_RESULT,
          res.data.BONE_WALK,
          res.data.BONE_WALK_INFO,
          res.data.BONE_PHY_FIT_MINUTE,
          res.data.BONE_PHY_FIT_SECOND,
          res.data.BONE_PHY_RESULT,
        ];
        dispatch({
          type: "FETCHING9",
        });
        dispatch({
          type: CREATE_NEW_FORMS9,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec9",
        // });
      })
      .catch((error) => {
        console.log("err ", error);
      });
  };
};

export const getDataSec92 = (visId) => {
  return (dispatch) => {
    return Axios.get(`${apiBase}/osteoarthritis/findOne/${visId}`).then(
      (res) => {
        console.log("res.data 9-2 ", res.data);
        const data = [
          parseInt(res.data.OST_2_1_R),
          parseInt(res.data.OST_2_2_R),
          parseInt(res.data.OST_2_3_R),
          parseInt(res.data.OST_2_4_R),
          parseInt(res.data.OST_2_5_R),
          parseInt(res.data.OST_2_1_L),
          parseInt(res.data.OST_2_2_L),
          parseInt(res.data.OST_2_3_L),
          parseInt(res.data.OST_2_4_L),
          parseInt(res.data.OST_2_5_L),
          parseInt(res.data.OST_2_1_N),
          parseInt(res.data.OST_2_2_N),
          parseInt(res.data.OST_2_3_N),
          parseInt(res.data.OST_2_4_N),
          parseInt(res.data.OST_2_5_N), //2
          res.data.OST_1_KNEE_PAIN,
          res.data.OST_1_LVL_PAIN + "", //1
          res.data.OST_3_1 + "",
          res.data.OST_3_2 + "",
          res.data.OST_3_3 + "",
          res.data.OST_3_4 + "",
          res.data.OST_3_5 + "",
          res.data.OST_3_6 + "",
          res.data.OST_3_7 + "",
          res.data.OST_3_8 + "",
          res.data.OST_3_9 + "",
          res.data.OST_3_10 + "",
          res.data.OST_3_11 + "",
          res.data.OST_3_12 + "", //3
          res.data.OST_CORRECT_FORM,
          res.data.OST_1_RESULT,
          res.data.OST_2_RESULT,
          res.data.OST_3_RESULT,
          res.data.OST_SUM_POINT,
        ];
        dispatch({
          type: "FETCHING92",
        });
        dispatch({
          type: CREATE_NEW_FORMS92,
          payload: data,
        });
      }
    );
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
        });
        dispatch({
          type: CREATE_NEW_FORMS10,
          payload: data,
        });
        // dispatch({
        //   type: SELECT_SECTION,
        //   payload: "sec10",
        // });
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
