import Axios from "axios";
import { apiBase, USERLOGIN } from "../constants";

export const clearAppointment = (fid) => {
  Axios.put(`${apiBase}/appointment/update/${fid}`, {
    APP_FLAG: true,
    adderRole: USERLOGIN.Role,
    updateBy: USERLOGIN.Fullname,
  });
}

export const createAppointment = async (payload, x) => {
  console.log("data sent to appoint ", payload);
  console.log("data sent to appoint2 ", x);
  let n = new Date();
  let dd = `${n.getFullYear()}-${n.getMonth() + 1}-${n.getDate()}`;
  console.log("date:  ", dd);
  let getFollow = await Axios.get(
    `${apiBase}/appointment/check/${payload[2]}/${dd}/${x}`
  );
  // getFollow !== null && console.log("getFollow ", getFollow.data);

  if (getFollow !== "Not have Appointment") { // ถ้าเจอ appointment ให้ update
    console.log("getFollow not found ", getFollow.data);
    await Axios.put(`${apiBase}/appointment/update/${getFollow.data.APP_ID}`, {
      APPOINT_DATE: payload[0],
      APP_NAME: payload[1],
      adderRole: USERLOGIN.Role,
      updateBy: USERLOGIN.Fullname,
    });
  } else { // ถ้าไม่เจอ appointment ให้สร้างใหม่
    console.log("getFollow ", getFollow.data);
    let res = await Axios.post(`${apiBase}/appointment/create`, {
      APPOINT_DATE: payload[0],
      APP_NAME: payload[1],
      APP_STATUS: null,
      adderRole: USERLOGIN.Role,
      updateBy: USERLOGIN.Fullname,
      ELD_ID_NUMBER: payload[2],
      ADDER_ID_NUMBER: USERLOGIN.Id,
      APP_FLAG: false,
    });
    try {
      console.log("Appointment Create Success", res.data);
      console.log(
        "Appointment id: ",
        res.data.APP_ID,
        "Appointment id: ",
        res.data.APP_NAME
      );
      await createExa2Waist(res.data.APP_ID);
      await createExa2Bmi(res.data.APP_ID);
      await createExa2Bp(res.data.APP_ID);
      await createExa2Fbs(res.data.APP_ID);
      switch (x) {
        case "หัวใจ":
          await createExa3Cardiovascular(res.data.APP_ID);
          break;
        case "ช่องปาก":
          await createExa5OralHealth(res.data.APP_ID);
          break;
      }
    } catch (error) {
      console.log("error ", error);
    }
  }
};

const createExa2Waist = async (fId) => {
  // รอบเอว
  await Axios.post(`${apiBase}/waist/create`, {
    WAI_WAIST: null,
    WAI_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Waist Create Success");
};

const createExa2Bmi = async (fId) => {
  // นน สส
  await Axios.post(`${apiBase}/bmi/create`, {
    BMI_WEIGHT: null,
    BMI_HEIGHT: null,
    BMI_BMI: null,
    BMI_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Bmi Create Success");
};

const createExa2Bp = async (fId) => {
  // ความดันโลหิต
  await Axios.post(`${apiBase}/bp/create`, {
    BP_PULSE: null,
    BP_BLO_SYS: null,
    BP_BLO_DIA: null,
    BP_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Bp Create Success");
};

const createExa2Fbs = async (fId) => {
  // น้ำตาล
  await Axios.post(`${apiBase}/fbs/create`, {
    FBS_FAST: null,
    FBS_FBS: null,
    FBS_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Fbs Create Success");
};

const createExa3Cardiovascular = async (fId) => {
  // หัวใจและหลอดเลือด
  await Axios.post(`${apiBase}/cardiovascular/create`, {
    CARDIO_3_1: null,
    CARDIO_3_1_COUNT: null,
    CARDIO_3_2: null,
    CARDIO_3_3: null,
    CARDIO_3_4: null,
    CARDIO_3_5: null,
    CARDIO_3_6: null,
    CARDIO_3_7: null,
    CARDIO_COUNT: null,
    CARDIO_COUNT_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Cardiovascular Create Success");
};

const createExa5OralHealth = async (fId) => {
  // ช่องปาก
  await Axios.post(`${apiBase}/oralHealth/create`, {
    ORAL_5_1: null,
    ORAL_5_2: null,
    ORAL_5_3: null,
    ORAL_5_4_1: null,
    ORAL_5_4_2: null,
    ORAL_5_4_3: null,
    ORAL_5_4_4: null,
    ORAL_5_4_5: null,
    ORAL_5_5: null,
    ORAL_5_6: null,
    ORAL_5_7: null,
    ORAL_5_8: null,
    ORAL_5_9: null,
    ORAL_5_10: null,
    ORAL_5_11: null,
    ORAL_5_12: null,
    ORAL_5_13: null,
    ORAL_COUNT: null,
    ORAL_RESULT: null,
    NF_ID: fId,
    updateBy: USERLOGIN.Fullname,
  });
  console.log("Follow Up Oral_Health Create Success ");
};

